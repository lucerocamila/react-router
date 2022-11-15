import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a nuestra empresa</h1>
      <p>Esta es la meejor empresa del mundo :D</p>
      <Link to="/about">Ir a About</Link>
    </div>
  );
};

export default Home;
