interface Props {
    val: number
}

function DisplayMax(props: Props) {

    return (
        <div style={{margin:100}}>
            The maximum of the data is {props.val}
        </div>
    );
  }
  
  export default DisplayMax;