interface Props {
    val: number
}

function DisplayAverage(props: Props) {
    
    return (
        <div style={{margin:100}}>
            The mean of the data is {props.val}
        </div>
    );
  }
  
  export default DisplayAverage;