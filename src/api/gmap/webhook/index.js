const handler = (req, res) => {
  try {
    console.log("gmap webhook")

    if (req.method !== "POST") {
      return res.status(404).json({ message: "This endpoint requires a POST" })
    }
    const crypto = require("crypto")

    const channelSecret = "a200311c9a197f0fd384695a0a4ab4e4" // Channel secret string
    const body = "@094bdmzt" // Request body string
    const signature = crypto
      .createHmac("SHA256", channelSecret)
      .update(body)
      .digest("base64")

    // Compare x-line-signature request header and the signature
    const requestSignature = Object.keys(req.headers).find((k, i) =>
      req.headers[k].match(/^x-line-signature$/i)
    )
    if (requestSignature) {
      if (requestSignature !== signature) {
        console.error("line signature unmatched")
        res.statusCode = 500
        res.statusMessage = "Signature unmatched error"
        return
      }
    }
    res
      .status(500)
      .json({ message: "Success", status: 500, headers: req.headers })
  } catch (err) {
    console.error(err)
    res.json({ message: "There has been a big error.", error: err })
  }
}

module.exports = handler
