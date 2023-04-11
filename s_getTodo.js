
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'ivanna',
  applicationName: 'aws-node-http-api',
  appUid: 'bFLcNLt67MHwc2Dfpz',
  orgUid: '82ba7413-2ede-431a-b225-eb312116b0d9',
  deploymentUid: '80f915f6-2446-49fd-aa7b-b0767b15edde',
  serviceName: 'slsTestNode',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '6.2.3',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'slsTestNode-dev-getTodo', timeout: 6 };

try {
  const userHandler = require('./src/handlers/get-todo.js');
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}