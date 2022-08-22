import { useEffect, useState } from "react";
import "./App.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { RiAddBoxLine } from "react-icons/ri";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { RiListSettingsFill } from "react-icons/ri";
import { Header } from "./components/Header";
import { LeftSection } from "./components/LeftSection";
import { Main } from "./pages/Main";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";

export type Game = {
  id: number;
  name: string;
  logo: string;
  favorite: boolean;
  description: string;
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

  return (
    <div className="App">
      <Header />
      <LeftSection games={games} setGames={setGames} />
      <Main games={games} setGames={setGames}/>
      <Footer />
    </div>
  );
}

export default App;
