"use client";

import React from 'react';
import { Select } from '@mantine/core';

interface SelectCarMakeProps {
  label: string; // Label for the select input
  value?: string; // Optional value prop
  onChange: (value: string) => void; // onChange callback
}

const SelectCarMake: React.FC<SelectCarMakeProps> = ({ label, value = '', onChange }) => {
  const carMakes = [
    { value: 'toyota', label: 'Toyota' },
    { value: 'honda', label: 'Honda' },
    { value: 'ford', label: 'Ford' },
    { value: 'chevrolet', label: 'Chevrolet' },
  ];

  return (
    <Select
      label={label}
      placeholder="Select Car Make"
      value={value} // Pass value directly
      onChange={onChange} // Call the onChange directly
      data={carMakes}
      searchable
      clearable
    />
  );
};

export default SelectCarMake;
