import * as React from 'react';
import './App.css';
import Button from './component/Button';
import CheckboxWithLabel from './component/CheckboxWithLabel';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Button>hi!</Button>
          <CheckboxWithLabel labelOn="On" labelOff="Off" />
        </p>
      </div>
    );
  }
}

export default App;
