interface Props {
    data: number[]
}

function DisplayMax(props: Props) {
    const data = props.data;
    const findMaximum = () => {
        return Math.max(...data);
    }

    return (
        <div style={{margin:100}}>
            The maximum of the data is {findMaximum()}
        </div>
    );
  }
  
  export default DisplayMax;