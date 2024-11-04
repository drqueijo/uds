import { createContext, ReactNode, useContext, useState } from "react";

const DataContext = createContext({} as any);

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const value = {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  return useContext(DataContext);
}
