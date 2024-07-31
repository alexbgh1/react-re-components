import { cn } from "../utils/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  onClick: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: ButtonVariant;
}

type ButtonVariant = "primary" | "secondary" | "danger";

const variantClasses = {
  primary: "bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center px-2 py-1 gap-1",
  secondary: "bg-gray-500 text-white hover:bg-gray-600 flex items-center justify-center  px-2 py-1  gap-1",
  danger: "bg-red-500 text-white hover:bg-red-600 flex items-center justify-center px-2 py-1  gap-1",
};

const Button = ({ children, onClick, className, variant = "primary", icon, iconPosition, ...props }: ButtonProps) => {
  const iconPos = iconPosition === "left" ? `flex-row-reverse` : `flex-row`;
  return (
    <button onClick={onClick} className={cn(variantClasses[variant], className, iconPos)} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
