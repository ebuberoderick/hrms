'use client'
import { DateCalendar } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import React from 'react'

function Calender() {
  return (
    <div>
        <DateCalendar className="w-full" showDaysOutsideCurrentMonth fixedWeekNumber={6} readOnly defaultValue={dayjs()} />
    </div>
  )
}

export default Calender