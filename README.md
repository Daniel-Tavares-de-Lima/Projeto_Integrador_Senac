# Salao Senac Projeto Integrador

## Cotextualização
O Salão de Beleza Escola do SENAC PE, conhecido por sua excelência, enfrentava dificuldades com a crescente demanda devido ao uso de agendamentos por telefone e registros manuais, resultando em perda de informações e conflitos de horários. Para resolver esses problemas e otimizar as operações, a administração decidiu criar um sistema de gerenciamento integrado, visando facilitar os agendamentos, controlar os serviços e melhorar a gestão do salão, reduzindo o trabalho manual e a falta de integração entre sistemas.

## Desafios e Soluções Propostas
1. **Agendamento de Serviços**
   - **Problema**: A administração percebeu que o processo de agendamento precisava ser mais ágil e preciso. Clientes ligavam para marcar horários, mas muitas vezes se deparavam com longas esperas ou horários disponíveis já ocupados.
   - **Solução**: O novo sistema permitirá que clientes visualizem horários disponíveis e façam agendamentos diretamente pelo site ou aplicativo. O agendamento poderá ser feito também pela atendente, com uma visão de calendário (diário, semanal e mensal) destacando os horários por profissional.
   - **Regras**:
     1. Um cliente pode agendar vários serviços em uma única visita.
     2. O sistema deve verificar automaticamente a disponibilidade de horário e evitar conflitos.
     3. A interface de agendamento incluirá cadastro rápido do cliente caso ele não esteja no sistema.

2. **Registro de Serviços**
   - **Problema**: O controle de serviços prestados era feito manualmente com base em uma tabela impressa de serviços e preços, resultando em inconsistências e dificuldades de atualização.
   - **Solução**: Um módulo de registro de serviços padronizados será implementado, com preços e descrições predefinidas. Isso garantirá que, no momento do agendamento, os serviços sejam corretamente associados e o custo calculado de forma automática.
   - **Regras**:
     1. Um agendamento gera um atendimento, exceto se for cancelado.
     2. Cada atendimento conterá detalhes como tempo gasto e produtos utilizados, oferecendo uma visão detalhada da prestação de serviços.
3. **Atendimento ao Cliente**
   - **Problema**: Nem todos os agendamentos resultavam em atendimento efetivo, o que dificultava o controle financeiro e de serviços.
   - **Solução**: O sistema irá registrar todos os atendimentos originados de agendamentos e associá-los a centros de custo, permitindo um controle mais rigoroso do financeiro.
   - **Regras**:
     1. Cada atendimento estará vinculado a um centro de custo (salão ou outras unidades).
     2. O sistema permitirá o registro de cancelamentos de agendamentos.
     3. Ao realizar o pagamento do atendimento, o sistema deve permitir cadastrar mais de uma forma de pagamento para esse atendimento.
     4. São formas de pagamento para um atendimento: Pix, Dinheiro, Cartão de Crédito, Cartão de Débito e Voucher.
     5. Consulte o Stakeholder para saber que dados são necessários armazenar para cada uma das formas de pagamento.
     6. Pode ser cadastrado um ou mais descontos a um atendimento, indicando a porcentagem aplicada ao valor total do atendimento, ou o valor a ser descontado.
4. **Previsão de Retorno e Feedback**
   - **Problema**: A falta de um sistema para rastrear retornos e feedback dos clientes impedia a administração de monitorar a satisfação e o agendamento de novas visitas.
   - **Solução**: Ferramentas de lembretes automáticos e coleta de feedback serão implementadas, ajudando a equipe a manter um relacionamento contínuo com os clientes.
   - **Regras**:
     1. Lembretes automáticos de manutenção ou retorno de serviços serão enviados para os clientes.
     2. Um módulo de feedback registrará a avaliação dos serviços prestados.
5. **Gerenciamento Financeiro e de Custos**
   - **Problema**: A administração tinha dificuldades em controlar receitas e despesas associadas ao salão, incluindo o uso de produtos e os custos operacionais.
   - **Solução**: O sistema terá um módulo de gestão financeira, registrando receitas provenientes de serviços e associando despesas, como produtos utilizados, para gerar relatórios detalhados.
   - **Regras**:
     1. Relatórios financeiros incluirão receita por serviço, despesas operacionais e margem de lucro.
     2. O sistema permitirá o controle de gastos com produtos utilizados em cada atendimento.
6. **Gestão de Funcionários**
   - **Problema**: A falta de controle sobre o desempenho dos funcionários e suas funções dificultava a gestão eficiente da equipe.
   - **Solução**: Um módulo de gestão de funcionários permitirá o registro de atividades, horários de trabalho e desempenho dos profissionais, garantindo uma alocação eficaz dos recursos humanos.
   - **Regras**:
     1. Todos os funcionários poderão realizar qualquer serviço do salão, mas o sistema rastreará o desempenho de cada um por atendimento.
     2. O sistema controlará a disponibilidade de horários e dias de trabalho dos funcionários.

## Funcionando Principais do Sistemas
- **Agendamento Online**: Um calendário atualizado em tempo real permitirá o agendamento de serviços, evitando conflitos de horário e garantindo a conveniência para os clientes.
- **Registro de Serviços Detalhado**: Cada serviço realizado será registrado com informações completas sobre tempo, produtos utilizados e preço.
- **Previsão de Retorno e Feedback**: Ferramentas integradas para lembrar os clientes sobre novos serviços e para coletar feedback após cada atendimento.
- **Gestão Financeira**: Relatórios detalhados de receitas e despesas permitirão uma visão clara da saúde financeira do salão.
- **Gestão de Funcionários**: Controle de horários, desempenho e atividades dos funcionários, garantindo eficiência na alocação dos profissionais.
