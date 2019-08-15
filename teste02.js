//tabem encontrei essa biblioteca, bem facil de usar
//porem, ela pega somente um sheet por vez
//instalacao npm install xlsx_to_json
xlsxj = require("xlsx-to-json");
  xlsxj({
    input: "planilha1.xlsx", 
    output: "output.json",
    //nome do sheet q eu quero pegar
    //o nome é opcional, se nao colocar vai pegar a primeira tabela
    sheet: "Plan2"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });