const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function findSummation(N = 1) {
    if (typeof N !== 'number' || N <= 0) {
        return { error: 'Invalid input' };
    }
    return { result: (N * (N + 1)) / 2 };
}

function uppercaseFirstandLast(str) {
    if (typeof str !== 'string') return { error: 'Invalid input' };
    return { result: str.split(' ').map(word => {
        if (word.length < 2) return word.toUpperCase();
        return word[0].toUpperCase() + word.slice(1, -1) + word[word.length - 1].toUpperCase();
    }).join(' ') };
}

function findAverage_and_Median(arr) {
    if (!Array.isArray(arr) || arr.some(num => isNaN(Number(num)))) return { error: 'Invalid input' };

    const numbers = arr.map(Number);
    const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;

    const sortedArr = numbers.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);
    const median = sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;

    return { average, median };
}

function find4Digits(str) {
    if (typeof str !== 'string') return { error: 'Invalid input' };
    const match = str.match(/\b\d{4}\b/);
    return { result: match ? match[0] : 'No 4-digit number found' };
}


app.post('/summation', (req, res) => {
    const { number } = req.body;
    const result = findSummation(Number(number));
    res.json(result);
});

app.post('/uppercase', (req, res) => {
    const { text } = req.body;
    const result = uppercaseFirstandLast(text);
    res.json(result);
});

app.post('/average-median', (req, res) => {
    const { numbers } = req.body;
    const result = findAverage_and_Median(numbers);
    res.json(result);
});

app.post('/find-4-digits', (req, res) => {
    const { text } = req.body;
    const result = find4Digits(text);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


