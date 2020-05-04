import React from 'react';
import axios from 'axios'

class Pokedex extends React.Component {
    state = {
        listPoke: [],
        imagePoke: []
    }

    componentDidMount() {
        this.pokemons()
    }

    pokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => {
                console.log(res)
                this.setState({ listPoke: res.data.results})
            }).catch(err => {
                console.log(err)
            })
    }

    escolhaPokemon = namePoke => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${namePoke}`)
            .then(res => {
                this.setState({ imagePoke: res.data.sprites.front_default })
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        console.log('image',this.state.imagePoke)
        // const pokeNome = this.state.imagePoke.map(pokemon => {
        //     return <img src={pokemon} alt='pokemon' />
        // })
        // console.log('nomes', pokeNome)

        return (
            <div>
                
            </div>
        );
    }
}

export default Pokedex;
