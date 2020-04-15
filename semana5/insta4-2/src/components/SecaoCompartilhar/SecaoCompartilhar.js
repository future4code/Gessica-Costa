import React, { Component } from 'react'
import './SecaoCompartilhar.css'
import iconeFacebook from '../../img/facebook.png'
import iconeTwitter from '../../img/twitter.png'
import iconeInstagram from '../../img/instagram.png'

export class SecaoCompartilhar extends Component {

    mensagem = 'Post compartilhado no';
    mensagem2 = 'com a mensagem:';
    state = {
        valorComentario: ''
    }

    onChangeComentario = (event) => {
		this.setState({valorComentario: event.target.value})
    }
    
    limpaComentario = () => {
        this.setState({valorComentario: ''})
    }

    onClickInstagram = () => {
        console.log(this.mensagem, "Instagram", this.mensagem2, this.state.valorComentario)
        this.limpaComentario(this)
    }

    onClickFacebook = () => {
        console.log(this.mensagem, "Facebook", this.mensagem2, this.state.valorComentario)
        this.limpaComentario(this)
    }

    onClickTwitter = () => {
        console.log(this.mensagem, "Twitter", this.mensagem2, this.state.valorComentario)
        this.limpaComentario(this)
    }

    render() {
        return <div className={'share-container'}>
            <input type={'text'}
                onChange={this.onChangeComentario}
                value={this.state.valorComentario}
                placeholder={'Comentário'}
            />
            <div className={'share-img'}>
                <img onClick={this.onClickInstagram} src={iconeInstagram} alt={'Ícone do Instagram'} />
                <img onClick={this.onClickFacebook} src={iconeFacebook} alt={'Ícone do Facebook'} />
                <img onClick={this.onClickTwitter} src={iconeTwitter} alt={'Ícone do Twitter'} />
            </div>
        </div>
    }
}
