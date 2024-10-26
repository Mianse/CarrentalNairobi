'use client'
import React from 'react'
import { SegmentedControl,Center, useMantineColorScheme } from '@mantine/core'
import {IconSun,IconMoon} from '@tabler/icons-react'
import { Text } from '@mantine/core'

const ThemSwitcher = () => {
    const {colorScheme,setColorScheme}= useMantineColorScheme()
  return (
    <SegmentedControl 
     value={colorScheme}
     onChange = {(value)=>setColorScheme(value as 'light'|'dark')}
     data={[{
        value: 'light',
        label:( <Center>
        <IconSun size="1rem" stroke={1.5}/>
        <Text ml="xs">Light</Text>
        </Center>),
       
    },{
        value: 'dark',
        label:( <Center>
            <IconMoon size="1rem" stroke={1.5}/>
            <Text ml="xs">Dark</Text>
            </Center>) ,

    }]} />
  )
}

export default ThemSwitcher
