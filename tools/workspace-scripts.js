const npsUtils = require('nps-utils');

module.exports = {
  message: 'NativeScript Plugins ~ made with โค๏ธ  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '๐ง': {
      script: `npx cowsay "NativeScript plugin demos make developers ๐"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla ๐ฆ"`,
        description: ` ๐ป Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` ๐ป Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
    },
    'โ๏ธ': {
      script: `npx cowsay "@ncenerar/* packages will keep your โ๏ธ cranking"`,
      description: '_____________  @ncenerar/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@ncenerar': {
      // @ncenerar/nativescript-activelook-sdk
			'nativescript-activelook-sdk': {
				build: {
					script: 'nx run nativescript-activelook-sdk:build.all',
					description: '@ncenerar/nativescript-activelook-sdk: Build',
				},
			},
			// @ncenerar/nativescript-hello-world
			'nativescript-hello-world': {
				build: {
					script: 'nx run nativescript-hello-world:build.all',
					description: '@ncenerar/nativescript-hello-world: Build',
				},
			},
			'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    'โก': {
      script: `npx cowsay "Focus only on source you care about for efficiency โก"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'nativescript-activelook-sdk': {
				script: 'nx run nativescript-activelook-sdk:focus',
				description: 'Focus on @ncenerar/nativescript-activelook-sdk',
			},
			'nativescript-hello-world': {
				script: 'nx run nativescript-hello-world:focus',
				description: 'Focus on @ncenerar/nativescript-hello-world',
			},
			reset: {
        script: 'nx g @ncenerar/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
