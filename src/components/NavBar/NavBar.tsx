import React from 'react';

import './NavBar.css';

export interface NavBarState {
    smallNav: boolean
}

class NavBar extends React.Component<any, NavBarState> {
    constructor(props: any) {
        super(props);

        this.state = {
            smallNav: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        const prevVal = this.state.smallNav,
            newVal = window.scrollY >= 100;

        if ( prevVal !== newVal ) {
            this.setState({
                smallNav: newVal
            });
        }
    }

    render() { 
        return (
            <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation"
                style={{boxShadow: '1px 1px 6px #ababab'}}>
                <div className="navbar-brand">
                    <a className={`navbar-item alq-navbar__logo ${this.state.smallNav ? "alq-navbar__logo_small" : ""}`} href="/a-la-quote">
                        A-La Quote!
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="control has-icons-left has-icons-right">
                            <input 
                                className={`input ${this.state.smallNav ? "is-small" : ""}`} 
                                type="text"/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>

            </nav>
        );
    }   
}

export default NavBar;