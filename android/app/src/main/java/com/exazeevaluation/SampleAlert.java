   
package com.exazeevaluation;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class SampleAlert extends ReactContextBaseJavaModule  {
    private static Boolean isAlertShown = false;
    public SampleAlert(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void getStatus(
        Callback successCallback) {
        successCallback.invoke(null, isAlertShown);
    }
    @ReactMethod
    public void AlertShow() {
        isAlertShown = true;
        System.out.println("Alert is turn ON");
    }
    @ReactMethod
    public void AlertClose() {
        isAlertShown = false;
        System.out.println("Alert is turn OFF");
    }
    @Override
    public String getName() {
        return "SampleAlert";
    }
}