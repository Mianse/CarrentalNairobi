import { Group } from '@mantine/core'
import classes from './Style.module.css'
import { Box } from '@mantine/core'
import React from 'react'
import Logo from './logo'
import AuthButtons from './AuthButtons'
import ThemSwitcher from '../ThemSwitcher'
import { NavigationMobile } from './NavigationMobile'

const Navbar = () => {
  return (
    <Box  className={classes.header}>
        <Group justify='space-between' h="100%">  
             <Logo/>
      <Box visibleFrom='md'>
      <AuthButtons/>

      </Box>
      <Box visibleFrom='sm'>
      <ThemSwitcher/>

      </Box>
      <Box hiddenFrom='md'>
      <NavigationMobile/>

      </Box>
      </Group>
      </Box>
  )
}

export default Navbar
