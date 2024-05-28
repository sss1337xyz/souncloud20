import React from 'react';

import {withProviders} from "./providers";
import Routes from "./routes";

const App = () => {
  return (
      <Routes/>
  );
}

export default withProviders(App);
