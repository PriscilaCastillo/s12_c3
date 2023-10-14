const user = document.getElementById('user');
const password = document.getElementById('password');
const btnLogin = document.getElementById('login');
const wronglogin = document.getElementById('wronglogin');
const menuinicio = document.querySelector('.menuinicio');
const cajero = document.querySelector('.cajero');

//Menu inicio
const btnConsulta = document.getElementById('btn-consulta');
const consulta = document.querySelector('.consulta');
const btnDeposito = document.getElementById('btn-deposito');
const deposito = document.querySelector('.deposito-container');
const btnRetiro = document.getElementById('btn-retiro');
const retiro = document.querySelector('.retiro-container');

let saldo = document.getElementById('saldo');

//display deposito
const saldoDeposito = document.getElementById('saldo-deposito');
const montoDepositado = document.getElementById('montodepositado');
const btnDepositar = document.getElementById('depositar');

//display retiro
const saldoRetiro = document.getElementById('saldo-retiro');
const montoRetirado = document.getElementById('montoretirado');
const btnRetirar = document.getElementById('retirar');

let saldoefectivo = 0;

let cuentas = [
    {
        nombre: "Mali",
        saldo: 200,
        password: 'helloworld',
        dni: 12345678
    },
    {
        nombre: "Gera",
        saldo: 290,
        password: 'l33t',
        dni: 87894561
    },
    {
        nombre: "Maui",
        saldo: 67,
        password: '123',
        dni: 56940238
    }
];

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    cuentas.forEach((cuenta) => {
        if (cuenta.dni == user.value && cuenta.password == password.value) {
            menuinicio.style.display = 'block';
            cajero.style.display = 'none';
            saldoefectivo = cuenta.saldo;

        } else {
            wronglogin.style.display = 'block';
        }
    })
}
)

btnConsulta.addEventListener('click', () => {
    consulta.style.display = 'block';
    menuinicio.style.display = 'none';
    cuentas.forEach((cuenta) => {
        saldo.textContent = `Tu saldo actual es: $ ${cuenta.saldo}`;
    }
    )
}
)

btnDeposito.addEventListener('click', () => {
    deposito.style.display = 'block';
    menuinicio.style.display = 'none';
    cuentas.forEach((cuenta) => {
        saldoDeposito.textContent = `Tu saldo actual es: $ ${cuenta.saldo}`;
    }
    )
}
)

btnDepositar.addEventListener('click', () => {
    let calculo = saldoefectivo + parseInt(montoDepositado.value);
    saldoefectivo = calculo;
    console.log(calculo);
    saldoDeposito.textContent = `Tu saldo actual es: $ ${calculo}`;
    montoDepositado.value = '';
})

btnRetiro.addEventListener('click', () => {
    retiro.style.display = 'block';
    menuinicio.style.display = 'none';

    cuentas.forEach((cuenta) => {
        saldoRetiro.textContent = `Tu saldo actual es: $ ${cuenta.saldo}`;
    }
    )
}
)

btnRetirar.addEventListener('click', () => {

    cuentas.forEach((cuenta) => {
        saldoefectivo = cuenta.saldo;
    }
    )

    let calculo = saldoefectivo - parseInt(montoRetirado.value);
    saldoefectivo = calculo;
    console.log(calculo);


    saldoRetiro.textContent = `Tu saldo actual es: $ ${calculo}`;
    montoRetirado.value = '';
})


