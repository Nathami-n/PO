import {Request} from 'express';

const allowedOrigins = [""];

export const delegateFunction = (req, callback) => {
    let corOptions: {origin: boolean};

    if(allowedOrigins.indexOf(req.header("Origin")) !== -1) {
        corOptions = {origin: true};
    } else {
        corOptions = { origin: false};
    };
    callback(null, corOptions);
}