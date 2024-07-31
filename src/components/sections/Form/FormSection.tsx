import { InputText } from "../../Input";
import { SearchIcon } from "../../Icons";
import { useState } from "react";

const FormSection = () => {
  const [firstInput, setFirstInput] = useState("");
  const onChangeFirstInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstInput(e.target.value);
  };

  return (
    <div>
      <div className="relative flex items-center justify-center px-2 py-2 bg-red-700 rounded-full shadow-md w-80">
        <InputText
          value={firstInput}
          onChange={onChangeFirstInput}
          icon={<SearchIcon aria-hidden="true" className="w-5 h-5 fill-white" />}
          placeholder="Search"
          className="text-white bg-red-700 w-80 placeholder:text-red-300 ring-white"
        />
      </div>

      <InputText value="" onChange={() => {}} placeholder="Search" className="shadow-md w-80" />
    </div>
  );
};

export default FormSection;
