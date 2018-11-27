import React, { Component } from 'react';
import './config';

import { Auth, API } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

class App extends Component {

  signIn = async () => {
    await Auth.signIn('test', 'Test123!')
    console.log('logged in')
  }

  signOut = async () => {
    await Auth.signOut()
    console.log('logged out');
  }

  resource =  async () => {
    const res = await API.get('resources', '/');
    console.log(res)
  }

  resourceSingle =  async () => {
    const res = await API.get('resources', '/a');
    console.log(res)
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.signIn}>auth</button>
          <button onClick={this.resource}>all</button>
          <button onClick={this.resourceSingle}>single</button>
          <button onClick={this.signOut}>logout</button>
        </div>
        <AuthComponent />
      </div>
    );
  }
}

const AuthComponent = withAuthenticator(() => <div>hallo</div>)

export default App;
