import styled from "styled-components"

interface ButtonProps{
  children: React.ReactNode
}

export default function Button({children}:ButtonProps) {
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
  border: 1px solid var(--purple-100);
  color: var(--purple-200);
  background-color: #fff;
  font-size: 18px;
  font-weight: 500;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: var(--purple-200);
    color: #fff;
  }
`
