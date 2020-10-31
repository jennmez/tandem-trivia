//implementation of the Fisher-Yates Algorithm

export default function shuffle(array) {
  let startAtEnd = array.length - 1;
  for (let i = startAtEnd; i > 0; i--) {
    //Pick a random number j between one and the number of unstruck numbers remaining (inclusive).
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export function addKey(array) {
  let value = 1;
  array.forEach((item) => {
    item.id = value;
    value++;
  });
}
