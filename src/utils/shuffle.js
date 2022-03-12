export const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i].number, a[j].number] = [a[j].number, a[i].number];
  }
  return a;
};
