import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el: Element) => {
  ReactDOM.render(
    <App />,
    el
  )
}

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("marketing-singleton");
  if (el) {
    mount(el)
  }
}

export { mount };