import React from 'react';
import ReactDOM from 'react-dom';
import App from './meetup/App';

window.addEventListener('scroll', function() {
  let selectTag = document.getElementsByTagName("SECTION")[0];
  if (pageYOffset > 50) {
    selectTag.classList.remove("pdt-50");
  } else {
    selectTag.classList.add("pdt-50");
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
