import { DisplayProps } from "./models";

function DisplaySum(props: DisplayProps<number>) {
    return (
        <div style={{margin:100}}>
            The sum of the data is {props.val}
        </div>
    );
  }
  
  export default DisplaySum;