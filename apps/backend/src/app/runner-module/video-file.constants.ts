import { IStimulusConfigWithIndex } from '@cogtest/shared-utils';
/**
 * All video URLs, to preload
 */
export const VIDEO_URLS: string[] = [
  `https://cl-cogtests.nyc3.digitaloceanspaces.com/july-171-100-h.mp4`,
  `https://cl-cogtests.nyc3.digitaloceanspaces.com/july-171-100-v.mp4`,
  `https://cl-cogtests.nyc3.digitaloceanspaces.com/july-171-70-h.mp4`,
  `https://cl-cogtests.nyc3.digitaloceanspaces.com/july-171-70-v.mp4`,
  `https://cl-cogtests.nyc3.digitaloceanspaces.com/july-171-80-h.mp4`,
  `https://cl-cogtests.nyc3.digitaloceanspaces.com/july-171-80-v.mp4`,
  `https://cl-cogtests.nyc3.digitaloceanspaces.com/july-171-90-h.mp4`,
  `https://cl-cogtests.nyc3.digitaloceanspaces.com/july-171-90-v.mp4`,
];

// welcome
// handedness input
// instructions
// vertical example
// horizontal example

/**
 * Presentation order of stimuli
 */
export const STIMULUS_ORDER: IStimulusConfigWithIndex[] = [
  {
    intensity: 100,
    direction: 'h',
    index: 0,
  },
  {
    intensity: 90,
    direction: 'v',
    index: 1,
  },
  {
    intensity: 80,
    direction: 'h',
    index: 2,
  },
  {
    intensity: 70,
    direction: 'v',
    index: 3,
  },
  {
    intensity: 100,
    direction: 'v',
    index: 4,
  },
  {
    intensity: 90,
    direction: 'h',
    index: 5,
  },
  {
    intensity: 80,
    direction: 'v',
    index: 6,
  },
  {
    intensity: 70,
    direction: 'h',
    index: 7,
  },
  {
    intensity: 100,
    direction: 'h',
    index: 8,
  },
  {
    intensity: 90,
    direction: 'v',
    index: 9,
  },
  {
    intensity: 70,
    direction: 'h',
    index: 10,
  },
  {
    intensity: 80,
    direction: 'v',
    index: 11,
  },
  {
    intensity: 100,
    direction: 'v',
    index: 12,
  },
  {
    intensity: 90,
    direction: 'h',
    index: 13,
  },
  {
    intensity: 70,
    direction: 'v',
    index: 14,
  },
  {
    intensity: 80,
    direction: 'h',
    index: 15,
  },
  {
    intensity: 100,
    direction: 'h',
    index: 16,
  },
  {
    intensity: 90,
    direction: 'v',
    index: 17,
  },
  {
    intensity: 70,
    direction: 'h',
    index: 18,
  },
  {
    intensity: 70,
    direction: 'v',
    index: 19,
  },
  {
    intensity: 100,
    direction: 'v',
    index: 20,
  },
  {
    intensity: 90,
    direction: 'h',
    index: 21,
  },
  {
    intensity: 80,
    direction: 'v',
    index: 22,
  },
  {
    intensity: 80,
    direction: 'h',
    index: 23,
  },
  {
    intensity: 100,
    direction: 'h',
    index: 24,
  },
  {
    intensity: 90,
    direction: 'v',
    index: 25,
  },
  {
    intensity: 70,
    direction: 'h',
    index: 26,
  },
  {
    intensity: 80,
    direction: 'v',
    index: 27,
  },
  {
    intensity: 100,
    direction: 'v',
    index: 28,
  },
  {
    intensity: 90,
    direction: 'h',
    index: 29,
  },
  {
    intensity: 70,
    direction: 'v',
    index: 30,
  },
  {
    intensity: 80,
    direction: 'h',
    index: 31,
  },
];

export const VERTICAL_EXAMPLE_CONFIG: IStimulusConfigWithIndex[] = [
  {
    intensity: 100,
    direction: 'v',
    index: 0,
  },
];

export const HORIZONTAL_EXAMPLE_CONFIG: IStimulusConfigWithIndex[] = [
  {
    intensity: 100,
    direction: 'h',
    index: 0,
  },
];

export const PRACTICE_CONFIGS: IStimulusConfigWithIndex[] = [
  {
    intensity: 100,
    direction: 'v',
    index: 0,
  },
  {
    intensity: 100,
    direction: 'h',
    index: 1,
  },
  {
    intensity: 90,
    direction: 'v',
    index: 2,
  },
  {
    intensity: 90,
    direction: 'h',
    index: 3,
  },
  {
    intensity: 80,
    direction: 'v',
    index: 4,
  },
  {
    intensity: 80,
    direction: 'h',
    index: 5,
  },
  {
    intensity: 70,
    direction: 'v',
    index: 6,
  },
  {
    intensity: 70,
    direction: 'h',
    index: 7,
  },
];
