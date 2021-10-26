import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

export default class GitTeste extends Component{
  constructor(props){
    super(props);
    this.state = {
      listaReps = [10],
    }
  }

  componentDidMount(){
    fetch('https://api.github.com/users/{this.pessoaRep}/repos')
    .then(resposta => resposta.json())
    .then(dados => this.setState({
      listaReps: dados
    }
      ))
  }

  render(){
    <div>
      <main>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Descricao</th>
                <th>Data criacao</th>
                <th>Tamanho</th>
              </tr>
              <tbody>
                {
                  this.state.listaReps.map((repositorio) => {
                    return (
                      <tr key = {repositorio.id}>
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
            </thead>
          </table>
      </main>
    </div>
  }
}
