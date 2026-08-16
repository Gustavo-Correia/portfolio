import crmImg from "@/assets/crm/crm.png";

import barbeariaImg from "@/assets/barbearia/barbearia.png";

import freelaCatalogo from "@/assets/freela/catalogo.jpeg";
import freelaCategorias from "@/assets/freela/categorias.jpeg";
import freelaChat from "@/assets/freela/chat.png";
import freelaCriacaoLoja from "@/assets/freela/criacao_loja.jpeg";
import freelaCriacaoLojaPagamento from "@/assets/freela/criacao_loja_pagamento.jpeg";
import freelaNovoPedido from "@/assets/freela/novo_pedido.jpeg";
import freelaPedidos from "@/assets/freela/pedidos.jpeg";
import freelaStore from "@/assets/freela/store.jpeg";

import sicadImg1 from "@/assets/sicad/1785638469771.jpg";
import sicadImg2 from "@/assets/sicad/1785638470126.jpg";
import sicadImg3 from "@/assets/sicad/6033b43b-8694-4560-b230-cba3b05aa4e3.png";

import vemcaprofVideo from "@/assets/vemcaprof/marketing.mp4";

export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  stack: string[];
  role: string;
  result?: string;
  note?: string;
  images: { src: string; alt: string }[];
  links?: { label: string; href: string }[];
};

export const professionalProjects: Project[] = [
  {
    id: "crm-whatsapp",
    index: "01",
    title: "Plataforma de CRM e automação de WhatsApp",
    subtitle: "Atendimento automatizado, gestão de clientes e inteligência artificial",
    description:
      "Participação no desenvolvimento e na manutenção de uma plataforma de CRM conversacional integrada ao WhatsApp. A solução centraliza conversas, organiza clientes e automatiza etapas do atendimento comercial, além de usar inteligência artificial para responder mensagens, auxiliar vendas e atender clientes internacionais com tradução automática.",
    features: [
      "Centralização de atendimentos",
      "Gestão de clientes",
      "Automação de mensagens",
      "Funis de atendimento",
      "Chatbots com inteligência artificial",
      "Tradução automática de mensagens",
      "Qualificação de leads",
      "Integração com diferentes provedores de WhatsApp",
      "Gestão de conversas e contatos",
    ],
    stack: ["API Oficial do WhatsApp", "Baileys", "ChatBots", "Google Agendas", "apify", "OpenAI", "Node.js", "React", "Next.js", "MySQL", "Redis", "Docker", "CI/CD", "APIs REST", "MercadoPago", "React", "TypeScript", "OpenAI"],
    role: "Atuei no desenvolvimento e na manutenção de módulos da plataforma, nas integrações com provedores externos, na criação de automações e no processo de implantação em produção.",
    result:
      "A combinação de tradução automática e atendimento por IA elevou a conversão de clientes internacionais em até 40%.",
    note: "Projeto proprietário desenvolvido no contexto da minha atuação profissional. As informações são limitadas à minha contribuição e ao que pode ser divulgado publicamente.",
    images: [{ src: crmImg, alt: "Plataforma de CRM e automação de WhatsApp" }],
  },
  {
    id: "vendas-whatsapp",
    index: "02",
    title: "Plataforma de vendas com automação via WhatsApp",
    subtitle: "Loja virtual, pagamentos e acompanhamento automatizado",
    description:
      "Projeto freelancer para automatizar o processo comercial de uma loja. A plataforma gerencia produtos, categorias, catálogo e pedidos. Após a compra, o sistema inicia automaticamente um fluxo de mensagens pelo WhatsApp para acompanhar o cliente até a finalização. O pagamento foi integrado ao Mercado Pago, permitindo criar transações, acompanhar status e confirmar pagamentos.",
    features: [
      "Gerenciamento da loja",
      "Cadastro e edição de produtos",
      "Organização por categorias",
      "Gerenciamento de catálogo",
      "Criação e acompanhamento de pedidos",
      "Integração com o Mercado Pago",
      "Confirmação de pagamentos",
      "Atualização do status dos pedidos",
      "Automação de mensagens pelo WhatsApp",
      "Fluxo pós-compra",
      "Painel administrativo",
    ],
    stack: ["Node.js", "Mercado Pago", "WhatsApp", "APIs REST", "Banco relacional"],
    role: "Fui responsável pelo desenvolvimento da plataforma, incluindo módulos administrativos, regras de negócio, integração com o Mercado Pago, automação de mensagens, banco de dados e implantação.",
    result:
      "A loja virtual com o fluxo de mensagens automatizado converteu cerca de 70% dos leads, sem que um atendente precisasse iniciar a conversa.",
    note: "Projeto comercial desenvolvido para um cliente. Por propriedade intelectual e confidencialidade, código-fonte, dados e detalhes internos não estão disponíveis publicamente.",
    images: [
      { src: freelaStore, alt: "Loja virtual publicada" },
      { src: freelaCriacaoLoja, alt: "Criação da loja virtual" },
      { src: freelaCatalogo, alt: "Catálogo de produtos da loja" },
      { src: freelaCategorias, alt: "Produtos organizados por categorias" },
      { src: freelaCriacaoLojaPagamento, alt: "Configuração de pagamento no Mercado Pago" },
      { src: freelaNovoPedido, alt: "Tela de criação de novo pedido" },
      { src: freelaPedidos, alt: "Listagem e status dos pedidos" },
      { src: freelaChat, alt: "Fluxo de conversa automatizada via WhatsApp" },
    ],
  },
  {
    id: "saas-barbearias",
    index: "03",
    title: "SaaS de CRM para barbearias",
    subtitle: "Gestão de clientes, agendamentos e controle financeiro",
    description:
      "Plataforma SaaS criada para centralizar a operação de barbearias. O sistema reúne agendamentos, serviços, clientes e informações financeiras em um único ambiente, reduzindo tarefas manuais e facilitando o acompanhamento do negócio.",
    features: [
      "Cadastro e gerenciamento de clientes",
      "Agendamento de atendimentos",
      "Gerenciamento de serviços",
      "Histórico de atendimentos",
      "Organização da agenda",
      "Controle de receitas",
      "Acompanhamento do fluxo de caixa",
      "Relatórios financeiros",
      "Painel administrativo",
    ],
    stack: ["PHP", "Laravel", "JavaScript", "Banco relacional", "APIs REST", "Docker", "Docker Compose", "CI/CD", "Hospedagem em nuvem", "MercadoPago", "SqlServer"],
    role: "Fui responsável pelo desenvolvimento da solução desde a estrutura inicial, incluindo regras de negócio, backend, frontend, banco de dados e implantação.",
    note: "O código e as informações internas não são apresentados por se tratar de uma aplicação comercial.",
    images: [{ src: barbeariaImg, alt: "Plataforma SaaS de CRM para barbearias" }],
  },
  ];

