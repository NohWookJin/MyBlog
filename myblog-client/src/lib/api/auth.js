import client from "./client";

export const register = ({ username, password, passwordConfirm }) =>
  client.post("/api/auth/register", { username, password, passwordConfirm });

export const login = ({ username, password }) =>
  client.post("/api/auth/login", { username, password });

export const check = () => client.get("/api/auth/check");

export const logout = () => client.post("/api/auth/logout");
