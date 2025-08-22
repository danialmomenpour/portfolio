import {ReactSVG} from 'react-svg';
import clsx from "clsx";
import {IconProps} from "@/components/Icon/type";

const Icon = (
    {
        icon,
        className = '',
    }: IconProps
) => {

    if (!icon) return null;

    const {src} = icon as { src: string };

    return (
        <ReactSVG
            src={src}
            beforeInjection={(svg) => {
                svg.removeAttribute('width');
                svg.removeAttribute('height');

                svg.setAttribute('class', clsx('text-black', className));
            }}
        />
    );
};

export default Icon;
