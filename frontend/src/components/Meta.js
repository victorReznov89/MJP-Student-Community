import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'MJP-Student-Community',
  description: 'This is a studen community coperation and community club platform of our college',
  keywords: 'Books, Resources, Courses, Study-material',
}

export default Meta
