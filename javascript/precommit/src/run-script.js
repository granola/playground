const path = require('path')

const [executor, ignoredBin, script, ...args] = process.argv

if (script) {
  spawnScript()
} else {
}

function spawnScript() {
  const relativeScriptPath = path.join(__dirname, './scripts', script)
  const scriptPath = attemptResolve(relativeScriptPath)
}

function attemptResolve(...resolveArgs) {
  try {
    return require.resolve(...resolveArgs)
  } catch (error) {
    return null
  }
}
