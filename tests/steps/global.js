const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given: Dado, Then: Entao, When}) => {
  Dado(/^que eu posso abrir a página do "(.*?)"$/, (page) => client
    .url(`http://${page}`)
    .waitForElementVisible('body', 1000)
  )

  Entao(/^o título da página deve ser "(.*?)"$/, (title) => client
    .assert.title(title)
  )
})
