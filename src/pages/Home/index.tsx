import { FaWhatsapp } from 'react-icons/fa'
import CardsQuestionCollection from '../../components/CardsQuestionCollection'
import HowItWorks from '../../components/HowItWorks'
import Presentation from '../../components/Presentation/Presentation'
import Title from '../../components/Title'
import WppButton from '../../components/WppButton'
import * as C from './styles'

export default function Home() {
  return (
    <C.Container>
      <Presentation
        title="Mentoria em JavaScript e React:"
        subtitle="Você superando os desafios do Front End!"
      />
      <C.Questions>
        <Title
          title="Por que você deveria aprender React através da mentoria?"
          subtitle="Ensinamos muito mais que conteúdos para nossos alunos."
        />

        <CardsQuestionCollection />
      </C.Questions>
      <HowItWorks />
      <div className='btn'>
        <WppButton>
          <p>Agende um atendimento</p>
          <FaWhatsapp />
        </WppButton>  
      </div>
     
    </C.Container>
  )
}
