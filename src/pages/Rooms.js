import React from 'react'
import SingleRoomImg from '../assets/images/single-room.jpg'
import FamilyRoomImg from '../assets/images/family.jpg'
import DoubleRoomImg from '../assets/images/double-room.jpg'
import { Link } from 'react-router-dom'

const Rooms = () => {
    return (
        <div>
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {/* <!--Card 1--> */}
                <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full" src={SingleRoomImg} alt="Mountain" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Single</div>
                        <p class="text-gray-700 text-base mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <Link to='/roombook'>
                            <span className='bg-gray-800 px-4 py-1 rounded text-white'>Book Now</span>
                        </Link>
                    </div>
                </div>
                {/* <!--Card 2--> */}
                <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full" src={DoubleRoomImg} alt="River" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Double</div>
                        <p class="text-gray-700 text-base mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <Link to='/roombook'>
                            <span className='bg-gray-800 px-4 py-1 rounded text-white'>Book Now</span>
                        </Link>
                    </div>
                </div>

                {/* <!--Card 3--> */}
                <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full" src={FamilyRoomImg} alt="Forest" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Family</div>
                        <p class="text-gray-700 text-base mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                        <Link to='/roombook'>
                            <span className='bg-gray-800 px-4 py-1 rounded text-white'>Book Now</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms