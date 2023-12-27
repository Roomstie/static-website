interface NotAllowedProps {
  /**
   * Reason why the user is not allowed
   * @optional
   * @default "Not allowed"
   */
  reason?: string;
}

export const NotAllowed = ({ reason = "Not allowed" }: NotAllowedProps): JSX.Element => {
  return (
    <span className="text-alert-error-dark text-xs">
      {reason}
    </span>
  );
};
