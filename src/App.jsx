import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [converted, setConverted] = useState(null);
async function exchange() {
  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
  const data = await response.json()
  setConverted((data.rates[toCurrency] * amount).toFixed(3));
}
useEffect(()=>{
  exchange();
}, [fromCurrency, toCurrency, amount])
  return (
    <>
      <div className='container'>
        <div className='box'>
        </div>
        <div className='currency-convert'>
          <h1>Currency Convertor</h1>
          <div className='input-container'>
            <input type='number' value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='Enter amount' />
            <label htmlFor='fromCurrency'>From Currency</label>
            <select id='fromCurrency' value={fromCurrency} onChange={(e)=>{setFromCurrency(e.target.value)}}>
              <option value='USD'>United States Dollar (USD)</option>
              <option value='EUR'>Euro (EUR)</option>
              <option value='KWD'>Kuwaiti Dinar (KWD)</option>
              <option value='BHD'>Bahraini Dinar (BHD)</option>
              <option value='OMR'>Omani Rial (OMR)</option>
              <option value='JOD'>Jordanian Dinar (JOD)</option>
              <option value='GBP'>British Pound (GBP)</option>
              <option value='GIP'>Gibraltar Pound (GIP)</option>
              <option value='KYD'>Cayman Island Dollar (KYD)</option>
              <option value='CHF'>Swiss Franc (CHF)</option>
              <option value='INR'>Indian Rupee (INR)</option>
            </select>
            <label htmlFor='toCurrency' >To Currency</label>
            <select id='toCurrency'value={toCurrency} onChange={(e)=>{setToCurrency(e.target.value)}}>
              <option value='USD'>United States Dollar (USD)</option>
              <option value='EUR'>Euro (EUR)</option>
              <option value='KWD'>Kuwaiti Dinar (KWD)</option>
              <option value='BHD'>Bahraini Dinar (BHD)</option>
              <option value='OMR'>Omani Rial (OMR)</option>
              <option value='JOD'>Jordanian Dinar (JOD)</option>
              <option value='GBP'>British Pound (GBP)</option>
              <option value='GIP'>Gibraltar Pound (GIP)</option>
              <option value='KYD'>Cayman Island Dollar (KYD)</option>
              <option value='CHF'>Swiss Franc (CHF)</option>
              <option value='INR'>Indian Rupee (INR)</option>
            </select>
            <p>Output</p>
            <p className='output'><b>{amount}</b>{fromCurrency} <span>&nbsp;is equal to</span> <b>&nbsp;{converted}</b>{toCurrency}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
