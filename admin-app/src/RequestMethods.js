import axios from "axios";
export const token =
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjg0Y2RhNzhhNzQ0ZjBjNTgwNDYyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTEwNzc3NiwiZXhwIjoxNjQ1MzY2OTc2fQ.I5kqi5qQl6hRQ9YPRcJVjKD1ZJUs7moaX4lW4Iw3IpM";
 JSON.parse(
  JSON.parse(localStorage.getItem("persist:root")).user
).currentUser.token;

export const BASE_URL = "http://localhost:5000/api";

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});
