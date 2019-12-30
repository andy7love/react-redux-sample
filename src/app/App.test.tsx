import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import configureStore from './root.store';
import { Provider } from 'react-redux';

test('App component should render using redux store with a Provider', () => {
    const store = configureStore();

    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const linkElement = getByText(/Open Questions/i);
    expect(linkElement).toBeInTheDocument();
});
