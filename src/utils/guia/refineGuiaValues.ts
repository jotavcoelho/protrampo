export function BRLToFloat(currValue: string): number {
  const dotLess = currValue.replace('.', '');
  const commaToDot = dotLess.replace(',', '.');
  const currencyLess = commaToDot.slice(3);

  return Number(currencyLess);

  // this is one of some examples of "writing for understandability"
  // I'm pretty sure this whole function could've been "simply":
  //   return currValue.replace('.', '').replace(',', '.').commaToDot.slice(3)
  // but this would be horrible to read/understand if I ever needed to for debugging
}

export function floatToBRL(value: string): string {
  // const stringed = String(currValue);
  // const dotToComma = value.replace('.', ',');
  // const withCurrency = ('R$ ' + dotToComma);
  const withCurrency = new Intl.NumberFormat('pt-BR', { 
    style: 'currency', currency: 'BRL'
  }).format(Number(value));

  return withCurrency.replace(/\s/, ' ')
  // the string that .format() returns has a different char code for whitespace than usual
  // and that fucks up testing
}

interface GuiaValuesData {
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

interface GuiaData {
  guiaType: string;
  guiaValues: GuiaValuesData;
}

export function refineGuiaValues(roughGuia: string): GuiaData {
  const guiaArray = roughGuia.split('\n');

  const guiaType = guiaArray[0];

  const guiaRoughValues = guiaArray.filter(
    value => value.includes(',')
  );

  const guiaNumberValues = guiaRoughValues.map(
    value => BRLToFloat(value)
  );

// Emolumento
// TSNR
// FERM
// FUNSEG
// FERC
// ISS
// TOTAL 

  return {
    guiaType,
    guiaValues: {
      emol: guiaNumberValues[0],
      tsnr: guiaNumberValues[1],
      ferm: guiaNumberValues[2],
      funseg: guiaNumberValues[3],
      ferc: guiaNumberValues[4],
      iss: guiaNumberValues[5],
      total: guiaNumberValues[6],
    },
  }
}

export function putCurrency(guiaValues: GuiaValuesString) {
  const guiaValuesWithCurrency = {
    emol: floatToBRL(guiaValues.emol),
    tsnr: floatToBRL(guiaValues.tsnr),
    ferm: floatToBRL(guiaValues.ferm),
    funseg: floatToBRL(guiaValues.funseg),
    ferc: floatToBRL(guiaValues.ferc),
    iss: floatToBRL(guiaValues.iss),
    total: floatToBRL(guiaValues.total),
  }

  return guiaValuesWithCurrency;
}
