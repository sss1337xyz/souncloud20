import React from 'react';
import {Layout} from "antd";

import Header from "3_widget/header";

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
