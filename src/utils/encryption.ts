export const encrypt = (text: string) => {
  return btoa(unescape(encodeURIComponent(text)));
};

export const decrypt = (text: string) => {
  return decodeURIComponent(escape(atob(text)));
};