import Button from "@/components/Button/Button";
import Icon from "@/components/Icon";
import icons from "@/lib/icons/icons";


export default function Home() {
  return (
    <div>
        <Button>Lorem ipsum dolor.</Button>
        <Icon
            icon={icons.github}
            className={""}
        />
    </div>
  );
}
