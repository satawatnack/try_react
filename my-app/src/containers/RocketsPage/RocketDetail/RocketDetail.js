import { React, useState, useEffect } from "react";
import RocketsService from "../../../services/RocketsService";

const RocketDetail = ({ match }) => {
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

  return (
    <>
    {/* Entrie Screen */}
    <div className="bg-gray-200 w-screen flex">
      {/* First Panel */}
        <div className="w-1/4 h-screen m-2">
        <div className="h-1/6">
        {/* First Block */}
            <div className="p-3 pt-8 pb-12 text-center font-bold text-2xl bg-blue-100 rounded-xl">
            <p className="font-serif">{rocket?.rocket_name??"Rocket Name"}</p>
            <p className="text-lg p-2 font-normal text-gray-600">{rocket?.company??"Company"}<br/> {rocket?.country??"Country"}</p>
            </div>
        </div>
        {/* Second Block */}
        <div className="p-5 mt-8 rounded-lg shadow-md bg-white">
            <div className="mt-0 mb-0 mx-auto border-t p-2 px-0 py-3.5 text-sm  font-serif ">
              First Flight 
              <br />
              <p className="p-2 text-md font-sans font-semibold">{rocket?.first_flight??"First Flight Date"}</p>
            </div>
            <div className="m-3 mb-0 mt-0mb-3 mx-auto border-t p-2 px-0 py-3.5 text-sm  font-serif">
              Status 
              <p className="p-2 text-md font-sans font-semibold">{rocket?.active??'-'?"Active":"Inactive"}</p>
            </div>
            <div className="m-3 mb-0 mx-auto border-t p-2 px-0 py-3.5 text-sm  font-serif">
              Dimension
              <p className="p-2 text-md font-sans font-semibold">Height {rocket?.height?.meters??"0"} meters</p>
              <p className="p-2 pb-0 pt-0 text-md font-sans font-semibold">Diameter {rocket?.diameter?.meters??"0"} meters</p>
            </div>
            <div className="m-3 mb-0 mx-auto border-t p-2 px-0 py-3.5 text-sm  font-serif">
              Mass
              <p className="p-2 text-md font-sans font-semibold">{rocket?.mass?.kg??"0"} Kilograms</p>
            </div>
        </div>
          <div className="p-5 mt-3 rounded-lg shadow-md bg-white">
            <div className="mt-0 mx-auto pt-0 px-0 py-3.5 text-sm  font-serif ">
                More Information
                <p className="p-2 text-md font-sans font-semibold hover:underline"><a href={rocket?.wikipedia??"wikipedia_link"}>Wikipedia</a></p>
            </div>
          </div>
        </div>

        {/* Center Panel */}
        <div className="w-1/2 h-screen flex-col justify-center m-2">
        <div>
            {/* Image */}
            <img
            className="h-1/2 w-full rounded-lg"
            src={rocket?.flickr_images?.[0]??'Empty Image'}
            />
            {/* Second Block */}
            <div className="p-5 rounded-xl bg-white mt-3 shadow-lg text-md font-serif">
            Description
            <p className="p-2 text-md font-sans font-semib">{rocket?.description??"Description"}</p>
            </div>
        </div>
        </div>

        {/* Left Panel */}
        <div className="w-1/4 h-screen m-2">
        <div className="h-1/6">
          {/* First Block */}
            <div className="p-3 pt-8 pb-12 text-center font-serif text-xl font-bold bg-blue-100 rounded-xl">
                Engine Type <p className="text-lg p-2 pb-0 font-sans text-gray-600 font-normal">{rocket?.engines?.type??"Engine Type"}</p>
                <p className="text-lg pt-0 font-sans text-gray-600 font-normal"> version {rocket?.engines?.version??"-"} </p>
            </div>
        </div>
          {/* Second Block */}
            <div className="p-5 mt-8 rounded-lg shadow-md bg-white">
            <div className="mt-0 mx-auto border-t p-2 px-0 py-3.5 text-sm font-serif">
              Propellant
                <ol className="p-2 text-md font-sans font-semibold" type="1">
                  <li>1. {rocket?.engines?.propellant_1??"propellant_1"}</li>
                  <li>2. {rocket?.engines?.propellant_2??"propellant_2"}</li>
                </ol>
            </div>
            <div className="m-3 mx-auto border-t p-2 px-0 py-3.5 text-sm font-serif">
              Thrust
                <ol className="p-2 text-md font-sans font-semibold" type="1">
                  <li>Sea Level {rocket?.engines?.thrust_sea_level?.kN??"thrust_sea_level"} kN</li>
                  <li>Vacuum {rocket?.engines?.thrust_vacuum?.kN??"thrust_vacuum"} kN</li>
                  <li>Thrust to weight {rocket?.engines?.thrust_to_weight??"thrust_to_weight"} kN</li>
                </ol>
            </div>
            <div className="m-3 mx-auto border-t p-2 px-0 py-3.5 text-sm font-serif">
                First Stage
                <ol className="p-2 text-sm font-sans font-semibold" type="1">
                  <li>Reuseable Status:  {rocket?.second_stage?.reusable??'-' ?"Yes":"No"}</li>
                  <li>Number of Engine(s) {rocket?.first_stage?.engines??"-"}</li>
                  <li>Fuel Amount {rocket?.first_stage?.fuel_amount_tons??"-"} ton(s)</li>
                  <li>Burn Time {rocket?.first_stage?.burn_time_sec??"-"} sec(s)</li>
                </ol>
            </div>
            <div className="m-3 mx-auto border-t p-2 px-0 py-3.5 text-sm font-serif">
                Second Stage
                <ol className="p-2 text-sm font-sans font-semibold" type="1">
                  <li>Reuseable Status: {rocket?.second_stage?.reusable??'-'?"Yes":"No"}</li>
                  <li>Number of Engine(s) {rocket?.second_stage?.engines??"-"}</li>
                  <li>Fuel Amount {rocket?.second_stage?.fuel_amount_tons??"-"} ton(s)</li>
                  <li>Burn Time {rocket?.second_stage?.burn_time_sec??"-"} sec(s)</li>
                </ol>
            </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default RocketDetail;
