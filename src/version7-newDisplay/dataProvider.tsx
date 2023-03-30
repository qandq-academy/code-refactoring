import { createContext, useContext } from "react";
import { DataModel } from "../services/dataLoader";
import { DisplayProps } from "./models";

export enum CalculationType {
  minimum,
  maximum,
  average, 
  title
}

export class DataContextModel {
  constructor(data: DataModel){
    this.data = data;
  }
  data: DataModel;
  findMin: () => number = () => {
    return Math.min(...this.data.data);
  };
  findMax = () => {
    return Math.max(...this.data.data);
  };
  findAverage = () => {
    return this.data.data.reduce((a, b) => a + b) / this.data.data.length;
  }; 
  findValue = (calculation: CalculationType) => {
    let value: number | string = 0;
    if(calculation === CalculationType.minimum){
        value = this.findMin();
    }
    if(calculation === CalculationType.maximum){
        value = this.findMax();
    }
    if(calculation === CalculationType.average){
        value = this.findAverage();
    }
    if(calculation === CalculationType.title){
      value = this.data.title
    }
    return value;
  };
}

const DataContext = createContext<DataContextModel>(new DataContextModel(new DataModel("Empty", [1])));

function DataProvider({data, children }: { data: DataModel, children: React.ReactNode }) {
  
  return <DataContext.Provider value={new DataContextModel(data)}>{children}</DataContext.Provider>;
}

const useData = (): DataContextModel => {
  return useContext(DataContext);
};

export { DataContext, useData, DataProvider };
