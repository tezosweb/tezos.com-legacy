const fs = require('fs')

const langs = fs.readdirSync('././src/data/tsv/jobs');

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

langs.forEach(lang => {
    const data = fs.readFileSync(`././src/data/tsv/jobs/${lang}`, 'utf-8')
    fs.writeFileSync(`././src/data/jobs/${lang.split('.')[0]}.json`, JSON.stringify(jobsParse(data)))
})