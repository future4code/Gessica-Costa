import React from 'react'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSaveBranco from '../../img/favoritoBranco.png';
import iconeSavePreto from '../../img/favoritoPreto.png';
import iconeCompartilhar from '../../img/share.webp'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'
import styled from 'styled-components'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`
const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
const PostFoto = styled.img`
  width: ${props => {
    if(props.size === 'big') {
      return '100%'
    } else if(props.size === 'small'){
      return '25px'
    }
  }}
`

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

    if (this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhar aoCompartilhar={this.aoCompartilhar} />
    }

    return <PostContainer>
      <Header>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>
        <UserPhoto onClick={this.onClickSalvo} src={iconeSave} alt={'Ícone de Salvo'} />
      </Header>

      <PostFoto size={'big'} src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida} //imagem de coração, vem do if, vai p/ o componente IconeComContador
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <PostFoto size={'small'} onClick={this.onCLickCompartilhar} src={iconeCompartilhar} alt={'Ícone de Compartilhamento'} />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteCompartilhar}
      {componenteComentario}
    </PostContainer>
  }
}

export default Post