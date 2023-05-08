# run: appcenter codepush release-react -a isofhvn/IVIRSE-ANDROID-CORE-TEST -d Production -m 
# nếu bản update là bắt buộc phải cập nhật đến người dùng ngay khi mở app.
# 
echo deploy to APP-DI-BUONG-ANDROID-TEST
appcenter codepush release-react -a isofhvn/APP-DI-BUONG-ANDROID-TEST -d Production

# run: appcenter codepush release-react -a isofhvn/IVIRSE-IOS-USER-TEST -d Production -m 
echo deploy to APP-DI-BUONG-IOS-TEST
appcenter codepush release-react -a isofhvn/APP-DI-BUONG-IOS-TEST -d Production
