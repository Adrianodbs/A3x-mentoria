import styled from 'styled-components'

interface TitleProps {
  title: string
  subtitle: string
}

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 28px;
  }

  span {
    font-size: 20px;
  }
`
