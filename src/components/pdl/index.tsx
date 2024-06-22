export const Pdl = () => {
  return(
    <div>
      <h2>PDL</h2>

      <div>
        <label htmlFor="pdl-win">When you win</label>
        <input id="pdl-win" type="text" />
      </div>

      <div>
        <label htmlFor="pdl-lose">When you lose</label>
        <input id="pdl-lose" type="text" />
      </div>
    </div>
  );
}