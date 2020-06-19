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
const Form = styled.form`
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 32px;
  text-align: left;

  label {
    margin-bottom: 8px;
  }

  select, input {
    margin-bottom: 16px;
  }
`
const ContainerWeek = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 50vh;
  border-top: 1px solid;
  padding: 26px;
`
const WeekDay = styled.div`
  border: 1px solid;
  min-width: 200px;
  min-height: 100%;
  margin: 8px;
  padding: 8px;
`
const Label = styled.label`
  margin-right: 8px;
`
const TaskItem = styled.div`
  margin-bottom: 8px;
`

function App() {
  const [tasks, setTasks] = useState([])
  const { form, onChange, resetValues } = useForm({
    text: '',
    day: ''
  })

  const TasksPerDay = (day) => {

    const filterTasks = tasks.filter(task => {
      if (task.day === day) {
        return task
      }
    }).map(task => {
      return <TaskItem key={task.id}>
        <Label>{task.text}</Label>
        <button onClick={() => deleteTask(task.id)}>APAGAR</button>
      </TaskItem>
    })

    return filterTasks
  }

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

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label>Nova Tarefa</label>
        <input type={'text'} value={form.text} name={'text'} onChange={handleInputChange} placeholder={'Nova tarefa'} required></input>
        <label htmlFor={'weekday'}>Dia da semana</label>
        <select data-testid={'dias'} id={'weekday'} type={'text'} value={form.day} name={'day'} onChange={handleInputChange} required>
          <option value={''}></option>
          <option data-testid={'domingo'} value={'Domingo'}>Domingo</option>
          <option data-testid={'segunda'} value={'Segunda'}>Segunda</option>
          <option data-testid={'terca'} value={'Terça'}>Terça</option>
          <option data-testid={'quarta'} value={'Quarta'}>Quarta</option>
          <option data-testid={'quinta'} value={'Quinta'}>Quinta</option>
          <option data-testid={'sexta'} value={'Sexta'}>Sexta</option>
          <option data-testid={'sabado'} value={'Sábado'}>Sábado</option>
        </select>
        <button>ADICIONAR TAREFA</button>
      </Form>
      <ContainerWeek>
        <WeekDay>
          <h2>Domingo</h2>
          {TasksPerDay('Domingo')}
        </WeekDay>
        <WeekDay>
          <h2>Segunda</h2>
          {TasksPerDay('Segunda')}
        </WeekDay>
        <WeekDay>
          <h2>Terça</h2>
          {TasksPerDay('Terça')}
        </WeekDay>
        <WeekDay>
          <h2>Quarta</h2>
          {TasksPerDay('Quarta')}
        </WeekDay>
        <WeekDay>
          <h2>Quinta</h2>
          {TasksPerDay('Quinta')}
        </WeekDay>
        <WeekDay>
          <h2>Sexta</h2>
          {TasksPerDay('Sexta')}
        </WeekDay>
        <WeekDay>
          <h2>Sábado</h2>
          {TasksPerDay('Sábado')}
        </WeekDay>
      </ContainerWeek>
    </Container>
  );
}

export default App;
