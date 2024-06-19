'use client';

import { useContext } from 'react';
import { AppContext } from '@/utils/context';
import { LuSun as LightIcon, LuSunDim as DarkIcon } from 'react-icons/lu';

type LightingPrefSelectProps = {
  className?: string;
};

export default function LightingPrefSelect({
  className = '',
}: LightingPrefSelectProps) {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const classes = 'h-[29px] w-[29px]';

  return (
    <button
      className={`p-2 ${className}`}
      onClick={() => setDarkMode((prev) => !prev)}
    >
      {darkMode ? (
        <DarkIcon className={classes} />
      ) : (
        <LightIcon className={classes} />
      )}
    </button>
  );
}
