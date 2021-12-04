import React, {useState} from "react";

import MemoriesContext, {Memory} from "./memorycontext";

const MemoriesContextProvider: React.FC = props => {
    const [memories, setMemories] = useState<Memory[]>([]);
    const addMemory = (path: string, title: string, type: 'good'|'bad') => {
        const newMemory: Memory = {
            id: Math.random().toString(),
            title,
            type,
            imagePath: path
        }
        setMemories(curMemories => {
            return [...curMemories, newMemory];
        })
    }
    return (
        <MemoriesContext.Provider value={{memories, addMemory}}>
            {props.children}
        </MemoriesContext.Provider>
    )
}

export default MemoriesContextProvider;