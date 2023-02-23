const handler = (req, res) => {
  try {
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
    res.json({ message: "Success", headers: req.headers })
  } catch (err) {
    console.error(err)
    res.json({ message: "There has been a big error.", error: err })
  }
}

module.exports = handler
