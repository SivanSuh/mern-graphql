import React from "react";

export default interface InputProps {
    name:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void
    value:string
    placeholder:string
}