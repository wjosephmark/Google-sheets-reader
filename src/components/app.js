import React, { useState, useEffect } from 'react';

export default function App() {


const GSheetReader = require('g-sheets-api')

  const options = {
      sheetId: '1wGfiouhuaA-0oB8tMXZgkKKYPmpg1aktwxt1e_hHcG4',
      sheetNumber: 1,
      returnAllResults: true,
      // filter: {
      //   'department': 'archaeology',
      //   'module description': 'introduction'
      // },
      // filterOptions: {
      //   operator: 'or',
      //   matching: 'loose'
      // }
    }

  GSheetReader(options, results => {
      
  });

  return (
    <div className='app'>
      <h1>DevCamp React Starter</h1>
      <h2>React Redux Router</h2>
      {/* <button onClick={() => GSheetReader}>Click me</button> */}
    </div>
  );
}
