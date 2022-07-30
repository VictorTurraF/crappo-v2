import React from 'react'
import ChartHeader from './Chart/ChartHeader'

function DetailedChart({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className}>
      <ChartHeader />
    </div>
  )
}

export default DetailedChart