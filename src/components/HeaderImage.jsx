import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";
const HeaderImage = () => {

    return (
            <div className="w-full bg-cover bg-opacity-50" >
                <div className="flex h-full items-center" style={{ minHeight: '80vh'}}>
                    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-black bg-opacity-45">
                        <h1 className="text-white text-[120px] text-black font-vvdsBold mb-4">Mechanic On <br /> Wheels.</h1>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center p-8  font-vvdsRegular text-2xl">
                        <form className="flex flex-col space-y-4 bg-black bg-opacity-45 p-32">
                        <h3 className="text-white text-[20px] text-black font-vvdsRegular">Email ID</h3>
                            <input type="email" className="p-2 w-full bg-[#ffffff] text-black" placeholder="Email" />
                        <h3 className="text-white text-[20px] text-black font-vvdsRegular">Password</h3>
                            <input type="password" className="p-2 bg-[#ffffff] text-black" placeholder="Password" />
                            <button className="bg-[#db5a31] text-white px-4 py-2 rounded-md">Log In</button>
                        </form>
                    </div>

                </div>

        </div>
    );
};

export default HeaderImage;