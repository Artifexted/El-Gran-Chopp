export default async function handler(req, res) {
    const { INSTA_USER_ID, INSTA_API_TOKEN } = process.env;
  
    try {
      const response = await fetch(
        `https://graph.facebook.com/v17.0/${INSTA_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${INSTA_API_TOKEN}`
      );
      if (!response.ok) {
        throw new Error("Error obteniendo las publicaciones de Instagram");
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  