import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

type ButtonProps = {
  title: string;
  onPress?: () => void;
  theme?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
} & PressableProps;

export const Button = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  ButtonProps
>(({ title, onPress, theme = "primary", disabled, ...rest }, ref) => {
  const pressableClass = `
    flex-row items-center justify-center rounded-md px-5 py-3 mb-4 border
    ${theme === "primary" ? "bg-[#007AFF] border-[#007AFF]" : ""}
    ${theme === "secondary" ? "bg-white border-gray-300" : ""}
    ${theme === "tertiary" ? "bg-transparent border-transparent" : ""}
    ${disabled ? "opacity-50" : ""}
  `;

  const textClass = `
    font-semibold text-lg tracking-wider
    ${theme === "primary" ? "text-white" : ""}
    ${theme === "secondary" ? "text-black" : ""}
    ${theme === "tertiary" ? "text-gray-800" : ""}
  `;

  return (
    <Pressable
      ref={ref}
      onPress={onPress}
      className={pressableClass}
      disabled={disabled}
      {...rest}
    >
      <Text className={textClass}>
        {title}
      </Text>
    </Pressable>
  );
});

Button.displayName = "Button";
