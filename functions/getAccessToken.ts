export const getAccessToken = () => {
  return (
    localStorage.accessToken && {
      headers: {
        token: localStorage.accessToken,
      },
    }
  );
};
