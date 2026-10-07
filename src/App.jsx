import CookieClicker from "./components/CookieClicker";
import CatFacts from "./components/CatFacts";
import Users from "./components/Users";

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <h1>React Oppgave 2</h1>
        <p>useState() og useEffect()</p>
      </header>

      <div className="card-grid">
        <CookieClicker />
        <CatFacts />
        <Users />
      </div>
    </main>
  );
}

export default App;
