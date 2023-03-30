import React from 'react';
import { CalculationType, DataContext, DataContextModel} from './dataProvider';



// First we need to add a type to let us extend the incoming component.
type CalculationResult = {
  val: any;
};

type ExtraInfoType = {
    calculation: CalculationType;
}

// Mark the function as a generic using P (or whatever variable you want)
export function WithDataCalculator<P>(WrappedComponent: React.ComponentType<P & CalculationResult>) {
    const ComponentWithExtraInfo = (props: P & ExtraInfoType) => {
        return (
            <DataContext.Consumer>
              {(state: DataContextModel) => <WrappedComponent {...props} val={state.findValue(props.calculation)} />}
            </DataContext.Consumer>
        );
    };
  return ComponentWithExtraInfo;
}