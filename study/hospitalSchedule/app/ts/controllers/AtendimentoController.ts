class AtendimentoController {
    private _inputData: JQuery;
    private _inputPaciente: JQuery;
    private _inputEspecialidade: JQuery;
    
    private _atentimentos = new Atendimentos();
    private _atendimentosView = new AtendimentosView('#atendimentosView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        /**document.querySelector usado para 
         * pegar o elemento no html de acordo
         * com o id  
         * */
        this._inputData = $('#data');
        this._inputPaciente = $('#paciente');
        this._inputEspecialidade = $('#especialidade');
        this._atendimentosView.update(this._atentimentos);
    }

      adiciona(event) {
        event.preventDefault();

        const atendimento = new Atendimento(
            new Date(this._inputData.val().replace(/-/g, ',')),
                this._inputPaciente.val(),
                this._inputEspecialidade.val()
        );
        
        this._atentimentos.add(atendimento);

        console.log(this._atentimentos.getAtendimentos());
        
        this._atentimentos.getAtendimentos().forEach(a => {
            console.log(a.data);
            console.log(a.paciente);
            console.log(a.especialidade);
        })

        this._atendimentosView.update(this._atentimentos);
        this._mensagemView.update('Atendimento agendado com sucesso')

       }
}