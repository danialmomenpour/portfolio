import {  ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary"
export type ButtonSize = "md" | "lg" | "base";

export interface ButtonProps  {
    children?: ReactNode;
    type?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    onClick ?: () => void;
}

