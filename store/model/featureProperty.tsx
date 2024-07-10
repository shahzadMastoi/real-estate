import { flow, types } from 'mobx-state-tree';
import { toJS } from 'mobx';
import { getFeaturedProperty } from '../../api/property';
import { postFeaturedProperty } from '../../api/property';

const Asset = types.model({
  id: types.maybeNull(types.number),
  imageSrc: types.maybeNull(types.string),
  status: types.maybeNull(types.string),
  cameraCount: types.maybeNull(types.number),
  title: types.maybeNull(types.string),
  location: types.maybeNull(types.string),
  addedDate: types.maybeNull(types.string),
  sqFootage: types.maybeNull(types.string),
  bedrooms: types.maybeNull(types.string),
  bathrooms: types.maybeNull(types.string),
  carSpaces: types.maybeNull(types.string),
  price: types.maybeNull(types.string),
});

export const FeaturedPrperty = types.model({
  propertyData: types.optional(types.array(Asset), []),
})


.views((self) => ({
  get getData() {
    return toJS(self.propertyData);
  },
}))


.actions((self) => {
  
  const getFeaturedPrperty = flow(function* () {
    try {
      const data = yield getFeaturedProperty()
      return self.propertyData = data
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  });

  const postFeaturProperty = flow(function* (data) {
    try {
      const datas = yield postFeaturedProperty(data)
      return self.propertyData = datas
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  });

  return {
    getFeaturedPrperty,
    postFeaturProperty,
  };
});

export function initFeaturedProperty() {
  return FeaturedPrperty.create({});
}
