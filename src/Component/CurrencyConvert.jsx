import React, { useEffect, useState } from "react";
const API = "f0ac245d786eb78b4fc3bc3e6d19a421";
let toArray = [
  {
    value: "USD",
    label: "Kenya",
  },
  {
    value: "USD",
    label: "Rwanda",
  },
  {
    value: "USD",
    label: "Cameroun",
  },
];
const CurrencyConvert = () => {
  const [from, setFrom] = useState("XAF");
  const [to, setTo] = useState("RWF");
  const [amount, setAmount] = useState(34);
  useEffect(() => {
    // http://api.currencylayer.com/convert?access_key=f0ac245d786eb78b4fc3bc3e6d19a421&from=EUR&to=GBP&amount=100
    console.log(from, to, amount, "+++++++++++++++++++++");
    fetch(
      `http://api.currencylayer.com/convert?access_key=f0ac245d786eb78b4fc3bc3e6d19a421&from=${from}&to=${to}&amount=${amount}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête fetch :", error);
      });
  }, [amount]);

  //   console.log(from);
  return (
    <div className=" flex flex-col w-[70%] bg-white rounded-xl p-10">
      <h1 className=" pb-10 text-3xl font-bold text-black">
        Exchange Rate Today
      </h1>
      <form className=" flex justify-between ">
        <div className=" w-[30%]">
          <label htmlFor="large" className="text-xl font-medium text-gray-900">
            From
          </label>
          <select
            id="large"
            className="  w-full p-2.5 rounded-lg mt-2 border"
            onChange={(e) => setFrom(e.target.value)}
            value={from}
          >
            <option value="XAF">Cameroun</option>
            <option value="KSF">Kenya</option>
            <option value="RWF">Rwanda</option>
          </select>
        </div>
        <div className="w-[30%]">
          <label htmlFor="large" className=" text-xl font-medium text-gray-900">
            To
          </label>
          <select
            id="large"
            className="  w-full p-2.5 rounded-lg mt-2 border"
            onChange={(e) => setTo(e.target.value)}
            value={to}
          >
            <option value="US">Cameroun</option>
            <option value="CA">Kenya</option>
            <option value="FR">Rwanda</option>
          </select>
        </div>
        <div className=" w-[30%]">
          <label
            htmlFor="amount"
            className=" text-xl font-medium text-gray-900"
          >
            Amount to send
          </label>
          <input
            type="number"
            id="amount"
            className=" p-2.5 w-full rounded-lg mt-2 border"
            placeholder="0.0"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
      </form>
      <div className=" mt-6 bg-orange px-2 py-4 w-[30%] text-2xl rounded-lg">
        <p>
          Received Amount :{" "}
          <span className=" font-extrabold text-orange-dark">{200}</span>
        </p>
      </div>
      <p>1 USD = 83.29 INR | 1 INR = 0.01 USD</p>
    </div>
  );
};

export default CurrencyConvert;
{
  /* http://apilayer.net/api/live?access_key=f0ac245d786eb78b4fc3bc3e6d19a421&currencies=EUR,GBP,CAD,PLN&source=USD&format=1 */
}
