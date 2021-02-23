import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* First Landing Component - backgound and desc. */}
      <div
        className="relative pt-4 pb-16 flex content-center items-center justify-center"
        style={{
          minHeight: '75vh',
        }}
      >
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-gradient-to-r from-gray-800 to-gray-600">
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-25 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-5 ml-5 mr-auto">
              <div className="pr-2">
                <h1 className="text-white font-light text-5xl font-serif">
                  SpaceX
                </h1>
                <p className="mt-4 text-lg text-gray-300 font-serif">
                  designs, manufactures and launches advanced rockets and
                  spacecraft. The company was founded in 2002 to revolutionize
                  space technology, with the ultimate goal of enabling people to
                  live on other planets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* all content card */}
      <section className="pb-10 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <p className="text-xl font-bold">Founded</p>
                  <p className="mt-2 mb-4 text-gray-600 text-2xl">2002</p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <p className="text-xl font-bold font-serif">Empolyees</p>
                  <p className="mt-2 mb-4 text-gray-600 text-2xl">7,600</p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <p className="text-xl font-bold font-serif">Headquarters</p>
                  <p className="mt-2 mb-4 text-gray-600 text-2xl">
                    Rocket Road, Hawthorne California
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-10">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <p className="text-3xl mb-2 font-bold leading-normal">
                More Information
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Website:{' '}
                <Link
                  to={{ pathname: 'http://spacex.com' }}
                  rel="noopener"
                  target="_blank"
                  className="hover:underline font-bold"
                >
                  spacex.com
                </Link>{' '}
                <br />
                Flickr:{' '}
                <Link
                  to={{ pathname: 'http://www.flickr.com/photos/spacex/' }}
                  rel="noopener"
                  target="_blank"
                  className="hover:underline font-bold"
                >
                  flickr.com/photos/spacex
                </Link>{' '}
                <br />
                Twitter:{' '}
                <Link
                  to={{ pathname: 'http://www.twitter.com/SpaceX' }}
                  rel="noopener"
                  target="_blank"
                  className="hover:underline font-bold"
                >
                  twitter.com/SpaceX
                </Link>
                <br />
                Elon Musk Twitter:{' '}
                <Link
                  to={{ pathname: 'http://www.twitter.com/elonmusk' }}
                  rel="noopener"
                  target="_blank"
                  className="hover:underline font-bold"
                >
                  twitter.com/elonmusk
                </Link>
                <br />
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-900">
                <img
                  alt="rocketImg"
                  src={process.env.PUBLIC_URL + '/rocket.jpg'}
                  className="w-full h-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: '95px',
                      top: '-94px',
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className=" bg-blue-900 fill-current"
                    ></polygon>
                  </svg>
                  <p className="text-xl font-bold text-white">
                    Top Notch Services
                  </p>
                  <p className="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
