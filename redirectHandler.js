import * as url from "url";

const redirectHandler = app => {

    let appRoute = (() => {
        let queryParams = url.parse(window.location.href, true).query
        return {
            get: () => queryParams.route?.toString(),
            set: route => {
                const location = window.location
                location.assign(
                    location.href.split('?')[0] + '?route=' + route
                )
            }
        }
    })()

    const init = () => {
        setRoute()
        app.$options.netlify = true

        app.$options.updated = () => {
            app.$options.updated()
            setRoute()
            handleInternalLinks()
        };
        ['load', 'click'].forEach(event => window.addEventListener(event, handleInternalLinks))
    }

    const handleInternalLinks = () => {
        const allLinks = [...document.querySelectorAll('a[href]')]
        const internalLinks = allLinks.filter(link => {
            const url = link.getAttribute('href')
            return !url.startsWith('http') || url.includes(window.location.host)
        })

        internalLinks.forEach(link => {
            const query = link.getAttribute('href')
            link.addEventListener('click', () => {
                redirect(query)
            })
            link.removeAttribute('href')
        })
    }

    const redirect = (destination) => appRoute.set(destination)

    const setRoute = () => {
        if (!appRoute.get()) return;

        const routeName = app.$router.resolve(appRoute.get()).route.name

        app.$options.components.ComponentView =
            app.$router.options.routes.find(route => route.name === routeName)?.component
        
        app.$forceUpdate()
    }

    return {init}
}

export default vueComponent => redirectHandler(vueComponent).init()
