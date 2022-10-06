function getData(el = []) {
  const result = [];
  for (let i of el) {
    result.push(i instanceof Object ? i.name : i);
  }
  return result;
}
export default getData;
