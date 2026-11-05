function funcaoCadastrarCliente() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    
    if (!nome || !email || !telefone || !cpf) {
        alert('Por favor, preencha os campos obrigatórios');
        return;
    }

    const novopaciente = { nome, email, telefone, cpf };
    let listapacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

    listapacientes.push(novopaciente);
    
    localStorage.setItem('pacientes', JSON.stringify(listapacientes));
    alert('Paciente cadastrado com sucesso!');
    document.getElementById('formulario-cadastro').reset();

    // Atualiza a tabela na tela imediatamente após o cadastro
    exibirPacientes();
}

// Executa a função ao carregar a página para exibir os dados salvos anteriormente
document.addEventListener('DOMContentLoaded', exibirPacientes);

function exibirPacientes() {
  const tabela = document.getElementById('tabela-pacientes');
  const listaPacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

  // Limpa o conteúdo atual da tabela para não duplicar dados
  tabela.innerHTML = '';

  // Se não houver pacientes cadastrados
  if (listaPacientes.length === 0) {
    tabela.innerHTML = '<tr><td colspan="4">Nenhum paciente cadastrado.</td></tr>';
    return;
  }

  // Percorre a lista e adiciona uma linha para cada paciente
  listaPacientes.forEach((paciente) => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
      <td>${paciente.nome}</td>
      <td>${paciente.email}</td>
      <td>${paciente.telefone}</td>
      <td>${paciente.cpf}</td>
    `;
    tabela.appendChild(linha);
  });
}