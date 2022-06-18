import React from 'react'
import Cam1 from './img/cam1.png'
import Cam2 from './img/cam2.png'
import Cam3 from './img/cam3.png'
import Cam4 from './img/cam4.png'
import Cam5 from './img/cam5.png'
import Cam6 from './img/cam6.png'
import Cam7 from './img/cam7.png'
import Cam8 from './img/cam8.png'
import Cam9 from './img/cam9.png'
import Lupa from './img/lupa.png' 
import Fundo from './img/galaxia.png'
import Fundo2 from './img/galaxiaVirada.png'
import LogoAstronalta from './img/logoAstronalta.png'
import CarrinhoImg from './img/carrinho.png'
import Whats from './img/whats.png'
import Twitter from './img/twitter.png'
import Instagram from './img/instagram.png'

import styled from 'styled-components'

import Carrinho from './components/Carrinho/Carrinho';
import Filtros from './components/Filtros/Filtros';

// Container
const Container = styled.div `
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
`
// Header
const Header = styled.header`
  height: 12%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Caveat', cursive;
  font-size: 2.2em;

  @media screen and (max-width: 480px) {
    height: 10%;
    font-size: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
    display: grid;
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
`
const Logo = styled.img`
  width: 140px;
  margin-top: 70px;
`
const InputHeather = styled.input`
  margin-left: 250px;
  width: 400px;
  border-top: none;
  border-left: none;
  border-right: none;
  background: transparent;
  border-bottom: 1px solid white;
  margin: 5px 15px;
  padding: 8px;
  color: white;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: inline;
    font-size: 15px;  
    margin: 0;
    padding: 0;
    width: 100%;
  } 
`
const Button2 = styled.button`
  background: none;
  border: none;
  width: 50px;
  height: 50px;

  img {
    width: 30px;
  }
  
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: inline;
    width: 100%;
    img{
    width: 20px;
    padding-top: 0;
    
  }
  } 
`
// Ordenação
const OrdenarProdutos = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  h3, label {
    font-size: 16px;
  }

  select {
    margin-left: 5px;
    box-shadow: rgba(256, 256, 256, 0.4) 5px 5px, 
                rgba(256, 256, 256, 0.3) 10px 10px, 
                rgba(256, 256, 256, 0.2) 15px 15px, 
                rgba(256, 256, 256, 0.1) 20px 20px, 
                rgba(256, 256, 256, 0.05) 25px 25px;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 13px; 
    margin-top: 50px 
   
  } 
`
// Secton - Produtos
const Section = styled.section `
  height: 70%;
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
`
const Produtos = styled.div`
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
`
const Card =styled.div `
  justify-content: center;
  text-align: center;
  margin: 20px 15px;
  border-radius: 15px;
  padding-bottom: 15px;
  width: 230px;
  box-shadow: 0px 5px 15px;  
  background-color: white;  
  font-weight:bold;


  p, h3 {
    color: black;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 40px auto;
  }
`
const ImgCamiseta = styled.img `
    width: 85%;
    height: 85%;
    align-items: center;

    @media screen and (max-width: 480px) {
    height: 255px;
    }
`
const ImgCarrinho = styled.img`
     width: 50px;
`

const Button = styled.button`
  background: none;
  width: 50px;
  height: 50px;
  border: none;
  margin-right: 11px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  margin-bottom: 10px;
 
