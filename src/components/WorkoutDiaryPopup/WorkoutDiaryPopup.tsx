import DiaryPopup from "../DiaryPopup/DiaryPopup";

function WorkoutDiaryPopup() {
  return (
    <DiaryPopup isOpen={false}>
      <input
        className="diary-popup__text-input" 
        type="text"
        name="name"
        placeholder="Название" />
      <input
        className="diary-popup__text-input" 
        type="number"
        name="burnedKcal"
        placeholder="Сожженые калории" />
    </DiaryPopup>
  );
}

export default WorkoutDiaryPopup;