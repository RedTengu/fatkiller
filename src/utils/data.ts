type dataType = {
  username: string,
  email: string,
  age: number,
  gender: string,
  height: number,
  weight: number,
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

export const data: dataType = {
  username: 'Мурат',
  email: 'mb@gmail.com',
  age: 28,
  gender: 'M',
  height: 183,
  weight: 84,
  objective: 'loss',
  weightDiary: [
    {
      id: 'yNhMusf8nweB12p0RgYhv',
      weight: 78,
      date: '10.11.2023 10:05'
    },
    {
      id: 'm1zVmCH90TASytQRahazN',
      weight: 79,
      date: '09.11.2023 09:55'
    },
    {
      id: 'dQsZA9BQTYNH7Ux71_Axc',
      weight: 80,
      date: '08.11.2023 10:01'
    }
  ],
  kcalDiary: [
    {
      id: '9YIddkTNN9EMCCXJEaSf7',
      name: 'Ужин',
      kcal: 600,
      date: '10.11.2023 17:30'
    },
    {
      id: 'FRNVGtxYrP0uOvIZuhkId',
      name: 'Обед',
      kcal: 210,
      date: '10.11.2023 13:10'
    },
    {
      id: 'DeE9q9I8IBtUm6ZKXZzaL',
      name: 'Завтрак',
      kcal: 200,
      date: '10.11.2023 10:02'
    }
  ],
  workoutDiary: [
    {
      id: 'fAlEYW_VOT7EoLxmEJ5',
      name: 'Бег',
      burnedKcal: 150,
      date: '10.11.2023 16:00'
    }
  ]
}