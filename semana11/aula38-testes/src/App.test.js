import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import App from "./App";
import Post from "./components/Post";

test('Criar novo post', () => {
    const { getByPlaceholderText, getByText } = render(<App />)

    const input = getByPlaceholderText('Novo post')

    fireEvent.change(input, {
        target: {
            value: 'post teste'
        }
    })

    const button = getByText(/Adicionar/)

    fireEvent.click(button)

    expect(input).toHaveValue('post teste')
})

test('Curtir post', () => {
    const { getByPlaceholderText, getByText } = render(<App />)

    const input = getByPlaceholderText('Novo post')

    fireEvent.change(input, {
        target: {
            value: 'post teste'
        }
    })

    const buttonAdiconar = getByText(/Adicionar/)

    fireEvent.click(buttonAdiconar)

    const buttonCurtir = getByText(/Curtir/)

    fireEvent.click(buttonCurtir)

    const buttonDescurtir = getByText('Descurtir')

    expect(buttonDescurtir).toBeInTheDocument('Descsjdfhurtir')
})

test('Apagar post', () => {
    const { getByPlaceholderText, getByText } = render(<App />)

    const input = getByPlaceholderText('Novo post')

    fireEvent.change(input, {
        target: {
            value: 'post teste'
        }
    })

    const buttonAdiconar = getByText(/Adicionar/)

    fireEvent.click(buttonAdiconar)

    const buttonApagar = getByText(/Apagar/)

    fireEvent.click(buttonApagar)

    expect.toBeInTheDocument('post teste')
})