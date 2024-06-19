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
      className={`!rounded-full border-[6px] border-teal-200 !px-8 !py-6 dark:border-teal-500 ${
        active ? activeClasses : ''
      } ${className}`}
      {...buttonProps}
    >
      {active ? 'Contraction stopped' : 'Contraction started'}
    </Button>
  );
}
