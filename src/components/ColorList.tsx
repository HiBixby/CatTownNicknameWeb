import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/config";
import styled from "styled-components";
import { addPlayerTitleColor } from "../store/slices/playerTitleSlice";
import DeleteColorBtn from "./DeleteColorBtn";
import { setIndex } from "../store/slices/indexSlice";
import ColorPicker from "./ColorPicker";
import { useLocation } from "react-router-dom";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { addNickColor } from "../store/slices/colorNickSlice";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

const S = {
  AddColorBtn: styled.button`
    display: block;
    width: 100%;
    text-align: left;
    font-size: 1rem;
    font-family: inherit;
    border-radius: 5px;
    border: none;
    background-color: white;
    cursor: pointer;
    padding: 0.5rem;
    &:hover {
      border: none;
      background-color: #efefef;
    }
  `,
  ColorList: styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
  `,
  ColorItem: styled.li`
    margin: 1rem 0;
    padding: 0;
    border-radius: 5px;
    border: solid 1px rgb(203 213 225);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    overflow: hidden;
    &:hover {
    }
  `,
  ColorItemBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  ColorDetailBox: styled.div`
    display: flex;
    cursor: pointer;
  `,
  ColorBox: styled.div.attrs((props) => ({
    style: {
      backgroundColor: props.color,
    },
  }))`
    width: 3rem;
    height: 3rem;
    border-right: solid 1px rgb(203 213 225);
  `,
  ColorTextBox: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ColorNameParagraph: styled.p`
    margin: 0;
    font-weight: 600;
  `,
  ColorCodePragraph: styled.p.attrs((props) => ({
    style: {
      color: props.color,
    },
  }))`
    margin: 0;
  `,
  PopoverBox: styled.div`
    position: absolute;
    z-index: 2;
  `,
  CoverBox: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
};

function ColorList() {
  const path = useLocation().pathname;
  let color = ["#ffffff"];
  let title: (index: number) => string;
  let showBtnDelete: (index: number) => boolean;
  let addColor: ActionCreatorWithoutPayload<string>;

  switch (path) {
    case "/prefix":
      color = useSelector((state: RootState) => state.playerTitle.colors);
      title = (index: number) => (index ? "색상 #" + index : "플레이트 색상");
      showBtnDelete = (index) => index > 1;
      addColor = addPlayerTitleColor;
      break;
    case "/color":
      color = useSelector((state: RootState) => state.colorNick.colors);
      title = (index: number) => "색상 #" + (index + 1);
      showBtnDelete = (index) => index > 0;
      addColor = addNickColor;
      break;
  }
  const currentPicker = useSelector((state: RootState) => state.index);
  const dispatch = useDispatch();
  const handleAdd: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    dispatch(addColor());
  };
  const handleClick = (index: number) => {
    dispatch(setIndex(index));
  };
  const handleClose: React.MouseEventHandler<HTMLDivElement> = (event) => {
    dispatch(setIndex(-1));
  };

  return (
    <div>
      <h2>🎨색상</h2>
      <S.ColorList>
        {color.map((color, index) => {
          return (
            <S.ColorItem key={index}>
              <S.ColorItemBox>
                <S.ColorDetailBox onClick={() => handleClick(index)}>
                  <S.ColorBox color={color} />
                  <S.ColorTextBox>
                    <S.ColorNameParagraph>{title(index)}</S.ColorNameParagraph>
                    <S.ColorCodePragraph color={color}>
                      {color}
                    </S.ColorCodePragraph>
                  </S.ColorTextBox>
                </S.ColorDetailBox>
                {showBtnDelete(index) ? (
                  <DeleteColorBtn id={index.toString()} />
                ) : null}
              </S.ColorItemBox>
              {index === currentPicker ? (
                <S.PopoverBox key={index}>
                  <S.CoverBox onClick={handleClose}></S.CoverBox>
                  <ColorPicker id={index}></ColorPicker>
                </S.PopoverBox>
              ) : null}
            </S.ColorItem>
          );
        })}
      </S.ColorList>
      <S.AddColorBtn onClick={handleAdd}>
        <i className="fa-solid fa-plus"></i> 색상 추가하기
      </S.AddColorBtn>
    </div>
  );
}

export default ColorList;
