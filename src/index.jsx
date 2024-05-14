/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import './newstyle.scss';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Home from './components/Home';
import Laughlin from './components/Laughlin';
import Test from './components/Test';

// function Nav() {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/laughlin">Laughlin</NavLink></li>
//         <li><NavLink to="/2">2</NavLink></li>
//         <li><NavLink to="/3">3</NavLink></li>
//       </ul>
//     </nav>
//   );
// }

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<Laughlin />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
