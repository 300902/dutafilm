import './App.css';
import NavigationBar from "./components/NavigationBar";
import "./style/landingpage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/Superhero";
import Horor from "./components/Horor";

function App() {
  return (
    <div>
      <div className="myBG">
      <NavigationBar />
      <Intro />
      </div>
      <div className="trending">
      <Trending/>
      </div>
      <div className="superhero">
      <SuperHero/>
      </div>
      <div className="horror">
      <Horor/>
      </div>
    </div>
  );
}

export default App;
