// Type definitions for Ionic Cordova plugins
// Project: https://github.com/driftyco
// Definitions by: Hendrik Maus <https://github.com/hendrikmaus>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./plugins/keyboard.d.ts" />

interface CordovaPlugins {
  Keyboard:Ionic.Keyboard;
}

interface Cordova {
    plugins: CordovaPlugins;
}