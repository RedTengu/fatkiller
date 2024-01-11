// Redux
import { createSlice } from '@reduxjs/toolkit';

// Библиотеки
import moment from 'moment';
import 'moment/locale/ru';

// Данные с "сервера"
import { data } from '../utils/data';

const initialState = {
  user: data,
  totalKcal: 0,
  todayDate: moment().format('L'),
  // todayDate: '10.11.2023',
  isWeatherLoading: true,
  popupWeightOpen: false,
  popupKcalOpen: false,
  popupWorkoutOpen: false,
  popupChangeCityOpen: false
}

// Создать новые слайсы
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Редактирование профиля
    editUserInfo: (state, action) => {
      state.user.username = action.payload.username;
      state.user.email = action.payload.email;
      state.user.gender = action.payload.gender;
      state.user.age = action.payload.age;
      state.user.height = action.payload.height;
      state.user.weight = action.payload.weight;
      state.user.objective = action.payload.objective;
    },
    // Расчет калорий
    userTotalKcal: (state, action) => {
      state.totalKcal = action.payload;
    },
    userTotalWeight: (state) => {
      state.user.weight = state.user.weightDiary.at(-1)?.weight
    },
    // Создание постов
    userWeightPostCreate: (state, action) => {
      state.user.weightDiary.push(action.payload);
    },
    userKcalPostCreate: (state, action) => {
      state.user.kcalDiary.push(action.payload);
    },
    userWorkoutPostCreate: (state, action) => {
      state.user.workoutDiary.push(action.payload);
    },
    // Редактирование постов
    userWeightPostEdit: (state, action) => {
      const updated = state.user.weightDiary.find(i => i.id === action.payload.id);
      if (updated) {
        updated.weight = action.payload.weight;
      }    
    },
    userKcalPostEdit: (state, action) => {
      const updated = state.user.kcalDiary.find(i => i.id === action.payload.id);
      if (updated) {
        updated.name = action.payload.name;
        updated.kcal = action.payload.kcal;
      }  
    },
    userWorkoutPostEdit: (state, action) => {
      const updated = state.user.workoutDiary.find(i => i.id === action.payload.id);
      if (updated) {
        updated.name = action.payload.name;
        updated.burnedKcal = action.payload.burnedKcal;
      }
    },
    // Удаление постов
    userWeightPostDelete: (state, action) => {
      state.user.weightDiary = state.user.weightDiary.filter(i => i.id !== action.payload);
    },
    userKcalPostDelete: (state, action) => {
      state.user.kcalDiary = state.user.kcalDiary.filter(i => i.id !== action.payload);
    },
    userWorkoutPostDelete: (state, action) => {
      state.user.workoutDiary = state.user.workoutDiary.filter(i => i.id !== action.payload);
    },
    // Спиннер погоды
    weatherLoading: (state, action) => {
      state.isWeatherLoading = action.payload;
    },
    // Смена города
    changeCity: (state, action) => {
      state.user.city = action.payload.city
    },
    // Для попапов
    weightPopupOpen: (state) => {
      state.popupWeightOpen = !state.popupWeightOpen;
    },
    kcalPopupOpen: (state) => {
      state.popupKcalOpen = !state.popupKcalOpen;
    },
    workoutPopupOpen: (state) => {
      state.popupWorkoutOpen = !state.popupWorkoutOpen;
    },
    changeCityPopupOpen: (state) => {
      state.popupChangeCityOpen = !state.popupChangeCityOpen;
    },
    popupCloseAll: (state) => {
      state.popupWeightOpen = false;
      state.popupKcalOpen = false;
      state.popupWorkoutOpen = false;
      state.popupChangeCityOpen = false;
    }
  }
});

const {actions, reducer} = userSlice;

export const {
  editUserInfo,
  userTotalKcal,
  userTotalWeight,
  userWeightPostCreate,
  userKcalPostCreate,
  userWorkoutPostCreate,
  userWeightPostEdit,
  userKcalPostEdit,
  userWorkoutPostEdit,
  userWeightPostDelete,
  userKcalPostDelete,
  userWorkoutPostDelete,
  weatherLoading,
  changeCity,
  weightPopupOpen,
  kcalPopupOpen,
  workoutPopupOpen,
  changeCityPopupOpen,
  popupCloseAll,
} = actions;

export default reducer;