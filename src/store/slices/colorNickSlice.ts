import { createSlice } from "@reduxjs/toolkit";
import Gradient from "javascript-color-gradient";
import queryString from "query-string";
const searchParams = new URLSearchParams(location.hash.split("?")[1]);
const nick = searchParams.get("nick");

interface colorNick {
  nick: string;
  colors: string[];
  gradient: string[];
}

const initialNick = nick || "고냥";
const initialColors = ["#ff7272", "#ffffff"];
const initialGradient =
  initialNick.length !== initialColors.length
    ? new Gradient()
        .setMidpoint(initialNick.length)
        .setColorGradient(...initialColors)
        .getColors()
    : [...initialColors];
const initialState: colorNick = {
  nick: initialNick,
  colors: initialColors,
  gradient: initialGradient,
};

function updateGradient(state: colorNick) {
  //색상이 1개 이하일때
  if (state.colors.length < 2) {
    const color = state.colors[0];
    state.gradient = new Gradient()
      .setColorGradient(color, color)
      .setMidpoint(state.nick.length)
      .getColors();
  } else if (state.nick.length !== state.colors.length) {
    state.gradient = new Gradient()
      .setMidpoint(state.nick.length)
      .setColorGradient(...state.colors)
      .getColors();
  } else {
    state.gradient = state.colors;
  }
}

export const colorNickSlice = createSlice({
  name: "colorNick",
  initialState,
  reducers: {
    setNick: (state, action) => {
      state.nick = action.payload;
      updateGradient(state);
    },
    changeNickColor: (state, action) => {
      state.colors[action.payload.index] = action.payload.hex;
      updateGradient(state);
    },
    addNickColor: (state) => {
      state.colors.push("#ffffff");
      updateGradient(state);
    },
    deleteNickColor: (state, action) => {
      state.colors = state.colors.filter((value, index) => {
        return index !== action.payload;
      });
      updateGradient(state);
    },
  },
});

export const { setNick, changeNickColor, addNickColor, deleteNickColor } =
  colorNickSlice.actions;

export default colorNickSlice;
