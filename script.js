function generateNumbers() {
    const numbers = [];
    while (numbers.length < 5) {
        let num = Math.floor(Math.random() * 36) + 1;
        numbers.push(num);
    }
    return numbers;
}

function getMax(arr) {
    return Math.max(...arr);
}

function getMin(arr) {
    return Math.min(...arr);
}

function getAverage(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return +(sum / arr.length).toFixed(1);
}

function Statistics(arr) {
    return {
        "Min value": getMin(arr),
        "Max value": getMax(arr),
        "Average": getAverage(arr)
    };
}

function runSportLoto() {
    const numbers = generateNumbers();
    const stats = Statistics(numbers);

    document.getElementById("numbers").innerHTML =
        `<p><strong>Random numbers:</strong> ${numbers.join(", ")}</p>`;

    document.getElementById("statistics").innerHTML =
        `<p><strong>Min:</strong> ${stats["Min value"]}</p>
     <p><strong>Max:</strong> ${stats["Max value"]}</p>
     <p><strong>Average:</strong> ${stats["Average"]}</p>`;
}
