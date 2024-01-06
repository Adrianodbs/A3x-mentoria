import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import { RiJavascriptFill } from 'react-icons/ri'

export default function Presentation() {
  return (
    <PresentationStyle>
      <h1>Monitoria em JavaScript e React:</h1>
      <h3>Você superando os desafios do Front End!</h3>
      <Icons>
        <FaReact size={80} color="#61DBFB" />
        <RiJavascriptFill size={80} color="#EFD81D" />
      </Icons>
    </PresentationStyle>
  )
}

const PresentationStyle = styled.section`
  background: radial-gradient(
    ellipse at top left,
    #71229c 0%,
    #71229c 19%,
    #6c0d8e 20%,
    #6c0d8e 39%,
    #d10073 59%,
    #c2086e 79%,
    #99d93b 80%,
    #55b507 100%
  );
  padding: 60px 20px;
  margin-top: 4px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 34px;
    margin-bottom: 12px;
    font-weight: 900;
  }

  h3 {
    font-size: 24px;
  }
`

const Icons = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 24px;
`
