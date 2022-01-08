export function refine(text: string): string[] {
  const roughArray = text.split('\n');
  const refinedArray = roughArray
    .filter(curr => (curr != ""))
    .slice(3);
  
  return refinedArray;
}
