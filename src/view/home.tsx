import { Elo } from "@/components/elo";
import { Pdl } from "@/components/pdl";
import { Matches } from "@/components/matches";
import { WinRate } from "@/components/win-rate";
import { SummonerName } from "@/components/summoner-name";

const Home = () => {
  return (
    <article>
      <div className="" >
      </div>

      <SummonerName name="gab01#BR1" />
      <Elo />
      <div className="h-2 w-20 border-2 rounded-lg bg-red-500" >---</div>
      <Pdl />

      <span>--- resultado = partidas por dia, e win rate diario</span>

      <Matches />
      <WinRate />
    </article>
  );
};

export default Home;
