type IconProps = {
  className: string;
  text: string;
  icon?: React.ReactNode;
  iconClassName? : string;
};

const Button: React.FC<IconProps> = ({ className = "", text = "", icon, iconClassName="" }) => {
  return (
    <div
      className={`flex space-between items-center cursor-pointer ${className} gap-1`}
    >
      {text} <span className={`${iconClassName}`}>{icon}</span>
    </div>
  );
};

export default Button;
