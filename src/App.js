import React from "react";
import Cam1 from "./img/cam1.png";
import Cam2 from "./img/cam2.png";
import Cam3 from "./img/cam3.png";
import Cam4 from "./img/cam4.png";
import Cam5 from "./img/cam5.png";
import Cam6 from "./img/cam6.png";
import Cam7 from "./img/cam7.png";
import Cam8 from "./img/cam8.png";
import Cam9 from "./img/cam9.png";
import Lupa from "./img/lupa.png";
import LogoAstronalta from "./img/logoAstronalta.png";
import CarrinhoImg from "./img/carrinho.png";
import Whats from "./img/whats.png";
import Twitter from "./img/twitter.png";
import Instagram from "./img/instagram.png";
import Carrinho from "./components/Carrinho/Carrinho";
import Filtros from "./components/Filtros/Filtros";
import {
  Container,
  Section,
  Header,
  Logo,
  InputHeader,
  Button2,
  OrdenarProdutos,
  Card,
  Produtos,
  Button,
  ImgCamiseta,
  ImgCarrinho,
  Footer,
} from "./App.styled";

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Astronauta meditando",
        value: 100.0,
        imageUrl: Cam1,
      },
      {
        id: 2,
        name: "Astronauta entre planetas",
        value: 100.0,
        imageUrl: Cam2,
      },
      {
        id: 3,
        name: "Astronauta com água viva",
        value: 300.0,
        imageUrl: Cam3,
      },
      {
        id: 4,
        name: "Astronauta com criança",
        value: 400.0,
        imageUrl: Cam4,
      },
      {
        id: 5,
        name: "Astronauta com bolhas",
        value: 500.0,
        imageUrl: Cam5,
      },
      {
        id: 6,
        name: "Astronauta com sorvete",
        value: 600.0,
        imageUrl: Cam6,
      },
      {
        id: 7,
        name: "Astronauta com balões",
        value: 700.0,
        imageUrl: Cam7,
      },
      {
        id: 8,
        name: "Astronauta de skate",
        value: 800.0,
        imageUrl: Cam8,
      },
      {
        id: 9,
        name: "Astronauta de bicicleta",
        value: 900.0,
        imageUrl: Cam9,
      },
    ],
    valorMin: "",
    valorMax: Infinity,
    buscador: "",
    paramOrdem: "",
    valorTotal: 0,
    addCarrinho: [],
  };

  atualizaValorMin = (event) => {
    this.setState({
      valorMin: event.target.value,
    });
  };

  atualizaValorMax = (event) => {
    this.setState({
      valorMax: event.target.value,
    });
  };

  atualizaBuscador = (event) => {
    this.setState({
      buscador: event.target.value,
    });
  };

  atualizaOrdem = (event) => {
    this.setState({
      paramOrdem: event.target.value,
    });
  };

  adicionarCarrinho = (produto) => {
    let idProduto = produto.id;
    const produtoNoCarrinho = this.state.addCarrinho?.find(
      (item) => idProduto === item.id
    );

    if (produtoNoCarrinho) {
      const novoProduto = this.state.addCarrinho.map((produtoAdd) => {
        if (idProduto === produtoAdd.id) {
          return {
            ...produtoAdd,
            quantidade: produtoAdd.quantidade + 1,
          };
        }
        return produtoAdd;
      });
      this.setState({ addCarrinho: novoProduto });
    } else {
      const novoProduto = {
        ...produto,
        quantidade: 1,
      };
      const novoProdutoCarrinho = [...this.state.addCarrinho, novoProduto];
      this.setState({ addCarrinho: novoProdutoCarrinho });
    }
  };

  removeProdutoCarrinho = (produtoId) => {
    const removeDoCarrinho = this.state.addCarrinho
      .map((produto) => {
        if (produto.id === produtoId) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);

    this.setState({ addCarrinho: removeDoCarrinho });
  };

  filtrosProdutos = () => {
    return this.state.produtos
      .filter((produto) => {
        return (
          produto.value >= this.state.valorMin || this.state.valorMin === ""
        );
      })
      .filter((produto) => {
        return (
          produto.value <= this.state.valorMax || this.state.valorMax === ""
        );
      })
      .filter((produto) => {
        return produto.name
          .toLowerCase()
          .includes(this.state.buscador.toLowerCase());
      })
      .sort((produtoAtual, proximoProduto) => {
        return (
          this.state.paramOrdem * (produtoAtual.value - proximoProduto.value)
        );
      });
  };
  componentDidMount() {
    const carrinhoString = localStorage.getItem("carrinho");
    const carrinho = JSON.parse(carrinhoString);

    if (carrinho) {
      this.setState({ addCarrinho: carrinho });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.addCarrinho));
  }

  render() {
    const produtosFiltrados = this.filtrosProdutos();
    return (
      <Container>
        <Header>
          <Logo src={LogoAstronalta} alt="Logo" />
          <h1>Astrodev T-shirt Store</h1>
          <div>
            <InputHeader
              type="text"
              value={this.state.buscador}
              placeholder="Digite o nome do produto"
              onChange={this.atualizaBuscador}
            />
            <Button2>
              <img src={Lupa} alt="Lupa" />
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
            {produtosFiltrados.map((produto, index) => {
              return (
                <div key={index}>
                  <Card>
                    <ImgCamiseta src={produto.imageUrl} alt={produto.name} />
                    <p>{produto.name}</p>
                    <p>R$ {produto.value},00</p>
                    <Button onClick={() => this.adicionarCarrinho(produto)}>
                      <ImgCarrinho src={CarrinhoImg} alt="carrinho" />
                    </Button>
                  </Card>
                </div>
              );
            })}
          </Produtos>

          <Carrinho
            produtosNoCarrinho={this.state.addCarrinho}
            removeProdutoCarrinho={this.removeProdutoCarrinho}
          />
        </Section>
        <Footer>
          <h3>Nos siga nas redes-sociais:</h3>
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whats} alt="Whatsapp" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </Footer>
      </Container>
    );
  }
}

export default App;
