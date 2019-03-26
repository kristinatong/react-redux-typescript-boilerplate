import React, { Component, Fragment } from 'react';

import GlobalStyle from '../../styles/globalStyles';
import { Wrapper, Header, Link } from './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          <Header>
            <p>
              Edit
              <code>src/App.tsx</code>
              and save to reload.
            </p>
            <Link
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </Link>
          </Header>
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
