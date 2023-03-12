import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerTitle } from "../store/slices/playerTitleSlice";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
import { setNick } from "../store/slices/colorNickSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { RootState } from "../store/config";

const S = {
  PlayerTitleInput: styled.input`
    background-color: #f3f3f3;
    border: solid 1px transparent;
    font-family: inherit;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 10px;
    &:hover {
      background-color: white;
      border: solid 1px lightgray;
    }
    &:focus {
      background-color: white;
      outline: solid 3px pink;
    }
  `,
  InvalidParagraph: styled.p`
    color: #db2777;
  `,
};

function playerTitleForm() {
  const path = useLocation().pathname;
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const nick = searchParams.get("nick");
  let re: RegExp;
  let label = "";
  let id = "";
  let defaultValue = "";
  let invalidText = "";
  let setText: ActionCreatorWithPayload<any, string>;
  switch (path) {
    case "/prefix":
      label = "칭호";
      id = "playertitle";
      re = new RegExp("^[a-zA-Z]{1,6}$|^[가-힣]{1,5}$");
      invalidText =
        "영어 1~6자, 한글 1~5자, 특수분자 불가, 영어 한글 혼합 사용 불가";
      setText = setPlayerTitle;
      break;
    case "/color":
      label = "닉네임";
      id = "nick";
      re = new RegExp(".*");
      defaultValue = nick !== null ? nick : "";
      setText = setNick;
  }
  const onTitleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    let input = event.target.value;
    if (input.match(re)) {
      dispatch(setText(event.target.value));
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <>
      <label htmlFor="playertitle">
        <h2>🏷️{label}</h2>
      </label>
      <S.PlayerTitleInput
        id={id}
        type="text"
        placeholder="이곳에 입력해 보세요!"
        defaultValue={defaultValue}
        onChange={onTitleChange}
      />
      {isValid ? null : <S.InvalidParagraph>{invalidText}</S.InvalidParagraph>}
    </>
  );
}
export default playerTitleForm;
