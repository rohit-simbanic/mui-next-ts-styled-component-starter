import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    color: {
      headerBgColor: string;
    };
    display: {
      flex: string;
      block: string;
      inline: string;
      inlineBlock: string;
      table: string;
      tableCell: string;
      tableRow: string;
    };
  }

  interface ThemeOptions {
    color?: {
      headerBgColor?: string;
    };
    display?: {
      flex?: string;
      block?: string;
      inline?: string;
      inlineBlock?: string;
      table?: string;
      tableCell?: string;
      tableRow?: string;
    };
  }
}
