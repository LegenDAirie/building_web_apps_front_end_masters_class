import Collection from 'ampersand-rest-collection'
import Repo from './repo'

export default Collection.extend({
  url: 'https://api.github.com/user/repos',

  models: Repo
})
