import CardsQuestionCollection from '../../components/CardsQuestionCollection'
import Presentation from '../../components/Presentation/Presentation'
import * as C from './styles'

export default function Home() {
  return (
    <C.Container>
      <Presentation
        title="Monitoria em JavaScript e React:"
        subtitle="Você superando os desafios do Front End!"
      />
      <C.Questions>
        <h2>Por que você deveria aprender React através da monitoria?</h2>
        <span>Ensinamos muito mais que conteúdos para nossos alunos.</span>
        <CardsQuestionCollection />
      </C.Questions>
    </C.Container>
  )
}
