export function campNameParse(campaign) {
    return campaign.split('-').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')
}

