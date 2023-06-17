
import Dropdown from '@/app/components/Dropdown/index';
import Card from './components/Card';
import {dropdownsArr} from '@/app/config';

const fetchCarsData = async () => {
  
  const url = process.env.Url

  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
          'X-RapidAPI-Host': process.env.X_RapidAPI_Host
      }
  };

  try {
        const res = await fetch(url, options);
        const data = await res.json();
        console.log('cars data ',data)
      
        return data;
  } catch (err) {
        console.log('error=> ',err) 
  }
}

export default async function Home() {

  const cars_data = await  fetchCarsData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-3">
      {/* heading and dropdown section */}
      <div className="my-3 w-full sm:w-[95%] p-4 rounded-[2.428rem] flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between ">
        <div>
          <h1 className="text-primary text-[2.088rem] font-extrabold">Car Catalogue</h1>
          <h5 className="text-primary text-[0.958rem] font-normal">Explore out cars you might like!</h5>
        </div>

        <div className="my-3 sm:flex sm:justify-start lg:justify-end items-center sm:flex-wrap [&>*]:mr-3 lg:[&>*]:mr-0 lg:[&>*]:ml-3">  
            {
              dropdownsArr && dropdownsArr.map((item,i)=> (
                <Dropdown 
                title={item}
                key={i}
                />
              ))
            }
        </div>
      </div>
            {/* cards section */}
      <section className='mt-4 w-full sm:w-[95%] p-3'>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[200px]:">
              {
                Array.isArray(cars_data) && cars_data.map((item,i)=>(
                    <Card
                    title={item?.make} 
                    price={"46"} 
                    duration={"day"} 
                    src={"carpic.svg"} 
                    type={item?.drive || "Manual"} 
                    seats={item?.highway_mpg || "5"} 
                    cyclinders={item?.cylinders || "34"} 
                    />
                ))
              }
          </div>
      </section>
    </main>
  )
}
