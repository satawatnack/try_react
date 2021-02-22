import React from 'react';
import Loading from '../../UI/Loading/Loading';
import { Link, useHistory } from 'react-router-dom';
import Slider from '../../UI/Slider/Slider';

const LaunchDetail = (props) => {
  const history = useHistory();
  const launch_success = props.launchesData?.launch_success;
  return props.launchesData ? (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:w-3/6">
        <div className="inline-block mr-2 mt-2 mb-8 ml-3">
          <button
            type="button"
            onClick={() => history.push('/launches')}
            className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg"
          >
            go back
          </button>
        </div>

        <Slider imgs={props.launchesData?.links?.flickr_images} />
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              {props.launchesData?.mission_name}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {props.launchesData?.details}
            </p>
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
                    <span className="text-green-400">success</span>
                  ) : launch_success === null ? (
                    ''
                  ) : (
                    <span className="text-red-400">unsuccess</span>
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
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Launch Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {props.launchesData?.launch_date_utc}
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
