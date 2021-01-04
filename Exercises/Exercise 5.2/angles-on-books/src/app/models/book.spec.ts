import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book('', '', '', -1)).toBeTruthy();
  });
});
