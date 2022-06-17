import React from 'react';
import styled from 'styled-components'
import Astronauta from '../../img/RoboBalao.png'

const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding-left: 8px;
  color: white;

  p{
    text-align: left;
    font-weight: bold;
  }
  input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid white;
    margin: 5px 15px;
    padding: 8px;
    color: white;
  }
  img {
    margin-top: 50px;
  }
`

class Filtros extends React.Component {
  render (){
    return (
    <FiltrosContainer>
      <h3>Filtros</h3>
      <p>Valor Mínimo:</p>
      <input 
        type="number"
        value={this.props.valorMin} 
        placeholder="Digite um valor mínimo" 
        onChange={this.props.atualizaValorMin}
      />
      <p>Valor Máximo:</p>
      <input 
        type="number"
        value={this.props.valorMax} 
        placeholder="Digite um valor máximo" 
        onChange={this.props.atualizaValorMax}
      />
      <img src={Astronauta} alt='Astronauta balão'/>
    </FiltrosContainer>
    
  );
}
}

export default Filtros;
