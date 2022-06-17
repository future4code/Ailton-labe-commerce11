import React from 'react';
import styled from 'styled-components'

const CarrinhoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid purple;
  width: 100%;
  padding-left: 8px;
  p{
    text-align: left;
  }
  button{
    margin: 15px;
  }
`



class Carrinho extends React.Component {
  valorTotal = () => {
    let totalValor = 0

    for(let produto of this.props.produtosNoCarrinho) {
      totalValor += produto.value * produto.quantidade
    }

    return totalValor
  }

  render (){
      return (
        <div>
          <CarrinhoContainer>
          <h3>Carrinho</h3>
          <p>Produtos:</p>
          {this.props.produtosNoCarrinho.map((item, index) => {
            return <div key={index}>
              <p >{item.quantidade}x</p>
              <p >{item.name}</p>
              <p >{item.value}</p>
              <button onClick={() => this.props.removeProdutoCarrinho(item.id)}>
                Remover
              </button>
            </div>
          })}

          <p>Valor total: R${this.valorTotal()},00</p>
          <button>Comprar</button>
            
          </CarrinhoContainer>
        </div>
    );
  }
}

export default Carrinho;
