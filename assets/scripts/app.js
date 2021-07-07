const defaultNum = 0;
let currentResult = defaultNum;
const logEntries = [];

function parseValue() {
	return parseInt(userInput.value);
}

function outputString(numBefore, operator, enteredNumber) {
	const calculationString = `${numBefore} ${operator} ${enteredNumber}`;
	outputResult(currentResult, calculationString);
}

function writeToLog(operation, numBefore, enteredNumber, currentResult) {
	const logEntry = {
		operation: operation,
		previousResult: numBefore,
		enteredNumber: enteredNumber,
		Result: currentResult,
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

function calculateResult(calculateFunction) {
	const enteredNumber = parseValue();
	const numBefore = currentResult;
	let mathOperator;
	if (calculateFunction == "ADD") {
		currentResult += enteredNumber;
		mathOperator = "+";
	} else if (calculateFunction == "SUBTRACT") {
		currentResult -= enteredNumber;
		mathOperator = "-";
	} else if (calculateFunction == "MULTIPLY") {
		currentResult *= enteredNumber;
		mathOperator = "*";
	} else if (calculateFunction == "MULTIPLY") {
		currentResult /= enteredNumber;
		mathOperator = "/";
	}
	outputString(numBefore, mathOperator, enteredNumber);
	writeToLog(calculateFunction, numBefore, enteredNumber, currentResult);
}

function add() {
	calculateResult("ADD");
}

function subtract() {
	calculateResult("SUBTRACT");
}

function multiply() {
	calculateResult("MULTIPLY");
}

function divide() {
	calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
