import { createSelector } from 'reselect';

/**
 * Direct selector to the cartPageView state domain
 */
const selectCartPageViewDomain = () => (state) => state.get('cartPageView');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CartPageView
 */

const selectCartPageView = () => createSelector(
  selectCartPageViewDomain(),
  (substate) => substate.toJS()
);

export default selectCartPageView;
export {
  selectCartPageViewDomain,
};
