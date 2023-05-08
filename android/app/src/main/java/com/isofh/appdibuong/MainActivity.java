package com.isofh.appdibuong;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import android.view.WindowManager;
public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
     this.setShowWhenLocked(true);
     getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN | WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON | WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON
                | WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED | WindowManager.LayoutParams.FLAG_DISMISS_KEYGUARD);
  }

  @Override
  protected String getMainComponentName() {
    return "APP";
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
  }
}
