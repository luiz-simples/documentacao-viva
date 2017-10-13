const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then}) => {
  Given(/^que eu posso abrir a página do "(.*?)"$/, (page) => client
    .url(`http://${page}`)
    .waitForElementVisible('body', 1000)
  )

  Then(/^o título da página deve ser "(.*?)"$/, (titulo) => client
    .assert.title(titulo)
  )
})
