import React, { useEffect, useState } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import './App.css';

// https://stackoverflow.com/a/43596713/1175496
// https://stackoverflow.com/a/59268871/1175496
import { createOwner, createProperty, createFeature, createRoom } from './graphql/mutations.ts'
import { listProperties, listOwners, getProperty } from './graphql/queries.ts'
import { GraphQLResult } from "@aws-amplify/api/lib/types"


import awsExports from './aws-exports'

import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import StepButton from '@mui/material/StepButton';
import StepContent from '@mui/material/StepContent';
import Box from '@mui/material/Box';
// import { spacing } from '@mui/system';
// import AppBar from '@mui/material/AppBar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CheckIcon from '@mui/icons-material/Check';

import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
// import Drawer from '@mui/material/Drawer';
import MuiDrawer from '@mui/material/Drawer';
// import DrawerHeader from '@mui/material/DrawerHeader';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import BedIcon from '@mui/icons-material/Bed';
import ShowerICon from '@mui/icons-material/Shower';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


import { PropertyType, FeatureType, RoomType } from './API.ts';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';

import { DataGrid } from '@mui/x-data-grid';
// import { getProperty } from './graphql/queries';

// import { styled, createTheme, ThemeProvider } from '@mui/system';

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

// const drawerZ
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => {
  // console.warn('closedMixin');

  return ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  })
};

