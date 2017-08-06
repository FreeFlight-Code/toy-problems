function minMinMax(array) {
  const min = Math.min.apply(Math, array);
  const max = Math.max.apply(Math, array);
  
  const range = [];
  for (let i = min; i <= max; i++) {range.push(i)}
  
  const min2 = Math.min.apply(Math, range.filter(item => {
    return (!array.includes(item));
  })); // min2 is minimum number within range after filtering out array values
  
  return [min, min2, max];
}