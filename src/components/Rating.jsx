export function Rating({ children }) {
  const maxRating = 5;
  const filledStars = Math.ceil(children);
  const emptyStars = maxRating - filledStars;
  const filledStar = '★';
  const emptyStar = '☆';
  return (
    <div>
      {Array(filledStars).fill(filledStar)}
      {Array(emptyStars).fill(emptyStar)}
    </div>
  );
}
