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
};

export type Props = {
  games: Game[];
  setGames: (games: Game[]) => void;
  signIn: (user: User) => void;
  signedIn: boolean;
  setSignedIn: (signedIn: boolean) => void;
};

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [signedIn, setSignedIn] = useState(false);

  const navigate = useNavigate();

  function signIn(user: User) {
    localStorage.id = user.id;
    setUser(user);
  }

  function signOut() {
    localStorage.removeItem("id");
    setUser(null);
  }

  
  return (
    <div className="App">
      <Header signedIn={signedIn} user={user} signOut={signOut} />
      <Routes>
        <Route index element={<Navigate to="/library" />} />
        <Route
          path="/library"
          element={<Library games={games} setGames={setGames} />}
        />
        <Route
          path="/store"
          element={<Store games={games} setGames={setGames} />}
        />
        <Route
          path="/signin"
          element={
            <SignIn
              games={games}
              signIn={signIn}
              setGames={setGames}
              signedIn={signedIn}
              setSignedIn={setSignedIn}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              games={games}
              setGames={setGames}
              signIn={signIn}
              users={users}
              setUsers={setUsers}
            />
          }
        />
      </Routes>
      <Footer setGames={setGames} />
    </div>
  );
}

export default App;
