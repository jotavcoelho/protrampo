export function calcDV(cpf: string): string {
  const cpfArray = cpf.split('').map(curr => Number(curr));

  const totalDV1 = cpfArray.reduce((total, current, index) => (current * (10 - index)) + total, 0)

  const totalDV1Remainder = totalDV1 % 11;
  let dv1;
  switch (totalDV1Remainder) {
    case 0:
    case 1:
      dv1 = 0;
      break;
  
    default:
      dv1 = 11 - totalDV1Remainder
      break;
  }

  cpfArray.push(dv1);

  const totalDV2 = cpfArray.reduce((total, current, index) => (current * (11 - index)) + total, 0)

  const totalDV2Remainder = totalDV2 % 11;
  let dv2;
  switch (totalDV2Remainder) {
    case 0:
    case 1:
      dv2 = 0;
      break;
  
    default:
      dv2 = 11 - totalDV2Remainder
      break;
  }

  cpfArray.push(dv2);

  return cpfArray.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}