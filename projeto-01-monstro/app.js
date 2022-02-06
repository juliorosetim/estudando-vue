new Vue({
    el: '#app',
    data: {
        vidaMonstro: 100,
        vidaJogador: 100,
        jogoIniciado: false,
        log: []
    },
    methods: {
        iniciarJogo() {
            this.jogoIniciado = !this.jogoIniciado;

            this.vidaMonstro = 100,
            this.vidaJogador = 100,
            this.log = [];
        },
        reduzirVidas() {
            valor = this.valorRadomVida(5, 10)
            this.vidaMonstro = this.vidaMonstro - valor;
            this.adicionarLog("Jogador causou " + valor + " de dano no monstro", "player")

            valor = this.valorRadomVida(5, 15)
            this.vidaJogador = this.vidaJogador - valor;
            this.adicionarLog("Monstro causou " + valor + " de dano no jogador", "monster")
        },
        curarVida() {
            valor = this.valorRadomVida(5, 15)
            this.vidaJogador = this.vidaJogador + valor;
            this.adicionarLog("Jogador recebeu uma cura de " + valor, "player")
            
            valor = this.valorRadomVida(8, 17)
            this.vidaJogador = this.vidaJogador - valor;
            this.adicionarLog("Monstro causou " + valor + " de dano no jogador", "monster")
        },
        aplicarEspecial() {
            valor = this.valorRadomVida(5, 15)
            this.vidaJogador = this.vidaJogador - valor ;
            this.adicionarLog("Monstro causou " + valor + " de dano no jogador", "monster")

            valor = this.valorRadomVida(10, 20)
            this.vidaMonstro = this.vidaMonstro - valor;
            this.adicionarLog("Jogador usou ESPECIAL e causou " + valor + " de dano no monstro", "player")
        },
        valorRadomVida(pmin, pmax) {
            min = Math.ceil(pmin);
            max = Math.floor(pmax);
            
            return Math.floor(Math.random() * (max - min + 1)) + min;;
        },
        adicionarLog(logadd, tipo) {
            this.log.unshift({log : logadd , tipoLog : tipo})
        }
    }
})