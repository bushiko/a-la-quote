import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar/NavBar';
import QuoteList from './components/QuoteList/QuoteList';

const App = () => {
    return (
        <div>
            <NavBar />
            <section className="container" style={{marginTop: '100px'}}>
                <div className="columns">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        <QuoteList />
                    </div>
                </div>
            </section>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)