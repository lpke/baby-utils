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
      className={`!rounded-full !px-8 !py-6 ${
        active ? activeClasses : ''
      } ${className}`}
      {...buttonProps}
    >
      {active ? 'Contraction stopped' : 'Contraction started'}
    </Button>
  );
}
