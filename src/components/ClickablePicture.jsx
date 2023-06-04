import { useState } from 'react';

export function ClickablePicture(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <img
        src={isClicked ? props.imgClicked : props.img}
        alt="i"
        onClick={handleClick}
      />
    </div>
  );
}
