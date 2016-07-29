import Collection from 'ampersand-rest-collection'
import Repo from './repo'
import githubAuthMixin from '../helpers/github_auth_mixin'

export default Collection.extend(githubAuthMixin, {
  url: 'https://api.github.com/user/repos',

  models: Repo
})
