import Random from "./random";

function PrintComponent({ number1 }: { number1: number }) {
    const numbers = Array.from({ length: number1 }, (_, i) => i + 1);
  
    return numbers.map((number) => { return <><h1>I am here {number}</h1><Random multiplier = {number} number1 = {number1} /></> });
  
}

export default PrintComponent;