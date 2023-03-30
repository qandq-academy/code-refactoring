import { cins, DisplayProps } from "./models";



function DisplayHealth(props: DisplayProps<cins>) {
    return (
        <div style={{margin:100}}>
            The minimum of the data is {props.val.min}
            The maximum of the data is {props.val.max}
        </div>
    );
  }
  
  export default DisplayHealth;