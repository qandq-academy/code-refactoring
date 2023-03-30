import React from 'react';
import { CalculationType, DataContextModel} from './dataProvider';



// First we need to add a type to let us extend the incoming component.
type CalculationResult = {
  val: number;
};

type ExtraInfoType = {
    calculation: CalculationType;
    data: DataContextModel;
}

// Mark the function as a generic using P (or whatever variable you want)
export function WithDataCalculator<P>(WrappedComponent: React.ComponentType<P & CalculationResult>) {
    const ComponentWithExtraInfo = (props: P & ExtraInfoType) => {
        // At this point, the props being passed in are the original props the component expects.
        const val = props.data.findValue(props.calculation);
        return (
            <WrappedComponent {...props} val={val} />
        );
        
    };
  return ComponentWithExtraInfo;
}