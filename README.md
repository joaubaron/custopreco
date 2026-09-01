https://joaubaron.github.io/custoprecoreceita/

Calculadora de preço para produção artesanal de alimentos.

O Custo do Pote é um aplicativo web progressivo (PWA) desenvolvido para ajudar pequenos produtores, chefs e entusiastas da culinária artesanal a calcular o preço de venda de seus produtos de forma precisa e profissional.

Com uma interface intuitiva e moderna, você pode cadastrar todos os ingredientes e seus custos, montar receitas com proporções exatas, calcular custos de embalagem, definir margem de lucro desejada e obter o preço de venda final por unidade.

FUNCIONALIDADES:

🛒 Mercado - Cadastre produtos com quantidade total, unidade e valor, suporte para múltiplas unidades (g, ml, kg, L, un), detecção automática de densidade para conversão g ↔ ml.

🧺 Receita - Selecione ingredientes do mercado para sua receita, informe apenas a quantidade usada, cálculo automático do custo de cada ingrediente, conversão inteligente entre peso e volume.

📦 Embalagem - Registre todos os itens de embalagem (vidros, rótulos, etiquetas), custo fixo por pote, valores atualizados automaticamente.

💰 Preço - Calcule o rendimento da receita em potes, visualize custos rateados por pote, defina a margem de lucro desejada, veja o markup equivalente, composição do preço: ingredientes, embalagem e lucro.

📚 Salvas - Salve receitas completas localmente, gerencie múltiplas receitas, carregue, edite e apague receitas salvas, armazenamento local permanente (localStorage).

TECNOLOGIAS:

HTML5, CSS3 com design moderno temas escuros, JavaScript Vanilla, Google Fonts (Inter e Plus Jakarta Sans), PWA - Progressive Web App instalável, localStorage para persistência de dados.

COMPATIBILIDADE:

Navegadores modernos (Chrome, Firefox, Safari, Edge), dispositivos móveis (iOS, Android), funciona offline com service worker, design responsivo adaptado para todas as telas.

INSTALAÇÃO:

Como PWA - acesse a aplicação no navegador, clique no menu do navegador, selecione "Adicionar à tela inicial" ou "Instalar aplicativo", o app será instalado como um aplicativo nativo.

Como página web - salve o arquivo index.html em seu computador e abra diretamente no navegador, tudo funciona offline automaticamente.

PERSISTÊNCIA DE DADOS:

Todos os dados são salvos localmente no seu dispositivo através do localStorage. Chave principal: caponata-calc-v2. Chave de receitas: caponata-recipes-list. Importante: os dados são específicos do navegador/dispositivo. Não há sincronização na nuvem.

COMO USAR:

Passo 1 - Cadastre os Ingredientes na aba Mercado, adicione todos os produtos que você compra com suas quantidades e valores.

Passo 2 - Monte a Receita na aba Receita, selecione os ingredientes que fazem parte da sua receita e informe as quantidades utilizadas.

Passo 3 - Adicione a Embalagem na aba Embalagem, registre todos os custos fixos por pote (vidro, rótulo, etiqueta, etc.).

Passo 4 - Calcule o Preço na aba Preço, defina o tamanho do pote e a margem de lucro desejada. O aplicativo calculará automaticamente o número de potes produzidos, o custo por pote e o preço de venda sugerido.

Passo 5 - Salve sua Receita na aba Salvas, salve sua receita para uso futuro. Você pode ter quantas receitas quiser.

DESIGN:

Tema escuro para reduzir cansaço visual, cores em destaque dourado (#ffd84d) para elementos principais, feedback visual com animações suaves, botões grandes otimizados para toque em dispositivos móveis, tipografia moderna e legível.

CÁLCULOS:

Custo por ingrediente = (quantidade_usada / quantidade_total) * valor_total.

Peso da receita = Σ(quantidade_usada * densidade).

Número de potes = Math.floor(peso_receita / tamanho_pote).

Preço de venda = custo_total_por_pote / (1 - margem_lucro).

PRIVACIDADE:

Todos os dados ficam exclusivamente no seu dispositivo, não há coleta de informações pessoais, não há comunicação com servidores externos (exceto fontes), funciona offline completamente.

SUPORTE:

Para dúvidas, sugestões ou problemas, abra uma issue no repositório ou envie um pull request com melhorias.

LICENÇA:

Este projeto é open-source. Sinta-se livre para usar, modificar e distribuir.

DICA EXTRA:

O aplicativo suporta conversão automática entre gramas e mililitros usando densidades pré-definidas para azeite (0.91 g/ml), shoyu (1.18 g/ml), vinagre (1.01 g/ml), mel (1.42 g/ml), óleos em geral (0.92 g/ml), leite (1.03 g/ml) e água (1.00 g/ml). Isso significa que você pode misturar unidades livremente em sua receita.

Desenvolvido para quem faz com amor e quer precificar com precisão. Custo do Pote - Calculando o valor do seu trabalho artesanal 🫙✨
