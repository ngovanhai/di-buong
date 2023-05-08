import ActivityPanel from '@components/ActivityPanel';
import { Colors, Fonts, Images, Spacing } from '@resources/index';
import permission from 'mainam-react-native-permission';
import ScaledImage from 'mainam-react-native-scaleimage';
import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageView from 'react-native-image-viewing';
import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';

let dirs = RNFetchBlob.fs.dirs;

function PhotoViewerScreen(props) {
  const [index, setIndex] = useState(props.navigation.getParam('index', 0));
  const [urls, seturls] = useState(props.navigation.getParam('urls', []));
  const [visible, setIsVisible] = useState(true);
  const [id, setId] = useState(0);
  const close = () => {
    props.navigation.pop();
  };
  const header = () => {
    return (
      <View style={styles.viewHeader}>
        <Text style={styles.txIndex}>{id + 1 + '/' + urls.length}</Text>
        <TouchableOpacity onPress={close} style={styles.btnCancel}>
          <ScaledImage
            height={20}
            style={styles.colorImg}
            source={Images.ic_close}
          ></ScaledImage>
        </TouchableOpacity>
      </View>
    );
  };
  const footer = () => {
    return (
      <TouchableOpacity onPress={onDownload} style={styles.btnDownload}>
        <Text style={styles.txDownload}>Tải xuống</Text>
      </TouchableOpacity>
    );
  };
  const onDownload = async () => {
    let url = urls[id].uri;
    await permission.requestStoragePermission((s) => {
      if (s) {
        let index = url.lastIndexOf('/');
        let filename = '';
        if (index != -1) {
          filename = url.substring(index + 1);
        } else {
          filename = new Date().getTime() + '';
        }
        let config = {
          fileCache: true,
        };

        if (Platform.OS == 'android') {
          config.path = dirs.PictureDir + '/' + filename;
          config.addAndroidDownloads = {
            useDownloadManager: true,
            notification: true,
            description: 'File downloaded by download manager.',
          };
        } else {
          config.path = dirs.DocumentDir + '/' + filename;
        }
        RNFetchBlob.config(config)
          .fetch('GET', url)
          .then((resp) => {
            Share.open({
              title: 'Chia sẻ',
              url: 'file://' + resp.path(),
            });
          })
          .catch((err) => {});
      }
    });
  };

  return (
    <ActivityPanel
      containerStyle={styles.container}
      hideActionbar={true}
      showFullScreen={true}
    >
      <ImageView
        FooterComponent={footer}
        HeaderComponent={header}
        onImageIndexChange={(imageIndex) => setId(imageIndex)}
        images={urls}
        imageIndex={index}
        visible={visible}
        onRequestClose={close}
      />
    </ActivityPanel>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.black },
  colorImg: { tintColor: Colors.white },
  btnCancel: { padding: Spacing.p5 },
  viewHeader: {
    alignItems: 'flex-end',
    paddingRight: Spacing.p10,
    paddingTop: Spacing.p30,
  },
  txIndex: {
    color: Colors.white,
    textAlign: 'center',
    ...Fonts.font18wBold,
    position: 'absolute',
    top: Spacing.p10,
    alignSelf: 'center',
  },
  txDownload: { color: Colors.white, textAlign: 'center', fontSize: 14 },
  btnDownload: {
    height: 52,
    borderRadius: Spacing.p6,
    backgroundColor: Colors.bronw,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 60,
    marginBottom: Spacing.p20,
  },
});

export default PhotoViewerScreen;
