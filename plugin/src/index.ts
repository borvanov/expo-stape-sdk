import {
  ConfigPlugin,
  withAppBuildGradle,
  withPodfile,
} from "expo/config-plugins";

// const addStapePodDependencies = (podfile: string) => {
//   if (!podfile.includes("pod 'StapeSDK'")) {
//     return podfile.replace(
//       /target '(.+)' do/,
//       `target '$1' do\n  pod 'StapeSDK'\n`
//     );
//   }
//   return podfile;
// };

const addStapeAndroidDependencies = (appBuildGradle: string) => {
  const dependenciesBlock = `implementation 'io.stape:android-sgtm:1.0'`;

  if (!appBuildGradle.includes(dependenciesBlock)) {
    return appBuildGradle.replace(
      /dependencies\s?{/,
      `dependencies {
        ${dependenciesBlock}
      `
    );
  }
  return appBuildGradle;
};

const withStapeSdk: ConfigPlugin = (config) => {
  // config = withPodfile(config, (config) => {
  //   config.modResults.contents = addStapePodDependencies(
  //     config.modResults.contents
  //   );

  //   return config;
  // });

  config = withAppBuildGradle(config, (config) => {
    config.modResults.contents = addStapeAndroidDependencies(
      config.modResults.contents
    );

    return config;
  });

  return config;
};

export default withStapeSdk;
