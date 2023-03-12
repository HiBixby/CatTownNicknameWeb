import { useSelector } from "react-redux";
import styled from "styled-components";
import CallOutBox from "../components/CallOutBox";
import CommandBox from "../components/CommandBox";
import InputForm from "../components/InputForm";
import PreviewBox from "../components/PreviewBox";
import { RootState } from "../store/config";
function Color() {
  const gradient = useSelector((state: RootState) => state.colorNick.gradient);
  const cmd = "/색닉변경 " + gradient.map((color) => "&" + color).join(" ");
  return (
    <>
      <h1>🐱고냥이타운 색닉 생성기🐱</h1>
      <CallOutBox
        text="닉네임 색상만 바꿀 수 있습니다. 닉네임 글자를 바꾸고 싶다면 한글
        닉네임 교환권을 이용해주세요!"
      ></CallOutBox>
      <PreviewBox />
      <InputForm />
      <CommandBox command={cmd}></CommandBox>
    </>
  );
}
export default Color;
