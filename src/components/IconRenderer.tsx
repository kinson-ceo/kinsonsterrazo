import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as TbIcons from "react-icons/tb";
import * as IoIcons from "react-icons/io5";
import * as VscIcons from "react-icons/vsc";
import * as Fa6Icons from "react-icons/fa6";
interface IconRendererProps {
  iconName: string;
  className?: string;
  size?: number;
  color?: string;
}

const IconRenderer: React.FC<IconRendererProps> = ({
  iconName,
  className = "",
  size = 24,
  color = "currentColor",
}) => {
  // Map of icon prefixes to their respective icon libraries
  const iconLibraries: Record<string, any> = {
    Fa: FaIcons,
    Md: MdIcons,
    Bi: BiIcons,
    Hi: HiIcons,
    Ri: RiIcons,
    Ai: AiIcons,
    Bs: BsIcons,
    Gi: GiIcons,
    Tb: TbIcons,
    Io: IoIcons,
    Vsc: VscIcons,
    Fa6: Fa6Icons,
  };

  // Get the appropriate icon library
  const iconPrefix = iconName.substring(0, 2);
  const iconLibrary = iconLibraries[iconPrefix];

  // Default styles
  const defaultStyles = {
    width: `${size}px`,
    height: `${size}px`,
    color: color,
  };

  // Combine default styles with any additional classes
  const combinedClassName = `icon-renderer ${className}`.trim();

  if (iconLibrary && iconLibrary[iconName]) {
    // If the icon exists in the library, render it
    const IconComponent = iconLibrary[iconName];
    return (
      <IconComponent className={combinedClassName} style={defaultStyles} />
    );
  } else {
    // Fallback to a default icon if the specified icon is not found
    return (
      <FaIcons.FaCheck className={combinedClassName} style={defaultStyles} />
    );
  }
};

export default IconRenderer;
