package com.isofh.appdibuong;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.util.Log;
import android.view.WindowManager;

import androidx.annotation.RequiresApi;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import org.json.JSONObject;

import java.util.Map;

public class FirebaseMessage extends FirebaseMessagingService {
	/**
	 * Called when message is received.
	 *
	 * @param remoteMessage Object representing the message received from Firebase Cloud Messaging.
	 */
	@SuppressLint("WrongConstant")
	@RequiresApi(api = Build.VERSION_CODES.M)
	@Override
	public void onMessageReceived(RemoteMessage remoteMessage) {
        Log.e("remoteMessage",remoteMessage.getData().toString());
        try {
					Map<String, String> params = remoteMessage.getData();
					JSONObject object = new JSONObject(params);
					Log.e("JSON OBJECT", object.toString());
					String callEvent = object.getString("type");
					Log.e("call Event", callEvent);
					if(callEvent.contains("CALL_EVENT")) {
						Log.e("call Event", "open app");
						Context context = getApplicationContext();
						String packageName = context.getApplicationContext().getPackageName();
						Intent focusIntent = context.getPackageManager().getLaunchIntentForPackage(packageName).cloneFilter();
						focusIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK +
								WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED +
								WindowManager.LayoutParams.FLAG_DISMISS_KEYGUARD +
								WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON);
						startActivity(focusIntent);
					}
        } catch (Exception e) {
            Log.e("onMessageReceived error", e.getMessage() + "\n" + e.toString());
        }
	}
}
