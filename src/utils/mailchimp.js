import jsonp from 'jsonp';
import { validate } from 'email-validator';
import { mailchimpUrl } from './constants';

const subscribeEmailToMailchimp = ({ url }) => 
    new Promise((resolve, reject) => 
        jsonp(url, { param: 'c' }, (err, data) => {
            if (err) reject(err);
            if (data) resolve(data);
        }),
    );

const convertListFields = fields => {
    let queryParams = '';
    for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields,field)) {
            const fieldTransformed =
                field.substring(0, 6) === 'group[' ? field : field.toUpperCase();
            queryParams = queryParams.concat(`&${fieldTransformed}=${fields[field]}`);
        }
    }
    
    return queryParams
}

const addToMailchimp = function addToMailchimp(email, fields) {
    const isEmailValid = validate(email);
    const emailEncoded = encodeURIComponent(email);

    if (!isEmailValid) {
        return new Promise.resolve({
            result: 'error',
            msg: 'The email you entered is not valid.'
        })
    }

    let endpoint = mailchimpUrl;

    endpoint = endpoint.replace(/\/post/g, '/post-json');
    const queryParams = `&EMAIL=${emailEncoded}${convertListFields(fields)}`
    const url = `${endpoint}${queryParams}`

    return subscribeEmailToMailchimp({ url });
}

export default addToMailchimp;