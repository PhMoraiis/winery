import { Card } from '../Card'
import { FaCheck, FaTimes, FaBed, FaBath, FaWifi, FaWineBottle } from 'react-icons/fa'
import { FiCoffee } from 'react-icons/fi'
import { MdPets } from 'react-icons/md'

const Cards = () => {
  return (
    <div className="gap-10 mt-10">
          <Card>
            <h1 className="text-center uppercase text-2xl text-[#0B141A] max-w-[300px]">
              {}
            </h1>
            <h3 className='text-center uppercase font-bold text-[#0B141A] max-w-[300px]'>{}</h3>
            <p className="mt-2 text-gray-500 max-w-[400px]">
              {}
            </p>
            <p className='text-gray-500 max-w-[300px]'>A partir de <span className='font-bold text-[#0B141A]'>R$ {},00</span></p>
            <ul className="my-4  flex flex-row mx-auto max-w-[300px]">
              <div className="flex flex-col mr-20">
                <li className='flex items-center hover:scale-105 duration-300 pb-4'> <FaBed className='text-[#0B141A] mr-[1.2rem] text-2xl' />{}</li>
                <li className='flex items-center hover:scale-105 duration-300 pb-4'> <FaBath className='text-[#0B141A] mr-[1.2rem] text-2xl' /> {}</li>
                <li className='flex items-center hover:scale-105 duration-300 pb-4'> <MdPets className='text-[#0B141A] mr-2 text-2xl' /> { ? <FaCheck className='text-[#3b8665] ml-2' /> : <FaTimes className='text-[#5E2129] ml-2' />}</li>
              </div>
              <div className="flex flex-col">
                <li className='flex items-center hover:scale-105 duration-300 pb-4'> <FaWifi className='text-[#0B141A] mr-2 text-2xl' /> { ? <FaCheck className='text-[#3b8665] ml-2' /> : <FaTimes className='text-[#5E2129] ml-2' />}</li>
                <li className='flex items-center hover:scale-105 duration-300 pb-4'> <FiCoffee className='text-[#0B141A] mr-2 text-2xl' /> { ? <FaCheck className='text-[#3b8665] ml-2' /> : <FaTimes className='text-[#5E2129] ml-2' />}</li>
                <li className='flex items-center hover:scale-105 duration-300 pb-4'> <FaWineBottle className='text-[#0B141A] mr-2 text-2xl' /> { ? <FaCheck className='text-[#3b8665] ml-2' /> : <FaTimes className='text-[#5E2129] ml-2' />}</li>
              </div>
            </ul>
            <button className='bg-[#11412B] rounded-lg px-2 py-4 text-white uppercase mt-4 hover:scale-105 duration-300'>Reserve Agora!</button>
          </Card>
      </div>
  )
}

export { Cards }