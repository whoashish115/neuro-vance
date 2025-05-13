import React from 'react'
import UpSide from './UpSide'
import DownLeftSide from './DownLeftSide'
import DownRightSide from './DownRightSide'
import { Section } from '@/components'

const index = () => {
  return (
    <>
        <UpSide />
        <div className="flex flex-wrap py-6 md:pt-20 md:pb-10">
          <DownLeftSide />
          <DownRightSide />
        </div>
    </>
  )
}

export default index