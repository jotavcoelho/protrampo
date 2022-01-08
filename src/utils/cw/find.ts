export function findActsContainingBlock(block: number, cwArray: string[]): string[] {
  const blockString = String.raw`bloco 0?${block}\W`;
  
  const blockRegExp = new RegExp(blockString, 'i');
  
  const actsContainingBlock = cwArray.filter(act => {
    return (act.search(blockRegExp) > 0)
  });

  // const blockCheckString = String.raw`(residente.*bloco 0?${block}\W)|(limite.*bloco)?`
  const blockCheckString = String.raw`bloco 0?[^${block}]\W.*(residente|limit).*bloco 0?${block}\W`
  const blockCheckRegExp = new RegExp(blockCheckString, 'i')
  // gotta rethink this regex, maybe sleeping on it will help
  const actsWithoutFakeBlocks = actsContainingBlock.filter(act => {
    return (act.search(blockCheckRegExp) < 0)
  })
  
  return actsWithoutFakeBlocks;
  // 1 is a special case, gotta do it next
  // 2 and 3 only exist on onus
  // 4 has three extras (counting with onus)
  // 5 too
  // 6, 7 and 8 no occurence
  // 9 has five extras
}

export function findApartmentInBlock(apto: number, actsContainingBlock: string[]): string[] {
  const searchParamsRaw = String
    .raw`((apartamento\s[n.º]*\s?0*${apto}\W)|(Apt[oº°]*\.?\s0*${apto}\W))`;
  const searchParamsRegEx = new RegExp(searchParamsRaw, 'i');

  const apartmentActs = actsContainingBlock.filter(act => {
    return (act.search(searchParamsRegEx) > 0);
  });

  console.log(apartmentActs);

  const fakeAptCheckRaw = String
    .raw`((apartamento\s[n.º]*\s?0*(?:(?!${apto}).)\d?\d?\d\W)|(Apt[oº°]*\.?\s0*(?:(?!${apto}).)\d?\d?\d\W)).*(residente|limit).*((apartamento\s[n.º]*\s?0*${apto}\W)|(Apt[oº°]*\.?\s0*${apto}\W))`;
      // I have to find a way of making this smaller, what the hell, there must be something
      // maybe if I divide each part of the regex into different variables
      // gonna try later, first we have to make sure it works
    
  const fakeAptCheckRegEx = new RegExp(fakeAptCheckRaw, 'i');

  const aptActsWithoutFakes = apartmentActs.filter(act => {
    return (act.search(fakeAptCheckRegEx) < 0)
  })

  return aptActsWithoutFakes;
}