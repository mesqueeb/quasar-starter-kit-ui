/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendConf (conf) {
  // register our boot file
  conf.boot.push('~quasar-app-extension-{{name}}/src/boot/register.js')

  // make sure app extension files get transpiled
  conf.build.transpileDependencies.push(/quasar-app-extension-{{name}}[\\/]src/)

  // make sure the stylesheet goes through webpack to avoid SSR issues
  conf.css.push('~quasar-app-extension-{{name}}/ui/src/index.sass')
}

module.exports = function (api) {
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith('quasar', '^1.1.1')
  api.compatibleWith('@quasar/app', '^1.1.0')

  // We extend /quasar.conf.js
  api.extendQuasarConf(extendConf)
}