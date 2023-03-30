import { DisplayProps } from "./models";

function DisplayTitle(props: DisplayProps<string>) {
    return (
        <div style={{margin:100}}>
            The version of the data is {props.val}
        </div>
    );
  }
  
  export default DisplayTitle;