import { css } from "emotion";
import * as React from "react";
import { badge as badgeButton } from "../style";

export interface IBadgeButtonProps {
  appearance?:
    | "default"
    | "success"
    | "primary"
    | "warning"
    | "danger"
    | "outline";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /**
   * Tab index indicates if an element can be focuesed for more information see
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * browser default value for this is -1
   */
  tabIndex?: number;
  children: JSX.Element | string;
}

export class BadgeButton extends React.PureComponent<IBadgeButtonProps, {}> {
  public static defaultProps: Partial<IBadgeButtonProps> = {
    appearance: "default",
    tabIndex: -1
  };

  public render() {
    const { appearance, children, onClick, tabIndex } = this.props;
    const props = {
      onClick,
      role: "button",
      tabIndex,
      className: css`
        outline: none;
        cursor: pointer;
        ${badgeButton(appearance)};
      `
    };

    return <span {...props}>{children}</span>;
  }
}

export default BadgeButton;