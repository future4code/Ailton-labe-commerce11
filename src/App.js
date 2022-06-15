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
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100%;
  border: 1px black solid
`

const Heather = styled.div`
  width: 100%;
  border: 1px black solid
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
    console.log(carrinhoNovo);
    console.log(addCarrinho);
  }



    /* 
    const produtoNoCarrinho = this.state.produtos.find (produto => idProduto === produto.id)

/*     if(produtoNoCarrinho) { */
/*       const novoProdutoCarrinho = this.state.addCarrinho.map(produto => {
        if(idProduto === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }
        return produto
      })  */

/*     } else { */
/*       const produtoAdicionar = this.state.produtos.find(produto => idProduto === produto.id) 
  
      const novoProdutoCarrinho = [...this.state.addCarrinho, {...produtoAdicionar, quantidade: 1}] */
/*       this.setState({addCarrinho: novoProdutoCarrinho}) */
    


  render(){
    return (
    <AppContainer>
      <Heather/>
      <div>
        {this.state.produtos.map((produto,index) => {
          return (
            <div key={index}>
              <img src={produto.imageUrl} alt={produto.name}/>
              <p>{produto.name}</p>
              <p>{produto.value}</p>
              <button onClick={() => this.adicionarCarrinho(produto)}>Adicionar ao carrinho</button>
            </div>
          )
        } ) }
      </div>
    </AppContainer>
  );
  };
};

export default App;
