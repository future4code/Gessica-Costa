import React, { useState, useEffect } from 'react';
import { useForm } from './Hooks/useForm'
import './App.css';
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const ContainerWeek = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 50vh;
`
const WeekDay = styled.div`
  border-left: 1px solid;
  min-width: 200px;
  min-height: 100%;
`

function App() {
  const [tasks, setTasks] = useState([])
  const { form, onChange, resetValues } = useForm({
    text: '',
    day: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask()
  }

  const handleInputChange = e => {
    const { value, name } = e.target;
    onChange(name, value);
  }

  useEffect(() => {
    getTasks()
  }, [])

  const getTasks = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-gessica')
      .then((res) => {
        setTasks(res.data)
      })
      .catch((err) => {
        window.alert('Pegar tarefas falhou.')
      })
  }

  const createTask = () => {
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-gessica', form)
      .then((res) => {
        window.alert('Tarefa criada com sucesso!')
        getTasks()
        resetValues()
      })
      .catch((err) => {
        window.alert('Criar tarefa falhou.')
      })
  }

  const deleteTask = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-gessica/${id}`)
      .then((res) => {
        window.alert('Tarefa apagada com sucesso!')
        getTasks()
      })
      .catch((err) => {
        window.alert('Apagar tarefa falhou.')
      })
  }

  const domingo = tasks.filter(task => {
    if (task.day === 'Domingo') {
      return task
    }
  }).map(task => {
    return <div key={task.id}>
      <li>{task.text}</li>
      <button onClick={() => deleteTask(task.id)}>Apagar</button>
    </div>
  })

  const segunda = tasks.filter(task => {
    if (task.day === 'Segunda') {
      return task
    }
  }).map(task => {
    return <div key={task.id}>
      <li>{task.text}</li>
      <button onClick={() => deleteTask(task.id)}>Apagar</button>
    </div>
  })

  const terca = tasks.filter(task => {
    if (task.day === 'Terça') {
      return task
    }
  }).map(task => {
    return <div key={task.id}>
      <li>{task.text}</li>
      <button onClick={() => deleteTask(task.id)}>Apagar</button>
    </div>
  })

  const quarta = tasks.filter(task => {
    if (task.day === 'Quarta') {
      return task
    }
  }).map(task => {
    return <div key={task.id}>
      <li>{task.text}</li>
      <button onClick={() => deleteTask(task.id)}>Apagar</button>
    </div>
  })

  const quinta = tasks.filter(task => {
    if (task.day === 'Quinta') {
      return task
    }
  }).map(task => {
    return <div key={task.id}>
      <li>{task.text}</li>
      <button onClick={() => deleteTask(task.id)}>Apagar</button>
    </div>
  })

  const sexta = tasks.filter(task => {
    if (task.day === 'Sexta') {
      return task
    }
  }).map(task => {
    return <div key={task.id}>
      <li>{task.text}</li>
      <button onClick={() => deleteTask(task.id)}>Apagar</button>
    </div>
  })

  const sabado = tasks.filter(task => {
    if (task.day === 'Sábado') {
      return task
    }
  }).map(task => {
    return <div key={task.id}>
      <li>{task.text}</li><button onClick={() => deleteTask(task.id)}>Apagar</button>
    </div>
  })

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type={'text'} value={form.text} name={'text'} onChange={handleInputChange} required></input>
        <select type={'text'} value={form.day} name={'day'} onChange={handleInputChange} required>
          <option value={''}></option>
          <option value={'Domingo'}>Domingo</option>
          <option value={'Segunda'}>Segunda</option>
          <option value={'Terça'}>Terça</option>
          <option value={'Quarta'}>Quarta</option>
          <option value={'Quinta'}>Quinta</option>
          <option value={'Sexta'}>Sexta</option>
          <option value={'Sábado'}>Sábado</option>
        </select>
        <button >Adicionar Tarefa</button>
      </form>
      <ContainerWeek>
        <WeekDay>
          <h2>Domingo</h2>
          <ul>
            {domingo}
          </ul>
        </WeekDay>
        <WeekDay>
          <h2>Segunda</h2>
          <ul>
            {segunda}
          </ul>
        </WeekDay>
        <WeekDay>
          <h2>Terça</h2>
          <ul>
            {terca}
          </ul>
        </WeekDay>
        <WeekDay>
          <h2>Quarta</h2>
          <ul>
            {quarta}
          </ul>
        </WeekDay>
        <WeekDay>
          <h2>Quinta</h2>
          <ul>
            {quinta}
          </ul>
        </WeekDay>
        <WeekDay>
          <h2>Sexta</h2>
          <ul>
            {sexta}
          </ul>
        </WeekDay>
        <WeekDay>
          <h2>Sábado</h2>
          <ul>
            {sabado}
          </ul>
        </WeekDay>
      </ContainerWeek>
    </Container>
  );
}

export default App;
