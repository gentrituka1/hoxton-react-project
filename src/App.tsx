import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { LeftSection } from "./components/LeftSection";
import { Library } from "./pages/Library";
import { Footer } from "./components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import { Store } from "./pages/Store";

export type Game = {
  id: number;
  name: string;
  logo: string;
  favorite: boolean;
  description: string;
  installed: boolean;
  time: string;
  price: number | string;
  platform: "PC" | "PC PS5" | "PC PS5 Xbox One"
};


function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/games")
      .then((res) => res.json())
      .then((gamesFromServer) => {
        setGames(gamesFromServer);
      });
  }, []);

  console.log(games)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Navigate to="/library"/>} />
        <Route path="/library" element={<Library games={games} setGames={setGames}/>} />
        <Route path="/store" element={<Store games={games} setGames={setGames}/>}/>
      </Routes>
      <Footer games={games} setGames={setGames}/>
    </div>
  );
}

export default App;
