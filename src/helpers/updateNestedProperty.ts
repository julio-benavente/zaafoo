type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

const updateNestedProperty = <T>(obj: T, update: DeepPartial<T>): T => {
  console.log(obj);
  const result = { ...obj };

  console.log(result);

  for (const key in update) {
    if (update.hasOwnProperty(key)) {
      if (typeof update[key] === "object" && !Array.isArray(update[key])) {
        result[key] = updateNestedProperty(result[key], update[key]!);
      } else {
        result[key] = update[key] as any;
      }
    }
  }
  console.log(result);
  return result;
};

export default updateNestedProperty;
