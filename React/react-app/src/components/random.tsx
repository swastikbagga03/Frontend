function Random( {multiplier, number1}: {multiplier: number, number1:number} ) {
  return (
    <div>
      <h1>Random number is {Math.round(Math.random()*multiplier)+number1}</h1>
    </div>
  );
}

export default Random;