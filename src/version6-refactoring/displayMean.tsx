import { DisplayProps } from "./models";


function DisplayAverage(props: DisplayProps) {
    
    return (
        <div style={{margin:100}}>
            The mean of the data is {props.val}
        </div>
    );
  }
  
  export default DisplayAverage;