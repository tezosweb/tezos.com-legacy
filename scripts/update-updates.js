const fs = require('fs');

const data = fs.readFileSync('././src/data/Tezos Updates - Sheet1.tsv', 'utf8');

function updatesParse(data) {
    const parsed = {};
    const infoArray = data.split('\r\n').slice(1).map(line => line.split('\t'));
    infoArray.forEach(line => {
        const category = line[0],
              publishedDate = line[1],
              link = line[2],
              description = line[3];
        parsed[category] = parsed[category] || [];
        parsed[category].push({ publishedDate, link, description })
    })
    return parsed;
}

fs.writeFileSync('././src/data/updates/updates.json', JSON.stringify(updatesParse(data)))