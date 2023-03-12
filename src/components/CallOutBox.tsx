import styled from "styled-components";
const S = {
  CalloutBox: styled.div`
    background-color: #f9fafc;
    font-size: 1.2rem;
    border-radius: 10px;
    padding: 1rem;
    font-weight: 500;
  `,
};
function CallOutBox(props: { text: string }) {
  return (
    <>
      <S.CalloutBox>💡{props.text}</S.CalloutBox>
    </>
  );
}
export default CallOutBox;
