import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Scheduler = () => {
  const [events, setEvents] = useState([
    {
      id: 0,
      title: 'Scrum Meeting',
      start: new Date(2024, 6, 1, 9, 30),
      end: new Date(2024, 6, 1, 10, 30),
      location: 'Office',
    },
    {
      id: 1,
      title: 'Project Deadline',
      start: new Date(2024, 6, 3, 17, 0),
      end: new Date(2024, 6, 3, 18, 0),
    },
    {
      id: 1,
      title: 'Project2',
      start: new Date(2024, 6, 3, 17, 0),
      end: new Date(2024, 6, 3, 18, 0),
    },
  ]);

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