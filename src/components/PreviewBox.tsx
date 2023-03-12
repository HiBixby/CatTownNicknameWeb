import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../store/config";
const S = {
  PreviewBox: styled.div`
    background-color: #0000007b;
    color: white;
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px black;
  `,
  PlateSpan: styled.span<{ color: string }>`
    color: ${(props) => props.color};
  `,
  LocalChatSpan: styled.span`
    color: #ffff55;
  `,
  DefaultTitleSpan: styled.span`
    color: #55ffff;
    font-weight: 700;
  `,
};

function PreviewBox() {
  const playerTitle = useSelector((state: RootState) => state.playerTitle);
  const colorNick = useSelector((state: RootState) => state.colorNick);
  const colors = playerTitle.colors;
  const plateColor = colors[0];
  const playerTitleGradient = playerTitle.gradient;
  const colorNickGradient = colorNick.gradient;
  const titleText = playerTitle.title;
  const nick = colorNick.nick;
  const chat = " : 이 서버 재미있네요!";
  console.log(nick);

  const LocalChatPrefix = () => (
    //[ 지역채팅 ]
    <span>
      {"["}
      <S.LocalChatSpan>지역채팅</S.LocalChatSpan>
      {"] "}
    </span>
  );
  const PlayerPrefix = () => (
    <>
      <S.PlateSpan color={plateColor}>[</S.PlateSpan>
      {playerTitleGradient.map((color, index) => {
        return (
          <span key={index} style={{ color: color }}>
            {titleText[index]}
          </span>
        );
      })}
      <S.PlateSpan color={plateColor}>] </S.PlateSpan>
    </>
  );
  const ColorNick = () => (
    <>
      {colorNickGradient.map((color, index) => {
        return (
          <span key={index} style={{ color: color }}>
            {nick[index]}
          </span>
        );
      })}
    </>
  );

  return (
    <>
      <h2>🖥️미리보기</h2>
      <S.PreviewBox>
        <LocalChatPrefix />
        <PlayerPrefix />
        <ColorNick />
        {chat}
      </S.PreviewBox>
    </>
  );
}

export default PreviewBox;
