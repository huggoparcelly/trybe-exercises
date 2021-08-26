const fs = require('fs').promises;

async function arrayToFile() {
  // array com os conteúdos dos arquivos
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']
  // map para criar o array de promises e cada um criar um arquivo
  const createPromises = strings.map((string, index) => 
    fs.writeFile(`./file${index + 1}.txt`, string)
  );
  // promises.all vai aguardar a escrita de todos os arquivos
  await Promise.all(createPromises);

  // leitura dos arquivos criados

  const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt']

  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );

  // concatena os conteúdos e cria um novo arquivo

  const newFileContent = fileContents.join(' ');
  await fs.writeFile('./fileAll.txt', newFileContent);
}

arrayToFile();