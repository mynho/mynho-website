import "react";
import { CSSProp } from "styled-components";
import { theme } from "styles";

declare module "react" {
    interface Attributes {
        css?: CSSProp | CSSObject;
    }
}

type Theme = typeof theme

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}