export interface ITokenizator {
  encode(value: string): string;
  decode(token: string): string;
}
