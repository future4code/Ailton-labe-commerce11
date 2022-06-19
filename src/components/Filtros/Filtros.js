import React from "react";
import styled from "styled-components";
import Astronauta from "../../img/RoboBalao.png";

const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  color: white;

  p {
    text-align: left;
    font-weight: bold;
    padding-left: 10px;
  }
  input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid white;
    margin: 5px 0;
    color: white;
    width: 90%;
    line-height: 26px;
  }
  img {
    margin-top: 60px;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-top: 10px;

    div {
      display: grid;
      grid-template-columns: 110px 1fr;
      margin: 0 auto;
    }
    input {
      margin: 0;
      width: 100%;
    }
    p {
      padding: 0;
    }

    h3 {
      display: none;
    }

    img {
      display: none;
    }
  }
`;

class Filtros extends React.Component {
  render() {
    return (
      <FiltrosContainer>
        <h3>Filtros</h3>
        <div>
          <p>Valor Mínimo:</p>
          <input
            type="number"
            value={this.props.valorMin}
            placeholder="Digite um valor mínimo"
            onChange={this.props.atualizaValorMin}
          />
        </div>
        <div>
          <p>Valor Máximo:</p>
          <input
            type="number"
            value={this.props.valorMax}
            placeholder="Digite um valor máximo"
            onChange={this.props.atualizaValorMax}
          />
        </div>
        <img src={Astronauta} alt="Astronauta balão" />
      </FiltrosContainer>
    );
  }
}

export default Filtros;
