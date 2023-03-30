import { useData } from "./dataProvider";

function DisplayMin() {
    const {data} = useData()
    const findMinimum = () => {
        return Math.min(...data);
    }

    return (
        <div style={{margin:100}}>
            The minimum of the data is {findMinimum()}
        </div>
    );
  }
  
  export default DisplayMin;