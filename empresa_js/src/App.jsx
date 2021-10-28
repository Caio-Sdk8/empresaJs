import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class GitTeste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaReps: [10],
      pessoaBusc: ''
    }
  }

  buscarUsuario(){
    fetch('https://api.github.com/users/' + this.state.pessoaBusc +'/repos')
    .then(resposta => resposta.json())
    .then(dados => this.setState({
      listaReps: dados
    }
    ))
    console.log('https://api.github.com/users/' + this.state.pessoaBusc +'/repos')
  }
  componentDidMount() {
  }
  componentWillUnmount(){}

  atualizaNomeUser = async (event) => {
    console.log("Digitando")

    await this.setState({
      nomeUsuario: event.target.value
    });

    console.log(this.state.nomeUsuario);
  }

  render() {
    return (<div>
      <main>
        <form onSubmit={this.buscarUsuario}>
          <input onChange={this.atualizaNomeUser} type="text" placeholder="Insira um usuário" />
          <button type="submit" disable={this.state.nomeUsuario === '' ? 'none' : ''}>Procurar</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Descricao</th>
              <th>Data criacao</th>
              <th>Tamanho</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.listaReps.map((repositorio) => {
                  return (
                    <tr key={repositorio.id}>
                      <td>{repositorio.id}</td>
                      <td>{repositorio.name}</td>
                      <td>{repositorio.description}</td>
                      <td>{repositorio.created_at}</td>
                      <td>{repositorio.size}</td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
      </main>
    </div>)
  }
}

function App() {
  return (
    <div>
      <GitTeste></GitTeste>
    </div>
  );
}

export default App;
