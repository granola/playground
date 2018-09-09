let shouldThrow
try {
  shouldThrow =
    require(`${process.cwd()}/package.json`).name === 'precommit' &&
    Number(process.version.slice(1).split('.')[0]) < 8
} catch (error) {
  // ignore
}

if (shouldThrow) {
  throw new Error(
    'You must use Node version 8 or greater to run the scriptes within this package ' +
      'because we dogfood the untranspiled version of the scriptes.',
  )
}

require('./run-script')
