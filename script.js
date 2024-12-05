function convertJsonToObject() {
    const jsonInput = document.getElementById('jsonInput').value;
    try {
        const jsonObject = JSON.parse(jsonInput);
        document.getElementById('jsonOutput').innerText = JSON.stringify(jsonObject, null, 2);
    } catch (error) {
        document.getElementById('jsonOutput').innerText = 'Invalid JSON: ' + error.message;
    }
}

function convertJsonToDate() {
    const jsonInput = document.getElementById('jsonDateInput').value;
    try {
        const jsonObject = JSON.parse(jsonInput);
        if (jsonObject.date) {
            const date = new Date(jsonObject.date);
            document.getElementById('dateOutput').innerText = date.toString();
        } else {
            document.getElementById('dateOutput').innerText = 'No date field found.';
        }
    } catch (error) {
        document.getElementById('dateOutput').innerText = 'Invalid JSON: ' + error.message;
    }
}

function convertJsonToCsv() {
    const jsonInput = document.getElementById('csvJsonInput').value;
    try {
        const jsonArray = JSON.parse(jsonInput);
        const keys = Object.keys(jsonArray[0]);
        const csv = [keys.join(','), ...jsonArray.map(row => keys.map(key => row[key]).join(','))].join('\n');
        document.getElementById('csvOutput').innerText = csv;
    } catch (error) {
        document.getElementById('csvOutput').innerText = 'Invalid JSON: ' + error.message;
    }
}

function convertCsvToJson() {
    const csvInput = document.getElementById('csvJsonInput').value;
    try {
        const [header, ...rows] = csvInput.split('\n').filter(row => row.trim());
        const keys = header.split(',');
        const jsonArray = rows.map(row => {
            const values = row.split(',');
            return keys.reduce((acc, key, index) => {
                acc[key] = values[index];
                return acc;
            }, {});
        });
        document.getElementById('jsonFromCsvOutput').innerText = JSON.stringify(jsonArray, null, 2);
    } catch (error) {
        document.getElementById('jsonFromCsvOutput').innerText = 'Invalid CSV: ' + error.message;
    }
}

function createHash() {
    const input = document.getElementById('hashInput').value;
    const hash = CryptoJS.SHA256(input).toString();
    document.getElementById('hashOutput').innerText = 'SHA-256 Hash: ' + hash;
}
