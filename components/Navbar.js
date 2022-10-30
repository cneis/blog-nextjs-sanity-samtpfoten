import Image from "next/image"
import Logo from '../images/logo_samtpfoten.png'




export default function Navbar() {
    return (
       <div>        
        <nav class="bg-[#D2A4FE] p-2 mt-0 fixed w-full z-10 top-0">
            <div class="container mx-auto flex flex-wrap items-center">
                <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                    <a class="text-white no-underline hover:text-white hover:no-underline" href="#">
                       
                        <Image  src={Logo} width='100' height='100' alt='samtpfoten mallorca'/>
                    </a>
                </div>
               
                <div class="flex w-full px-20 pt-2 content-center justify-between md:w-1/2 md:justify-end">
                    <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                    
                      <li class="mr-3">
                        <a class="inline-block no-underline text-black hover:text-gray-200 hover:text-underline py-2 px-4" href="/">Blog Home</a>
                      </li>
                        <li class="mr-3">
                        <a class="inline-block  no-underline text-black hover:text-gray-200 hover:text-underline py-2 px-4" href="https://www.samtpfotenmallorca.com/">Web Home</a>
                      </li>
                      <li class="mr-3">
                        <a class="inline-block  no-underline bg-black text-[#D2A4FE] hover:text-gray-200 hover:text-underline py-2 px-4" href="https://www.samtpfotenmallorca.com/contact">Contact Us</a>
                      </li>
                    </ul>
                </div>
            </div>
        </nav>


        <div className="bg-[#D2A4FE] w-full object-cover flex px-20 sticky">
            <Image  src={Logo} width='100' height='100' />
            <div className="flex font-sans font-medium align-baseline py-100">
               <a href='https://www.samtpfotenmallorca.com/' className="flex px-10 py-10"> Zurück zu Samtpfoten Mallorca</a>
            </div>
        </div>



        </div>
    )
}