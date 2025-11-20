import { Button } from '@/src/components/ui/Button'
import React from 'react'

const page = () => {
  return (
    <div>
        ini Landing Page
        <Button label="Get Started" variant="primary" moveTo='/auth/login'/>
    </div>
  )
}

export default page