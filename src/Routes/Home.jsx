import React, { useEffect } from "react";
import Card from "../Components/Card";
const api = "https://jsonplaceholder.typicode.com/users";
import { useContext } from "react";
import { ContextGlobal } from "../context/global.context";
//Este componente debera ser estilado como"dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const response = await fetch(api);
    const dataFetch = await response.json();
    setData(dataFetch);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    // Actualiza el tema del body al cambiar el estado del tema
    document.body.className = theme;
  }, [theme]);
  return (
    <main className={theme}>
      <h1 id="Home">Home</h1>
      <div className={`card-grid ${theme}`}>
        {data.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            username={item.username}
            id={item.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
