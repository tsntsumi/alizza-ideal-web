// i18next-extract-mark-ns-start translation
import * as React from "react"
import { useState } from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import { FormStyles, FieldStyles } from "./styles"
import { navigate } from "gatsby"
import Airtable from "airtable"
import { MdMail as Mailbox } from "react-icons/md"
import { Button } from "../button"
import { useSiteMetadata } from "../hooks"

const airtableConfig = {
  airtableApiKey: "",
  airtableBaseId: "",
}

export const SqueezeForm = ({
  children,
  namelabel,
  emaillabel,
  inquirylabel,
  cta,
  tag,
  language,
  acceptInquiry,
  action,
  nextpage,
}) => {
  const { t } = useI18next()
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    inquiry: "",
    tag: tag,
  })
  const initialErrorState = {
    name: "",
    email: "",
    inquiry: "",
    submitSuccess: "",
    submitError: "",
  }
  const initErrorState = initialState => {
    return {
      name: initialState.name,
      email: initialState.email,
      inquiry: initialState.inquiry,
      submitSuccess: initialState.submitSuccess,
      submitError: initialState.submitError,
    }
  }
  const errorStateReducer = (state, action) => {
    switch (action.type) {
      case "clearName":
        return { ...state, ...{ name: "" } }
      case "clearEmail":
        return { ...state, ...{ email: "" } }
      case "clearInquiry":
        return { ...state, ...{ inquiry: "" } }
      case "clearError":
        return initErrorState(initialErrorState)
      case "init":
        return initErrorState(action.payload)
      default:
        throw new Error()
    }
  }
  const [errorState, dispatchErrorState] = React.useReducer(
    errorStateReducer,
    initialErrorState,
    initErrorState
  )

  const validate = (k, v, m) => {
    const r = v(userData[k])
    const er = errorState
    er[k] = r ? "" : m
    dispatchErrorState({ type: "init", payload: er })
    return r
  }
  const metadata = useSiteMetadata()
  airtableConfig.airtableApiKey = metadata.airtableApiKey
  airtableConfig.airtableBaseId = metadata.airtableBaseId

  return (
    <FormStyles>
      <form
        action={nextpage}
        onSubmit={e => {
          e.preventDefault()
          dispatchErrorState({ type: "clearError" })
          const vn = validate(
            "name",
            name => name.trim().length > 0,
            t("お名前を入力してください")
          )
          const ve =
            validate(
              "email",
              email => email.trim().length > 0,
              t("メールアドレスを入力してください")
            ) &&
            validate(
              "email",
              email => !!email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/),
              t("メールアドレスを確認してください")
            )
          const vi =
            !acceptInquiry ||
            validate(
              "inquiry",
              inquiry => inquiry.trim().length > 7,
              t("お問い合わせ内容を７文字以上入力してください")
            )
          if (vn && ve && vi) {
            action(userData, language || "ja")
              .then(result => {
                const resultState = {
                  submitError: "",
                  submitSuccess: "",
                }
                if (result.isError) {
                  resultState.submitError =
                    t(
                      "ご入力内容を保存時にエラーが発生しました。しばらく待ってから、もう一度ボタンを押してみてください"
                    ) +
                    "[ internal info: " +
                    result.internal +
                    ", context: " +
                    result.context +
                    " ]"
                } else {
                  resultState.submitSuccess = t(
                    "お申し込み内容を受け付けました。後ほどご案内のメールをお送りします"
                  )
                  navigate(nextpage, {
                    replace: true,
                  })
                }
                dispatchErrorState({
                  type: "init",
                  payload: {
                    ...errorState,
                    ...resultState,
                  },
                })
              })
              .catch(err => {
                dispatchErrorState({
                  type: "init",
                  payload: {
                    ...errorState,
                    ...{
                      submitError:
                        t(
                          "お申し込み内容を格納中にエラーが発生しました。しばらく待ってから、もう一度ボタンを押してみてください"
                        ) +
                        "[ internal info: " +
                        err,
                    },
                  },
                })
              })
          }
        }}
      >
        <div>
          <SqueezeField
            name="name"
            label={namelabel || t("Name")}
            type="text"
            id="name"
            feedback={errorState.name}
            onChange={e => {
              setUserData({
                ...userData,
                name: e.target.value,
              })
              dispatchErrorState({ type: "clearError" })
            }}
            onFocus={e => {
              dispatchErrorState({ type: "clearError" })
            }}
          />
          <SqueezeField
            name="email"
            label={emaillabel || t("Email")}
            type="email"
            id="email"
            feedback={errorState.email}
            onChange={e => {
              setUserData({
                ...userData,
                email: e.target.value,
              })
              dispatchErrorState({ type: "clearError" })
            }}
            onFocus={e => {
              dispatchErrorState({ type: "clearError" })
            }}
          />
          {acceptInquiry && (
            <SqueezeText
              name="inquiry"
              label={inquirylabel || t("Inquiry...")}
              id="inquiry"
              feedback={errorState.inquiry}
              onChange={e => {
                setUserData({
                  ...userData,
                  inquiry: e.target.value,
                })
                dispatchErrorState({ type: "clearError" })
              }}
              onFocus={e => {
                dispatchErrorState({ type: "clearError" })
              }}
              rows="5"
            />
          )}
          <div style={{ textAlign: "center" }}>
            <Button
              type="submit"
              to="#"
              text={cta || t("Inquire Now")}
              bgColor="orange"
              color="darkGreen"
              iconLeft={<Mailbox />}
            />
          </div>
          <span className="success">{errorState.submitSuccess}</span>
          <span className="error">{errorState.submitError}</span>
        </div>
      </form>
    </FormStyles>
  )
}

export const SqueezeField = ({
  label,
  type,
  name,
  id,
  feedback,
  onChange,
  onFocus,
}) => {
  return (
    <FieldStyles>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={`${label}`}
        autoComplete="off"
        onChange={onChange}
        onFocus={onFocus}
      />
      <span className="feedback">{feedback}</span>
    </FieldStyles>
  )
}

export const SqueezeText = ({
  label,
  type,
  name,
  id,
  feedback,
  onChange,
  onFocus,
}) => {
  return (
    <FieldStyles>
      <textarea
        name={name}
        id={id}
        placeholder={`${label}`}
        autoComplete="off"
        onChange={onChange}
        onFocus={onFocus}
      ></textarea>
      <span className="feedback">{feedback}</span>
    </FieldStyles>
  )
}

export const SubmitEmailToAirtable = (userData, language) => {
  const fields = {
    Name: userData.name,
    Email: userData.email,
    Tag: userData.tag,
    Language: language,
  }
  return SubmitToAirtable("Clients", fields)
}

export const SubmitInquiryToAirtable = (userData, language) => {
  const fields = {
    Name: userData.name,
    Email: userData.email,
    Inquiry: userData.inquiry,
    Tag: userData.tag,
    Language: language,
  }
  return SubmitToAirtable("Clients", fields)
}

export const SubmitToAirtable = async (tableName, fields) => {
  const apiKey = airtableConfig.airtableApiKey
  const baseId = airtableConfig.airtableBaseId

  const base = new Airtable({
    apiKey: apiKey,
  }).base(baseId)

  const result = {
    isError: false,
    internal: "",
    context: "",
  }

  base(tableName).create(
    [
      {
        fields: fields,
      },
    ],
    (err, records) => {
      if (err) {
        result.isError = true
        result.internal = err
        result.context = apiKey + " :: " + baseId + " :: " + tableName
        return result
      }
    }
  )

  return result
}

export default SqueezeForm
