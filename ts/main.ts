/// <reference path = "pessoa.ts" />
/// <reference path = "aluno.ts" />

namespace escola{

    const btnCalcularMedia = document.getElementById("calcmedia") as HTMLButtonElement;
    const btnCadastrar = document.getElementById("cad") as HTMLButtonElement;

        const campoAluno = document.getElementById("campoAluno") as HTMLInputElement;
        const campoAno = document.getElementById("campoAno") as HTMLInputElement;
        const campoCPF = document.getElementById("campoCPF") as HTMLInputElement;
        const campoEndereco = document.getElementById("campoEndereco") as HTMLInputElement;
        const campoTel = document.getElementById("campoTel") as HTMLInputElement;
        const campoNumMat = document.getElementById("campoNumMat") as HTMLInputElement;
        const campoCurso = document.getElementById("campoCurso") as HTMLInputElement;
        const campoEscola = document.getElementById("campoEscola") as HTMLInputElement;
        const campon1 = document.getElementById("campon1") as HTMLInputElement;
        const campon2 = document.getElementById("campon2") as HTMLInputElement;
        const campon3 = document.getElementById("campon3") as HTMLInputElement;
        const campon4 = document.getElementById("campon4") as HTMLInputElement;
        const media = document.getElementById("media") as HTMLInputElement;

    let a: Aluno;

    btnCadastrar.addEventListener("click", ()=>{ 

        // const aluno = new escola.Aluno(a.nome, campoAno.valueAsNumber, campoCPF.value, campoEndereco.value, campoTel.value, campoNumMat.valueAsNumber, campoCurso.value, campoEscola.value, campon1.valueAsNumber, campon2.valueAsNumber, campon3.valueAsNumber, campon4.valueAsNumber);

        
        if(!campoAluno.value || 
            isNaN(campoAno.valueAsNumber) || 
            !campoCPF.value || 
            !campoEndereco.value || 
            !campoTel.value || 
            isNaN(campoNumMat.valueAsNumber) || 
            !campoCurso.value || 
            !campoEscola.value ){
            alert("Por favor, preencha todos os campos corretamente!")
            return;
        }
    
        a = new escola.Aluno(campoAluno.value, 
            campoAno.valueAsNumber, 
            campoCPF.value, 
            campoEndereco.value, 
            campoTel.value, 
            campoNumMat.valueAsNumber, 
            campoCurso.value, 
            campoEscola.value, 
            parseFloat(campon1.value) || 0, 
            parseFloat(campon2.value) || 0, 
            parseFloat(campon3.value) || 0, 
            parseFloat(campon4.value) || 0)

        document.getElementById("nome").textContent = a.nome;
        document.getElementById("ano").textContent = a.anoNasc.toString();
        document.getElementById("idade").textContent = a.calcularIdade(2025).toString();
        document.getElementById("cpf").textContent = a.cpf;
        document.getElementById("end").textContent = a.endereco;
        document.getElementById("tel").textContent = a.tel;
        document.getElementById("nummat").textContent = a.matricula.toString();
        document.getElementById("curso").textContent = a.curso;
        document.getElementById("escola").textContent = a.escola;
    })

    btnCalcularMedia.addEventListener("click", ()=>{ 

        if (!a) {
            alert("Cadastre o aluno primeiro!");
            return;
        }

        if( isNaN(campon1.valueAsNumber) || 
        isNaN(campon2.valueAsNumber) || 
        isNaN(campon3.valueAsNumber) || 
        isNaN(campon4.valueAsNumber)){
            alert("Preencha as notas somente com números, por favor!")
            return;
        }

        a.nota1 = parseFloat(campon1.value) || 0;
        a.nota2 = parseFloat(campon2.value) || 0;
        a.nota3 = parseFloat(campon3.value) || 0;
        a.nota4 = parseFloat(campon4.value) || 0;

        document.getElementById("n1").textContent = a.nota1.toString();
        document.getElementById("n2").textContent = a.nota2.toString();
        document.getElementById("n3").textContent = a.nota3.toString();
        document.getElementById("n4").textContent = a.nota4.toString();
        document.getElementById("media").textContent = a.calcularMedia().toString();

    })}