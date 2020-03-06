import * as React from 'react';
import { render } from 'react-dom';
import Todos from './components/todos/Todos';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
