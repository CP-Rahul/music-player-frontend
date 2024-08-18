import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "songs",
  initialState: {
    availableSongs: null,
    activeSong: null,
    isPlaying: null,
    playback: { songId: 0, position: 0 },
    playlists: null
  },
  reducers: {
    addAvailableSongs: (state, action) => {
      state.availableSongs = action.payload;
    },
    setActiveSong: (state, action) => {
      state.activeSong = action.payload;
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    addPausedSongs: (state, action) => {
      state.pausedSongs = action.payload;
    },
    setPlayback(state, action) {
      (state.playback.songId = action.payload.songId),
        (state.playback.position = action.payload.position);
    },
    setPlalists(state, action) {
      state.playlists = action.payload;
    }
  },
});

export const {
  addAvailableSongs,
  setActiveSong,
  playPause,
  addPausedSongs,
  setPlayback,
  updateActiveSong,
  setPlalists
} = songSlice.actions;

export default songSlice.reducer;
