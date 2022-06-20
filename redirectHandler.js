import * as url from "url";

let app;

const handleInternalLinks = () => {
    const allLinks = [...document.querySelectorAll('[href]')]

    const internalLinks = allLinks.filter(link => {
        const url = link.getAttribute('href')
        return link.tagName === 'A' && (!url.startsWith('http') || url.includes(window.location.host))
    })

    internalLinks.forEach(link => {
        const query = link.getAttribute('href')
        link.addEventListener('click', () => {
            redirect(app, query)
        })
        link.removeAttribute('href')
    })
}

const redirect = (app, to) => {
    const routeName = app.$router.resolve(to).route.name
    // noinspection UnnecessaryLocalVariableJS
    const componentView = app.$router.options.routes.find(route => route.name === routeName).component
    app.$options.components.ComponentView = componentView
    app.$forceUpdate()
}

export default vueComponent => {
    if (vueComponent.$options.name !== 'App') return;
    app = vueComponent

    const queriedRoute = url.parse(window.location.href, true).query.route
    if (queriedRoute) redirect(app, queriedRoute)
    app.$options.netlify = true

    app.$options.updated = () => {
        app.$options.updated()
        handleInternalLinks()
    }
    window.addEventListener('click', () => handleInternalLinks())
    handleInternalLinks()
}