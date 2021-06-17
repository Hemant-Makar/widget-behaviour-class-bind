export class Base {
  title: string;
  value: string;
  listner: ((title: string, value: string) => void);
}
