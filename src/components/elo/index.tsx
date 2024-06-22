export const Elo = () => {
  return(
    <div>
      <h2>Elo</h2>

      <div>
        <label htmlFor="current-elo">Current elo</label>
        <input id="current-elo" type="text" />
      </div>

      <div>
        <label htmlFor="desired-elo">Desired elo</label>
        <input id="desired-elo" type="text" />
      </div>
    </div>
  );
}