import {SearchBloc} from './SearchBloc';
import {SearchRepository} from '../repositories/SearchRepository';

jest.mock('../repositories/SearchRepository');

describe('Given SearchBloc', () => {
  let repository;
  let bloc;
  const searchQuery = 'John Doe';

  beforeEach(() => {

    (SearchRepository as jest.Mock<SearchRepository>).mockImplementation(() => ({
      search: jest.fn(() => {
        return Promise.resolve(['John Doe']);
      }),
    }));

    repository = new SearchRepository();
    bloc = new SearchBloc(repository);
  });

  describe('When query is not set and get preamble is called', () => {
    it('should return empty string', () => {
      expect(bloc.preamble).toEqual('');
    });
  });

  describe(`Given query is set to ${searchQuery}`, () => {
    const expected = `Results for ${searchQuery}`;
    it(`should return ${expected}`, () => {
      bloc.executeSearch(searchQuery);
      expect(bloc.preamble).toEqual(expected);
    });
  });

  describe(`Given executeSearch is called with ${searchQuery}`, () => {
    it(`should call the repository.search method and set the results`, async () => {
      await bloc.executeSearch(searchQuery);
      expect(repository.search).toHaveBeenCalled();
      expect(bloc.results).toEqual(['John Doe']);
    });
  });

});


