import React from 'react';
import {QueryCache, ReactQueryCacheProvider} from 'react-query';
import Routing from './components/Routing';

const queryCache = new QueryCache();

const App = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Routing />
    </ReactQueryCacheProvider>
  );
};

export default App;
