import React, { useState, useEffect } from 'react';
import GSheetReader from 'g-sheets-api'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function App() {
  const [rowInputText, setRowInputText] = useState("former location")
  const [searchInputText, setSearchInputText] = useState("")
  const [sheetData, setSheetData] = useState([])


  const options = {
      sheetId: '1wGfiouhuaA-0oB8tMXZgkKKYPmpg1aktwxt1e_hHcG4',
      sheetNumber: 1,
      returnAllResults: false,
      filter: {
        [rowInputText]: searchInputText.toLowerCase()
      }
    }

  const forEachDemo = () => {
    return sheetData.map((element) => {
        for (var key in element) {
              return(
                <div>
                  <p>{key + ':' + element[key]}</p>
                </div>
              )
        }
    });
  };

  const resetInputs = () => {
    setSearchInputText("")
    setSearchInputText("")
  }

  const getData = () => {
    GSheetReader(options, results => {
      setSheetData(results)
    });
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    getData()
    resetInputs()
  }

  const ddOptions = [
    'asset serial number currently issued to, or current location & status: status confirmed? former location specifications category date purchased purchase price', 
    'currently issued to, or current location & status:', 
    'status confirmed?',
    'former location',
    'specifications',
    'category',
    'date purchased',
    'purchase price'
  ]


  return(
    <div className="app">

    <div className="display">
      {forEachDemo()}
    </div>

      <form className="input-form" onSubmit={e => handleSubmit(e)}>
        <div className="input-wrapper">
          {/* <input placeholder="Row Input"
              className="input"
              id="row-input"
              type="text"
              onChange={e => setRowInputText(e.target.value)}
          /> */}

        <Dropdown 
          className="drop-down"
          placeholder="Please select a row..."
          options={ddOptions} 
          onChange={(e) => setRowInputText(e.value)} />

          <input placeholder="Search"
            className="input"
            type="text"
            onChange={e => setSearchInputText(e.target.value)}
          />
        </div>

        <div className="button-wrapper">
          <button className="btn" onClick={() => console.log(rowInputText)}>Search</button>
          {/* <button type="submit"  className="btn">Search</button> */}
        </div>
      </form>

    </div>
  )
}