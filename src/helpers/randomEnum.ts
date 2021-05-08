export const randomEnum = <T>(enumeration: T): T[keyof T] => {
  const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];

  return enumeration[enumKey];
};
