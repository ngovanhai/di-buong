import { Images } from '@resources/index';
import userProvider from '@data-access/user-provider';
import snackbar from '@utils/snackbar-utils';
import cacheUtils from '@utils/cache-utils';
import { refModalLoading } from '@src/index';
export default {
  state: {
    auth: null,
    dataSocial: [
      {
        id: 1,
        name: 'Facebook',
        show: true,
        img: Images.fb,
      },
      {
        id: 3,
        name: 'Apple',
        show: true,
        img: Images.apple,
      },
      {
        id: 2,
        name: 'Google',
        show: true,
        img: Images.gg,
      },
      {
        id: 4,
        name: 'Zalo',
        show: true,
        img: Images.zalo,
      },
    ],
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    onLogin: ({ tendangnhap, matkhau }, state) => {
      return new Promise((resolve, reject) => {
        refModalLoading.current.show({});
        userProvider
          .onLogin({
            tendangnhap,
            matkhau,
          })
          .then((data) => {
            refModalLoading.current.hide({});
            if (data) cacheUtils.save('', 'AUTH', data || {});
            dispatch.auth.updateData({
              auth: data,
            });
            resolve(data);
          })
          .catch((e) => {
            snackbar.show('Đăng nhập không thành công', 'danger');
            refModalLoading.current.hide({});
            reject(e);
          });
      });
    },
    onUpdateInfo: async (payload, state) => {
      const { IDKhachHang } = state.auth.auth;
      refModalLoading.current.show({});
      try {
        const s = await userProvider.onUpdate({ IDKhachHang, ...payload.data });
        snackbar.show('Cập nhật thông tin thành công', 'success');
        return s;
      } catch (error) {
        snackbar.show('Cập nhật thông tin không thành công', 'danger');
        return null;
      } finally {
        refModalLoading.current.hide({});
      }
    },
    onChangePassword: async (payload, state) => {
      const { IDKhachHang, TenDangNhap } = state.auth.auth;
      refModalLoading.current.show({});
      try {
        const s = await userProvider.onChangePassword({
          IDKhachHang,
          TenDangNhap,
          MatKhau: payload.MatKhau,
        });
        snackbar.show('Cập nhật thông tin thành công', 'success');
        return s;
      } catch (error) {
        snackbar.show('Cập nhật thông tin không thành công', 'danger');
        return null;
      } finally {
        refModalLoading.current.hide({});
      }
    },
    onSocialLogin: async (payload, state) => {
      try {
        const data = await userProvider.socialEvent(payload);
        if (data?.code == 0) {
          cacheUtils.save('', 'AUTH', data?.data?.user || {});
          cacheUtils.save('', 'profile', data?.data?.profile || {});
          dispatch.auth.updateData({
            auth: data?.data?.user,
            profile: data?.data?.profile,
          });
          return true;
        } else {
          snackbar.show(data?.message, 'danger');
          return false;
        }
      } catch (error) {
        snackbar.show(error?.message, 'danger');
        return false;
      }
    },
    onRegiter: async (payload, state) => {
      try {
        const data = await userProvider.register(
          payload?.phone || '',
          payload?.password || '',
          payload?.dialCode || '',
          payload?.isofhcareCode || '',
        );
        if (data?.code == 0 || data?.code == 13) {
          return data.data;
        } else {
          snackbar.show(data?.message, 'danger');
          return null;
        }
      } catch (error) {
        snackbar.show(error?.message, 'danger');
        return null;
      }
    },
    onLogout: (payload, state) => {
      return new Promise((resolve, reject) => {
        cacheUtils.save('', 'AUTH', null);
        dispatch.auth.updateData({
          auth: null,
        });
        resolve(true);
      });
      //
    },
    onCheckOtpPhone: async (payload, state) => {
      try {
        let res = await userProvider.checkOtpPhone(payload?.id, payload?.text);
        if (res.code === 0) {
          return res;
        }
        if (res.code === 3) {
          snackbar.show('Mã xác thực không đúng', 'danger');
          return;
        }
        if (res.code === 4) {
          snackbar.show('Mã xác thực hết hạn', 'danger');
          return;
        } else {
          snackbar.show('Có lỗi xảy ra, xin vui lòng thử lại', 'danger');
        }
      } catch (error) {
        console.log(error);
        snackbar.show('Có lỗi xảy ra, xin vui lòng thử lại', 'danger');
      }
    },
  }),
};
