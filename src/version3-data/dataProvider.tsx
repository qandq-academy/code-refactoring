import { createContext, useContext } from "react";
import { DataModel } from "../services/dataLoader";

export class DataContextModel {
  constructor(data: DataModel){
    this.data = data;
  }
  private data: DataModel;
  findMin: () => number = () => {
    return Math.min(...this.data.data);
  };
  findMax = () => {
    return Math.max(...this.data.data);
  };
  findAverage = () => {
    return this.data.data.reduce((a, b) => a + b) / this.data.data.length;
  }; 
}

let DataContext = createContext<DataContextModel>(null!);

function DataProvider({data, children }: { data: DataModel, children: React.ReactNode }) {
  
  return <DataContext.Provider value={new DataContextModel(data)}>{children}</DataContext.Provider>;
}

const useData = (): DataContextModel => {
  return useContext(DataContext);
};

export { useData, DataProvider };
