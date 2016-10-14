import expect from 'expect';
import cartPageViewReducer from '../reducer';
import { fromJS } from 'immutable';

describe('cartPageViewReducer', () => {
  it('returns the initial state', () => {
    expect(cartPageViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
