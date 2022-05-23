const path = require('path')
const fs = require('fs')
const glob = require('fast-glob')
const { Project } = require('ts-morph')
const { parse, compileScript } = require('vue/compiler-sfc')

const outDir = 'comp_types'

const globFiles = ['src/components/**/*']

async function main() {
    const project = new Project({
        compilerOptions: {
            declaration: true,
            emitDeclarationOnly: true,
            noEmitOnError: true,
            allowJs: true,
            outDir
        },
        skipAddingFilesFromTsConfig: true
    })

    const files = await glob(globFiles)

    let index = 1

    await Promise.all(
        files.map(async file => {
            console.log(file)
            if (/\.vue$/.test(file)) {
                const sfc = parse(await fs.promises.readFile(file, 'utf-8'))
                const { script, scriptSetup } = sfc.descriptor

                if (script || scriptSetup) {
                    let content = ''
                    let isTs = false

                    if (script) {
                        if (script.content) {
                            content += script.content
                            if (script.lang === 'ts') isTs = true
                        }
                    } else if (scriptSetup) {
                        const compiled = compileScript(sfc.descriptor, {
                            id: `${index++}`
                        })
                        content += compiled.content
                        if (scriptSetup.lang === 'ts') isTs = true
                    }

                    project.createSourceFile(file + (isTs ? '.ts' : '.js'), content)
                }
            } else {
                project.addSourceFileAtPath(file)
            }
        })
    )

    const diagnostics = project.getPreEmitDiagnostics()
    console.log(project.formatDiagnosticsWithColorAndContext(diagnostics))

    const dirPath = path.resolve(process.cwd(), outDir)
    if (fs.existsSync(dirPath)) {
        await fs.promises.rm(dirPath, { recursive: true })
    }

    const emitResult = await project.emit();
    for (const diagnostic of emitResult.getDiagnostics()) {
        console.log(diagnostic.getMessageText())
    }
}

main().then(() => {
    console.log('----------SUCCESS----------')
})
