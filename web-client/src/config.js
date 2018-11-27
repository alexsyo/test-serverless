import Amplify from 'aws-amplify';

console.log(process.env)

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_CLIENT_ID
  },
  // Storage: {
  //   region: config.s3.REGION,
  //   bucket: config.s3.BUCKET,
  //   identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID
  // },
  API: {
    endpoints: [
      {
        name: "resources",
        endpoint: process.env.REACT_APP_FOOD_API_GATEWAY + '/resources',
        region: process.env.REACT_APP_REGION
      },
    ]
  }
});
