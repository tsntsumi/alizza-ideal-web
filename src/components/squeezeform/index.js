// i18next-extract-mark-ns-start translation
import * as React from "react"
import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import { FormStyles, FieldStyles } from "./styles"
import { navigate } from "gatsby"
import Airtable from "airtable"
import { Button } from "../button"

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

export const SqueezeForm = ({
  children,
  namelabel,
  emaillabel,
  cta,
  tag,
  language,
  action,
  nextpage,
}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            airtableKey
            airtableBaseId
          }
        }
      }
    `
  )
  const { airtableKey, airtableBaseId } = data.site.siteMetadata
  const tableName = "Clients"
  const { t } = useI18next()
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    tag: tag,
  })
  const initialErrorState = {
    name: "",
    email: "",
    submitSuccess: "",
    submitError: "",
  }
  const initErrorState = initialState => {
    return {
      name: initialState.name,
      email: initialState.email,
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
          if (vn && ve) {
            action(
              userData.name,
              userData.email,
              tag,
              language,
              airtableKey,
              airtableBaseId,
              tableName
            )
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
            label={namelabel}
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
            label={emaillabel}
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
          <div style={{ textAlign: "center" }}>
            <Button type="submit" to="#" text={cta} bgColor="orange" />
          </div>
          <span className="success">{errorState.submitSuccess}</span>
          <span className="error">{errorState.submitError}</span>
        </div>
      </form>
    </FormStyles>
  )
}

export const SubmitToAirtable = async (
  name,
  email,
  tag,
  language,
  airtableKey,
  airtableBaseId,
  tableName
) => {
  const base = new Airtable({
    airtableKey: airtableKey,
  }).base(airtableBaseId)

  const result = {
    isError: false,
    internal: "",
    context: "",
  }

  base(tableName).create(
    [
      {
        fields: {
          Name: name,
          Email: email,
          Tag: tag,
          Language: language,
        },
      },
    ],
    (err, records) => {
      if (err) {
        result.isError = true
        result.internal = err
        result.context =
          airtableKey + " :: " + airtableBaseId + " :: " + tableName
        return
      }
    }
  )

  return result
}

export default SqueezeForm
