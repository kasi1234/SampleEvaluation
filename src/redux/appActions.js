import { APP } from "./actionTypes";

export const setUsername = username => ({
    payload: username,
    type: APP.USERNAME,
  });

export const clearUser = () => ({
    type: APP.LOGOUT
  });