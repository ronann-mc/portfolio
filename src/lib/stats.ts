import { shared } from '../data/shared';
import type { Channel, Locale } from '../data/types';
import { formatCompact, formatDate, monthsBetween } from './format';

export const totals = {
  views: shared.channels.reduce((sum, channel) => sum + channel.views, 0),
  subscribers: shared.channels.reduce((sum, channel) => sum + channel.subscribers, 0),
};

const found = shared.channels.find((channel) => channel.id === shared.featuredChannelId);
if (!found) throw new Error(`featuredChannelId "${shared.featuredChannelId}" matches no channel in shared.ts`);
export const featuredChannel: Channel = found;

export const featuredMonths = monthsBetween(featuredChannel.launched, shared.statsDate);

/** Values available to every {placeholder} in the language files. */
export function commonVars(lang: Locale): Record<string, string | number> {
  return {
    views: formatCompact(totals.views, lang),
    subscribers: formatCompact(totals.subscribers, lang),
    featuredViews: formatCompact(featuredChannel.views, lang, false),
    months: featuredMonths,
    weeks: featuredChannel.monetizedInWeeks ?? '',
    date: formatDate(shared.statsDate, lang),
    email: shared.site.email,
  };
}
