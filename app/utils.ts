export function getYearFromDate(dateString: string) {
  const parts = dateString.split("-");
  if (parts.length === 3) {
    return parts[0];
  } else {
    return "Invalid Date";
  }
}
