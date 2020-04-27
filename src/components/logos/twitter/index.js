import React from 'react'
import Icon from "./icon.svg";

import '../styles.css'

const Logo = ({style, className = ''}) => {
    return <Icon style={{
        fill: "#fff",
        backgroundColor: "rgb(29, 161, 242)",
        ...style
    }} className={`svg ${className}`}/>
}

export default Logo;
