import { useState } from "react";
import { ColorChangeHandler, SketchPicker } from "react-color";
import presetColors from "../data/minecraftColorCodeList";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/config";
import { changePlayerTitleColor } from "../store/slices/playerTitleSlice";
import { changeNickColor } from "../store/slices/colorNickSlice";
import { useLocation } from "react-router-dom";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
function ColorPicker(props: { id: number }) {
  const path = useLocation().pathname;
  let colors = ["#ffffff"];
  let changeColor: ActionCreatorWithPayload<any, string>;
  switch (path) {
    case "/prefix":
      colors = useSelector((state: RootState) => state.playerTitle.colors);
      changeColor = changePlayerTitleColor;
      break;
    case "/color":
      colors = useSelector((state: RootState) => state.colorNick.colors);
      changeColor = changeNickColor;
      break;
  }
  const dispatch = useDispatch();
  const handleChange: ColorChangeHandler = (color, event) => {
    dispatch(changeColor({ index: props.id, hex: color.hex }));
  };
  return (
    <SketchPicker
      color={colors[props.id]}
      presetColors={presetColors}
      disableAlpha={true}
      onChange={handleChange}
    />
  );
}

export default ColorPicker;
