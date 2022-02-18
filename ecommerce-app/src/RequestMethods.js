// export const token = 
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjg0Y2RhNzhhNzQ0ZjBjNTgwNDYyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDA2OTk5OCwiZXhwIjoxNjQ0MzI5MTk4fQ.nlyzNT06ilbFMC_9J9fwxqhFSdFNKJLEoZIv3HIzOfY"
// export const BASE_URL = "http://localhost:5000/api";


import axios from "axios";
export const token = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root")).user
).currentUser.token;

export const BASE_URL = "http://localhost:5000/api";

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});
console.log("object")