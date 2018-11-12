import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import LineUp from './lineup';
import SearchUI from './searchUI';
import EmptySearchUI from './EmptySearchUI.js';
import ProfileUI from './profile';
import Series from './series.js';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <section id='banner'>
                <Route path='/' component={LineUp} />
                <Route exact path='/' component={EmptySearchUI} />
            </section>
            <section id='body'>
                
                <Route path='/search/:name' component={SearchUI} />
                <Route path='/profile' component={EmptySearchUI} />
                <Route path='/profile/:id' component={ProfileUI} />
                <Route path='/series' component={EmptySearchUI} />
                <Route path='/series/:id' component={Series} />
            </section>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
