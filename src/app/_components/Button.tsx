import type { ThemeColor } from '@/types/theme';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: ThemeColor;
  children: React.ReactNode;
};

export default function Button({
  color,
  children,
  ...buttonProps
}: ButtonProps) {
  return <button {...buttonProps}>{children}</button>;
}
