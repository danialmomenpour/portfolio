import React from 'react';
import {cn} from "@/lib/utils";
import {ButtonProps} from "@/components/Button/type";

const Button = ({
                    className,
                    type = 'primary',
                    size = 'primary',
                    children,
                    onClick,
                    ...props
                }: ButtonProps
) => {

    const typeStyle = {
        primary: 'bg-light-900 dark:bg-dark-900 text-light-50 dark:text-dark-50 hover:bg-light-700 dark:hover:bg-dark-700 active:bg-light-800 dark:active:bg-dark-800 font-medium text-md leading-24',

        secondary: 'bg-transparent text-light-600 dark:text-dark-600 hover:bg-light-100 dark:hover:bg-dark-100 hover:text-light-700 dark:hover:text-dark-600 active:bg-light-200 active:text-light-600 dark:active:bg-dark-200 dark:active:text-dark-600'
    }

    const sizeStyle = {
        primary: 'h-9 px-4 rounded-xl',
        secondary: 'w-11 h-11 p-1.5 rounded-lg',
    }


    return (
        <button
            onClick={onClick}
            className={cn(
                "w-fit cursor-pointer",
                typeStyle[type],
                sizeStyle[size],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;

