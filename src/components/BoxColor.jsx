export function BoxColor(props) {
  return (
    <div>
      <div
        className="effing_container"
        style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}
      >
        <p>
          RGB {props.r}
          {props.g}
          {props.b}
        </p>
      </div>
    </div>
  );
}
