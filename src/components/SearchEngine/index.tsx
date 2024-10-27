'use client'
import React, { useState } from 'react';
import { Container, Flex, Button } from '@mantine/core';

import { primaryGradient } from '@/const';
import classes from './searchEngine.module.css';
import SelectDate from './SelectDate.tsx'; // Ensure the import is correct
import SelectCarMake from './SelectCarMake';
import SelectCounty from './SelectCounty';
import SelectRegion from './SelectRegion';
import SelectReturnDate from './SelectReturnDate';

const SearchEngine = () => {
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [carMake, setCarMake] = useState('');
  const [region, setRegion] = useState('');
  const [county, setCounty] = useState('');

  return (
    <Container className={classes.container}>
      <Flex direction={{ base: 'column', sm: 'row' }} gap={{ sm: 'lg', lg: 'sm' }} justify='center' align={{ base: 'stretch', sm: 'flex-end' }}>
        <SelectCounty label="Select County" value={county} onChange={setCounty} />
        <SelectRegion   label="Select Region" value={region} onChange={setRegion} />
        <SelectCarMake  label="Select Car Make" value={carMake} onChange={setCarMake}  />
        <SelectDate
          label="Pick Up"
          value={pickupDate}
          onChange={setPickupDate} // Update state on change
          minDate={new Date()} // Example: set minDate to today
        />
        <SelectReturnDate
          label="Return Date"
          value={returnDate}
          onChange={setReturnDate} // Update state on change
          minDate={pickupDate} // Optional: set minDate based on pickupDate
        />
        <Button variant="gradient" gradient={primaryGradient}>Search For Car</Button>
      </Flex>
    </Container>
  );
};

export default SearchEngine;
