const termos_de_aceite = [
    {
      nome: "Termo de Aceite",
      texto: `TERMO DE ACEITE DE CONTRATO.
  
    De um lado, {Nome completo}, e-mail {E-Mail do cliente}, portador(a) do CPF {CPF do cliente}, com endereço {Endereço completo}, denominada por CONTRATANTE.

    De outro, Microchip.NET Fibra Óptica LTDA, endereço eletrônico sac@microchipnet.com.br, registrada sob o número de CNPJ: 11.062.024/0001-91, localizada no endereço comercial Av. Senador Salgado Filho 277 - Parque São Vicente - SP, denominada por CONTRATADA.

    Constitui objeto do presente TERMO DE CONTRATAÇÃO a prestação de Serviços de Comunicação Multimídia pela CONTRATADA em favor do CONTRATANTE, no intuito de viabilizar a conexão do CONTRATANTE à internet, de acordo com as condições previstas no instrumento "CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE COMUNICAÇÃO MULTIMÍDIA".

    O CONTRATANTE declara, por meio da aceitação deste termo, que foi informado quanto ao tratamento de dados que será realizado pela CONTRATADA, nos termos da Lei n 13.709/2018. Declara também ser de manifestação livre, informada e inequívoca a autorização do tratamento de seus dados pessoas conforme o detalhamento contido no contrato.
    O CONTRATANTE declare ciência de que, todos os dados coletados pela contratada são necessários para a prestação dos serviços contratados. INFORMAÇÕES CONTRATUAL
  
    CONTRATO COM FIDELIDADE DE: *12 Meses, valor da multa por quebra de contrato proporcional a {Preço Taxa de adesão} pelos meses restantes, caso ocorra a rescisão contratual, a pedido do CLIENTE, antes de completado o período de fidelização inclusive em casos de mudança de endereço sem viabilidade técnica, o CLIENTE se compromete a pagar em favor da CONTRATADA o valor da Multa penal.* 
       
    Plano {Plano contratado} com valor de mensalidade de {Preço}, com vencimento no dia {Dia de vencimento} sujeito a correções monetárias anuais, com velocidade de download de {Velocidade do plano} e a velocidade de upload sendo 50% do plano, com prazo máximo de instalação de 05 dias úteis, tendo garantia da banda contratada de 100% do plano, tendo os equipamentos que serão disponibilizados sob o regime de COMODATO e sabendo que o IP disponibilizado será dinâmico, podendo ser IP Público ou CGnateado.
É sabido também que a forma de pagamento é via Boleto Bancário e está autorizado o envio única e exclusivamente através de meios eletrônicos como SAC Web, Aplicativo, atendimento no Whatsapp e e-mail, tendo ciência de que o atendimento do setor técnico ocorre de segunda à domingo, das 8h às 00h, tendo o setor financeiro e comercial o horário de atendimento diferenciado das 8h às 18h, não funcionando aos domingos e aos sábado funcionando até às 16h. 
Declaro, para os devidos fins, que são corretos os dados cadastrais e informações por mim prestadas neste instrumento. 
Declaro ainda que os documentos apresentados para formalização deste contrato e as cópias dos documentos entregues a CONTRATADA pertencem a minha pessoa, tendo ciência das sanções civis e criminais caso prestar declarações falsas, entregar documentos falsos e me passar por outrem. 
Declaro estar ciente que a assinatura deste instrumento representa expressa concordância aos termos e condições do "CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE COMUNICAÇÃO MULTIMÍDIA", registrado junto ao Cartório da Comarca de Santos, sob o n.º 723.447 de 16/06/2020, que juntamente com esse TERMO DE CONTRATAÇÃO formam um só instrumento de direito, tendo lido e entendido claramente os termos e condições ajustadas para esta contratação. 
Declaro ainda, para os devidos fins, que tive prévio acesso a todas as informações relativas ao "CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE COMUNICAÇÃO MULTIMÍDIA", bem como ao Plano de Serviço por mim contratado, devidamente especificado neste TERMO DE CONTRATAÇÃO.`,
  
      campos: [
        { chave: "Nome completo", tipo: "texto" },
        { chave: "E-Mail do cliente", tipo: "texto" },
        { chave: "CPF do cliente", tipo: "texto" },
        { chave: "Endereço completo", tipo: "texto" },
        { chave: "Taxa de adesão", tipo: "select", opcoes: ["Isento", "Pagou a taxa"] },
        { chave: "Plano contratado", tipo: "select", opcoes: ["300MB", "500MB", "600Mb", "promocional de 400Mb", "promocional de 600Mb", "promocional de 800Mb"] },
        { chave: "Dia de vencimento", tipo: "select", opcoes: ["05", "10", "15"] },
        {
          chave: "Preço Taxa de adesão", tipo: "dependente", dependeDe: "Taxa de adesão", 
          valores: {
              "Pagou a taxa": "R$ 440,00", 
              "Isento": "R$ 520,00"
          }
        },
        {
          chave: "Preço", tipo: "dependente", dependeDe: "Plano contratado",
          valores: {
            "300MB": "R$ 89,90",
            "500MB": "R$ 109,90",
            "600Mb": "R$ 139,90",
            "promocional de 400Mb": "R$ 89,90 por 12 meses após esse periodo passará a ser R$ 94,90",
            "promocional de 600Mb": "R$ 109,90 por 12 meses após esse periodo passará a ser R$ 114,90",
            "promocional de 800Mb": "R$ 139,90"
          }
        },
        {
          chave: "Velocidade do plano", tipo: "dependente", dependeDe: "Plano contratado",
          valores: {
            "300MB": "300MB",
            "500MB": "500MB",
            "600Mb": "600Mb",
            "promocional de 400Mb": "400Mb",
            "promocional de 600Mb": "600Mb",
            "promocional de 800Mb": "800Mb"
          }
        }
      ]
    }
  ];
  
  export { termos_de_aceite };
  // O código para renderizar os campos do formulário e gerar o resultado já foi incluído em `main.js`
  