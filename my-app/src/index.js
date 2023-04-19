import React from 'react';
import ReactDOM from 'react-dom/client';

const root=ReactDOM.createRoot(document.getElementById('root'));
function Header(){
  return(
    <header>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </header>
  )
}
root.render(Header()
);