export const personalProjects: Project[] = [
  {
    id: "sicad",
    index: "04",
    title: "SICAD",
    subtitle: "Sistema Inteligente de Cadastro e Administração de Dispositivos",
    description:
      "Sistema para centralizar o gerenciamento de clientes e dispositivos, permitindo monitorar conexões e realizar comunicação em tempo real. Utiliza arquitetura cliente-servidor com aplicação desktop, servidor de conexões TCP, banco de dados e infraestrutura conteinerizada.",
    features: [
      "Cadastro e gerenciamento de clientes",
      "Cadastro e gerenciamento de dispositivos",
      "Monitoramento de conexões",
      "Comunicação em tempo real",
      "Persistência de informações",
      "Arquitetura cliente-servidor",
      "Execução conteinerizada",
    ],
    stack: ["Java", "JavaFX", "TCP", "PostgreSQL", "Docker", "Docker Compose"],
    role: "Desenvolvimento da aplicação desktop, do servidor de conexões e da infraestrutura conteinerizada.",
    images: [
      { src: sicadImg1, alt: "Tela da aplicação desktop do SICAD" },
      { src: sicadImg2, alt: "Detalhe do sistema SICAD" },
      { src: sicadImg3, alt: "Arquitetura cliente-servidor do SICAD" },
    ],
    links: [
      { label: "Ver código no GitHub", href: "https://github.com/Gustavo-Correia/SICAD" },
      { label: "Ver documentação", href: "https://github.com/Gustavo-Correia/SICAD" },
    ],
  },
  {
    id: "vemcaprof",
    index: "05",
    title: "VemCáProf",
    subtitle: "Sistema de gestão para professores particulares",
    description:
      "Sistema criado para auxiliar professores particulares na organização de seus atendimentos e atividades profissionais, centralizando informações importantes para facilitar o gerenciamento da rotina e o acompanhamento dos atendimentos realizados.",
    features: [
      "Organização de atendimentos",
      "Gestão de alunos",
      "Acompanhamento da rotina",
      "Registro de atividades",
      "Painel do professor",
    ],
    stack: [
      "C#",
      ".NET / .NET 6+",
      "ASP.NET Core",
      "MVC",
      "Web API",
      "Blazor",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "SQL Server",
      "MySQL",
      "APIs REST",
      "Git",
      "Azure DevOps",
    ],
    role: "Projeto desenvolvido em equipe. Minha participação e as funcionalidades implementadas por mim são identificadas na documentação do projeto.",
    images: [{ src: vemcaprofVideo, alt: "Vídeo de demonstração do VemCáProf" }],
    links: [
      { label: "Ver projeto no GitHub", href: "https://github.com/Gustavo-Correia/VemCaProf" },
      { label: "Ver demonstração", href: "https://github.com/Gustavo-Correia/VemCaProf" },
    ],
  },
];

