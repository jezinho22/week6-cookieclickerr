import React, { useEffect, useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Button from "./components/Button";
import cookieImage from "./assets/cookie.jpeg";

export default function App() {
  const [data, setData] = useState([]);
  const [increment, setIncrement] = useState(0);

  useEffect(() => {
    async function fetchUpgrades() {
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const result = await response.json();
      setData(result);
    }
    fetchUpgrades();
  }, []);

  const handleButtonClick = () => {
    setIncrement((prevIncrement) => prevIncrement + 1);
  };

  const handleImageClick = () => {
    console.log("Cookie has been clicked!");
    setIncrement((prevIncrement) => prevIncrement + 1);
  };

  return (
    <div style={styles.container}>
      <img
        src={cookieImage}
        alt="Cookie"
        style={styles.image}
        onClick={handleImageClick}
      />
      <h1>COOKIE CLICKER</h1>
      <Timer increment={increment} />
      <ul>
        {data.length > 0 ? (
          data.map((item) => (
            <li key={item.id} style={{ display: "flex", alignItems: "center" }}>
              {item.name}
              <Button
                className="increment-button"
                label="Upgrade $"
                onClick={handleButtonClick}
              />
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  image: {
    width: 200,
    height: 200,
    cursor: "pointer",
  },
};
