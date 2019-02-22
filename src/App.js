import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/index";
import Main from "./components/main/index";
import feather from "feather-icons";
class App extends Component {
  render() {
    return (
      <>
        <head>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossorigin="anonymous"
          />
          <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js" />
        </head>
        <body>
          <div>
            <Header />
            <Main />
          </div>
          <script>{feather.replace()}</script>
        </body>
      </>
    );
  }
}

export default App;
