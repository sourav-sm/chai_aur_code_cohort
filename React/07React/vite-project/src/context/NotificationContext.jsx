import { createContext, useContext, useState} from "react";

const NotificationContext=createContext();

export function NotificationProvier(){
    
}


//custom hook
export function useNotification(){
    return useContext(NotificationContext)
}