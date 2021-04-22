export class KeyFormatMatcher {
  private readonly regExp: RegExp
  constructor(input: string) {
    switch (input) {
      case 'snake_case':
        this.regExp = KeyFormatMatcher.snakeCase;
        break;
      case 'camelCase':
        this.regExp = KeyFormatMatcher.camelCase;
        break;
      case 'PascalCase':
        this.regExp = KeyFormatMatcher.pascalCase;
        break;
      case 'kebab-case':
        this.regExp = KeyFormatMatcher.kebabCase;
      default:
        this.regExp = new RegExp(input);
        break;
    }
  }

  private static snakeCase = /^([a-z0-9_])*$/g;
  private static camelCase = /^([a-z0-9])([a-zA-Z0-9])*$/g;
  private static pascalCase = /^([A-Z0-9])([a-zA-Z0-9])*$/g;
  private static kebabCase = /^([a-z0-9-])*$/g;

  public isCorrectCase(key: string): boolean {
    return key.match(this.regExp)?.length === 1;
  }
}