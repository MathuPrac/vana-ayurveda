/**
 * api.ts — Backend-ready API utility
 *
 * All form submissions and data fetches go through this module.
 * When the Express/Node backend is ready, simply set VITE_API_URL
 * in your .env and these calls will hit the real API.
 *
 * Until then, all endpoints gracefully simulate success so the UI
 * works standalone (frontend-only mode).
 */

import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "/api";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10_000,
});

// ─── Request interceptor: attach auth token when present ─────────────────────
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("vana_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ─── Response interceptor: normalise errors ───────────────────────────────────
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const message =
      err.response?.data?.message || err.message || "An unexpected error occurred.";
    return Promise.reject(new Error(message));
  }
);

// ─── Typed API calls ──────────────────────────────────────────────────────────

export type InquiryPayload = {
  name: string;
  email: string;
  phone?: string;
  country: string;
  inquiry: string;
  date?: string;
  stay: string;
  message: string;
};

/**
 * POST /api/inquiries
 * Submits a retreat / contact inquiry.
 * Falls back to a simulated success when backend is unavailable.
 */
export async function submitInquiry(payload: InquiryPayload): Promise<void> {
  try {
    await api.post("/inquiries", payload);
  } catch (err) {
    // In frontend-only mode (no backend running), simulate success after 600ms
    if (import.meta.env.DEV && !import.meta.env.VITE_API_URL) {
      await new Promise((r) => setTimeout(r, 600));
      console.info("[vana/api] Simulated inquiry submission:", payload);
      return;
    }
    throw err;
  }
}

/**
 * GET /api/testimonials
 * Fetches guest testimonials from the database.
 * Falls back to static data when backend is unavailable.
 */
export async function fetchTestimonials() {
  try {
    const res = await api.get("/testimonials");
    return res.data;
  } catch {
    // Return null; the component will use static data as fallback
    return null;
  }
}

/**
 * GET /api/treatments
 * Fetches treatment list from the database.
 */
export async function fetchTreatments() {
  try {
    const res = await api.get("/treatments");
    return res.data;
  } catch {
    return null;
  }
}
