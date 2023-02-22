// i18next-extract-mark-ns-start common
import * as React from "react"
import { LandingPageStyles } from "../../components/layout/landingpage-styles"
import { useI18next } from "gatsby-plugin-react-i18next"

export const InputsContext = React.createContext()
export const InputsDispatchContext = React.createContext()

const InputsProvider = ({ children }) => {
  const [inputs, dispatch] = React.useReducer(inputsReducer)

  return (
    <InputsContext.Provider value={inputs}>
      <InputsDispatchContext.Provider value={dispatch}>
        {children}
      </InputsDispatchContext.Provider>
    </InputsContext.Provider>
  )
}

const NO_ERROR = false

const inputsReducer = (inputs, action) => {
  switch (action.type) {
    case "added": {
      if (!inputs) {
        return [action.input]
      }
      if (inputs.find(i => i.name === action.input.name)) {
        // action.input already exists
        return inputs
      }
      return [...inputs, action.input] // add action.input
    }
    case "changed": {
      if (!inputs) {
        return [action.input]
      }
      if (!inputs.find(i => i.name === action.input.name)) {
        // action.input not exists
        return [...inputs, action.input] // add action.input
      }
      return inputs.map(i => {
        // update inputs
        if (i.name === action.input.name) {
          return { ...i, ...action.input } // update
        }
        return i
      })
    }
    case "deleted": {
      return inputs?.filter(i => i.name !== action.name)
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}

export const InputText = ({ type, name, placeholder, value, validator }) => {
  const dispatch = React.useContext(InputsDispatchContext)
  const onChange = text => {
    dispatch({
      type: "changed",
      input: { name: name, value: text, validator: validator, status: "" },
    })
  }
  React.useEffect(() => {
    dispatch({
      type: "added",
      input: { type: type, name: name, value: value, validator: validator },
    })
  }, [type, name, value, validator, dispatch])

  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        id={type}
        name={name || type}
        key={name || type}
        value={value}
        onChange={e => {
          onChange(e.target.value)
        }}
        onFocus={e => {
          onChange(e.target.value)
        }}
      />
      <StatusMessage name={name} />
    </>
  )
}

export const InputHidden = ({ name, value }) => {
  const dispatch = React.useContext(InputsDispatchContext)
  React.useEffect(() => {
    dispatch({
      type: "added",
      input: {
        type: "hidden",
        name: name,
        value: value,
        status: "",
        validator: v => NO_ERROR,
      },
    })
  }, [name, value, dispatch])
  return (
    <>
      <input type="hidden" name={name} key={name} value={value} />
    </>
  )
}

export const InputRadio = ({ name, value, index, label, validator }) => {
  const dispatch = React.useContext(InputsDispatchContext)
  React.useEffect(() => {
    dispatch({
      type: "added",
      input: {
        type: "hidden",
        name: name,
        value: "",
        status: "",
        validator: validator,
      },
    })
  }, [name, validator, dispatch])
  return (
    <label>
      <input
        type="radio"
        name={name}
        id={value}
        key={`${name}-${index}`}
        value={value}
        onChange={e => {
          dispatch({
            type: "changed",
            input: {
              name: name,
              value: value,
              status: "",
            },
          })
        }}
      />
      <span>{label}</span>
    </label>
  )
}

const Form = ({ children, id, doSubmit }) => {
  const { t } = useI18next()
  const dispatch = React.useContext(InputsDispatchContext)
  const inputs = React.useContext(InputsContext)

  const updateStatus = status => {
    dispatch({ type: "changed", input: { name: "submit", status: status } })
  }
  const statuses = {
    error: t(
      "ご入力内容を保存時にエラーが発生しました。しばらく待ってから、もう一度ボタンを押してみてください"
    ),
    success: t("お申し込み内容を受け付けました。後ほどご案内をお送りします"),
    except: t(
      "お申し込み内容を格納中にエラーが発生しました。しばらく待ってから、もう一度ボタンを押してみてください"
    ),
  }

  const validate = event => {
    if (!inputs) {
      console.error("no input object registered", inputs)
      return false
    }
    console.log("inputs", inputs)
    const errors = inputs?.map(i => {
      dispatch({ type: "changed", input: { ...i, status: "" } })
      const error = i.validator(i.value)
      if (error) {
        dispatch({ type: "changed", input: { ...i, status: error } })
        return true
      }
      return false
    })
    return errors.every(e => !e)
  }

  return (
    <>
      <form
        id={id}
        onSubmit={event => {
          event.preventDefault()
          if (validate(event)) {
            doSubmit(inputs, dispatch)
              .then(r => {
                if (r.isError) {
                  updateStatus(statuses.error)
                } else {
                  updateStatus(statuses.success)
                }
              })
              .catch(err => {
                updateStatus(statuses.except + "[ " + err + " ]")
              })
          }
        }}
      >
        {children}
      </form>
    </>
  )
}

export const ApplicationForm = ({ children, id, tag, language, doSubmit }) => {
  return (
    <InputsProvider>
      <LandingPageStyles>
        <Form id={id} doSubmit={doSubmit}>
          <InputHidden name="tag" value={tag} />
          <InputHidden name="language" value={language || "ja"} />
          {children}
          <div className="container">
            <StatusMessage name="submit" />
          </div>
        </Form>
      </LandingPageStyles>
    </InputsProvider>
  )
}

export const StatusMessage = ({ name }) => {
  const inputs = React.useContext(InputsContext)

  return (
    <div className="status">{inputs?.find(i => i.name === name)?.status}</div>
  )
}

export const Submit = ({ form, id, children }) => {
  const dispatch = React.useContext(InputsDispatchContext)

  React.useEffect(() => {
    dispatch({
      type: "added",
      input: {
        type: "submit",
        name: "submit",
        value: "",
        status: "",
        validator: v => NO_ERROR,
      },
    })
  }, [dispatch])

  return (
    <button type="submit" id={id} form={form} className="button-34">
      {children}
    </button>
  )
}

export default ApplicationForm
