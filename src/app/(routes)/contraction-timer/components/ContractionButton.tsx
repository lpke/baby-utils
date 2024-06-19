'use client';

import Button, { type ButtonProps } from '@/components/Button';

type ContractionButtonProps = Omit<ButtonProps, 'children'> & {
  active?: boolean;
};

export default function ContractionButton({
  active,
  className = '',
  ...buttonProps
}: ContractionButtonProps) {
  const activeClasses =
    'bg-rose-400 hover:bg-rose-300 dark:bg-rose-800 dark:hover:bg-rose-700';

  return (
    <Button
      className={`py-6 px-8 rounded-full ${active ? activeClasses : ''} ${className}`}
      {...buttonProps}
    >
      {active ? 'Contraction stopped' : 'Contraction started'}
    </Button>
  );
}
