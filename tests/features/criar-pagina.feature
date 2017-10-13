# language: pt

Funcionalidade: Criar Páginas
  Enquanto um usuário administrador do sistema
  Eu quero criar páginas institucionais
  Afim de disponibilizar maiores informações aos meus clientes.

Cenário: Criar Página com texto
  Dado eu sou administrador do sistema
  Quando eu acessar criação de página
  Então devo poder criar uma página com texto
  E ver essa página no site público no ar
