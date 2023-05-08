import { ImageSize, Colors } from '@resources/index';

export const Styles = {
  flex1: { flex: 1 },
  flex: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  flexEnd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  button: {
    height: 42,
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonBlank: {
    height: 42,
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: Colors.line,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarLage: {
    height: ImageSize.imageLage,
    width: ImageSize.imageLage,
    borderRadius: ImageSize.imageLage / 2,
  },
  flexWrapCenter: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};