export const experiences = [
  {
    company: "Revolution IT",
    role: "Desenvolvedor Full Stack",
    period: "Outubro de 2024 – Atual",
    summary:
      "Desenvolvimento e manutenção de uma plataforma de automação de WhatsApp e CRM voltada para atendimento, gestão de clientes e otimização de processos comerciais.",
    bullets: [
      "Desenvolvimento de módulos para CRM conversacional",
      "Criação e manutenção de automações de atendimento",
      "Integração com a API Oficial do WhatsApp",
      "Integração com Z-API e Baileys",
      "Desenvolvimento de chatbots utilizando a API da OpenAI",
      "Tradução automática de mensagens para clientes internacionais",
      "Implementação de funcionalidades de atendimento e vendas",
      "Manutenção e evolução contínua da plataforma",
      "Correção de falhas e melhoria da estabilidade do sistema",
      "Versionamento e implantação das aplicações",
      "Participação no processo de integração e entrega contínua",
    ],
    footer:
      "A tradução automática e o atendimento com IA contribuíram para um aumento estimado de até 40% nas conversões do público internacional em produção. Por se tratar de solução comercial proprietária, o código-fonte e os detalhes internos não são públicos.",
  },
  {
    company: "Desenvolvedor Full Stack Freelancer",
    role: "CRM, comércio eletrônico e automação",
    period: "2023 – Atual",
    summary:
      "Sistemas personalizados para pequenas e médias empresas, da análise do problema à implantação da solução: plataformas CRM, automação de atendimento, sistemas comerciais e integrações com WhatsApp, pagamentos e IA.",
    bullets: [
      "Levantamento das necessidades do cliente",
      "Planejamento da solução",
      "Desenvolvimento do backend e frontend",
      "Modelagem e integração do banco de dados",
      "Criação de APIs e regras de negócio",
      "Integração com serviços externos",
      "Implantação e manutenção das aplicações",
    ],
  },
  {
    company: "AMS Soluções Tecnológicas",
    role: "Analista de TI — Estágio",
    period: "Janeiro de 2023 – Junho de 2023",
    summary:
      "Manutenção e gerenciamento de dados com ODBC e MySQL, contribuindo para a integridade e disponibilidade das informações em ambiente produtivo, além do atendimento técnico aos clientes.",
    bullets: [
      "Manutenção e gerenciamento de dados",
      "Utilização de ODBC e MySQL",
      "Diagnóstico e resolução de problemas",
      "Atendimento técnico aos clientes",
      "Registro e acompanhamento de chamados",
      "Apoio na melhoria de processos internos de TI",
    ],
  },
];

export const specialties = [
  {
    title: "Sistemas CRM",
    text: "Plataformas para gestão de clientes, histórico de interações, funis comerciais, atendimentos e acompanhamento de oportunidades.",
  },
  {
    title: "Automação de atendimento",
    text: "Fluxos automatizados de mensagens, chatbots e integrações com WhatsApp para atendimento, suporte, qualificação de leads e vendas.",
  },
  {
    title: "Aplicações web",
    text: "Sistemas completos com backend, frontend, APIs, autenticação, banco de dados e painéis administrativos.",
  },
  {
    title: "Integrações com APIs",
    text: "Meios de pagamento, provedores de WhatsApp, serviços de inteligência artificial e outras plataformas externas.",
  },
  {
    title: "Inteligência artificial",
    text: "Chatbots e funcionalidades baseadas em IA para classificação, geração de respostas, tradução e automação de processos.",
  },
  {
    title: "Deploy e infraestrutura",
    text: "Configuração de ambientes, conteinerização, versionamento, CI/CD e implantação de aplicações em produção.",
  },
];

export const techGroups = [
  {
    level: "Experiência profissional",
    note: "Uso diário em produção",
    items: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React",
      "Next.js",
      "PHP",
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "Sequelize",
      "APIs REST",
      "Git",
      "Docker",
      "Docker Compose",
      "CI/CD",
      "AWS",
      "Redis",
      "API Oficial do WhatsApp",
      "Z-API",
      "Baileys",
      "API da OpenAI",
      "Mercado Pago",
    ],
  },
  {
    level: "Experiência em projetos",
    note: "Aplicado em projetos próprios e acadêmicos",
    items: [
      "Python",
      "Flask",
      "Java",
      "Spring Boot",
      "C#",
      "Prisma",
      "MongoDB",
      "Hugging Face",
    ],
  },
  {
    level: "Conhecimento",
    note: "Estudo e uso pontual",
    items: ["Kubernetes"],
  },
];

export const education = [
  {
    title: "Graduando em Sistemas de Informação",
    place: "Universidade Federal de Sergipe — UFS",
    period: "Junho de 2022 – Previsão de conclusão em 2027",
    status: "Em andamento",
  },
];

export type Highlight = {
  value: string;
  label: string;
};

export const highlights: Highlight[] = [
  {
    value: "3+",
    label: "anos de experiência prática com sistemas comerciais, CRM e automação",
  },
  {
    value: "+40%",
    label: "aumento estimado nas conversões de clientes internacionais",
  },
  {
    value: "2",
    label: "plataformas comerciais desenvolvidas e em produção",
  },
];

export const certifications = [
  "Curso Web Moderno Completo com JavaScript — Cod3r",
  "Curso de PHP 8 — Unset",
  "AWS Fundamentals — AWS",
  "Fundamentos da Agilidade — Santander Open Academy",
];
