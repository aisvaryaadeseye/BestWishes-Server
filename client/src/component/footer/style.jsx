import styled from "styled-components"
import { COLORS } from "../../component/styles/colorStyle"
import reviewBackground from '../../assets/images/reviewBackground.jpg';
import whoAreWeBg from '../../assets/images/whoAreWeBg.jpg';




export const FooterContainer = styled.div`
display: flex;
justify-content: space-between;

// display: grid;
// grid-template-columns: 30% 15% 15% 40%;
background-color: ${COLORS.blackColor};
padding: 2rem;

@media (max-width: 500px) {
    flex-direction: column;
    
  }

`