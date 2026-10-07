import { useState } from "react";

function CookieClicker() {
  // points stores the current score, and setPoints updates it.
  const [points, setPoints] = useState(0);

  function handleClick() {
    setPoints(points + 1);
  }

  return (
    <section className="card">
      <h2>CookieClicker</h2>

      <button className="cookie-button" type="button" onClick={handleClick}>
        <img
          src={`${import.meta.env.BASE_URL}cookie.png`}
          alt="Image of a cookie"
        />
      </button>

      <p className="points">Poeng: {points}</p>
    </section>
  );
}

export default CookieClicker;
