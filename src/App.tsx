import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { LeftSection } from "./components/LeftSection";
import { Library } from "./pages/Library";
import { Footer } from "./components/Footer";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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

export type Props = {
  games: Game[];
  setGames: (games: Game[]) => void;
  signIn: (user: User) => void;
};

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState< User | null>(null);

  const navigate = useNavigate();

  function signIn(user: User) {
    localStorage.id = user.id;
    setUser(user);
  }

 
  useEffect(() => {
    const userId = localStorage.id;
    if (userId) {
      fetch(`http://localhost:4000/users/${userId}`)
        .then((r) => r.json())
        .then((userFromServer) => {
          setUser(userFromServer);
          navigate("/employers");
        });
    } else {
      navigate("/signIn");
    }
  }, [localStorage.id])

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
        <Route path="/signin" element={<SignIn games={games} signIn={signIn} setGames={setGames}/>}/>
        <Route path="/signup" element={<SignUp games={games} setGames={setGames} users={users} setUsers={setUsers}/>}/>
      </Routes>
      <Footer games={games} setGames={setGames}/>
    </div>
  );
}

export default App;
