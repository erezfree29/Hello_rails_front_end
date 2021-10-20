import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/ConfigureStore';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <div className="greeting" style={{ marginLeft: '300px' }}>
            <Greeting />
          </div>
        </>
      </Provider>
    );
  }
}

export default App;
