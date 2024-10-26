import React from 'react'
import Link from 'next/link'
import { Text } from '@mantine/core'
import { primaryGradient } from '@/const'
const Logo = () => {
  return (
    <Text fz='' fw='bold' variant='gradient' gradient={primaryGradient} component={Link} href="/">
        Car Rentals Nairobi

    </Text>
      
  )
}

export default Logo
