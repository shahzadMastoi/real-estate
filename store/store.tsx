import { Instance, types } from 'mobx-state-tree';
import { initFeaturedProperty, FeaturedPrperty } from './model/featureProperty';
import { initAgency,Agency } from './model/agencies';
const RootStore = types.model({
  featureProperty: FeaturedPrperty,
  agency: Agency,
});

export type RootStoreType = Instance<typeof RootStore>;

const store = RootStore.create({
  featureProperty: initFeaturedProperty(),
  agency: initAgency()
});

export default store;
