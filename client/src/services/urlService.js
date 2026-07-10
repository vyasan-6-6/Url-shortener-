import api from '../api/axios';

/**
 * Service to handle short URL management and analytics API endpoints
 */
export const createUrl = async (urlData) => {
  const response = await api.post('/urls', urlData);
  return response.data;
};

export const getUrls = async (page, limit, search) => {
  const response = await api.get('/urls', {
    params: { page, limit, search }
  });
  return response.data;
};

export const deleteUrl = async (id) => {
  const response = await api.delete(`/urls/${id}`);
  return response.data;
};

export const updateUrl = async (id, originalUrl) => {
  const response = await api.put(`/urls/${id}`, { originalUrl });
  return response.data;
};

export const getQrCode = async (id) => {
  const response = await api.get(`/urls/${id}/qrcode`);
  return response.data;
};

export const getUrlStats = async (code) => {
  const response = await api.get(`/stats/${code}`);
  return response.data;
};
