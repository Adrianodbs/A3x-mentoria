import styled from "styled-components"

interface ButtonProps{
  children: React.ReactNode
}

export default function WppButton({children}:ButtonProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+5574999456227'; 
    const message = 'Olá, gostaria de agendar um atendimento!'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };
  return (
    <Container onClick={handleWhatsAppClick}>
      {children}
    </Container>
  )
}

const Container = styled.button`
  display: flex;
  justify-content: center;
  width: 300px;
  align-items: center;
  padding: 8px 12px;
  border: none;
  border-radius: 12px;
  color: var(--purple-200);
  background-color: #29AD17;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover{
    transform: scale(1.07);
  }
`
