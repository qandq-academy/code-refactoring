import { createContext, useContext } from "react";
import { DataModel } from "../services/dataLoader";

let DataContext = createContext<DataModel>(null!);

function DataProvider({data, children }: { data: DataModel, children: React.ReactNode }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

const useData = (): DataModel => {
  return useContext(DataContext);
};

export { useData, DataProvider };
