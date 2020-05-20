import React, { useState } from 'react';
import HeaderLogin from '../HeaderLogin'
import { Container, GridViagens, SideBar, Conteudo, Footer } from '../Style/Style'
import { Form, FormData, Label } from '../Style/FormStyle'
import { useHistory } from 'react-router-dom'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Styled from 'styled-components'

const Div = Styled.div`
background-color: white;
`
const SelectStyled = Styled(Select)`
  width: 200px;
`

function HomePage() {
  const history = useHistory()
  const [travel, setTravel] = useState('')

  const goToForm = () => {
    history.push('/Formulario')
  }

  const onChangeTravel = (e) => {
    setTravel(e.target.value)
  }

  return (
    <Container>
      <HeaderLogin />
      <Conteudo>
        <SideBar></SideBar>
        <GridViagens>
          <Form>
            <FormControl variant="filled">
              <InputLabel id={'select-label'}>Viagem</InputLabel>
              <SelectStyled labelId={'select-label'} onChange={onChangeTravel} value={travel}>
                <MenuItem value={'Mercurio'}>Mercurio</MenuItem>
                <MenuItem value={'Marte'}>Marte</MenuItem>
              </SelectStyled>
            </FormControl>
            <Button variant={'contained'} color={'primary'} onClick={goToForm}>Aplicar para Viagem</Button>
          </Form>
        </GridViagens>
      </Conteudo>
      <Footer />
    </Container>
  );
}

export default HomePage;