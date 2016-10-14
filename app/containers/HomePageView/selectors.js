import { createSelector } from 'reselect';

/**
 * Direct selector to the homePageView state domain
 */
const selectHomePageViewDomain = () => (state) => state.get('homePageView');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomePageView
 */

const selectHomePageView = () => createSelector(
  selectHomePageViewDomain(),
  (substate) => substate.toJS()
);

export default selectHomePageView;
export {
  selectHomePageViewDomain,
};
