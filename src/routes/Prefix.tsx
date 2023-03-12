import { useSelector } from "react-redux";
import CallOutBox from "../components/CallOutBox";
import CommandBox from "../components/CommandBox";
import InputForm from "../components/InputForm";
import PreviewBox from "../components/PreviewBox";
import { RootState } from "../store/config";

function Prefix() {
  const playerTitle = useSelector((state: RootState) => state.playerTitle);

  const plainTitle = playerTitle.title;
  const plateColor = playerTitle.colors[0];
  const gradient = playerTitle.gradient;

  const formattedPlayerTitle = gradient
    .map((color, index) => `{${color}}` + plainTitle[index])
    .join("");

  const cmd = `/칭호변경 ${formattedPlayerTitle} {${plateColor}}`;
  return (
    <>
      <h1>😺고냥이타운 칭호 생성기😺</h1>
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
export default Prefix;
