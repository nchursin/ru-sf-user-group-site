import React, { Component } from 'react'

import classnames from 'classnames'

import { LogoTelegram, LogoTwitter, LogoYoutube, LogoSalesforce } from '../logos'

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
                <a
                    className="sidebar-element bg-skyblue button"
                    href="https://trailblazercommunitygroups.com/moscow-ru-developers-group/"
                    target="_blank"
                >
                    <LogoSalesforce className="svg-small" />
                </a>
                <a
                    className="sidebar-element bg-cornflowerblue button"
                    href="https://t.me/joinchat/AAAAAFirab-TVCOdZEK_kQ"
                    target="_blank"
                >
                    <LogoTelegram className="svg-small" />
                </a>
                <a
                    className="sidebar-element twitter-icon button"
                    href="https://twitter.com/moscowohana"
                    target="_blank"
                >
                    <LogoTwitter className="svg-small" />
                </a>
                <a
                    className="sidebar-element button bg-youtube"
                    href="https://youtube.com/channel/UClVTWhQKt_xD79rrRBrSAHw"
                    target="_blank"
                >
                    <LogoYoutube className="svg-small" />
                </a>
            </div>
        )
    }
}
