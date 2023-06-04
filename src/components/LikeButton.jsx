import { useState } from 'react';

export function LikeButton() {
  const [likes, setLikes] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  const handleClick = () => {
    const moreLikes = likes + 1;
    setLikes(moreLikes);
    setBackgroundColor(colors[moreLikes % colors.length]);
  };
  return (
    <div>
      <button
        style={{ backgroundColor: backgroundColor, borderRadius: 10 }}
        onClick={handleClick}
      >
        {likes} Likes
      </button>
    </div>
  );
}
