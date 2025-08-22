import React from "react";

export interface TagItemProps {
    children?: React.ReactNode;
    title?: string;
    icon?: string;
    className?: string;
    iconClassName?: string;
    onClick?: () => void;
}

export interface TagListProps {
    items: {
        id: string;
        title?: string;
        icon?: string;
        iconClassName?: string;
    }[];
    className?: string;
    itemClassName?: string;
}