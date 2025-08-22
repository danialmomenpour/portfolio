import React, {useState} from 'react';
import {cn} from "@/lib/utils";
import Tag from "@/components/general/Tag/index";
import {TagListProps} from "@/components/general/Tag/type";

export const TagList = ({
                            items,
                            className,
                            itemClassName,
                        }: TagListProps) => {
    const [activeIds, setActiveIds] = useState<string[]>([]);

    const clickHandler = (id: string) => {
        setActiveIds(prev =>
            prev.includes(id)
                ? prev.filter(activeId => activeId !== id)
                : [...prev, id]
        );
    };

    return (
        <div className={cn("flex items-center gap-2", className)}>
            {items?.map(({
                             id,
                             title,
                             icon,
                             iconClassName
                         }) => {
                const isActive = activeIds.includes(id);

                return (
                    <Tag.Item
                        key={id}
                        title={title}
                        icon={icon}
                        iconClassName={iconClassName}
                        className={cn(
                            itemClassName,
                            isActive && "bg-primary-0 border border-primary-50"
                        )}
                        onClick={() => clickHandler(id)}
                    />
                );
            })}
        </div>
    );
};
