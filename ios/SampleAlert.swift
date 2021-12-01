//
//  SampleAlert.swift
//  ExazeEvaluation
//

import Foundation
@objc(SampleAlert)
class SampleAlert: NSObject {
  @objc
  static var isAlertShown = false
  
  @objc
  func alertShow() {
    SampleAlert.isAlertShown = true
    print("Alert is now shown")
  }
  
  @objc
  func alertClose() {
    SampleAlert.isAlertShown = false
    print("Alert is now closed")
  }
  
  @objc
  func getStatus(_ callback: RCTResponseSenderBlock) {
    callback([NSNull(), SampleAlert.isAlertShown])
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}