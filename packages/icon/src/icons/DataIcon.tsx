/* Warning: this file is generated using svg-icon-builder */
import React from 'react';
import makeClass from 'clsx';
import { IconProps, IconSizes } from '../props';

import styles from '../icon.module.css';

/**
 * DataIcon
 *
 * @param iconProps - SVG props
 */
const DataIcon = (iconProps: IconProps) => {
  const { className, fill, size, inline, ...html } = iconProps;
  const iconSize = size ? IconSizes[size] : undefined;

  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="2 2 20 20"
      className={makeClass(className, { [styles.inline]: inline })}
      width={iconSize}
      height={iconSize}
      fill={fill || 'currentColor'}
      {...html}
    >
      <path d="M12 2c4.265 0 7.838 1.49 7.995 3.839L20 6v12c0 2.44-3.638 4-8 4-4.265 0-7.838-1.49-7.995-3.839L4 18V6l.005-.161C4.162 3.49 7.735 2 12 2zm0 16c-2.37 0-4.525-.46-6-1.272V18c0 .31.467.783 1.444 1.202C8.616 19.704 10.247 20 12 20c1.753 0 3.384-.296 4.556-.798.912-.39 1.38-.829 1.438-1.138L18 18l.001-1.272C16.526 17.54 14.37 18 12 18zm-6-4c0 .31.467.783 1.444 1.202C8.616 15.704 10.247 16 12 16c1.753 0 3.384-.296 4.556-.798.912-.39 1.38-.829 1.438-1.138L18 14l.001-1.272C16.526 13.54 14.37 14 12 14c-2.37 0-4.525-.46-6-1.272V14zm12.001-5.272C16.526 9.54 14.37 10 12 10c-2.37 0-4.525-.46-6-1.272V10c0 .31.467.783 1.444 1.202C8.616 11.704 10.247 12 12 12c1.753 0 3.384-.296 4.556-.798.912-.39 1.38-.829 1.438-1.138L18 10l.001-1.272zM12 4c-1.753 0-3.384.296-4.556.798C6.467 5.217 6 5.69 6 6c0 .31.467.783 1.444 1.202C8.616 7.704 10.247 8 12 8c1.753 0 3.384-.296 4.556-.798C17.533 6.783 18 6.31 18 6c0-.31-.467-.783-1.444-1.202C15.384 4.296 13.753 4 12 4z" />
    </svg>
  );
};

export default DataIcon;
