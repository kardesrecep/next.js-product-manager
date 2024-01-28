import PageHeader from '@/components/common/page-header'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <PageHeader title="About" />
<Image  src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg" width={800} height={400} alt='pexels furniture' />

    </div>
  )
}

export default AboutPage