"use client";

import { useDisclosure } from '@mantine/hooks';
import { Center, Drawer } from '@mantine/core';
import AuthButtons from './AuthButtons';
import Logo from './logo';
import { Burger } from '@mantine/core';
import ThemSwitcher from '../ThemSwitcher';
import { Box } from '@mantine/core';

export function NavigationMobile() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer size='xs' title={<Logo/>} opened={opened} onClose={close} transitionProps={{
        transition:'slide-right'
      }}>
        <Box>
        <AuthButtons/>

        </Box>

         <Center hiddenFrom='sm' pos='fixed' bottom={0} w="90%" py={8}>
         <ThemSwitcher/>

         </Center>
      </Drawer>

     
      <Burger opened={opened} onClick={open} aria-label='Toggle navigation'/>
    </>
  );
}
