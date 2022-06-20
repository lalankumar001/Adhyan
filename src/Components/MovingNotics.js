import React from 'react'
import { NavLink } from 'react-router-dom'

export const MovingNotics = () => {
  return (
    <div id='MovingText'>
        <marquee   behavior="scroll" scrollamount="6" direction="left">
        <font>
        <NavLink to="/Contact" id='ContactFormLinkINMovingText'><b>Note:-</b> "Found Anything Wrong or Any Typing Mistake Please Inform Us" </NavLink>
        </font>
    </marquee>
    </div>
  )
}
export default MovingNotics