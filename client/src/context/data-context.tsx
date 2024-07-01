import { createContext, useContext, useState } from "react";

const dataContext = createContext({});

//creating a hook to get the contextContext);

export const ContextCover = ({children}: {
    children: React.ReactNode
}) => {
    const data = useState(null);

    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    )
};




