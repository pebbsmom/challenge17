export const formatDate = (timestamp: Date): string =>
    timestamp.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' });
  