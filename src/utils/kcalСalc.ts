function kcalCalc (gender: string, age: number, weight: number, height: number, objective: string): number {

  const menKcal: number = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  const femaleKcal: number = (10 * weight) + (6.25 * height) - (5 * age) - 161;

  if (objective === 'loss') {
    return Math.floor(gender === 'M' ? menKcal - (menKcal * 0.1) : femaleKcal - (femaleKcal * 0.1));
  }
  if (objective === 'safe') {
    return Math.floor(gender === 'M' ? menKcal : femaleKcal);
  }
  if (objective === 'gain') {
    return Math.floor(gender === 'M' ? menKcal + (menKcal * 0.1) : femaleKcal + (femaleKcal * 0.1));
  }
  return 0;
}

export default kcalCalc;