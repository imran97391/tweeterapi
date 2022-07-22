import './App.css';
import {Header} from "./component/header"
import {Tweetlisting} from "./component/tweetlisting"
function App() {
  return (
    <div className="app">
      <Header/>
      <Tweetlisting/>
    </div>
  );
}

export default App;
