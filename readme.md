# Hotwire: HTML over the wire

Hotwire is an alternative approach to building modern web applications without using much JavaScript by sending HTML instead of JSON over the wire. This makes for fast first-load pages, keeps template rendering on the server, and allows for a simpler, more productive development experience in any programming language, without sacrificing any of the speed or responsiveness associated with a traditional single-page application.

You can follow the Hotwire approach as merely inspiration for your own tooling, or you can use these Hotwire designed frameworks created by the team at Basecamp to power HEY. They're designed to work together, complimenting each other, so you have a complete solution across all platforms:

## TURBO

The heart of Hotwire is Turbo. A set of complimentary techniques for speeding up page changes and form submissions, dividing complex pages into components, and providing partial page updates over WebSocket. All without writing any JavaScript at all. And designed from the start to integrate perfectly with native hybrid applications for iOS and Android.

## STIMULUS

While Turbo usually takes care of at least 80% of the interactivity that traditionally would have required JavaScript, there are still cases where a dash of custom code is required. Stimulus makes this easy with a HTML-centric approach to state and wiring. 

## STRATA

Standardizes the way the web and native parts of a mobile hybrid application talk to each other via a HTML bridge attributes. This makes it easy to progressively level-up web interactions with native replacements.
