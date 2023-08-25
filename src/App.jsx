import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"


function App() {
  return (
    <>
   
      <BrowserRouter>
        <div className="App">
          <div className="pages">
            <Routes>
              <Route path="/Home" element={<Home />} />
            
             
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  
      
    </>
  )
}

export default App
