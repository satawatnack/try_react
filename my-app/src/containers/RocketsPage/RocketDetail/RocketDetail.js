import { React, useState, useEffect } from 'react';
import RocketsService from '../../../services/RocketsService';
import { useHistory } from 'react-router-dom';

const RocketDetail = ({ match }) => {
  const [rocket, setRocketsData] = useState([]);
  const history = useHistory();

  let rocketImg = rocket?.flickr_images?.[0] ?? '';
  let resizeImg =
    rocketImg && (rocketImg[8] === 'f' || rocketImg[8] === 'l')
      ? `${rocketImg.slice(0, -5)}m.jpg`
      : `${rocketImg.slice(0, -4)}m.jpg`;

  useEffect(() => {
    let mounted = true;
    RocketsService.get(match.params.rocket_id)
      .then((res) => {
        if (mounted) setRocketsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <>
      {/* Entrie Screen */}
      <div className="bg-gray-200 flex">
        <button
          type="button"
          onClick={() => history.push('/launches')}
          className="focus:outline-none h-12 m-2 mt-3 text-white text-lg py-2.5 px-5 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg"
        >
          &#10094;
        </button>
        {/* Left Panel */}
        <div className="h-auto m-2 w-full lg:w-7/12 xl:w-1/4">
          <div className="h-1/6">
            {/* First Block */}
            <div className="p-3 pt-8 pb-12 text-center font-bold text-2xl bg-gradient-to-r from-gray-800 to-gray-600 rounded-xl">
              <p className="font-serif text-white">
                {rocket?.rocket_name ?? 'Rocket Name'}
              </p>
              <p className="text-lg p-2 font-normal text-gray-200">
                {rocket?.company ?? 'Company'}
                <br /> {rocket?.country ?? 'Country'}
              </p>
            </div>
          </div>
          {/* Second Block */}
          <div className="p-5 mt-8 rounded-lg shadow-md bg-white">
            <div className="mt-0 mb-0 mx-auto border-t p-2 px-0 py-3.5 text-sm  font-serif ">
              First Flight
              <br />
              <p className="p-2 text-md font-sans font-semibold">
                {rocket?.first_flight ?? 'First Flight Date'}
              </p>
            </div>
            <div className="m-3 mb-0 mt-0 mx-auto border-t p-2 px-0 py-3.5 text-sm  font-serif">
              Status
              <p className="p-2 text-md font-sans font-semibold">
                {rocket?.active ?? '-' ? 'Active' : 'Inactive'}
              </p>
            </div>
            <div className="m-3 mb-0 mx-auto border-t p-2 px-0 py-3.5 text-sm  font-serif">
              Dimension
              <p className="p-2 text-md font-sans font-semibold">
                Height {rocket?.height?.meters ?? '0'} meters
              </p>
              <p className="p-2 pb-0 pt-0 text-md font-sans font-semibold">
                Diameter {rocket?.diameter?.meters ?? '0'} meters
              </p>
            </div>
            <div className="m-3 mb-0 mx-auto border-t p-2 px-0 py-3.5 text-sm  font-serif">
              Mass
              <p className="p-2 text-md font-sans font-semibold">
                {rocket?.mass?.kg ?? '0'} Kilograms
              </p>
            </div>
          </div>
          <div className="p-5 mt-3 rounded-lg shadow-md bg-white">
            <div className="mt-0 mx-auto pt-0 px-0 py-3.5 text-sm  font-serif ">
              More Information
              <p className="p-2 text-md font-sans font-semibold hover:underline">
                <a href={rocket?.wikipedia ?? 'wikipedia_link'}>Wikipedia</a>
              </p>
            </div>
          </div>
        </div>

        {/* Center Panel */}
        <div className="h-auto flex-col justify-center m-2 w-full lg:w-7/12 xl:w-2/5">
          <div>
            {/* Image */}
            <img
              className="h-1/2 w-full rounded-lg"
              height="400"
              width="300"
              alt={rocket?.rocket_name ?? 'Empty Image'}
              src={resizeImg}
            />
            {/* Second Block */}
            <div className="p-5 rounded-xl bg-white mt-3 shadow-lg text-md font-serif">
              Description
              <p className="p-2 text-md font-sans font-semib">
                {rocket?.description ?? 'Description'}
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-7/12 xl:w-1/4 h-auto m-2">
          <div className="h-1/6">
            {/* First Block */}
            <div className="p-3 pt-8 pb-12 text-center text-white text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 rounded-xl">
              <p className="text-xl font-serif pb-0 font-bold text-white font-normal">
                {rocket?.engines?.type ?? 'Engine Type'}
              </p>
              <p className="text-xl pt-0 font-serif text-white font-normal">
                {' '}
                version {rocket?.engines?.version ?? '-'}{' '}
              </p>
              <p className="text-gray-200 font-sans font-normal text-lg mt-2">
                Engine Type{' '}
              </p>
            </div>
          </div>
          {/* Second Block */}
          <div className="p-5 mt-8 rounded-lg shadow-md bg-white">
            <div className="mt-0 mx-auto border-t p-2 px-0 py-3.5 text-sm font-serif">
              Propellant
              <ol className="p-2 text-md font-sans font-semibold" type="1">
                <li>1. {rocket?.engines?.propellant_1 ?? 'propellant_1'}</li>
                <li>2. {rocket?.engines?.propellant_2 ?? 'propellant_2'}</li>
              </ol>
            </div>
            <div className="m-3 mx-auto border-t p-2 px-0 py-3.5 text-sm font-serif">
              Thrust
              <ol className="p-2 text-md font-sans font-semibold" type="1">
                <li>
                  Sea Level{' '}
                  {rocket?.engines?.thrust_sea_level?.kN ?? 'thrust_sea_level'}{' '}
                  kN
                </li>
                <li>
                  Vacuum {rocket?.engines?.thrust_vacuum?.kN ?? 'thrust_vacuum'}{' '}
                  kN
                </li>
                <li>
                  Thrust to weight{' '}
                  {rocket?.engines?.thrust_to_weight ?? 'thrust_to_weight'} kN
                </li>
              </ol>
            </div>
            <div className="m-3 mx-auto border-t p-2 px-0 py-3.5 text-sm font-serif">
              First Stage
              <ol className="p-2 text-sm font-sans font-semibold" type="1">
                <li>
                  Reuseable Status:{' '}
                  {rocket?.second_stage?.reusable ?? '-' ? 'Yes' : 'No'}
                </li>
                <li>
                  Number of Engine(s) {rocket?.first_stage?.engines ?? '-'}
                </li>
                <li>
                  Fuel Amount {rocket?.first_stage?.fuel_amount_tons ?? '-'}{' '}
                  ton(s)
                </li>
                <li>
                  Burn Time {rocket?.first_stage?.burn_time_sec ?? '-'} sec(s)
                </li>
              </ol>
            </div>
            <div className="m-3 mx-auto border-t p-2 px-0 py-3.5 text-sm font-serif">
              Second Stage
              <ol className="p-2 text-sm font-sans font-semibold" type="1">
                <li>
                  Reuseable Status:{' '}
                  {rocket?.second_stage?.reusable ?? '-' ? 'Yes' : 'No'}
                </li>
                <li>
                  Number of Engine(s) {rocket?.second_stage?.engines ?? '-'}
                </li>
                <li>
                  Fuel Amount {rocket?.second_stage?.fuel_amount_tons ?? '-'}{' '}
                  ton(s)
                </li>
                <li>
                  Burn Time {rocket?.second_stage?.burn_time_sec ?? '-'} sec(s)
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RocketDetail;
