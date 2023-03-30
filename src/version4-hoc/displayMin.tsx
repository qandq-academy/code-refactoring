
interface Props {
    val: number
}

function DisplayMin(props: Props) {
    return (
        <div style={{margin:100}}>
            The minimum of the data is {props.val}
        </div>
    );
  }
  
  export default DisplayMin;