export class Content {
  private readonly content: string;

  private validadeContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    if (!this.validadeContentLength(content)) {
      throw new Error(
        'The content length must be between 5 and 240 characters.',
      );
    }
    this.content = content;
  }

  get value(): string {
    return this.content;
  }
}
