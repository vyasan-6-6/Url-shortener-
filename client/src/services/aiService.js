import api from '../api/axios';

/**
 * Service to handle Google Gemini AI integrations API endpoints
 */
export const getAiAliases = async (originalUrl) => {
  const response = await api.post('/ai/aliases', { originalUrl });
  return response.data;
};

export const getAiInsights = async (urlId) => {
  const response = await api.post('/ai/insights', { urlId });
  return response.data;
};
