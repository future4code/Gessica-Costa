import React from 'react'
import './Post.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSaveBranco from '../../img/favoritoBranco.png';
import iconeSavePreto from '../../img/favoritoPreto.png';
import iconeCompartilhar from '../../img/share.webp'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    save: false,
    compartilhar: false
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: !this.state.curtido
    })
    console.log("this.state.curtido", !this.state.curtido)
    if (this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando //negação de comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvo = () => {
    this.setState({
      save: !this.state.save
    })
  }

  onCLickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  aoCompartilhar = () => {
    this.setState({
      compartilhar: false
    })
  }

  render() {
    let iconeCurtida
    let iconeSave

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if (this.state.save) {
      iconeSave = iconeSavePreto
    } else {
      iconeSave = iconeSaveBranco
    }

    let componenteComentario
    let componenteCompartilhar

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    if(this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhar aoCompartilhar={this.aoCompartilhar} />
    }

    return <div className={'post-container'}>
      <div className={'header'}>
        <div className={'post-header'}>
          <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
          <p>{this.props.nomeUsuario}</p>
        </div>
        <img className={'user-photo'} onClick={this.onClickSalvo} src={iconeSave} alt={'Ícone de Salvo'} />
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'} />

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida} //imagem de coração, vem do if, vai p/ o componente IconeComContador
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <img className={'share-icon'} onClick={this.onCLickCompartilhar} src={iconeCompartilhar} alt={'Ícone de Compartilhamento'} />
        
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteCompartilhar}
      {componenteComentario}
    </div>
  }
}

export default Post