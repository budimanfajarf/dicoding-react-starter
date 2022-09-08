import React from 'react';
import { createRoot } from 'react-dom/client';
import DicodingLogo from '../public/dicoding-logo.png';

// const heading = React.createElement(
//   'h1',
//   {
//     id: 'heading',
//     className: 'heading'
//   },
//   'Biodata Perusahaan'
// );
// // console.log(heading);

// const listItem1 = React.createElement('li', null, 'Nama: Dicoding Indonesia');
// const listItem2 = React.createElement('li', null, 'Bidang: Education');
// const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas, Discover Potential.');
// const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);

// const container = React.createElement('div', { className: 'container' }, [heading, unorderedList]);

// const root = createRoot(document.getElementById('root'));
// root.render(container);

const element = (
  <div className="container">
    <h1>Biodata Perusahaan</h1>
    <ul>
      <li>Nama: Dicoding Indonesia</li>
      <li>Bidang: Education</li>
      <li>Tagline: Decode Ideas, Discover Potential.</li>
    </ul>
    {/* <img src="dicoding-logo.png" alt="Dicoding logo" /> */}
    <img src={DicodingLogo} alt="Dicoding logo" />
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(element);
