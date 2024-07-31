import { cn } from "../utils/utils";
import { ForwardedRef, forwardRef, useState } from "react";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
  type?: "text";
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ value, onChange, placeholder, className, icon, type = "text", ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    const [focus, setFocus] = useState<boolean>(false);

    const handleFocus = () => {
      setFocus(!focus);
    };

    const isFocusActiveClasses = focus ? "pl-4" : "pl-12";
    const isFocusActiveIconClasses = focus ? "opacity-0" : "opacity-100";
    const isIconActiveClasses = icon ? isFocusActiveClasses : "pl-4";

    return (
      // <div className="relative flex items-center justify-center px-2 py-2 rounded-full shadow-md">
      <>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          type={type}
          placeholder={placeholder}
          className={cn(
            "transition-[padding] duration-300 relative outline-none w-full py-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50",
            className,
            isIconActiveClasses
          )}
          {...props}
        />
        {icon && (
          <div
            className={cn("absolute left-5 pointer-events-none transition-all duration-300", isFocusActiveIconClasses)}
          >
            {icon}
          </div>
        )}
      </>
    );
  }
);

export { InputText };
