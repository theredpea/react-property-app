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

import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

import InputLabel from '@mui/material/InputLabel';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { PropertyType, FeatureType, RoomType } from './API.ts';
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
  // type: '',
  type: PropertyType.HOUSE,
  address: '',
  description: '',
  features: {},
  rooms: [],
  // owner


};

let roomId = 1;

function App() {

  const [propertyFormState, setPropertyFormState] = useState(initialPropertyState)
  // alert(propertyFormState.address);
  // https://stackoverflow.com/a/39672914/1175496
  // const [properties, setProperties]: [Property[], Function] = useState([])
  const [properties, setProperties] = useState([])

  useEffect(() => {
    fetchProperties()
  }, [])

  function setPropertyInput(key, value) {
    setPropertyFormState({ ...propertyFormState, [key]: value })
  }

  const addRoom = (event) => {

    setPropertyInput('rooms',
      [
        ...propertyFormState.rooms,
        {
          id: roomId++,
          type: RoomType.BEDROOM
        }])
  }
  const removeRoom = (roomId) => {

    setPropertyInput('rooms',
      propertyFormState.rooms.filter(room => room.id !== roomId))
  }

  const handleRoomChange = (roomId, roomKey, roomValue) => {

    setPropertyInput('rooms',
      propertyFormState.rooms.map(room => {
        return room.id === roomId ?
          ({
            ...room,
            [roomKey]: roomValue
          }) : room;
      })
    )
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
    STEP_ROOMS
  ];

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
    const formControlStyle = { display: 'block', mb: 2 };
    const textInputStyle = { width: 1 };
    switch (step) {
      case steps.indexOf(STEP_PROPERTY):

        return (
          <React.Fragment>
            <FormControl sx={formControlStyle}>
              <FormLabel id="propertyType-Label">Property Type</FormLabel>
              <RadioGroup
                row
                aria-labelledby="propertyType-Label"
                name="propertyType"
                onChange={(event) => { setPropertyInput('type', event.target.value) }}
                value={propertyFormState.type}
              >
                {
                  Object.keys(PropertyType).map(propertType => {
                    return (
                      <FormControlLabel
                        key={propertType}
                        value={propertType}
                        control={<Radio />}
                        // children={<HomeIcon />}
                        label={propertType} />
                    )
                  })
                }
              </RadioGroup>
            </FormControl>
            <FormControl sx={formControlStyle}>
              {/* <FormLabel >Property Address</FormLabel> */}
              {/* react-dom.development.js:86 Warning: A component is changing a controlled input to be uncontrolled. 
              This is likely caused by the value changing from a defined to undefined, which should not happen. 
              Decide between using a controlled or uncontrolled input element for the lifetime of the component. More inf */}
              <TextField sx={textInputStyle}
                label="Property Address"
                variant="outlined"
                value={propertyFormState.address}
                onChange={(event) => { setPropertyInput('address', event.target.value) }} />
            </FormControl>
            <FormControl sx={formControlStyle}>
              {/* <FormLabel >Property Address</FormLabel> */}
              <TextField sx={textInputStyle} label="Property Description"
                multiline
                rows={4}
                variant="outlined"
                value={propertyFormState.description}
                onChange={(event) => { setPropertyInput('description', event.target.value) }} />
            </FormControl>
          </React.Fragment >
        );
      // maxRows={4}
      case steps.indexOf(STEP_AMENITIES):
        return (

          <React.Fragment>
            <FormControl sx={formControlStyle}>
              <RadioGroup
                row
                defaultValue={FeatureType.WIFI}
                name="featureType"
              >
                {
                  Object.keys(FeatureType).map(featureType => {
                    return (
                      <FormControlLabel
                        key={featureType}
                        value={featureType}
                        control={<Checkbox
                          checked={(propertyFormState.features[featureType] || false)}
                          onChange={(event) => {
                            setPropertyInput('features',
                              {
                                ...propertyFormState.features,
                                // toggle it
                                [featureType]: !propertyFormState.features[featureType]
                              })
                          }} />}
                        label={featureType} />
                    )
                  })
                }
              </RadioGroup>
            </FormControl>
          </React.Fragment>);

      case steps.indexOf(STEP_ROOMS):
        // const handleChange = () => { }
        // Line 242:41:  React Hook "React.useState" is called in function "getStepContent" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter.
        // const [roomType, setRoomType] = React.useState(RoomType.BEDROOM);
        const handleChange = (event) => {
          // setRoomType(event.target.value);
        };
        // {/* <InputLabel id="demo-simple-select-label">Rooms</InputLabel> */}
        return (
          <React.Fragment>
            {propertyFormState.rooms.map(room => (
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <FormControl sx={{ ...formControlStyle, minWidth: '100px' }} >
                  <InputLabel id="roomType-label-label">Type</InputLabel>
                  <Select
                    labelId="roomType-label"
                    value={room.type}
                    label="Type"
                    onChange={(event) => handleRoomChange(room.id, 'type', event.target.value)}
                  >
                    {
                      Object.keys(RoomType).map((roomType) => (
                        <MenuItem
                          key={roomType}
                          value={roomType}>
                          {roomType}
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
                <FormControl sx={{ ...formControlStyle, flex: 1 }} >
                  <TextField sx={textInputStyle}
                    label="Description"
                    variant="outlined"
                    value={room.description}
                    onChange={(event) => handleRoomChange(room.id, 'description', event.target.value)} />
                </FormControl>
                <IconButton aria-label="delete" onClick={(event) => removeRoom(room.id)}>
                  <DeleteIcon />
                </IconButton>
              </Stack>
            ))
            }<Stack
              direction="row"
              justifyContent="flex-end">
              {/* display: 'block', */}
              <Button
                variant="contained"
                onClick={addRoom}
                sx={{ mt: 1, mr: 1 }}
                startIcon={<AddIcon />}
              >
                Add Room
              </Button>
            </Stack>
          </React.Fragment >);
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
              Add a Property
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>

      <Container maxWidth="md">


        <Box sx={{ p: 2, width: '100%', boxSizing: 'border-box' }}>
          <Stepper nonLinear activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step
                key={step}
                completed={completed[step]}>
                {/* The use of the StepButton here demonstrates clickable step labels, as well as setting the completed flag. However because steps can be accessed in a non-linear fashion, it's up to your own implementation to determine when all steps are completed (or even if they need to be completed). */}
                <StepButton color="inherit" onClick={handleStep(steps.indexOf(step))}>
                  {step}
                </StepButton>
                <StepContent>
                  {getStepContent(steps.indexOf(step))}

                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>

      </Container>
      {
        properties.map((property, index) => (
          <div key={property.id ? property.id : index} >
            <p >{property.address}</p>
            <p >{property.description}</p>
          </div>
        ))
      }

    </div >
  );
}

const styles = {
}


export default App;
