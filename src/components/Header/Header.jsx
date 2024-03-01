import React from 'react'
import classes from "./header.module.css"

const Header = () => {
  return (
    <div className={classes.header} >
        <h3>This is Header in another component </h3>
    </div>
  )
}

export default Header