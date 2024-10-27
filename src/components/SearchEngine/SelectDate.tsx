import React from 'react'
import { ReactNode } from 'react';

import { DateInput, DateValue } from '@mantine/dates';

interface props {
    label?: ReactNode;
    value: DateValue | Date;
    onChange?: (value: DateValue | Date) => void;
    minDate?: Date 
}

const SelectDate = ({label,value,onChange,minDate}: props) => {

  return (
    <DateInput
    value={value}
    onChange={onChange}
    label={label}
    minDate={minDate}
    width='100%'
    placeholder="Select Return Date"
  />
  )
}

export default SelectDate
