import styled from "styled-components"
import { COLORS } from "../styles/colorStyle"



export const CustomerReviewContainer = styled.div`
    display: flex;
    width: 25rem;
    flex-direction :row;
    height:20vh;
    border-radius: 0.5rem;
    margin: 1rem 1rem 0 0;
    border-radius:1rem
    box-shadow: 5px 10px #888888;
    // padding: 1rem 1rem 1rem 1rem
    // background-color: ${COLORS.whiteBackground};

`
export const CustomerReviewLeft = styled.div`
   
   width: 20px;

`
export const CustomerReviewRight = styled.div`
   
   width: 20px;

`
export const CustomerUnderline = styled.div`
    margin-bottom: 0.3rem;  
    background-color: ${COLORS.orangeColor};
    width:15rem;
    height: 0.1rem;
    margin: 0 0 0 1rem ;

`