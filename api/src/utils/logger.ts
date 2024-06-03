import fs from 'fs';
import { format } from "date-fns";
import {v4 as uuid} from 'uuid';
import path from 'path';

const {mkdir, appendFile} = fs.promises;

export const loggerFunction =  async (message: string, filename: string) => {

    const dateTime = `${format(new Date(), 'yyyyMMdd\t HH:mm:ss')}`;
    const logItem = `${dateTime}\t ${uuid()}${message}\n`;

    //check for the existence of the file in the log folder

    try {
        if(fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await mkdir(path.join(__dirname, '..', 'logs'));
        };

        await appendFile(path.join(__dirname, '..', 'logs', filename), logItem);
    } catch(e: any) {
        console.error(e);
    }
}