import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Game } from "../App";
import { LeftSection } from "../components/LeftSection";
import { Main } from "../components/Main";

type Props = {
  games: Game[];
  setGames: (games: Game[]) => void;
};

export function Library({ games, setGames }: Props) {
  return (
    <>
      <LeftSection games={games} setGames={setGames} />
      <Main games={games} setGames={setGames} />
    </>
  );
}
