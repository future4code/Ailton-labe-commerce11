import React from 'react';
import Cam1 from './img/cam1.png'
import Cam2 from './img/cam2-.png'
import Cam3 from './img/cam3-.png'
import Cam4 from './img/cam4-.png'
import Cam5 from './img/cam5.png'
import Cam6 from './img/cam6-.png'
import Cam7 from './img/cam7-.png'
import Cam8 from './img/cam8-.png'
import Lupa from './img/lupa.png' 
import CarrinhoImg from './img/carrinho.png'
import styled from 'styled-components'
import Usain from './img/RoboUsain.png'
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  margin:0 ;
  padding: 0;
  box-sizing: border-box;
`

const Container = styled.div `
display: flex;
flex-direction: column;
height: 100vh;
`

const Section = styled.section `
  height: 70%;
  width: 96vw;
  display: flex;
  gap: 20px;
  padding: 20px;
`
const Header = styled.header`
  border: 1px solid blue;
  height: 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center
`

const InputHeather = styled.input`
  margin-left: 250px;
  width: 400px;
  border-top: none;
  border-left: none;
  border-right: none;
`

const Button2 = styled.button`
  background: none;
  border: none;
  width: 50px;
  height: 50px;
  margin-left: -90px;
  margin-bottom: 10px;
img{
  width: 30px;
}
:hover{
  opacity: 0.5
}
`

const Logo = styled.img`
width: 50px;
margin-left: 20px;
margin-top: 5px;
`

const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  width: 15%;
  padding-left: 8px;
  input {
    margin: 5px 15px;

  }
`
const Produtos = styled.div`
  display: flex;
  border: 1px solid red;
  width: 70%;
  overflow: scroll;
  flex-wrap: wrap;
  
`

const Carrinho = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid purple;
  width: 15%;
  padding-left: 8px;
  button{
    margin: 15px;
  }
`
const Footer = styled.footer `
border: 1px solid blue;
height: 15%;
`

const Card =styled.div `
  justify-content: center;
  text-align: center;
  margin: 20px 15px;
  border-radius: 15px;
  padding-bottom: 15px;
  width: 230px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;  
  background-color: white;  
  font-weight:bold;
  
img {
  width: 85%;
  higth: 85%;
  align-items: center;
  
}
`

const Button = styled.button`
  background: none;
  border: 1px solid black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 11px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  margin-bottom: 10px;
  img {
    width: 30px;
  }
`

class App extends React.Component {
  state = {
    produtos: [{
      id: 1,
      name: "Imagem 1",
      value: 100.00,
      imageUrl: Cam1
    },
    {
      id: 2,
      name: "Imagem 2",
      value: 100.00,
      imageUrl: Cam2
    },
    {
      id: 3,
      name: "Imagem 3",
      value: 300.00,
      imageUrl: Cam3
    },
    {
      id: 4,
      name: "Imagem 4",
      value: 400.00,
      imageUrl: Cam4
    },
    {
      id: 5,
      name: "Imagem 5",
      value: 500.00,
      imageUrl: Cam5
    },
    {
      id: 6,
      name: "Imagem 6",
      value: 600.00,
      imageUrl: Cam6
    },
    {
      id: 7,
      name: "Imagem 7",
      value: 700.00,
      imageUrl: Cam7
    },
    {
      id: 8,
      name: "Imagem 8",
      value: 800.00,
      imageUrl: Cam8
    },
    {
      id: 9,
      name: "Imagem 9",
      value: 900.00,
      imageUrl: Cam1
    },
  ],
  valorMin: '',
  valorMax: '',
  buscador: '',
  ordenador: '',
  valorTotal: 0,
  addCarrinho: [] 
  };
  
  atualizaValorMin = (event) => {
    this.setState({
      valorMin: event.target.value
    });
  };

  atualizaValorMax = (event) => {
    this.setState({
      valorMax: event.target.value
    });
  };

  atualizaBuscador = (event) => {
    this.setState({
      buscador: event.target.value
    });
  };

  atualizaOrdem = (event) => {
    this.setState({
      paramOrdem: event.target.value
    });
  };

  adicionarCarrinho = (produto) => {
    const carrinhoNovo = [...this.state.addCarrinho];
    carrinhoNovo.push(produto);
    this.setState({addCarrinho: carrinhoNovo});
  }
  
/*   filtrosProdutos = () => {
    return(
      this.state.produtos
      .filter(produto => {
        return (
          produto.value >= this.state.valorMin,
          this.state.valorMin === ""
        )
      })
      .filter(produto => {
        return (
          produto.value <= this.state.valorMax,
          this.state.valorMax === ""
        )
      })
      .filter(produto => {
        return (produto.name
          .toLowerCase()
          .includes(this.state.buscador.toLowerCase())
        )
      })
    )} */

  render(){
    return (
      <Container>
      <Header> 
        <Logo src={Usain}/>
        <h1>Astrodev Store</h1>
        <InputHeather 
          type="text"
          value={this.state.buscador} 
          placeholder="Digite o nome do produto" 
          onChange={this.state.atualizaBuscador}  
           />
        <Button2 onClick={() => this.state.atualizaBuscador}><img src= {Lupa} alt='carrinho' /></Button2>
      </Header>
      <Section className="main-container">
        <Filtros>
          <h3>Filtros</h3>
          <p>Valor Minimo:</p>
          <input 
          type="number"
          value={this.state.valorMin} 
          placeholder="Digite um valor mínimo" 
          onChange={this.state.atualizaValorMin}
           />
          <p>Valor Maximo:</p>
          <input 
          type="number"
          value={this.state.valorMax} 
          placeholder="Digite um valor máximo" 
          onChange={this.state.atualizaValorMax}
           />
{/*           <p>Busca por Nome:</p>
          <input 
          type="text"
          value={this.state.buscador} 
          placeholder="Digite o nome do produto" 
          onChange={this.state.atualizaBuscador}  
           /> */}

        </Filtros>
        <Produtos>
        {this.state.produtos.map((produto,index) => {
          return (
            <div key={index}>
              <Card>
              <img src={produto.imageUrl} alt={produto.name}/>
              <p>{produto.name}</p>
              <p>R$ {produto.value},00</p>
              <Button onClick={() => this.adicionarCarrinho(produto)}><img src={CarrinhoImg} alt='carrinho'/></Button>
              </Card>
            </div>
          )
        } ) }
        </Produtos>
        <Carrinho>
          <h3>Carrinho</h3>
          <div>Produtos</div>
          <p>Valor Total:</p>
          <button>Comprar</button>
        </Carrinho>
      </Section>
      <Footer>Footer</Footer>
    </Container>
  );
  };
};

export default App;
