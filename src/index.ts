import iterable from '@async-generators/iterable';

export default async function <T>(source: AsyncIterable<T> | Iterable<T>) {
  let items: T[] = [];
  for await (let item of iterable(source)) {
    items.push(item);
  }
  return items;
}