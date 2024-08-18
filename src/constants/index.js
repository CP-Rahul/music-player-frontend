export const baseUrl = "http://localhost:3000/api/v1";
export const options= () => ({
  headers: {
    "x-access-token": localStorage.getItem("authToken"),
  },
});

