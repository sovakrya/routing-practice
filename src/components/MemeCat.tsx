import styled from "styled-components";

const MemeCatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export default function MemeCat() {
  return (
    <MemeCatBox>
      <h1>Ура! Вы авторизованы!</h1>
      <img
        src="https://i.pinimg.com/originals/34/b7/76/34b776f91ce9762bb735e9128b75098d.jpg"
        height={500}
        width={500}
        alt="картинка - поздравление"
      />
    </MemeCatBox>
  );
}
