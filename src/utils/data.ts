// Interface
import { IData } from "./IData"

// Имитация данных пришедших с сервера.
export const data: IData = {
  username: 'Мурат',
  email: 'mb@gmail.com',
  country: 'Россия',
  city: 'Ставрополь',
  age: 28,
  gender: 'M',
  height: 183,
  weight: 78,
  objective: 'loss',
  weightDiary: [
    {
      id: 'dQsZA9BQTYNH7Ux71_Axc',
      weight: 80,
      date: '08.11.2023'
    },
    {
      id: 'm1zVmCH90TASytQRahazN',
      weight: 79,
      date: '09.11.2023'
    },
    {
      id: 'yNhMusf8nweB12p0RgYhv',
      weight: 78,
      date: '10.11.2023'
    },
  ],
  kcalDiary: [
    {
      id: 'DeE9q9I8IBtUm6ZKXZzaL',
      name: 'Завтрак',
      kcal: 200,
      date: '10.11.2023'
    },
    {
      id: 'FRNVGtxYrP0uOvIZuhkId',
      name: 'Обед',
      kcal: 210,
      date: '10.11.2023'
    },
    {
      id: '9YIddkTNN9EMCCXJEaSf7',
      name: 'Ужин',
      kcal: 600,
      date: '10.11.2023'
    },
  ],
  workoutDiary: [
    {
      id: 'fAlEYW_VOT7EoLxmEJ5',
      name: 'Бег',
      burnedKcal: 150,
      date: '10.11.2023'
    }
  ]
}