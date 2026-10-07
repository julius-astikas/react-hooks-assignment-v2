import { useState } from "react";
import "./CookieClicker.css";

function CookieClicker() {
  // points stores the current score, and setPoints updates it.
  const [points, setPoints] = useState(0);
  const [burst, setBurst] = useState(0);

  function handleClick() {
    setPoints((currentPoints) => currentPoints + 1);

    // Changing the key restarts the small confetti animation on every click.
    setBurst((currentBurst) => currentBurst + 1);
  }

  return (
    <section className="card cookie-card">
      <h2>CookieClicker</h2>

      <p className="card-description">Press the cookie to get points.</p>

      <div className="cookie-stage">
        <button
          className="cookie-button"
          type="button"
          onClick={handleClick}
          aria-label="Add one point"
        >
          <img src={`${import.meta.env.BASE_URL}cookie.png`} alt="" />
        </button>

        {burst > 0 && (
          <span key={burst} className="point-burst" aria-hidden="true">
            <span>🎉</span>
            <span>✨</span>
            <span>🎊</span>
            <span>⭐</span>
            <span>✨</span>
            <span>🎉</span>
            <span>⭐</span>
            <span>🎊</span>
          </span>
        )}
      </div>

      <p className="points" aria-live="polite">
        Poeng: <strong>{points}</strong>
      </p>
    </section>
  );
}

export default CookieClicker;
