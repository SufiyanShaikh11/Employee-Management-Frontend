// config.js

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://employee-management-backend-production-2a33.up.railway.app/"
    : "http://localhost:8080";

export default BASE_URL;
