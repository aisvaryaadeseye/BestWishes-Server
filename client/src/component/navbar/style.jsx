import styled from "styled-components"
import { COLORS } from "../styles/colorStyle"





export const NavbarStyled = styled.div`
display: flex;
flex-direction :column;
justify-content:space-between;
align-items: center;
// color: ${COLORS.whiteBackground};
background-color: ${COLORS.whiteBackground};
height: 110px;
position: sticky;
top: 0;
z-index: 999;
`