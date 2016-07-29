import Model from 'ampersand-model'
import githubAuthMixin from 'github_auth_mixin'

export default Model.extend(githubAuthMixin, {
  url:'https://api.github.com/user',

  initialize() {
    this.token = window.localStorage.token

    this.on('change:token', this.onTokenChange)
  },

  props: {
    id: 'number',
    login: 'string',
    avatar_url: 'string'
  },

  session: {
    token: 'string'
  },

  onTokenChange() {
    window.localStorage.token = this.token
    this.fetchInitialData()
  },

  fetchInitialData () {
    if (this.token) {
      this.fetch()
    }
  }
})
