export class Email {
  private readonly type = 'Email';

  constructor(readonly raw: string) {}

  static from(email: string) {
    if (!email.includes('@')) {
      throw new Error('Invalid email!');
    }
    return new Email(email);
  }
}
