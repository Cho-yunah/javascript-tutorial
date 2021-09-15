window.onload = () => {
  // get root div for rendering
  let root = document.getElementById('app')

  //router instance
  let Router = function (name, routes) {
    return {
      name,
      routes,
    }
  }

  //create the route instance
  let routerInstance = new Router('routerInstance', [
    {
      path: '/',
      name: 'Intro',
    },
    {
      path: '/projects',
      name: 'Projects',
    },
    {
      path: '/contact',
      name: 'Contact',
    },
  ])
}
