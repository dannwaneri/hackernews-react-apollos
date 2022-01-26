import React from 'react';
import CreateLink from './createlink';
import Header from './header';
import LinkList from './linklist';
import Login from './login';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route exact path="/" element={<LinkList/>} />
          <Route
            exact
            path="/create"
            element={<CreateLink/>}
          />
           <Route exact path="/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;


