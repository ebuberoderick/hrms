'use client'
import { DateCalendar } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import React from 'react'
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function Calender() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className="w-full" showDaysOutsideCurrentMonth fixedWeekNumber={6} readOnly defaultValue={dayjs()} />
      </LocalizationProvider>
    </div>
  )
}

export default Calender