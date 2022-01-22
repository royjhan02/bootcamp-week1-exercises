import styled from 'styled-components'

export const Layout = styled.div`
  background-color: lightpink;
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FancyButton = styled.button`
  background: lightblue;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`

export const Checked = styled.div`
  cursor: pointer;
  text-decoration: line-through;
` 
export const Unchecked = styled.div`
  cursor: pointer;
` 