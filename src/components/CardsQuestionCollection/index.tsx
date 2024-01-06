import styled from 'styled-components'
import CardQuestion from '../CardQuestion'
import {
  MdCoPresent,
  MdFeedback,
  MdOutlineQuestionAnswer
} from 'react-icons/md'
import { FaQuestion, FaNetworkWired, FaCommentsDollar } from 'react-icons/fa'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { LuScrollText } from 'react-icons/lu'

const cardData = [
  {
    img: <MdCoPresent />,
    title: 'Aprendizado Prático',
    description:
      'A monitoria proporciona um ambiente prático para aprender React, permitindo aos alunos aplicar imediatamente os conceitos teóricos em projetos reais.'
  },
  {
    img: <MdFeedback />,
    title: 'Feedback Personalizado',
    description:
      'Os alunos têm a oportunidade de receber feedback personalizado de um monitor, o que ajuda a identificar e corrigir erros de forma mais eficaz, acelerando o aprendizado.'
  },
  {
    img: <FaQuestion />,
    title: 'Resolução de Dúvidas em Tempo Real',
    description:
      'Durante as sessões de monitoria, os alunos podem esclarecer dúvidas instantaneamente, o que promove um entendimento mais profundo dos conceitos.'
  },
  {
    img: <LiaChalkboardTeacherSolid />,
    title: 'Abordagem Interativa',
    description:
      'A interação com um monitor torna o processo de aprendizado mais dinâmico e envolvente, facilitando a compreensão de conceitos mais complexos.'
  },
  {
    img: <MdOutlineQuestionAnswer />,
    title: 'Foco nas Necessidades Individuais',
    description:
      'Os monitores podem adaptar o ensino de acordo com as necessidades específicas de cada aluno, garantindo que todos avancem no seu próprio ritmo.'
  },
  {
    img: <FaNetworkWired />,
    title: 'Networking e Colaboração',
    description:
      'Estudar React em grupo através de monitoria cria oportunidades para os alunos se conectarem, colaborarem em projetos e compartilharem conhecimentos, enriquecendo a experiência de aprendizado.'
  },
  {
    img: <FaCommentsDollar />,
    title: 'Experiência Profissional',
    description:
      'A monitoria muitas vezes inclui insights práticos e dicas provenientes da experiência profissional do monitor, proporcionando aos alunos uma visão mais ampla e aplicada da tecnologia.'
  },
  {
    img: <LuScrollText />,
    title: 'Acesso a Recursos Exclusivos',
    description:
      'Além do material didático padrão, monitores podem disponibilizar recursos adicionais, como tutoriais, exemplos de código e projetos práticos que não estão facilmente disponíveis em outras fontes.'
  }
]

export default function CardsQuestionCollection() {
  return (
    <Cards>
      {cardData.map((card, index) => (
        <CardQuestion
          key={index}
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}
    </Cards>
  )
}

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
`
