export const getAccessToken = (isFormData?: true) => {
  return localStorage.accessToken
    ? isFormData
      ? {
          headers: {
            "Content-Type": "multipart/form-data",
            token: localStorage.accessToken,
          },
        }
      : {
          headers: {
            token: localStorage.accessToken,
          },
        }
    : {};
};
