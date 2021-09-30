import React from 'react';

//plugins
import { Switch, Route} from 'react-router-dom';

//pages
import Dashboard from '../pages/Dashboard';
import Explorer from '../pages/Explorer';

const Rotas: React.FC = () => {
    return(
        <Switch>
            <Route path="/explorer/:repository+" component={Explorer} />
            <Route path="/" component={Dashboard} />
        </Switch>
    )
}

export default Rotas;