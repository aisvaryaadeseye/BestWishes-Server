import styled from "styled-components"
import { COLORS } from "../../component/styles/colorStyle"
import reviewBackground from '../../assets/images/reviewBackground.jpg';
import whoAreWeBg from '../../assets/images/whoAreWeBg.jpg';



export const productScreen = styled.div`
    display: flex;
    width: 100%;
    max-width: 100%;
    flex-direction :column;
    height:100vh;

`
export const productScreenContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 100%;
    // flex-direction :row;
    height:100vh;

`
export const productScreenLeft = styled.div`
    display: flex;
    flex: 0.3;
    flex-direction :column;
    background-color: red;

`
export const productScreenRight = styled.div`
    display: flex;
    flex:0.7;
    flex-direction :row;
    background-color: green;

`