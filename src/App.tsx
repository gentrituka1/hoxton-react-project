import { useState } from "react";
import "./App.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { RiAddBoxLine } from "react-icons/ri";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { RiListSettingsFill } from "react-icons/ri";
import { Header } from "./components/Header";
import { LeftSection } from "./components/LeftSection";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <LeftSection />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
