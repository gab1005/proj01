import { Elo } from "@/components/elo";
import { Pdl } from "@/components/pdl";
import { Matches } from "@/components/matches";
import { WinRate } from "@/components/win-rate";
import { SummonerName } from "@/components/summoner-name";

const Home = () => {
  return (
    <article>
      <SummonerName name="gab01" />
      <Elo />
      <span>---</span>
      <Pdl />

      <span>--- resultado = partidas por dia, e win rate diario</span>

      <Matches />
      <WinRate />
    </article>
  );
};

export default Home;
