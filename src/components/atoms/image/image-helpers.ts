import { Image as RNImage } from "expo-image";

/**
 * Helper function used for prefetching images
 */
export const prefetchImages = (sources: string[]) => {
  return RNImage.prefetch(sources);
};
