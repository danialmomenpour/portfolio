import React from 'react';
import {cn} from "@/lib/utils";
import {TagItemProps} from "@/components/Tag/type";
import Icon from "@/components/Icon";


export const TagItem = ({
                            children,
                            title,
                            icon,
                            iconClassName,
                            className,
                            ...props
                        }: TagItemProps) => {

    return (
        <div
            className={cn("py-2.5 px-4 w-fit rounded-lg drop-shadow bg-greyscale-0  border border-transparent cursor-pointer", className)} {...props}>
            {children ? children :
                <div className={cn("flex flex-row items-center justify-center gap-2")}>
                    {icon ? (
                        <div className={cn(" size-7 flex items-center justify-center ")}>

                            <Icon
                                className={cn("size-5 text-blue-400", iconClassName)}
                                icon={icon}
                            />
                        </div>
                    ) : null}
                    {title ? (
                        <p className={cn("text-sm font-medium leading-5 text-greyscale-900")}>
                            {title}
                        </p>
                    ) : null}
                </div>

            }
        </div>
    );
}

