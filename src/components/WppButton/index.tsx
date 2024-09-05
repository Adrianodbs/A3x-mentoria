import styled from "styled-components"

interface ButtonProps{
  children: React.ReactNode
}

export default function WppButton({children}:ButtonProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border: none;
  border-radius: 12px;
  color: var(--purple-200);
  background-color: #29AD17;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover{
    transform: scale(1.07);
  }
`
