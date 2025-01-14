"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import{Button} from 'react-bootstrap'
import ProductCart from "./components/ProductCard.js"

export default function Home() {

  const router = useRouter()

  const handleClick = ()=>{
    router.push('/signup')
  }
  return (
    <div className="4 w-[100vw] h-[100vh] bg-white">
      <div className="flex  flex-col lg:flex-row items-center justify-center p-6 bg-[#003D29] gap-5">
        <div className=" flex flex-col w-1/2 items-start">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">
            Order groceries for delivery or pickup today
          </h1>
          <button
            type="button"
            onClick={handleClick}
            className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600"
            aria-haspopup="dialog"
          >
            Sign up for 3 free deliveries
          </button>
        </div>
        <div className=" hidden lg:flex  w-1/2 h-[160px] lg:w-auto rounded-xl overflow-hidden">
          <img
            src="/assests/images/banner.png"
            alt="Groceries"
            className=""
            style={{objectFit:'contain',height:'100%',width:'100%'}}
          />
        </div>
      </div>
      <h1>Product</h1>
      <div className="flex justify-center p-9 gap-9 items-center">
          {Array.from({length:5}).map(items=>{
            return(
              <ProductCart name={'banana'} weight={'1lb'} stock={'0'} price={'.99'} src={'https://pngimg.com/d/banana_PNG842.png'}/>
            )
          })}
      </div>
</div>

  );
}
