export class Bolsa {
    static numeroDeBolsas = 0
    static bolsasVendidas = 0
    static bolsasVendidasEspecifico
    static _cofre = 0
    
        
        constructor (marca, tamanho, cor, preço, estoque){
            this._marca = marca
            this._tamanho = tamanho
            this._cor = cor
            this._preço = preço
            this._estoque = estoque
            Bolsa.numeroDeBolsas++
        }       

        venda (QuantasBolsas){
            if(this._estoque > 0 && QuantasBolsas <= this._estoque){
                const valorDeVenda = this._preço
                this._estoque -= QuantasBolsas
                Bolsa._cofre += valorDeVenda
                Bolsa.bolsasVendidas++               
            }else{
                console.log('Estoque Indisponível.')
            }
        }

        relatorio(){
            console.log(Bolsa._estoque = 0)
        }
}