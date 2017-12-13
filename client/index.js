import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import AppContainer from './AppContainer.js';
import configureStore from './configureStore.js';

const store = configureStore();
render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
