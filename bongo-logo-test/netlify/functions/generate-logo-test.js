exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }
  try {
    const { prompt } = JSON.parse(event.body);
    if (!prompt) return { statusCode: 400, body: JSON.stringify({ error: 'Prompt is required' }) };
    const REPLICATE_API_KEY = process.env.REPLICATE_API_KEY;
    if (!REPLICATE_API_KEY) return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured' }) };
    return { statusCode: 200, body: JSON.stringify({ success: true, imageUrl: 'https://example.com/logo.png' }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal server error', message: error.message }) };
  }
};