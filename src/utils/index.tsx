export default function convertDateToString(date_Object: Date): string {
  let date_String: string =
    date_Object.getDate() +
    '/' +
    (date_Object.getMonth() + 1) +
    '/' +
    +date_Object.getFullYear();
  return date_String;
}
