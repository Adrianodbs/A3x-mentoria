import { FaWhatsapp } from "react-icons/fa";
import * as C from './styles'
import WppButton from "../../components/WppButton";
import Presentation from "../../components/Presentation/Presentation";

export default function About() {
  return <C.Container>
    <Presentation 
      title="Aqui começa à nossa jornada de desenvolvimento tecnológico!"
      subtitle="Fundada em 2023, a A3X mentoria tem como propósito, entregar um serviço de alta qualidade e de alto valor agregado para os nosso clientes.Ao contratar nossos serviços, você terá a oportunidade de aprimorar os seus conhecimentos em React, com um acompanhamento direto de um profissional."
    />
    <h2>Quer saber como podemos te ajudar? Clique no botão abaixo e agende um atendimento!</h2>
    <WppButton>
      <p>Agende um atendimento</p>
      <FaWhatsapp />
    </WppButton>
  </C.Container>
}
