const fs = require('fs')

const data = fs.readFileSync('././src/data/Tezos Job Listings - Sheet1.tsv', 'utf8');

function jobsParse(data) {
    const parsed = {};
    const infoArray = data.split('\r\n').slice(1).map(line => line.split('\t'));
    infoArray.forEach(line => {
        const category = line[0],
              title = line[1],
              location = line[2],
              link = line[3];
        parsed[category] = parsed[category] || [];
        parsed[category].push({ title, location, link })
    })
    return parsed;
};

fs.writeFileSync('././src/data/jobs/jobs.json', JSON.stringify(jobsParse(data)))