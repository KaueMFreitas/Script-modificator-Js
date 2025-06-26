const templates = [
  
  { nome: "- Escolha um Script -" },

    { nome: "Termos de aceite de contrato",
      texto: `TERMO DE ACEITE DE CONTRATO.
  
    De um lado, {Nome completo}, e-mail {E-Mail do cliente}, portador(a) do CPF {CPF do cliente}, com endereço {Endereço completo}, {Complemento segundo ponto} denominada por CONTRATANTE.

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
Declaro ainda, para os devidos fins, que tive prévio acesso a todas as informações relativas ao "CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE COMUNICAÇÃO MULTIMÍDIA", bem como ao Plano de Serviço por mim contratado, devidamente especificado neste TERMO DE CONTRATAÇÃO.

    Você concorda com os termos acima?
    ( ) Sim
    ( ) Não`,
  
      campos: [ 
        { chave: "Ponto de instalação", tipo: "select", opcoes: ["Primeiro ponto", "Segundo ponto"] },
        { chave: "Segundo endereço completo", tipo: "dependente", dependeDe: "Ponto de instalação", 
          valores: {
            "Primeiro ponto": "",
            "Segundo ponto": "" 
          }
        },
        { chave: "Nome completo", tipo: "texto" },
        { chave: "E-Mail do cliente", tipo: "texto" },
        { chave: "CPF do cliente", tipo: "texto" },
        { chave: "Endereço completo", tipo: "texto" },
        { chave: "Taxa de adesão", tipo: "select", opcoes: ["Isento", "Pagou a taxa"] },
        { chave: "Plano", tipo: "select", opcoes: ["300Mb", "500Mb", "600Mb", "300Mb + 100Mb", "500Mb + 100Mb", "600Mb + 200Mb"] },
        { chave: "Dia de vencimento", tipo: "select", opcoes: ["05", "10", "15"] },
        { chave: "Preço Taxa de adesão", tipo: "dependente", dependeDe: "Taxa de adesão", 
          valores: {
              "Pagou a taxa": "R$ 440,00", 
              "Isento": "R$ 510,00"
          }
        },
        { chave: "Plano contratado", tipo: "dependente", dependeDe: "Plano",
          valores: {
            "300Mb": "Microchip.NET 300 Mega",
            "500Mb": "Microchip.NET 500 Mega",
            "600Mb": "Microchip.NET 600 Mega",
            "300Mb + 100Mb": "Microchip.NET PLUS 400 Mega",
            "500Mb + 100Mb": "Microchip.NET MASTER 600 Mega",
            "600Mb + 200Mb": "Microchip.NET POWER 800 Mega"
          }
        },
        { chave: "Preço", tipo: "dependente", dependeDe: "Plano",
          valores: {
            "300Mb": "R$ 89,90",
            "500Mb": "R$ 109,90",
            "600Mb": "R$ 139,90",
            "300Mb + 100Mb": "R$ 89,90 por 12 meses após esse periodo passará a ser R$ 94,90",
            "500Mb + 100Mb": "R$ 109,90 por 12 meses após esse periodo passará a ser R$ 114,90",
            "600Mb + 200Mb": "R$ 139,90"
          }
        },
        { chave: "Velocidade do plano", tipo: "dependente", dependeDe: "Plano contratado",
          valores: {
            "Microchip.NET 300 Mega": "300Mb",
            "Microchip.NET 500 Mega": "500Mb",
            "Microchip.NET 600 Mega": "600Mb",
            "Microchip.NET PLUS 400 Mega": "400Mb",
            "Microchip.NET MASTER 600 Mega": "600Mb",
            "Microchip.NET POWER 800 Mega": "800Mb"
          }
        },
        { chave: "Complemento segundo ponto", tipo: "dependente", dependeDe: "Ponto de instalação",
          valores: { "Segundo ponto": "e endereço de instalação do 2° ponto na {Segundo endereço completo}, " }
        }
      ]
    },

     { nome: "Termos da troca de titularidade",
      texto: `TERMO DE ACEITE DE CONTRATO.    
   
De um lado, {Nome} , e-mail {E-mail}, portador(a) do CPF: {CPF} , com endereço de Instalação: {Endereço} denominada por CONTRATANTE.    
   
De outro, Microchip.NET Fibra Óptica LTDA, endereço eletrônico sac@microchipnet.com.br, registrada sob o número de CNPJ: 11.062.024/0001-91, localizada no endereço comercial Av. Senador Salgado Filho 277 - Parque São Vicente - SP, denominada por CONTRATADA.    
   
   
Constitui objeto do presente TERMO DE CONTRATAÇÃO a prestação de Serviços de Comunicação Multimídia pela CONTRATADA em favor do CONTRATANTE, no intuito de viabilizar a conexão do CONTRATANTE à internet, de acordo com as condições previstas no instrumento "CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE COMUNICAÇÃO MULTIMÍDIA".    
   
O CONTRATANTE declara, por meio da aceitação deste termo, que foi informado quanto ao tratamento de dados que será realizado pela CONTRATADA, nos termos da Lei n 13.709/2018. Declara também ser de manifestação livre, informada e inequívoca a autorização do tratamento de seus dados pessoas conforme o detalhamento contido no contrato. O CONTRATANTE declare ciência de que, todos os dados coletados pela contratada são necessários para a prestação dos serviços contratados.    
   
INFORMAÇÕES CONTRATUAL:    
   
CONTRATO : Cliente Assumiu titularidade de {Nome do antigo cliente} CPF: {CPF do antigo cliente}. Plano {Plano contratado} com valor de mensalidade de{Preço} com vencimento no dia {Dia de vencimento} sujeito a correções monetárias anuais, com velocidade de download de {Velocidade do plano} e a velocidade de upload sendo 50% do plano, com prazo máximo de instalação de 05 dias úteis, tendo garantia da banda contratada de 100% do plano, tendo os equipamentos que serão disponibilizados sob o regime de COMODATO e sabendo que o IP disponibilizado será dinâmico, podendo ser IP Público ou CGnateado. É sabido também que a forma de pagamento é via Boleto Bancário e está autorizado o envio única e exclusivamente através de meios eletrônicos como SAC Web, Aplicativo, atendimento no Whatsapp e e-mail, tendo ciência de que o atendimento do setor técnico ocorre de segunda à domingo, das 8h às 00h, tendo o setor financeiro e comercial o horário de atendimento diferenciado das 8h às 18h, não funcionando aos domingos e aos sábado funcionando até às 16h.    
   
Declaro, para os devidos fins, que são corretos os dados cadastrais e informações por mim prestadas neste instrumento. Declaro ainda que os documentos apresentados para formalização deste contrato e as cópias dos documentos entregues a CONTRATADA pertencem a minha pessoa, tendo ciência das sanções civis e criminais caso prestar declarações falsas, entregar documentos falsos e me passar por outrem.    
Declaro estar ciente que a assinatura deste instrumento representa expressa concordância aos termos e condições do "CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE COMUNICAÇÃO MULTIMÍDIA", registrado junto ao Cartório da Comarca de Santos, sob o n.º 723.447 de 16/06/2020, que juntamente com esse TERMO DE CONTRATAÇÃO formam um só instrumento de direito, tendo lido e entendido claramente os termos e condições ajustadas para esta contratação.    
Declaro ainda, para os devidos fins, que tive prévio acesso a todas as informações relativas ao "CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE COMUNICAÇÃO MULTIMÍDIA", bem como ao Plano de Serviço por mim contratado, devidamente especificado neste TERMO DE CONTRATAÇÃO.
    
Você concorda com os termos acima?
    ( ) Sim
    ( ) Não`,
  
      campos: [ 
        { chave: "Nome", tipo: "texto" },
        { chave: "E-mail", tipo: "texto" },
        { chave: "CPF", tipo: "texto" },
        { chave: "Endereço", tipo: "texto" },
        { chave: "Nome do antigo cliente", tipo: "texto" },
        { chave: "CPF do antigo cliente", tipo: "texto" },
        { chave: "Plano", tipo: "select", opcoes: ["300Mb", "500Mb", "600Mb", "300Mb + 100Mb", "500Mb + 100Mb", "600Mb + 200Mb"] },
        { chave: "Dia de vencimento", tipo: "select", opcoes: ["05", "10", "15"] },
        { chave: "Preço Taxa de adesão", tipo: "dependente", dependeDe: "Taxa de adesão", 
          valores: {
            "Pagou a taxa": "R$ 440,00", 
            "Isento": "R$ 510,00"
          }
        },
        { chave: "Plano contratado", tipo: "dependente", dependeDe: "Plano",
          valores: {
            "300Mb": "Microchip.NET 300 Mega",
            "500Mb": "Microchip.NET 500 Mega",
            "600Mb": "Microchip.NET 600 Mega",
            "300Mb + 100Mb": "Microchip.NET PLUS 400 Mega",
            "500Mb + 100Mb": "Microchip.NET MASTER 600 Mega",
            "600Mb + 200Mb": "Microchip.NET POWER 800 Mega"
          }
        },
        { chave: "Preço", tipo: "dependente", dependeDe: "Plano",
          valores: {
            "300Mb": "R$ 89,90",
            "500Mb": "R$ 109,90",
            "600Mb": "R$ 139,90",
            "300Mb + 100Mb": "R$ 89,90 por 12 meses após esse periodo passará a ser R$ 94,90",
            "500Mb + 100Mb": "R$ 109,90 por 12 meses após esse periodo passará a ser R$ 114,90",
            "600Mb + 200Mb": "R$ 139,90"
          }
        },
        { chave: "Velocidade do plano", tipo: "dependente", dependeDe: "Plano contratado",
          valores: {
            "Microchip.NET 300 Mega": "300Mb",
            "Microchip.NET 500 Mega": "500Mb",
            "Microchip.NET 600 Mega": "600Mb",
            "Microchip.NET PLUS 400 Mega": "400Mb",
            "Microchip.NET MASTER 600 Mega": "600Mb",
            "Microchip.NET POWER 800 Mega": "800Mb"
          }
        },
        { chave: "Complemento segundo ponto", tipo: "dependente", dependeDe: "Ponto de instalação",
          valores: { "Segundo ponto": "e endereço de instalação do 2° ponto na {Segundo endereço completo}, " }
        }
      ]
    },

    { nome: "Configurar Sheroline (Não usar)",
      texto: `<Config_Information_File_8671>\n 
<Value Name="WAN_MODE" Value="7"/>\n
<Value Name="LAN_IP_ADDR" Value="192.168.1.1"/>\n
<Value Name="LAN_SUBNET" Value="255.255.255.0"/>\n
<Value Name="LAN_ENABLE_IP2" Value="0"/>\n
<Value Name="LAN_IP_ADDR2" Value="192.168.100.1"/>\n
<Value Name="LAN_SUBNET2" Value="255.255.255.0"/>\n
<Value Name="LAN_DHCP" Value="0"/>\n
<Value Name="LAN_DHCP_POOLUSE" Value="0"/>\n
<Value Name="LAN_DHCP_START" Value="2"/>\n
<Value Name="LAN_DHCP_END" Value="100"/>\n
<Value Name="LAN_DHCP_POOL_START" Value="192.168.1.33"/>\n
<Value Name="LAN_DHCP_POOL_END" Value="192.168.1.254"/>\n
<Value Name="LAN_DHCP_DNS_OPT" Value="1"/>\n
<Value Name="DHCPS_DNS1" Value="8.8.8.8"/>\n
<Value Name="DHCPS_DNS2" Value="8.8.4.4"/>\n
<Value Name="DHCPS_DNS3" Value="1.1.1.1"/>\n
<Value Name="LAN_DHCP_LEASE" Value="86400"/>\n
<Value Name="LAN_DHCP_DOMAIN" Value="bbrouter"/>\n
<Value Name="LAN_RIP" Value="0"/>\n
<Value Name="LAN_AUTOSEARCH" Value="0"/>\n
<Value Name="DNS_MODE" Value="0"/>\n
<Value Name="DNS1" Value="0.0.0.0"/>\n
<Value Name="DNS2" Value="0.0.0.0"/>\n
<Value Name="DNS3" Value="0.0.0.0"/>\n
<Value Name="DHCPS" Value="172.19.31.4"/>\n
<Value Name="DHCP_MODE" Value="2"/>\n
<Value Name="ADSL_MODE" Value="83"/>\n
<Value Name="ADSL_OLR" Value="3"/>\n
<Value Name="RIP_ENABLE" Value="0"/>\n
<Value Name="RIP_VERSION" Value="1"/>\n
<Value Name="IPF_OUT_ACTION" Value="1"/>\n
<Value Name="IPF_IN_ACTION" Value="1"/>\n
<Value Name="MACF_OUT_ACTION" Value="1"/>\n
<Value Name="MACF_IN_ACTION" Value="1"/>\n
<Value Name="PORT_FW_ENABLE" Value="0"/>\n
<Value Name="DMZ_ENABLE" Value="0"/>\n
<Value Name="DMZ_IP" Value="0.0.0.0"/>\n
<Value Name="USER_NAME" Value="user"/>\n
<Value Name="USER_PASSWORD" Value="134008"/>\n
<Value Name="DEVICE_TYPE" Value="1"/>\n
<Value Name="INIT_LINE" Value="1"/>\n
<Value Name="INIT_SCRIPT" Value="1"/>\n
<Value Name="TELNET_USER" Value="super"/>\n
<Value Name="TELNET_PASSWD" Value="superoem"/>\n
<Value Name="SNMP_SYS_DESCR" Value="System Description"/>\n
<Value Name="VC_AUTOSEARCH" Value="0"/>\n
<Value Name="BR_AGEING_TIME" Value="7200"/>\n
<Value Name="BR_STP_ENABLED" Value="0"/>\n
<Value Name="MP_MODE" Value="12"/>\n
<Value Name="QOS_UPRATE" Value="0"/>\n
<Value Name="QOS_POLICY" Value="0"/>\n
<Value Name="TOTAL_BANDWIDTH" Value="100000"/>\n
<Value Name="TOTAL_BANDWIDTH_LIMIT" Value="0"/>\n
<Value Name="QOS_MODE" Value="0"/>\n
<Value Name="IP_QOS_QUEUE_NUM" Value="4"/>\n
<Value Name="IGMP_PROXY" Value="1"/>\n
<Value Name="IGMP_PROXY_ITF" Value="65535"/>\n
<Value Name="SPC_ENABLED" Value="0"/>\n
<Value Name="SPC_IPTYPE" Value="0"/>\n
<Value Name="URL_CAPABILITY" Value="0"/>\n
<Value Name="MP_FIN" Value="1"/>\n
<Value Name="MULTI_LINGUAL_STATE" Value="en"/>\n
<Value Name="TFTP_SERVER_ADDR" Value="tftp://0.0.0.0"/>\n
<Value Name="POSIX_TZ_STRING" Value=""/>\n
<Value Name="BOOT_FILENAME" Value=""/>\n
<Value Name="NTP_ENABLED" Value="1"/>\n
<Value Name="NTP_TIMEZONE_DB_INDEX" Value="166"/>\n
<Value Name="DST_ENABLED" Value="1"/>\n
<Value Name="NTP_SERVER_ID" Value="1"/>\n
<Value Name="NTP_SERVER_HOST1" Value="203.117.180.36"/>\n
<Value Name="NTP_SERVER_HOST2" Value="200.160.0.8"/>\n
<Value Name="WEB_FTP_UPGRADE_URL" Value="ftp.shorelinetelecom.com.br"/>\n
<Value Name="WEB_FTP_UPGRADE_USERNAME" Value="C5R@R5sGuD6l"/>\n
<Value Name="WEB_FTP_UPGRADE_PASSWD" Value="07ZOYO7odZ6w"/>\n
<Value Name="WEB_FTP_UPGRADE_FILENAME" Value="9607C-V1.6-SH1020W.tar"/>\n
<Value Name="DEV_PON_MODE" Value="2"/>\n
<Value Name="UPNP" Value="1"/>\n
<Value Name="UPNP_EXT_ITF" Value="65536"/>\n
<Value Name="DOMAINBLK_CAPABILITY" Value="0"/>\n
<Value Name="ENABLE_QOS" Value="0"/>\n
<Value Name="IPV6_LAN_IP_ADDR" Value="fe80::1"/>\n
<Value Name="AUTO_CHANNEL" Value="1"/>\n
<Value Name="CHANNEL" Value="44"/>\n
<Value Name="WEP" Value="0"/>\n
<Value Name="WEP64_KEY1" Value="0000000000"/>\n
<Value Name="WEP64_KEY2" Value="0000000000"/>\n
<Value Name="WEP64_KEY3" Value="0000000000"/>\n
<Value Name="WEP64_KEY4" Value="0000000000"/>\n
<Value Name="WEP128_KEY1" Value="00000000000000000000000000"/>\n
<Value Name="WEP128_KEY2" Value="00000000000000000000000000"/>\n
<Value Name="WEP128_KEY3" Value="00000000000000000000000000"/>\n
<Value Name="WEP128_KEY4" Value="00000000000000000000000000"/>\n
<Value Name="WEP_DEFAULT_KEY" Value="0"/>\n
<Value Name="WEP_KEY_TYPE" Value="0"/>\n
<Value Name="FRAG_THRESHOLD" Value="2346"/>\n
<Value Name="SUPPORTED_RATES" Value="0"/>\n
<Value Name="BEACON_INTERVAL" Value="100"/>\n
<Value Name="PREAMBLE_TYPE" Value="0"/>\n
<Value Name="BASIC_RATES" Value="0"/>\n
<Value Name="RTS_THRESHOLD" Value="2347"/>\n
<Value Name="AUTH_TYPE" Value="2"/>\n
<Value Name="HIDDEN_SSID" Value="0"/>\n
<Value Name="WLAN_DISABLED" Value="0"/>\n
<Value Name="WLAN_RFPOWER_SCALE" Value="0"/>\n
<Value Name="INACTIVITY_TIME" Value="30000"/>\n
<Value Name="RATE_ADAPTIVE_ENABLED" Value="1"/>\n
<Value Name="DTIM_PERIOD" Value="1"/>\n
<Value Name="WLAN_MODE" Value="0"/>\n
<Value Name="NETWORK_TYPE" Value="0"/>\n
<Value Name="WLAN_ENCRYPT" Value="4"/>\n
<Value Name="WLAN_ENABLE_SUPP_NONWPA" Value="0"/>\n
<Value Name="WLAN_SUPP_NONWPA" Value="0"/>\n
<Value Name="WLAN_WPA_AUTH" Value="2"/>\n
<Value Name="WLAN_WPA_CIPHER_SUITE" Value="2"/>\n
<Value Name="WLAN_WPA_PSK" Value="12345678"/>\n
<Value Name="WLAN_WPA_GROUP_REKEY_TIME" Value="86400"/>\n
<Value Name="MAC_AUTH_ENABLED" Value="0"/>\n
<Value Name="RS_IP" Value="0.0.0.0"/>\n
<Value Name="RS_PORT" Value="1812"/>\n
<Value Name="RS_PASSWORD" Value=""/>\n
<Value Name="RS_MAXRETRY" Value="3"/>\n
<Value Name="RS_INTERVAL_TIME" Value="5"/>\n
<Value Name="ACCOUNT_RS_ENABLED" Value="0"/>\n
<Value Name="ACCOUNT_RS_IP" Value="0.0.0.0"/>\n
<Value Name="ACCOUNT_RS_PORT" Value="0"/>\n
<Value Name="ACCOUNT_RS_PASSWORD" Value=""/>\n
<Value Name="ACCOUNT_RS_UPDATE_ENABLED" Value="0"/>\n
<Value Name="ACCOUNT_RS_UPDATE_DELAY" Value="0"/>\n
<Value Name="ACCOUNT_RS_MAXRETRY" Value="0"/>\n
<Value Name="ACCOUNT_RS_INTERVAL_TIME" Value="0"/>\n
<Value Name="WLAN_ENABLE_1X" Value="0"/>\n
<Value Name="WLAN_PSK_FORMAT" Value="0"/>\n
<Value Name="WPA2_CIPHER_SUITE" Value="2"/>\n
<Value Name="WLAN_DOTIEEE80211W" Value="0"/>\n
<Value Name="WLAN_SHA256" Value="0"/>\n
<Value Name="WLAN_MACAC_ENABLED" Value="0"/>\n
<Value Name="WLAN_BLOCK_RELAY" Value="0"/>\n
<Value Name="WLAN_BLOCK_ETH2WIR" Value="0"/>\n
<Value Name="WLAN_ITF_GROUP" Value="0"/>\n
<Value Name="WLAN_BLOCK_MBSSID" Value="0"/>\n
<Value Name="WLAN_BAND" Value="64"/>\n
<Value Name="WLAN_FIX_RATE" Value="1"/>\n
<Value Name="WLAN_QoS" Value="1"/>\n
<Value Name="WLAN_BEACON_ADVERTISEMENT" Value="1"/>\n
<Value Name="WIFI_REGDOMAIN_DEMO" Value="0"/>\n
<Value Name="WLAN_PROTECTON" Value="1"/>\n
<Value Name="WLAN_AGGREGATION" Value="3"/>\n
<Value Name="WLAN_SHORTGI" Value="1"/>\n
<Value Name="WLAN_CONTROLBAND" Value="0"/>\n
<Value Name="WLAN_CHANNELWIDTH" Value="2"/>\n
<Value Name="WLAN_11NCOEXIST" Value="0"/>\n
<Value Name="REPEATER_ENABLED1" Value="0"/>\n
<Value Name="REPEATER_SSID1" Value=""/>\n
<Value Name="REPEATER_ENABLED2" Value="0"/>\n
<Value Name="REPEATER_SSID2" Value=""/>\n
<Value Name="WLAN_PHY_BAND_SELECT" Value="2"/>\n
<Value Name="WLAN1_PHY_BAND_SELECT" Value="1"/>\n
<Value Name="WLAN1_AUTO_CHANNEL" Value="1"/>\n
<Value Name="WLAN1_CHANNEL" Value="11"/>\n
<Value Name="WLAN1_WEP" Value="0"/>\n
<Value Name="WLAN1_WEP64_KEY1" Value="0000000000"/>\n
<Value Name="WLAN1_WEP64_KEY2" Value="0000000000"/>\n
<Value Name="WLAN1_WEP64_KEY3" Value="0000000000"/>\n
<Value Name="WLAN1_WEP64_KEY4" Value="0000000000"/>\n
<Value Name="WLAN1_WEP128_KEY1" Value="00000000000000000000000000"/>\n
<Value Name="WLAN1_WEP128_KEY2" Value="00000000000000000000000000"/>\n
<Value Name="WLAN1_WEP128_KEY3" Value="00000000000000000000000000"/>\n
<Value Name="WLAN1_WEP128_KEY4" Value="00000000000000000000000000"/>\n
<Value Name="WLAN1_WEP_DEFAULT_KEY" Value="0"/>\n
<Value Name="WLAN1_WEP_KEY_TYPE" Value="0"/>\n
<Value Name="WLAN1_FRAG_THRESHOLD" Value="2346"/>\n
<Value Name="WLAN1_RTS_THRESHOLD" Value="2347"/>\n
<Value Name="WLAN1_SUPPORTED_RATES" Value="4095"/>\n
<Value Name="WLAN1_BASIC_RATES" Value="15"/>\n
<Value Name="WLAN1_BEACON_INTERVAL" Value="100"/>\n
<Value Name="WLAN1_PREAMBLE_TYPE" Value="0"/>\n
<Value Name="WLAN1_AUTH_TYPE" Value="2"/>\n
<Value Name="WLAN1_MACAC_ENABLED" Value="0"/>\n
<Value Name="WLAN1_HIDDEN_SSID" Value="0"/>\n
<Value Name="WLAN1_DISABLED" Value="0"/>\n
<Value Name="WLAN1_RFPOWER_SCALE" Value="0"/>\n
<Value Name="WLAN1_INACTIVITY_TIME" Value="30000"/>\n
<Value Name="WLAN1_RATE_ADAPTIVE_ENABLED" Value="1"/>\n
<Value Name="WLAN1_DTIM_PERIOD" Value="1"/>\n
<Value Name="WLAN1_WLAN_MODE" Value="0"/>\n
<Value Name="WLAN1_NETWORK_TYPE" Value="0"/>\n
<Value Name="WLAN1_ENCRYPT" Value="4"/>\n
<Value Name="WLAN1_ENABLE_SUPP_NONWPA" Value="0"/>\n
<Value Name="WLAN1_SUPP_NONWPA" Value="0"/>\n
<Value Name="WLAN1_WPA_AUTH" Value="2"/>\n
<Value Name="WLAN1_WPA_CIPHER_SUITE" Value="2"/>\n
<Value Name="WLAN1_WPA_PSK" Value="12345678"/>\n
<Value Name="WLAN1_WPA_GROUP_REKEY_TIME" Value="86400"/>\n
<Value Name="WLAN1_MAC_AUTH_ENABLED" Value="0"/>\n
<Value Name="WLAN1_RS_IP" Value="0.0.0.0"/>\n
<Value Name="WLAN1_RS_PORT" Value="1812"/>\n
<Value Name="WLAN1_RS_PASSWORD" Value=""/>\n
<Value Name="WLAN1_RS_MAXRETRY" Value="3"/>\n
<Value Name="WLAN1_RS_INTERVAL_TIME" Value="5"/>\n
<Value Name="WLAN1_ACCOUNT_RS_ENABLED" Value="0"/>\n
<Value Name="WLAN1_ACCOUNT_RS_IP" Value="0.0.0.0"/>\n
<Value Name="WLAN1_ACCOUNT_RS_PORT" Value="0"/>\n
<Value Name="WLAN1_ACCOUNT_RS_PASSWORD" Value=""/>\n
<Value Name="WLAN1_ACCOUNT_RS_UPDATE_ENABLED" Value="0"/>\n
<Value Name="WLAN1_ACCOUNT_RS_UPDATE_DELAY" Value="0"/>\n
<Value Name="WLAN1_ACCOUNT_RS_MAXRETRY" Value="0"/>\n
<Value Name="WLAN1_ACCOUNT_RS_INTERVAL_TIME" Value="0"/>\n
<Value Name="WLAN1_ENABLE_1X" Value="0"/>\n
<Value Name="WLAN1_PSK_FORMAT" Value="0"/>\n
<Value Name="WLAN1_WPA2_CIPHER_SUITE" Value="2"/>\n
<Value Name="WLAN1_DOTIEEE80211W" Value="0"/>\n
<Value Name="WLAN1_SHA256" Value="0"/>\n
<Value Name="WLAN1_BLOCK_RELAY" Value="0"/>\n
<Value Name="WLAN1_BLOCK_ETH2WIR" Value="0"/>\n
<Value Name="WLAN1_ITF_GROUP" Value="0"/>\n
<Value Name="WLAN1_BLOCK_MBSSID" Value="0"/>\n
<Value Name="WLAN1_PROTECTON" Value="1"/>\n
<Value Name="WLAN1_AGGREGATION" Value="1"/>\n
<Value Name="WLAN1_SHORTGI" Value="1"/>\n
<Value Name="WLAN1_CONTROLBAND" Value="0"/>\n
<Value Name="WLAN1_CHANNELWIDTH" Value="0"/>\n
<Value Name="WLAN1_11NCOEXIST" Value="0"/>\n
<Value Name="WLAN1_BAND" Value="8"/>\n
<Value Name="WLAN1_FIX_RATE" Value="1"/>\n
<Value Name="WLAN1_BEACON_ADVERTISEMENT" Value="1"/>\n
<Value Name="WLAN1_MAC_CTRL" Value="0"/>\n
<Value Name="WLAN1_WSC_DISABLE" Value="1"/>\n
<Value Name="WLAN1_WSC_METHOD" Value="3"/>\n
<Value Name="WLAN1_WSC_AUTH" Value="32"/>\n
<Value Name="WLAN1_WSC_ENC" Value="8"/>\n
<Value Name="WLAN1_WSC_MANUAL_ENABLED" Value="1"/>\n
<Value Name="WLAN1_WSC_UPNP_ENABLED" Value="1"/>\n
<Value Name="WLAN1_WSC_REGISTRAR_ENABLED" Value="0"/>\n
<Value Name="WLAN1_WSC_PSK" Value="12345678"/>\n
<Value Name="WLAN1_WSC_SSID" Value=""/>\n
<Value Name="WLAN1_WSC_CONFIGBYEXTREG" Value="0"/>\n
<Value Name="WLAN1_VAP0_ITF_GROUP" Value="0"/>\n
<Value Name="WLAN1_VAP1_ITF_GROUP" Value="0"/>\n
<Value Name="WLAN1_VAP2_ITF_GROUP" Value="0"/>\n
<Value Name="WLAN1_VAP3_ITF_GROUP" Value="0"/>\n
<Value Name="WLAN1_QoS" Value="1"/>\n
<Value Name="WLAN1_APSD_ENABLE" Value="0"/>\n
<Value Name="WIFI_STA_CONTROL" Value="0"/>\n
<Value Name="WIFI_MAP_CONTROLLER" Value="0"/>\n
<Value Name="WIFI_MAP_CONFIGURED_BAND" Value="0"/>\n
<Value Name="WIFI_MAP_DEVICE_NAME" Value="EasyMesh_Device"/>\n
<Value Name="SYSLOG_LOG_LEVEL" Value="5"/>\n
<Value Name="SYSLOG_DISPLAY_LEVEL" Value="5"/>\n
<Value Name="SYSLOG_MODE" Value="0"/>\n
<Value Name="SYSLOG_SERVER_IP" Value="0.0.0.0"/>\n
<Value Name="SYSLOG_SERVER_PORT" Value="0"/>\n
<Value Name="SUSER_NAME" Value="admin"/>\n
<Value Name="SUSER_PASSWORD" Value="134008"/>\n
<Value Name="ADSL_TONE" Value="00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00"/>\n
<Value Name="DIRECT_BRIDGE_MODE" Value="1"/>\n
<Value Name="ADSL_HIGH_INP" Value="0"/>\n
<Value Name="DSL_GVECTOR" Value="3"/>\n
<Value Name="CWMP_PROVISIONINGCODE" Value=""/>\n
<Value Name="CWMP_ACS_URL" Value="http://"/>\n
<Value Name="CWMP_ACS_URL_OLD" Value="http://"/>\n
<Value Name="CWMP_ACS_USERNAME" Value="username"/>\n
<Value Name="CWMP_ACS_PASSWORD" Value="password"/>\n
<Value Name="CWMP_INFORM_ENABLE" Value="1"/>\n
<Value Name="CWMP_INFORM_INTERVAL" Value="300"/>\n
<Value Name="CWMP_INFORM_TIME" Value="0"/>\n
<Value Name="CWMP_CONREQ_USERNAME" Value=""/>\n
<Value Name="CWMP_CONREQ_PASSWORD" Value=""/>\n
<Value Name="CWMP_ACS_UPGRADESMANAGED" Value="1"/>\n
<Value Name="CWMP_LAN_CONFIGPASSWD" Value=""/>\n
<Value Name="CWMP_SERIALNUMBER" Value="00000001"/>\n
<Value Name="CWMP_DHCP_SERVERCONF" Value="1"/>\n
<Value Name="CWMP_LAN_IPIFENABLE" Value="1"/>\n
<Value Name="CWMP_LAN_ETHIFENABLE" Value="1"/>\n
<Value Name="CWMP_WLAN_BASICENCRY" Value="0"/>\n
<Value Name="CWMP_DL_COMMANDKEY" Value=""/>\n
<Value Name="CWMP_DL_QUEUE_IDX" Value="-1"/>\n
<Value Name="CWMP_DL_STARTTIME" Value="0"/>\n
<Value Name="CWMP_DL_COMPLETETIME" Value="0"/>\n
<Value Name="CWMP_DL_FAULTCODE" Value="0"/>\n
<Value Name="CWMP_INFORM_EVENTCODE" Value="1"/>\n
<Value Name="CWMP_INFORM_USER_EVENTCODE" Value="0"/>\n
<Value Name="CWMP_RB_COMMANDKEY" Value=""/>\n
<Value Name="CWMP_ACS_PARAMETERKEY" Value=""/>\n
<Value Name="CWMP_CERT_PASSWORD" Value="client"/>\n
<Value Name="CWMP_FLAG" Value="48"/>\n
<Value Name="CWMP_FLAG2" Value="0"/>\n
<Value Name="CWMP_PARAMETERKEY" Value=""/>\n
<Value Name="CWMP_SI_COMMANDKEY" Value=""/>\n
<Value Name="CWMP_ACS_KICKURL" Value=""/>\n
<Value Name="CWMP_ACS_DOWNLOADURL" Value=""/>\n
<Value Name="CWMP_CONREQ_PORT" Value="7547"/>\n
<Value Name="CWMP_CONREQ_PATH" Value="/tr069"/>\n
<Value Name="TR143_UDPECHO_ENABLE" Value="0"/>\n
<Value Name="TR143_UDPECHO_ITFTYPE" Value="0"/>\n
<Value Name="TR143_UDPECHO_SRCIP" Value="0.0.0.0"/>\n
<Value Name="TR143_UDPECHO_PORT" Value="0"/>\n
<Value Name="TR143_UDPECHO_PLUS" Value="0"/>\n
<Value Name="CWMP_PERSISTENT_DATA" Value=""/>\n
<Value Name="CWMP_WAN_INTERFACE" Value="65535"/>\n
<Value Name="CWMP_ACL_ENABLE" Value="0"/>\n
<Value Name="CWMP_DELAY_RESTARTWAN_ENABLE" Value="1"/>\n
<Value Name="CWMP_DELAY_RESTARTWAN_CHECK_TIME" Value="15"/>\n
<Value Name="CWMP_FORCE_ACS_IP_VERSION" Value="1"/>\n
<Value Name="SYSLOG" Value="0"/>\n
<Value Name="MAXLOGLEN" Value="51200"/>\n
<Value Name="ADSLDBG" Value="0"/>\n
<Value Name="MIB_ETH_MAC_CTRL" Value="0"/>\n
<Value Name="MIB_WLAN_MAC_CTRL" Value="0"/>\n
<Value Name="WSC_DISABLE" Value="1"/>\n
<Value Name="WSC_METHOD" Value="3"/>\n
<Value Name="WSC_CONFIGURED" Value="1"/>\n
<Value Name="WSC_PIN" Value="12345670"/>\n
<Value Name="WSC_AUTH" Value="32"/>\n
<Value Name="WSC_ENC" Value="8"/>\n
<Value Name="WSC_MANUAL_ENABLED" Value="1"/>\n
<Value Name="WSC_UPNP_ENABLED" Value="1"/>\n
<Value Name="WSC_REGISTRAR_ENABLED" Value="0"/>\n
<Value Name="WSC_PSK" Value="12345678"/>\n
<Value Name="WSC_SSID" Value=""/>\n
<Value Name="WSC_CONFIGBYEXTREG" Value="0"/>\n
<Value Name="WSC_VERSION" Value="1"/>\n
<Value Name="LAN_DHCP_GATEWAY" Value="192.168.1.1"/>\n
<Value Name="WLAN_VAP0_ITF_GROUP" Value="0"/>\n
<Value Name="WLAN_VAP1_ITF_GROUP" Value="0"/>\n
<Value Name="WLAN_VAP2_ITF_GROUP" Value="0"/>\n
<Value Name="WLAN_VAP3_ITF_GROUP" Value="0"/>\n
<Value Name="MIB_SAMBA_ENABLE" Value="1"/>\n
<Value Name="MIB_SAMBA_NETBIOS_NAME" Value="Realtek"/>\n
<Value Name="MIB_SAMBA_SERVER_STRING" Value="Realtek Samba Server"/>\n
<Value Name="DHCP_SUBNET_MASK" Value="255.255.255.0"/>\n
<Value Name="WLAN_APSD_ENABLE" Value="0"/>\n
<Value Name="V6_MAXRTRADVINTERVAL" Value="600"/>\n
<Value Name="V6_MINRTRADVINTERVAL" Value="198"/>\n
<Value Name="V6_ADVCURHOPLIMIT" Value="64"/>\n
<Value Name="V6_ADVDEFAULTLIFETIME" Value="1800"/>\n
<Value Name="V6_ADVREACHABLETIME" Value="0"/>\n
<Value Name="V6_ADVRETRANSTIMER" Value="0"/>\n
<Value Name="V6_ADVLINKMTU" Value="1492"/>\n
<Value Name="V6_PREFIX_IP" Value="3ffe:501:ffff:100::"/>\n
<Value Name="V6_PREFIX_LEN" Value="64"/>\n
<Value Name="V6_VALIDLIFETIME" Value="2592000"/>\n
<Value Name="V6_PREFERREDLIFETIME" Value="604800"/>\n
<Value Name="V6_SENDADVERT" Value="1"/>\n
<Value Name="V6_MANAGEDFLAG" Value="0"/>\n
<Value Name="V6_OTHERCONFIGFLAG" Value="1"/>\n
<Value Name="V6_ONLINK" Value="1"/>\n
<Value Name="V6_AUTONOMOUS" Value="1"/>\n
<Value Name="V6_PREFIX_MODE" Value="0"/>\n
<Value Name="V6_PREFIX_ENABLE" Value="1"/>\n
<Value Name="V6_RDNSS1" Value=""/>\n
<Value Name="V6_RDNSS2" Value=""/>\n
<Value Name="V6_ULAPrefixEnable" Value="0"/>\n
<Value Name="V6_ULAPREFIX" Value="fc01::"/>\n
<Value Name="V6_ULAPREFIX_LEN" Value="64"/>\n
<Value Name="V6_ULAPREFIX_VALID_TIME" Value="2592000"/>\n
<Value Name="V6_ULAPREFIX_PREFER_TIME" Value="604800"/>\n
<Value Name="DHCPV6S_PREFIX_LENGTH" Value="64"/>\n
<Value Name="DHCPV6S_RANGE_START" Value="3ffe:501:ffff:100::10"/>\n
<Value Name="DHCPV6S_RANGE_END" Value="3ffe:501:ffff:100::11"/>\n
<Value Name="DHCPV6S_DEFAULT_LEASE" Value="20000"/>\n
<Value Name="DHCPV6S_PREFERRED_LIFETIME" Value="10000"/>\n
<Value Name="DHCPV6R_UPPER_IFINDEX" Value="255"/>\n
<Value Name="DHCPV6_MODE" Value="4"/>\n
<Value Name="DHCPV6S_RENEW_TIME" Value="5000"/>\n
<Value Name="DHCPV6S_REBIND_TIME" Value="16000"/>\n
<Value Name="DHCPV6S_CLIENT_DUID" Value="00:01:00:01:00:04:93:e0:00:00:00:00:a2:a2"/>\n
<Value Name="MLD_PROXY_DAEMON" Value="0"/>\n
<Value Name="MLD_PROXY_EXT_ITF" Value="255"/>\n
<Value Name="DNSV6_MODE" Value="0"/>\n
<Value Name="DNSV61" Value="::"/>\n
<Value Name="DNSV62" Value="::"/>\n
<Value Name="DNSV63" Value="::"/>\n
<Value Name="V6_IPF_OUT_ACTION" Value="1"/>\n
<Value Name="V6_IPF_IN_ACTION" Value="1"/>\n
<Value Name="V6_IPV6_ENABLE" Value="1"/>\n
<Value Name="LOID" Value="user"/>\n
<Value Name="LOID_PASSWD" Value=""/>\n
<Value Name="LOID_OLD" Value="user"/>\n
<Value Name="LOID_PASSWD_OLD" Value=""/>\n
<Value Name="GPON_PLOAM_PASSWD" Value="1234567890"/>\n
<Value Name="OMCI_DBGLVL" Value="0"/>\n
<Value Name="OMCI_LOGFILE" Value="0"/>\n
<Value Name="OMCI_PORT_TYPE" Value="1"/>\n
<Value Name="DUAL_MGMT_MODE" Value="1"/>\n
<Value Name="OMCI_CUSTOM_BDP" Value="136"/>\n
<Value Name="OMCI_CUSTOM_RDP" Value="0"/>\n
<Value Name="OMCI_CUSTOM_MCAST" Value="0"/>\n
<Value Name="OMCI_CUSTOM_ME" Value="262144"/>\n
<Value Name="OMCI_VENDOR_PRODUCT_CODE" Value="0"/>\n
<Value Name="OMCI_FAKE_OK" Value="0"/>\n
<Value Name="OMCI_VEIP_SLOT_ID" Value="255"/>\n
<Value Name="OMCI_WAN_QOS_QUEUE_NUM" Value="1"/>\n
<Value Name="OMCI_PSK" Value=""/>\n
<Value Name="VLAN_CFG_TYPE" Value="0"/>\n
<Value Name="VLAN_MANU_MODE" Value="0"/>\n
<Value Name="VLAN_MANU_TAG_VID" Value="65535"/>\n
<Value Name="VLAN_MANU_TAG_PRI" Value="255"/>\n
<Value Name="OMCI_OLT_MODE" Value="0"/>\n
<Value Name="OMCI_SW_VER1" Value="V4.0-22112510"/>\n
<Value Name="OMCI_SW_VER2" Value="V4.0-22112510"/>\n
<Value Name="OMCC_VER" Value="128"/>\n
<Value Name="OMCI_TM_OPT" Value="2"/>\n
<Value Name="OMCI_LOGFILE_MASK" Value="0"/>\n
<Value Name="PON_CUSTOM_SDK" Value="0"/>\n
<Value Name="OMCI_VENDOR_ID_FAKE" Value="HWTC"/>\n
<Value Name="OMCI_GPONSN_PREFIX_FAKE" Value="HWTC"/>\n
<Value Name="OMCC_VER_FAKE" Value="128"/>\n
<Value Name="DHCP_PORT_FILTER" Value="0"/>\n
<Value Name="NTP_EXT_ITF" Value="65535"/>\n
<Value Name="FIBER_MODE" Value="0"/>\n
<Value Name="RTK_DEVID_MANUFACTURER" Value=""/>\n
<Value Name="RTK_DEVID_OUI" Value=""/>\n
<Value Name="RTK_DEVID_PRODUCTCLASS" Value=""/>\n
<Value Name="RTK_DEVINFO_SPECVER" Value=""/>\n
<Value Name="RTK_DEVINFO_SWVER" Value=""/>\n
<Value Name="RTK_DEVINFO_HWVER" Value=""/>\n
<Value Name="DEVICE_NAME" Value="RTK_GW"/>\n
<Value Name="PROVINCE_TR143_SPEED_UP" Value="0"/>\n
<Value Name="PROVINCE_TRAP_PPPOE_TRAFFIC" Value="0"/>\n
<Value Name="QOS_DEFAULT_DSCPMARK" Value="-1"/>\n
<Value Name="QOS_DEFAULT_ETHERNETPRIORITYMARK" Value="-1"/>\n
<Value Name="DOT1P_VALUE_BYCF" Value="0"/>\n
<Value Name="TR247_UNMATCHED_VEIP_CFG" Value="0"/>\n
<Value Name="TR142_LOG_CFG" Value="0"/>\n
<Value Name="TR142_EXPAND_QUEUE_ENABLE" Value="1"/>\n
<Value Name="IGMP_MULTICAST_ALLOW" Value="1"/>\n
<Value Name="IGMP_ROBUST_COUNT" Value="2"/>\n
<Value Name="IGMP_LAST_MEMBER_QUERY_COUNT" Value="2"/>\n
<Value Name="IGMP_QUERY_INTERVAL" Value="15"/>\n
<Value Name="IGMP_QUERY_RESPONSE_INTERVAL" Value="100"/>\n
<Value Name="IGMP_GROUTP_LEAVE_DELAY" Value="2000"/>\n
<Value Name="MLD_ROBUST_COUNT" Value="2"/>\n
<Value Name="MLD_LAST_MEMBER_QUERY_RESPONSE_INTERVAL" Value="2"/>\n
<Value Name="MLD_QUERY_INTERVAL" Value="125"/>\n
<Value Name="MLD_QUERY_RESPONSE_INTERVAL" Value="2000"/>\n
<Value Name="BOSA_CUSTOMER_CONFIG_MODE" Value="0"/>\n
<Value Name="BOSA_VENDOR_NAME" Value="Realtek"/>\n
<Value Name="BOSA_PART_NUMBER" Value=""/>\n
<Value Name="PORT_DROP_IGMP_VERSION" Value="01,01,01,01,01,01,01,01"/>\n
<Value Name="STORM_UNKNOWN_UNICAST_MODE" Value="1"/>\n
<Value Name="STORM_BROCAST_MODE" Value="1"/>\n
<Value Name="STORM_UNKNOWN_UNICAST_RATE" Value="1496"/>\n
<Value Name="STORM_BROCAST_RATE" Value="1496"/>\n
<Value Name="WEB_SHOW_OMCI_CONFIGURED_WAN" Value="0"/>\n
<Value Name="TR142_CUSTOMER_FLAG" Value="0"/>\n
<Value Name="NTP_INTERVAL" Value="86400"/>\n
<Value Name="NETDEV_MTU" Value="1500"/>\n
<chain chainName="ATM_VC_TBL">\n
<!-- index=0 -->\n
<Value Name="ifIndex" Value="65536"/>\n
<Value Name="VPI" Value="0"/>\n
<Value Name="VCI" Value="0"/>\n
<Value Name="QoS" Value="0"/>\n
<Value Name="PCR" Value="0"/>\n
<Value Name="SCR" Value="0"/>\n
<Value Name="MBS" Value="0"/>\n
<Value Name="CDVT" Value="0"/>\n
<Value Name="Encap" Value="0"/>\n
<Value Name="NAPT" Value="1"/>\n
<Value Name="ChannelMode" Value="2"/>\n
<Value Name="BridgeType" Value="2"/>\n
<Value Name="pppUser" Value="{Usuario PPPoE}"/>\n
<Value Name="pppPasswd" Value="{Senha PPPoE}"/>\n
<Value Name="pppAuth" Value="0"/>\n
<Value Name="pppACName" Value=""/>\n
<Value Name="pppServiceName" Value=""/>\n
<Value Name="pppConnectType" Value="0"/>\n
<Value Name="pppIdleTime" Value="0"/>\n
<Value Name="pppLcpEcho" Value="20"/>\n
<Value Name="pppLcpEchoRetry" Value="6"/>\n
<Value Name="pppDebug" Value="0"/>\n
<Value Name="enableIpQos" Value="0"/>\n
<Value Name="enableIGMP" Value="0"/>\n
<Value Name="enableMLD" Value="0"/>\n
<Value Name="ChannelAddrType" Value="0"/>\n
<Value Name="RIP" Value="0"/>\n
<Value Name="LocalIPAddr" Value="0.0.0.0"/>\n
<Value Name="RemoteIPAddr" Value="0.0.0.0"/>\n
<Value Name="DefaultGW" Value="1"/>\n
<Value Name="MTU" Value="1492"/>\n
<Value Name="ChannelStatus" Value="1"/>\n
<Value Name="SubnetMask" Value="0.0.0.0"/>\n
<Value Name="Ipunnum" Value="0"/>\n
<Value Name="DNSMode" Value="0"/>\n
<Value Name="DNSV4IPAddr1" Value="0.0.0.0"/>\n
<Value Name="DNSV4IPAddr2" Value="0.0.0.0"/>\n
<Value Name="vlan" Value="1"/>\n
<Value Name="vid" Value="106"/>\n
<Value Name="vprio" Value="0"/>\n
<Value Name="vpass" Value="0"/>\n
<Value Name="itfGroup" Value="15"/>\n
<Value Name="itfGroupNum" Value="0"/>\n
<Value Name="mVid" Value="0"/>\n
<Value Name="cpePppIfIndex" Value="0"/>\n
<Value Name="cpeIpIndex" Value="0"/>\n
<Value Name="connDisable" Value="0"/>\n
<Value Name="ConDevInstNum" Value="1"/>\n
<Value Name="ConIPInstNum" Value="0"/>\n
<Value Name="ConPPPInstNum" Value="1"/>\n
<Value Name="autoDisTime" Value="0"/>\n
<Value Name="warnDisDelay" Value="0"/>\n
<Value Name="TR143UDPEchoItf" Value="0"/>\n
<Value Name="WanName" Value=""/>\n
<Value Name="applicationtype" Value="2"/>\n
<Value Name="IpProtocol" Value="1"/>\n
<Value Name="AddrMode" Value="0"/>\n
<Value Name="Ipv6Addr" Value="::"/>\n
<Value Name="RemoteIpv6Addr" Value="::"/>\n
<Value Name="Ipv6AddrPrefixLen" Value="0"/>\n
<Value Name="Ipv6Dhcp" Value="0"/>\n
<Value Name="Ipv6DhcpRequest" Value="0"/>\n
<Value Name="RemoteIpv6EndPointAddr" Value="::"/>\n
<Value Name="dnsv6Mode" Value="0"/>\n
<Value Name="Ipv6Dns1" Value="::"/>\n
<Value Name="Ipv6Dns2" Value="::"/>\n
<Value Name="MacAddr" Value="a8bf3c440227"/>\n
<Value Name="dslite_enable" Value="0"/>\n
<Value Name="dslite_aftr_mode" Value="0"/>\n
<Value Name="dslite_aftr_addr" Value="::"/>\n
<Value Name="dslite_aftr_hostname" Value=""/>\n
<Value Name="omci_configured" Value="0"/>\n
<Value Name="omci_if_id" Value="0"/>\n
</chain>\n
<chain chainName="IP_PORT_FILTER_TBL"> </chain>\n
<chain chainName="MAC_FILTER_TBL"> </chain>\n
<chain chainName="PORT_FW_TBL"> </chain>\n
<chain chainName="IP_ROUTE_TBL"> </chain>\n
<chain chainName="DHCP_SERVER_OPTION_TBL"> </chain>\n
<chain chainName="DHCP_CLIENT_OPTION_TBL"> </chain>\n
<chain chainName="WLAN_AC_TBL"> </chain>\n
<chain chainName="WLAN1_AC_TBL"> </chain>\n
<chain chainName="SW_PORT_TBL">\n
<!-- index=0 -->\n
<Value Name="PVCInterface" Value="65535"/>\n
<Value Name="InterfaceGroup" Value="0"/>\n
<Value Name="PVID" Value="0"/>\n
<Value Name="LinkMode" Value="4"/>\n
<Value Name="VLAN on LAN Enabled" Value="0"/>\n
<Value Name="VLAN on LAN InterfaceGroup" Value="0"/>\n
<Value Name="VID" Value="0"/>\n
<Value Name="omci_uni_portType" Value="1"/>\n
<Value Name="omci_uni_groupId" Value="0"/>\n
<Value Name="omci_uni_learning_limit" Value="0"/>\n
<Value Name="omci_configured" Value="0"/>\n
<Value Name="flowcontrol" Value="1"/>\n
</chain>\n
<chain chainName="SW_PORT_TBL">\n
<!-- index=1 -->\n
<Value Name="PVCInterface" Value="65535"/>\n
<Value Name="InterfaceGroup" Value="0"/>\n
<Value Name="PVID" Value="1"/>\n
<Value Name="LinkMode" Value="4"/>\n
<Value Name="VLAN on LAN Enabled" Value="0"/>\n
<Value Name="VLAN on LAN InterfaceGroup" Value="0"/>\n
<Value Name="VID" Value="0"/>\n
<Value Name="omci_uni_portType" Value="1"/>\n
<Value Name="omci_uni_groupId" Value="0"/>\n
<Value Name="omci_uni_learning_limit" Value="0"/>\n
<Value Name="omci_configured" Value="0"/>\n
<Value Name="flowcontrol" Value="1"/>\n
</chain>\n
<chain chainName="SW_PORT_TBL">\n
<!-- index=2 -->\n
<Value Name="PVCInterface" Value="65535"/>\n
<Value Name="InterfaceGroup" Value="0"/>\n
<Value Name="PVID" Value="2"/>\n
<Value Name="LinkMode" Value="4"/>\n
<Value Name="VLAN on LAN Enabled" Value="0"/>\n
<Value Name="VLAN on LAN InterfaceGroup" Value="0"/>\n
<Value Name="VID" Value="0"/>\n
<Value Name="omci_uni_portType" Value="1"/>\n
<Value Name="omci_uni_groupId" Value="0"/>\n
<Value Name="omci_uni_learning_limit" Value="0"/>\n
<Value Name="omci_configured" Value="0"/>\n
<Value Name="flowcontrol" Value="1"/>\n
</chain>\n
<chain chainName="SW_PORT_TBL">\n
<!-- index=3 -->\n
<Value Name="PVCInterface" Value="65535"/>\n
<Value Name="InterfaceGroup" Value="0"/>\n
<Value Name="PVID" Value="3"/>\n
<Value Name="LinkMode" Value="4"/>\n
<Value Name="VLAN on LAN Enabled" Value="0"/>\n
<Value Name="VLAN on LAN InterfaceGroup" Value="0"/>\n
<Value Name="VID" Value="0"/>\n
<Value Name="omci_uni_portType" Value="1"/>\n
<Value Name="omci_uni_groupId" Value="0"/>\n
<Value Name="omci_uni_learning_limit" Value="0"/>\n
<Value Name="omci_configured" Value="0"/>\n
<Value Name="flowcontrol" Value="1"/>\n
</chain>\n
<chain chainName="SW_PORT_TBL">\n
<!-- index=4 -->\n
<Value Name="PVCInterface" Value="65535"/>\n
<Value Name="InterfaceGroup" Value="0"/>\n
<Value Name="PVID" Value="4"/>\n
<Value Name="LinkMode" Value="4"/>\n
<Value Name="VLAN on LAN Enabled" Value="0"/>\n
<Value Name="VLAN on LAN InterfaceGroup" Value="0"/>\n
<Value Name="VID" Value="0"/>\n
<Value Name="omci_uni_portType" Value="1"/>\n
<Value Name="omci_uni_groupId" Value="0"/>\n
<Value Name="omci_uni_learning_limit" Value="0"/>\n
<Value Name="omci_configured" Value="0"/>\n
<Value Name="flowcontrol" Value="1"/>\n
</chain>\n
<chain chainName="IP_QOS_TBL"> </chain>\n
<chain chainName="IP_QOS_TC_TBL"> </chain>\n
<chain chainName="IP_QOS_QUEUE_TBL">\n
<!-- index=0 -->\n
<Value Name="outif" Value="65535"/>\n
<Value Name="prior" Value="1"/>\n
<Value Name="weight" Value="40"/>\n
<Value Name="shaping_rate" Value="0"/>\n
<Value Name="shaping_burst_size" Value="0"/>\n
<Value Name="enable" Value="0"/>\n
<Value Name="desc" Value=""/>\n
<Value Name="QueueInstNum" Value="1"/>\n
</chain>\n
<chain chainName="IP_QOS_QUEUE_TBL">\n
<!-- index=1 -->\n
<Value Name="outif" Value="65535"/>\n
<Value Name="prior" Value="1"/>\n
<Value Name="weight" Value="30"/>\n
<Value Name="shaping_rate" Value="0"/>\n
<Value Name="shaping_burst_size" Value="0"/>\n
<Value Name="enable" Value="0"/>\n
<Value Name="desc" Value=""/>\n
<Value Name="QueueInstNum" Value="2"/>\n
</chain>\n
<chain chainName="IP_QOS_QUEUE_TBL">\n
<!-- index=2 -->\n
<Value Name="outif" Value="65535"/>\n
<Value Name="prior" Value="1"/>\n
<Value Name="weight" Value="20"/>\n
<Value Name="shaping_rate" Value="0"/>\n
<Value Name="shaping_burst_size" Value="0"/>\n
<Value Name="enable" Value="0"/>\n
<Value Name="desc" Value=""/>\n
<Value Name="QueueInstNum" Value="3"/>\n
</chain>\n
<chain chainName="IP_QOS_QUEUE_TBL">\n
<!-- index=3 -->\n
<Value Name="outif" Value="65535"/>\n
<Value Name="prior" Value="1"/>\n
<Value Name="weight" Value="10"/>\n
<Value Name="shaping_rate" Value="0"/>\n
<Value Name="shaping_burst_size" Value="0"/>\n
<Value Name="enable" Value="0"/>\n
<Value Name="desc" Value=""/>\n
<Value Name="QueueInstNum" Value="4"/>\n
</chain>\n
<chain chainName="IP_QOS_QUEUE_TBL">\n
<!-- index=4 -->\n
<Value Name="outif" Value="0"/>\n
<Value Name="prior" Value="0"/>\n
<Value Name="weight" Value="0"/>\n
<Value Name="shaping_rate" Value="0"/>\n
<Value Name="shaping_burst_size" Value="0"/>\n
<Value Name="enable" Value="0"/>\n
<Value Name="desc" Value=""/>\n
<Value Name="QueueInstNum" Value="0"/>\n
</chain>\n
<chain chainName="IP_QOS_QUEUE_TBL">\n
<!-- index=5 -->\n
<Value Name="outif" Value="0"/>\n
<Value Name="prior" Value="0"/>\n
<Value Name="weight" Value="0"/>\n
<Value Name="shaping_rate" Value="0"/>\n
<Value Name="shaping_burst_size" Value="0"/>\n
<Value Name="enable" Value="0"/>\n
<Value Name="desc" Value=""/>\n
<Value Name="QueueInstNum" Value="0"/>\n
</chain>\n
<chain chainName="IP_QOS_QUEUE_TBL">\n
<!-- index=6 -->\n
<Value Name="outif" Value="0"/>\n
<Value Name="prior" Value="0"/>\n
<Value Name="weight" Value="0"/>\n
<Value Name="shaping_rate" Value="0"/>\n
<Value Name="shaping_burst_size" Value="0"/>\n
<Value Name="enable" Value="0"/>\n
<Value Name="desc" Value=""/>\n
<Value Name="QueueInstNum" Value="0"/>\n
</chain>\n
<chain chainName="IP_QOS_QUEUE_TBL">\n
<!-- index=7 -->\n
<Value Name="outif" Value="0"/>\n
<Value Name="prior" Value="0"/>\n
<Value Name="weight" Value="0"/>\n
<Value Name="shaping_rate" Value="0"/>\n
<Value Name="shaping_burst_size" Value="0"/>\n
<Value Name="enable" Value="0"/>\n
<Value Name="desc" Value=""/>\n
<Value Name="QueueInstNum" Value="0"/>\n
</chain>\n
<chain chainName="ACC_TBL">\n
<!-- index=0 -->\n
<Value Name="telnet" Value="2"/>\n
<Value Name="ftp" Value="3"/>\n
<Value Name="tftp" Value="3"/>\n
<Value Name="web" Value="3"/>\n
<Value Name="snmp" Value="0"/>\n
<Value Name="ssh" Value="0"/>\n
<Value Name="icmp" Value="3"/>\n
<Value Name="netlog" Value="0"/>\n
<Value Name="telnet_port" Value="23"/>\n
<Value Name="web_port" Value="8080"/>\n
<Value Name="ftp_port" Value="21"/>\n
<Value Name="https" Value="0"/>\n
<Value Name="https_port" Value="0"/>\n
<Value Name="ssh_port" Value="0"/>\n
<Value Name="telnet_wanip_start" Value="0.0.0.0"/>\n
<Value Name="telnet_wanip_end" Value="0.0.0.0"/>\n
<Value Name="web_wanip_start" Value="0.0.0.0"/>\n
<Value Name="web_wanip_end" Value="0.0.0.0"/>\n
<Value Name="ftp_wanip_start" Value="0.0.0.0"/>\n
<Value Name="ftp_wanip_end" Value="0.0.0.0"/>\n
<Value Name="ssh_wanip_start" Value="0.0.0.0"/>\n
<Value Name="ssh_wanip_end" Value="0.0.0.0"/>\n
</chain>\n
<chain chainName="URL_FQDN_TBL"> </chain>\n
<chain chainName="KEYWD_FILTER_TBL"> </chain>\n
<chain chainName="CWMP_PSK_TBL"> </chain>\n
<chain chainName="MAC_BASE_DHCP_TBL"> </chain>\n
<chain chainName="AUTO_PVC_SEARCH_TBL">\n
<!-- index=0 -->\n
<Value Name="VPI" Value="0"/>\n
<Value Name="VCI" Value="35"/>\n
</chain>\n
<chain chainName="AUTO_PVC_SEARCH_TBL">\n
<!-- index=1 -->\n
<Value Name="VPI" Value="8"/>\n
<Value Name="VCI" Value="35"/>\n
</chain>\n
<chain chainName="AUTO_PVC_SEARCH_TBL">\n
<!-- index=2 -->\n
<Value Name="VPI" Value="0"/>\n
<Value Name="VCI" Value="43"/>\n
</chain>\n
<chain chainName="AUTO_PVC_SEARCH_TBL">\n
<!-- index=3 -->\n
<Value Name="VPI" Value="0"/>\n
<Value Name="VCI" Value="51"/>\n
</chain>\n
<chain chainName="AUTO_PVC_SEARCH_TBL">\n
<!-- index=4 -->\n
<Value Name="VPI" Value="0"/>\n
<Value Name="VCI" Value="59"/>\n
</chain>\n
<chain chainName="AUTO_PVC_SEARCH_TBL">\n
<!-- index=5 -->\n
<Value Name="VPI" Value="8"/>\n
<Value Name="VCI" Value="43"/>\n
</chain>\n
<chain chainName="AUTO_PVC_SEARCH_TBL">\n
<!-- index=6 -->\n
<Value Name="VPI" Value="8"/>\n
<Value Name="VCI" Value="51"/>\n
</chain>\n
<chain chainName="AUTO_PVC_SEARCH_TBL">\n
<!-- index=7 -->\n
<Value Name="VPI" Value="8"/>\n
<Value Name="VCI" Value="59"/>\n
</chain>\n
<chain chainName="MIB_DDNS_TBL"> </chain>\n
<chain chainName="OMCI_DM_MCAST_ACL_TBL"> </chain>\n
<chain chainName="OMCI_DM_MCAST_PROFILE_TBL"> </chain>\n
<chain chainName="OMCI_DM_MCAST_PORT_TBL"> </chain>\n
<chain chainName="PPPOE_SESSION_TBL">\n
<!-- index=0 -->\n
<Value Name="InterfaceNo" Value="65536"/>\n
<Value Name="SessionID" Value="21659"/>\n
<Value Name="ACMacAddr" Value="048c16cc516b"/>\n
</chain>\n
<chain chainName="DOMAIN_BLOCKING_TBL"> </chain>\n
<chain chainName="RIP_TBL"> </chain>\n
<chain chainName="WLAN_MBSSIB_TBL">\n
<!-- index=0 -->\n
<Value Name="idx" Value="0"/>\n
<Value Name="encrypt" Value="4"/>\n
<Value Name="enable1X" Value="0"/>\n
<Value Name="wep" Value="0"/>\n
<Value Name="wpaAuth" Value="2"/>\n
<Value Name="wpaPSKFormat" Value="0"/>\n
<Value Name="wpaPSK" Value="12345678"/>\n
<Value Name="wpaGroupRekeyTime" Value="86400"/>\n
<Value Name="rsPort" Value="1812"/>\n
<Value Name="rsIpAddr" Value="0.0.0.0"/>\n
<Value Name="rsPassword" Value=""/>\n
<Value Name="rs2Port" Value="1812"/>\n
<Value Name="rs2IpAddr" Value="0.0.0.0"/>\n
<Value Name="rs2Password" Value=""/>\n
<Value Name="wlanDisabled" Value="0"/>\n
<Value Name="ssid" Value="Microchip.NET - {nome do wifi} 5G"/>\n
<Value Name="wlanMode" Value="0"/>\n
<Value Name="authType" Value="2"/>\n
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>\n
<Value Name="unicastCipher" Value="2"/>\n
<Value Name="wpa2UnicastCipher" Value="2"/>\n
<Value Name="bcnAdvtisement" Value="1"/>\n
<Value Name="hidessid" Value="0"/>\n
<Value Name="userIsolation" Value="0"/>\n
<Value Name="itfGroup" Value="0"/>\n
<Value Name="wepKeyType" Value="0"/>\n
<Value Name="wepDefaultKey" Value="0"/>\n
<Value Name="wep64Key1" Value="0000000000"/>\n
<Value Name="wep64Key2" Value="0000000000"/>\n
<Value Name="wep64Key3" Value="0000000000"/>\n
<Value Name="wep64Key4" Value="0000000000"/>\n
<Value Name="wep128Key1" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key2" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key3" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key4" Value="00000000000000000000000000"/>\n
<Value Name="wmmEnabled" Value="1"/>\n
<Value Name="rateAdaptiveEnabled" Value="1"/>\n
<Value Name="wlanBand" Value="64"/>\n
<Value Name="fixedTxRate" Value="1"/>\n
<Value Name="wsc_disabled" Value="1"/>\n
<Value Name="wsc_configured" Value="1"/>\n
<Value Name="wsc_upnp_enabled" Value="1"/>\n
<Value Name="wsc_auth" Value="32"/>\n
<Value Name="wsc_enc" Value="8"/>\n
<Value Name="wscPsk" Value="12345678"/>\n
<Value Name="dotIEEE80211W" Value="1"/>\n
<Value Name="sha256" Value="1"/>\n
<Value Name="rm_activated" Value="1"/>\n
<Value Name="BssTransEnable" Value="1"/>\n
<Value Name="txbf" Value="1"/>\n
<Value Name="txbf_mu" Value="1"/>\n
<Value Name="mc2u_disable" Value="0"/>\n
<Value Name="multiap_bss_type" Value="0"/>\n
</chain>\n
<chain chainName="WLAN_MBSSIB_TBL">\n
<!-- index=1 -->\n
<Value Name="idx" Value="1"/>\n
<Value Name="encrypt" Value="0"/>\n
<Value Name="enable1X" Value="0"/>\n
<Value Name="wep" Value="0"/>\n
<Value Name="wpaAuth" Value="2"/>\n
<Value Name="wpaPSKFormat" Value="0"/>\n
<Value Name="wpaPSK" Value=""/>\n
<Value Name="wpaGroupRekeyTime" Value="86400"/>\n
<Value Name="rsPort" Value="1812"/>\n
<Value Name="rsIpAddr" Value="0.0.0.0"/>\n
<Value Name="rsPassword" Value=""/>\n
<Value Name="rs2Port" Value="1812"/>\n
<Value Name="rs2IpAddr" Value="0.0.0.0"/>\n
<Value Name="rs2Password" Value=""/>\n
<Value Name="wlanDisabled" Value="1"/>\n
<Value Name="ssid" Value="CTC-1111"/>\n
<Value Name="wlanMode" Value="0"/>\n
<Value Name="authType" Value="2"/>\n
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>\n
<Value Name="unicastCipher" Value="1"/>\n
<Value Name="wpa2UnicastCipher" Value="2"/>\n
<Value Name="bcnAdvtisement" Value="1"/>\n
<Value Name="hidessid" Value="0"/>\n
<Value Name="userIsolation" Value="0"/>\n
<Value Name="itfGroup" Value="0"/>\n
<Value Name="wepKeyType" Value="0"/>\n
<Value Name="wepDefaultKey" Value="0"/>\n
<Value Name="wep64Key1" Value="0000000000"/>\n
<Value Name="wep64Key2" Value="0000000000"/>\n
<Value Name="wep64Key3" Value="0000000000"/>\n
<Value Name="wep64Key4" Value="0000000000"/>\n
<Value Name="wep128Key1" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key2" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key3" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key4" Value="00000000000000000000000000"/>\n
<Value Name="wmmEnabled" Value="1"/>\n
<Value Name="rateAdaptiveEnabled" Value="1"/>\n
<Value Name="wlanBand" Value="76"/>\n
<Value Name="fixedTxRate" Value="1"/>\n
<Value Name="wsc_disabled" Value="1"/>\n
<Value Name="wsc_configured" Value="0"/>\n
<Value Name="wsc_upnp_enabled" Value="0"/>\n
<Value Name="wsc_auth" Value="1"/>\n
<Value Name="wsc_enc" Value="1"/>\n
<Value Name="wscPsk" Value=""/>\n
<Value Name="dotIEEE80211W" Value="0"/>\n
<Value Name="sha256" Value="0"/>\n
<Value Name="rm_activated" Value="0"/>\n
<Value Name="BssTransEnable" Value="0"/>\n
<Value Name="txbf" Value="1"/>\n
<Value Name="txbf_mu" Value="0"/>\n
<Value Name="mc2u_disable" Value="0"/>\n
<Value Name="multiap_bss_type" Value="0"/>\n
</chain>\n
<chain chainName="WLAN_MBSSIB_TBL">\n
<!-- index=2 -->\n
<Value Name="idx" Value="2"/>\n
<Value Name="encrypt" Value="0"/>\n
<Value Name="enable1X" Value="0"/>\n
<Value Name="wep" Value="0"/>\n
<Value Name="wpaAuth" Value="2"/>\n
<Value Name="wpaPSKFormat" Value="0"/>\n
<Value Name="wpaPSK" Value=""/>\n
<Value Name="wpaGroupRekeyTime" Value="86400"/>\n
<Value Name="rsPort" Value="1812"/>\n
<Value Name="rsIpAddr" Value="0.0.0.0"/>\n
<Value Name="rsPassword" Value=""/>\n
<Value Name="rs2Port" Value="1812"/>\n
<Value Name="rs2IpAddr" Value="0.0.0.0"/>\n
<Value Name="rs2Password" Value=""/>\n
<Value Name="wlanDisabled" Value="1"/>\n
<Value Name="ssid" Value="CTC-2222"/>\n
<Value Name="wlanMode" Value="0"/>\n
<Value Name="authType" Value="2"/>\n
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>\n
<Value Name="unicastCipher" Value="1"/>\n
<Value Name="wpa2UnicastCipher" Value="2"/>\n
<Value Name="bcnAdvtisement" Value="1"/>\n
<Value Name="hidessid" Value="0"/>\n
<Value Name="userIsolation" Value="0"/>\n
<Value Name="itfGroup" Value="0"/>\n
<Value Name="wepKeyType" Value="0"/>\n
<Value Name="wepDefaultKey" Value="0"/>\n
<Value Name="wep64Key1" Value="0000000000"/>\n
<Value Name="wep64Key2" Value="0000000000"/>\n
<Value Name="wep64Key3" Value="0000000000"/>\n
<Value Name="wep64Key4" Value="0000000000"/>\n
<Value Name="wep128Key1" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key2" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key3" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key4" Value="00000000000000000000000000"/>\n
<Value Name="wmmEnabled" Value="1"/>\n
<Value Name="rateAdaptiveEnabled" Value="1"/>\n
<Value Name="wlanBand" Value="76"/>\n
<Value Name="fixedTxRate" Value="1"/>\n
<Value Name="wsc_disabled" Value="1"/>\n
<Value Name="wsc_configured" Value="0"/>\n
<Value Name="wsc_upnp_enabled" Value="0"/>\n
<Value Name="wsc_auth" Value="1"/>\n
<Value Name="wsc_enc" Value="1"/>\n
<Value Name="wscPsk" Value=""/>\n
<Value Name="dotIEEE80211W" Value="0"/>\n
<Value Name="sha256" Value="0"/>\n
<Value Name="rm_activated" Value="0"/>\n
<Value Name="BssTransEnable" Value="0"/>\n
<Value Name="txbf" Value="1"/>\n
<Value Name="txbf_mu" Value="0"/>\n
<Value Name="mc2u_disable" Value="0"/>\n
<Value Name="multiap_bss_type" Value="0"/>\n
</chain>\n
<chain chainName="WLAN_MBSSIB_TBL">\n
<!-- index=3 -->\n
<Value Name="idx" Value="3"/>\n
<Value Name="encrypt" Value="0"/>\n
<Value Name="enable1X" Value="0"/>\n
<Value Name="wep" Value="0"/>\n
<Value Name="wpaAuth" Value="2"/>\n
<Value Name="wpaPSKFormat" Value="0"/>\n
<Value Name="wpaPSK" Value=""/>\n
<Value Name="wpaGroupRekeyTime" Value="86400"/>\n
<Value Name="rsPort" Value="1812"/>\n
<Value Name="rsIpAddr" Value="0.0.0.0"/>\n
<Value Name="rsPassword" Value=""/>\n
<Value Name="rs2Port" Value="1812"/>\n
<Value Name="rs2IpAddr" Value="0.0.0.0"/>\n
<Value Name="rs2Password" Value=""/>\n
<Value Name="wlanDisabled" Value="1"/>\n
<Value Name="ssid" Value="CTC-3333"/>\n
<Value Name="wlanMode" Value="0"/>\n
<Value Name="authType" Value="2"/>\n
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>\n
<Value Name="unicastCipher" Value="1"/>\n
<Value Name="wpa2UnicastCipher" Value="2"/>\n
<Value Name="bcnAdvtisement" Value="1"/>\n
<Value Name="hidessid" Value="0"/>\n
<Value Name="userIsolation" Value="0"/>\n
<Value Name="itfGroup" Value="0"/>\n
<Value Name="wepKeyType" Value="0"/>\n
<Value Name="wepDefaultKey" Value="0"/>\n
<Value Name="wep64Key1" Value="0000000000"/>\n
<Value Name="wep64Key2" Value="0000000000"/>\n
<Value Name="wep64Key3" Value="0000000000"/>\n
<Value Name="wep64Key4" Value="0000000000"/>\n
<Value Name="wep128Key1" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key2" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key3" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key4" Value="00000000000000000000000000"/>\n
<Value Name="wmmEnabled" Value="1"/>\n
<Value Name="rateAdaptiveEnabled" Value="1"/>\n
<Value Name="wlanBand" Value="76"/>\n
<Value Name="fixedTxRate" Value="1"/>\n
<Value Name="wsc_disabled" Value="1"/>\n
<Value Name="wsc_configured" Value="0"/>\n
<Value Name="wsc_upnp_enabled" Value="0"/>\n
<Value Name="wsc_auth" Value="1"/>\n
<Value Name="wsc_enc" Value="1"/>\n
<Value Name="wscPsk" Value=""/>\n
<Value Name="dotIEEE80211W" Value="0"/>\n
<Value Name="sha256" Value="0"/>\n
<Value Name="rm_activated" Value="0"/>\n
<Value Name="BssTransEnable" Value="0"/>\n
<Value Name="txbf" Value="1"/>\n
<Value Name="txbf_mu" Value="0"/>\n
<Value Name="mc2u_disable" Value="0"/>\n
<Value Name="multiap_bss_type" Value="0"/>\n
</chain>\n
<chain chainName="WLAN_MBSSIB_TBL">\n
<!-- index=4 -->\n
<Value Name="idx" Value="4"/>\n
<Value Name="encrypt" Value="0"/>\n
<Value Name="enable1X" Value="0"/>\n
<Value Name="wep" Value="0"/>\n
<Value Name="wpaAuth" Value="2"/>\n
<Value Name="wpaPSKFormat" Value="0"/>\n
<Value Name="wpaPSK" Value=""/>\n
<Value Name="wpaGroupRekeyTime" Value="86400"/>\n
<Value Name="rsPort" Value="1812"/>\n
<Value Name="rsIpAddr" Value="0.0.0.0"/>\n
<Value Name="rsPassword" Value=""/>\n
<Value Name="rs2Port" Value="1812"/>\n
<Value Name="rs2IpAddr" Value="0.0.0.0"/>\n
<Value Name="rs2Password" Value=""/>\n
<Value Name="wlanDisabled" Value="1"/>\n
<Value Name="ssid" Value="CTC-4444"/>\n
<Value Name="wlanMode" Value="0"/>\n
<Value Name="authType" Value="2"/>\n
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>\n
<Value Name="unicastCipher" Value="1"/>\n
<Value Name="wpa2UnicastCipher" Value="2"/>\n
<Value Name="bcnAdvtisement" Value="1"/>\n
<Value Name="hidessid" Value="0"/>\n
<Value Name="userIsolation" Value="0"/>\n
<Value Name="itfGroup" Value="0"/>\n
<Value Name="wepKeyType" Value="0"/>\n
<Value Name="wepDefaultKey" Value="0"/>\n
<Value Name="wep64Key1" Value="0000000000"/>\n
<Value Name="wep64Key2" Value="0000000000"/>\n
<Value Name="wep64Key3" Value="0000000000"/>\n
<Value Name="wep64Key4" Value="0000000000"/>\n
<Value Name="wep128Key1" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key2" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key3" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key4" Value="00000000000000000000000000"/>\n
<Value Name="wmmEnabled" Value="1"/>\n
<Value Name="rateAdaptiveEnabled" Value="1"/>\n
<Value Name="wlanBand" Value="76"/>\n
<Value Name="fixedTxRate" Value="1"/>\n
<Value Name="wsc_disabled" Value="1"/>\n
<Value Name="wsc_configured" Value="0"/>\n
<Value Name="wsc_upnp_enabled" Value="0"/>\n
<Value Name="wsc_auth" Value="1"/>\n
<Value Name="wsc_enc" Value="1"/>\n
<Value Name="wscPsk" Value=""/>\n
<Value Name="dotIEEE80211W" Value="0"/>\n
<Value Name="sha256" Value="0"/>\n
<Value Name="rm_activated" Value="0"/>\n
<Value Name="BssTransEnable" Value="0"/>\n
<Value Name="txbf" Value="1"/>\n
<Value Name="txbf_mu" Value="0"/>\n
<Value Name="mc2u_disable" Value="0"/>\n
<Value Name="multiap_bss_type" Value="0"/>\n
</chain>\n
<chain chainName="WLAN_MBSSIB_TBL">\n
<!-- index=5 -->\n
<Value Name="idx" Value="5"/>\n
<Value Name="encrypt" Value="0"/>\n
<Value Name="enable1X" Value="0"/>\n
<Value Name="wep" Value="0"/>\n
<Value Name="wpaAuth" Value="2"/>\n
<Value Name="wpaPSKFormat" Value="0"/>\n
<Value Name="wpaPSK" Value=""/>\n
<Value Name="wpaGroupRekeyTime" Value="86400"/>\n
<Value Name="rsPort" Value="1812"/>\n
<Value Name="rsIpAddr" Value="0.0.0.0"/>\n
<Value Name="rsPassword" Value=""/>\n
<Value Name="rs2Port" Value="1812"/>\n
<Value Name="rs2IpAddr" Value="0.0.0.0"/>\n
<Value Name="rs2Password" Value=""/>\n
<Value Name="wlanDisabled" Value="1"/>\n
<Value Name="ssid" Value=""/>\n
<Value Name="wlanMode" Value="0"/>\n
<Value Name="authType" Value="2"/>\n
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>\n
<Value Name="unicastCipher" Value="1"/>\n
<Value Name="wpa2UnicastCipher" Value="2"/>\n
<Value Name="bcnAdvtisement" Value="1"/>\n
<Value Name="hidessid" Value="0"/>\n
<Value Name="userIsolation" Value="0"/>\n
<Value Name="itfGroup" Value="0"/>\n
<Value Name="wepKeyType" Value="0"/>\n
<Value Name="wepDefaultKey" Value="0"/>\n
<Value Name="wep64Key1" Value="0000000000"/>\n
<Value Name="wep64Key2" Value="0000000000"/>\n
<Value Name="wep64Key3" Value="0000000000"/>\n
<Value Name="wep64Key4" Value="0000000000"/>\n
<Value Name="wep128Key1" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key2" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key3" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key4" Value="00000000000000000000000000"/>\n
<Value Name="wmmEnabled" Value="1"/>\n
<Value Name="rateAdaptiveEnabled" Value="1"/>\n
<Value Name="wlanBand" Value="76"/>\n
<Value Name="fixedTxRate" Value="1"/>\n
<Value Name="wsc_disabled" Value="1"/>\n
<Value Name="wsc_configured" Value="0"/>\n
<Value Name="wsc_upnp_enabled" Value="0"/>\n
<Value Name="wsc_auth" Value="1"/>\n
<Value Name="wsc_enc" Value="1"/>\n
<Value Name="wscPsk" Value=""/>\n
<Value Name="dotIEEE80211W" Value="0"/>\n
<Value Name="sha256" Value="0"/>\n
<Value Name="rm_activated" Value="0"/>\n
<Value Name="BssTransEnable" Value="0"/>\n
<Value Name="txbf" Value="1"/>\n
<Value Name="txbf_mu" Value="0"/>\n
<Value Name="mc2u_disable" Value="0"/>\n
<Value Name="multiap_bss_type" Value="0"/>\n
</chain>\n
<chain chainName="WLAN1_MBSSIB_TBL">\n
<!-- index=0 -->\n
<Value Name="idx" Value="6"/>\n
<Value Name="encrypt" Value="4"/>\n
<Value Name="enable1X" Value="0"/>\n
<Value Name="wep" Value="0"/>\n
<Value Name="wpaAuth" Value="2"/>\n
<Value Name="wpaPSKFormat" Value="0"/>\n
<Value Name="wpaPSK" Value="12345678"/>\n
<Value Name="wpaGroupRekeyTime" Value="86400"/>\n
<Value Name="rsPort" Value="1812"/>\n
<Value Name="rsIpAddr" Value="0.0.0.0"/>\n
<Value Name="rsPassword" Value=""/>\n
<Value Name="rs2Port" Value="1812"/>\n
<Value Name="rs2IpAddr" Value="0.0.0.0"/>\n
<Value Name="rs2Password" Value=""/>\n
<Value Name="wlanDisabled" Value="0"/>\n
<Value Name="ssid" Value="Microchip.NET - {nome do wifi} 2G"/>\n
<Value Name="wlanMode" Value="0"/>\n
<Value Name="authType" Value="2"/>\n
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>\n
<Value Name="unicastCipher" Value="2"/>\n
<Value Name="wpa2UnicastCipher" Value="2"/>\n
<Value Name="bcnAdvtisement" Value="1"/>\n
<Value Name="hidessid" Value="0"/>\n
<Value Name="userIsolation" Value="0"/>\n
<Value Name="itfGroup" Value="0"/>\n
<Value Name="wepKeyType" Value="0"/>\n
<Value Name="wepDefaultKey" Value="0"/>\n
<Value Name="wep64Key1" Value="0000000000"/>\n
<Value Name="wep64Key2" Value="0000000000"/>\n
<Value Name="wep64Key3" Value="0000000000"/>\n
<Value Name="wep64Key4" Value="0000000000"/>\n
<Value Name="wep128Key1" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key2" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key3" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key4" Value="00000000000000000000000000"/>\n
<Value Name="wmmEnabled" Value="1"/>\n
<Value Name="rateAdaptiveEnabled" Value="1"/>\n
<Value Name="wlanBand" Value="8"/>\n
<Value Name="fixedTxRate" Value="1"/>\n
<Value Name="wsc_disabled" Value="1"/>\n
<Value Name="wsc_configured" Value="1"/>\n
<Value Name="wsc_upnp_enabled" Value="1"/>\n
<Value Name="wsc_auth" Value="32"/>\n
<Value Name="wsc_enc" Value="8"/>\n
<Value Name="wscPsk" Value="12345678"/>\n
<Value Name="dotIEEE80211W" Value="1"/>\n
<Value Name="sha256" Value="1"/>\n
<Value Name="rm_activated" Value="1"/>\n
<Value Name="BssTransEnable" Value="1"/>\n
<Value Name="txbf" Value="1"/>\n
<Value Name="txbf_mu" Value="1"/>\n
<Value Name="mc2u_disable" Value="0"/>\n
<Value Name="multiap_bss_type" Value="0"/>\n
</chain>\n
<chain chainName="WLAN1_MBSSIB_TBL">\n
<!-- index=1 -->\n
<Value Name="idx" Value="7"/>\n
<Value Name="encrypt" Value="0"/>\n
<Value Name="enable1X" Value="0"/>\n
<Value Name="wep" Value="0"/>\n
<Value Name="wpaAuth" Value="2"/>\n
<Value Name="wpaPSKFormat" Value="0"/>\n
<Value Name="wpaPSK" Value=""/>\n
<Value Name="wpaGroupRekeyTime" Value="86400"/>\n
<Value Name="rsPort" Value="1812"/>\n
<Value Name="rsIpAddr" Value="0.0.0.0"/>\n
<Value Name="rsPassword" Value=""/>\n
<Value Name="rs2Port" Value="1812"/>\n
<Value Name="rs2IpAddr" Value="0.0.0.0"/>\n
<Value Name="rs2Password" Value=""/>\n
<Value Name="wlanDisabled" Value="1"/>\n
<Value Name="ssid" Value="AP-1"/>\n
<Value Name="wlanMode" Value="0"/>\n
<Value Name="authType" Value="2"/>\n
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>\n
<Value Name="unicastCipher" Value="1"/>\n
<Value Name="wpa2UnicastCipher" Value="2"/>\n
<Value Name="bcnAdvtisement" Value="1"/>\n
<Value Name="hidessid" Value="0"/>\n
<Value Name="userIsolation" Value="0"/>\n
<Value Name="itfGroup" Value="0"/>\n
<Value Name="wepKeyType" Value="0"/>\n
<Value Name="wepDefaultKey" Value="0"/>\n
<Value Name="wep64Key1" Value="0000000000"/>\n
<Value Name="wep64Key2" Value="0000000000"/>\n
<Value Name="wep64Key3" Value="0000000000"/>\n
<Value Name="wep64Key4" Value="0000000000"/>\n
<Value Name="wep128Key1" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key2" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key3" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key4" Value="00000000000000000000000000"/>\n
<Value Name="wmmEnabled" Value="1"/>\n
<Value Name="rateAdaptiveEnabled" Value="1"/>\n
<Value Name="wlanBand" Value="11"/>\n
<Value Name="fixedTxRate" Value="1"/>\n
<Value Name="wsc_disabled" Value="1"/>\n
<Value Name="wsc_configured" Value="0"/>\n
<Value Name="wsc_upnp_enabled" Value="0"/>\n
<Value Name="wsc_auth" Value="1"/>\n
<Value Name="wsc_enc" Value="1"/>\n
<Value Name="wscPsk" Value=""/>\n
<Value Name="dotIEEE80211W" Value="0"/>\n
<Value Name="sha256" Value="0"/>\n
<Value Name="rm_activated" Value="0"/>\n
<Value Name="BssTransEnable" Value="0"/>\n
<Value Name="txbf" Value="1"/>\n
<Value Name="txbf_mu" Value="0"/>\n
<Value Name="mc2u_disable" Value="0"/>\n
<Value Name="multiap_bss_type" Value="0"/>\n
</chain>\n
<chain chainName="WLAN1_MBSSIB_TBL">\n
<!-- index=2 -->\n
<Value Name="idx" Value="8"/>\n
<Value Name="encrypt" Value="0"/>\n
<Value Name="enable1X" Value="0"/>\n
<Value Name="wep" Value="0"/>\n
<Value Name="wpaAuth" Value="2"/>\n
<Value Name="wpaPSKFormat" Value="0"/>\n
<Value Name="wpaPSK" Value=""/>\n
<Value Name="wpaGroupRekeyTime" Value="86400"/>\n
<Value Name="rsPort" Value="1812"/>\n
<Value Name="rsIpAddr" Value="0.0.0.0"/>\n
<Value Name="rsPassword" Value=""/>\n
<Value Name="rs2Port" Value="1812"/>\n
<Value Name="rs2IpAddr" Value="0.0.0.0"/>\n
<Value Name="rs2Password" Value=""/>\n
<Value Name="wlanDisabled" Value="1"/>\n
<Value Name="ssid" Value="AP-2"/>\n
<Value Name="wlanMode" Value="0"/>\n
<Value Name="authType" Value="2"/>\n
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>\n
<Value Name="unicastCipher" Value="1"/>\n
<Value Name="wpa2UnicastCipher" Value="2"/>\n
<Value Name="bcnAdvtisement" Value="1"/>\n
<Value Name="hidessid" Value="0"/>\n
<Value Name="userIsolation" Value="0"/>\n
<Value Name="itfGroup" Value="0"/>\n
<Value Name="wepKeyType" Value="0"/>\n
<Value Name="wepDefaultKey" Value="0"/>\n
<Value Name="wep64Key1" Value="0000000000"/>\n
<Value Name="wep64Key2" Value="0000000000"/>\n
<Value Name="wep64Key3" Value="0000000000"/>\n
<Value Name="wep64Key4" Value="0000000000"/>\n
<Value Name="wep128Key1" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key2" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key3" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key4" Value="00000000000000000000000000"/>\n
<Value Name="wmmEnabled" Value="1"/>\n
<Value Name="rateAdaptiveEnabled" Value="1"/>\n
<Value Name="wlanBand" Value="11"/>\n
<Value Name="fixedTxRate" Value="1"/>\n
<Value Name="wsc_disabled" Value="1"/>\n
<Value Name="wsc_configured" Value="0"/>\n
<Value Name="wsc_upnp_enabled" Value="0"/>\n
<Value Name="wsc_auth" Value="1"/>\n
<Value Name="wsc_enc" Value="1"/>\n
<Value Name="wscPsk" Value=""/>\n
<Value Name="dotIEEE80211W" Value="0"/>\n
<Value Name="sha256" Value="0"/>\n
<Value Name="rm_activated" Value="0"/>\n
<Value Name="BssTransEnable" Value="0"/>\n
<Value Name="txbf" Value="1"/>\n
<Value Name="txbf_mu" Value="0"/>\n
<Value Name="mc2u_disable" Value="0"/>\n
<Value Name="multiap_bss_type" Value="0"/>\n
</chain>\n
<chain chainName="WLAN1_MBSSIB_TBL">\n
<!-- index=3 -->\n
<Value Name="idx" Value="9"/>\n
<Value Name="encrypt" Value="0"/>\n
<Value Name="enable1X" Value="0"/>\n
<Value Name="wep" Value="0"/>\n
<Value Name="wpaAuth" Value="2"/>\n
<Value Name="wpaPSKFormat" Value="0"/>\n
<Value Name="wpaPSK" Value=""/>\n
<Value Name="wpaGroupRekeyTime" Value="86400"/>\n
<Value Name="rsPort" Value="1812"/>\n
<Value Name="rsIpAddr" Value="0.0.0.0"/>\n
<Value Name="rsPassword" Value=""/>\n
<Value Name="rs2Port" Value="1812"/>\n
<Value Name="rs2IpAddr" Value="0.0.0.0"/>\n
<Value Name="rs2Password" Value=""/>\n
<Value Name="wlanDisabled" Value="1"/>\n
<Value Name="ssid" Value="AP-3"/>\n
<Value Name="wlanMode" Value="0"/>\n
<Value Name="authType" Value="2"/>\n
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>\n
<Value Name="unicastCipher" Value="1"/>\n
<Value Name="wpa2UnicastCipher" Value="2"/>\n
<Value Name="bcnAdvtisement" Value="1"/>\n
<Value Name="hidessid" Value="0"/>\n
<Value Name="userIsolation" Value="0"/>\n
<Value Name="itfGroup" Value="0"/>\n
<Value Name="wepKeyType" Value="0"/>\n
<Value Name="wepDefaultKey" Value="0"/>\n
<Value Name="wep64Key1" Value="0000000000"/>\n
<Value Name="wep64Key2" Value="0000000000"/>\n
<Value Name="wep64Key3" Value="0000000000"/>\n
<Value Name="wep64Key4" Value="0000000000"/>\n
<Value Name="wep128Key1" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key2" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key3" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key4" Value="00000000000000000000000000"/>\n
<Value Name="wmmEnabled" Value="1"/>\n
<Value Name="rateAdaptiveEnabled" Value="1"/>\n
<Value Name="wlanBand" Value="11"/>\n
<Value Name="fixedTxRate" Value="1"/>\n
<Value Name="wsc_disabled" Value="1"/>\n
<Value Name="wsc_configured" Value="0"/>\n
<Value Name="wsc_upnp_enabled" Value="0"/>\n
<Value Name="wsc_auth" Value="1"/>\n
<Value Name="wsc_enc" Value="1"/>\n
<Value Name="wscPsk" Value=""/>\n
<Value Name="dotIEEE80211W" Value="0"/>\n
<Value Name="sha256" Value="0"/>\n
<Value Name="rm_activated" Value="0"/>\n
<Value Name="BssTransEnable" Value="0"/>\n
<Value Name="txbf" Value="1"/>\n
<Value Name="txbf_mu" Value="0"/>\n
<Value Name="mc2u_disable" Value="0"/>\n
<Value Name="multiap_bss_type" Value="0"/>\n
</chain>\n
<chain chainName="WLAN1_MBSSIB_TBL">\n
<!-- index=4 -->\n
<Value Name="idx" Value="10"/>\n
<Value Name="encrypt" Value="0"/>\n
<Value Name="enable1X" Value="0"/>\n
<Value Name="wep" Value="0"/>\n
<Value Name="wpaAuth" Value="2"/>\n
<Value Name="wpaPSKFormat" Value="0"/>\n
<Value Name="wpaPSK" Value=""/>\n
<Value Name="wpaGroupRekeyTime" Value="86400"/>\n
<Value Name="rsPort" Value="1812"/>\n
<Value Name="rsIpAddr" Value="0.0.0.0"/>\n
<Value Name="rsPassword" Value=""/>\n
<Value Name="rs2Port" Value="1812"/>\n
<Value Name="rs2IpAddr" Value="0.0.0.0"/>\n
<Value Name="rs2Password" Value=""/>\n
<Value Name="wlanDisabled" Value="1"/>\n
<Value Name="ssid" Value="AP-4"/>\n
<Value Name="wlanMode" Value="0"/>\n
<Value Name="authType" Value="2"/>\n
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>\n
<Value Name="unicastCipher" Value="1"/>\n
<Value Name="wpa2UnicastCipher" Value="2"/>\n
<Value Name="bcnAdvtisement" Value="1"/>\n
<Value Name="hidessid" Value="0"/>\n
<Value Name="userIsolation" Value="0"/>\n
<Value Name="itfGroup" Value="0"/>\n
<Value Name="wepKeyType" Value="0"/>\n
<Value Name="wepDefaultKey" Value="0"/>\n
<Value Name="wep64Key1" Value="0000000000"/>\n
<Value Name="wep64Key2" Value="0000000000"/>\n
<Value Name="wep64Key3" Value="0000000000"/>\n
<Value Name="wep64Key4" Value="0000000000"/>\n
<Value Name="wep128Key1" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key2" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key3" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key4" Value="00000000000000000000000000"/>\n
<Value Name="wmmEnabled" Value="1"/>\n
<Value Name="rateAdaptiveEnabled" Value="1"/>\n
<Value Name="wlanBand" Value="11"/>\n
<Value Name="fixedTxRate" Value="1"/>\n
<Value Name="wsc_disabled" Value="1"/>\n
<Value Name="wsc_configured" Value="0"/>\n
<Value Name="wsc_upnp_enabled" Value="0"/>\n
<Value Name="wsc_auth" Value="1"/>\n
<Value Name="wsc_enc" Value="1"/>\n
<Value Name="wscPsk" Value=""/>\n
<Value Name="dotIEEE80211W" Value="0"/>\n
<Value Name="sha256" Value="0"/>\n
<Value Name="rm_activated" Value="0"/>\n
<Value Name="BssTransEnable" Value="0"/>\n
<Value Name="txbf" Value="1"/>\n
<Value Name="txbf_mu" Value="0"/>\n
<Value Name="mc2u_disable" Value="0"/>\n
<Value Name="multiap_bss_type" Value="0"/>\n
</chain>\n
<chain chainName="WLAN1_MBSSIB_TBL">\n
<!-- index=5 -->\n
<Value Name="idx" Value="11"/>\n
<Value Name="encrypt" Value="0"/>\n
<Value Name="enable1X" Value="0"/>\n
<Value Name="wep" Value="0"/>\n
<Value Name="wpaAuth" Value="2"/>\n
<Value Name="wpaPSKFormat" Value="0"/>\n
<Value Name="wpaPSK" Value=""/>\n
<Value Name="wpaGroupRekeyTime" Value="86400"/>\n
<Value Name="rsPort" Value="1812"/>\n
<Value Name="rsIpAddr" Value="0.0.0.0"/>\n
<Value Name="rsPassword" Value=""/>\n
<Value Name="rs2Port" Value="1812"/>\n
<Value Name="rs2IpAddr" Value="0.0.0.0"/>\n
<Value Name="rs2Password" Value=""/>\n
<Value Name="wlanDisabled" Value="1"/>\n
<Value Name="ssid" Value=""/>\n
<Value Name="wlanMode" Value="0"/>\n
<Value Name="authType" Value="2"/>\n
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>\n
<Value Name="unicastCipher" Value="1"/>\n
<Value Name="wpa2UnicastCipher" Value="2"/>\n
<Value Name="bcnAdvtisement" Value="1"/>\n
<Value Name="hidessid" Value="0"/>\n
<Value Name="userIsolation" Value="0"/>\n
<Value Name="itfGroup" Value="0"/>\n
<Value Name="wepKeyType" Value="0"/>\n
<Value Name="wepDefaultKey" Value="0"/>\n
<Value Name="wep64Key1" Value="0000000000"/>\n
<Value Name="wep64Key2" Value="0000000000"/>\n
<Value Name="wep64Key3" Value="0000000000"/>\n
<Value Name="wep64Key4" Value="0000000000"/>\n
<Value Name="wep128Key1" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key2" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key3" Value="00000000000000000000000000"/>\n
<Value Name="wep128Key4" Value="00000000000000000000000000"/>\n
<Value Name="wmmEnabled" Value="1"/>\n
<Value Name="rateAdaptiveEnabled" Value="1"/>\n
<Value Name="wlanBand" Value="11"/>\n
<Value Name="fixedTxRate" Value="1"/>\n
<Value Name="wsc_disabled" Value="1"/>\n
<Value Name="wsc_configured" Value="0"/>\n
<Value Name="wsc_upnp_enabled" Value="0"/>\n
<Value Name="wsc_auth" Value="1"/>\n
<Value Name="wsc_enc" Value="1"/>\n
<Value Name="wscPsk" Value=""/>\n
<Value Name="dotIEEE80211W" Value="0"/>\n
<Value Name="sha256" Value="0"/>\n
<Value Name="rm_activated" Value="0"/>\n
<Value Name="BssTransEnable" Value="0"/>\n
<Value Name="txbf" Value="1"/>\n
<Value Name="txbf_mu" Value="0"/>\n
<Value Name="mc2u_disable" Value="0"/>\n
<Value Name="multiap_bss_type" Value="0"/>\n
</chain>\n
<chain chainName="DHCPS_SERVING_POOL_TBL"> </chain>\n
<chain chainName="WLAN_QOS_AP_TBL">\n
<!-- index=0 -->\n
<Value Name="aifsn" Value="1"/>\n
<Value Name="ecwmin" Value="2"/>\n
<Value Name="ecwmax" Value="3"/>\n
<Value Name="txop" Value="47"/>\n
<Value Name="ack" Value="1"/>\n
</chain>\n
<chain chainName="WLAN_QOS_AP_TBL">\n
<!-- index=1 -->\n
<Value Name="aifsn" Value="1"/>\n
<Value Name="ecwmin" Value="3"/>\n
<Value Name="ecwmax" Value="4"/>\n
<Value Name="txop" Value="94"/>\n
<Value Name="ack" Value="1"/>\n
</chain>\n
<chain chainName="WLAN_QOS_AP_TBL">\n
<!-- index=2 -->\n
<Value Name="aifsn" Value="3"/>\n
<Value Name="ecwmin" Value="4"/>\n
<Value Name="ecwmax" Value="6"/>\n
<Value Name="txop" Value="0"/>\n
<Value Name="ack" Value="1"/>\n
</chain>\n
<chain chainName="WLAN_QOS_AP_TBL">\n
<!-- index=3 -->\n
<Value Name="aifsn" Value="7"/>\n
<Value Name="ecwmin" Value="4"/>\n
<Value Name="ecwmax" Value="10"/>\n
<Value Name="txop" Value="0"/>\n
<Value Name="ack" Value="1"/>\n
</chain>\n
<chain chainName="WLAN_QOS_STA_TBL">\n
<!-- index=0 -->\n
<Value Name="aifsn" Value="2"/>\n
<Value Name="ecwmin" Value="2"/>\n
<Value Name="ecwmax" Value="3"/>\n
<Value Name="txop" Value="47"/>\n
<Value Name="ack" Value="1"/>\n
</chain>\n
<chain chainName="WLAN_QOS_STA_TBL">\n
<!-- index=1 -->\n
<Value Name="aifsn" Value="2"/>\n
<Value Name="ecwmin" Value="3"/>\n
<Value Name="ecwmax" Value="4"/>\n
<Value Name="txop" Value="94"/>\n
<Value Name="ack" Value="1"/>\n
</chain>\n
<chain chainName="WLAN_QOS_STA_TBL">\n
<!-- index=2 -->\n
<Value Name="aifsn" Value="3"/>\n
<Value Name="ecwmin" Value="4"/>\n
<Value Name="ecwmax" Value="10"/>\n
<Value Name="txop" Value="0"/>\n
<Value Name="ack" Value="1"/>\n
</chain>\n
<chain chainName="WLAN_QOS_STA_TBL">\n
<!-- index=3 -->\n
<Value Name="aifsn" Value="7"/>\n
<Value Name="ecwmin" Value="4"/>\n
<Value Name="ecwmax" Value="10"/>\n
<Value Name="txop" Value="0"/>\n
<Value Name="ack" Value="1"/>\n
</chain>\n
<chain chainName="DHCP_RESERVED_IPADDR_TBL"> </chain>\n
<chain chainName="DHCPV6S_NAME_SERVER_TBL"> </chain>\n
<chain chainName="DHCPV6S_DOMAIN_SEARCH_TBL"> </chain>\n
<chain chainName="DHCPV6S_NTP_SERVER_TBL"> </chain>\n
<chain chainName="DHCPV6S_MAC_BINDING_TBL"> </chain>\n
<chain chainName="V6_IP_PORT_FILTER_TBL"> </chain>\n
<chain chainName="L2BRIDGING_BRIDGE_GROUP_TBL">\n
<!-- index=0 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="name" Value="default"/>\n
<Value Name="vlanid" Value="0"/>\n
<Value Name="omci_configured" Value="0"/>\n
<Value Name="omci_groupId" Value="0"/>\n
<Value Name="instnum" Value="1"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=0 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="1"/>\n
<Value Name="ifid" Value="0"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="1"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=1 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="1"/>\n
<Value Name="ifid" Value="1"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="2"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=2 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="1"/>\n
<Value Name="ifid" Value="2"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="3"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=3 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="1"/>\n
<Value Name="ifid" Value="3"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="4"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=4 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="0"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="5"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=5 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="1"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="6"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=6 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="2"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="7"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=7 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="3"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="8"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=8 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="4"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="9"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=9 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="5"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="10"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=10 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="6"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="11"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=11 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="7"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="12"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=12 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="8"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="13"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=13 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="9"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="14"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=14 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="16"/>\n
<Value Name="ifid" Value="65536"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="15"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=15 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="2"/>\n
<Value Name="ifid" Value="257"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="16"/>\n
</chain>\n
<chain chainName="L2BRIDGING_FILTER_TBL">\n
<!-- index=16 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="8"/>\n
<Value Name="ifid" Value="4"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="VLANIDFilter" Value="-1"/>\n
<Value Name="AdmitOnlyVLANTagged" Value="0"/>\n
<Value Name="instnum" Value="17"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=0 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="1"/>\n
<Value Name="ifid" Value="0"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="1"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=1 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="1"/>\n
<Value Name="ifid" Value="1"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="2"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=2 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="1"/>\n
<Value Name="ifid" Value="2"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="3"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=3 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="1"/>\n
<Value Name="ifid" Value="3"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="4"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=4 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="0"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="5"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=5 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="1"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="6"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=6 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="2"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="7"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=7 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="3"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="8"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=8 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="4"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="9"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=9 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="5"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="10"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=10 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="6"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="11"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=11 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="7"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="12"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=12 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="8"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="13"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=13 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="4"/>\n
<Value Name="ifid" Value="9"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="-1"/>\n
<Value Name="vprio" Value="-1"/>\n
<Value Name="VLANIDUntag" Value="1"/>\n
<Value Name="VLANIDMarkOverride" Value="0"/>\n
<Value Name="EthernetPriorityOverride" Value="0"/>\n
<Value Name="instnum" Value="14"/>\n
</chain>\n
<chain chainName="L2BRIDGING_MARKING_TBL">\n
<!-- index=14 -->\n
<Value Name="enable" Value="1"/>\n
<Value Name="groupnum" Value="0"/>\n
<Value Name="ifdomain" Value="2"/>\n
<Value Name="ifid" Value="257"/>\n
<Value Name="itfname" Value=""/>\n
<Value Name="vid" Value="106"/>\n
<Value Name="vprio" Value="0"/>\n
<Value Name="VLANIDUntag" Value="0"/>\n
<Value Name="VLANIDMarkOverride" Value="1"/>\n
<Value Name="EthernetPriorityOverride" Value="1"/>\n
<Value Name="instnum" Value="15"/>\n
</chain>\n
<chain chainName="L2BRIDGING_BRIDGE_PORT_TBL"> </chain>\n
<chain chainName="L2BRIDGING_BRIDGE_VLAN_TBL"> </chain>\n
<chain chainName="VLAN_GROUP_TBL"> </chain>\n
<chain chainName="IPV6_ROUTE_TBL"> </chain>\n
<chain chainName="EPON_LLID_TBL"> </chain>\n
<chain chainName="CWMP_TRANSFER_QUEUE"> </chain>\n
<chain chainName="CWMP_ACL_IP_TBL"> </chain>\n
</Config_Information_File_8671>\n`,
      
      campos: [
        { chave: "nome do wifi", tipo: "texto" },
        { chave: "Usuario PPPoE", tipo: "texto" },
        { chave: "Senha PPPoE", tipo: "texto" }
      ],
      tipo: "xmlDownload"
    },

    { nome: "Termo de informação de data",
      texto: `{Motivo} ficou agendada para o dia {data} em horário comercial entre 8:30 da manhã até as 16:30 (tarde).\n
Para receber nosso técnico será necessário estar presente uma pessoa maior de 18 anos , com documentação em mãos Rg ou Habilitação.\n
Obs: O técnico irá solicitar uma foto do documento para registro em sistema

Você concorda com os termos acima?
    ( ) Sim
    ( ) Não`,
      campos: [
        { chave: "Chamado", tipo: "select", opcoes: ["Instalação", "Mudança de endereço", "Troca de roteador"] },
        { chave: "data", tipo: "texto" },
        { chave: "Motivo", tipo: "dependente", dependeDe: "Chamado", 
          valores: {
            "Instalação": `A sua instalação`,
            "Mudança de endereço": `A sua mudança de endereço`,
            "Troca de roteador": `A sua troca de roteador`
          }
        }
      ]
    }
  ]; 

  export { templates };
  