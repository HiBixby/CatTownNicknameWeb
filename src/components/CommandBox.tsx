import { useSelector } from "react-redux";
import { RootState } from "../store/config";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

const S = {
  CommandBox: styled.div`
    background-color: #1e293b;
    color: white;
    font-size: 1rem;
    padding: 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
  `,
  CommandParagraph: styled.p`
    padding: 0;
    margin: 0;
  `,
};

function CommandBox(props: { command: string }) {
  return (
    <>
      <h2>⌨️생성된 명령어</h2>
      <CopyToClipboard
        text={props.command}
        onCopy={() => {
          alert("명령어가 복사되었습니다! 인게임에서 입력 해주세요");
        }}
      >
        <S.CommandBox title="클릭해서 복사">
          <S.CommandParagraph>{props.command}</S.CommandParagraph>
          <i className="fa-regular fa-clone"></i>
        </S.CommandBox>
      </CopyToClipboard>
    </>
  );
}

export default CommandBox;
