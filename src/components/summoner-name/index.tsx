export const SummonerName = ({name} : {name?: string}) => {
  return(
    <div>
      <h2>Summoner Name</h2>

      <p>{name || '???'}</p>
    </div>
  );
}