import React from 'react';
import { CalculationType, DataContext, DataContextModel} from './dataProvider';



// First we need to add a type to let us extend the incoming component.
type CalculationResult<T> = {
  val: T;
};

type ExtraInfoType = {
    calculation: CalculationType;
}

// Mark the function as a generic using P (or whatever variable you want)
export function WithDataCalculator<P, T>(WrappedComponent: React.ComponentType<P & CalculationResult<T>>) {
    const ComponentWithExtraInfo = (props: P & ExtraInfoType) => {
        return (
            <DataContext.Consumer>
              {(state: DataContextModel) => <WrappedComponent {...props} val={state.findValue(props.calculation) as T} />}
            </DataContext.Consumer>
        );
    };
  return ComponentWithExtraInfo;
}