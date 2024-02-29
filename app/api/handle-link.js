export default function handler(req, res) {
    if (req.method === "POST") {
      // Retrieve the originalLink from the request body
      const { originalLink } = req.body;
  
      // Logic to shorten the link
      // For demonstration, we'll just echo back the original link
      const shortenedLink = originalLink;
  
      // Send the shortened link back in the response
      res.status(200).json({ shortenedLink });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
  