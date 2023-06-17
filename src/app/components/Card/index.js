import Image from 'next/image'
import React from 'react'
import IconCard from '../IconCard'

const Card = ({title,price,duration,src,seats,type,cyclinders}) => {
  return (
    <>
            <div className='bg-cardcontainerbgclr rounded-[1.15rem]'>
                <div className='bg-cardbgclr rounded-[1.916rem]'>
                    <div className='pt-8 px-5 '>
                        <h1 className="text-primary text-[1.054rem] font-bold mb-3 capitalize">{title && title}</h1>
                        <h3 className="text-primary text-[1.533rem] font-extrabold"><span className='text-[0.671rem] font-semibold align-text-top'>$ </span>{price && price}<span className='text-[0.575rem] font-medium opacity-80 align-baseline'>/{duration && duration}</span></h3>
                    </div>
                    <div className='px-2 w-full'>
                        <Image src={`/assets/images/${src && src}`} alt="carpic" width={100} height={100} className="w-full h-auto" />
                    </div>
                    <div className='px-5 pb-8 mt-1 flex justify-evenly items-center'>
                        <IconCard 
                        src={"steeringIcon.svg"}
                        title={type && type}
                        />
                        <IconCard 
                        src={"seatIcon.svg"}
                        title={`${seats && seats} Seats`}
                        />
                        <IconCard 
                        src={"gasStationIcon.svg"}
                        title={`${cyclinders && cyclinders} MPG`}
                        />
                    </div>
                </div>
            </div>
    </>
  )
}

export default Card