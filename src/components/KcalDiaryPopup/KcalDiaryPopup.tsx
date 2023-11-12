import DiaryPopup from "../DiaryPopup/DiaryPopup";

function KcalDiaryPopup() {
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
        name="kcal"
        placeholder="Употребленные калории" />
    </DiaryPopup>
  );
}

export default KcalDiaryPopup;