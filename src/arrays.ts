export default class Arrays<T> {
  /* Найти индекс первый совпадающего с val элемента в массиве */
  indexOf(arr: T[], val: T): number {
    // return arr.indexOf(val);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val)
        return i;
    }
    return -1;
  }

  /* Суммировать все элементы массива */
  sum(arr: T[]): number {
    return 0;
  }

  /* Удалить все соответствующие val элементы массива и вернуть новый массив */
  remove(arr: T[], val: T): T[] {
    return [];
  }

  /* Удалить все соответствующие val элементы массива и вернуть исходный массив */
  removeWithoutCopy(arr: T[], val: T): T[] {
    return [];
  }

  /* Добавить элемент в конец исходного массива и вернуть этот массив */
  append(arr: T[], val: T): T[] {
    return [];
  }

  /* Удалить элемент из конца исходного массива и вернуть этот массив */
  truncate(arr: T[]): T[] {
    return arr;
  }

  /* Добавить элемент в начало исходного массива и вернуть этот массив */
  prepend(arr: T[], val: T): T[] {
    return arr;
  }

  /* Удалить элемент из начала исходного массива и вернуть этот массив */
  curtail(arr: T[]): T[] {
    return arr;
  }

  /* Объеденить элементы двух массивов в новом массиве */
  concat(arr1: (string|number)[], arr2: (string|number)[]): (string|number)[] {
    return [];
  }

  /* Вставить элемент по индексу в исходный массив и вернуть его */
  insert(arr: T[], item: T, index: number): T[] {
    return arr;
  }

  /* Посчитать количество вхождение элемента item в исходном массиве arr */
  count(arr: T[], item: T): number {
    return 0;
  }

  /* Найти все дублирующиеся элементы в массиве и вернуть новый массив содержащий только эти элементы */
  duplicates(arr: T[]): T[] {
    return [];
  }

  /* Возвести все элементы в массиве в степень 2 */
  square(arr: T[]): T[] {
    return [];
  }

  findAllOccurrences(arr: T[], target: T): T[] {
    return [];
  }
}
