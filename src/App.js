import { useState } from "react";
import "./App.css";
import MainCard from "./MainCard";

function App() {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [inputValue, setInputValue] = useState();
  const [inputValue2, setInputValue2] = useState();
  const [inputValue3, setInputValue3] = useState();
  return (
    <div className="container">
      <MainCard
        inputValue={inputValue}
        setInputValue={setInputValue}
        inputValue2={inputValue2}
        setInputValue2={setInputValue2}
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        setTipAmount={setTipAmount}
        setTotalAmount={setTotalAmount}
        inputValue3={inputValue3}
        setInputValue3={setInputValue3}
      />
    </div>
  );
}

export default App;
