const fs = require('fs-extra')
const async = require('async')
var _ = require('lodash')

const babelSourceUrl = 'https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code='
const babelCompiledUrl = 'https://babeljs.io/repl/#?evaluate=true&presets=es2015%2Cstage-3&code='
const dirPath = `${__dirname}/../src`

fs.readdir(dirPath, (err, fileNames) => {
    console.log(fileNames)

    async.map(fileNames,
        (fileName, cb) => {
            fs.readFile(`${dirPath}/${fileName}`, 'utf8', cb)
        },
        (err, fileContents) => {
        	const pairs = _.zip(fileNames,fileContents)
        	const readme = _(pairs)
        	.map((pair)=>{
        		fileName = pair[0]
        		fileContent = pair[1]
        		const title = fileName.replace(/.js$/,'')
        		return `## ${title}       		
\`\`\`javascript
${fileContent}
\`\`\`
<a target="_blank" href="${babelSourceUrl + encodeURIComponent(fileContent)}">Try ES6</a> - <a target="_blank" href="${babelCompiledUrl + encodeURIComponent(fileContent)}">Transpiled</a>
`
        	})
        	.reduce((u1, u2) => u1 + "\n" + u2 )

            fs.outputFile(`${__dirname}/../README.md`, readme)
        })
})
