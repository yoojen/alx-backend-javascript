export default function cleanSet(set, startString) {
  const fullString = [];

  if (!set || startString === '' || typeof startString !== 'string' || !(set instanceof Set)) {
    return ";
  }
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
       if (element !== value) {
      fullString.push(element.substring(startString.length));
      }
    }
  });
    return fullString.join('-');
}
