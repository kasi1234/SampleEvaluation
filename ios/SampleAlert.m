//
//  SampleAlert.m
//  ExazeEvaluation
//
//
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(SampleAlert, NSObject)
RCT_EXTERN_METHOD(alertShow)
RCT_EXTERN_METHOD(alertClose)
RCT_EXTERN_METHOD(getStatus: (RCTResponseSenderBlock)callback)
@end
