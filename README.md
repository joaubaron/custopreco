🫙 Custo do Pote — Calculadora de Preço de Receitas

Uma aplicação web completa para calcular o custo e preço de venda de receitas em porções (potes). Permite cadastrar ingredientes, montar a receita, adicionar custos de embalagem e definir margem de lucro.

📋 FUNCIONALIDADES
🛒 Mercado → Cadastro de produtos com quantidade, unidade e valor
🧺 Receita → Seleção de ingredientes e quantidades usadas
📦 Embalagem → Custos fixos por pote (vidro, rótulo, decoração, etc.)
💰 Preço → Cálculo automático de rendimento, custo, preço com margem e composição do preço
📚 Receitas → Salvar, carregar e gerenciar receitas salvas

🚀 COMO USAR
1. Abra o arquivo index.html em qualquer navegador moderno
2. Cadastre os produtos na aba "Mercado"
3. Monte a receita na aba "Receita"
4. Adicione custos de embalagem na aba "Embalagem"
5. Veja o preço na aba "Preço" — ajuste margem e tamanho do pote
6. Salve sua receita na aba "Preço" ou "Receitas"

💾 SALVAMENTO
- Todos os dados são salvos automaticamente no localStorage do navegador
- As receitas são salvas individualmente e podem ser carregadas/gerenciadas na aba "Receitas"
- O botão "Restaurar" no cabeçalho recarrega os dados de exemplo

🧮 FÓRMULAS
Custo do ingrediente = (quantidade usada ÷ quantidade total) × valor
Peso total da receita = soma do peso de todos os ingredientes
Número de potes = ⌊peso total ÷ tamanho do pote⌋
Custo por pote = (custo ingredientes ÷ número de potes) + custo embalagem
Preço de venda = custo por pote ÷ (1 − margem)
Markup = preço ÷ custo
⚠️ Conversão automática: g ↔ ml usando densidade (ajustável por produto)

🖥️ TECNOLOGIAS
HTML5 + CSS3 (design responsivo, modo escuro) | JavaScript puro (sem dependências externas) | localStorage para persistência de dados

🎨 DESIGN
Interface escura com acentos dourados, totalmente responsivo (mobile-first), animações suaves e ícones emojis.

📄 Licença: MIT

Feito com ❤️ para calcular o preço justo das suas receitas caseiras.
