let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export const secureGetAccessToken = (): string => {
  const token = accessToken;
  if (token === null) {
    throw new Error("Access token has not been set!");
  }
  return token;
};
