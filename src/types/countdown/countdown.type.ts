import { IClassName, ObjectSizeValue, ComponentChildren } from "types";

export interface ICountdownProps extends IClassName {
  /**
   * The target end date and time for the countdown.
   */
  targetDate: Date;
  
  /**
   * A callback function that is called when the countdown reaches zero.
   * @optional
   */
  onEnd?: () => void;
  
  /**
   * The size of the countdown. see {@link ObjectSizeValue}
   * @optional
   * @default "md"
   */
  size?: ObjectSizeValue;
  
  /**
   * A boolean that specifies if the countdown should be displayed in a block format,
   * taking full width of the container.
   * @optional
   * @default false
   */
  block?: boolean;
  
  /**
   * Custom children to be displayed, typically this could be used for a message or additional content.
   * @optional
   */
  children?: ComponentChildren;
  
  /**
   * A loading state for the countdown, in case you need to fetch some data before starting the countdown.
   * @optional
   * @default false
   */
//   loading?: boolean;
  
//   /**
//    * The label to show when the countdown is in a loading state.
//    * @optional
//    */
//   loadingLabel?: string | JSX.Element;
  
  /**
   * Additional classes for custom styling.
   * @optional
   */
  className?: string;
}

export default ICountdownProps;
