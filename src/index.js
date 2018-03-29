import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import AddPlayer from './Components/AddPlayer';
import FormTest from './Components/FormTest';
import Dropdown from "./Components/Dropdown";

ReactDOM.render(
        <MuiThemeProvider>
            <BrowserRouter>
                <div>
                    <Route path="/" component={Dropdown} />
                    <Route exact path="/" component={ App }/>
                    <Route path="/add-player" component={ AddPlayer }/>
                    <Route exact path="/form-test" component={ FormTest } />
                </div>
            </BrowserRouter>
        </MuiThemeProvider>,
    document.getElementById('root')
);
