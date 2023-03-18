import { Card } from 'flowbite-react'

const Cards = ({}) => {
  return (
    <div className="max-w-sm px-2">
      <Card imgSrc={''}>
        <h1 className="text-2xl font-bold tracking-tight text-black capitalize">
          {'Noteworthy technology'}
        </h1>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'}
        </p>
        <ul>
          <li></li>
        </ul>
      </Card>
    </div>
  )
}

export { Cards }