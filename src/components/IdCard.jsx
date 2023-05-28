export function IdCard(props) {
  return (
    <div className="individual_card">
      <div className="image-container">
        <img src={props.picture} className="profile" alt="profile" />
      </div>
      <div className="text_container">
        <p>
          <span>First Name: </span>
          {props.firstName}
        </p>
        <p>
          <span>Last Name: </span>
          {props.lastName}
        </p>
        <p>
          <span>Gender: </span>
          {props.gender}
        </p>
        <p>
          <span>Height: </span>
          {props.height}m
        </p>
        <p>
          <span>birth: </span>
          {props.birth}
        </p>
      </div>
    </div>
  );
}
