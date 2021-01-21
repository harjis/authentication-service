import { getAccessToken } from "../stores/AuthStore";

export const url = `${window.location.origin}/api`;

export type Home = { test: string };
export function fetchHome(): Promise<Home> {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(url, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getAccessToken()}`,
        },
      }).then((response) => resolve(response.json()));
    }, 2000);
  });
}
