import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {
  LinkList: styled.ul`
    list-style: none;
  `,
  LinkItem: styled.li`
    &:before {
      content: "✨ ";
    }
  `,
};

function App() {
  return (
    <>
      <h1>😺고냥이 타운 생성기😺</h1>
      <S.LinkList>
        <S.LinkItem>
          <Link to={`/color`}>색닉 생성기</Link>
        </S.LinkItem>
        <S.LinkItem>
          <Link to={`/prefix`}>칭호 생성기</Link>
        </S.LinkItem>
      </S.LinkList>
    </>
  );
}
export default App;
