class CountWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('CountWebpackPlugin', (
      compilation
    ) => {
      let str = ''
      for (let filename in compilation.assets) {
        const { _value } = compilation.assets[filename]
        str += `Number of chars in \`${filename}\`: \`${_value.length}\` \n`
      }
      //write file
      compilation.assets['fileSize.md'] = {
        source() {
          return str
        }
      }
    })
  }
}

module.exports = CountWebpackPlugin;