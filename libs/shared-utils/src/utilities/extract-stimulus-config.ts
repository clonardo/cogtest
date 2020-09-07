import { IStimulusConfigWithUrl } from '../contracts';

/**
 * Regex pattern to extract direction + intensity groups from a video URL
 * (e.g., https://cl-cogtests.nyc3.digitaloceanspaces.com/july-171-90-v.mp4).
 * Returns null on error
 */
const rgx = /\S{20,30}digitaloceanspaces.com\/[a-z]{1,12}-\d\d\d?-(?<intensity>\d\d\d?)-(?<direction>v|h).mp4/i;

export const extractStimulusConfig = (
  videoUrl: string
): IStimulusConfigWithUrl => {
  if (videoUrl) {
    const matched = videoUrl.match(rgx);
    if (
      matched &&
      matched.groups &&
      matched.groups['direction'] &&
      matched.groups['intensity']
    ) {
      const cleanDir: 'v' | 'h' = matched.groups['direction'] as any;
      const cleanIntensity: number = parseInt(matched.groups['intensity']);
      return {
        url: videoUrl,
        intensity: cleanIntensity,
        direction: cleanDir,
      };
    } else {
      return null;
    }
  } else {
    return null;
  }
};
