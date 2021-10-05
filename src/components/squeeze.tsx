import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "./utils"
import { Button, TextInput } from "./ui"
import { ArrowUpCircle } from "react-feather"
import { beforeContactFormSubmit, contactFormSubmit } from "../../config"

type FeedbackState = {
    [id: number]: {
        message?: string
        type?: string
    }
}

const SqueezeForm: React.FC<{
    api: string
    title: string
    tag: string
}> = ({ api, title, tag }) => {
    const [lead, changeLead] = useState({
        name: "Jack Landingpage",
        email: "",
        message: "e-mail register",
        tag: tag || "lead squeezer",
    })

    const [feedback, setFeedback] = useState<FeedbackState>({})

    const [transactionState, setTransactionState] = useState(false)
    const updateLead = (info) => changeLead({ ...lead, ...info })

    const succeeded = {
        4: {
            type: "success",
            message:
                "お申し込み用メールアドレスを受け付けました。後ほど、ご案内のメールを送信します。",
        },
    }
    const failed = {
        4: {
            type: "error",
            message:
                "お申し込み用メールアドレス受付時にエラーが発生しました。しばらくしてからもう一度ボタンのクリックをお試しください",
        },
    }
    const invalidAddress = {
        2: {
            type: "error",
            message:
                "ご入力いただいたメールアドレスに誤りがありました。入力された内容をご確認の上、もう一度ボタンのクリックをお試しください",
        },
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                setTransactionState(true)

                const validate = beforeContactFormSubmit(lead)

                if (!validate.result) {
                    setFeedback(invalidAddress)
                    setTransactionState(false)
                } else {
                    setFeedback({})
                    contactFormSubmit(api, lead)
                        .then((res) => {
                            if (res.result) {
                                setFeedback(succeeded)
                            } else {
                                setFeedback(failed)
                            }
                            setTransactionState(false)
                        })
                        .catch((err) => {
                            setFeedback(failed)
                            setTransactionState(false)
                        })
                }
            }}
        >
            <TextInput
                label="e-mail"
                placeholder="メールアドレスを入力してください"
                name="email"
                type="email"
                disabled={false}
                onChange={(e) => updateLead({ email: e.target.value })}
                footer={
                    <FeedbackMessage
                        show={feedback[2] !== undefined}
                        type="error"
                        message={feedback[2]?.message}
                    />
                }
            />
            <div className="py-3 lg:p-4">
                <FeedbackMessage
                    show={feedback[4] !== undefined}
                    type={feedback[4]?.type || "error"}
                    message={feedback[4]?.message}
                />
                <Button
                    type="button,submit"
                    title={title}
                    disabled={transactionState}
                    iconRight={<ArrowUpCircle />}
                />
            </div>
            <div className="py-3 lg:p-4 text-sm">
                <h4>このボタンを押すと、</h4>
                <p>
                    ２４時間以内に、こちらからご案内のメールを返信いたします。
                </p>
                <p>
                    ２４時間立っても届かない場合は、
                    メールアプリの迷惑メールフォルダや Spamメールフォルダなどに
                    入っている可能性があります。ご確認ください。
                </p>
                <p>
                    そのフォルダにもない場合は、入力されたメールアドレスが
                    間違っていた可能性もあります。
                    もう一度、登録しなおしてみてください。
                </p>
            </div>
        </form>
    )
}

const Squeeze: React.FC<{
    title: string
    tag: string
}> = ({ title, tag }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    contact {
                        api_url
                    }
                }
            }
        }
    `)

    const api_url = data.site.siteMetadata.contact.api_url

    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap pb-12">
                {api_url && (
                    <div className="w-full lg:w-2/3 px-4 lg:pl-2 lg:pr-6">
                        <SqueezeForm api={api_url} title={title} />
                    </div>
                )}
            </div>
        </div>
    )
}

type FeedbackMessageProps = {
    show: boolean
    type: string
    message: string
}
const FeedbackMessage: React.FC<FeedbackMessageProps> = ({
    show,
    type,
    message,
}) => {
    if (!show) {
        return null
    }
    return <p className={`text-${type} my-2`}>{message}</p>
}

export { Squeeze }
