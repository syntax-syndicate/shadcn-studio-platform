'use client'

// React Imports
import { useState } from 'react'

// Third-party Imports
import { Bar, BarChart } from 'recharts'
import { Minus, Plus } from 'lucide-react'

// Type Imports
import type { ChartConfig } from '@/components/ui/chart'

// Component Imports
import { Button } from '@/components/ui/button'
import { ChartContainer } from '@/components/ui/chart'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  {
    goal: 400
  },
  {
    goal: 300
  },
  {
    goal: 200
  },
  {
    goal: 300
  },
  {
    goal: 200
  },
  {
    goal: 278
  },
  {
    goal: 189
  },
  {
    goal: 239
  },
  {
    goal: 300
  },
  {
    goal: 200
  },
  {
    goal: 278
  },
  {
    goal: 189
  },
  {
    goal: 349
  }
]

const chartConfig = {
  goal: {
    label: 'Goal',
    color: 'var(--primary)'
  }
} satisfies ChartConfig

export function CardsActivityGoal() {
  // States
  const [goal, setGoal] = useState(350)

  const onClick = (adjustment: number) => {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Card>
      <CardHeader className='pb-4'>
        <CardTitle>Move Goal</CardTitle>
        <CardDescription>Set your daily activity goal.</CardDescription>
      </CardHeader>
      <CardContent className='pb-2'>
        <div className='flex items-center justify-center space-x-2'>
          <Button
            variant='outline'
            size='icon'
            className='h-8 w-8 shrink-0 rounded-full'
            onClick={() => onClick(-10)}
            disabled={goal <= 200}
          >
            <Minus />
            <span className='sr-only'>Decrease</span>
          </Button>
          <div className='flex-1 text-center'>
            <div className='text-5xl font-bold tracking-tighter'>{goal}</div>
            <div className='text-muted-foreground text-[0.70rem] uppercase'>Calories/day</div>
          </div>
          <Button
            variant='outline'
            size='icon'
            className='h-8 w-8 shrink-0 rounded-full'
            onClick={() => onClick(10)}
            disabled={goal >= 400}
          >
            <Plus />
            <span className='sr-only'>Increase</span>
          </Button>
        </div>
        <div className='my-3 h-[60px]'>
          <ChartContainer config={chartConfig} className='aspect-auto h-full w-full'>
            <BarChart data={data}>
              <Bar dataKey='goal' radius={4} fill='var(--color-goal)' />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Set Goal</Button>
      </CardFooter>
    </Card>
  )
}
