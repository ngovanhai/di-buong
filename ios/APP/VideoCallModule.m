#import "VideoCallModule.h"
#import <React/RCTConvert.h>
#import <React/RCTLog.h>

@implementation VideoCallModule

static NSString *stringArray[10] = {@"", @"", @"", @"", @"", @"", @"", @"", @"", @""};
static int indexArray = 0;
RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(reject,
                 callId: (NSString *)callId
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter: (RCTPromiseRejectBlock)reject)

{
  if(callId)
  {
    if (indexArray >= 10) {
      indexArray = 0;
    }
    stringArray[indexArray] = callId;
    indexArray++;
  }
  NSNumber *someNumber = @(indexArray);
  resolve(someNumber);
}

+ (BOOL) checkHasReject:(NSString *)uuid
{
  for(int i=0;i<10;i++)
  {
    if([stringArray[i] isEqualToString:uuid])
      return true;
  }
  return false;
}

@end
