import axios from "axios";

const API_URL = "http://localhost:5000/api/news"; // Base URL for News API

const newsApi = {
  // ✅ Fetch paginated news (GET /news?page=1&limit=10)
  getPaginatedNews: (page = 1, limit = 10) => {
    return axios.get(`${API_URL}?page=${page}&limit=${limit}`);
  },

  // ✅ Fetch single news by ID (GET /news/:id)
  getNewsById: (id) => {
    return axios.get(`${API_URL}/${id}`);
  },

  // ✅ Create news (POST /news) - Requires Authentication
  createNews: (newsData, token) => {
    return axios.post(API_URL, newsData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  // ✅ Update news (PUT /news/:id) - Requires Authentication
  updateNews: (id, newsData, token) => {
    return axios.put(`${API_URL}/${id}`, newsData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  // ✅ Delete news (DELETE /news/:id) - Requires Authentication
  deleteNews: (id, token) => {
    return axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  // ✅ Like a news article (PUT /news/:id/like) - Requires Authentication
  likeNews: (id, token) => {
    return axios.put(`${API_URL}/${id}/like`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  // ✅ Comment on a news article (PUT /news/:id/comment) - Requires Authentication
  commentOnNews: (id, commentData, token) => {
    return axios.put(`${API_URL}/${id}/comment`, commentData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  // ✅ Admin approves news (PUT /news/:id/approve) - Admin Only
  approveNews: (id, token) => {
    return axios.put(`${API_URL}/${id}/approve`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

export default newsApi;
