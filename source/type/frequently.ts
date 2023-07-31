export type CustomPickItUp<T, K extends keyof T> = {
  [P in K]: T[P]
}

export type Filtering<T, K extends keyof T> = T extends { [P in K]: infer C } ? C : never

