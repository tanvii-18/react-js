import "./App.css";
import Title from "./Title";
import Usercard from "./Usercard";

function App() {
  return (
    <div className="container">
      <Title />

      <div>
        <Usercard
          avtar="/profile-img/prof1.jpg"
          name="Aradhiya Patel"
          address="Surat, India"
          post="4,567 "
          followers="89,262 "
        />

        <Usercard
          avtar="/profile-img/prof2.jpeg"
          name="Ravi Sharma"
          address="Mumbai, India"
          post="2,341 "
          followers="112,987 "
        />

        <Usercard
          avtar="/profile-img/prof3.webp"
          name="Priya Mehta"
          address="Ahmedabad, India"
          post="3,208 "
          followers="76,154 "
        />

        <Usercard
          avtar="/profile-img/prof4.jpg"
          name="Amit Joshi"
          address="Pune, India"
          post="5,101 "
          followers="134,820 "
        />

        <Usercard
          avtar="/profile-img/prof5.webp"
          name="Sneha Verma"
          address="Delhi, India"
          post="1,999 "
          followers="98,520 "
        />
      </div>
    </div>
  );
}

export default App;
