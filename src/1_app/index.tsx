import React from 'react';
import {Layout} from "antd";

import Header from "widget/header";

import {withProviders} from "./providers";
import Routes from "./routes";

const App = () => {
  return (
      <Layout>
          <Header/>
          <Routes/>
      </Layout>
  );
}

export default withProviders(App);
