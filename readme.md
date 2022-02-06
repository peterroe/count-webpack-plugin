## What is it?

A example of plugin of [`webpack`](https://webpack.js.org), and it's used to count the number of chars in file.

## Core Code 

```js
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
```