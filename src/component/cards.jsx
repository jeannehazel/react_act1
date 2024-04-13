import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faLaptop, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGem as farGem, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

function Cards(){
    return (
       <div className="w-[90%] mx-auto border-black flex items-center justify-between flex-wrap">
          
          <div className="w-[300px] bg-red-300 min-h-[250px] border-4 border-black rounded-md flex flex-col items-center mx-auto mb-3">
             <div className=" w-full flex items-center justify-center text-5xl text-red-500 mt-8"><FontAwesomeIcon icon={faGem} /></div>
             <h1 className="text-3xl text-center font-bold my-2 text-black">Sturdy Themes</h1>
             <p className="text-black text-center text-[1.1rem] px-8">Our themes are updated regularly to keep them bug free!</p> 
          </div>
 
          
          <div className="w-[300px] bg-red-300 min-h-[250px] border-4 border-black rounded-md flex flex-col items-center mx-auto mb-3">
             <div className="w-full flex items-center justify-center text-5xl text-red-500 mt-8"><FontAwesomeIcon icon={faLaptop} /></div>
             <h1 className="text-3xl text-center font-bold my-2 text-black">Up To Date</h1>
             <p className="text-black text-center text-[1.1rem] px-6">All dependencies are kept current to keep things fresh.</p> 
          </div>
       
          
          <div className="w-[300px] bg-red-300 min-h-[250px] border-4 border-black rounded-md flex flex-col items-center mx-auto mb-3">
             <div className="w-full flex items-center justify-center text-5xl text-red-500 mt-8"><FontAwesomeIcon icon={faGlobe} /></div>
             <h1 className="text-3xl text-center font-bold my-2 text-black">Ready To Publish</h1>
             <p className="text-black text-center text-[1.1rem] px-6">You can use this design as is, or you can make changes!</p> 
          </div>
 
          
          <div className="w-[300px] bg-red-300 min-h-[250px] border-4 border-black  rounded-md flex flex-col items-center mx-auto mb-3">
             <div className="w-full flex items-center justify-center text-5xl text-red-500 mt-8"><FontAwesomeIcon icon={farHeart} /></div>
             <h1 className="text-3xl text-center font-bold my-2 text-black">Made With Love</h1>
             <p className="text-black text-center text-[1.1rem] px-6">Is it really open source if it's not made with love?</p> 
          </div>
       
       </div>
    )
 }
 
 export default Cards 