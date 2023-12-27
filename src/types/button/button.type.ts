import { ComponentChildren, IClassName, ObjectSizeValue, PDefault } from "types";

export interface IButtonProps extends IClassName {
  /**
   * An ID for the button
   * @optional
   */
  id?: string;
  /**
   * A label for the button. If {@link children} is set, this value will be ignored.
   * @optional
   */
  label?: string;
  /**
   * An if of the form the button submits
   * @optional
   */
  formId?: string;
  /**
   * The size of the buttons. see {@link ObjectSizeValue}
   * @optional
   * @default md
   */
  size?: ObjectSizeValue;
  /**
   * Event, when clicking on it
   * @optional
   */
  onClick?: (event: PDefault) => any;
  /**
   * The type of the button (default: button). Use "submit" for forms.
   * @optional
   * @default "button"
   */
  htmlType?: "button" | "submit" | "reset" | undefined; // HTMLButtonElement["type"];
  /**
   * You can add anything as its child, but {@link label} won't be shown.
   * @optional
   */
  children?: ComponentChildren;
  /**
   * Take full size of container. Defaults to false
   * @optional
   */
  block?: boolean;
  /**
   * Disabled button
   * @optional
   */
  disabled?: boolean;
  /**
   * the HTML `title` property to display a tooltip
   * @optional
   */
  tooltip?: string;
  /**
   * A loading button is disabled by default, and contains a loading icon
   * @optional
   * @default false
   */
  loading?: boolean;
  /**
   * The loading label is shown while the button has `loading == true`
   * @optional
   * @default label (see label)
   */
  loadingLabel?: string | JSX.Element;
  /**
   * An optional icon to show in the button (start)
   */
  icon?: typeof import("*.svg");
}
