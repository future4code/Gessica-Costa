import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: ${({ completa }) => (completa ? 'left' : 'right')};
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filter: '',
    tarefaPendente: "",
    tarefaCompleta: ""
  }

  componentDidUpdate() {
    const novaTarefa = this.state
    localStorage.setItem('tarefa', JSON.stringify(novaTarefa))

    const tarefaString = localStorage.getItem('tarefa')
    const tarefaObjeto = JSON.parse(tarefaString)
    console.log(tarefaObjeto)
  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novoTarefa = [novaTarefa, ...this.state.tarefas]
    this.setState({
      tarefas: novoTarefa,
      inputValue: ''
    })
  }

  oganizaTarefa = () => {
    let tarefasPendentes
    const tarefasCompletas = this.state.tarefas.filter(tarefa => {
      if (tarefa.completa) {
        return tarefa
      } else {
        tarefasPendentes = tarefa
      }

    })
    this.setState({
      tarefaCompleta: tarefasCompletas,
      tarefasPendentes: tarefasPendentes
    })
  }

  selectTarefa = (id) => {
    const novoPercorrer = this.state.tarefas.map(tarefa => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novoPercorrer })
  }

  apagaTarefa = (id) => {
    const novoPercorrer = this.state.tarefas.masp(tarefa => {
      if(id !== tarefa.id) {
        return tarefa
      }
    })
    this.setState({ tarefas: novoPercorrer})
  }

  apagaTarefa = (id) => {
    const novoPercorrer = this.state.tarefas.filter(tarefa => {
      if (id !== tarefa.id) {
        return tarefa
      }
    })
    this.setState({ tarefas: novoPercorrer })
  }

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={() => this.apagaTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
          <TarefaCompleta>
            {this.state.tarefaCompleta}
          </TarefaCompleta>
        </TarefaList>
      </div>
    )
  }
}

export default App
