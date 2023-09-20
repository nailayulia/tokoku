import React from 'react';
import Banner from './banner';
import Kategori from './kategori'
import Sepatu1 from '../../../public/img/sepatu.png'

const Navbar = () => {
  return (
    <div>

      <nav className="bg-sky-400 p-4">
        <div className="flex items-center">
          <a href="" className='text-sky-400 text-center  font-semibold bg-white rounded-xl w-1/12 'style={{ fontFamily: 'Kaushan Script, cursive' }}>TOKO  KU</a>

          <div className='flex items-center ml-[17%]'>
              <input
                type="text"
                placeholder="Cari sesuatu..."
                className="mr-5 py-2 px-3 w-[40rem] rounded-lg border outline-none focus:border-blue-500"
              />
              <ul className='flex gap-4 ml-[20rem]'>
              <li><a href="/" className="text-white bg-sky-100 py-2 px-4 rounded-lg hover:bg-blue-600"></a></li>
              <li><a href="/" className="text-white bg-sky-100 py-2 px-4 rounded-lg hover:bg-blue-600"></a></li>
              <li><a href="/" className="text-white bg-sky-100 py-2 px-4 rounded-lg hover:bg-blue-600"></a></li>
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
              </li>
              </ul>
          </div>
        


        </div>
      </nav>
      <div className=" mx-8 mt-10">
        
        <Banner/>

      </div>

      <div className="container mx-auto">
        <div className=""></div>
      </div>

      <div class="flex justify-center items-center mt-10 gap-2">
        <div class="bg-sky-500 shadow-lg rounded-lg ">
         <img src={Sepatu1} alt="" className='w-60 '/>
        </div>
        <div class="bg-sky-500 shadow-lg rounded-lg ">
         <img src= "../../../public/img/1.png" alt="" className='w-60 '/>
        </div>
        <div class="bg-sky-500 shadow-lg rounded-lg ">
         <img src= "../../../public/img/3.png" alt="" className='w-60 '/>
        </div>
        <div class="bg-sky-500 shadow-lg rounded-lg ">
         <img src="../../../public/img/2.png" alt="" className='w-60 '/>
        </div>
        <div class="bg-sky-500 shadow-lg rounded-lg ">
         <img src="../../../public/img/4..png" alt="" className='w-60 '/>
        </div>
        <div class="bg-sky-500 shadow-lg rounded-lg ">
         <img src="../../../public/img/5.png" alt="" className='w-60 '/>
        </div>
        
      </div>

      <br />

      

     


     <div>
     <Kategori/>
     </div>


     <div className="bg-sky-300 text-white p-4">
     <a href="" className='text-white text-center  font-semibold'style={{ fontFamily: 'Kaushan Script, cursive' }}>TOKO  KU</a>
      {/* <button className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 mt-4">Click Me</button> */}
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-black sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul className='flex flex-wrap items-center mt-3 text-sm'>
        <li><svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <circle cx="12" cy="12" r="3" />  <line x1="12" y1="9" x2="20.4" y2="9" />  <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(120 12 12)" />  <line x1="12" y1="9" x2="20.4" y2="9" transform="rotate(240 12 12)" /></svg></li>
        <li><svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg></li>
        <li><svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></li>
        <li><svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg></li>
      </ul>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>


    </div>
    
    </div>


  );
};

export default Navbar;

