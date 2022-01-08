export function cpfWOutDV(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9;

  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  // value = value.replace(/(\d{3})(\d)/,"$1.$2")
  // value = value.replace(/(\d{3})(\d)/,"$1.$2")

  // value = value.replace(/(\d{3})/g, '$1.');
  
  e.currentTarget.value = value;
  console.log(value)
  return e;
}