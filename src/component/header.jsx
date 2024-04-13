

function Header(){
  const handleClick = () => {
     console.log('hello');
  }


  return (

     <div id="head" className="w-[90%] h-[100px] bg-red-300 mt-20 mx-auto border-4 rounded-md border-black py-4 flex  align-center justify-between px-8 md:px-16">
    
        <div className="text-2xl text-center md:text-left font-bold text-black">
        <p className="text-3x1 mt-[15px]">Start Bootstrap</p>
        </div>

      
        <div className="hidden md:flex items-center justify-center gap-5 sm:gap-8">
           <button href="#" className="md:text-lg text-black font-bold hover:cursor-pointer hover:text-red-600 hover:transition-all hover:duration-300">About</button>
           <button href="#" className="md:text-lg text-black font-bold hover:cursor-pointer hover:text-red-600 hover:transition-all hover:duration-300">Services</button>
           <button href="#" className="md:text-lg text-black font-bold hover:cursor-pointer hover:text-red-600 hover:transition-all hover:duration-300">Portfolio</button>
           <button href="#" className="md:text-lg text-black font-bold hover:cursor-pointer hover:text-red-600 hover:transition-all hover:duration-300">Contact</button>
        </div>


        <div id="hid" onClick={handleClick} className="md:hidden text-red-600 text-3xl cursor-pointer flex items-center justify-center">
           <i className="fa-solid fa-bars"></i>
        </div>



     </div>
  )
}

export default Header 