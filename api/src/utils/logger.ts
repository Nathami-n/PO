
import { format } from "date-fns";
import {v4 as uuid} from 'uuid';

export const loggerFunction =  async (message: string, filename: string) => {

    const dateTime = `${format(new Date(), 'yyyyMMdd\t HH:mm:ss')}`;
    const logItem = `${dateTime}\t ${uuid()}${message}`;

    //check for the existence of the file in the log folder

    try {

    } catch(e: any) {
        console.error(e);
    }
}