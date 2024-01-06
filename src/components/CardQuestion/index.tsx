import { ReactNode } from 'react'
import styled from 'styled-components'

interface CardQustionProps {
  img: ReactNode
  title: string
  description: string
}

export default function CardQuestion({
  img,
  title,
  description
}: CardQustionProps) {
  return (
    <Card>
      <Img>{img}</Img>
      <h4>{title}</h4>
      <p>{description}</p>
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  border: 1px solid var(--purple-100);
  color: var(--purple-200);
  padding: 12px;
  border-radius: 8px;
  height: 320px;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.6s ease-in;
  cursor: pointer;

  &:hover {
    background-color: var(--purple-200);
    color: #fff;
  }

  h4 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }
`

const Img = styled.div`
  svg {
    font-size: 42px;
  }
`
