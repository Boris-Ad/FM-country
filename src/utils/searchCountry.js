export default function searchCountry(d, w) {
  if (w) {
    const word = w[0].toUpperCase() + w.slice(1);
    const res = d.filter(item => item.name.includes(word));
    return res;
  }
  return d;
}
