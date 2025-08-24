import Button from "@/components/Button/Button";
import Icon from "@/components/Icon";
import icons from "@/lib/icons/icons";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import Tag from "@/components/Tag";


export default function Home() {
    return (
        <div>
            <Button>Lorem ipsum dolor.</Button>
            <Icon
                icon={icons.github}
                className={"size-6"}
            />
            <Button
                type={"secondary"}
                size="md"
            >
                si
            </Button>

            <Button
                type={"secondary"}
                size={"lg"}
            >
                sikim
            </Button>

            <ThemeToggleButton/>

            <Tag.Item>
                sikim aghzua
            </Tag.Item>

        </div>
    );
}
