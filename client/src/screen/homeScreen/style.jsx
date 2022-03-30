import styled from "styled-components";
import { COLORS } from "../../component/styles/colorStyle";
import reviewBackground from "../../assets/images/reviewBackground.jpg";
import whoAreWeBg from "../../assets/images/whoAreWeBg.jpg";

export const CustomerReviewContainer = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  // height:50vh;
  background-color: ${COLORS.lightOrangeColor};
  width: 100%;
  background-image: url(${reviewBackground});
`;
export const CustomerHead = styled.div`
  color: ${COLORS.blackColor};
  font-size: 1rem;
  margin-bottom: 0.3rem;
  font-weight: 500;
  background-color: ${COLORS.lightOrangeColor};
`;
export const CustomerUnderline = styled.div`
  margin-bottom: 0.3rem;
  background-color: ${COLORS.orangeColor};
  width: 15rem;
  height: 0.1rem;
  margin: 0 0 2rem 1rem;
`;

export const WhoAreWeContainer = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  background-color: ${COLORS.lightOrangeColor};
  width: 100%;
  background-image: url(${whoAreWeBg});
`;
export const SubscribeToNewLetter = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: row;
  //   height: 50vh;
`;
export const SubscribeToNewLetterLeft = styled.div`
  display: flex;
  flex: 0.5;
  padding: 2rem;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${whoAreWeBg});
`;
export const SubscribeToNewLetterRight = styled.div`
  display: flex;
  flex: 0.5;
  padding: 2rem;
  flex-direction: column;
  width: 100%;
  background-image: url(${reviewBackground});
`;
export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 15% 15% 40%;
  background-color: ${COLORS.blackColor};
  padding: 2rem;
`;
