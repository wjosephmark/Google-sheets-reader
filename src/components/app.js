import React, { useState, useEffect } from 'react';

export default function App() {

const sheetData = []

const GSheetReader = require('g-sheets-api')

  const options = {
      sheetId: '1wGfiouhuaA-0oB8tMXZgkKKYPmpg1aktwxt1e_hHcG4',
      sheetNumber: 1,
      returnAllResults: true,
    }

  GSheetReader(options, results => {
      console.log(results)
      sheetData.push(results)
  });

  return (
    <div className='app'>
      <h1>DevCamp React Starter</h1>
      <h2>React Redux Router</h2>
      <button onClick={() => console.log(sheetData)}>Click me</button>
    </div>
  );
}
