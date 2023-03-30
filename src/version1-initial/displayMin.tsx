interface Props {
    data: number[]
}

function DisplayMin(props: Props) {
    const data = props.data;
    const findMinimum = () => {
        return Math.min(...data);
    }

    return (
        <div style={{margin:100}}>
            The minimum of the data is {findMinimum()}
        </div>
    );
  }
  
  export default DisplayMin;