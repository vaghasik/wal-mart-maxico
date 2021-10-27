import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import H2 from './components/common/HeaderName';
import Table from './components/common/TblComp';
import DropdownComp from './components/common/DropdownComp';

function App() {
  const [user, setUser] = useState([]),
        [list, setList] = useState([]),
        [ageList, setAgeList] = useState({});

  const handleChange = (e) => {
    const item = e.target.value;
    axios.get(`http://localhost:3000/users/age`, {
      params: {
        name:item
      }
    })
    .then(res => {
      setAgeList(res.data);
    });
  }
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => {
        //console.log(res.data);
        setUser(res.data);
      });
    axios.get('http://localhost:3000/healthcheck')
      .then(res => {
        setList(res.data);
      });
  },[]);
  return (
    <div className="App">
      <H2 hdr2='All Users'/>
      <div>Users and their age</div>
      <Table user={user}
        hName1='Username'
        hName2='Age'
        status='default'
      />
      <H2 hdr2='Age Demographic of Users With __'/>
      <DropdownComp data={list}
        handleChange={handleChange}
      />
      <Table user={ageList} 
        hName1='Age'
        hName2='Count'
        status='filter'
      />
    </div>
  );
}
export default App;