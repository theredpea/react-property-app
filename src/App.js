import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import logo from './logo.svg';
import './App.css';

// https://stackoverflow.com/a/43596713/1175496
// https://stackoverflow.com/a/59268871/1175496
import { createOwner, createProperty } from './graphql/mutations.ts'
import { listProperties } from './graphql/queries.ts'

import awsExports from './aws-exports'

import Button from '@mui/material/Button';

// let's use CDN instead
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

Amplify.configure(awsExports)

const initialPropertyState = {
  // type
  // address
  // description
  // rooms
  // features
  // owner

};

function App() {

  const [propertyFormState, setPropertyFormState] = useState(initialPropertyState)
  const [properties, setProperties] = useState([])

  useEffect(() => {
    fetchProperties()
  }, [])

  function setPropertyInput(key, value) {
    setPropertyFormState({ ...propertyFormState, [key]: value })
  }
  async function fetchProperties() {
    try {
      const propertyData = await API.graphql(graphqlOperation(listProperties))
      const properties = propertyData.data.listProperties.items
      setProperties(properties)
    } catch (e) {
      console.error('error fetching properties')
      console.error(e)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {
        properties.map((property, index) => (
          <div key={property.id ? property.id : index} >
            <p >{property.address}</p>
            <p >{property.description}</p>
            <Button variant="contained">Hello world</Button>
          </div>
        ))
      }
    </div>
  );
}

const styles = {
}


export default App;
