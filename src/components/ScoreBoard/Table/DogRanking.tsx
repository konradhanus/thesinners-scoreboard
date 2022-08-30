// import { connect } from "react-redux";
// import { actionCreators } from "../../Buttons/Button/action";
import { Wrapper } from "../Styles/tableStyles";
import List from "../../ItemList/List/List";

function DogRanking() {
  // const onClicked = (item) => {
  //   props.checkThis(item);
  // };
  return (
    <Wrapper>
      <List />
    </Wrapper>
  );
}

// export default connect(
//   (store) => ({
//     change: store.change,
//   }),
//   actionCreators
// )(ScoreBoard);
export default DogRanking;
