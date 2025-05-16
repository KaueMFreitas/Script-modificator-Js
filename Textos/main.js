import { templates } from './Clear.js';

const templateSelect = document.getElementById("templateSelect");
const inputsContainer = document.getElementById("inputsContainer");
const gerarBtn = document.getElementById("gerarBtn");
const resultadoDiv = document.getElementById("resultado");
const copiarBtn = document.getElementById("copiarBtn");

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

  // Cria campos
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

 // Adiciona lógica para campos dependentes com controle de duplicação
  template.campos
  .filter(campo => campo.tipo === "dependente")
  .forEach(dep => {
    const campoPai = camposMap[dep.dependeDe];
    if (!campoPai) return;

    campoPai.addEventListener("change", () => {
      const valorPai = campoPai.value;

      // Verifica se já existe o input
      const existingInput = document.querySelector(`[name="${dep.chave}"]`);
      if (existingInput) {
        const label = existingInput.previousElementSibling;
        if (label?.tagName === "LABEL") label.remove();
        existingInput.remove();
        delete camposMap[dep.chave];
      }

      if (dep.chave === "Segundo endereço completo" && valorPai === "Segundo ponto") {
        const label = document.createElement("label");
        label.textContent = dep.chave;

        const input = document.createElement("input");
        input.name = dep.chave;

        camposMap[dep.chave] = input;

        inputsContainer.appendChild(label);
        inputsContainer.appendChild(input);
      } else if (dep.valores && dep.valores[valorPai] !== undefined) {
        camposMap[dep.chave] = { value: dep.valores[valorPai] };
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
  
  // Segunda rodada (para variáveis dentro de valores dependentes que também usam chaves)
  for (const [chave, valor] of Object.entries(respostas)) {
    const regex = new RegExp(`{${chave}}`, "g");
    textoFinal = textoFinal.replace(regex, valor);
  }

  console.log("Texto Final gerado: ", textoFinal);

  if (template.tipo === "xmlDownload") {
    const blob = new Blob([textoFinal], { type: "application/xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    const nomeArquivo = `${respostas["NomeWifi"] || "config"}.xml`;
    link.download = nomeArquivo;
    link.click();
    URL.revokeObjectURL(link.href);
    resultadoDiv.innerHTML = `Arquivo "${nomeArquivo}" gerado com sucesso.`;
  } else {
    resultadoDiv.innerHTML = textoFinal;
  }

  // Mostrar o botão de copiar somente se o texto final não estiver vazio
  if (textoFinal.trim()) {
    copiarBtn.style.visibility = "visible"; // Exibe o botão
    console.log("Botão de copiar visível.");
  } else {
    copiarBtn.style.visibility = "hidden"; // Oculta o botão
    console.log("Botão de copiar oculto.");
  }
}

// Verifica se o botão de copiar está sendo acessado corretamente
copiarBtn.addEventListener("click", () => {
  const textoParaCopiar = resultadoDiv.textContent;

  console.log("Texto para copiar: ", textoParaCopiar); // Verificação adicional

  navigator.clipboard.writeText(textoParaCopiar)
    .then(() => {
      alert("Texto copiado para a área de transferência!");
    })
    .catch(err => {
      console.error("Erro ao copiar texto: ", err);
    });
});

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
