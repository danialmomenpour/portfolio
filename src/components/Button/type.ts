import {  ReactNode } from "react";

export type ButtonVariant = "primary"
export type ButtonSize = "primary";

export interface ButtonProps  {
    children?: ReactNode;
    type?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    onClick ?: () => void;
}

