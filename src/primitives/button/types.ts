export type ButtonProps = {
    fullWidth?: boolean;
    borderClr?: string;
    children?: React.ReactNode;
    bgColor?: string;
    color?: string;
    svgIcon?: React.ReactNode;
    textVariant?: "h1" | "h2" | "h3" | "body" | "title" | "description"
    textColor?: string;
    reverse?: boolean;
    onLoading?: boolean;
    LoadingType?: "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes",

}