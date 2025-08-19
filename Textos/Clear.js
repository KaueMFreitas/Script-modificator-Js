const templates = [
  
  { nome: "- Escolha um Script -" },

    { nome: "Termos de aceite de contrato",
      texto: `*TERMO DE ACEITE DE CONTRATO* 

De um lado, {Nome completo}, e-mail {E-Mail do cliente}, CPF {CPF do cliente}, endereço {Endereço completo}, {Complemento segundo ponto}denominado *CONTRATANTE.*

De outro, Microchip.NET Fibra Óptica LTDA, e-mail sac@microchipnet.com.br, CNPJ 11.062.024/0001-91, sede na Av. Senador Salgado Filho 277 - Parque São Vicente - SP, denominada *CONTRATADA.*

*Objeto:* prestação de Serviços de Comunicação Multimídia para conexão do CONTRATANTE à internet, conforme condições do “Contrato de Prestação de Serviços de Comunicação Multimídia”.

O *CONTRATANTE* declara estar ciente do tratamento de dados feito pela CONTRATADA, nos termos da Lei 13.709/2018, autorizando-o de forma livre e clara, e reconhece que esses dados são necessários para a execução do serviço.

*INFOMAÇÕES CONTRATUAIS:*

*FIDELIDADE:* 12 (doze) meses, sendo o valor da multa por quebra contratual proporcional a {Preço Taxa de adesão}, calculado com base nos meses restantes do período de fidelização. Caso ocorra o cancelamento por solicitação do CLIENTE antes do término do período, será aplicada a multa proporcional.

*MUDANÇA DE ENDEREÇO:* Se o cliente pedir a mudança de endereço antes de completar 6 (seis) meses de contrato, será cobrada uma taxa para o serviço de remanejamento da conexão, cujo valor seguirá a tabela vigente na data do pedido. Caso a mudança de endereço aconteça depois desse período de 6 (seis) meses, essa taxa poderá ser isenta, desde que o contrato seja renovado automaticamente por mais 12 (doze) meses. Em situações em que não houver viabilidade técnica no novo endereço, o cliente deverá pagar a multa contratual, a não ser que apresente um documento que comprove o novo endereço, podendo assim ser dispensado do pagamento. Se houver uma nova solicitação de mudança de endereço ou cancelamento dentro desse novo período, será cobrada a taxa integral de R$ 120,00 (cento e vinte reais), além da multa proporcional, quando aplicável.

*PLANO:* {Plano contratado} com valor de mensalidade de {Preço}, com vencimento no {Dia de vencimento}, sujeito a correções anuais. Velocidade de download de {Velocidade do plano} e upload de 50% do plano. Prazo máximo de instalação de 05 dias úteis. A banda contratada tem garantia de 100% da velocidade. Os equipamentos são cedidos em regime de comodato. O IP será dinâmico, podendo ser público ou CGNAT.

*PAGAMENTO:* A fatura será enviada exclusivamente por canais eletrônicos (SAC Web, aplicativo, WhatsApp ou e-mail).

*ATENDIMENTO SAC:* Técnico, comercial e financeiro: de segunda a domingo, das 08h às 00h.

*ATENDIMENTO TÉCNICO PRESENCIAL:* De segunda a domingo, das 08h às 21h.

O *CONTRATANTE* declara que os dados informados e documentos apresentados são verdadeiros, estando ciente das penalidades em caso de falsidade.
O *CONTRATANTE* confirma que teve acesso prévio a todas as informações do contrato e do plano descrito neste termo.

*A assinatura deste termo significa concordância com o “Contrato de Prestação de Serviços de Comunicação Multimídia”, registrado no Cartório de Santos sob nº 723.447, de 16/06/2020, que faz parte deste documento.*

Você concorda com os termos acima?
*( ) SIM*
*( ) NÃO*`,
  
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
        { chave: "Velocidade do plano", tipo: "dependente", dependeDe: "Plano",
          valores: {
            "300Mb": "300Mbps",
            "500Mb": "500Mbps",
            "600Mb": "600Mbps",
            "300Mb + 100Mb": "400Mbps",
            "500Mb + 100Mb": "600Mbps",
            "600Mb + 200Mb": "800Mbps"
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

    { nome: "Configurar Sheroline",
      texto: `<Config_Information_File_8671>
<Value Name="WAN_MODE" Value="7"/>
<Value Name="LAN_IP_ADDR" Value="192.168.1.1"/>
<Value Name="LAN_SUBNET" Value="255.255.255.0"/>
<Value Name="LAN_ENABLE_IP2" Value="0"/>
<Value Name="LAN_IP_ADDR2" Value="192.168.100.1"/>
<Value Name="LAN_SUBNET2" Value="255.255.255.0"/>
<Value Name="LAN_DHCP" Value="0"/>
<Value Name="LAN_DHCP_POOLUSE" Value="0"/>
<Value Name="LAN_DHCP_START" Value="2"/>
<Value Name="LAN_DHCP_END" Value="100"/>
<Value Name="LAN_DHCP_POOL_START" Value="192.168.1.33"/>
<Value Name="LAN_DHCP_POOL_END" Value="192.168.1.254"/>
<Value Name="LAN_DHCP_DNS_OPT" Value="1"/>
<Value Name="DHCPS_DNS1" Value="8.8.8.8"/>
<Value Name="DHCPS_DNS2" Value="8.8.4.4"/>
<Value Name="DHCPS_DNS3" Value="1.1.1.1"/>
<Value Name="LAN_DHCP_LEASE" Value="86400"/>
<Value Name="LAN_DHCP_DOMAIN" Value="bbrouter"/>
<Value Name="LAN_RIP" Value="0"/>
<Value Name="LAN_AUTOSEARCH" Value="0"/>
<Value Name="DNS_MODE" Value="0"/>
<Value Name="DNS1" Value="0.0.0.0"/>
<Value Name="DNS2" Value="0.0.0.0"/>
<Value Name="DNS3" Value="0.0.0.0"/>
<Value Name="DHCPS" Value="172.19.31.4"/>
<Value Name="DHCP_MODE" Value="2"/>
<Value Name="ADSL_MODE" Value="83"/>
<Value Name="ADSL_OLR" Value="3"/>
<Value Name="RIP_ENABLE" Value="0"/>
<Value Name="RIP_VERSION" Value="1"/>
<Value Name="IPF_OUT_ACTION" Value="1"/>
<Value Name="IPF_IN_ACTION" Value="1"/>
<Value Name="MACF_OUT_ACTION" Value="1"/>
<Value Name="MACF_IN_ACTION" Value="1"/>
<Value Name="PORT_FW_ENABLE" Value="0"/>
<Value Name="DMZ_ENABLE" Value="0"/>
<Value Name="DMZ_IP" Value="0.0.0.0"/>
<Value Name="USER_NAME" Value="user"/>
<Value Name="USER_PASSWORD" Value="134008"/>
<Value Name="DEVICE_TYPE" Value="1"/>
<Value Name="INIT_LINE" Value="1"/>
<Value Name="INIT_SCRIPT" Value="1"/>
<Value Name="TELNET_USER" Value="super"/>
<Value Name="TELNET_PASSWD" Value="superoem"/>
<Value Name="SNMP_SYS_DESCR" Value="System Description"/>
<Value Name="VC_AUTOSEARCH" Value="0"/>
<Value Name="BR_AGEING_TIME" Value="7200"/>
<Value Name="BR_STP_ENABLED" Value="0"/>
<Value Name="MP_MODE" Value="12"/>
<Value Name="QOS_UPRATE" Value="0"/>
<Value Name="QOS_POLICY" Value="0"/>
<Value Name="TOTAL_BANDWIDTH" Value="100000"/>
<Value Name="TOTAL_BANDWIDTH_LIMIT" Value="0"/>
<Value Name="QOS_MODE" Value="0"/>
<Value Name="IP_QOS_QUEUE_NUM" Value="4"/>
<Value Name="IGMP_PROXY" Value="1"/>
<Value Name="IGMP_PROXY_ITF" Value="65535"/>
<Value Name="SPC_ENABLED" Value="0"/>
<Value Name="SPC_IPTYPE" Value="0"/>
<Value Name="URL_CAPABILITY" Value="0"/>
<Value Name="MP_FIN" Value="1"/>
<Value Name="MULTI_LINGUAL_STATE" Value="en"/>
<Value Name="TFTP_SERVER_ADDR" Value="tftp://0.0.0.0"/>
<Value Name="POSIX_TZ_STRING" Value=""/>
<Value Name="BOOT_FILENAME" Value=""/>
<Value Name="NTP_ENABLED" Value="1"/>
<Value Name="NTP_TIMEZONE_DB_INDEX" Value="166"/>
<Value Name="DST_ENABLED" Value="1"/>
<Value Name="NTP_SERVER_ID" Value="1"/>
<Value Name="NTP_SERVER_HOST1" Value="203.117.180.36"/>
<Value Name="NTP_SERVER_HOST2" Value="200.160.0.8"/>
<Value Name="WEB_FTP_UPGRADE_URL" Value="ftp.shorelinetelecom.com.br"/>
<Value Name="WEB_FTP_UPGRADE_USERNAME" Value="C5R@R5sGuD6l"/>
<Value Name="WEB_FTP_UPGRADE_PASSWD" Value="07ZOYO7odZ6w"/>
<Value Name="WEB_FTP_UPGRADE_FILENAME" Value="9607C-V1.6-SH1020W.tar"/>
<Value Name="DEV_PON_MODE" Value="2"/>
<Value Name="UPNP" Value="1"/>
<Value Name="UPNP_EXT_ITF" Value="65536"/>
<Value Name="DOMAINBLK_CAPABILITY" Value="0"/>
<Value Name="ENABLE_QOS" Value="0"/>
<Value Name="IPV6_LAN_IP_ADDR" Value="fe80::1"/>
<Value Name="AUTO_CHANNEL" Value="1"/>
<Value Name="CHANNEL" Value="44"/>
<Value Name="WEP" Value="0"/>
<Value Name="WEP64_KEY1" Value="0000000000"/>
<Value Name="WEP64_KEY2" Value="0000000000"/>
<Value Name="WEP64_KEY3" Value="0000000000"/>
<Value Name="WEP64_KEY4" Value="0000000000"/>
<Value Name="WEP128_KEY1" Value="00000000000000000000000000"/>
<Value Name="WEP128_KEY2" Value="00000000000000000000000000"/>
<Value Name="WEP128_KEY3" Value="00000000000000000000000000"/>
<Value Name="WEP128_KEY4" Value="00000000000000000000000000"/>
<Value Name="WEP_DEFAULT_KEY" Value="0"/>
<Value Name="WEP_KEY_TYPE" Value="0"/>
<Value Name="FRAG_THRESHOLD" Value="2346"/>
<Value Name="SUPPORTED_RATES" Value="0"/>
<Value Name="BEACON_INTERVAL" Value="100"/>
<Value Name="PREAMBLE_TYPE" Value="0"/>
<Value Name="BASIC_RATES" Value="0"/>
<Value Name="RTS_THRESHOLD" Value="2347"/>
<Value Name="AUTH_TYPE" Value="2"/>
<Value Name="HIDDEN_SSID" Value="0"/>
<Value Name="WLAN_DISABLED" Value="0"/>
<Value Name="WLAN_RFPOWER_SCALE" Value="0"/>
<Value Name="INACTIVITY_TIME" Value="30000"/>
<Value Name="RATE_ADAPTIVE_ENABLED" Value="1"/>
<Value Name="DTIM_PERIOD" Value="1"/>
<Value Name="WLAN_MODE" Value="0"/>
<Value Name="NETWORK_TYPE" Value="0"/>
<Value Name="WLAN_ENCRYPT" Value="4"/>
<Value Name="WLAN_ENABLE_SUPP_NONWPA" Value="0"/>
<Value Name="WLAN_SUPP_NONWPA" Value="0"/>
<Value Name="WLAN_WPA_AUTH" Value="2"/>
<Value Name="WLAN_WPA_CIPHER_SUITE" Value="2"/>
<Value Name="WLAN_WPA_PSK" Value="12345678"/>
<Value Name="WLAN_WPA_GROUP_REKEY_TIME" Value="86400"/>
<Value Name="MAC_AUTH_ENABLED" Value="0"/>
<Value Name="RS_IP" Value="0.0.0.0"/>
<Value Name="RS_PORT" Value="1812"/>
<Value Name="RS_PASSWORD" Value=""/>
<Value Name="RS_MAXRETRY" Value="3"/>
<Value Name="RS_INTERVAL_TIME" Value="5"/>
<Value Name="ACCOUNT_RS_ENABLED" Value="0"/>
<Value Name="ACCOUNT_RS_IP" Value="0.0.0.0"/>
<Value Name="ACCOUNT_RS_PORT" Value="0"/>
<Value Name="ACCOUNT_RS_PASSWORD" Value=""/>
<Value Name="ACCOUNT_RS_UPDATE_ENABLED" Value="0"/>
<Value Name="ACCOUNT_RS_UPDATE_DELAY" Value="0"/>
<Value Name="ACCOUNT_RS_MAXRETRY" Value="0"/>
<Value Name="ACCOUNT_RS_INTERVAL_TIME" Value="0"/>
<Value Name="WLAN_ENABLE_1X" Value="0"/>
<Value Name="WLAN_PSK_FORMAT" Value="0"/>
<Value Name="WPA2_CIPHER_SUITE" Value="2"/>
<Value Name="WLAN_DOTIEEE80211W" Value="0"/>
<Value Name="WLAN_SHA256" Value="0"/>
<Value Name="WLAN_MACAC_ENABLED" Value="0"/>
<Value Name="WLAN_BLOCK_RELAY" Value="0"/>
<Value Name="WLAN_BLOCK_ETH2WIR" Value="0"/>
<Value Name="WLAN_ITF_GROUP" Value="0"/>
<Value Name="WLAN_BLOCK_MBSSID" Value="0"/>
<Value Name="WLAN_BAND" Value="64"/>
<Value Name="WLAN_FIX_RATE" Value="1"/>
<Value Name="WLAN_QoS" Value="1"/>
<Value Name="WLAN_BEACON_ADVERTISEMENT" Value="1"/>
<Value Name="WIFI_REGDOMAIN_DEMO" Value="0"/>
<Value Name="WLAN_PROTECTON" Value="1"/>
<Value Name="WLAN_AGGREGATION" Value="3"/>
<Value Name="WLAN_SHORTGI" Value="1"/>
<Value Name="WLAN_CONTROLBAND" Value="0"/>
<Value Name="WLAN_CHANNELWIDTH" Value="2"/>
<Value Name="WLAN_11NCOEXIST" Value="0"/>
<Value Name="REPEATER_ENABLED1" Value="0"/>
<Value Name="REPEATER_SSID1" Value=""/>
<Value Name="REPEATER_ENABLED2" Value="0"/>
<Value Name="REPEATER_SSID2" Value=""/>
<Value Name="WLAN_PHY_BAND_SELECT" Value="2"/>
<Value Name="WLAN1_PHY_BAND_SELECT" Value="1"/>
<Value Name="WLAN1_AUTO_CHANNEL" Value="1"/>
<Value Name="WLAN1_CHANNEL" Value="11"/>
<Value Name="WLAN1_WEP" Value="0"/>
<Value Name="WLAN1_WEP64_KEY1" Value="0000000000"/>
<Value Name="WLAN1_WEP64_KEY2" Value="0000000000"/>
<Value Name="WLAN1_WEP64_KEY3" Value="0000000000"/>
<Value Name="WLAN1_WEP64_KEY4" Value="0000000000"/>
<Value Name="WLAN1_WEP128_KEY1" Value="00000000000000000000000000"/>
<Value Name="WLAN1_WEP128_KEY2" Value="00000000000000000000000000"/>
<Value Name="WLAN1_WEP128_KEY3" Value="00000000000000000000000000"/>
<Value Name="WLAN1_WEP128_KEY4" Value="00000000000000000000000000"/>
<Value Name="WLAN1_WEP_DEFAULT_KEY" Value="0"/>
<Value Name="WLAN1_WEP_KEY_TYPE" Value="0"/>
<Value Name="WLAN1_FRAG_THRESHOLD" Value="2346"/>
<Value Name="WLAN1_RTS_THRESHOLD" Value="2347"/>
<Value Name="WLAN1_SUPPORTED_RATES" Value="4095"/>
<Value Name="WLAN1_BASIC_RATES" Value="15"/>
<Value Name="WLAN1_BEACON_INTERVAL" Value="100"/>
<Value Name="WLAN1_PREAMBLE_TYPE" Value="0"/>
<Value Name="WLAN1_AUTH_TYPE" Value="2"/>
<Value Name="WLAN1_MACAC_ENABLED" Value="0"/>
<Value Name="WLAN1_HIDDEN_SSID" Value="0"/>
<Value Name="WLAN1_DISABLED" Value="0"/>
<Value Name="WLAN1_RFPOWER_SCALE" Value="0"/>
<Value Name="WLAN1_INACTIVITY_TIME" Value="30000"/>
<Value Name="WLAN1_RATE_ADAPTIVE_ENABLED" Value="1"/>
<Value Name="WLAN1_DTIM_PERIOD" Value="1"/>
<Value Name="WLAN1_WLAN_MODE" Value="0"/>
<Value Name="WLAN1_NETWORK_TYPE" Value="0"/>
<Value Name="WLAN1_ENCRYPT" Value="4"/>
<Value Name="WLAN1_ENABLE_SUPP_NONWPA" Value="0"/>
<Value Name="WLAN1_SUPP_NONWPA" Value="0"/>
<Value Name="WLAN1_WPA_AUTH" Value="2"/>
<Value Name="WLAN1_WPA_CIPHER_SUITE" Value="2"/>
<Value Name="WLAN1_WPA_PSK" Value="12345678"/>
<Value Name="WLAN1_WPA_GROUP_REKEY_TIME" Value="86400"/>
<Value Name="WLAN1_MAC_AUTH_ENABLED" Value="0"/>
<Value Name="WLAN1_RS_IP" Value="0.0.0.0"/>
<Value Name="WLAN1_RS_PORT" Value="1812"/>
<Value Name="WLAN1_RS_PASSWORD" Value=""/>
<Value Name="WLAN1_RS_MAXRETRY" Value="3"/>
<Value Name="WLAN1_RS_INTERVAL_TIME" Value="5"/>
<Value Name="WLAN1_ACCOUNT_RS_ENABLED" Value="0"/>
<Value Name="WLAN1_ACCOUNT_RS_IP" Value="0.0.0.0"/>
<Value Name="WLAN1_ACCOUNT_RS_PORT" Value="0"/>
<Value Name="WLAN1_ACCOUNT_RS_PASSWORD" Value=""/>
<Value Name="WLAN1_ACCOUNT_RS_UPDATE_ENABLED" Value="0"/>
<Value Name="WLAN1_ACCOUNT_RS_UPDATE_DELAY" Value="0"/>
<Value Name="WLAN1_ACCOUNT_RS_MAXRETRY" Value="0"/>
<Value Name="WLAN1_ACCOUNT_RS_INTERVAL_TIME" Value="0"/>
<Value Name="WLAN1_ENABLE_1X" Value="0"/>
<Value Name="WLAN1_PSK_FORMAT" Value="0"/>
<Value Name="WLAN1_WPA2_CIPHER_SUITE" Value="2"/>
<Value Name="WLAN1_DOTIEEE80211W" Value="0"/>
<Value Name="WLAN1_SHA256" Value="0"/>
<Value Name="WLAN1_BLOCK_RELAY" Value="0"/>
<Value Name="WLAN1_BLOCK_ETH2WIR" Value="0"/>
<Value Name="WLAN1_ITF_GROUP" Value="0"/>
<Value Name="WLAN1_BLOCK_MBSSID" Value="0"/>
<Value Name="WLAN1_PROTECTON" Value="1"/>
<Value Name="WLAN1_AGGREGATION" Value="1"/>
<Value Name="WLAN1_SHORTGI" Value="1"/>
<Value Name="WLAN1_CONTROLBAND" Value="0"/>
<Value Name="WLAN1_CHANNELWIDTH" Value="0"/>
<Value Name="WLAN1_11NCOEXIST" Value="0"/>
<Value Name="WLAN1_BAND" Value="8"/>
<Value Name="WLAN1_FIX_RATE" Value="1"/>
<Value Name="WLAN1_BEACON_ADVERTISEMENT" Value="1"/>
<Value Name="WLAN1_MAC_CTRL" Value="0"/>
<Value Name="WLAN1_WSC_DISABLE" Value="1"/>
<Value Name="WLAN1_WSC_METHOD" Value="3"/>
<Value Name="WLAN1_WSC_AUTH" Value="32"/>
<Value Name="WLAN1_WSC_ENC" Value="8"/>
<Value Name="WLAN1_WSC_MANUAL_ENABLED" Value="1"/>
<Value Name="WLAN1_WSC_UPNP_ENABLED" Value="1"/>
<Value Name="WLAN1_WSC_REGISTRAR_ENABLED" Value="0"/>
<Value Name="WLAN1_WSC_PSK" Value="12345678"/>
<Value Name="WLAN1_WSC_SSID" Value=""/>
<Value Name="WLAN1_WSC_CONFIGBYEXTREG" Value="0"/>
<Value Name="WLAN1_VAP0_ITF_GROUP" Value="0"/>
<Value Name="WLAN1_VAP1_ITF_GROUP" Value="0"/>
<Value Name="WLAN1_VAP2_ITF_GROUP" Value="0"/>
<Value Name="WLAN1_VAP3_ITF_GROUP" Value="0"/>
<Value Name="WLAN1_QoS" Value="1"/>
<Value Name="WLAN1_APSD_ENABLE" Value="0"/>
<Value Name="WIFI_STA_CONTROL" Value="0"/>
<Value Name="WIFI_MAP_CONTROLLER" Value="0"/>
<Value Name="WIFI_MAP_CONFIGURED_BAND" Value="0"/>
<Value Name="WIFI_MAP_DEVICE_NAME" Value="EasyMesh_Device"/>
<Value Name="SYSLOG_LOG_LEVEL" Value="5"/>
<Value Name="SYSLOG_DISPLAY_LEVEL" Value="5"/>
<Value Name="SYSLOG_MODE" Value="0"/>
<Value Name="SYSLOG_SERVER_IP" Value="0.0.0.0"/>
<Value Name="SYSLOG_SERVER_PORT" Value="0"/>
<Value Name="SUSER_NAME" Value="admin"/>
<Value Name="SUSER_PASSWORD" Value="134008"/>
<Value Name="ADSL_TONE" Value="00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00"/>
<Value Name="DIRECT_BRIDGE_MODE" Value="1"/>
<Value Name="ADSL_HIGH_INP" Value="0"/>
<Value Name="DSL_GVECTOR" Value="3"/>
<Value Name="CWMP_PROVISIONINGCODE" Value=""/>
<Value Name="CWMP_ACS_URL" Value="http://"/>
<Value Name="CWMP_ACS_URL_OLD" Value="http://"/>
<Value Name="CWMP_ACS_USERNAME" Value="username"/>
<Value Name="CWMP_ACS_PASSWORD" Value="password"/>
<Value Name="CWMP_INFORM_ENABLE" Value="1"/>
<Value Name="CWMP_INFORM_INTERVAL" Value="300"/>
<Value Name="CWMP_INFORM_TIME" Value="0"/>
<Value Name="CWMP_CONREQ_USERNAME" Value=""/>
<Value Name="CWMP_CONREQ_PASSWORD" Value=""/>
<Value Name="CWMP_ACS_UPGRADESMANAGED" Value="1"/>
<Value Name="CWMP_LAN_CONFIGPASSWD" Value=""/>
<Value Name="CWMP_SERIALNUMBER" Value="00000001"/>
<Value Name="CWMP_DHCP_SERVERCONF" Value="1"/>
<Value Name="CWMP_LAN_IPIFENABLE" Value="1"/>
<Value Name="CWMP_LAN_ETHIFENABLE" Value="1"/>
<Value Name="CWMP_WLAN_BASICENCRY" Value="0"/>
<Value Name="CWMP_DL_COMMANDKEY" Value=""/>
<Value Name="CWMP_DL_QUEUE_IDX" Value="-1"/>
<Value Name="CWMP_DL_STARTTIME" Value="0"/>
<Value Name="CWMP_DL_COMPLETETIME" Value="0"/>
<Value Name="CWMP_DL_FAULTCODE" Value="0"/>
<Value Name="CWMP_INFORM_EVENTCODE" Value="1"/>
<Value Name="CWMP_INFORM_USER_EVENTCODE" Value="0"/>
<Value Name="CWMP_RB_COMMANDKEY" Value=""/>
<Value Name="CWMP_ACS_PARAMETERKEY" Value=""/>
<Value Name="CWMP_CERT_PASSWORD" Value="client"/>
<Value Name="CWMP_FLAG" Value="48"/>
<Value Name="CWMP_FLAG2" Value="0"/>
<Value Name="CWMP_PARAMETERKEY" Value=""/>
<Value Name="CWMP_SI_COMMANDKEY" Value=""/>
<Value Name="CWMP_ACS_KICKURL" Value=""/>
<Value Name="CWMP_ACS_DOWNLOADURL" Value=""/>
<Value Name="CWMP_CONREQ_PORT" Value="7547"/>
<Value Name="CWMP_CONREQ_PATH" Value="/tr069"/>
<Value Name="TR143_UDPECHO_ENABLE" Value="0"/>
<Value Name="TR143_UDPECHO_ITFTYPE" Value="0"/>
<Value Name="TR143_UDPECHO_SRCIP" Value="0.0.0.0"/>
<Value Name="TR143_UDPECHO_PORT" Value="0"/>
<Value Name="TR143_UDPECHO_PLUS" Value="0"/>
<Value Name="CWMP_PERSISTENT_DATA" Value=""/>
<Value Name="CWMP_WAN_INTERFACE" Value="65535"/>
<Value Name="CWMP_ACL_ENABLE" Value="0"/>
<Value Name="CWMP_DELAY_RESTARTWAN_ENABLE" Value="1"/>
<Value Name="CWMP_DELAY_RESTARTWAN_CHECK_TIME" Value="15"/>
<Value Name="CWMP_FORCE_ACS_IP_VERSION" Value="1"/>
<Value Name="SYSLOG" Value="0"/>
<Value Name="MAXLOGLEN" Value="51200"/>
<Value Name="ADSLDBG" Value="0"/>
<Value Name="MIB_ETH_MAC_CTRL" Value="0"/>
<Value Name="MIB_WLAN_MAC_CTRL" Value="0"/>
<Value Name="WSC_DISABLE" Value="1"/>
<Value Name="WSC_METHOD" Value="3"/>
<Value Name="WSC_CONFIGURED" Value="1"/>
<Value Name="WSC_PIN" Value="12345670"/>
<Value Name="WSC_AUTH" Value="32"/>
<Value Name="WSC_ENC" Value="8"/>
<Value Name="WSC_MANUAL_ENABLED" Value="1"/>
<Value Name="WSC_UPNP_ENABLED" Value="1"/>
<Value Name="WSC_REGISTRAR_ENABLED" Value="0"/>
<Value Name="WSC_PSK" Value="12345678"/>
<Value Name="WSC_SSID" Value=""/>
<Value Name="WSC_CONFIGBYEXTREG" Value="0"/>
<Value Name="WSC_VERSION" Value="1"/>
<Value Name="LAN_DHCP_GATEWAY" Value="192.168.1.1"/>
<Value Name="WLAN_VAP0_ITF_GROUP" Value="0"/>
<Value Name="WLAN_VAP1_ITF_GROUP" Value="0"/>
<Value Name="WLAN_VAP2_ITF_GROUP" Value="0"/>
<Value Name="WLAN_VAP3_ITF_GROUP" Value="0"/>
<Value Name="MIB_SAMBA_ENABLE" Value="1"/>
<Value Name="MIB_SAMBA_NETBIOS_NAME" Value="Realtek"/>
<Value Name="MIB_SAMBA_SERVER_STRING" Value="Realtek Samba Server"/>
<Value Name="DHCP_SUBNET_MASK" Value="255.255.255.0"/>
<Value Name="WLAN_APSD_ENABLE" Value="0"/>
<Value Name="V6_MAXRTRADVINTERVAL" Value="600"/>
<Value Name="V6_MINRTRADVINTERVAL" Value="198"/>
<Value Name="V6_ADVCURHOPLIMIT" Value="64"/>
<Value Name="V6_ADVDEFAULTLIFETIME" Value="1800"/>
<Value Name="V6_ADVREACHABLETIME" Value="0"/>
<Value Name="V6_ADVRETRANSTIMER" Value="0"/>
<Value Name="V6_ADVLINKMTU" Value="1492"/>
<Value Name="V6_PREFIX_IP" Value="3ffe:501:ffff:100::"/>
<Value Name="V6_PREFIX_LEN" Value="64"/>
<Value Name="V6_VALIDLIFETIME" Value="2592000"/>
<Value Name="V6_PREFERREDLIFETIME" Value="604800"/>
<Value Name="V6_SENDADVERT" Value="1"/>
<Value Name="V6_MANAGEDFLAG" Value="0"/>
<Value Name="V6_OTHERCONFIGFLAG" Value="1"/>
<Value Name="V6_ONLINK" Value="1"/>
<Value Name="V6_AUTONOMOUS" Value="1"/>
<Value Name="V6_PREFIX_MODE" Value="0"/>
<Value Name="V6_PREFIX_ENABLE" Value="1"/>
<Value Name="V6_RDNSS1" Value=""/>
<Value Name="V6_RDNSS2" Value=""/>
<Value Name="V6_ULAPrefixEnable" Value="0"/>
<Value Name="V6_ULAPREFIX" Value="fc01::"/>
<Value Name="V6_ULAPREFIX_LEN" Value="64"/>
<Value Name="V6_ULAPREFIX_VALID_TIME" Value="2592000"/>
<Value Name="V6_ULAPREFIX_PREFER_TIME" Value="604800"/>
<Value Name="DHCPV6S_PREFIX_LENGTH" Value="64"/>
<Value Name="DHCPV6S_RANGE_START" Value="3ffe:501:ffff:100::10"/>
<Value Name="DHCPV6S_RANGE_END" Value="3ffe:501:ffff:100::11"/>
<Value Name="DHCPV6S_DEFAULT_LEASE" Value="20000"/>
<Value Name="DHCPV6S_PREFERRED_LIFETIME" Value="10000"/>
<Value Name="DHCPV6R_UPPER_IFINDEX" Value="255"/>
<Value Name="DHCPV6_MODE" Value="4"/>
<Value Name="DHCPV6S_RENEW_TIME" Value="5000"/>
<Value Name="DHCPV6S_REBIND_TIME" Value="16000"/>
<Value Name="DHCPV6S_CLIENT_DUID" Value="00:01:00:01:00:04:93:e0:00:00:00:00:a2:a2"/>
<Value Name="MLD_PROXY_DAEMON" Value="0"/>
<Value Name="MLD_PROXY_EXT_ITF" Value="255"/>
<Value Name="DNSV6_MODE" Value="0"/>
<Value Name="DNSV61" Value="::"/>
<Value Name="DNSV62" Value="::"/>
<Value Name="DNSV63" Value="::"/>
<Value Name="V6_IPF_OUT_ACTION" Value="1"/>
<Value Name="V6_IPF_IN_ACTION" Value="1"/>
<Value Name="V6_IPV6_ENABLE" Value="1"/>
<Value Name="LOID" Value="user"/>
<Value Name="LOID_PASSWD" Value=""/>
<Value Name="LOID_OLD" Value="user"/>
<Value Name="LOID_PASSWD_OLD" Value=""/>
<Value Name="GPON_PLOAM_PASSWD" Value="1234567890"/>
<Value Name="OMCI_DBGLVL" Value="0"/>
<Value Name="OMCI_LOGFILE" Value="0"/>
<Value Name="OMCI_PORT_TYPE" Value="1"/>
<Value Name="DUAL_MGMT_MODE" Value="1"/>
<Value Name="OMCI_CUSTOM_BDP" Value="136"/>
<Value Name="OMCI_CUSTOM_RDP" Value="0"/>
<Value Name="OMCI_CUSTOM_MCAST" Value="0"/>
<Value Name="OMCI_CUSTOM_ME" Value="262144"/>
<Value Name="OMCI_VENDOR_PRODUCT_CODE" Value="0"/>
<Value Name="OMCI_FAKE_OK" Value="0"/>
<Value Name="OMCI_VEIP_SLOT_ID" Value="255"/>
<Value Name="OMCI_WAN_QOS_QUEUE_NUM" Value="1"/>
<Value Name="OMCI_PSK" Value=""/>
<Value Name="VLAN_CFG_TYPE" Value="0"/>
<Value Name="VLAN_MANU_MODE" Value="0"/>
<Value Name="VLAN_MANU_TAG_VID" Value="65535"/>
<Value Name="VLAN_MANU_TAG_PRI" Value="255"/>
<Value Name="OMCI_OLT_MODE" Value="0"/>
<Value Name="OMCI_SW_VER1" Value="V4.0-22112510"/>
<Value Name="OMCI_SW_VER2" Value="V4.0-22112510"/>
<Value Name="OMCC_VER" Value="128"/>
<Value Name="OMCI_TM_OPT" Value="2"/>
<Value Name="OMCI_LOGFILE_MASK" Value="0"/>
<Value Name="PON_CUSTOM_SDK" Value="0"/>
<Value Name="OMCI_VENDOR_ID_FAKE" Value="HWTC"/>
<Value Name="OMCI_GPONSN_PREFIX_FAKE" Value="HWTC"/>
<Value Name="OMCC_VER_FAKE" Value="128"/>
<Value Name="DHCP_PORT_FILTER" Value="0"/>
<Value Name="NTP_EXT_ITF" Value="65535"/>
<Value Name="FIBER_MODE" Value="0"/>
<Value Name="RTK_DEVID_MANUFACTURER" Value=""/>
<Value Name="RTK_DEVID_OUI" Value=""/>
<Value Name="RTK_DEVID_PRODUCTCLASS" Value=""/>
<Value Name="RTK_DEVINFO_SPECVER" Value=""/>
<Value Name="RTK_DEVINFO_SWVER" Value=""/>
<Value Name="RTK_DEVINFO_HWVER" Value=""/>
<Value Name="DEVICE_NAME" Value="RTK_GW"/>
<Value Name="PROVINCE_TR143_SPEED_UP" Value="0"/>
<Value Name="PROVINCE_TRAP_PPPOE_TRAFFIC" Value="0"/>
<Value Name="QOS_DEFAULT_DSCPMARK" Value="-1"/>
<Value Name="QOS_DEFAULT_ETHERNETPRIORITYMARK" Value="-1"/>
<Value Name="DOT1P_VALUE_BYCF" Value="0"/>
<Value Name="TR247_UNMATCHED_VEIP_CFG" Value="0"/>
<Value Name="TR142_LOG_CFG" Value="0"/>
<Value Name="TR142_EXPAND_QUEUE_ENABLE" Value="1"/>
<Value Name="IGMP_MULTICAST_ALLOW" Value="1"/>
<Value Name="IGMP_ROBUST_COUNT" Value="2"/>
<Value Name="IGMP_LAST_MEMBER_QUERY_COUNT" Value="2"/>
<Value Name="IGMP_QUERY_INTERVAL" Value="15"/>
<Value Name="IGMP_QUERY_RESPONSE_INTERVAL" Value="100"/>
<Value Name="IGMP_GROUTP_LEAVE_DELAY" Value="2000"/>
<Value Name="MLD_ROBUST_COUNT" Value="2"/>
<Value Name="MLD_LAST_MEMBER_QUERY_RESPONSE_INTERVAL" Value="2"/>
<Value Name="MLD_QUERY_INTERVAL" Value="125"/>
<Value Name="MLD_QUERY_RESPONSE_INTERVAL" Value="2000"/>
<Value Name="BOSA_CUSTOMER_CONFIG_MODE" Value="0"/>
<Value Name="BOSA_VENDOR_NAME" Value="Realtek"/>
<Value Name="BOSA_PART_NUMBER" Value=""/>
<Value Name="PORT_DROP_IGMP_VERSION" Value="01,01,01,01,01,01,01,01"/>
<Value Name="STORM_UNKNOWN_UNICAST_MODE" Value="1"/>
<Value Name="STORM_BROCAST_MODE" Value="1"/>
<Value Name="STORM_UNKNOWN_UNICAST_RATE" Value="1496"/>
<Value Name="STORM_BROCAST_RATE" Value="1496"/>
<Value Name="WEB_SHOW_OMCI_CONFIGURED_WAN" Value="0"/>
<Value Name="TR142_CUSTOMER_FLAG" Value="0"/>
<Value Name="NTP_INTERVAL" Value="86400"/>
<Value Name="NETDEV_MTU" Value="1500"/>
<chain chainName="ATM_VC_TBL">
<!-- index=0 -->
<Value Name="ifIndex" Value="65536"/>
<Value Name="VPI" Value="0"/>
<Value Name="VCI" Value="0"/>
<Value Name="QoS" Value="0"/>
<Value Name="PCR" Value="0"/>
<Value Name="SCR" Value="0"/>
<Value Name="MBS" Value="0"/>
<Value Name="CDVT" Value="0"/>
<Value Name="Encap" Value="0"/>
<Value Name="NAPT" Value="1"/>
<Value Name="ChannelMode" Value="2"/>
<Value Name="BridgeType" Value="2"/>
<Value Name="pppUser" Value="{Usuario PPPoE}"/>
<Value Name="pppPasswd" Value="{Senha PPPoE}"/>
<Value Name="pppAuth" Value="0"/>
<Value Name="pppACName" Value=""/>
<Value Name="pppServiceName" Value=""/>
<Value Name="pppConnectType" Value="0"/>
<Value Name="pppIdleTime" Value="0"/>
<Value Name="pppLcpEcho" Value="20"/>
<Value Name="pppLcpEchoRetry" Value="6"/>
<Value Name="pppDebug" Value="0"/>
<Value Name="enableIpQos" Value="0"/>
<Value Name="enableIGMP" Value="0"/>
<Value Name="enableMLD" Value="0"/>
<Value Name="ChannelAddrType" Value="0"/>
<Value Name="RIP" Value="0"/>
<Value Name="LocalIPAddr" Value="0.0.0.0"/>
<Value Name="RemoteIPAddr" Value="0.0.0.0"/>
<Value Name="DefaultGW" Value="1"/>
<Value Name="MTU" Value="1492"/>
<Value Name="ChannelStatus" Value="1"/>
<Value Name="SubnetMask" Value="0.0.0.0"/>
<Value Name="Ipunnum" Value="0"/>
<Value Name="DNSMode" Value="0"/>
<Value Name="DNSV4IPAddr1" Value="0.0.0.0"/>
<Value Name="DNSV4IPAddr2" Value="0.0.0.0"/>
<Value Name="vlan" Value="1"/>
<Value Name="vid" Value="106"/>
<Value Name="vprio" Value="0"/>
<Value Name="vpass" Value="0"/>
<Value Name="itfGroup" Value="15"/>
<Value Name="itfGroupNum" Value="0"/>
<Value Name="mVid" Value="0"/>
<Value Name="cpePppIfIndex" Value="0"/>
<Value Name="cpeIpIndex" Value="0"/>
<Value Name="connDisable" Value="0"/>
<Value Name="ConDevInstNum" Value="1"/>
<Value Name="ConIPInstNum" Value="0"/>
<Value Name="ConPPPInstNum" Value="1"/>
<Value Name="autoDisTime" Value="0"/>
<Value Name="warnDisDelay" Value="0"/>
<Value Name="TR143UDPEchoItf" Value="0"/>
<Value Name="WanName" Value=""/>
<Value Name="applicationtype" Value="2"/>
<Value Name="IpProtocol" Value="1"/>
<Value Name="AddrMode" Value="0"/>
<Value Name="Ipv6Addr" Value="::"/>
<Value Name="RemoteIpv6Addr" Value="::"/>
<Value Name="Ipv6AddrPrefixLen" Value="0"/>
<Value Name="Ipv6Dhcp" Value="0"/>
<Value Name="Ipv6DhcpRequest" Value="0"/>
<Value Name="RemoteIpv6EndPointAddr" Value="::"/>
<Value Name="dnsv6Mode" Value="0"/>
<Value Name="Ipv6Dns1" Value="::"/>
<Value Name="Ipv6Dns2" Value="::"/>
<Value Name="MacAddr" Value="a8bf3c440227"/>
<Value Name="dslite_enable" Value="0"/>
<Value Name="dslite_aftr_mode" Value="0"/>
<Value Name="dslite_aftr_addr" Value="::"/>
<Value Name="dslite_aftr_hostname" Value=""/>
<Value Name="omci_configured" Value="0"/>
<Value Name="omci_if_id" Value="0"/>
</chain>
<chain chainName="IP_PORT_FILTER_TBL"> </chain>
<chain chainName="MAC_FILTER_TBL"> </chain>
<chain chainName="PORT_FW_TBL"> </chain>
<chain chainName="IP_ROUTE_TBL"> </chain>
<chain chainName="DHCP_SERVER_OPTION_TBL"> </chain>
<chain chainName="DHCP_CLIENT_OPTION_TBL"> </chain>
<chain chainName="WLAN_AC_TBL"> </chain>
<chain chainName="WLAN1_AC_TBL"> </chain>
<chain chainName="SW_PORT_TBL">
<!-- index=0 -->
<Value Name="PVCInterface" Value="65535"/>
<Value Name="InterfaceGroup" Value="0"/>
<Value Name="PVID" Value="0"/>
<Value Name="LinkMode" Value="4"/>
<Value Name="VLAN on LAN Enabled" Value="0"/>
<Value Name="VLAN on LAN InterfaceGroup" Value="0"/>
<Value Name="VID" Value="0"/>
<Value Name="omci_uni_portType" Value="1"/>
<Value Name="omci_uni_groupId" Value="0"/>
<Value Name="omci_uni_learning_limit" Value="0"/>
<Value Name="omci_configured" Value="0"/>
<Value Name="flowcontrol" Value="1"/>
</chain>
<chain chainName="SW_PORT_TBL">
<!-- index=1 -->
<Value Name="PVCInterface" Value="65535"/>
<Value Name="InterfaceGroup" Value="0"/>
<Value Name="PVID" Value="1"/>
<Value Name="LinkMode" Value="4"/>
<Value Name="VLAN on LAN Enabled" Value="0"/>
<Value Name="VLAN on LAN InterfaceGroup" Value="0"/>
<Value Name="VID" Value="0"/>
<Value Name="omci_uni_portType" Value="1"/>
<Value Name="omci_uni_groupId" Value="0"/>
<Value Name="omci_uni_learning_limit" Value="0"/>
<Value Name="omci_configured" Value="0"/>
<Value Name="flowcontrol" Value="1"/>
</chain>
<chain chainName="SW_PORT_TBL">
<!-- index=2 -->
<Value Name="PVCInterface" Value="65535"/>
<Value Name="InterfaceGroup" Value="0"/>
<Value Name="PVID" Value="2"/>
<Value Name="LinkMode" Value="4"/>
<Value Name="VLAN on LAN Enabled" Value="0"/>
<Value Name="VLAN on LAN InterfaceGroup" Value="0"/>
<Value Name="VID" Value="0"/>
<Value Name="omci_uni_portType" Value="1"/>
<Value Name="omci_uni_groupId" Value="0"/>
<Value Name="omci_uni_learning_limit" Value="0"/>
<Value Name="omci_configured" Value="0"/>
<Value Name="flowcontrol" Value="1"/>
</chain>
<chain chainName="SW_PORT_TBL">
<!-- index=3 -->
<Value Name="PVCInterface" Value="65535"/>
<Value Name="InterfaceGroup" Value="0"/>
<Value Name="PVID" Value="3"/>
<Value Name="LinkMode" Value="4"/>
<Value Name="VLAN on LAN Enabled" Value="0"/>
<Value Name="VLAN on LAN InterfaceGroup" Value="0"/>
<Value Name="VID" Value="0"/>
<Value Name="omci_uni_portType" Value="1"/>
<Value Name="omci_uni_groupId" Value="0"/>
<Value Name="omci_uni_learning_limit" Value="0"/>
<Value Name="omci_configured" Value="0"/>
<Value Name="flowcontrol" Value="1"/>
</chain>
<chain chainName="SW_PORT_TBL">
<!-- index=4 -->
<Value Name="PVCInterface" Value="65535"/>
<Value Name="InterfaceGroup" Value="0"/>
<Value Name="PVID" Value="4"/>
<Value Name="LinkMode" Value="4"/>
<Value Name="VLAN on LAN Enabled" Value="0"/>
<Value Name="VLAN on LAN InterfaceGroup" Value="0"/>
<Value Name="VID" Value="0"/>
<Value Name="omci_uni_portType" Value="1"/>
<Value Name="omci_uni_groupId" Value="0"/>
<Value Name="omci_uni_learning_limit" Value="0"/>
<Value Name="omci_configured" Value="0"/>
<Value Name="flowcontrol" Value="1"/>
</chain>
<chain chainName="IP_QOS_TBL"> </chain>
<chain chainName="IP_QOS_TC_TBL"> </chain>
<chain chainName="IP_QOS_QUEUE_TBL">
<!-- index=0 -->
<Value Name="outif" Value="65535"/>
<Value Name="prior" Value="1"/>
<Value Name="weight" Value="40"/>
<Value Name="shaping_rate" Value="0"/>
<Value Name="shaping_burst_size" Value="0"/>
<Value Name="enable" Value="0"/>
<Value Name="desc" Value=""/>
<Value Name="QueueInstNum" Value="1"/>
</chain>
<chain chainName="IP_QOS_QUEUE_TBL">
<!-- index=1 -->
<Value Name="outif" Value="65535"/>
<Value Name="prior" Value="1"/>
<Value Name="weight" Value="30"/>
<Value Name="shaping_rate" Value="0"/>
<Value Name="shaping_burst_size" Value="0"/>
<Value Name="enable" Value="0"/>
<Value Name="desc" Value=""/>
<Value Name="QueueInstNum" Value="2"/>
</chain>
<chain chainName="IP_QOS_QUEUE_TBL">
<!-- index=2 -->
<Value Name="outif" Value="65535"/>
<Value Name="prior" Value="1"/>
<Value Name="weight" Value="20"/>
<Value Name="shaping_rate" Value="0"/>
<Value Name="shaping_burst_size" Value="0"/>
<Value Name="enable" Value="0"/>
<Value Name="desc" Value=""/>
<Value Name="QueueInstNum" Value="3"/>
</chain>
<chain chainName="IP_QOS_QUEUE_TBL">
<!-- index=3 -->
<Value Name="outif" Value="65535"/>
<Value Name="prior" Value="1"/>
<Value Name="weight" Value="10"/>
<Value Name="shaping_rate" Value="0"/>
<Value Name="shaping_burst_size" Value="0"/>
<Value Name="enable" Value="0"/>
<Value Name="desc" Value=""/>
<Value Name="QueueInstNum" Value="4"/>
</chain>
<chain chainName="IP_QOS_QUEUE_TBL">
<!-- index=4 -->
<Value Name="outif" Value="0"/>
<Value Name="prior" Value="0"/>
<Value Name="weight" Value="0"/>
<Value Name="shaping_rate" Value="0"/>
<Value Name="shaping_burst_size" Value="0"/>
<Value Name="enable" Value="0"/>
<Value Name="desc" Value=""/>
<Value Name="QueueInstNum" Value="0"/>
</chain>
<chain chainName="IP_QOS_QUEUE_TBL">
<!-- index=5 -->
<Value Name="outif" Value="0"/>
<Value Name="prior" Value="0"/>
<Value Name="weight" Value="0"/>
<Value Name="shaping_rate" Value="0"/>
<Value Name="shaping_burst_size" Value="0"/>
<Value Name="enable" Value="0"/>
<Value Name="desc" Value=""/>
<Value Name="QueueInstNum" Value="0"/>
</chain>
<chain chainName="IP_QOS_QUEUE_TBL">
<!-- index=6 -->
<Value Name="outif" Value="0"/>
<Value Name="prior" Value="0"/>
<Value Name="weight" Value="0"/>
<Value Name="shaping_rate" Value="0"/>
<Value Name="shaping_burst_size" Value="0"/>
<Value Name="enable" Value="0"/>
<Value Name="desc" Value=""/>
<Value Name="QueueInstNum" Value="0"/>
</chain>
<chain chainName="IP_QOS_QUEUE_TBL">
<!-- index=7 -->
<Value Name="outif" Value="0"/>
<Value Name="prior" Value="0"/>
<Value Name="weight" Value="0"/>
<Value Name="shaping_rate" Value="0"/>
<Value Name="shaping_burst_size" Value="0"/>
<Value Name="enable" Value="0"/>
<Value Name="desc" Value=""/>
<Value Name="QueueInstNum" Value="0"/>
</chain>
<chain chainName="ACC_TBL">
<!-- index=0 -->
<Value Name="telnet" Value="2"/>
<Value Name="ftp" Value="3"/>
<Value Name="tftp" Value="3"/>
<Value Name="web" Value="3"/>
<Value Name="snmp" Value="0"/>
<Value Name="ssh" Value="0"/>
<Value Name="icmp" Value="3"/>
<Value Name="netlog" Value="0"/>
<Value Name="telnet_port" Value="23"/>
<Value Name="web_port" Value="8080"/>
<Value Name="ftp_port" Value="21"/>
<Value Name="https" Value="0"/>
<Value Name="https_port" Value="0"/>
<Value Name="ssh_port" Value="0"/>
<Value Name="telnet_wanip_start" Value="0.0.0.0"/>
<Value Name="telnet_wanip_end" Value="0.0.0.0"/>
<Value Name="web_wanip_start" Value="0.0.0.0"/>
<Value Name="web_wanip_end" Value="0.0.0.0"/>
<Value Name="ftp_wanip_start" Value="0.0.0.0"/>
<Value Name="ftp_wanip_end" Value="0.0.0.0"/>
<Value Name="ssh_wanip_start" Value="0.0.0.0"/>
<Value Name="ssh_wanip_end" Value="0.0.0.0"/>
</chain>
<chain chainName="URL_FQDN_TBL"> </chain>
<chain chainName="KEYWD_FILTER_TBL"> </chain>
<chain chainName="CWMP_PSK_TBL"> </chain>
<chain chainName="MAC_BASE_DHCP_TBL"> </chain>
<chain chainName="AUTO_PVC_SEARCH_TBL">
<!-- index=0 -->
<Value Name="VPI" Value="0"/>
<Value Name="VCI" Value="35"/>
</chain>
<chain chainName="AUTO_PVC_SEARCH_TBL">
<!-- index=1 -->
<Value Name="VPI" Value="8"/>
<Value Name="VCI" Value="35"/>
</chain>
<chain chainName="AUTO_PVC_SEARCH_TBL">
<!-- index=2 -->
<Value Name="VPI" Value="0"/>
<Value Name="VCI" Value="43"/>
</chain>
<chain chainName="AUTO_PVC_SEARCH_TBL">
<!-- index=3 -->
<Value Name="VPI" Value="0"/>
<Value Name="VCI" Value="51"/>
</chain>
<chain chainName="AUTO_PVC_SEARCH_TBL">
<!-- index=4 -->
<Value Name="VPI" Value="0"/>
<Value Name="VCI" Value="59"/>
</chain>
<chain chainName="AUTO_PVC_SEARCH_TBL">
<!-- index=5 -->
<Value Name="VPI" Value="8"/>
<Value Name="VCI" Value="43"/>
</chain>
<chain chainName="AUTO_PVC_SEARCH_TBL">
<!-- index=6 -->
<Value Name="VPI" Value="8"/>
<Value Name="VCI" Value="51"/>
</chain>
<chain chainName="AUTO_PVC_SEARCH_TBL">
<!-- index=7 -->
<Value Name="VPI" Value="8"/>
<Value Name="VCI" Value="59"/>
</chain>
<chain chainName="MIB_DDNS_TBL"> </chain>
<chain chainName="OMCI_DM_MCAST_ACL_TBL"> </chain>
<chain chainName="OMCI_DM_MCAST_PROFILE_TBL"> </chain>
<chain chainName="OMCI_DM_MCAST_PORT_TBL"> </chain>
<chain chainName="PPPOE_SESSION_TBL">
<!-- index=0 -->
<Value Name="InterfaceNo" Value="65536"/>
<Value Name="SessionID" Value="21659"/>
<Value Name="ACMacAddr" Value="048c16cc516b"/>
</chain>
<chain chainName="DOMAIN_BLOCKING_TBL"> </chain>
<chain chainName="RIP_TBL"> </chain>
<chain chainName="WLAN_MBSSIB_TBL">
<!-- index=0 -->
<Value Name="idx" Value="0"/>
<Value Name="encrypt" Value="4"/>
<Value Name="enable1X" Value="0"/>
<Value Name="wep" Value="0"/>
<Value Name="wpaAuth" Value="2"/>
<Value Name="wpaPSKFormat" Value="0"/>
<Value Name="wpaPSK" Value="12345678"/>
<Value Name="wpaGroupRekeyTime" Value="86400"/>
<Value Name="rsPort" Value="1812"/>
<Value Name="rsIpAddr" Value="0.0.0.0"/>
<Value Name="rsPassword" Value=""/>
<Value Name="rs2Port" Value="1812"/>
<Value Name="rs2IpAddr" Value="0.0.0.0"/>
<Value Name="rs2Password" Value=""/>
<Value Name="wlanDisabled" Value="0"/>
<Value Name="ssid" Value="MicrochipNET - {nome do wifi} 5G"/>
<Value Name="wlanMode" Value="0"/>
<Value Name="authType" Value="2"/>
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>
<Value Name="unicastCipher" Value="2"/>
<Value Name="wpa2UnicastCipher" Value="2"/>
<Value Name="bcnAdvtisement" Value="1"/>
<Value Name="hidessid" Value="0"/>
<Value Name="userIsolation" Value="0"/>
<Value Name="itfGroup" Value="0"/>
<Value Name="wepKeyType" Value="0"/>
<Value Name="wepDefaultKey" Value="0"/>
<Value Name="wep64Key1" Value="0000000000"/>
<Value Name="wep64Key2" Value="0000000000"/>
<Value Name="wep64Key3" Value="0000000000"/>
<Value Name="wep64Key4" Value="0000000000"/>
<Value Name="wep128Key1" Value="00000000000000000000000000"/>
<Value Name="wep128Key2" Value="00000000000000000000000000"/>
<Value Name="wep128Key3" Value="00000000000000000000000000"/>
<Value Name="wep128Key4" Value="00000000000000000000000000"/>
<Value Name="wmmEnabled" Value="1"/>
<Value Name="rateAdaptiveEnabled" Value="1"/>
<Value Name="wlanBand" Value="64"/>
<Value Name="fixedTxRate" Value="1"/>
<Value Name="wsc_disabled" Value="1"/>
<Value Name="wsc_configured" Value="1"/>
<Value Name="wsc_upnp_enabled" Value="1"/>
<Value Name="wsc_auth" Value="32"/>
<Value Name="wsc_enc" Value="8"/>
<Value Name="wscPsk" Value="12345678"/>
<Value Name="dotIEEE80211W" Value="1"/>
<Value Name="sha256" Value="1"/>
<Value Name="rm_activated" Value="1"/>
<Value Name="BssTransEnable" Value="1"/>
<Value Name="txbf" Value="1"/>
<Value Name="txbf_mu" Value="1"/>
<Value Name="mc2u_disable" Value="0"/>
<Value Name="multiap_bss_type" Value="0"/>
</chain>
<chain chainName="WLAN_MBSSIB_TBL">
<!-- index=1 -->
<Value Name="idx" Value="1"/>
<Value Name="encrypt" Value="0"/>
<Value Name="enable1X" Value="0"/>
<Value Name="wep" Value="0"/>
<Value Name="wpaAuth" Value="2"/>
<Value Name="wpaPSKFormat" Value="0"/>
<Value Name="wpaPSK" Value=""/>
<Value Name="wpaGroupRekeyTime" Value="86400"/>
<Value Name="rsPort" Value="1812"/>
<Value Name="rsIpAddr" Value="0.0.0.0"/>
<Value Name="rsPassword" Value=""/>
<Value Name="rs2Port" Value="1812"/>
<Value Name="rs2IpAddr" Value="0.0.0.0"/>
<Value Name="rs2Password" Value=""/>
<Value Name="wlanDisabled" Value="1"/>
<Value Name="ssid" Value="CTC-1111"/>
<Value Name="wlanMode" Value="0"/>
<Value Name="authType" Value="2"/>
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>
<Value Name="unicastCipher" Value="1"/>
<Value Name="wpa2UnicastCipher" Value="2"/>
<Value Name="bcnAdvtisement" Value="1"/>
<Value Name="hidessid" Value="0"/>
<Value Name="userIsolation" Value="0"/>
<Value Name="itfGroup" Value="0"/>
<Value Name="wepKeyType" Value="0"/>
<Value Name="wepDefaultKey" Value="0"/>
<Value Name="wep64Key1" Value="0000000000"/>
<Value Name="wep64Key2" Value="0000000000"/>
<Value Name="wep64Key3" Value="0000000000"/>
<Value Name="wep64Key4" Value="0000000000"/>
<Value Name="wep128Key1" Value="00000000000000000000000000"/>
<Value Name="wep128Key2" Value="00000000000000000000000000"/>
<Value Name="wep128Key3" Value="00000000000000000000000000"/>
<Value Name="wep128Key4" Value="00000000000000000000000000"/>
<Value Name="wmmEnabled" Value="1"/>
<Value Name="rateAdaptiveEnabled" Value="1"/>
<Value Name="wlanBand" Value="76"/>
<Value Name="fixedTxRate" Value="1"/>
<Value Name="wsc_disabled" Value="1"/>
<Value Name="wsc_configured" Value="0"/>
<Value Name="wsc_upnp_enabled" Value="0"/>
<Value Name="wsc_auth" Value="1"/>
<Value Name="wsc_enc" Value="1"/>
<Value Name="wscPsk" Value=""/>
<Value Name="dotIEEE80211W" Value="0"/>
<Value Name="sha256" Value="0"/>
<Value Name="rm_activated" Value="0"/>
<Value Name="BssTransEnable" Value="0"/>
<Value Name="txbf" Value="1"/>
<Value Name="txbf_mu" Value="0"/>
<Value Name="mc2u_disable" Value="0"/>
<Value Name="multiap_bss_type" Value="0"/>
</chain>
<chain chainName="WLAN_MBSSIB_TBL">
<!-- index=2 -->
<Value Name="idx" Value="2"/>
<Value Name="encrypt" Value="0"/>
<Value Name="enable1X" Value="0"/>
<Value Name="wep" Value="0"/>
<Value Name="wpaAuth" Value="2"/>
<Value Name="wpaPSKFormat" Value="0"/>
<Value Name="wpaPSK" Value=""/>
<Value Name="wpaGroupRekeyTime" Value="86400"/>
<Value Name="rsPort" Value="1812"/>
<Value Name="rsIpAddr" Value="0.0.0.0"/>
<Value Name="rsPassword" Value=""/>
<Value Name="rs2Port" Value="1812"/>
<Value Name="rs2IpAddr" Value="0.0.0.0"/>
<Value Name="rs2Password" Value=""/>
<Value Name="wlanDisabled" Value="1"/>
<Value Name="ssid" Value="CTC-2222"/>
<Value Name="wlanMode" Value="0"/>
<Value Name="authType" Value="2"/>
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>
<Value Name="unicastCipher" Value="1"/>
<Value Name="wpa2UnicastCipher" Value="2"/>
<Value Name="bcnAdvtisement" Value="1"/>
<Value Name="hidessid" Value="0"/>
<Value Name="userIsolation" Value="0"/>
<Value Name="itfGroup" Value="0"/>
<Value Name="wepKeyType" Value="0"/>
<Value Name="wepDefaultKey" Value="0"/>
<Value Name="wep64Key1" Value="0000000000"/>
<Value Name="wep64Key2" Value="0000000000"/>
<Value Name="wep64Key3" Value="0000000000"/>
<Value Name="wep64Key4" Value="0000000000"/>
<Value Name="wep128Key1" Value="00000000000000000000000000"/>
<Value Name="wep128Key2" Value="00000000000000000000000000"/>
<Value Name="wep128Key3" Value="00000000000000000000000000"/>
<Value Name="wep128Key4" Value="00000000000000000000000000"/>
<Value Name="wmmEnabled" Value="1"/>
<Value Name="rateAdaptiveEnabled" Value="1"/>
<Value Name="wlanBand" Value="76"/>
<Value Name="fixedTxRate" Value="1"/>
<Value Name="wsc_disabled" Value="1"/>
<Value Name="wsc_configured" Value="0"/>
<Value Name="wsc_upnp_enabled" Value="0"/>
<Value Name="wsc_auth" Value="1"/>
<Value Name="wsc_enc" Value="1"/>
<Value Name="wscPsk" Value=""/>
<Value Name="dotIEEE80211W" Value="0"/>
<Value Name="sha256" Value="0"/>
<Value Name="rm_activated" Value="0"/>
<Value Name="BssTransEnable" Value="0"/>
<Value Name="txbf" Value="1"/>
<Value Name="txbf_mu" Value="0"/>
<Value Name="mc2u_disable" Value="0"/>
<Value Name="multiap_bss_type" Value="0"/>
</chain>
<chain chainName="WLAN_MBSSIB_TBL">
<!-- index=3 -->
<Value Name="idx" Value="3"/>
<Value Name="encrypt" Value="0"/>
<Value Name="enable1X" Value="0"/>
<Value Name="wep" Value="0"/>
<Value Name="wpaAuth" Value="2"/>
<Value Name="wpaPSKFormat" Value="0"/>
<Value Name="wpaPSK" Value=""/>
<Value Name="wpaGroupRekeyTime" Value="86400"/>
<Value Name="rsPort" Value="1812"/>
<Value Name="rsIpAddr" Value="0.0.0.0"/>
<Value Name="rsPassword" Value=""/>
<Value Name="rs2Port" Value="1812"/>
<Value Name="rs2IpAddr" Value="0.0.0.0"/>
<Value Name="rs2Password" Value=""/>
<Value Name="wlanDisabled" Value="1"/>
<Value Name="ssid" Value="CTC-3333"/>
<Value Name="wlanMode" Value="0"/>
<Value Name="authType" Value="2"/>
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>
<Value Name="unicastCipher" Value="1"/>
<Value Name="wpa2UnicastCipher" Value="2"/>
<Value Name="bcnAdvtisement" Value="1"/>
<Value Name="hidessid" Value="0"/>
<Value Name="userIsolation" Value="0"/>
<Value Name="itfGroup" Value="0"/>
<Value Name="wepKeyType" Value="0"/>
<Value Name="wepDefaultKey" Value="0"/>
<Value Name="wep64Key1" Value="0000000000"/>
<Value Name="wep64Key2" Value="0000000000"/>
<Value Name="wep64Key3" Value="0000000000"/>
<Value Name="wep64Key4" Value="0000000000"/>
<Value Name="wep128Key1" Value="00000000000000000000000000"/>
<Value Name="wep128Key2" Value="00000000000000000000000000"/>
<Value Name="wep128Key3" Value="00000000000000000000000000"/>
<Value Name="wep128Key4" Value="00000000000000000000000000"/>
<Value Name="wmmEnabled" Value="1"/>
<Value Name="rateAdaptiveEnabled" Value="1"/>
<Value Name="wlanBand" Value="76"/>
<Value Name="fixedTxRate" Value="1"/>
<Value Name="wsc_disabled" Value="1"/>
<Value Name="wsc_configured" Value="0"/>
<Value Name="wsc_upnp_enabled" Value="0"/>
<Value Name="wsc_auth" Value="1"/>
<Value Name="wsc_enc" Value="1"/>
<Value Name="wscPsk" Value=""/>
<Value Name="dotIEEE80211W" Value="0"/>
<Value Name="sha256" Value="0"/>
<Value Name="rm_activated" Value="0"/>
<Value Name="BssTransEnable" Value="0"/>
<Value Name="txbf" Value="1"/>
<Value Name="txbf_mu" Value="0"/>
<Value Name="mc2u_disable" Value="0"/>
<Value Name="multiap_bss_type" Value="0"/>
</chain>
<chain chainName="WLAN_MBSSIB_TBL">
<!-- index=4 -->
<Value Name="idx" Value="4"/>
<Value Name="encrypt" Value="0"/>
<Value Name="enable1X" Value="0"/>
<Value Name="wep" Value="0"/>
<Value Name="wpaAuth" Value="2"/>
<Value Name="wpaPSKFormat" Value="0"/>
<Value Name="wpaPSK" Value=""/>
<Value Name="wpaGroupRekeyTime" Value="86400"/>
<Value Name="rsPort" Value="1812"/>
<Value Name="rsIpAddr" Value="0.0.0.0"/>
<Value Name="rsPassword" Value=""/>
<Value Name="rs2Port" Value="1812"/>
<Value Name="rs2IpAddr" Value="0.0.0.0"/>
<Value Name="rs2Password" Value=""/>
<Value Name="wlanDisabled" Value="1"/>
<Value Name="ssid" Value="CTC-4444"/>
<Value Name="wlanMode" Value="0"/>
<Value Name="authType" Value="2"/>
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>
<Value Name="unicastCipher" Value="1"/>
<Value Name="wpa2UnicastCipher" Value="2"/>
<Value Name="bcnAdvtisement" Value="1"/>
<Value Name="hidessid" Value="0"/>
<Value Name="userIsolation" Value="0"/>
<Value Name="itfGroup" Value="0"/>
<Value Name="wepKeyType" Value="0"/>
<Value Name="wepDefaultKey" Value="0"/>
<Value Name="wep64Key1" Value="0000000000"/>
<Value Name="wep64Key2" Value="0000000000"/>
<Value Name="wep64Key3" Value="0000000000"/>
<Value Name="wep64Key4" Value="0000000000"/>
<Value Name="wep128Key1" Value="00000000000000000000000000"/>
<Value Name="wep128Key2" Value="00000000000000000000000000"/>
<Value Name="wep128Key3" Value="00000000000000000000000000"/>
<Value Name="wep128Key4" Value="00000000000000000000000000"/>
<Value Name="wmmEnabled" Value="1"/>
<Value Name="rateAdaptiveEnabled" Value="1"/>
<Value Name="wlanBand" Value="76"/>
<Value Name="fixedTxRate" Value="1"/>
<Value Name="wsc_disabled" Value="1"/>
<Value Name="wsc_configured" Value="0"/>
<Value Name="wsc_upnp_enabled" Value="0"/>
<Value Name="wsc_auth" Value="1"/>
<Value Name="wsc_enc" Value="1"/>
<Value Name="wscPsk" Value=""/>
<Value Name="dotIEEE80211W" Value="0"/>
<Value Name="sha256" Value="0"/>
<Value Name="rm_activated" Value="0"/>
<Value Name="BssTransEnable" Value="0"/>
<Value Name="txbf" Value="1"/>
<Value Name="txbf_mu" Value="0"/>
<Value Name="mc2u_disable" Value="0"/>
<Value Name="multiap_bss_type" Value="0"/>
</chain>
<chain chainName="WLAN_MBSSIB_TBL">
<!-- index=5 -->
<Value Name="idx" Value="5"/>
<Value Name="encrypt" Value="0"/>
<Value Name="enable1X" Value="0"/>
<Value Name="wep" Value="0"/>
<Value Name="wpaAuth" Value="2"/>
<Value Name="wpaPSKFormat" Value="0"/>
<Value Name="wpaPSK" Value=""/>
<Value Name="wpaGroupRekeyTime" Value="86400"/>
<Value Name="rsPort" Value="1812"/>
<Value Name="rsIpAddr" Value="0.0.0.0"/>
<Value Name="rsPassword" Value=""/>
<Value Name="rs2Port" Value="1812"/>
<Value Name="rs2IpAddr" Value="0.0.0.0"/>
<Value Name="rs2Password" Value=""/>
<Value Name="wlanDisabled" Value="1"/>
<Value Name="ssid" Value=""/>
<Value Name="wlanMode" Value="0"/>
<Value Name="authType" Value="2"/>
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>
<Value Name="unicastCipher" Value="1"/>
<Value Name="wpa2UnicastCipher" Value="2"/>
<Value Name="bcnAdvtisement" Value="1"/>
<Value Name="hidessid" Value="0"/>
<Value Name="userIsolation" Value="0"/>
<Value Name="itfGroup" Value="0"/>
<Value Name="wepKeyType" Value="0"/>
<Value Name="wepDefaultKey" Value="0"/>
<Value Name="wep64Key1" Value="0000000000"/>
<Value Name="wep64Key2" Value="0000000000"/>
<Value Name="wep64Key3" Value="0000000000"/>
<Value Name="wep64Key4" Value="0000000000"/>
<Value Name="wep128Key1" Value="00000000000000000000000000"/>
<Value Name="wep128Key2" Value="00000000000000000000000000"/>
<Value Name="wep128Key3" Value="00000000000000000000000000"/>
<Value Name="wep128Key4" Value="00000000000000000000000000"/>
<Value Name="wmmEnabled" Value="1"/>
<Value Name="rateAdaptiveEnabled" Value="1"/>
<Value Name="wlanBand" Value="76"/>
<Value Name="fixedTxRate" Value="1"/>
<Value Name="wsc_disabled" Value="1"/>
<Value Name="wsc_configured" Value="0"/>
<Value Name="wsc_upnp_enabled" Value="0"/>
<Value Name="wsc_auth" Value="1"/>
<Value Name="wsc_enc" Value="1"/>
<Value Name="wscPsk" Value=""/>
<Value Name="dotIEEE80211W" Value="0"/>
<Value Name="sha256" Value="0"/>
<Value Name="rm_activated" Value="0"/>
<Value Name="BssTransEnable" Value="0"/>
<Value Name="txbf" Value="1"/>
<Value Name="txbf_mu" Value="0"/>
<Value Name="mc2u_disable" Value="0"/>
<Value Name="multiap_bss_type" Value="0"/>
</chain>
<chain chainName="WLAN1_MBSSIB_TBL">
<!-- index=0 -->
<Value Name="idx" Value="6"/>
<Value Name="encrypt" Value="4"/>
<Value Name="enable1X" Value="0"/>
<Value Name="wep" Value="0"/>
<Value Name="wpaAuth" Value="2"/>
<Value Name="wpaPSKFormat" Value="0"/>
<Value Name="wpaPSK" Value="12345678"/>
<Value Name="wpaGroupRekeyTime" Value="86400"/>
<Value Name="rsPort" Value="1812"/>
<Value Name="rsIpAddr" Value="0.0.0.0"/>
<Value Name="rsPassword" Value=""/>
<Value Name="rs2Port" Value="1812"/>
<Value Name="rs2IpAddr" Value="0.0.0.0"/>
<Value Name="rs2Password" Value=""/>
<Value Name="wlanDisabled" Value="0"/>
<Value Name="ssid" Value="MicrochipNET - {nome do wifi} 2G"/>
<Value Name="wlanMode" Value="0"/>
<Value Name="authType" Value="2"/>
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>
<Value Name="unicastCipher" Value="2"/>
<Value Name="wpa2UnicastCipher" Value="2"/>
<Value Name="bcnAdvtisement" Value="1"/>
<Value Name="hidessid" Value="0"/>
<Value Name="userIsolation" Value="0"/>
<Value Name="itfGroup" Value="0"/>
<Value Name="wepKeyType" Value="0"/>
<Value Name="wepDefaultKey" Value="0"/>
<Value Name="wep64Key1" Value="0000000000"/>
<Value Name="wep64Key2" Value="0000000000"/>
<Value Name="wep64Key3" Value="0000000000"/>
<Value Name="wep64Key4" Value="0000000000"/>
<Value Name="wep128Key1" Value="00000000000000000000000000"/>
<Value Name="wep128Key2" Value="00000000000000000000000000"/>
<Value Name="wep128Key3" Value="00000000000000000000000000"/>
<Value Name="wep128Key4" Value="00000000000000000000000000"/>
<Value Name="wmmEnabled" Value="1"/>
<Value Name="rateAdaptiveEnabled" Value="1"/>
<Value Name="wlanBand" Value="8"/>
<Value Name="fixedTxRate" Value="1"/>
<Value Name="wsc_disabled" Value="1"/>
<Value Name="wsc_configured" Value="1"/>
<Value Name="wsc_upnp_enabled" Value="1"/>
<Value Name="wsc_auth" Value="32"/>
<Value Name="wsc_enc" Value="8"/>
<Value Name="wscPsk" Value="12345678"/>
<Value Name="dotIEEE80211W" Value="1"/>
<Value Name="sha256" Value="1"/>
<Value Name="rm_activated" Value="1"/>
<Value Name="BssTransEnable" Value="1"/>
<Value Name="txbf" Value="1"/>
<Value Name="txbf_mu" Value="1"/>
<Value Name="mc2u_disable" Value="0"/>
<Value Name="multiap_bss_type" Value="0"/>
</chain>
<chain chainName="WLAN1_MBSSIB_TBL">
<!-- index=1 -->
<Value Name="idx" Value="7"/>
<Value Name="encrypt" Value="0"/>
<Value Name="enable1X" Value="0"/>
<Value Name="wep" Value="0"/>
<Value Name="wpaAuth" Value="2"/>
<Value Name="wpaPSKFormat" Value="0"/>
<Value Name="wpaPSK" Value=""/>
<Value Name="wpaGroupRekeyTime" Value="86400"/>
<Value Name="rsPort" Value="1812"/>
<Value Name="rsIpAddr" Value="0.0.0.0"/>
<Value Name="rsPassword" Value=""/>
<Value Name="rs2Port" Value="1812"/>
<Value Name="rs2IpAddr" Value="0.0.0.0"/>
<Value Name="rs2Password" Value=""/>
<Value Name="wlanDisabled" Value="1"/>
<Value Name="ssid" Value="AP-1"/>
<Value Name="wlanMode" Value="0"/>
<Value Name="authType" Value="2"/>
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>
<Value Name="unicastCipher" Value="1"/>
<Value Name="wpa2UnicastCipher" Value="2"/>
<Value Name="bcnAdvtisement" Value="1"/>
<Value Name="hidessid" Value="0"/>
<Value Name="userIsolation" Value="0"/>
<Value Name="itfGroup" Value="0"/>
<Value Name="wepKeyType" Value="0"/>
<Value Name="wepDefaultKey" Value="0"/>
<Value Name="wep64Key1" Value="0000000000"/>
<Value Name="wep64Key2" Value="0000000000"/>
<Value Name="wep64Key3" Value="0000000000"/>
<Value Name="wep64Key4" Value="0000000000"/>
<Value Name="wep128Key1" Value="00000000000000000000000000"/>
<Value Name="wep128Key2" Value="00000000000000000000000000"/>
<Value Name="wep128Key3" Value="00000000000000000000000000"/>
<Value Name="wep128Key4" Value="00000000000000000000000000"/>
<Value Name="wmmEnabled" Value="1"/>
<Value Name="rateAdaptiveEnabled" Value="1"/>
<Value Name="wlanBand" Value="11"/>
<Value Name="fixedTxRate" Value="1"/>
<Value Name="wsc_disabled" Value="1"/>
<Value Name="wsc_configured" Value="0"/>
<Value Name="wsc_upnp_enabled" Value="0"/>
<Value Name="wsc_auth" Value="1"/>
<Value Name="wsc_enc" Value="1"/>
<Value Name="wscPsk" Value=""/>
<Value Name="dotIEEE80211W" Value="0"/>
<Value Name="sha256" Value="0"/>
<Value Name="rm_activated" Value="0"/>
<Value Name="BssTransEnable" Value="0"/>
<Value Name="txbf" Value="1"/>
<Value Name="txbf_mu" Value="0"/>
<Value Name="mc2u_disable" Value="0"/>
<Value Name="multiap_bss_type" Value="0"/>
</chain>
<chain chainName="WLAN1_MBSSIB_TBL">
<!-- index=2 -->
<Value Name="idx" Value="8"/>
<Value Name="encrypt" Value="0"/>
<Value Name="enable1X" Value="0"/>
<Value Name="wep" Value="0"/>
<Value Name="wpaAuth" Value="2"/>
<Value Name="wpaPSKFormat" Value="0"/>
<Value Name="wpaPSK" Value=""/>
<Value Name="wpaGroupRekeyTime" Value="86400"/>
<Value Name="rsPort" Value="1812"/>
<Value Name="rsIpAddr" Value="0.0.0.0"/>
<Value Name="rsPassword" Value=""/>
<Value Name="rs2Port" Value="1812"/>
<Value Name="rs2IpAddr" Value="0.0.0.0"/>
<Value Name="rs2Password" Value=""/>
<Value Name="wlanDisabled" Value="1"/>
<Value Name="ssid" Value="AP-2"/>
<Value Name="wlanMode" Value="0"/>
<Value Name="authType" Value="2"/>
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>
<Value Name="unicastCipher" Value="1"/>
<Value Name="wpa2UnicastCipher" Value="2"/>
<Value Name="bcnAdvtisement" Value="1"/>
<Value Name="hidessid" Value="0"/>
<Value Name="userIsolation" Value="0"/>
<Value Name="itfGroup" Value="0"/>
<Value Name="wepKeyType" Value="0"/>
<Value Name="wepDefaultKey" Value="0"/>
<Value Name="wep64Key1" Value="0000000000"/>
<Value Name="wep64Key2" Value="0000000000"/>
<Value Name="wep64Key3" Value="0000000000"/>
<Value Name="wep64Key4" Value="0000000000"/>
<Value Name="wep128Key1" Value="00000000000000000000000000"/>
<Value Name="wep128Key2" Value="00000000000000000000000000"/>
<Value Name="wep128Key3" Value="00000000000000000000000000"/>
<Value Name="wep128Key4" Value="00000000000000000000000000"/>
<Value Name="wmmEnabled" Value="1"/>
<Value Name="rateAdaptiveEnabled" Value="1"/>
<Value Name="wlanBand" Value="11"/>
<Value Name="fixedTxRate" Value="1"/>
<Value Name="wsc_disabled" Value="1"/>
<Value Name="wsc_configured" Value="0"/>
<Value Name="wsc_upnp_enabled" Value="0"/>
<Value Name="wsc_auth" Value="1"/>
<Value Name="wsc_enc" Value="1"/>
<Value Name="wscPsk" Value=""/>
<Value Name="dotIEEE80211W" Value="0"/>
<Value Name="sha256" Value="0"/>
<Value Name="rm_activated" Value="0"/>
<Value Name="BssTransEnable" Value="0"/>
<Value Name="txbf" Value="1"/>
<Value Name="txbf_mu" Value="0"/>
<Value Name="mc2u_disable" Value="0"/>
<Value Name="multiap_bss_type" Value="0"/>
</chain>
<chain chainName="WLAN1_MBSSIB_TBL">
<!-- index=3 -->
<Value Name="idx" Value="9"/>
<Value Name="encrypt" Value="0"/>
<Value Name="enable1X" Value="0"/>
<Value Name="wep" Value="0"/>
<Value Name="wpaAuth" Value="2"/>
<Value Name="wpaPSKFormat" Value="0"/>
<Value Name="wpaPSK" Value=""/>
<Value Name="wpaGroupRekeyTime" Value="86400"/>
<Value Name="rsPort" Value="1812"/>
<Value Name="rsIpAddr" Value="0.0.0.0"/>
<Value Name="rsPassword" Value=""/>
<Value Name="rs2Port" Value="1812"/>
<Value Name="rs2IpAddr" Value="0.0.0.0"/>
<Value Name="rs2Password" Value=""/>
<Value Name="wlanDisabled" Value="1"/>
<Value Name="ssid" Value="AP-3"/>
<Value Name="wlanMode" Value="0"/>
<Value Name="authType" Value="2"/>
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>
<Value Name="unicastCipher" Value="1"/>
<Value Name="wpa2UnicastCipher" Value="2"/>
<Value Name="bcnAdvtisement" Value="1"/>
<Value Name="hidessid" Value="0"/>
<Value Name="userIsolation" Value="0"/>
<Value Name="itfGroup" Value="0"/>
<Value Name="wepKeyType" Value="0"/>
<Value Name="wepDefaultKey" Value="0"/>
<Value Name="wep64Key1" Value="0000000000"/>
<Value Name="wep64Key2" Value="0000000000"/>
<Value Name="wep64Key3" Value="0000000000"/>
<Value Name="wep64Key4" Value="0000000000"/>
<Value Name="wep128Key1" Value="00000000000000000000000000"/>
<Value Name="wep128Key2" Value="00000000000000000000000000"/>
<Value Name="wep128Key3" Value="00000000000000000000000000"/>
<Value Name="wep128Key4" Value="00000000000000000000000000"/>
<Value Name="wmmEnabled" Value="1"/>
<Value Name="rateAdaptiveEnabled" Value="1"/>
<Value Name="wlanBand" Value="11"/>
<Value Name="fixedTxRate" Value="1"/>
<Value Name="wsc_disabled" Value="1"/>
<Value Name="wsc_configured" Value="0"/>
<Value Name="wsc_upnp_enabled" Value="0"/>
<Value Name="wsc_auth" Value="1"/>
<Value Name="wsc_enc" Value="1"/>
<Value Name="wscPsk" Value=""/>
<Value Name="dotIEEE80211W" Value="0"/>
<Value Name="sha256" Value="0"/>
<Value Name="rm_activated" Value="0"/>
<Value Name="BssTransEnable" Value="0"/>
<Value Name="txbf" Value="1"/>
<Value Name="txbf_mu" Value="0"/>
<Value Name="mc2u_disable" Value="0"/>
<Value Name="multiap_bss_type" Value="0"/>
</chain>
<chain chainName="WLAN1_MBSSIB_TBL">
<!-- index=4 -->
<Value Name="idx" Value="10"/>
<Value Name="encrypt" Value="0"/>
<Value Name="enable1X" Value="0"/>
<Value Name="wep" Value="0"/>
<Value Name="wpaAuth" Value="2"/>
<Value Name="wpaPSKFormat" Value="0"/>
<Value Name="wpaPSK" Value=""/>
<Value Name="wpaGroupRekeyTime" Value="86400"/>
<Value Name="rsPort" Value="1812"/>
<Value Name="rsIpAddr" Value="0.0.0.0"/>
<Value Name="rsPassword" Value=""/>
<Value Name="rs2Port" Value="1812"/>
<Value Name="rs2IpAddr" Value="0.0.0.0"/>
<Value Name="rs2Password" Value=""/>
<Value Name="wlanDisabled" Value="1"/>
<Value Name="ssid" Value="AP-4"/>
<Value Name="wlanMode" Value="0"/>
<Value Name="authType" Value="2"/>
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>
<Value Name="unicastCipher" Value="1"/>
<Value Name="wpa2UnicastCipher" Value="2"/>
<Value Name="bcnAdvtisement" Value="1"/>
<Value Name="hidessid" Value="0"/>
<Value Name="userIsolation" Value="0"/>
<Value Name="itfGroup" Value="0"/>
<Value Name="wepKeyType" Value="0"/>
<Value Name="wepDefaultKey" Value="0"/>
<Value Name="wep64Key1" Value="0000000000"/>
<Value Name="wep64Key2" Value="0000000000"/>
<Value Name="wep64Key3" Value="0000000000"/>
<Value Name="wep64Key4" Value="0000000000"/>
<Value Name="wep128Key1" Value="00000000000000000000000000"/>
<Value Name="wep128Key2" Value="00000000000000000000000000"/>
<Value Name="wep128Key3" Value="00000000000000000000000000"/>
<Value Name="wep128Key4" Value="00000000000000000000000000"/>
<Value Name="wmmEnabled" Value="1"/>
<Value Name="rateAdaptiveEnabled" Value="1"/>
<Value Name="wlanBand" Value="11"/>
<Value Name="fixedTxRate" Value="1"/>
<Value Name="wsc_disabled" Value="1"/>
<Value Name="wsc_configured" Value="0"/>
<Value Name="wsc_upnp_enabled" Value="0"/>
<Value Name="wsc_auth" Value="1"/>
<Value Name="wsc_enc" Value="1"/>
<Value Name="wscPsk" Value=""/>
<Value Name="dotIEEE80211W" Value="0"/>
<Value Name="sha256" Value="0"/>
<Value Name="rm_activated" Value="0"/>
<Value Name="BssTransEnable" Value="0"/>
<Value Name="txbf" Value="1"/>
<Value Name="txbf_mu" Value="0"/>
<Value Name="mc2u_disable" Value="0"/>
<Value Name="multiap_bss_type" Value="0"/>
</chain>
<chain chainName="WLAN1_MBSSIB_TBL">
<!-- index=5 -->
<Value Name="idx" Value="11"/>
<Value Name="encrypt" Value="0"/>
<Value Name="enable1X" Value="0"/>
<Value Name="wep" Value="0"/>
<Value Name="wpaAuth" Value="2"/>
<Value Name="wpaPSKFormat" Value="0"/>
<Value Name="wpaPSK" Value=""/>
<Value Name="wpaGroupRekeyTime" Value="86400"/>
<Value Name="rsPort" Value="1812"/>
<Value Name="rsIpAddr" Value="0.0.0.0"/>
<Value Name="rsPassword" Value=""/>
<Value Name="rs2Port" Value="1812"/>
<Value Name="rs2IpAddr" Value="0.0.0.0"/>
<Value Name="rs2Password" Value=""/>
<Value Name="wlanDisabled" Value="1"/>
<Value Name="ssid" Value=""/>
<Value Name="wlanMode" Value="0"/>
<Value Name="authType" Value="2"/>
<Value Name="cwmp_WLAN_BasicEncry" Value="0"/>
<Value Name="unicastCipher" Value="1"/>
<Value Name="wpa2UnicastCipher" Value="2"/>
<Value Name="bcnAdvtisement" Value="1"/>
<Value Name="hidessid" Value="0"/>
<Value Name="userIsolation" Value="0"/>
<Value Name="itfGroup" Value="0"/>
<Value Name="wepKeyType" Value="0"/>
<Value Name="wepDefaultKey" Value="0"/>
<Value Name="wep64Key1" Value="0000000000"/>
<Value Name="wep64Key2" Value="0000000000"/>
<Value Name="wep64Key3" Value="0000000000"/>
<Value Name="wep64Key4" Value="0000000000"/>
<Value Name="wep128Key1" Value="00000000000000000000000000"/>
<Value Name="wep128Key2" Value="00000000000000000000000000"/>
<Value Name="wep128Key3" Value="00000000000000000000000000"/>
<Value Name="wep128Key4" Value="00000000000000000000000000"/>
<Value Name="wmmEnabled" Value="1"/>
<Value Name="rateAdaptiveEnabled" Value="1"/>
<Value Name="wlanBand" Value="11"/>
<Value Name="fixedTxRate" Value="1"/>
<Value Name="wsc_disabled" Value="1"/>
<Value Name="wsc_configured" Value="0"/>
<Value Name="wsc_upnp_enabled" Value="0"/>
<Value Name="wsc_auth" Value="1"/>
<Value Name="wsc_enc" Value="1"/>
<Value Name="wscPsk" Value=""/>
<Value Name="dotIEEE80211W" Value="0"/>
<Value Name="sha256" Value="0"/>
<Value Name="rm_activated" Value="0"/>
<Value Name="BssTransEnable" Value="0"/>
<Value Name="txbf" Value="1"/>
<Value Name="txbf_mu" Value="0"/>
<Value Name="mc2u_disable" Value="0"/>
<Value Name="multiap_bss_type" Value="0"/>
</chain>
<chain chainName="DHCPS_SERVING_POOL_TBL"> </chain>
<chain chainName="WLAN_QOS_AP_TBL">
<!-- index=0 -->
<Value Name="aifsn" Value="1"/>
<Value Name="ecwmin" Value="2"/>
<Value Name="ecwmax" Value="3"/>
<Value Name="txop" Value="47"/>
<Value Name="ack" Value="1"/>
</chain>
<chain chainName="WLAN_QOS_AP_TBL">
<!-- index=1 -->
<Value Name="aifsn" Value="1"/>
<Value Name="ecwmin" Value="3"/>
<Value Name="ecwmax" Value="4"/>
<Value Name="txop" Value="94"/>
<Value Name="ack" Value="1"/>
</chain>
<chain chainName="WLAN_QOS_AP_TBL">
<!-- index=2 -->
<Value Name="aifsn" Value="3"/>
<Value Name="ecwmin" Value="4"/>
<Value Name="ecwmax" Value="6"/>
<Value Name="txop" Value="0"/>
<Value Name="ack" Value="1"/>
</chain>
<chain chainName="WLAN_QOS_AP_TBL">
<!-- index=3 -->
<Value Name="aifsn" Value="7"/>
<Value Name="ecwmin" Value="4"/>
<Value Name="ecwmax" Value="10"/>
<Value Name="txop" Value="0"/>
<Value Name="ack" Value="1"/>
</chain>
<chain chainName="WLAN_QOS_STA_TBL">
<!-- index=0 -->
<Value Name="aifsn" Value="2"/>
<Value Name="ecwmin" Value="2"/>
<Value Name="ecwmax" Value="3"/>
<Value Name="txop" Value="47"/>
<Value Name="ack" Value="1"/>
</chain>
<chain chainName="WLAN_QOS_STA_TBL">
<!-- index=1 -->
<Value Name="aifsn" Value="2"/>
<Value Name="ecwmin" Value="3"/>
<Value Name="ecwmax" Value="4"/>
<Value Name="txop" Value="94"/>
<Value Name="ack" Value="1"/>
</chain>
<chain chainName="WLAN_QOS_STA_TBL">
<!-- index=2 -->
<Value Name="aifsn" Value="3"/>
<Value Name="ecwmin" Value="4"/>
<Value Name="ecwmax" Value="10"/>
<Value Name="txop" Value="0"/>
<Value Name="ack" Value="1"/>
</chain>
<chain chainName="WLAN_QOS_STA_TBL">
<!-- index=3 -->
<Value Name="aifsn" Value="7"/>
<Value Name="ecwmin" Value="4"/>
<Value Name="ecwmax" Value="10"/>
<Value Name="txop" Value="0"/>
<Value Name="ack" Value="1"/>
</chain>
<chain chainName="DHCP_RESERVED_IPADDR_TBL"> </chain>
<chain chainName="DHCPV6S_NAME_SERVER_TBL"> </chain>
<chain chainName="DHCPV6S_DOMAIN_SEARCH_TBL"> </chain>
<chain chainName="DHCPV6S_NTP_SERVER_TBL"> </chain>
<chain chainName="DHCPV6S_MAC_BINDING_TBL"> </chain>
<chain chainName="V6_IP_PORT_FILTER_TBL"> </chain>
<chain chainName="L2BRIDGING_BRIDGE_GROUP_TBL">
<!-- index=0 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="name" Value="default"/>
<Value Name="vlanid" Value="0"/>
<Value Name="omci_configured" Value="0"/>
<Value Name="omci_groupId" Value="0"/>
<Value Name="instnum" Value="1"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=0 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="1"/>
<Value Name="ifid" Value="0"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="1"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=1 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="1"/>
<Value Name="ifid" Value="1"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="2"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=2 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="1"/>
<Value Name="ifid" Value="2"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="3"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=3 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="1"/>
<Value Name="ifid" Value="3"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="4"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=4 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="0"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="5"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=5 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="1"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="6"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=6 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="2"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="7"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=7 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="3"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="8"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=8 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="4"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="9"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=9 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="5"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="10"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=10 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="6"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="11"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=11 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="7"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="12"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=12 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="8"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="13"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=13 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="9"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="14"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=14 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="16"/>
<Value Name="ifid" Value="65536"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="15"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=15 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="2"/>
<Value Name="ifid" Value="257"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="16"/>
</chain>
<chain chainName="L2BRIDGING_FILTER_TBL">
<!-- index=16 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="8"/>
<Value Name="ifid" Value="4"/>
<Value Name="itfname" Value=""/>
<Value Name="VLANIDFilter" Value="-1"/>
<Value Name="AdmitOnlyVLANTagged" Value="0"/>
<Value Name="instnum" Value="17"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=0 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="1"/>
<Value Name="ifid" Value="0"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="1"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=1 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="1"/>
<Value Name="ifid" Value="1"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="2"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=2 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="1"/>
<Value Name="ifid" Value="2"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="3"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=3 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="1"/>
<Value Name="ifid" Value="3"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="4"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=4 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="0"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="5"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=5 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="1"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="6"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=6 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="2"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="7"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=7 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="3"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="8"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=8 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="4"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="9"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=9 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="5"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="10"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=10 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="6"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="11"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=11 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="7"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="12"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=12 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="8"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="13"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=13 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="4"/>
<Value Name="ifid" Value="9"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="-1"/>
<Value Name="vprio" Value="-1"/>
<Value Name="VLANIDUntag" Value="1"/>
<Value Name="VLANIDMarkOverride" Value="0"/>
<Value Name="EthernetPriorityOverride" Value="0"/>
<Value Name="instnum" Value="14"/>
</chain>
<chain chainName="L2BRIDGING_MARKING_TBL">
<!-- index=14 -->
<Value Name="enable" Value="1"/>
<Value Name="groupnum" Value="0"/>
<Value Name="ifdomain" Value="2"/>
<Value Name="ifid" Value="257"/>
<Value Name="itfname" Value=""/>
<Value Name="vid" Value="106"/>
<Value Name="vprio" Value="0"/>
<Value Name="VLANIDUntag" Value="0"/>
<Value Name="VLANIDMarkOverride" Value="1"/>
<Value Name="EthernetPriorityOverride" Value="1"/>
<Value Name="instnum" Value="15"/>
</chain>
<chain chainName="L2BRIDGING_BRIDGE_PORT_TBL"> </chain>
<chain chainName="L2BRIDGING_BRIDGE_VLAN_TBL"> </chain>
<chain chainName="VLAN_GROUP_TBL"> </chain>
<chain chainName="IPV6_ROUTE_TBL"> </chain>
<chain chainName="EPON_LLID_TBL"> </chain>
<chain chainName="CWMP_TRANSFER_QUEUE"> </chain>
<chain chainName="CWMP_ACL_IP_TBL"> </chain>
</Config_Information_File_8671>`,
      
      campos: [
        { chave: "nome do wifi", tipo: "texto" },
        { chave: "Usuario PPPoE", tipo: "texto" },
        { chave: "Senha PPPoE", tipo: "texto" }
      ],
      tipo: "xmlDownload"
    },

    { nome: "Termo de informação de data",
      texto: `{Motivo} ficou agendada para o dia {data} em horário comercial entre 8:30 da manhã até as 16:30 (tarde).
Para receber nosso técnico será necessário estar presente uma pessoa maior de 18 anos , com documentação em mãos Rg ou Habilitação.
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
  