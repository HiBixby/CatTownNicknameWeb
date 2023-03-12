import { createSlice } from "@reduxjs/toolkit";
import Gradient from "javascript-color-gradient";

interface playerTitle {
  title: string;
  colors: string[];
  gradient: string[];
}

const initialTitle = "유저";
const initialColors = ["#ffffff", "#55ffff", "#55ffff"];
const initialGradient = new Gradient()
  .setMidpoint(initialTitle.length)
  .setColorGradient(...initialColors.slice(1))
  .getColors();
const initialState: playerTitle = {
  title: initialTitle,
  colors: initialColors,
  gradient: initialGradient,
};

function updateGradient(state: playerTitle) {
  //색상이 1개 이하일때
  if (state.colors.length < 3) {
    const color = state.colors[1];
    state.gradient = new Gradient()
      .setColorGradient(color, color)
      .setMidpoint(state.title.length)
      .getColors();
  } else if (state.title.length !== state.colors.length - 1) {
    state.gradient = new Gradient()
      .setMidpoint(state.title.length)
      .setColorGradient(...state.colors.slice(1))
      .getColors();
  } else {
    state.gradient = state.colors.slice(1);
  }
}

export const playerTitleSlice = createSlice({
  name: "colorNickname",
  initialState,
  reducers: {
    setPlayerTitle: (state, action) => {
      state.title = action.payload;
      updateGradient(state);
    },
    changePlayerTitleColor: (state, action) => {
      state.colors[action.payload.index] = action.payload.hex;
      updateGradient(state);
    },
    addPlayerTitleColor: (state) => {
      state.colors.push("#ffffff");
      updateGradient(state);
    },
    deletePlayerTitleColor: (state, action) => {
      state.colors = state.colors.filter((value, index) => {
        return index !== action.payload;
      });
      updateGradient(state);
    },
  },
});

export const {
  setPlayerTitle,
  changePlayerTitleColor,
  addPlayerTitleColor,
  deletePlayerTitleColor,
} = playerTitleSlice.actions;

export default playerTitleSlice;
