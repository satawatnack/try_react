import {React, useState, useEffect} from 'react'
import RocketsService from '../../../services/RocketsService';

const RocketDetail =  ({ match }) => {
    const [rocket, setRocketsData] = useState([]);

    useEffect(() => {
      RocketsService.get(match.params.rocket_id)
        .then((res) => {
          setRocketsData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    console.log(rocket.height)
    return(
        <>
        <div className="bg-gray-100 w-screen h-screen flex">
            <div className="w-1/4 h-screen m-2">
            <div className="h-1/6">
                <div className="p-8 text-center font-serif font-bold text-2xl bg-blue-100 rounded-xl">
                {rocket?.rocket_name??"Rocket Name"}<br />
                {rocket?.company??"Company"}, {rocket?.country??"Country"}
                </div>
            </div>
            <div className="p-5 rounded-lg shadow-md bg-white">
                <div className="mt-0 mx-auto border-t p-2 px-0 py-3.5 text-sm">
                First Flight
                <br />
                <p className="p-2 text-lg font-serif font-semibold">21 Jan 1999</p>
                </div>
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5">
                Data 1
                </div>
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5">Data 2</div>
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5">
                Data 3 
                </div>
            </div>
            </div>

            <div className="w-1/2 h-screen flex-col justify-center m-2">
            <div>
                <img
                className="mt-2 h-1/2 w-full rounded-lg"
                src="https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg"
                />
                <div className="p-5 rounded-xl bg-white mt-3 shadow-lg">
                {rocket?.description??"Description"}
                </div>
            </div>
            </div>
            <div className="w-1/4 h-screen m-2">
            <div className="h-1/6">
                <div className="p-8 text-center font-serif font-bold text-2xl bg-blue-100 rounded-xl">
                Falcon 8<br/>SpaceX, USA</div>
                </div>
                <div className="p-5 rounded-lg shadow-md bg-white">
                <div className="mt-0 m-3 mx-auto border-t p-2 px-0 py-3.5 text-cen">
                    First Flight 21 Jan 1999
                </div>
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5">
                    Data 1
                </div>
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5">
                    Data 2
                </div>
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5">
                    Data 3
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default RocketDetail