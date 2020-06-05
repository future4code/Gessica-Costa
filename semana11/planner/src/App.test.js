import React from 'react';
import { render, fireEvent, wait, getByText, getByLabelText } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import userEvent from '@testing-library/user-event'

describe('Renderizacao inicial', () => {

  test('Renderiza tudo corretamente', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        'text': 'Tarefa requisicao teste',
        'day': 'Domingo',
        'id': 'ahkdjhasdhasdlk'
      }]
    })

    const { getByPlaceholderText,
      findByText,
      getByText } = render(<App />)

    const input = getByPlaceholderText('Nova tarefa')
    expect(input).toBeInTheDocument()

    expect(getByText('Adicionar Tarefa')).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalled()

    const tarefa = await findByText('Tarefa requisicao teste')

    expect(tarefa).toBeInTheDocument()
  })
})

describe('Criar tarefa', () => {
  test('Cria a tarefa com sucesso no domingo', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        'text': 'Tarefa requisicao teste',
        'day': 'Domingo',
        'id': 'ahkdjhasdhasdlk'
      }]
    })

    axios.post = jest.fn().mockResolvedValue()

    const {
      getByPlaceholderText,
      getByText,
      getByTestId
    } = render(<App />)

    const input = getByPlaceholderText('Nova tarefa')

    await userEvent.type(input, 'Tarefa requisicao teste')
    userEvent.selectOptions(getByTestId('dias'), getByTestId('domingo').value)

    expect(input).toHaveValue('Tarefa requisicao teste')

    const button = getByText(/Adicionar/)
    userEvent.click(button)

    await wait(() => expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-gessica', {
      text: 'Tarefa requisicao teste',
      day: 'Domingo'
    }))

    await wait(() => expect(axios.get).toHaveBeenCalledTimes(2))
    await wait(() => expect(input).toHaveValue(''))
  })
})

describe('Apaga tarefa', () => {
  test('Apaga tarefa com sucesso no domingo', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        'text': 'Tarefa requisicao teste',
        'day': 'Domingo',
        'id': 'ahkdjhasdhasdlk'
      }]
    })

    axios.delete = jest.fn().mockResolvedValue()

    const {
      getByText
    } = render(<App />)
    await wait(() => expect(getByText('Tarefa requisicao teste')).toBeInTheDocument())
    await wait(() => expect(getByText('Apagar')).toBeInTheDocument())

    const button = getByText('Apagar')
    userEvent.click(button)

    await wait(() => expect(axios.delete).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-gessica/ahkdjhasdhasdlk'))
    await wait(() => expect(axios.get).toHaveBeenCalledTimes(2))
    await wait(() => expect(getByText('Apagar')).toBeInTheDocument())
  })
})

// describe('Erro na requisição', () => {
//   test('Erro na requisição', async () => {
//     axios.get = jest.fn().mockRejectedValueOnce(value)

//     const { getByPlaceholderText,
//       findByText,
//       getByText } = render(<App />)

//     const input = getByPlaceholderText('Nova tarefa')
//     expect(input).toBeInTheDocument()

//     expect(getByText('Adicionar Tarefa')).toBeInTheDocument()

//     expect(axios.get).toHaveBeenCalled()

//     const tarefa = await findByText('Tarefa requisicao teste')

//     expect(tarefa).toBeInTheDocument()
//   })
// })