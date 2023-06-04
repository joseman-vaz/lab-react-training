export function NumbersTable({ limit }) {
  const renderNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= limit; i++) {
      numbers.push(
        <div key={i} className={`square ${i % 2 === 0 ? 'even' : 'odd'}`}>
          {i}
        </div>
      );
    }
    return numbers;
  };

  return (
    <div className="row numbers-table m-3 justify-content-center ">
      {renderNumbers()}
    </div>
  );
}
