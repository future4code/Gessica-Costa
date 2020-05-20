import Styled from 'styled-components'

export const Form = Styled.div`
  width: 90%;
  max-width: 400px;
  background-color: #E0FBFC;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;

  h2 {
    margin-bottom: 0;
    padding: 0 20px;
    font-weight: 300;
  }

  button {
    margin: 10px 0 20px;
  }
`
export const FormData = Styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: initial;
  text-align: left;
`
export const Label = Styled.label`
  color: #293241;
  margin-top: 10px;
`