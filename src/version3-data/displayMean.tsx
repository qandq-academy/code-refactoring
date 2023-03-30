import { useData } from "./dataProvider";

function DisplayAverage() {
    const {findAverage} = useData()

    return (
        <div style={{margin:100}}>
            The mean of the data is {findAverage()}
        </div>
    );
  }
  
  export default DisplayAverage;