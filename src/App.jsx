import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./components/AddItems";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fav" element={<Favorites />} />
            <Route path="/add" element={<AddItems />} />
          </Routes>
        </div>
      </div>
    </>

    // <div className="bg-div flex flex-col min-h-screen">
    //   <div className="">
    //     {/* <Navbar /> */}
    //   </div>

    //   <div className="pt-16 lg:pt-24 flex justify-center items-center">
    //   {/* <div className="border border-[#54f6c5] w-full lg:w-[80%] my-10"></div> */}
    //   </div>

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/fav" element={<Favorites />} />
    //     <Route path="/add" element={<AddItems />} />
    //   </Routes>

    //   {/* <Footer /> */}
    //<Recipe />
    //<Rating />

    // </div>
  );
}

export default App;
