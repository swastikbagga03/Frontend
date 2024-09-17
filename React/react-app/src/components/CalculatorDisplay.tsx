const CalculatorDisplay = ({displayValue}:{displayValue:number}) => {
    return (
        <div className="calculator-display">
            <input type="text" value={displayValue} id = "display" readOnly />
        </div>
    );
};

export default CalculatorDisplay;