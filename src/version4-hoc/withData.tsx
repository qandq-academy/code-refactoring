import React from 'react';
import { DataContextModel} from './dataProvider';

export enum CalculationType {
    minimum,
    maximum,
    average
}

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
    
    const findValue = (data: DataContextModel, calculation: CalculationType) => {
        const {findMin, findAverage, findMax} = data;
        let value = 0;
        if(calculation === CalculationType.minimum && findMin){
            value = findMin();
        }
        if(calculation === CalculationType.maximum && findMax){
            value = findMax();
        }
        if(calculation === CalculationType.average && findAverage){
            value = findAverage();
        }
        return value;
    }

    const ComponentWithExtraInfo = (props: P & ExtraInfoType) => {
        // At this point, the props being passed in are the original props the component expects.
        return (
            <WrappedComponent {...props} val={findValue(props.data, props.calculation)} />
        );
    };
  return ComponentWithExtraInfo;
}