
import React, { useState, useEffect } from 'react'


import OurteamD from '../Ourteam/Ourteam_desk'
import OurteamM from '../Ourteam/Ourteam_mobile'

function Ourteam() {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 900
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);


    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (width < breakpoint ? <OurteamM /> : <OurteamD />
    );

}

export default Ourteam;