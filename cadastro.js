function funcaoCadastrarCliente(){
    const nome = document.createElement('nome').volue
    const email = document.createElement('email').volue
    const telefone = document.createElement('telefone').volue
    const cpf = document.createElement('cpf').volue
    if (!nome || !email || !telefone || !cpf) {
        alert('Por favor, preencha os campos obrigatórios')
        return
    }
    const novopaciente = {nome, email, telefone, cpf}
    let listapacientes = JSON.parse(localStorage.getItem('pacientes')) || []

    listapacientes.push(novopaciente)
    
    localStorage.setItem('pacientes', JSON.stringify(listapacientes))
    alert('Paciente cadastrado com sucesso!')
    document.getElementById('formulario-cadastro').reset()
}