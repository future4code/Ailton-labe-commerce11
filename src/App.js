import React from 'react';
import './App.css';
import Cam1 from './img/cam1.png'
import Cam2 from './img/cam2-.png'
import Cam3 from './img/cam3-.png'
import Cam4 from './img/cam4-.png'
import Cam5 from './img/cam5.png'
import Cam6 from './img/cam6-.png'
import Cam7 from './img/cam7-.png'
import Cam8 from './img/cam8-.png'
import Cam9 from './img/cam9-.png'
import CarrinhoImg from './img/carrinho.png'
import styled from 'styled-components'


const Header = styled.header`
border: 1px solid blue;
`
const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  width: 15%;

  input {
    margin: 5px 15px;

  }
`

const Produtos = styled.div`
  display: flex;
  border: 1px solid red;
  width: 70%;
  flex-direction: column;
  overflow: scroll;
  flex-wrap: wrap;
  

`

const Carrinho = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid purple;
  width: 15%;

  button{
    margin: 15px;
  }
`
const Footer = styled.footer `
border: 1px solid blue;
`

const Card =styled.div `
  justify-content: center;
  text-align: center;
  margin: 15px;
  border-radius: 15px;
  padding-bottom: 15px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;  
  background-color: white;  
  font-weight:bold;
  
img {
  width: 85%;
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
      imageUrl: Cam9
    },
  ],
  valorMin: 0,
  valorMax: 0,
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

  render(){
    return (
      <div className="container">
      <Header>Logo</Header>
      <section className="main-container">
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
            placeholder="Digite um valor mínimo" 
            onChange={this.state.atualizaValorMax}
           />
          <p>Busca por Nome:</p>
          <input 
           type="text"
           />

        </Filtros>
        <Produtos>
          <div>Produtos Card</div>
          <div>
        {this.state.produtos.map((produto,index) => {
          return (
            <div key={index}>
              <Card>
              <img src={produto.imageUrl} alt={produto.name}/>
              <p>{produto.name}</p>
              <p>R$ {produto.value},00</p>
              <Button onClick={() => this.adicionarCarrinho(produto)}><img src= {CarrinhoImg} /></Button>
              </Card>
            </div>
          )
        } ) }
      </div>
        </Produtos>
        <Carrinho>
          <h3>Carrinho</h3>
          <div>Produtos</div>
          <p>Valor Total:</p>
          <button>Comprar</button>
        </Carrinho>
      </section>
      <Footer>Footer</Footer>
    </div>
  );
  };
};

export default App;
