const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const projectRoot = path.resolve(__dirname, '..');
const ignoredDirectories = new Set(['.git', 'node_modules']);
const errors = [];
let validatedScripts = 0;

function validate(source, filename) {
  try {
    new vm.Script(source, { filename });
    validatedScripts += 1;
    console.log(`OK  ${path.relative(projectRoot, filename)}`);
  } catch (error) {
    errors.push(error.stack ?? error.message);
  }
}

function validateHtml(filename) {
  const html = fs.readFileSync(filename, 'utf8');
  const scriptPattern = /<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi;
  let scriptIndex = 0;

  for (const match of html.matchAll(scriptPattern)) {
    scriptIndex += 1;
    const source = match[1].trim();

    if (source) {
      validate(source, `${filename}#script-${scriptIndex}`);
    }
  }
}

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (ignoredDirectories.has(entry.name)) continue;

    const filename = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      walk(filename);
    } else if (entry.name.endsWith('.js')) {
      validate(fs.readFileSync(filename, 'utf8'), filename);
    } else if (entry.name.endsWith('.html')) {
      validateHtml(filename);
    }
  }
}

walk(projectRoot);

console.log(`\n${validatedScripts} blocos JavaScript analisados.`);

if (errors.length > 0) {
  console.error(`\n${errors.join('\n\n')}`);
  process.exitCode = 1;
} else {
  console.log('Resultado: nenhum erro de sintaxe.');
}
