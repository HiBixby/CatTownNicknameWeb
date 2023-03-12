import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deletePlayerTitleColor } from "../store/slices/playerTitleSlice";
import { useLocation } from "react-router-dom";
import { deleteNickColor } from "../store/slices/colorNickSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
const S = {
  DeleteBtn: styled.button`
    background: none;
    border: none;
    &:hover {
      cursor: pointer;
    }
  `,
};

function DeleteColorBtn(props: { id: string }) {
  const path = useLocation().pathname;
  let deleteColor: ActionCreatorWithPayload<any, string>;
  switch (path) {
    case "/prefix":
      deleteColor = deletePlayerTitleColor;
      break;
    case "/color":
      deleteColor = deleteNickColor;
      break;
  }
  const dispatch = useDispatch();
  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    dispatch(deleteColor(parseInt(event.currentTarget.id)));
  };
  return (
    <S.DeleteBtn id={props.id} onClick={handleDelete} title="삭제">
      🗑️
    </S.DeleteBtn>
  );
}
export default DeleteColorBtn;
