import { makeRequest } from "./makeRequest";

export function getPosts() {
  return makeRequest("http://localhost:8080/posts");
}

export function getPost(id) {
  return makeRequest(`http://localhost:8080/posts/${id}`);
}
