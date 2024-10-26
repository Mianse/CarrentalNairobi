'use client';
import React from 'react';
import { Group, Button } from '@mantine/core';
import { primaryGradient } from '@/const';
import Link from 'next/link';
import { useMediaQuery } from '@mantine/hooks';

const AuthButtons = () => {
  // Use useMediaQuery directly
  const smallScreen = useMediaQuery('(max-width: 991px)');

  return (
    <Group grow={smallScreen}>
      <Button variant='default' component={Link} href='/login'>Log in</Button>
      <Button variant='gradient' component={Link} href='/sign-up' gradient={primaryGradient}>Sign-up</Button>
    </Group>
  );
};

export default AuthButtons;
