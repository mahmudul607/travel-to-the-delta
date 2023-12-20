import { Link} from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import './News.css'
const News = () => {
   

    const city_name ="Cox's";
    return (
        <div className="background-image">
            <div className="backdrop-saturate-150 bg-black/30 h-full">
                <Navbar></Navbar>
                <div className=" w-full text-left pl-6  grid md:grid-cols-6 ">
                    <div className="text-white md:col-span-2 h-full relative top-48 ">
                        <h1 className="text-4xl uppercase">{city_name} BAZAR</h1>
                        <p>{city_name} Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                       <Link to='/booking' className="btn btn-lg bg-yellow-600 mt-4">Booking</Link>
                    </div>
                    <div className="md:col-span-4">

                    </div>
                   
                </div>

            </div>

        </div>
    );
};

export default News;