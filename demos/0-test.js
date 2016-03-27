console.log(3)
let c = () => 3


const babelUrl = 'https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code='
const dirPath = `${__dirname}/../demos`

fs.readdir(dirPath, (err, files) => {
    console.log(files)

    async.map(files,
        (file, cb) => {
            fs.readFile(`${dirPath}/${file}`, 'utf8', cb)
        },
        (err, results) => {
            const urls = results.map((file) => babelUrl + encodeURIComponent(file))
            console.log(urls)
            const str = urls.reduce((u1, u2) => { u1 + u2 })
            fs.outputFile()
        })
})
