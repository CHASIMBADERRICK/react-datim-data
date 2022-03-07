import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@material-ui/core";
import { indicators } from "./data";
import { counties } from "./counties";
import Button from '@mui/material/Button';
import { Stack } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Paper from '@mui/material/Paper';
import { SettingsOverscanOutlined } from "@material-ui/icons";
import "date-fns";
import { styled } from '@mui/material/styles';
import { Grid } from "@mui/material";
import { element } from "prop-types";
import addEventListener from 'addeventlistener';
import { once } from 'addeventlistener';
import axios from "axios";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SelectTextFields(props) {
  //const classes = useStyles();
  const [data, setData] = React.useState();
    const fetchData = async () => {
    const resp = axios.get('https://hiskenya.org/api/indicators')

    console.log(resp);
    setData(resp);
    }


    React.useEffect(() => {
        fetchData();
       }, []);

  const [indicator, setIndicator] = React.useState();
  const [county, setCounty] = React.useState();
  const [selectDate, handleDateChange]= useState(new Date());
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  // const [posts,setPosts] =  useState([]);
  // const fetchPost = async () => {
  //   const response = await fetch(

  //   );
  //   const data = await response.json();
  //   setPosts(postData);
  // };
  // const fetchData = async () => {
  // }
 

  

  // const formToJSON = (elements) =>
  // [].reduce.call(
  //   elements,
  //   (data,element) => {
  //     data[element.name] = element.value;
  //     return data;
  //   },
  //   {},
  // );

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();

  //   const data = formToJSON(form.elements);
    
  //   const dataContainer = document.getElementsByClassName('results__display')[0];
    
  //   dataContainer.textContent = JSON.stringify(data, null, ' ');

  // };

  
  
  //const form = document.getElementsByClassName('.contact-form');

  //const data = getFormDataAsJSON(form);
  //form.addEventListener('submit', handleFormSubmit);
 

  // this.state = {
  //   details: [],
  //   indicator: "",
  //   county: "",
  //   period_from: "",
  //   period_to: "",
  //   avatar: null,
  //   json: "",
  //   loading: true,

  // };
  // componentDidMount() {
  //   let data;

  //   axios
  //       .get("http://localhost:8000/wel/")
  //       .then((res) => {
  //           data = res.data;
  //           this.setState({
  //               details: data,
  //           });
  //       })
  //       .catch((err) => {});
  // }

  // renderSwitch = (param) => {
  //     switch (param + 1) {
  //         case 1:
  //             return "primary ";
  //         case 2:
  //           return "secondary";
  //         case 3:
  //             return "success";
  //         case 4:
  //             return "danger";
  //         case 5:
  //             return "warning";
  //         case 6:
  //             return "info";
  //         default:
  //             return "yellow";
  //   }
  // };



  // handleSubmit = (e) => {
  //     e.preventDefault();

  //     axios
  //         .post("http://localhost:8000/wel/", {
  //             name: this.state.user,
  //             detail: this.state.quote,
  //         })
  //         .then((res) => {
  //             this.setState({
  //                 indicator: "",
  //                 county: "",
  //                 period_from: "",
  //                 period_to: "",
  //             });
  //       })
  //       .catch((err) => {});
  // };



  

  const handleChangee = (event) => {
    setIndicator(event.target.value);
    setCounty(event.target.value);
    console.log(setCounty)
    
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  console.log(county)
  console.log(indicator)
  
  

  return (
    <Box 
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    >
   
     <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
                
      <TextField
          id="select indicators"
          select
          label="Indicator"
          value={indicator}
          onChange={handleChangee}
          helperText="Please select indicator"
        >
          {indicators.map((option) => (
            <MenuItem key={option.uid} value={option.uid}>
              {option.inndicator}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="select county"
          select
          label="County"
          value={county}
          onChange={handleChangee}
          helperText="Please select county"
          variant="filled"
        >
          {counties.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {" "}
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <DesktopDatePicker
          label="period from"
          inputFormat="MM/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          TextField placeholder = "period to"
          id = "date"
          label="period to"
          inputFormat="MM/yyyy"
          variant = "outlined"
          size = "medium"
          name = "period to"
          defaultValue = "2021-05-28"
          value={value}

          InputLabelProps = {
            {
                shrink: true,
            }
        }

          onChange={handleChange} 
          renderInput={(params) => <TextField {...params} />}
        />
        <div>
          <button type="Fetch Data" className="btn btn-primary" color="primary">Fetch Data
          </button>
        </div>

        <div class="results">
          {/* <h2>Form Data</h2> */}
          {/* <pre></pre> */}
          
        </div>




    </Stack>
    </LocalizationProvider>
    {/* <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        
        
        <TextField
          id="select indicators"
          select
          label="Indicator"
          value={indicator}
          onChange={handleChange}
          helperText="Please select indicator"
        >
          {indicators.map((option) => (
            <MenuItem key={option.uid} value={option.uid}>
              {option.inndicator}
            </MenuItem>
          ))}
        </TextField>
   
        <TextField
          placeholder="period from"
          id="date"
          select
          label="period from"
          variant="outlined"
          size="medium"
          defaultValue="2022-03-01"
          //onChange={this.onChangeas_from}
          type="date"
          SelectProps={{
            shrink: true,
          }}
          // value = {this.state.as_from}
          helperText="Please select period from"
        >
        </TextField>
      </div>
      <div>
        <TextField
          id="select county"
          select
          label="County"
          value={county}
          onChange={handleChange}
          helperText="Please select county"
          variant="filled"
        >
          {counties.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {" "}
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          placeholder="period to "
          id="date"
          select
          label="period to"
          size="medium"
          name="period to"
          defaultValue="2022-03-01"
          //value={this.}state.as_from}
          //onChange={this.onChangeas_from}
          type="date"
          SelectProps={{
            shrink: true,
          }}
          helperText="Please select period to"
          variant="outlined"
        >
          {counties.map((option) => (
            <option key={option.uid} value={option.uid}>
              {option.uid}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <Stack>
        <Button
        //onClick={this.onhandleClick}
        size="Medium "
        variant="contained"
        type="get Data"
        color="primary">
          Get Data
        </Button>
        </Stack>

      </div>
    </Box> */}
      
    </Box>
  );
}

