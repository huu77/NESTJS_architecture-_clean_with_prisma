export  type WhereFilter<T> = {
    [P in keyof T]?: T[P] | {
      equals?: T[P],
      in?: T[P][],
      notIn?: T[P][],
      lt?: T[P],
      lte?: T[P],
      gt?: T[P],
      gte?: T[P],
      contains?: string,
      startsWith?: string,
      endsWith?: string,
      not?: WhereFilter<T[P]>,
    }
  };
  