import React from 'react'
import ChartBoard from './Chart/ChartBoard'
import ChartHeader from './Chart/ChartHeader'

function DetailedChart({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className}>
      <ChartHeader />
      <ChartBoard />
    </div>
  )
}

export default DetailedChart