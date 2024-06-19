export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  className = '',
  children,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      className={`rounded-md bg-teal-400 px-3 py-2 drop-shadow-md transition-colors hover:bg-teal-300 dark:bg-teal-700 dark:hover:bg-teal-600 ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
