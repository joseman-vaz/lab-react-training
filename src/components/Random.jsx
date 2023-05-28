export function Random() {
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  return (
    <div className="random_container">
      <p>Random Value between 1 and 6= {getRandom(1, 6)}</p>
      <p>Random Value between 1 and 100= {getRandom(1, 100)}</p>
    </div>
  );
}
