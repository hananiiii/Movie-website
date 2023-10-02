import React, { useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [open, setOpen] = useState(false);
  const Menu = [
    { title: "Currently hiring", icon : <ion-icon name="briefcase"></ion-icon> },
    { title: "Top movies",icon : <ion-icon name="film"></ion-icon> },
    { title: "Recommended", icon : <ion-icon name="heart-circle"></ion-icon>},
    { title: "High rate movies",icon : <ion-icon name="star"></ion-icon>},
    { title: "Soon",icon : <ion-icon name="hourglass"></ion-icon>},
    { title: "Settings",icon :<ion-icon name="settings"></ion-icon>,gap : true},
  ];
  

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <section className='Navbar flex flex-1'>
    <div className={`w-${open ? "72" : "20"} h-screen p-5 pt-8 bg-blue relative`}>
      <span className='absolute cursor-pointer top-9 text-4xl text-light-white shadow-blue -right-3 ' onClick={handleToggle}>
        <ion-icon name={open ? "chevron-back-circle" : "chevron-forward-circle"}></ion-icon>
      </span>
      <Logo open={open} className={`${open && "rotate-[360deg]"}`} />
      <ul className='pt-6 flex flex-col gap-6'>

      {Menu.map((menu, index) => (
  <li
    key={index}
    className={`text-light-white  text-sm flex items-center rounded-md gap-x-4 cursor-pointer p-2 hover:underline hover:bg-light-white hover:text-blue font-bold ${
      menu.gap ? "mt-9" : "mt-2"
    }`}
  >
    <span className='text-xl text-light-white'>
      {React.cloneElement(menu.icon, { className: 'light-white-icon' })}
    </span>
    <span className={`${!open && "hidden"} origin-left text-light-white duration-200`}>
      {menu.title}
    </span>
  </li>
))}

      </ul>
      </div>
      
    </section>
  );
}

export default Header;
