import { templates } from './Clear.js';

const templateSelect = document.getElementById("templateSelect");
const inputsContainer = document.getElementById("inputsContainer");
const gerarBtn = document.getElementById("gerarBtn");
const resultadoDiv = document.getElementById("resultado");

// Renderiza a lista de templates
function renderTemplateList(templates) {
  templates.forEach((tpl, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = tpl.nome;
    templateSelect.appendChild(opt);
  });
}

// Renderiza o formulário com base no template
function renderForm(template) {
  inputsContainer.innerHTML = "";
  const camposMap = {};

  // Primeiro: cria apenas os campos que não são "dependente"
  template.campos.forEach(campo => {
    if (campo.tipo === "dependente") return;

    const label = document.createElement("label");
    label.textContent = campo.chave;

    let input;
    if (campo.tipo === "select") {
      input = document.createElement("select");
      campo.opcoes.forEach(opcao => {
        const option = document.createElement("option");
        option.value = opcao;
        option.textContent = opcao;
        input.appendChild(option);
      });
    } else {
      input = document.createElement("input");
    }

    input.name = campo.chave;
    camposMap[campo.chave] = input;

    inputsContainer.appendChild(label);
    inputsContainer.appendChild(input);
  });

  template.campos
    .filter(campo => campo.tipo === "dependente")
    .forEach(dep => {
      const campoPai = camposMap[dep.dependeDe];
      if (!campoPai) return;

      campoPai.addEventListener("change", () => {
        const valorPai = campoPai.value;
        const valorDependente = dep.valores[valorPai];
        if (valorDependente !== undefined) {
          // Cria um input oculto só na hora de gerar o texto
          camposMap[dep.chave] = { value: valorDependente };
        }
      });
    });
}

function generateResult(template) {
  const respostas = {};
  template.campos.forEach(campo => {
    const nome = campo.chave;
    const input = document.querySelector(`[name="${nome}"]`);

    if (input) {
      respostas[nome] = input.value;
    } else if (campo.tipo === "dependente") {
      const dependeDeInput = document.querySelector(`[name="${campo.dependeDe}"]`);
      const valorPai = dependeDeInput?.value;
      respostas[nome] = campo.valores[valorPai] || "";
    }
  });

  let textoFinal = template.texto;
  for (const [chave, valor] of Object.entries(respostas)) {
    const regex = new RegExp(`{${chave}}`, "g");
    textoFinal = textoFinal.replace(regex, valor);
  }

  if (template.tipo === "xmlDownload") {
    const blob = new Blob([textoFinal], { type: "application/xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    const nomeArquivo = `${respostas["NomeWifi"] || "config"}.xml`;
    link.download = nomeArquivo;
    link.click();
    URL.revokeObjectURL(link.href);
    resultadoDiv.textContent = `Arquivo "${nomeArquivo}" gerado com sucesso.`;
  } else {
    resultadoDiv.textContent = textoFinal;
  }
}

// Eventos
templateSelect.addEventListener("change", () => {
  const template = templates[templateSelect.value];
  renderForm(template);
});

gerarBtn.addEventListener("click", () => {
  const template = templates[templateSelect.value];
  generateResult(template);
});

// Inicialização
renderTemplateList(templates);
