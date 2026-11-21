// Backend base URL. Set VITE_API_URL in Vercel (e.g. https://schemesetu-api.onrender.com).
// Empty in local dev -> relative "/api/..." paths go through the Vite proxy.
export const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');
