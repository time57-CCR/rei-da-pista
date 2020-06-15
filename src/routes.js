import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Sign from './pages/Sign';
import Confirm from './pages/Confirm';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Questions from './pages/Questions';
import Result from './pages/Result';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Sign} />
                <Route path='/sign' exact component={Sign} />
                <Route path='/confirm' exact component={Confirm} />
                <Route path='/home'  component={Home} />
                <Route path='/quiz'  component={Quiz} />
                <Route path='/result'  component={Result} />
                <Route path='/questions'  component={Questions} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;