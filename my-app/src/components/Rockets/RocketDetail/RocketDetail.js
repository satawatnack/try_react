import React from 'react'

const RocketDetail = (props) => {
    return(
        <>
        <div className="bg-red-500 w-screen h-screen flex">
            <div className="bg-green-500 w-1/4 h-screen">
                Hi How are you 1
                <div className="bg-green-200 h-1/6 ">
                <div className="p-8 text-center font-serif font-bold">Falcon 8</div>
                </div>
                <div className="p-5">
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5 text-cen">First Flight 21 Jan 1999</div>
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5">Name Udomeakasdf asdfasdfasdf</div>
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5">xx</div>
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5">xx</div>
                </div>
            </div>
            <div className= "bg-yellow-500 w-1/2 h-screen flex-col">
            <div>
                <img className="h-1/2 w-max"src={props.rocket.flickr_images[0]} />
                <div className="p-5"> Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.</div>
            </div>
            </div>
            <div className="bg-blue-500 w-1/4 h-screen ">
                Hi How are you 2
                <div className="bg-blue-200 h-1/6">
                Hi How are you 3
                </div>
                <div className="p-5">
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5 text-cen">First Flight 21 Jan 1999</div>
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5">Name Udomeakasdf asdfasdfasdf</div>
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5">xx</div>
                <div className="m-3 mx-auto border-t p-2 px-0 py-3.5">xx</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default RocketDetail