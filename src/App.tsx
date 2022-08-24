import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { LeftSection } from "./components/LeftSection";
import { Library } from "./pages/Library";
import { Footer } from "./components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import { Store } from "./pages/Store";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

export type Game = {
  id: number;
  name: string;
  logo: string;
  favorite: boolean;
  description: string;
  installed: boolean;
  time: string;
  price: number | string;
  discountedPrice: number;
  platform: "PC" | "PC PS5" | "PC PS5 Xbox One";
  bought: boolean;
};

export type User = {
  id: number;
  username: string;
  avatar: string;
  email: string;
  password: string;
  loggedIn: boolean;
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((usersFromServer) => {
        setUsers(usersFromServer);
      })
  }, [])


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
      <Routes>
        <Route index element={<Navigate to="/library"/>} />
        <Route path="/library" element={<Library games={games} setGames={setGames}/>} />
        <Route path="/store" element={<Store games={games} setGames={setGames}/>}/>
        <Route path="/signin" element={<SignIn games={games} setGames={setGames}/>}/>
        <Route path="/signup" element={<SignUp games={games} setGames={setGames}/>}/>
      </Routes>
      <Footer games={games} setGames={setGames}/>
    </div>
  );
}

export default App;
