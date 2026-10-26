export const watchUrl = (id: string, startSeconds = 0): string =>
  `https://www.youtube.com/watch?v=${id}${startSeconds > 0 ? `&t=${startSeconds}s` : ''}`;

export const shortUrl = (id: string): string => `https://www.youtube.com/shorts/${id}`;

const thumbnailCache = new Map<string, Promise<string | null>>();

/**
 * Finds the best available thumbnail at build time: the vertical Shorts frame
 * first, then the regular ones. Returns null for private or deleted videos,
 * in which case the player shows a plain placeholder until the video is public.
 */
export function findThumbnail(id: string): Promise<string | null> {
  let pending = thumbnailCache.get(id);
  if (!pending) {
    pending = (async () => {
      for (const name of ['oar2.jpg', 'maxresdefault.jpg', 'hqdefault.jpg']) {
        const url = `https://i.ytimg.com/vi/${id}/${name}`;
        try {
          const response = await fetch(url, { method: 'HEAD' });
          if (response.ok) return url;
        } catch {
          // Network hiccup: try the next size.
        }
      }
      console.warn(`[youtube] No thumbnail for ${id} (private video?). A placeholder is shown instead.`);
      return null;
    })();
    thumbnailCache.set(id, pending);
  }
  return pending;
}
