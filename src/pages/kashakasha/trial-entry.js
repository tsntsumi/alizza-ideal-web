// i18next-extract-mark-ns-start kashakasha
import React, { useState, useEffect } from "react"
import { graphql, navigate } from "gatsby"
import queryString from "query-string"
import Airtable from "airtable"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import moment from "moment"
import "moment/locale/ja"
import { GlobalStyle } from "../../components/layout/styles"
import Seo from "../../components/seo"
import {
  ApplicationForm,
  InputHidden,
  InputRadio,
  Submit,
  StatusMessage,
} from "../../components/applicationform"

export const Head = ({ location, params, data, pageContext }) => {
  return (
    <Seo
      title={pageContext.title}
      pathname={location.pathname}
      lang={pageContext.language}
    />
  )
}

const KashaKashaTrialEntry = ({ data, pageContext, location }) => {
  const { t, language } = useI18next()
  const formId = "kashakasha-trial"
  pageContext.title = t(
    "Googleマップ集客術　Googleマップアカウント開設個別体験会登録フォーム"
  )
  const params = queryString.parse(location.search)
  const lineid = params["name"]

  return (
    <>
      <GlobalStyle />
      <ApplicationForm
        id={formId}
        tag="kashakasha-trial"
        doSubmit={submitToAirtable}
      >
        <InputHidden name="email" value={lineid} />
        <h1 style={{ padding: "0.75em 0em" }}>
          <span
            style={{
              color: "yellow",
              whiteSpace: "nowrap",
              fontWeight: 900,
              fontSize: "1.6em",
            }}
          >
            <Trans>Googleマップ集客術</Trans>
          </span>
          <br />
          <span
            style={{ color: "yellow", whiteSpace: "nowrap", fontSize: "0.8em" }}
          >
            <Trans>Googleマップアカウント開設</Trans>
          </span>
          <span
            style={{ color: "yellow", whiteSpace: "nowrap", fontSize: "0.8em" }}
          >
            <Trans>個別体験会登録フォーム</Trans>
          </span>
        </h1>
        <SelectSlots language={language} />
        <div className="container">
          <center>
            <Submit form={formId} id="submit">
              <Trans>選択した日時で個別体験会に参加する</Trans>
            </Submit>
          </center>
        </div>
      </ApplicationForm>
    </>
  )
}

const SelectSlots = ({ language }) => {
  const apiKey = process.env.GATSBY_AIRTABLE_API_KEY
  const baseId = process.env.GATSBY_AIRTABLE_DB

  const base = new Airtable({
    apiKey: apiKey,
  }).base(baseId)

  const [slots, setSlots] = useState([])
  const [loading, setLoading] = useState("開催日時を読み込み中...")

  useEffect(() => {
    if (slots.length > 0) {
      return
    }
    base("Slots")
      .select({
        fields: [
          "SlotStartTime",
          "SlotEndTime",
          "SlotRecordId",
          "Client",
          "SlotIsAvailable",
        ],
        filterByFormula: "AND({SlotIsAvailable}, NOT({Client}))",
        maxRecords: 31,
        pageSize: 31,
        view: "Grid view",
        userLocale: language,
        sort: [{ field: "SlotStartTime", direction: "asc" }],
      })
      .firstPage((err, records) => {
        if (err) {
          return <>{err}</>
        }
        const s = []
        records.forEach((r, i) => {
          if (r.get("Client")) {
            return
          }
          s.push({
            start: r.get("SlotStartTime"),
            end: r.get("SlotEndTime"),
            id: r.get("SlotRecordId"),
            client: r.get("Client"),
            available: r.get("SlotIsAvailable"),
          })
        })
        setSlots(s)
        setLoading("")
      })
  }, [slots, setSlots, setLoading, base, language])

  return (
    <div className="container">
      {<span>{loading}</span>}
      {slots.map((s, i) => (
        <Slot slot={s} index={i} key={`slot-key-${i}`} />
      ))}
      <StatusMessage name="slot" />
    </div>
  )
}

const submitToAirtable = async (inputs, dispatch) => {
  const apiKey = process.env.GATSBY_AIRTABLE_API_KEY
  const baseId = process.env.GATSBY_AIRTABLE_DB

  const base = new Airtable({
    apiKey: apiKey,
  }).base(baseId)

  const valueOf = name => inputs?.find(i => i.name === name)?.value
  const tableName = "Clients"
  const clientsFields = {
    Name: valueOf("name") || valueOf("email"),
    Email: valueOf("email"),
    Tag: valueOf("tag"),
    Language: valueOf("language"),
    Slot: [valueOf("slot")],
  }

  base(tableName).create(
    [
      {
        fields: clientsFields,
      },
    ],
    (err, records) => {
      if (err) {
        console.error(tableName, "create error")
        return {
          isError: true,
          internal: err,
          context: apiKey + " :: " + baseId + " :: " + tableName,
        }
      }

      const slotId = valueOf("slot")
      base("Slots").update(
        [
          {
            id: slotId,
            fields: {
              SlotIsAvailable: false,
            },
          },
        ],
        (err, records) => {
          if (err) {
            console.error("Slot update error", slotId, err)
            return {
              isError: true,
              internal: err,
              context: "Slots " + slotId,
            }
          }
          navigate("/kashakasha/thanks-trial", {
            state: {
              email: valueOf("email"),
              slot: valueOf("slot"),
              start: records[0].fields.SlotStartTime,
            },
            replace: true,
          })
        }
      )
    }
  )

  return { isError: false, internal: null, context: "" }
}

const Slot = ({ slot, loading, index }) => {
  const { t } = useI18next()
  moment.locale("ja")
  const today = moment()
  const starttime = moment(slot?.start)
  if (starttime.diff(today, "days") <= 0) {
    return <></>
  }
  if (starttime.diff(today, "days") > 7) {
    return <></>
  }
  const endtime = moment(slot?.end)
  const start = starttime.format("L (dd) LT")
  const end = endtime.format("LT")
  const recordId = slot?.id || index
  return (
    <InputRadio
      name="slot"
      value={recordId}
      index={index}
      key={`slot-radio-${index}`}
      label={`${start} - ${end}`}
      validator={value => (value ? "" : t("参加する日時を選択して下さい"))}
    />
  )
}

export const query = graphql`
  query kashakashaTrialEntryQuery($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
        ns: { in: ["common", "kashakasha"] }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default KashaKashaTrialEntry
