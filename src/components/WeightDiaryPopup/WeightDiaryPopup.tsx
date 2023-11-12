import DiaryPopup from "../DiaryPopup/DiaryPopup";

function WeightDiaryPopup() {
  return (
    <DiaryPopup isOpen={false}>
      <input
        className="diary-popup__text-input" 
        type="number"
        name="currentWeight"
        placeholder="Текущий вес" />
    </DiaryPopup>
  );
}

export default WeightDiaryPopup;