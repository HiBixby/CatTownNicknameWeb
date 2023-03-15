import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {
  LinkList: styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  LinkItem: styled.li``,
  Link: styled(Link)`
    display: block;
    margin: 1rem;
    padding: 0.8rem;
    border-radius: 5px;
    background-color: #ff8160;
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    color: white;
    font-size: 1.2rem;
    &:hover {
      background-color:#ffd2c6;
    }
    &:active{
      background-color:#d46c52;

    }
  `,
};

function App() {
  return (
    <>
      <h1>😺고냥이 타운 생성기😺</h1>
      <S.LinkList>
        <S.LinkItem>
          <S.Link to={`/color`}>색깔 닉네임</S.Link>
        </S.LinkItem>
        <S.LinkItem>
          <S.Link to={`/prefix`}>커스텀 칭호</S.Link>
        </S.LinkItem>
      </S.LinkList>
    </>
  );
}
export default App;
