import { useData } from "./dataProvider";

function DisplayAverage() {
    const {data} = useData()
    const findAverage = () => {
        return data.reduce((a, b) => a + b) / data.length;
    }

    return (
        <div style={{margin:100}}>
            The mean of the data is {findAverage()}
        </div>
    );
  }
  
  export default DisplayAverage;