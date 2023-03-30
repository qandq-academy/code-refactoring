import { DisplayProps } from "./models";

function DisplayMin(props: DisplayProps<number>) {
    return (
        <div style={{margin:100}}>
            The minimum of the data is {props.val}
        </div>
    );
  }
  
  export default DisplayMin;