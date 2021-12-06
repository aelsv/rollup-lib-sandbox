const DEFAULT_ALPHA_CHANNEL: number = 1;
/**
 * Transform hex color to rgba with configurable alpha
 *
 * To get rgba you must provide hex as full value without shorthand.
 * Value must be 6x chars
 *
 * Ex: hexToRgba({ hex: '#000000', alpha?: 0.6 })
 *
 * bad usage ex: hexToRgba({ hex: '#000', alpha?: 0.6 })
 * @return {string}
 * */
export const hexToRgba = ({
  hex = '',
  alpha = DEFAULT_ALPHA_CHANNEL,
}: {
  hex: string;
  alpha: number;
}): string | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`
    : null;
};
