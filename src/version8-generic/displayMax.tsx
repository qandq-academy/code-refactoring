import { DisplayProps } from "./models";

function DisplayMax(props: DisplayProps<number>) {

    return (
        <div style={{margin:100}}>
            The maximum of the data is {props.val}
        </div>
    );
  }
  
  export default DisplayMax;