import {connect} from 'mongoose';



 export const makeConnection = async (uri: string) => {

    try {
         await connect(uri);
         console.log("connection to database successful");

    } catch(error: any) {
        console.error(error);
        return;
    }
}

