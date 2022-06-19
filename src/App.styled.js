import styled from "styled-components";

import Fundo from "./img/galaxia.png";
import Fundo2 from "./img/galaxiaVirada.png";

// Container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: white;
  background-image: url(${Fundo});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 480px) {
    width: 100%;
    /* background-color: black; */
    background-image: url(${Fundo2});
    height: 100%;
  }
`;
// Header
export const Header = styled.header`
  height: 12%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Caveat", cursive;
  font-size: 2.2em;

  div {
    align-items: bottom;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    height: 10%;
    font-size: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-columns: 5fr 1fr;
      width: 90%;
      margin: 0 auto;
    }
    h1 {
      margin: 0;
      margin-bottom: 30px;
    }
    img {
      width: 100px;
      padding-top: 10%;
      margin: 0;
    }
  }
`;
export const Logo = styled.img`
  width: 140px;
  margin-top: 70px;
`;
export const InputHeader = styled.input`
  margin-left: 200px;
  width: 400px;
  border-top: none;
  border-left: none;
  border-right: none;
  background: transparent;
  border-bottom: 1px solid white;
  margin: 5px 5px;
  padding: 8px;
  color: white;

  @media screen and (max-device-width: 480px) {
    display: inline;
    font-size: 15px;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;
export const Button2 = styled.button`
  background: none;
  border: none;
  width: 50px;
  height: 50px;

  img {
    width: 30px;
  }

  @media screen and (max-device-width: 480px) {
    display: inline;
    width: 100%;
    img {
      width: 20px;
      padding-top: 0;
    }
  }
`;

export const LoginContainer = styled.a`
  text-decoration: none;
  img {
    width: 40px;
    padding: 0;
  }

  @media screen and (max-device-width: 480px) {
    /*     display: inline; */
    width: 100%;
    img {
      width: 30px;
      padding-top: 0;
    }
  }
`;
// Ordenação
export const OrdenarProdutos = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  h3,
  label {
    font-size: 16px;
  }

  select {
    margin-left: 5px;
    box-shadow: rgba(256, 256, 256, 0.4) 5px 5px,
      rgba(256, 256, 256, 0.3) 10px 10px, rgba(256, 256, 256, 0.2) 15px 15px,
      rgba(256, 256, 256, 0.1) 20px 20px, rgba(256, 256, 256, 0.05) 25px 25px;
  }

  @media screen and (max-device-width: 480px) {
    font-size: 13px;
    margin-top: 50px;
  }
`;
// Secton - Produtos
export const Section = styled.section`
  height: 68%;
  width: 100%;
  display: flex;
  gap: 20px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: inline;
    width: 100%;
  }
`;
export const Produtos = styled.div`
  display: flex;
  width: 70%;
  overflow-y: scroll;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const Card = styled.div`
  justify-content: center;
  text-align: center;
  margin: 20px 15px;
  border-radius: 15px;
  padding-bottom: 15px;
  width: 230px;
  box-shadow: 0px 5px 15px;
  background-color: white;
  font-weight: bold;

  p,
  h3 {
    color: black;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 40px auto;
  }
`;
export const ImgCamiseta = styled.img`
  width: 85%;
  height: 85%;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 255px;
  }
`;
export const ImgCarrinho = styled.img`
  width: 50px;
`;

export const Button = styled.button`
  background: none;
  width: 50px;
  height: 50px;
  border: none;
  margin-right: 11px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  margin-bottom: 10px;
`;
// Footer
export const Footer = styled.footer`
  position: fixed;
  width: 100%;
  heigth: 60px;
  bottom: 0;
  text-align: center;
  padding-top: 5px;

  h3 {
    margin: 0;
  }
  img {
    width: 35px;
    padding: 3px;
    margin-top: 0;
  }

  @media screen and (max-width: 480px) {
    height: 10%;
    font-size: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: initial;
  }
`;
