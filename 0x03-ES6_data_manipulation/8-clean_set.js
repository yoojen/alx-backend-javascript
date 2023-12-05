export default function cleanSet(set, startString) {
  const fullString = [];

  if (!set || startString === '' || typeof startString !== 'string' || !(set instanceof Set)) {
    return;
  }
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      fullString.push(element.substring(startString.length));
    }
  });
    return fullString.join('-');
}
