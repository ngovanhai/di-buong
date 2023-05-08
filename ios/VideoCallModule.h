#import <React/RCTBridgeModule.h>

@interface VideoCallModule : NSObject <RCTBridgeModule>
+ (BOOL) checkHasReject:(NSString *)uuid;
+ (void) addAnswerCallID:(NSString *)callId;
@end
