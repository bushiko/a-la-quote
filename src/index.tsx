import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import QuoteList from './components/QuoteList/QuoteList';

const App = () => {
    return (
        <React.Fragment>
            <NavBar />
            <section className="container" style={{marginTop: '100px'}}>
                <div className="columns">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        <BrowserRouter>
                            <React.Fragment>
                                <Route path="/" exact component={QuoteList} />
                                <Route path="/author/:author" component={QuoteList} />
                                <Route path="/appearsIn/:appearsIn" component={QuoteList} />
                                <Route path="/source/:source" component={QuoteList} />
                            </React.Fragment>
                        </BrowserRouter>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)