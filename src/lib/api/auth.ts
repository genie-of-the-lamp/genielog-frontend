import client from "./client";

export const signin = async ({ email, password }: User) => {
  const response = await client.post<User>("/api/auth/signin", {
    email,
    password,
  });
  return response.data;
};
export const signup = async ({ email, username, password }: User) => {
  const response = await client.post<User>("/api/auth/signup", {
    email,
    username,
    password,
  });
  return response.data;
};
export type User = {
  email: string;
  username?: string | null;
  password: string;
};
export const check = async () => {
  const response = await client.get("/api/auth/check");
  return response.data;
};

export const signout = () => {
  client.post("api/auth/signout");
};
