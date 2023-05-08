import addressProvider from '@data-access/address-provider';
import cacheUtils from '@utils/cache-utils';
export default {
  state: {
    listDistrict: [],
    listZone: [],
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    getAllDistrict: () => {
      return new Promise(async () => {
        const data = await cacheUtils.read('', 'DATA-DICTRICT', []);
        dispatch.address.updateData({
          listDistrict: data,
        });
        addressProvider
          .searchDistrict({ page: 0, size: 9999 })
          .then((s) => {
            if (s.data?.code == 0) {
              cacheUtils.save('', 'DATA-DICTRICT', s.data.data || []);
              dispatch.address.updateData({
                listDistrict: s.data.data,
              });
            }
          })
          .catch(() => {});
      });
    },
    getAllZone: (payload = {}) => {
      return new Promise(async () => {
        const dmQuanHuyenId = payload.dmQuanHuyenId;
        const data = await cacheUtils.read(dmQuanHuyenId, 'DATA-ZONE', []);
        dispatch.address.updateData({
          listZone: data,
        });
        addressProvider
          .searchZone({ page: 0, size: 9999, dmQuanHuyenId: dmQuanHuyenId })
          .then((s) => {
            if (s.data?.code == 0) {
              cacheUtils.save(dmQuanHuyenId, 'DATA-ZONE', s.data.data || []);
              dispatch.address.updateData({
                listZone: s.data.data,
              });
            }
          })
          .catch(() => {});
      });
    },
  }),
};
