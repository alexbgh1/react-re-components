import Button from "../../Button";
import { TrashIcon } from "../../Icons";

const ButtonSection = () => {
  return (
    <div>
      <Button
        iconPosition="right"
        icon={<TrashIcon aria-hidden="true" className="w-4 h-4 fill-white" />}
        onClick={() => {}}
      >
        Click me
      </Button>
      <Button
        iconPosition="left"
        icon={<TrashIcon aria-hidden="true" className="w-4 h-4 fill-white" />}
        onClick={() => {}}
      >
        Click me
      </Button>
    </div>
  );
};

export default ButtonSection;
