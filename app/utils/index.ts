export const createAsyncDelay = duration => {

  return new Promise((resolve, _) => setTimeout(() => { resolve(); }, duration));
};

export const parseConnectionsCount = connectionCount => {
  return connectionCount.toString();
};

export const parseTimeElapsed = utcTime => {

  let timeElapsedFormatted = '...';
  const timeNow = new Date().getTime();
  const actionTime = new Date(utcTime).getTime();

  let difference = (timeNow - actionTime);

  const secondsInMs = 1000;
  const minutesInMs = secondsInMs * 60;
  const hoursInMs = minutesInMs * 60;
  const daysInMs = hoursInMs * 24;

  const elapsedDays = parseInt(difference / daysInMs as any, 10);
  difference = difference % daysInMs;

  const elapsedHours = parseInt(difference / hoursInMs as any, 10);
  difference = difference % hoursInMs;

  const elapsedMinutes = parseInt(difference / minutesInMs as any, 10);
  difference = difference % minutesInMs;

  if (elapsedDays >= 1) return `${elapsedDays} days ago`;
  if (elapsedHours >= 1) return `${elapsedHours} hrs ago`;
  if (elapsedMinutes >= 1) return `${elapsedMinutes} mins ago`;
  if (elapsedMinutes < 1) return 'just now';

  return timeElapsedFormatted;
};

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};