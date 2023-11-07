export const saveToken = (token) => {
  localStorage.setItem("jobly-token", token);
};

export const getToken = () => {
  return localStorage.getItem("jobly-token");
};

export const removeToken = () => {
  localStorage.removeItem("jobly-token");
};
