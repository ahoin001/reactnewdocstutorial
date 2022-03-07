import "./App.css";
import ButtonContainer from "./components/ButtonContainer";
import Profile from "./components/Profile";
import { ListofItems } from "./components/ListofItems";

function App() {
  // let showProfile = false;

  return (
    <div className="App">
      <header className="App-header">
        <ButtonContainer buttonText="I'm A Button Component!" />
        {/* {showProfile ? <Profile /> : "Not showing profile"}
        {!showProfile ? <ListofItems /> : "Not showing list of items"} */}
      </header>
    </div>
  );
}

export default App;
