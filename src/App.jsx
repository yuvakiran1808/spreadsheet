import Spreadsheet from "./components/Spreadsheet";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="spreadsheet">
      <Navbar />
      <Spreadsheet />
    </div>
  );
};

export default App;
