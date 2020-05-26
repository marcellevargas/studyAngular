class NegociacoesView extends View <Negociacoes> {

    /**
     * A função update recebe dentro do método innerHTML 
     * o retorno da string template para renderizar
     */
   
    template(model: Negociacoes): string {
        return ` <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>

                    <tbody>
                        ${model.paraArray().map(negociacao => {
                            return `
                                <tr>
                                    <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() +1}/${negociacao.data.getFullYear() }</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                    <td>${negociacao.volume}</td>
                                </tr>
                            `
                        }).join('')}
                    </tbody>

                    <tfoot>
                    </tfoot>
                </table> `
    }
}