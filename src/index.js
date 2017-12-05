import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {configureStore, history} from 'store';

import routes from './app';

import 'style/reset.css';

const store = configureStore();

function render(routes) {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                { routes }
            </ConnectedRouter>
        </Provider>
        ,
        document.getElementById('root')
    );
};

render(routes);
//
// if (module.hot) {
//     module.hot.accept('./app', () => {
//         // render(routes);
//     });
//
// }
