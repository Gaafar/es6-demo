
<a target="_blank" href="https://babeljs.io/repl/#?evaluate=true&presets=stage-3&code=console.log(3)%0D%0Alet%20c%20%3D%20()%20%3D%3E%203%0D%0A%0D%0A%0D%0Aconst%20babelUrl%20%3D%20'https%3A%2F%2Fbabeljs.io%2Frepl%2F%23%3Fevaluate%3Dtrue%26presets%3Dstage-3%26code%3D'%0D%0Aconst%20dirPath%20%3D%20%60%24%7B__dirname%7D%2F..%2Fdemos%60%0D%0A%0D%0Afs.readdir(dirPath%2C%20(err%2C%20files)%20%3D%3E%20%7B%0D%0A%20%20%20%20console.log(files)%0D%0A%0D%0A%20%20%20%20async.map(files%2C%0D%0A%20%20%20%20%20%20%20%20(file%2C%20cb)%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20fs.readFile(%60%24%7BdirPath%7D%2F%24%7Bfile%7D%60%2C%20'utf8'%2C%20cb)%0D%0A%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20(err%2C%20results)%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20urls%20%3D%20results.map((file)%20%3D%3E%20babelUrl%20%2B%20encodeURIComponent(file))%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(urls)%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20str%20%3D%20urls.reduce((u1%2C%20u2)%20%3D%3E%20%7B%20u1%20%2B%20u2%20%7D)%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20fs.outputFile()%0D%0A%20%20%20%20%20%20%20%20%7D)%0D%0A%7D)%0D%0A">link</a>
