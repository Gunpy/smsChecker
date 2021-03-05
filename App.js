import React from 'react';
import Main from "./scr/Component/Main";
import {StatusBar} from 'react-native';



const App = () => {
  return (
      <>
        <StatusBar barStyle="dark-content" />
        <Main/>
      </>
  );
};


export default App;
