(function (global) {
  var angVer = '5.0.0-beta.6';
 
  System.config({
    transpiler: 'ts',
    typescriptOptions: {
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "lib": [ "es2015", "dom" ],
      "module": "commonjs",
      "moduleResolution": "node",
      "noImplicitAny": true,
      "sourceMap": true,
      "suppressImplicitAnyIndexErrors": true,
      "target": "es5"
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: { 
      'npm:': 'https://unpkg.com/',
      'gh:': 'https://raw.githubusercontent.com/'
    },
    map: {
      "app": "app",
      "rxjs": "npm:rxjs@5.4.3",
      "ts": "npm:plugin-typescript@7.1.0/lib/plugin.js",
      "typescript": "npm:typescript@2.4.2/lib/typescript.js",
      "@angular/core": "npm:@angular/core@" + angVer + "/bundles/core.umd.js",
      "@angular/common": "npm:@angular/common@" + angVer + "/bundles/common.umd.js",
      "@angular/compiler": "npm:@angular/compiler@" + angVer + "/bundles/compiler.umd.js",
      "@angular/platform-browser": "npm:@angular/platform-browser@" + angVer + "/bundles/platform-browser.umd.js",
      "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@" + angVer + "/bundles/platform-browser-dynamic.umd.js",
      "@angular/http": "npm:@angular/http@" + angVer + "/bundles/http.umd.js",
      "@angular/router": "npm:@angular/router@" + angVer + "/bundles/router.umd.js",
      "@angular/forms": "npm:@angular/forms@" + angVer + "/bundles/forms.umd.js",
      "@angular/animations": "npm:@angular/animations@" + angVer + "/bundles/animations.umd.js",
      "@angular/animations/browser": "npm:@angular/animations@" + angVer + "/bundles/animations-browser.umd.js",
      "@angular/platform-browser/animations": "npm:@angular/platform-browser@" + angVer + "/bundles/platform-browser-animations.umd.js",
      "@angular/flex-layout": "npm:@angular/flex-layout@2.0.0-beta.9"
},
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });

  if (!global.noBootstrap) { bootstrap(); }

  // Bootstrap the `AppModule`(skip the `app/main.ts` that normally does this)
  function bootstrap() {

    // Stub out `app/main.ts` so System.import('app') doesn't fail if called in the index.html
    System.set(System.normalizeSync('app/main.ts'), System.newModule({ }));

    // bootstrap and launch the app (equivalent to standard main.ts)
    Promise.all([
      System.import('@angular/platform-browser-dynamic'),
      System.import('app/app.module')
    ])
    .then(function (imports) {
      var platform = imports[0];
      var app      = imports[1];
      platform.platformBrowserDynamic().bootstrapModule(app.AppModule);
    })
    .catch(function(err){ console.error(err); });
  }
})(this);