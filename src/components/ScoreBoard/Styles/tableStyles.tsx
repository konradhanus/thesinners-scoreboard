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

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
`;

export const Header = styled.section`
  width: 100%;
  margin-top: 4vh;
  margin-bottom: 4vh;
  align-items: center;
  min-width: 320;
  padding: 20;
`;

export const Content = styled.div``;

export const Text = styled.p`
  color: white;
`;

export const Button = styled.button``;

export const Link = styled.a`
  color: white;
`;

export const Ranking = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 80%;
  padding: 1vh;
  margin-bottom: 14vh;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 0;
  border-radius: 1vh;
  background-image: linear-gradient(to bottom, #abb8c3, #d9e3f0);
`;

export const Title = styled.div`
  text-transform: uppercase;
  text-align: left;
  margin-left: 4vh;
  padding: 1vh;
  @media (max-width: 425px) {
    text-align: center;
    margin-left: 0;
    padding: 1vh;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-bottom: 5vh;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  margin-left: 4vw;
  margin-right: 4vw;
  @media (max-width: 425px) {
    padding-top: 1vh;
    padding-bottom: 1vh;
  }
`;
// background: green;

export const FirstBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0vw;
  @media (max-width: 425px) {
    margin-left: -2vw;
  }
`;

export const IconWithPlace = styled.div``;

export const AvatarWinners = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-left: 1vw;
  width: 48px;
  height: 48px;
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-left: 1vw;
  width: 48px;
  height: 48px;
  @media (max-width: 425px) {
    width: 24px;
    height: 24px;
  }
`;

// @media (max-width: 425px) {
//   margin-top: 0.5vh;
// }

export const SecondBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  margin-left: 2vw;
  @media (max-width: 425px) {
    margin-left: 3vw;
  }
`;

export const NameWithPoints = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;

export const Points = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  align-content: center;
  align-items: center;
  @media (min-width: 768px) {
    margin-bottom: -2vh;
  }
  @media (min-width: 1025px) {
    margin-bottom: -2vh;
  }
`;

export const LevelContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  width: 95%;
  height: 30%;
  background: gray;
  justify-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
  border-radius: 1vh;
  @media (max-width: 425px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 88%;
  }
  @media (min-width: 1025px) {
    width: 93%;
  }
`;

export const Level = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  width: 80%;
  height: 100%;
  background: lime;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 1vh;
  margin-right: 0vw;
`;
