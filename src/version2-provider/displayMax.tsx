import { useData } from "./dataProvider";

function DisplayMax() {
    const {data} = useData()
    const findMaximum = () => {
        return Math.max(...data);
    }

    return (
        <div style={{margin:100}}>
            The maximum of the data is {findMaximum()}
        </div>
    );
  }
  
  export default DisplayMax;