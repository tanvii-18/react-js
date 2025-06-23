import "./App.css";

function Content() {
  return (
    <div style={{ display: "flex", width: "80%", margin: "auto"}}>
      <div className="info">
        <h2 style={{ fontSize: "40px", padding: "10px 0" }}>
          I'm a Frontend Web Developer
        </h2>
        <p style={{ margin: "15px 0", fontSize: "12px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button>About Me</button>
      </div>
      <div className="image">
        <img
          src="public\image\developer-preview.png"
          alt=""
          style={{ height: "300px", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Content;
