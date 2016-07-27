import Router from 'ampersand-router'

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public () {
    console.log('Public page')
  },

  repos () {
    console.log('repos')
  }
})
