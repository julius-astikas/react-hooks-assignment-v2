import { useEffect, useState } from "react";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch cat facts once when the component is first rendered.
    async function fetchCatFacts() {
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");

        if (!response.ok) {
          throw new Error("Could not load cat facts.");
        }

        const data = await response.json();
        setFacts(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCatFacts();
  }, []);

  return (
    <section className="card">
      <h2>Cat Facts</h2>

      {loading && <p>Loading cat facts...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <ul>
          {facts.map((fact, index) => (
            <li key={index}>{fact.fact}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CatFacts;
