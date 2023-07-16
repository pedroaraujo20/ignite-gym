import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

interface ButtonProps extends IButtonProps {
  title: string;
  variant?: "solid" | "outline";
}

export function Button({ title, variant = "solid", ...rest }: ButtonProps) {
  const isOutlineVariant = variant === "outline";

  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg={isOutlineVariant ? "transparent" : "green.700"}
      borderWidth={isOutlineVariant ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{
        bg: isOutlineVariant ? "gray.500" : "green.500",
      }}
      {...rest}
    >
      <Text
        color={isOutlineVariant ? "green.500" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