const shouldForwardPropsForDrawer = (prop) => {
  return !['open', 'drawerOpen'].includes(prop)
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: shouldForwardPropsForDrawer
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: shouldForwardPropsForDrawer
})(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {


  const ADD_HOME = 'Add Home'
  const MANAGE_HOMES = 'Manage Homes'
  const [drawerItem, setDrawerItem] = useState(ADD_HOME)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleDrawerClose = () => setDrawerOpen(false)
  const handleDrawerOpen = () => {
    // console.warn('Opening drawer');
    setDrawerOpen(true)
  }
  const [createSnackbarOpen, setCreateSnackbarOpen] = useState(false)

  const closeCreateSnackbar = (event) => setCreateSnackbarOpen(false)
  const [propertyFormState, setPropertyFormState] = useState(initialPropertyState)
  // alert(propertyFormState.address);
  // https://stackoverflow.com/a/39672914/1175496
  // const [properties, setProperties]: [Property[], Function] = useState([])
  const propertyColumns = [
    { field: 'type', headerName: 'Type', width: 70 },
    { field: 'address', headerName: 'Address', width: 130 },
    {
      field: 'owner',
      valueGetter: (params) => {
        // https://mui.com/x/react-data-grid/column-definition/
        // if (!params.value) {
        //   return params.value;
        // }
        // return (((params || {}).row || {}).owner ||{}).name;
        return ((params || {}).value || {}).name;
      }, headerName: 'Owner', width: 130
    },
    // {
    //   field: 'bedroomCount',
    //   headerName: 'Bedrooms',
    //   type: 'number'
    // }
  ]
  const [propertyRows, setPropertyRows] = useState([])
  const [owner, setOwner] = useState({})

  const [selectedProperty, setSelectedProperty] = useState({});

  const onPropertyRowSelectionChange = async (rowSelectionModel, details) => {
    // https://mui.com/x/api/data-grid/data-grid/#DataGrid-prop-onRowSelectionModelChange
    // console.warn('rowSelectionModel', rowSelectionModel)

    try {

      const selectedPropertyData = await API.graphql(graphqlOperation(getProperty, { id: rowSelectionModel[0] }))
      // console.warn('selectedProperty', selectedProperty)
      setSelectedProperty(selectedPropertyData.data.getProperty);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchProperties()
    fetchOwner()
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

  async function fetchOwner() {

    const ownersData = await API.graphql(graphqlOperation(listOwners))
    let [owner] = ownersData.data.listOwners.items

    if (!owner) {
      const ownerData = await API.graphql(graphqlOperation(createOwner, {
        input: {
          name: 'Nate Anderson',
          email: 'nate.muir.anderson@gmail.com',
          phone: '213-814-8942'
        }
      }))
      owner = ownerData.data.createOwner
    }
    setOwner(owner)
  }


  async function fetchProperties() {
    try {
      // const propertyData: GraphQLResult<any> = await API.graphql(graphqlOperation(listProperties))
      const propertyData = await API.graphql(graphqlOperation(listProperties))
      const propertyRows = propertyData.data.listProperties.items.map(property => {
        return {
          ...property,
          // Need a different query; listProperties doesnt eagerly get all the rooms 
          // bedroomCount: (property.rooms.items || []).filter(_ => _.type === RoomType.BEDROOM).length,
          // bathroomCount: (property.rooms.items || []).filter(_ => _.type === RoomType.BATHROOM).length,
        }
      })
      // console.warn(propertyRows);
      setPropertyRows(propertyRows)
    } catch (e) {
      console.error('error fetching properties')
      console.error(e)
    }
  }

  async function handleCreateProperty() {
    try {
      // first create or get owner
      // let owner = undefined

      // then create property

      const propertyData = await API.graphql(graphqlOperation(createProperty, {
        input: {
          type: propertyFormState.type,
          address: propertyFormState.address,
          description: propertyFormState.description,
          ownerPropertiesId: owner.id
        }
      }))
      const property = propertyData.data.createProperty;

      // console.error(property)
      // then create rooms, and features
      // const rooms = 
      await Promise.all(propertyFormState.rooms.map(room => (API.graphql(graphqlOperation(createRoom, {
        input: {
          type: room.type,
          description: room.description,
          propertyRoomsId: property.id,
        }
      })))))

      // const features = 
      await Promise.all(Object.entries(propertyFormState.features)
        .filter(([feature, isHasFeature]) => isHasFeature)
        .map(([feature, isHasFeature]) => (API.graphql(graphqlOperation(createFeature, {
          input: {
            type: feature,//.type,
            // description: room.description,
            propertyFeaturesId: property.id,
          }
        })))))


      // console.error(rooms, features)

      setPropertyFormState(initialPropertyState)
      setCreateSnackbarOpen(true)
      setActiveStep(0)
      await fetchProperties()

    } catch (e) {
      console.error(e);
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

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setCompleted({});
  // };



  const getDrawerContent = (drawerItem) => {

    switch (drawerItem) {
      case ADD_HOME:

        return (<Stepper nonLinear activeStep={activeStep} orientation="vertical">
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
                    disabled={index === (steps.length - 1) && propertyFormState.rooms.length === 0}
                    onClick={index === steps.length - 1 ? handleCreateProperty : handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    startIcon={index === steps.length - 1 && <AddCircleIcon />}
                  >
                    {index === steps.length - 1 ? 'Create Property' : 'Continue'}
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
        </Stepper>)
      case MANAGE_HOMES:
        return (<>
          <DataGrid
            onRowSelectionModelChange={onPropertyRowSelectionChange}
            rows={propertyRows}
            columns={propertyColumns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
          {selectedProperty.id && <Card sx={{ mt: 1, width: 1 }}>
            <CardContent>

              <Stack direction="row">
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {selectedProperty.id}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {selectedProperty.address}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {selectedProperty.type}
                  </Typography>
                  <Typography variant="body2">
                    {selectedProperty.description}
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  {/* <Typography color="text.secondary" sx={{ display: 'flex', mb: 2 }} gutterBottom>
                    <Avatar sx={{ mr: 1 }}>
                      {selectedProperty.owner.name.split(' ').filter((_, i) => i <= 1).map(_ => _[0]).join('')}
                    </Avatar>
                    {selectedProperty.owner.name}
                  </Typography> */}
                  <Stack direction="row">
                    <Typography variant="h5" component="div" sx={{ display: 'flex', mb: 2, mr: 2 }}>
                      <Avatar sx={{ mr: 1 }}>
                        <BedIcon />
                      </Avatar>
                      {((selectedProperty.rooms || []).items || []).filter(room => room.type === RoomType.BEDROOM).length} Bdr
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ display: 'flex', mb: 2, mr: 2 }}>
                      <Avatar sx={{ mr: 1 }}>
                        <ShowerICon />
                      </Avatar>
                      {((selectedProperty.rooms || []).items || []).filter(room => room.type === RoomType.BATHROOM).length} Bth
                    </Typography>
                  </Stack>
                  <List dense>
                    {((selectedProperty.features || {}).items || []).map(feature => {

                      return (
                        <ListItem key={feature.type}>
                          <ListItemIcon>
                            <CheckIcon />
                          </ListItemIcon>
                          <ListItemText primary={feature.type} />
                        </ListItem>)
                    })}
                  </List>
                </Box>
              </Stack>
            </CardContent>
            <CardActions>
              <Button disabled size="small" startIcon={<EditIcon />}>Edit</Button>
            </CardActions>
          </Card>}

        </>)
      // checkboxSelection
    }
  }
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
              <Stack direction="row"
                key={room.id}
                spacing={1}
                sx={{ mb: 2 }}>
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
              sx={propertyFormState.rooms.length === 0 ? {
                justifyContent: ' center',
                padding: '2em',
                backgroundColor: ' #f7f7f7',
                border: '2px dashed grey',
                mb: ' 10px',
              } : {
                justifyContent: 'flex-end'
              }}>
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

  const theme = useTheme();
  return (

    <div className="App">

      <Snackbar
        open={createSnackbarOpen}
        autoHideDuration={6000}
        onClose={closeCreateSnackbar}
      >
        <Alert onClose={closeCreateSnackbar} severity="success" sx={{ width: '100%' }}>
          Property created
        </Alert>
      </Snackbar>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <Drawer variant="permanent" open={drawerOpen}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            {[
              { text: ADD_HOME, icon: <AddIcon /> },
              { text: MANAGE_HOMES, icon: <ViewListIcon /> }
            ].map(listItem => (
              <ListItem key={listItem.text} disablePadding sx={{ display: 'block' }} onClick={() => setDrawerItem(listItem.text)}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: drawerOpen ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: drawerOpen ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {listItem.icon}
                  </ListItemIcon>
                  <ListItemText primary={listItem.text} sx={{ opacity: drawerOpen ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Container maxWidth="md">

          <DrawerHeader />
          <Box sx={{ p: 2, width: '100%', boxSizing: 'border-box' }}>

            {getDrawerContent(drawerItem)}

          </Box>

        </Container>
        <AppBar position="fixed" open={drawerOpen}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                marginRight: 5,
                ...(drawerOpen && { display: 'none' }),
              }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {drawerItem}
            </Typography>
            {owner.name}
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>

    </div >
  );
}

export default App;
