import Navbar from '../Shared/Navbar/Navbar';
import './Booking.css'


const Booking = () => {
    const city_name = "Cox's Bazar";
    return (
        <div className='background-image 0 h-full'>
            <div className='backdrop-saturate-150 bg-black/30 h-full'>
                <Navbar></Navbar>
                <div className='w-full pl-6 grid md:grid-cols-2 '>
                    <div className='ml-4 md:col-span-1 relative top-24  text-white'>
                        <h1 className='uppercase text-5xl '>{city_name}</h1>
                        <p>{city_name} Bazar is a town on the southeast coast of Bangladesh. It is known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                    </div>
                    <div className="calender md:col-span-1 ml-6 relative top-24 bg-cyan-200 m-4">
                        

                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Origin</span>
                                    </label>
                                    <input type="text" placeholder="Origin" name='origin' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Destination</span>
                                    </label>
                                    <input type="text" placeholder="Destination" name='destination' className="input input-bordered" required />
                                    
                                </div>
                                <div className='flex w-full'>
                                    <div className='w-1/2'>
                                    <label className="label">
                                        <span className="label-text">Form</span>
                                    </label>
                                    <div className='p-2 text-center bg-gray-400 mr-4'>
                                        <input className='p-2' type="date" />
                                    </div>

                                    </div>
                                    <div className='w-1/2 '>
                                    <label className="label">
                                        <span className="label-text">To</span>
                                    </label>
                                    <div className='p-2 w-full text-center  bg-gray-400 '>
                                        <input className='p-2 w-4/5 ' type="date" />
                                    </div>
                                    </div>
                                </div>
                                <div className="form-control ">
                                    <button className="btn btn-primary">Start Booking</button>
                                </div>
                            </form>
                     
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Booking;