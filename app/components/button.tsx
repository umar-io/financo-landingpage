type IconProps = {
  className: string;
  text: string;
  icon?: React.ReactNode;
};

const Button: React.FC<IconProps> = ({ className = "", text = "", icon }) => {
  return (
    <div
      className={`flex space-between items-center cursor-pointer ${className} gap-1`}
    >
      {text} <span>{icon}</span>
    </div>
  );
};

export default Button;
