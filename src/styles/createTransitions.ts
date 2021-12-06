export const easing: {
  easeInOut: string;
  easeOut: string;
  easeIn: string;
  sharp: string;
} = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};

const DEFAULT_TIMING_FUNCTION: number = 0;
export const duration: {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  complex: number;
} = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
};

/**
 * Returns the value of a number rounded to the nearest integer (passed milliseconds)
 * @return string
 * */
const formatMs = (ms: number): string => `${Math.round(ms)}ms`;

type TCreateTransitions = {
  props?: string[];
  options?: {
    easing?: string;
    duration?: number;
    delay?: number;
  };
};
/**
 * Constructor for CSS transition property.
 *
 * ex. output: property name | duration | easing function | delay.
 * @return {string}
 */
export const createTransition = ({
  props = ['all'],
  options: {
    easing: easingOption = easing.easeInOut,
    duration: durationOption = duration.standard,
    delay = DEFAULT_TIMING_FUNCTION,
  } = {},
}: TCreateTransitions): string =>
  (Array.isArray(props) ? props : [props])
    .map(
      (animatedProp: string) =>
        `${animatedProp} ${
          typeof durationOption === 'string' ? durationOption : formatMs(durationOption)
        } ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`
    )
    .join(',');
