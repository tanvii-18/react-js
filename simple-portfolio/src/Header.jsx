import "./App.css";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100vw",
        padding: 0,
        margin: 0,
      }}
    >
      <div className="logo">Tp</div>
      <div className="menu">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
