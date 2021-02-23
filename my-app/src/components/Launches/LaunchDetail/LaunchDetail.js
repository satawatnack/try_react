import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Slider from '../../UI/Slider/Slider';

const Loading = React.lazy(() => import('../../UI/Loading/Loading'));

const LaunchDetail = (props) => {
  const history = useHistory();
  const launch_success = props.launchesData?.launch_success;
  return props.launchesData ? (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:w-3/6">
        <div className="inline-block m-3 my-5">
          <button
            type="button"
            onClick={() => history.push('/launches')}
            className="focus:outline-none text-white text-lg py-2.5 px-5 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg"
          >
            &#10094;
          </button>
        </div>

        <Slider imgs={props.launchesData?.links?.flickr_images} />

        <div className="bg-gradient-to-r from-gray-800 to-gray-600 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              {' '}
              <h3 className="text-lg leading-6 font-medium text-white">
                {props.launchesData?.mission_name}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-300">
                {props.launchesData?.details}
              </p>
            </div>
            <div className="ml-52 w-2/5 sm:ml-40">
              <img
                alt={props.launchesData?.links?.mission_patch_small ?? ''}
                src={props.launchesData?.links?.mission_patch_small}
              />
            </div>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Flight Number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {props.launchesData?.flight_number}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Rocket</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <div className="flex">
                    <div>{props.launchesData?.rocket?.rocket_name}</div>
                    <div className="ml-4 flex-shrink-0">
                      <Link
                        to={`/rockets/${
                          props.launchesData?.rocket?.rocket_name
                            ?.split(' ')
                            .join('')
                            .toLowerCase() ?? ''
                        }`}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        click for detail
                      </Link>
                    </div>
                  </div>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Launch Success
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {launch_success ? (
                    <span className="text-green-600">success</span>
                  ) : launch_success === null ? (
                    ''
                  ) : (
                    <span className="text-red-600">unsuccess</span>
                  )}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Launch Year
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {props.launchesData?.launch_year}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading showLoading={props.showLoading} />
  );
};

export default LaunchDetail;
