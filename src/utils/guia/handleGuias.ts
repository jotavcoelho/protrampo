interface GuiaValues {
  emol: number;
  tsnr: number;
  ferm: number;
  funseg: number;
  ferc: number;
  iss: number;
  total: number;
}

interface GuiaValuesString {
  emol: string;
  tsnr: string;
  ferm: string;
  funseg: string;
  ferc: string;
  iss: string;
  total: string;
}

export function subtractValues(val1: number, val2: number): string {
  return Math.abs(((val1 * 100) - (val2 * 100)) / 100).toFixed(2);
}

export function sumValues(val1: number, val2: number): string {
  return Math.abs(((val1 * 100) + (val2 * 100)) / 100).toFixed(2);
}

export function subtractGuias(guia1: GuiaValues, guia2: GuiaValues): GuiaValuesString {
  // const resultingGuia = {
  //   emol: Math.abs((parseInt(String(guia1.emol * 100)) - parseInt(String(guia2.emol * 100))) / 100),
  //   tsnr: Math.abs((parseInt(String(guia1.tsnr * 100)) - parseInt(String(guia2.tsnr * 100))) / 100),
  //   ferm: Math.abs((parseInt(String(guia1.ferm * 100)) - parseInt(String(guia2.ferm * 100))) / 100),
  //   funseg: Math.abs((parseInt(String(guia1.funseg * 100)) - parseInt(String(guia2.funseg * 100))) / 100),
  //   ferc: Math.abs((parseInt(String(guia1.ferc * 100)) - parseInt(String(guia2.ferc * 100))) / 100),
  //   iss: Math.abs((parseInt(String(guia1.iss * 100)) - parseInt(String(guia2.iss * 100))) / 100),
  //   total: Math.abs((parseInt(String(guia1.total * 100)) - parseInt(String(guia2.total * 100))) / 100),
  // } // this was wrong, toFixed is da wae
  const resultingGuia = {
    emol: subtractValues(guia1.emol, guia2.emol),
    tsnr: subtractValues(guia1.tsnr, guia2.tsnr),
    ferm: subtractValues(guia1.ferm, guia2.ferm),
    funseg: subtractValues(guia1.funseg, guia2.funseg),
    ferc: subtractValues(guia1.ferc, guia2.ferc),
    iss: subtractValues(guia1.iss, guia2.iss),
    total: subtractValues(guia1.total, guia2.total),
  }

  return resultingGuia;
}

export function sumGuias(guia1: GuiaValues, guia2: GuiaValues): GuiaValuesString {
  const resultingGuia = {
    emol: sumValues(guia1.emol, guia2.emol),
    tsnr: sumValues(guia1.tsnr, guia2.tsnr),
    ferm: sumValues(guia1.ferm, guia2.ferm),
    funseg: sumValues(guia1.funseg, guia2.funseg),
    ferc: sumValues(guia1.ferc, guia2.ferc),
    iss: sumValues(guia1.iss, guia2.iss),
    total: sumValues(guia1.total, guia2.total),
  }

  return resultingGuia;
}

export function calculateGuias (operation: string, guia1: GuiaValues, guia2: GuiaValues): GuiaValuesString {
  // return (operation == 'Subtrair') ? subtractGuias(guia1, guia2) : sumGuias(guia1, guia2)
  // operation should have only two possible values, I have to be careful about this
  if (operation == 'Subtrair')
    return subtractGuias(guia1, guia2)
  else if (operation == 'Somar')
    return sumGuias(guia1, guia2)
  // else
  //   console.log("operation is neither somar or subtrair")
}
