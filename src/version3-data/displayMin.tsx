import { useData } from "./dataProvider";

function DisplayMin() {
    const {findMin} = useData()
    
    return (
        <div style={{margin:100}}>
            The minimum of the data is {findMin()}
        </div>
    );
  }
  
  export default DisplayMin;