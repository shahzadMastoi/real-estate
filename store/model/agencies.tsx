import { flow, types } from 'mobx-state-tree';
import { toJS } from 'mobx';
import { getAgencies } from '../../api/property';
import { postAgencies } from '../../api/property';

const Asset = types.model({
  id: types.maybeNull(types.number),
  img: types.maybeNull(types.string),
  title: types.maybeNull(types.string),
  location: types.maybeNull(types.string),
  properties: types.maybeNull(types.string),
  agents: types.maybeNull(types.string),
  description: types.maybeNull(types.string),
  phone: types.maybeNull(types.string),
});

export const Agency = types.model({
  agencies: types.optional(types.array(Asset), []),
})


.views((self) => ({
  get getData() {
    return toJS(self.agencies);
  },
}))


.actions((self) => {
  
  const getAgency = flow(function* () {
    try {
      const data = yield getAgencies()      
      return self.agencies = data
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  });

  const postAgency = flow(function* (data) {    
    try {
      const datas = yield postAgencies(data)      
      return self.agencies = datas
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  });

  return {
    getAgency,
    postAgency,
  };
});

export function initAgency() {
  return Agency.create({});
}
