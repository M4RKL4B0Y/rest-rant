const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8NDA0fGVufDB8fDB8fHww" alt="404 page not found"></img>
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/@visuals">visuals</a> on <a href="https://unsplash.com/">Unspalsh</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404


