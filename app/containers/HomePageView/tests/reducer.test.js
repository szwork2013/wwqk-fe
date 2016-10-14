import expect from 'expect';
import homePageViewReducer from '../reducer';
import { fromJS } from 'immutable';

describe('homePageViewReducer', () => {
  it('returns the initial state', () => {
    expect(homePageViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
