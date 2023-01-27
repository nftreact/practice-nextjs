import React, { CSSProperties, HTMLAttributes, ReactNode, FC } from "react";
import { spacingHelper, SpacingType } from "./spacing";
import styled from "styled-components";
import { Breakpoints } from "./breakpoints";

export const typographyVariant = {
  // font-height is intentionally removed, ui is not consistent at all and to avoid overriding for every usage
  h1: {
    fontSize: 2.4,
    fontWeight: "normal",
    fontFamily: "KalamehWeb",
    lineHeight: "40px",
    breakPoints: {
      sm: { fontSize: 3.2, lineHeight: "54px" },
    },
  },
  h2: {
    fontSize: 2,
    fontWeight: "normal",
    fontFamily: "KalamehWeb",
    lineHeight: "34px",
    breakPoints: {
      sm: { fontSize: 2.4, lineHeight: "41px" },
    },
  },
  h3: {
    fontSize: 1.6,
    fontWeight: "normal",
    fontFamily: "KalamehWeb",
    lineHeight: "27px",
    breakPoints: {
      sm: { fontSize: 2, lineHeight: "34px" },
    },
  },
  // h4: {
  //   fontSize: 2,
  //   fontWeight: "bold",
  //   fontFamily: "KalamehWeb",
  // },
  // h5: {
  //   fontSize: 1.8,
  //   fontWeight: "bold",
  //   fontFamily: "KalamehWeb",
  // },
  // h6: {
  //   fontSize: 1.6,
  //   fontWeight: "bold",
  //   fontFamily: "KalamehWeb",
  // },
  title: {
    fontSize: 1.8,
    fontWeight: "normal",
    fontFamily: "KalamehWeb",
    lineHeight: "31px",
    breakPoints: {
      sm: { fontSize: 2.2, lineHeight: "37px" },
    },
  },
  body: {
    fontSize: 1.2,
    fontWeight: "normal",
    fontFamily: "KalamehWeb",
    lineHeight: "28px",
    breakPoints: {
      sm: { fontSize: 1.4, lineHeight: "28px" },
    },
  },
  description: {
    fontSize: 1,
    fontWeight: "normal",
    fontFamily: "KalamehWeb",
    lineHeight: "17px",
    breakPoints: {
      sm: { fontSize: 1.2, lineHeight: "20px" },
    },
  },
  // "subhead-bold": {
  //   fontSize: 1.4,
  //   fontWeight: "bold",
  //   fontFamily: "KalamehWeb",
  // },
  // callout: {
  //   fontSize: 1.5,
  //   fontWeight: "normal",
  //   fontFamily: "KalamehWeb",
  // },
};

type TagType = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";

type Props = {
  variant?: keyof typeof typographyVariant;
  textColor?: string;
  fontWeight?: CSSProperties["fontWeight"];
  fontSize?: number;
  tag?: TagType;
  lineHeight?: CSSProperties["lineHeight"];
  spacing?: SpacingType;
  textAlign?: CSSProperties["textAlign"];
};

export type TypographyProps = Props & HTMLAttributes<HTMLHeadingElement>;

export const Typography: FC<TypographyProps> = (props) => {
  const {
    variant = "body",
    textColor = "#000",
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    spacing,
    children,
    ...rest
  } = props;
  const tag = (
    ["h1", "h2", "h3", "h4", "h5", "h6"].some((i) => i === variant) ? variant : "span"
  ) as TagType;

  return (
    <DynamicTypography
      tag={tag}
      variant={variant}
      spacing={spacing}
      textColor={textColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </DynamicTypography>
  );
};

type StyledDynamicComponentProps = {
  variant: keyof typeof typographyVariant;
  textColor: string;
  spacing?: SpacingType;
  fontSize?: number;
  fontWeight?: CSSProperties["fontWeight"];
  textAlign?: CSSProperties["textAlign"];
  lineHeight?: CSSProperties["lineHeight"];
};

const StyledDynamicTypographyComponent = styled.span<StyledDynamicComponentProps>`
  margin: unset;
  font-size: ${({ variant, fontSize }) => fontSize ?? typographyVariant[variant].fontSize}rem;
  font-weight: ${({ fontWeight, variant }) => fontWeight ?? typographyVariant[variant].fontWeight};
  color: ${({ textColor }) => textColor};
  font-family: ${({ variant }) => typographyVariant[variant].fontFamily}, serif;
  ${({ lineHeight, variant }) =>
    lineHeight ?? `line-height: ${typographyVariant[variant].lineHeight}`};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
  ${({ spacing }) => spacing && spacingHelper(spacing)};
  @media (min-width: ${Breakpoints.sm}) {
    & {
      font-size: ${({ variant, fontSize }) =>
        fontSize ?? typographyVariant[variant].breakPoints.sm.fontSize}rem;
      ${({ lineHeight, variant }) =>
        lineHeight ?? `line-height: ${typographyVariant[variant].breakPoints.sm.lineHeight}`};
    }
  }
`;

type DynamicTypography = { tag: TagType; children: ReactNode } & StyledDynamicComponentProps;

const DynamicTypography: FC<DynamicTypography> = (props) => {
  const { children, tag, variant, textColor, textAlign, fontWeight, lineHeight, spacing, ...rest } =
    props;

  return (
    <StyledDynamicTypographyComponent
      {...rest}
      as={tag}
      variant={variant}
      textColor={textColor}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      textAlign={textAlign}
      spacing={spacing}
    >
      {children}
    </StyledDynamicTypographyComponent>
  );
};
