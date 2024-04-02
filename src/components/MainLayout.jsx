import React from 'react'
import Headers from './Headers'
import Footerjs from './Footer'

const MainLayout = ({children}) => {
  return (
    <div>
        <Headers />
        {children}
        <Footerjs />
    </div>
  )
}

export default MainLayout