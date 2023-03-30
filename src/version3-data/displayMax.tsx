import { useData } from "./dataProvider";

function DisplayMax() {
    const {findMax} = useData()
    

    return (
        <div style={{margin:100}}>
            The maximum of the data is {findMax()}
        </div>
    );
  }
  
  export default DisplayMax;