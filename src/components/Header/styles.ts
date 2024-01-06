import styled from "styled-components";
import bg from '../../assets/img/bg-header.jpg'
interface ListProps {
  open: boolean;
}

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  box-shadow: 0px 6px 4px 7px rgba(169, 7, 202, 1);


  @media (max-width: 780px){
    height: 30vh;
  } 
`

export const Title = styled.h1<ListProps>`
  position: relative;
  display: flex;

  @media (max-width: 780px) {
    display: ${({ open }) => (open ? 'none' : 'block')};
  }

    span{
      position: absolute;
      font-size: 18px;
      color: var(--purple-200);
      bottom: 8px;
      left: 54px;
    }
`

export const List = styled.ul<ListProps>`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 780px) {
    font-weight: 500;
    opacity: ${({ open }) => (open ? '1' : '0')};
    pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
    transform: translateX(${({ open }) => (open ? '0' : '-100%')});
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    position: absolute;
    top: 10px;
    right: 0;
    width: 100%;
    padding: 10px 0;
    flex-direction: column;
  }

    a{
      text-decoration: none;
      color: #fff;
      font-weight: 500;
      transition: all .2s;

      &:hover{
        color: var(--purple-200);
      }
    }

    .budget{
      background-color: var(--purple-200);
      padding: 8px 24px;
      border-radius: 8px;
      transition: all .2s;

      &:hover{
        background-color: #fff;
      }
    }
`

export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 780px) {
    display: block;
    font-size: 24px;
    z-index: 99;
  }
`;