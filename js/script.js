class Curso {

    constructor(){
        this.id = 1;
        this.arrayCursos = [];
    }

    salvar() {
       let curso = this.receberDados();
       if(this.validaCampos(curso)) {
           this.adicionar(curso)
       }

       this.listaTabela();
       this.cancelar();
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayCursos.length; i++ ){
            let tr = tbody.insertRow();

            let tdId = tr.insertCell();
            let tdCurso = tr.insertCell();
            let tdValor = tr.insertCell();
            let tdAcoes = tr.insertCell();

            tdId.innerText = this.arrayCursos[i].id;
            tdCurso.innerText = this.arrayCursos[i].nomeCurso;
            tdValor.innerText = this.arrayCursos[i].valor;

            let imgRemove = document.createElement('img');
            imgRemove.src = 'img/icons8-remover.svg';
            imgRemove.setAttribute("onclick","curso.deletar("+ this.arrayCursos[i].id +")");

            tdAcoes.appendChild(imgRemove);
        }
    }

    adicionar(curso) {
        this.arrayCursos.push(curso);
        this.id++;
    }

    receberDados() { 
        let curso = {}

        curso.id = this.id;
        curso.nomeCurso = document.getElementById('curso').value;
        curso.valor = document.getElementById('valor').value;

        return curso
    }

    validaCampos(curso){
        let msg = '';

        if(curso.nomeCurso.trim() === '') {
            msg += '- Informa o nome do curso \n';
        } 
        if (curso.valor.trim() === '') {
            msg += '- Informe o valor do curso \n'
        } else if(isNaN(curso.valor)) {
            msg +='- Valor do curso deve ser um numeral \n'
        }

        if(msg != ''){
            alert(msg)
            return false
        }

        return true
    };


    cancelar(){
        document.getElementById('curso').value = '';
        document.getElementById('valor').value = '';
    }

    deletar(id){
        let tbody = document.getElementById('tbody');

        for(let i =0; i < this.arrayCursos.length;i++){
            if(this.arrayCursos[i].id === id){
                this.arrayCursos.splice(i,1);
                tbody.deleteRow(i);
            }
        }
    }
}

let curso = new Curso();