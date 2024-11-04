import { useEffect } from "react";
import "./App.css";
import { useData } from "./contexts/DataContext";
import api from "../services/api";

function App() {
  const { data, setData, loading, setLoading, error, setError } = useData();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await api.get("/api/data");
        setData(response.data);
      } catch (err) {
        setError((err as any).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="data-display">
      {data.map((item: any) => (
        <div key={item.id} className="data-item">
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
