import { useState } from "react";
import "./App.css";
import BgController from "./components/BgController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";

function App() {
  const [selectedIndex, setSelectedIndex] = useState();
  return (
    <>
      <Header />
      <div className="w-64 fixed">
        <SideNav selectedIndex={(valIdx) => setSelectedIndex(valIdx)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
        <div
          className="md:col-span-2 border h-screen 
        shadow-sm p-5 overflow-auto "
        >
          {selectedIndex == 0 ? <IconController /> : <BgController />}
        </div>
        <div className="md:col-span-4 bg-blue-400">Icon preview</div>
      </div>
    </>
  );
}

export default App;
