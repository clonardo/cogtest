/**
 * Configs for a given stimulus
 */
export interface IStimulusConfig {
  /**
   * Direction: (v)ertical or (h)orizontal
   */
  direction: 'v' | 'h';
  /**
   * Magnitude of effect (max: 100)
   */
  intensity: number;
}

/**
 * Extends basic IStimulusConfig with a "url" prop
 */
export interface IStimulusConfigWithUrl extends IStimulusConfig {
  /**
   * Video URL
   */
  url: string;
}

/**
 * Extends basic IStimulusConfig with an "index" prop
 */
export interface IStimulusConfigWithIndex extends IStimulusConfig {
  /**
   * Index/order
   */
  index: number;
}
