import React from 'react'

export const StructuredData = ({ data }: { data: any }): React.JSX.Element => {
  return (
    <script
      id='structured-data'
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}


