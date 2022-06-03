var snippet = document.createElement('script')

snippet.src = "https://j.dev-wovn.io/1"
// Uncomment and change to your local token
snippet.setAttribute('data-wovnio', 'key=yVci4u') // nginx.test on dat@wovn.io
// snippet.setAttribute('data-wovnio', 'key=QgCvz5') // nginx.test on dat@minimaltech.co
snippet.setAttribute('async', '')

document.head.appendChild(snippet)
