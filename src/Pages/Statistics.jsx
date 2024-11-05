import { DocumentTitle } from "../pages"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import {
  // ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from 'keep-react'
import { useContext } from "react"
import dataContext from "../datacontext/datacontext"


function Statistics() {
  DocumentTitle("Statistics | Gadget Heaven")
const {datas} = useContext(dataContext)
  
  const chartConfig = {
    price: {
      label: 'price',
      color: '#1B4DFF',
    },
    category: {
      label: 'category',
      color: '#60a5fa',
    },
  } 

  return (
    <ChartContainer config={chartConfig} className="h-[70vh] w-10/12 mx-auto">
      <BarChart accessibilityLayer data={datas}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis dataKey="price" tickLine={false} tickMargin={24} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend verticalAlign="top" align="left" content={<ChartLegendContent />} />
        <Bar dataKey="price" radius={[8, 8, 0, 0]} fill="#1B4DFF" />
        <Bar dataKey="category" radius={[8, 8, 0, 0]} fill="#11A75C" />
      </BarChart>
    </ChartContainer>
  )
}

export default Statistics