import styled from 'styled-components'

import { MdOutlineLiveTv } from 'react-icons/md'
import { GrDocumentPerformance } from 'react-icons/gr'
import { FaCalendarAlt, FaChalkboardTeacher } from 'react-icons/fa'
import Title from '../Title'

export default function HowItWorks() {
  return (
    <Container>
      <Title
        title="Como funciona a mentoria?"
        subtitle="Aulas sobre JavaScript e React, com um método incrível!"
      />

      <Items>
        <Item>
          <Img>
            <MdOutlineLiveTv size={32} color="#DD57AB" />
          </Img>

          <span>Aulas 100% online e ao vivo</span>
        </Item>
        <Item>
          <Img>
            <GrDocumentPerformance size={32} color="#DD57AB" />
          </Img>

          <span>Relatório de desempenho</span>
        </Item>
        <Item>
          <Img>
            <FaCalendarAlt size={32} color="#DD57AB" />
          </Img>

          <span>Planos de estudos personalizados</span>
        </Item>
        <Item>
          <Img>
            <FaChalkboardTeacher size={32} color="#DD57AB" />
          </Img>

          <span>Professores especialistas</span>
        </Item>
      </Items>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  gap: 24px;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  text-align: center;

  span {
    margin-top: 12px;
  }
`

const Img = styled.div`
  background-color: var(--pink-100);
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`
