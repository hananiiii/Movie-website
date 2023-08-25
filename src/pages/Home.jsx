import React, { useState } from 'react';
import Header from '../Componants/Header'; // Import your Header component
import Logo from '../Componants/Logo'; // Import your Logo component
import Mainontainer from '../Componants/Mainontainer';


const App = () => {
  const [showVideoCam, setShowVideoCam] = useState(true);

  const handleBackClick = () => {
    setShowVideoCam(false);
  };

  return (
    <div className='flex '>
        
      <Header  onBackClick={handleBackClick} /> 
      {/* Rest of your content */}
      <Mainontainer/>
     
    </div>
  );
}

export default App;
