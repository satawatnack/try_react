import { React } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const RocketCard = (props) => {
  let { url } = useRouteMatch();

  return (
    <>
      <div className="m-2  bg-white rounded-xl shadow-lg overflow-hidden mx-auto">
        <Link to={`${url}/${props.rocket?.rocket_id ?? ''}`}>
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-full w-full object-cover md:w-48"
                src={props.rocket.flickr_images[0]}
                alt={props.rocket.rocket_name}
              />
            </div>
            <div className="p-8">
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
