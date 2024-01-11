export interface IData {
  username: string,
  email: string,
  country: string,
  city: string,
  age: number,
  gender: string,
  height: number,
  weight: number | undefined,
  objective: string,
  weightDiary: {
    id: string,
    weight: number,
    date: string
  }[],
  kcalDiary: {
      id: string,
      name: string,
      kcal: number,
      date: string
  }[],
  workoutDiary:{
      id: string,
      name: string,
      burnedKcal: number,
      date: string
  }[]
}