import React from "react"

const Footer = () => 
    <div style={{
        marginTop: '15px'
    }}>
        © {new Date().getFullYear()}, Salesforce Russian Community | 
          {` `}
          <a href="https://cleancode.services">Site by Clean Code Services</a>
    </div>


export default Footer