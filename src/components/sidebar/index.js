import React, { Component } from 'react'

import classnames from 'classnames'

import { LogoTelegram, LogoTwitter, LogoYoutube } from '../logos'

import './styles.css'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: false
        };
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;
      
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos < currentScrollPos;
      
        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
      
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <div className={
                classnames(
                    "sidebar",
                    {
                        "sidebar--hidden": !this.state.visible
                    }
                )
            }>
                <a href="https://t.me/joinchat/AAAAAFirab-TVCOdZEK_kQ" target="_blank">
                    <LogoTelegram className="sidebar-element button bg-cornflowerblue svg-small" />
                </a>
                <a href="https://twitter.com/moscowohana" target="_blank">
                    <LogoTwitter className="sidebar-element twitter-icon button svg-small" />
                </a>
                <a href="https://youtube.com/channel/UClVTWhQKt_xD79rrRBrSAHw" target="_blank">
                    <LogoYoutube className="sidebar-element button svg-small bg-youtube" />
                </a>
            </div>
        )
    }
}
