import React from 'react'
import Icon from "./icon.svg";

import '../styles.css'

const Logo = ({style, className = ''}) => {
    return <Icon style={style} className={className}/>
}

export default Logo;
