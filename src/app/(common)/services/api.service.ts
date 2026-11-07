import axios from 'axios';

const isServer = typeof window === 'undefined';

const getBaseUrl = () => {
  if (!isServer) return '';
  return process.env.NEXT_API_URL ?? '';
};

export const api = axios.create({
  baseURL: `${getBaseUrl()}/api`,
  withCredentials: true,
});
