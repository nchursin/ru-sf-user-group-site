import React from 'react'

import { LogoTelegram, LogoTwitter } from '../logos'

import './styles.css'

const Sidebar = () => {
    return <div class="sidebar">
        <a href="https://t.me/joinchat/AAAAAFirab-TVCOdZEK_kQ" target="_blank">
            <LogoTelegram className="button bg-cornflowerblue svg-small" />
        </a>
        <a href="https://twitter.com/moscowohana" target="_blank">
            <LogoTwitter className="button svg-small" />
        </a>
    </div>
}

export default Sidebar