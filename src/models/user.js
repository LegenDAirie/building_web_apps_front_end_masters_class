import Model from 'ampersand-model'
import githubAuthMixin from '../helpers/github_auth_mixin'
import RepoCollection from './repo_collection'

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

  collections: {
    repos: RepoCollection
  },

  onTokenChange() {
    window.localStorage.token = this.token
    this.fetchInitialData()
  },

  fetchInitialData () {
    if (this.token) {
      this.fetch()
      this.repos.fetch()
    }
  }
})
