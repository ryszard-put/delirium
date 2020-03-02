import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
  height: 100%;
  width: 250px;
  background-color: grey;
`

const AppNavigation = () => {
  return (
    <StyledNav>
      <div>Link</div>
      <div>Link</div>
      <div>Link</div>
    </StyledNav>
  )
}

export default AppNavigation
