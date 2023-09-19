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
import StepContent from '@mui/material/StepContent';
import Box from '@mui/material/Box';
// import { spacing } from '@mui/system';


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// import { Property } from './API';

// let's use CDN instead
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

const theme = {
  spacing: 8,
}

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

  // I want to be able to describe the property in some level detail (don't worry about photos for now)
  const STEP_PROPERTY = 'Property';
  // I want to be able to add specific and multiple amenties to my property (eg: parking, hot tub, Wifi etc.)
  const STEP_AMENITIES = 'Amenities';
  // I want to be able to add 1+ rooms to my property (eg: Living Room, Bedroom 1, etc.)
  const STEP_ROOMS = 'Rooms';
  const steps = [
    STEP_PROPERTY,
    STEP_AMENITIES,
    STEP_ROOMS];

  const [activeStep, setActiveStep] = useState(steps.indexOf(STEP_PROPERTY));
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

  // https://stackoverflow.com/a/48991708/1175496
  const getStepContent = (step) => {
    switch (step) {
      case steps.indexOf(STEP_PROPERTY):
        return (
          <div>
            Property
          </div>
        );
      case steps.indexOf(STEP_AMENITIES):
        return (
          <div>
            Amenities
          </div>);

      case steps.indexOf(STEP_ROOMS):
        return (
          <div>
            Rooms
          </div>);
      default:
        return 'Unknown step';
    }
  }

  return (

    <div className="App">

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>


      <Box sx={{ p: 2, width: '100%', boxSizing: 'border-box' }}>
        <Stepper nonLinear activeStep={activeStep}>
          <Step completed={completed[STEP_PROPERTY]}>
            {/* The use of the StepButton here demonstrates clickable step labels, as well as setting the completed flag. However because steps can be accessed in a non-linear fashion, it's up to your own implementation to determine when all steps are completed (or even if they need to be completed). */}
            <StepButton color="inherit" onClick={handleStep(0)}>
              {STEP_PROPERTY}
            </StepButton>
          </Step>
          <Step completed={completed[STEP_AMENITIES]}>
            <StepButton color="inherit" onClick={handleStep(1)}>
              {STEP_AMENITIES}
            </StepButton>
          </Step>
          <Step completed={completed[STEP_ROOMS]}>
            <StepButton color="inherit" onClick={handleStep(2)}>
              {STEP_ROOMS}
            </StepButton>
          </Step>
        </Stepper>

        <Box sx={{ p: 2 }}>
          {
            // Populate the content pane based on the active step
            getStepContent(activeStep)
          }
          <Box>
            <Button
              disabled={activeStep === 0}
            >
              Back
            </Button>
            <Button
              variant="raised"
              color="primary"
            >
              {activeStep === totalSteps() - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </Box>

      </Box>

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
