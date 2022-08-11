import styled from "@emotion/styled";
// import backgroundImage from "../../assets/backgroundImage.png";

export const Wrapper = styled.div`
  background-image: linear-gradient(to top, #59b989, #019cad);
  width: 100%;
  height: 100%;
`;

// export const Wrapper = styled.div`
//  background-image: url(${backgroundImage});
// `;

export const TableContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding: 0vw;
`;
export const IncrementButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const DataButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const StoreButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 6vh;
`;

// liststyles:
export const TitleListContainer = styled.div`
  text-transform: uppercase;
  text-align: left;
  margin-left: 4vh;
  padding: 1vh;
  @media (max-width: 425px) {
    text-align: center;
    margin-left: 0;
    padding: 0;
  }
`;
