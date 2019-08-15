//instalaçao: npm install xlsx
XLSX = require('xlsx')

//le o arquivo
let tabela = XLSX.readFile('planilha1.xlsx')

//array onde estou armazenando as tabelas
let tabelasJson = []


//Sheet é cada tabela dentro do arquivo xlsx do excell
// SheetNames é o array onde os nomes ficam salvos, percorrendo esse array
//eu garanto q estou percorrendo todas as tabelas existentes dentro do arquivo
tabela.SheetNames.forEach(element => {
    //para cada sheet percorrido eu crio um JSON que fica em uma posiçao do meu array tabelasJson
    //ou seja, cada posiçao do array armazena uma tabela inteira
    tabelasJson.push(XLSX.utils.sheet_to_json(tabela.Sheets[element]))
});
console.log(tabelasJson)