const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let totalQuestoes = prova.questoes.length;
    let totalAcertos = 0;

    for (let i = 0; i < totalQuestoes; i++) {
        if (prova.questoes[i].resposta === prova.questoes[i].correta) {
            totalAcertos++;
        }
    }

    //prova.valor = totalAcertos;
    let nota = (totalAcertos / totalQuestoes) * prova.valor;
    prova.valor = nota;

    console.log(`Aluno: ${prova.aluno} materia ${prova.materia},total de acertos ${totalAcertos}/${totalQuestoes} ,sua nota é ${prova.valor}}`);

}

corrigirProva(prova);
