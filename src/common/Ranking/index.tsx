import ListDataWinners from "../ListData/ListDataWinners";
import ListDataOthers from "../ListData/ListDataOthers";
// import ListDataWithout from "../ListData/ListDataWithout";
import ListTable from "../ListTable";

const RankingContainer = (props: any, {players}: any) => (
  <>
    {props.isMobileLevel ? (
      <ListTable>
          <ListDataWinners isTelefon={false} players />
      </ListTable>
    ) : (
      <ListTable>
      
          <ListDataWinners isTelefon={true} players />
        
        
          <ListDataOthers players/>
       
      </ListTable>
    )}
  </>
);

export default RankingContainer;
