import styled from "styled-components";

const HomeBox = styled.div`
  display: flex;
  justify-content: center;
`;
export default function Home() {
  return (
    <HomeBox>
      <h1>Это очень крутой магазин</h1>
    </HomeBox>
  );
}
