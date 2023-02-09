export type TextFieldProps = {
    label?: string;
    htmlFor?: string;
    labelVariant?: "h1" | "h2" | "h3" | "body" | "title" | "description" | undefined;
    errorText?: string;
    errorTextVariant?: "h1" | "h2" | "h3" | "body" | "title" | "description" | undefined;
    placeholder?: string;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    svgIcon?: React.ReactNode;
    svgPosition?: "left" | "right";
    desktopFullWidth?: boolean;
    name?: string 
}