import React from 'react';

function InputBox({ label, amount, currencyOptions, onCurrencyChange, selectCurrency, onAmountChange, amountDisable }) {
    return (
        <div>
            <label>{label}</label>
            <input
                type="number"
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                disabled={amountDisable}
            />
            <select value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default InputBox;



// import React, { useState, useEffect } from "react";

// const CurrencyConverter = () => {
//     const [amount, setAmount] = useState(1);
//     const [fromCurrency, setFromCurrency] = useState("USD");
//     const [toCurrency, setToCurrency] = useState("INR");
//     const [convertedAmount, setConvertedAmount] = useState(0);
//     const [rates, setRates] = useState({});
    
//     // Fetch currency rates
//     useEffect(() => {
//         fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
//             .then((res) => res.json())
//             .then((data) => setRates(data.rates));
//     }, [fromCurrency]);

//     // Convert currency
//     const convertCurrency = () => {
//         if (rates[toCurrency]) {
//             setConvertedAmount(amount * rates[toCurrency]);
//         }
//     };

//     // Swap currencies
//     const swapCurrencies = () => {
//         setFromCurrency(toCurrency);
//         setToCurrency(fromCurrency);
//         setAmount(convertedAmount);
//         setConvertedAmount(amount);
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-blue-100 p-5">
//             <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
//                 <h2 className="text-2xl font-bold text-center mb-4">Currency Converter</h2>
                
//                 <div className="mb-4">
//                     <label className="block font-semibold mb-1">Amount</label>
//                     <input
//                         type="number"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                         className="w-full p-2 border rounded-md"
//                     />
//                 </div>

//                 <div className="grid grid-cols-2 gap-2">
//                     <div>
//                         <label className="block font-semibold mb-1">From</label>
//                         <select
//                             value={fromCurrency}
//                             onChange={(e) => setFromCurrency(e.target.value)}
//                             className="w-full p-2 border rounded-md"
//                         >
//                             {Object.keys(rates).map((currency) => (
//                                 <option key={currency} value={currency}>
//                                     {currency}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     <div>
//                         <label className="block font-semibold mb-1">To</label>
//                         <select
//                             value={toCurrency}
//                             onChange={(e) => setToCurrency(e.target.value)}
//                             className="w-full p-2 border rounded-md"
//                         >
//                             {Object.keys(rates).map((currency) => (
//                                 <option key={currency} value={currency}>
//                                     {currency}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>

//                 <div className="flex justify-center my-4">
//                     <button
//                         onClick={swapCurrencies}
//                         className="bg-gray-200 px-4 py-2 rounded-md"
//                     >
//                         🔄 Swap
//                     </button>
//                 </div>

//                 <button
//                     onClick={convertCurrency}
//                     className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold"
//                 >
//                     Convert
//                 </button>

//                 <div className="mt-4 text-center">
//                     <h3 className="text-xl font-bold">{convertedAmount.toFixed(2)} {toCurrency}</h3>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CurrencyConverter;
