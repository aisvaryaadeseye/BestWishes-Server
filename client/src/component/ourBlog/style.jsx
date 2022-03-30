import styled from "styled-components"
import { COLORS } from "../styles/colorStyle"
import reviewBackground from '../../assets/images/reviewBackground.jpg';



export const OurBlogContainer = styled.div`
display: flex;
padding: 2rem;
flex-direction :column;
width:100%;
background-image: url(${reviewBackground});

`
export const OurBlogTop = styled.div`
   
  display:flex;
  justify-content: space-between;
  margin: 0 0 2rem 0;


`
export const OurBlogBottom = styled.div` 
    display: flex;  
    border-radius: 0.5rem;
  

`
