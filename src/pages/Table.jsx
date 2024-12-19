import React from "react";

const Table = () => {
  return (
    <table className="min-w-full table-auto   border-green-400">
      <thead>
        <tr className=" text-gray-700">
          <th className="py-2 px-8  text-left"> </th>
          <th className="py-2 px-8 text-left"></th>
          <th className="py-2 px-8  text-left"></th>
          <th className="py-2 px-8  text-left text-green-400">Most Popular</th>
          <th className="py-2 px-8  border-gray-300 text-left"></th>
          <th className="py-2 px-8  border-gray-300 text-left"></th>
        </tr>
      </thead>
      <thead>
        <tr className=" text-gray-700">
          <th className="py-2 px-8  text-left"> </th>
          <th className="py-2 px-8 border-2 border-gray-300 text-left">Free</th>
          <th className="py-2 px-8 border-2 border-gray-300 text-left">
            Basic
          </th>
          <th className="py-2 px-8 border-2 border-gray-300 text-left">Pro</th>
          <th className="py-2 px-8 border-2 border-gray-300 text-left">
            Unlimite
          </th>
          <th className="py-2 px-8 border-2 border-gray-300 text-left">
            The Suit
          </th>
        </tr>
      </thead>
      <thead>
        <tr className=" text-gray-700">
          <th className="py-2 px-8 text-left"> </th>
          <th className="py-2 px-8 border-2 border-gray-300 text-left">
            <div className="flex flex-col gap-y-4">
              <h1>30/mo</h1>
              <span className="text-gray-400 text-xs">Billed Never</span>
            </div>{" "}
          </th>
          <th className="py-2 px-8 border-2 border-gray-300 text-left">
            <div className="flex flex-col gap-y-4">
              <h1>30/mo</h1>
              <span className="text-gray-400 text-xs">
                billed annual or $20 monthly
              </span>
            </div>{" "}
          </th>
          <th className="py-2 px-8 border-2 border-gray-300 text-left">
            <div className="flex flex-col gap-y-4">
              <h1>30/mo</h1>
              <span className="text-gray-400 text-xs">
                billed annual or $30 monthly
              </span>
            </div>{" "}
          </th>
          <th className="py-2 px-8 border-2 border-gray-300 text-left">
            <div className="flex flex-col gap-y-4">
              <h1>30/mo</h1>
              <span className="text-gray-400 text-xs">
                Billed annullay or $50 monthly
              </span>
            </div>
          </th>
          <th className="py-2 px-8 border-2 border-gray-300 text-left">
            <div className="flex flex-col gap-y-4">
              <h1>30/mo</h1>
              <span className="text-gray-400 text-xs">
                Billed annullay or $60 monthly
              </span>
            </div>{" "}
          </th>{" "}
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-50">
          <td className="py-2 px-8 border-2 border-gray-300">CLIENT GALLARY</td>
          <td className="py-2 px-8 border-2 border-gray-300"></td>
          <td className="py-2 px-8 border-2 border-gray-300"></td>
          <td className="py-2 px-8 border-2 border-gray-300"></td>
          <td className="py-2 px-8 border-2 border-gray-300"></td>
          <td className="py-2 px-8 border-2 border-gray-300"></td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-2 px-8 border-2 border-gray-300">Photo Storage</td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-2 px-8 border-2 border-gray-300">Photo Storage</td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-2 px-8 border-2 border-gray-300">Photo Storage</td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-2 px-8 border-2 border-gray-300">Photo Storage</td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-2 px-8 border-2 border-gray-300">CLIENT GALLARY</td>
          <td className="py-2 px-8 border-2 border-gray-300"></td>
          <td className="py-2 px-8 border-2 border-gray-300"></td>
          <td className="py-2 px-8 border-2 border-gray-300"></td>
          <td className="py-2 px-8 border-2 border-gray-300"></td>
          <td className="py-2 px-8 border-2 border-gray-300"></td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-2 px-8 border-2 border-gray-300">Photo Storage</td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-2 px-8 border-2 border-gray-300">Video</td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-2 px-8 border-2 border-gray-300">Photo Storage</td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
          <td className="py-2 px-8 border-2 border-gray-300 ">
            <div className="flex flex-col gap-4">
              <span>3GB</span>
              <span className="text-sm text-gray-700">1,000+ photos</span>
            </div>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-2 px-8 "></td>
          <td className="py-2 px-8  ">
            <div className="flex flex-col gap-4">
              <button className="bg-green-500 text-white py-2 px-4 rounded text-sm hover:bg-green-600">
                START FREE
              </button>
            </div>
          </td>
          <td className="py-2 px-8  ">
            <div className="flex flex-col gap-4">
              <button className="bg-green-500 text-white py-2 px-4 text-sm  rounded hover:bg-green-600">
                START FREE
              </button>
            </div>
          </td>
          <td className="py-2 px-8  ">
            <div className="flex flex-col gap-4">
              <button className="bg-green-500 text-white py-2 px-4 rounded text-sm hover:bg-green-600">
                START FREE
              </button>
            </div>
          </td>
          <td className="py-2 px-8  ">
            <div className="flex flex-col gap-4">
              <button className="bg-green-500 text-white py-2 px-4 text-sm rounded hover:bg-green-600">
                START FREE
              </button>
            </div>
          </td>
          <td className="py-2 px-8  ">
            <div className="flex flex-col gap-4">
              <button className="bg-green-500 text-white py-2 px-4 text-sm rounded hover:bg-green-600">
                START FREE
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
