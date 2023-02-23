const handler = (req, res) => {
  try {
    if (req.method !== "POST") {
      return res.status(404).json({ message: "This endpoint requires a POST" })
    }

    res.json({ message: "Success" })
  } catch (err) {
    console.error(err)
    res.json({ message: "There has been a big error.", error: err })
  }
}

module.exports = handler
