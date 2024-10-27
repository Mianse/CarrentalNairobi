"use client";

import React from 'react';
import { Select } from '@mantine/core';

interface SelectRegionProps {
  label: string; // Label for the select input
  value?: string; // Optional value prop
  onChange: (value: string) => void; // onChange callback
}

const SelectRegion: React.FC<SelectRegionProps> = ({ label, value = '', onChange }) => {
  const regions = [
    { value: 'north', label: 'North' },
    { value: 'south', label: 'South' },
    { value: 'east', label: 'East' },
    { value: 'west', label: 'West' },
  ];

  return (
    <Select
      label={label}
      placeholder="Select Region"
      value={value} // Pass value directly
      onChange={onChange} // Call the onChange directly
      data={regions}
      searchable
      clearable
    />
  );
};

export default SelectRegion;
