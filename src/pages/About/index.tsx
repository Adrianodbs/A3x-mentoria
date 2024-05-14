import Button from "../../components/Button";
import { FaWhatsapp } from "react-icons/fa";
import * as C from './styles'

export default function About() {
  return <C.Container>
    <div>
      <h1>Aqui começa à nossa jornada de desenvolvimento tecnológico!</h1>
    </div>
    <div>
      <h3>Fundada em 2023, a A3X mentoria tem como propósito, entregar um serviço de alta qualidade e de alto valor agregado para os nosso clientes. <br /> Ao contratar nossos serviços, você terá a oportunidade de aprimorar os seus conhecimentos em React, com um acompanhamento direto de um profissional <br /> Quer saber como podemos te ajudar? Clique no botão abaixo e agende um atendimento!</h3>
    </div>
    <Button>
      <p>Agende um atendimento</p>
      <FaWhatsapp />
    </Button>
  </C.Container>
}
