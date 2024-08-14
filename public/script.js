document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('summationForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const number = document.getElementById('summationNumber').value;
        console.log('Submitting number:', number); // Debugging
        try {
            const response = await fetch('/summation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ number })
            });
            const data = await response.json();
            console.log('Received response:', data); // Debugging
            document.getElementById('summationResult').textContent = `Result: ${data.result}`;
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('summationResult').textContent = `Error: ${error.message}`;
        }
    });

    document.getElementById('uppercaseForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = document.getElementById('uppercaseText').value;
        try {
            const response = await fetch('/uppercase', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text })
            });
            const data = await response.json();
            document.getElementById('uppercaseResult').textContent = `Result: ${data.result}`;
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('uppercaseResult').textContent = `Error: ${error.message}`;
        }
    });

    document.getElementById('averageMedianForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const numbers = document.getElementById('averageMedianNumbers').value.split(',').map(Number);
        try {
            const response = await fetch('/average-median', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ numbers })
            });
            const data = await response.json();
            document.getElementById('averageMedianResult').textContent = `Average: ${data.average}, Median: ${data.median}`;
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('averageMedianResult').textContent = `Error: ${error.message}`;
        }
    });

    document.getElementById('find4DigitsForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = document.getElementById('find4DigitsText').value;
        try {
            const response = await fetch('/find-4-digits', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text })
            });
            const data = await response.json();
            document.getElementById('find4DigitsResult').textContent = `Result: ${data.result}`;
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('find4DigitsResult').textContent = `Error: ${error.message}`;
        }
    });
});