`
// Footer
const Footer = styled.footer `
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: center;
  padding: 0;

  h3 {
    margin: 0;
  }
  img{
      width: 38px;
      padding: 3px;
      padding-top: 10px; 
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
`
class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Astronauta meditando",
        value: 100.00,
        imageUrl: Cam1
      },
      {
        id: 2,
        name: "Astronauta entre planetas",
        value: 100.00,
        imageUrl: Cam2
      },
      {
        id: 3,
        name: "Astronauta com água viva",
        value: 300.00,
        imageUrl: Cam3
      },
      {
        id: 4,
        name: "Astronauta com criança",
        value: 400.00,
        imageUrl: Cam4
      },
      {
        id: 5,
        name: "Astronauta com bolhas",
        value: 500.00,
        imageUrl: Cam5
      },
      {
        id: 6,
        name: "Astronauta com sorvete",
        value: 600.00,
        imageUrl: Cam6
      },
      {
        id: 7,
        name: "Astronauta com balões",
        value: 700.00,
        imageUrl: Cam7
      },
      {
        id: 8,
        name: "Astronauta de skate",
        value: 800.00,
        imageUrl: Cam8
      },
      {
        id: 9,
        name: "Astronauta de bicicleta",
        value: 900.00,
        imageUrl: Cam9
      },
    ],
    valorMin: '',
    valorMax: Infinity,
    buscador: '',
    paramOrdem: '',
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
    let idProduto = produto.id
    console.log('funçao --', produto)
    const produtoNoCarrinho = this.state.addCarrinho?.find(item => idProduto === item.id)
    
    console.log(produtoNoCarrinho)

    if(produtoNoCarrinho) {
      const novoProduto = this.state.addCarrinho.map(produtoAdd => {
        if(idProduto === produtoAdd.id) {
          return {
            ...produtoAdd,
            quantidade: produtoAdd.quantidade + 1
          }
        }
        return produtoAdd
      })
      this.setState({ addCarrinho: novoProduto }) 
      

    } else {
      const novoProduto = {
        ...produto,
        quantidade: 1
      }
      console.log('else --', novoProduto)
      const novoProdutoCarrinho = [...this.state.addCarrinho, novoProduto] 
      console.log ('novo -- ', novoProduto)
      this.setState({ addCarrinho: novoProdutoCarrinho })
       
    }
  }

  removeProdutoCarrinho = (produtoId) => {
    const removeDoCarrinho = this.state.addCarrinho.map((produto) => {
      if(produto.id === produtoId) {
        return {
          ...produto,
          quantidade: produto.quantidade - 1
        }
      }
      return produto
    }).filter((produto) => produto.quantidade > 0)

    this.setState({ addCarrinho: removeDoCarrinho })
  }

  filtrosProdutos = () => {
    return(
      this.state.produtos
      .filter(produto => {
        return (
          produto.value >= this.state.valorMin ||
          this.state.valorMin === ""
        )
      })
      .filter(produto => {
        return (
          produto.value <= this.state.valorMax ||
          this.state.valorMax === ""
        )
      })
      .filter(produto => {
        return (produto.name
          .toLowerCase()
          .includes(this.state.buscador.toLowerCase())
        )
      })
      .sort((produtoAtual, proximoProduto) => {
        return (
          this.state.paramOrdem *
          (produtoAtual.value - proximoProduto.value)
        )
      })
    )
  }
  componentDidMount() {
    const carrinhoString = localStorage.getItem("carrinho")
    const carrinho = JSON.parse(carrinhoString)
    console.log('didmout--',carrinho)

    if (carrinho) {
      this.setState({ addCarrinho: carrinho })

    } 
  }

  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.addCarrinho))
  }

  render() {
    const produtosFiltrados = this.filtrosProdutos()
    return (
      <Container>
        <Header> 
          <Logo src={LogoAstronalta} alt="Logo"/>
          <h1>Astrodev T-shirt Store</h1>
          <div>
            <InputHeather 
              type="text"
              value={this.state.buscador} 
              placeholder="Digite o nome do produto" 
              onChange={this.atualizaBuscador}  
            />
            <Button2>
              <img src= {Lupa} alt='Lupa' />
            </Button2>
          </div>
          
        </Header>
        <OrdenarProdutos>
          <h3>Quantidade: {produtosFiltrados.length}</h3>
          <div>
            <label>Ordenação:</label>
            <select value={this.state.paramOrdem} onChange={this.atualizaOrdem}>
              <option value={1}>Crescente</option>
              <option value={-1}>Decrescente</option>
            </select>
          </div>
        </OrdenarProdutos>
      <Section>

        <Filtros 
          valorMin={this.state.valorMin}
          valorMax={this.state.valorMax}
          atualizaValorMax={this.atualizaValorMax} 
          atualizaValorMin={this.atualizaValorMin}
          filtrosProdutos={this.filtrosProdutos}
        />
        
        <Produtos>
          
          {produtosFiltrados.map((produto,index) => {
            return (
              <div key={index}>
                <Card>
                  <ImgCamiseta src={produto.imageUrl} alt={produto.name}/>
                  <p>{produto.name}</p>
                  <p>R$ {produto.value},00</p>
                  <Button onClick={() => this.adicionarCarrinho(produto)}><ImgCarrinho src={CarrinhoImg} alt='carrinho'/></Button>
                </Card>
              </div>
            )
          } ) }
        </Produtos>
        
        
        <Carrinho 
          produtosNoCarrinho={this.state.addCarrinho} 
          removeProdutoCarrinho={this.removeProdutoCarrinho}
        />
        
      </Section>
      <Footer>
        <h3>Nos siga nas redes-sociais:</h3>
        <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <img src= {Whats} alt="Whatsapp" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Footer>
    </Container>
  );
  };
};

export default App;
