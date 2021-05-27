// it only capitalizes the first letter for real
// means, caps-only text will stay the same
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
