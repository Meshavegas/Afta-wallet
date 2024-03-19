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
  const [amount, setAmount] = useState();
  const [conversionResult, setConversionResult] = useState(null);

  // État pour stocker le timeout ID
  const [timeoutId, setTimeoutId] = useState(null);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const convertCurrency = () => {
    const apiUrl = `https://api.aftawallet.com/v1/fx/convert?amount=${amount}&from=${from}&to=${to}`;

    amount > 0 &&
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Mettez à jour le résultat de la conversion dans l'état
          setConversionResult(data.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la requête fetch :", error);
        });
  };

  // const delayedConvertCurrency = debounce(convertCurrency, 1000);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
  };
  useEffect(() => {
    // Vérifiez si 'amount' est un nombre avant d'effectuer la requête
    if (!isNaN(amount)) {
      convertCurrency();
    }
  }, [amount]);

  return (
    <div className=" flex flex-col w-full md:w-[70%] bg-white rounded-xl p-10">
      <h1 className=" pb-10 text-3xl font-bold text-black">
        Exchange Rate Today
      </h1>
      <form className=" flex justify-between md:flex-row flex-col">
        <div className=" w-full md:w-[30%]">
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
            <option value="KES">Kenya</option>
            <option value="RWF">Rwanda</option>
          </select>
        </div>
        <div className="w-full md:w-[30%]">
          <label htmlFor="large" className=" text-xl font-medium text-gray-900">
            To
          </label>
          <select
            id="large"
            className="  w-full p-2.5 rounded-lg mt-2 border"
            onChange={(e) => setTo(e.target.value)}
            value={to}
          >
            <option value="XAF">Cameroun</option>
            <option value="KES">Kenya</option>
            <option value="RWF">Rwanda</option>
          </select>
        </div>
        <div className=" w-full md:w-[30%]">
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
            onChange={(e) => handleAmountChange(e)}
            value={amount}
          />
        </div>
      </form>
      {conversionResult && (
        <>
          <div className=" mt-6 bg-orange px-2 py-4 w-full md:w-[30%] text-base md:text-lg rounded-lg">
            <p>
              Received Amount :{" "}
              <span className=" font-extrabold text-orange-dark">
                {to} {conversionResult?.result}
              </span>
            </p>
          </div>
          <p>{conversionResult?.rate}</p>
        </>
      )}
    </div>
  );
};

export default CurrencyConvert;
{
  /* http://apilayer.net/api/live?access_key=f0ac245d786eb78b4fc3bc3e6d19a421&currencies=EUR,GBP,CAD,PLN&source=USD&format=1 */
}
