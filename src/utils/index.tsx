export function createRows(data, columns) {
  const rows = Math.floor(data.length / columns);
  let lastRowElements = data.length - rows * columns;
  while (lastRowElements !== columns) {
    data.push({
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true,
    });
    lastRowElements += 1;
  }
  return data;
}
