import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import logo from './logo.svg';
import './App.css';

// https://stackoverflow.com/a/43596713/1175496
// https://stackoverflow.com/a/59268871/1175496
import { createOwner, createProperty } from './graphql/mutations.ts'
import { listProperties } from './graphql/queries.ts'
import { GraphQLResult } from "@aws-amplify/api/lib/types"


import awsExports from './aws-exports'

import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import StepButton from '@mui/material/StepButton';
// import { Property } from './API';

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
  // https://stackoverflow.com/a/39672914/1175496
  // const [properties, setProperties]: [Property[], Function] = useState([])
  const [properties, setProperties] = useState([])

  useEffect(() => {
    fetchProperties()
  }, [])

  function setPropertyInput(key, value) {
    setPropertyFormState({ ...propertyFormState, [key]: value })
  }
  async function fetchProperties() {
    try {
      // const propertyData: GraphQLResult<any> = await API.graphql(graphqlOperation(listProperties))
      const propertyData = await API.graphql(graphqlOperation(listProperties))
      const properties = propertyData.data.listProperties.items
      setProperties(properties)
    } catch (e) {
      console.error('error fetching properties')
      console.error(e)
    }
  }

  const steps = [
    // https://github.com/evolve-interviews/theredpea-case-study
    // I want to be able to describe the property in some level detail (don't worry about photos for now)
    `Property`,
    // I want to be able to add specific and multiple amenties to my property (eg: parking, hot tub, Wifi etc.)
    `Amenities`,
    // I want to be able to add 1+ rooms to my property (eg: Living Room, Bedroom 1, etc.)
    `Rooms`,

  ]

  const [activeStep, setActiveStep] = useState(0);
  // https://mui.com/material-ui/react-stepper/
  // const [completed, setCompleted] = useState < {
  //   [k: number]: boolean;
  // } > ({});
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step
    // : number
  ) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };


  return (
    <div className="App">

      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>


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
