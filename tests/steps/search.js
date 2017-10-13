const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given: Dado, Then: Entao, When}) => {
  Entao(/^o formulário de busca do google deve estar presente$/, () => client
    .assert.visible('input[name="q"]')
  )
})
