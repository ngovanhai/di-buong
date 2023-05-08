import { client } from '@client/request';
import { LOGIN, UPDATE_USER } from '@client/api';

module.exports = {
  onLogin: (payload) => {
    return new Promise((resolve, reject) => {
      client
        .post(`${LOGIN}`, payload)
        .then((s) => {
          if (s && s.length) {
            const data = s[0];
            if (data.success == '01') {
              resolve(data);
              return;
            }
          }
          reject(s);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  onUpdate: ({ IDKhachHang, ...payload }) => {
    return new Promise((resolve, reject) => {
      client
        .post(`${UPDATE_USER}`, {
          IDKhachHang: IDKhachHang.toUpperCase(),
          loai: 14,
          ...payload,
        })
        .then((s) => {
          if (s[0].success == '01') resolve(s);
          else reject(s);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
  onChangePassword: ({ IDKhachHang, ...payload }) => {
    return new Promise((resolve, reject) => {
      client
        .post(`${UPDATE_USER}`, {
          IDKhachHang: IDKhachHang.toUpperCase(),
          loai: 15,
          ...payload,
        })
        .then((s) => {
          if (s[0].success == '01') resolve(s);
          else reject(s);
        })
        .catch((e) => {
          reject(e);
        });
    });
  },
};
