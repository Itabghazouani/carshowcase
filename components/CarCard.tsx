"use client"

import { ICarProps } from "@/types"
import { calculateCarRent, convertMpgToKml, generateCarImageUrl } from "@/utils"
import Image from "next/image"
import { useState } from "react"
import CustomButton from "./CustomButton"
import CarDetails from "./CarDetails"

interface ICarCardProps {
  car: ICarProps
}

const CarCard = ({ car }: ICarCardProps) => {

  const { city_mpg, year, make, model, transmission, drive } = car

  const [isOpen, setIsOpen] = useState(false)

  const carRent = calculateCarRent(city_mpg, year)
  const kmpl = convertMpgToKml(city_mpg)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{make} {model}</h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          €
        </span>
        {carRent}
        <span className="self-end text-[14px] font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/tire.svg"
              alt="tire"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {drive.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/gas.svg"
              alt="gas type icon"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {kmpl.toFixed(2)} KM/L
            </p>
          </div>
        </div>

         <div className="car-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  )
}

export default CarCard
