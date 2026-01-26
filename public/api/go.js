export default function handler(req, res) {
  const encodedUrl = req.query.url;

  if (!encodedUrl) {
    return res.status(400).send("Missing url");
  }

  try {
    const decoded = decodeURIComponent(encodedUrl);

    if (!decoded.startsWith("http")) {
      return res.status(400).send("Invalid URL");
    }

    res.redirect(302, decoded);
  } catch {
    res.status(400).send("Bad encoding");
  }
}
