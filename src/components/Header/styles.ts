import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-color: var(--purple-100);
  color: #fff;

  h1{
    position: relative;
    display: flex;

    span{
      position: absolute;
      font-size: 18px;
      color: var(--purple-200);
      bottom: 8px;
      left: 54px;
    }
  }

  ul{
    display: flex;
    gap: 20px;
    align-items: center;

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
  }
  
`