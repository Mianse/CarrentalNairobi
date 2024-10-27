"use client";

import React from 'react';
import { Select } from '@mantine/core';

interface SelectCountyProps {
  label: string; // Label for the select input
  value?: string; // Optional value prop
  onChange: (value: string) => void; // onChange callback
}

const SelectCounty: React.FC<SelectCountyProps> = ({ label, value = '', onChange }) => {
  const counties = [
    { value: 'county1', label: 'County 1' },
    { value: 'county2', label: 'County 2' },
    { value: 'county3', label: 'County 3' },
    { value: 'county4', label: 'County 4' },
  ];

  return (
    <Select
      label={label}
      placeholder="Select County"
      value={value} // Pass value directly
      onChange={onChange} // Call the onChange directly
      data={counties}
      searchable
      clearable
    />
  );
};

export default SelectCounty;
