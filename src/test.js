import axios from 'axios';
import React from 'react'

const Test = () => {
    const [data, setData] = React.useState();
    const fetchData = async () => {
    const resp = axios.get('https://kodicarmvpapi.herokuapp.com/cars/cars/')

    console.log(resp);
    setData(resp);
    }


    React.useEffect(() => {
        fetchData();
       }, []);



  return (
    <div></div>
  )
}

export default Test