import axios from "axios";

// Auth Helper to handle JWT tokens
const AuthHelper = {
  tokenKey: "authToken", // Key to store token in localStorage

  setToken(token) {
    localStorage.setItem(this.tokenKey, token);
  },

  getToken() {
    return localStorage.getItem(this.tokenKey);
  },

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  },

  isAuthenticated() {
    return !!this.getToken();
  },
};

// API Client
const ApiClient = axios.create({
  baseURL: "https://your-api-url.com/api", // Replace with your API base URL
  timeout: 10000, // Request timeout in milliseconds
});

// Add a request interceptor to include the JWT token in headers
ApiClient.interceptors.request.use(
  (config) => {
    const token = AuthHelper.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor for error handling or token refreshing
ApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., token expiration)
      AuthHelper.removeToken();
      // Optionally redirect to login page
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export { ApiClient, AuthHelper };