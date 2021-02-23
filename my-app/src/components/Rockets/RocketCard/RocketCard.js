import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const RocketCard = (props) => {
  let { url } = useRouteMatch();

  let rocketImg = props.rocket?.flickr_images?.[0] ?? '';
  let resizeImg =
    rocketImg && (rocketImg[8] === 'f' || rocketImg[8] === 'l')
      ? `${rocketImg.slice(0, -5)}m.jpg`
      : `${rocketImg.slice(0, -4)}m.jpg`;

  return (
    <>
      <div className="m-4 bg-white rounded-xl shadow-lg overflow-hidden mx-auto sm:w-2/4 w-10/12">
        <Link to={`${url}/${props.rocket?.rocket_id ?? ''}`}>
          <div className="md:flex">
            <div className="md:flex-shrink-0 m-5">
              <img
                className=" w-80 rounded-lg"
                height="400"
                width="300"
                src={resizeImg}
                alt={props.rocket.rocket_name}
              />
            </div>
            <div className="p-4">
              <span className="uppercase tracking-wide text-lg text-blue-700 font-serif font-semibold hover:underline">
                {props.rocket.rocket_name}
              </span>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">
                {props.rocket.company}, {props.rocket.country}
              </p>
              <p className="mt-2 text-gray-500">{props.rocket.description}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RocketCard;
