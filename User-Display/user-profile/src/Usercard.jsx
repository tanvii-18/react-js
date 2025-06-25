function Usercard(props) {
  return (
    <div className="user-card">
      <img src={props.avtar} alt="" />
      <div className="status">
        <h2>{props.name}</h2>
        <p>{props.address}</p>

        <p> <b>Post : </b>{props.post}</p>
        <p> <b>Followers : </b>{props.followers}</p>
      </div>

      <button>Follow</button>
    </div>
  );
}

export default Usercard;
