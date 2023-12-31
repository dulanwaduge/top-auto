import Image from 'next/image'
import { Hero } from '@/components'
import {CustomFilter} from '@/components'
import {SearchBar, CarCard} from '@/components'
import  connectMongo from '../utils/connectMongo'
import Car from '@/models/cars'
//import addCar from '@/utils/mongoMethods'

export default async function Home() {
  await connectMongo();
  
  const allCars = "";
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>Vehicle Catalogue</h1>
          <p>Explore cars in Sri Lanka</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (<CarCard car={car} />))}
            </div>
          </section>
        ):(
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no featured cars</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  )
}
