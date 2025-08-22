import {  ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "circle"
export type ButtonSize = "sm" | "md" | "lg"|"xs";

export interface ButtonProps  {
    children?: ReactNode;
    type?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    disabled?: boolean;
    className?: string;
    onClick ?: () => void;

}

