import "./App.css";
// import Basics from "./components/Basics";
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'

function App() {
  return (
    <>
      {/* <Basics /> */}
      <div>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default App;
