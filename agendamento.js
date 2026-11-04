// 1. Mapeamento dos elementos do DOM
const form = document.getElementById('formAgendamento');
const especialidadeSelect = document.getElementById('especialidade');
const dataInput = document.getElementById('data');
const horarioInput = document.getElementById('horario');
const resumoDiv = document.getElementById('resumo');

// 2. Escuta do evento de envio (submit) do formulário
form.addEventListener('submit', function (event) {
  // Evita que a página seja recarregada (comportamento padrão do formulário)
  event.preventDefault();

  // 3. Captura dos valores preenchidos
  const especialidade = especialidadeSelect.value;
  const dataOriginal = dataInput.value; // Formato padrão: YYYY-MM-DD
  const horario = horarioInput.value;

  // 4. Formatação simples da data para DD/MM/YYYY
  const [ano, mes, dia] = dataOriginal.split('-');
  const dataFormatada = `${dia}/${mes}/${ano}`;

  // 5. Exibição do resumo simulado na tela
  resumoDiv.innerHTML = `
    <div style="margin-top: 20px; padding: 15px; border: 1px solid #4CAF50; background-color: #e8f5e9;">
      <h3>✅ Consulta Agendada (Simulação)</h3>
      <p><strong>Especialidade:</strong> ${especialidade}</p>
      <p><strong>Data:</strong> ${dataFormatada}</p>
      <p><strong>Horário:</strong> ${horario}</p>
    </div>
  `;
});