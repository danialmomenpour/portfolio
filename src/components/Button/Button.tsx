import React from 'react';
import {cn} from "@/lib/utils";
import {ButtonProps} from "@/components/general/button/type"


const Button = ({
                    className,
                    type = 'primary',
                    size = 'md',
                    children,
                    onClick,
                    disabled,
                    ...props
                }: ButtonProps
) => {

    const typeStyle = {
        primary: 'bg-primary-300 text-greyscale-900 active:opacity-50',
        secondary: 'bg-greyscale-0 text-greyscale-900 active:border border border-black',
        circle: 'bg-primary-100 text-greyscale-900 active:opacity-50 rounded-full w-10 h-10',

    }

    const sizeStyle = {
        lg: 'text-body-xl h-13 ',
        md: 'text-body-l ',
        sm: 'text-body-m',
        xs: 'text-body-sm',
    }


    return (
        <button
            onClick={onClick}
            className={cn(
                "w-80 rounded-full cursor-pointer",
                typeStyle[type],
                sizeStyle[size],
                className,
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;

