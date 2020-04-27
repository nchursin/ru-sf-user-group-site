import React from 'react'

import { LogoTelegram, LogoTwitter } from '../logos'

import './styles.css'

const Sidebar = () => {
    return <div class="sidebar">
        <LogoTelegram className="bg-cornflowerblue button svg-small" />
        <LogoTwitter className="bg-coral button svg-small" />
    </div>
}

export default Sidebar