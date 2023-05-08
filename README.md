# IVIRSE

# Run
- `yarn` để install dependencies
- `yarn pod` để install pod ios
- `yarn android` để run trên device android
- `yarn ios` để run trên device ios
- `yarn clean:android` để clear build folder android
- `yarn clean:ios` để clear build folder ios
- `yarn release` để build apk android
- `yarn bundle` để build bundle file android
- `yarn pull` để để pull code về
- `yarn install-debug` để install apk debug
- `yarn install-release` để install apk release
- `yarn cpr` để release codepush
- `yarn cpc` để clean codepush

# Multi Language
Multi language sử dụng i18n tham khảo hướng dẫn trong bài viết dưới đây 
[i18n-in-react-native-apps](https://brainsandbeards.com/blog/i18n-in-react-native-apps)

Thay đổi ngôn ngữ:
```
import i18n from "@i18n/i18n";
i18n.changeLanguage("vi");
```

Sử dụng cơ bản

```
import { useTranslation } from "react-i18next";
const { t } = useTranslation()

<Text>{t("lang")}</Text>
```
Sử dụng nâng cao với params

```
import { useTranslation } from 'react-i18next'
const { t } = useTranslation()

//lang.json
{
  "key": "{{what}} is {{how}}"
}

<Text>{t('key', { what: 'i18next', how: 'Great!' })}</Text>
```

# Redux - Rematch/core
Cấu hình trong 
```
redux-store/stores
```


