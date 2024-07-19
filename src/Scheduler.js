import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

const Scheduler = () => {

  const [events, setEvents] = useState([]);
  
  const getData = async()=>{
    const response = await axios.get('/mockData.json')
    setEvents(response.data)
  }
  
  useEffect(()=>{
    getData()
  },[])

  return (
    <div style={{ height: '80vh' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default Scheduler;