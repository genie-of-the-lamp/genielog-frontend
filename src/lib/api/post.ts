import client from "./client";
import qs from "qs";

export const readPost = async (id: number) => {
  const response = await client.get<Post>(`/api/posts/${id}`);
  return response.data;
};

export const writePost = async ({ title, body }: Write) => {
  const response = await client.post("/api/posts", { title, body });
  return response.data;
};

export const listPost = async ({ page, email }: ListParams) => {
  const queryString = qs.stringify({ page, email });
  const response = await client.get(`/api/posts?${queryString}`);
  return response.data;
};

export const deletePost = (id: number) => client.delete(`/api/posts/${id}`);

export type Post = {
  _id: string;
  title: string;
  body: string;
  publishedDate: string;
  tags?: string[];
  user: {
    username: string;
    email: string;
  };
};

export type Write = {
  title: string;
  body: string;
  tags?: string[];
};

export type ListParams = {
  page: number;
  email: string;
};
