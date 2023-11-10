type dataType = {
  username: string,
  email: string,
  gender: string,
  height: number,
  objective: string,
  weightDiary: {
    id: number,
    weight: number,
    date: string
  }[],
  kcalDiary: {
      id: number,
      name: string,
      kcal: number,
      date: string
  }[],
  workoutDiary:{
      id: number,
      name: string,
      kcalReduce: number,
      date: string
  }[]
}

export const data: dataType = {
  username: 'Мурат',
  email: 'mb@gmail.com',
  gender: 'M',
  height: 183,
  objective: 'Похудение',
  weightDiary: [
    {
      id: 1,
      weight: 78,
      date: '10.11.2023 10:05'
    },
    {
      id: 2,
      weight: 79,
      date: '09.11.2023 09:55'
    },
    {
      id: 3,
      weight: 80,
      date: '08.11.2023 10:01'
    }
  ],
  kcalDiary: [
    {
      id: 1,
      name: 'Ужин',
      kcal: 600,
      date: '10.11.2023 17:30'
    },
    {
      id: 2,
      name: 'Обед',
      kcal: 210,
      date: '10.11.2023 13:10'
    },
    {
      id: 3,
      name: 'Завтрак',
      kcal: 200,
      date: '10.11.2023 10:02'
    }
  ],
  workoutDiary: [
    {
      id: 1,
      name: 'Бег',
      kcalReduce: 150,
      date: '10.11.2023 16:00'
    }
  ]
}