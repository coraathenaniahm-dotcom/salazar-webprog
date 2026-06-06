const apiUrl = import.meta.env.VITE_API_URL?.trim();
const defaultApiUrl = 'https://salazar-server.vercel.app/api';
const normalizedApiUrl = apiUrl || defaultApiUrl;
const HOST = normalizedApiUrl.endsWith('/api')
  ? normalizedApiUrl
  : normalizedApiUrl.replace(/\/+$/, '') + '/api';

export default {
  HOST,
};