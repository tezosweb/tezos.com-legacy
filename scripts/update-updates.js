const fs = require('fs');

const langs = fs.readdirSync('././src/data/tsv/updates');

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

langs.forEach(lang => {
    const data = fs.readFileSync(`././src/data/tsv/updates/${lang}`, 'utf-8')
    fs.writeFileSync(`././src/data/updates/${lang.split('.')[0]}.json`, JSON.stringify(updatesParse(data)))
})