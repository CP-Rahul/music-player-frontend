export const baseUrl = "https://music-player-backend-4zws.onrender.com/api/v1";
export const options= () => ({
  headers: {
    "x-access-token": localStorage.getItem("authToken"),
  },
});

