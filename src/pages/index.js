import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const HomePage = () => {
  return (
    <div className="flex justify-center items-center bg-gray-200 h-screen">
      <div className="bg-white rounded-xl w-phone h-phone p-5 flex flex-col justify-center items-center">
        <StaticImage
          src="../images/coffee.png"
          alt="coffee photo"
          placeholder="blurred"
          quality={90}
        />

        <div className="mt-4">
          <p className="text-xs text-gray-400 font-semibold">Enjoy Coffee House</p>
          <h1 className="text-3xl font-semibold mt-2 mb-4">Big Caffe Latte 400ml</h1>
          <p className="text-s">Taste our coffee appreciated by buyers from all over the world. Made from carefully selected finest beans.</p>
        </div>

        <div className="bg-slate-100 rounded-lg flex justify-between items-center px-4 py-5 w-full mt-4 mb-6">
          <div>
            <div className="flex justify-start items-center">
              <StaticImage
                src="../images/handshake.svg"
                alt="handshake icon"
                placeholder="blurred"
              />
              <span className="font-medium text-lg ml-2">2 x 175</span>
            </div>

            <div>
              <span className="text-xs text-gray-400 font-semibold">You&apos;ll have 1415 left</span>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button className="font-bold text-lg w-10 h-10 rounded-full bg-white shadow-md flex justify-center items-center">-</button>
            <span className="font-semibold text-2xl px-3">2</span>
            <button className="font-bold text-lg w-10 h-10 rounded-full bg-white shadow-md flex justify-center items-center">+</button>
          </div>
        </div>

        <button className="bg-yellow-300 p-3 w-full text-sm font-semibold rounded-lg shadow-md shadow-yellow-200">Redeem 350 handshakes</button>
      </div>
    </div>
  );
};

export default HomePage;