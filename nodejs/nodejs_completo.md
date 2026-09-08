# MDN NodeJs Documentation

## Índice

- [Introduction to Node.js](#introduction-to-nodejs)
- [How much JavaScript do you need to know to use Node.js?](#how-much-javascript-do-you-need-to-know-to-use-nodejs)
- [Differences between Node.js and the Browser](#differences-between-nodejs-and-the-browser)
- [The V8 JavaScript Engine](#the-v8-javascript-engine)
- [An introduction to the npm package manager](#an-introduction-to-the-npm-package-manager)
- [ECMAScript 2015 (ES6) and beyond](#ecmascript-2015-es6-and-beyond)
- [Debugging Node.js](#debugging-nodejs)
- [Fetching data with Node.js](#fetching-data-with-nodejs)
- [WebSocket client with Node.js](#websocket-client-with-nodejs)
- [Node.js, the difference between development and production](#nodejs-the-difference-between-development-and-production)
- [Profiling Node.js Applications](#profiling-nodejs-applications)
- [Node.js with WebAssembly](#nodejs-with-webassembly)
- [Security Best Practices](#security-best-practices)
- [Introduction to Userland Migrations](#introduction-to-userland-migrations)
- [Run Node.js scripts from the command line](#run-nodejs-scripts-from-the-command-line)
- [How to use the Node.js REPL](#how-to-use-the-nodejs-repl)
- [Output to the command line using Node.js](#output-to-the-command-line-using-nodejs)
- [Accept input from the command line in Node.js](#accept-input-from-the-command-line-in-nodejs)
- [How to read environment variables from Node.js](#how-to-read-environment-variables-from-nodejs)
- [Anatomy of an HTTP Transaction](#anatomy-of-an-http-transaction)
- [Enterprise Network Configuration](#enterprise-network-configuration)
- [Node.js file stats](#nodejs-file-stats)
- [Node.js File Paths](#nodejs-file-paths)
- [Reading files with Node.js](#reading-files-with-nodejs)
- [Writing files with Node.js](#writing-files-with-nodejs)
- [Working with file descriptors in Node.js](#working-with-file-descriptors-in-nodejs)
- [Working with folders in Node.js](#working-with-folders-in-nodejs)
- [How to work with Different Filesystems](#how-to-work-with-different-filesystems)
- [JavaScript Asynchronous Programming and Callbacks](#javascript-asynchronous-programming-and-callbacks)
- [Asynchronous flow control](#asynchronous-flow-control)
- [Discover Promises in Node.js](#discover-promises-in-nodejs)
- [Discover JavaScript Timers](#discover-javascript-timers)
- [Overview of Blocking vs Non-Blocking](#overview-of-blocking-vs-non-blocking)
- [The Node.js Event Loop](#the-nodejs-event-loop)
- [The Node.js Event Emitter](#the-nodejs-event-emitter)
- [Understanding process.nextTick()](#understanding-processnexttick)
- [Understanding setImmediate()](#understanding-setimmediate)
- [Don't Block the Event Loop](#dont-block-the-event-loop)
- [Comparing Node.js concurrency models](#comparing-nodejs-concurrency-models)
- [Introduction to TypeScript](#introduction-to-typescript)
- [Running TypeScript Natively](#running-typescript-natively)
- [Running TypeScript code using transpilation](#running-typescript-code-using-transpilation)
- [Running TypeScript with a runner](#running-typescript-with-a-runner)
- [Publishing a TypeScript package](#publishing-a-typescript-package)
- [How to use streams](#how-to-use-streams)
- [Backpressuring in Streams](#backpressuring-in-streams)
- [Publishing a package](#publishing-a-package)
- [How to publish a Node-API package](#how-to-publish-a-node-api-package)
- [ABI Stability](#abi-stability)
- [User Journey](#user-journey)
- [Overview](#overview)
- [Understanding and Tuning Memory](#understanding-and-tuning-memory)
- [Using Heap Profiler](#using-heap-profiler)
- [Using Heap Snapshot](#using-heap-snapshot)
- [Tracing garbage collection](#tracing-garbage-collection)
- [Overview](#overview)
- [Using Inspector](#using-inspector)
- [Overview](#overview)
- [Using Linux Perf](#using-linux-perf)
- [Flame Graphs](#flame-graphs)
- [Discovering Node.js's test runner](#discovering-nodejss-test-runner)
- [Using Node.js's test runner](#using-nodejss-test-runner)
- [Mocking in tests](#mocking-in-tests)
- [Collecting code coverage in Node.js](#collecting-code-coverage-in-nodejs)
- [What is Node-API?](#what-is-node-api)
- [Overview](#overview)
- [Pre-requisites](#pre-requisites)
- [Tools](#tools)
- [Anatomy of a Node-API project](#anatomy-of-a-node-api-project)
- [Your First Project](#your-first-project)
- [Object Wrap](#object-wrap)
- [Migrating to Node-API](#migrating-to-node-api)
- [Overview](#overview)
- [node-gyp](#node-gyp)
- [CMake.js](#cmakejs)
- [node-pre-gyp](#node-pre-gyp)
- [Overview](#overview)
- [Context Awareness](#context-awareness)
- [Object and Function References](#object-and-function-references)
- [AsyncWorker](#asyncworker)
- [Thread-Safe Functions](#thread-safe-functions)
- [Axios to WHATWG Fetch](#axios-to-whatwg-fetch)
- [Chalk to util.styleText()](#chalk-to-utilstyletext)
- [Correct TypeScript Specifiers](#correct-typescript-specifiers)
- [Kleur to util.styleText](#kleur-to-utilstyletext)
- [Mocha to Node.js Test Runner](#mocha-to-nodejs-test-runner)

---

# Introduction to Node.js
> **Fonte original:** [https://nodejs.org/learn/getting-started/introduction-to-nodejs](https://nodejs.org/learn/getting-started/introduction-to-nodejs)

Introduction to Node.js
Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.
A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking. In addition, libraries in Node.js are generally written using non-blocking paradigms. Accordingly, blocking behavior is the exception rather than the norm in Node.js.
When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.
This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.
Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.
In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.
An Example Node.js Application
The most common example Hello World of Node.js is a web server:
CJS
ESM
const
{
createServer
}
=
require
(
'
node:http
'
)
;
const
hostname
=
'
127.0.0.1
'
;
const
port
=
3000
;
const
server
=
createServer
(
(
req
,
res
)
=>
{
res
.
statusCode
=
200
;
res
.
setHeader
(
'
Content-Type
'
,
'
text/plain
'
)
;
res
.
end
(
'
Hello World
'
)
;
}
)
;
server
.
listen
(
port
,
hostname
,
()
=>
{
console
.
log
(
`
Server running at http://
${
hostname
}
:
${
port
}
/
`
)
;
}
)
;
JavaScript
Copy to clipboard
To run this snippet, save it as a
server.js
file and run
node server.js
in your terminal.
If you use the mjs version of the code, you should save it as a
server.mjs
file and run
node server.mjs
in your terminal.
This code first includes the Node.js
http
module
.
Node.js has a fantastic
standard library
, including first-class support for networking.
The
createServer()
method of
http
creates a new HTTP server and returns it.
The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.
Whenever a new request is received, the
request
event
is called, providing two objects: a request (an
http.IncomingMessage
object) and a response (an
http.ServerResponse
object).
Those 2 objects are essential to handle the HTTP call.
The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.
The second is used to return data to the caller.
In this case with:
res
.
statusCode
=
200
;
we set the
statusCode
property to
200
, to indicate a successful response.
We set the
Content-Type
header:
res
.
setHeader
(
'
Content-Type
'
,
'
text/plain
'
)
;
and we close the response, adding the content as an argument to
end()
:
res
.
end
(
'
Hello World
'
)
;
If you haven't already done so,
download
Node.js.

---

# How much JavaScript do you need to know to use Node.js?
> **Fonte original:** [https://nodejs.org/learn/getting-started/how-much-javascript-do-you-need-to-know-to-use-nodejs](https://nodejs.org/learn/getting-started/how-much-javascript-do-you-need-to-know-to-use-nodejs)

How much JavaScript do you need to know to use Node.js?
As a beginner, it's hard to get to a point where you are confident enough in your programming abilities. While learning to code, you might also be confused at where does JavaScript end, and where Node.js begins, and vice versa.
What is recommended to learn before diving deep with Node.js?
Lexical Structure
Expressions
Data Types
Classes
Variables
Functions
this
operator
Arrow Functions
Loops
Scopes
Arrays
Template Literals
Strict Mode
ECMAScript 2015 (ES6) and beyond
Asynchronous JavaScript
With those concepts in mind, you are well on your road to become a proficient JavaScript developer, in both the browser and in Node.js.
Asynchronous Programming
The following concepts are also key to understand asynchronous programming, which is one of the fundamental parts of Node.js:
Asynchronous programming and callbacks
Timers
Promises
Async and Await
Closures
The Event Loop

---

# Differences between Node.js and the Browser
> **Fonte original:** [https://nodejs.org/learn/getting-started/differences-between-nodejs-and-the-browser](https://nodejs.org/learn/getting-started/differences-between-nodejs-and-the-browser)

Differences between Node.js and the Browser
Both the browser and Node.js use JavaScript as their programming language. Building apps that run in the browser is completely different from building a Node.js application. Despite the fact that it's always JavaScript, there are some key differences that make the experience radically different.
From the perspective of a frontend developer who extensively uses JavaScript, Node.js apps bring with them a huge advantage: the comfort of programming everything - the frontend and the backend - in a single language.
You have a huge opportunity because we know how hard it is to fully, deeply learn a programming language, and by using the same language to perform all your work on the web - both on the client and on the server, you're in a unique position of advantage.
What changes is the ecosystem.
In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don't have the
document
,
window
and all the other objects that are provided by the browser.
And in the browser, we don't have all the nice APIs that Node.js provides through its modules, like the filesystem access functionality.
Another big difference is that in Node.js you control the environment. Unless you are building an open source application that anyone can deploy anywhere, you know which version of Node.js you will run the application on. Compared to the browser environment, where you don't get the luxury to choose what browser your visitors will use, this is very convenient.
This means that you can write all the modern ES2015+ JavaScript that your Node.js version supports. Since JavaScript moves so fast, but browsers can be a bit slow to upgrade, sometimes on the web you are stuck with using older JavaScript / ECMAScript releases. You can use Babel to transform your code to be ES5-compatible before shipping it to the browser, but in Node.js, you won't need that.
Another difference is that Node.js supports both the CommonJS and ES module systems (since Node.js v12), while in the browser, we are starting to see the ES Modules standard being implemented.
In practice, this means that you can use both
require()
and
import
in Node.js, while you are limited to
import
in the browser.

---

# The V8 JavaScript Engine
> **Fonte original:** [https://nodejs.org/learn/getting-started/the-v8-javascript-engine](https://nodejs.org/learn/getting-started/the-v8-javascript-engine)

The V8 JavaScript Engine
V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.
V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs (they all makeup runtime environment) are provided by the browser.
The cool thing is that the JavaScript engine is independent of the browser in which it's hosted. This key feature enabled the rise of Node.js. V8 was chosen to be the engine that powered Node.js back in 2009, and as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript.
The Node.js ecosystem is huge, and thanks to V8, it also powers desktop apps with projects like Electron.
Other JS engines
Other browsers have their own JavaScript engine:
Firefox has
SpiderMonkey
Safari has
JavaScriptCore
(also called Nitro)
Edge was originally based on
Chakra
but has more recently been
rebuilt using Chromium
and the V8 engine.
and many others exist as well.
All those engines implement the
ECMA ES-262 standard
, also called ECMAScript, the standard used by JavaScript.
The quest for performance
V8 is written in C++, and it's continuously improved. It is portable and runs on Mac, Windows, Linux and several other systems.
In this V8 introduction, we will ignore the implementation details of V8: they can be found on more authoritative sites (e.g. the
V8 official site
), and they change over time, often radically.
V8 is always evolving, just like the other JavaScript engines around, to speed up the Web and the Node.js ecosystem.
On the web, there is a race for performance that's been going on for years, and we (as users and developers) benefit a lot from this competition because we get faster and more optimized machines year after year.
Compilation
JavaScript is generally considered an interpreted language, but modern JavaScript engines no longer just interpret JavaScript, they compile it.
This has been happening since 2009, when the SpiderMonkey JavaScript compiler was added to Firefox 3.5, and everyone followed this idea.
JavaScript is internally compiled by V8 with
just-in-time
(JIT)
compilation
to speed up the execution.
This might seem counter-intuitive, but since the introduction of Google Maps in 2004, JavaScript has evolved from a language that was generally executing a few dozens of lines of code to complete applications with thousands to hundreds of thousands of lines running in the browser.
Our applications can now run for hours inside a browser, rather than being just a few form validation rules or simple scripts.
In this
new world
, compiling JavaScript makes perfect sense because while it might take a little bit more to have the JavaScript
ready
, once done it's going to be much more performant than purely interpreted code.

---

# An introduction to the npm package manager
> **Fonte original:** [https://nodejs.org/learn/getting-started/an-introduction-to-the-npm-package-manager](https://nodejs.org/learn/getting-started/an-introduction-to-the-npm-package-manager)

An introduction to the npm package manager
Introduction to npm
npm
is the standard package manager for Node.js.
In September 2022 over 2.1 million packages were reported being listed in the npm registry, making it the biggest single language code repository on Earth, and you can be sure there is a package for (almost!) everything.
It started as a way to download and manage dependencies of Node.js packages, but it has since become a tool used also in frontend JavaScript.
Yarn
and
pnpm
are alternatives to npm cli. You can check them out as well.
Packages
npm
installs, updates and manages downloads of dependencies of your project. Dependencies are pre-built pieces of code, such as libraries and packages, that your Node.js application needs to work.
Installing all dependencies
If a project has a
package.json
file, by running
npm
install
it will install everything the project needs, in the
node_modules
folder, creating it if it's not existing already.
Installing a single package
You can also install a specific package by running
npm
install
<
package-nam
e
>
Furthermore, since npm 5, this command adds
<package-name>
to the
package.json
file
dependencies
. Before version 5, you needed to add the flag
--save
.
Often you'll see more flags added to this command:
--save-dev
installs and adds the entry to the
package.json
file
devDependencies
--no-save
installs but does not add the entry to the
package.json
file
dependencies
--save-optional
installs and adds the entry to the
package.json
file
optionalDependencies
--no-optional
will prevent optional dependencies from being installed
Shorthands of the flags can also be used:
-S:
--save
-D:
--save-dev
-O:
--save-optional
The difference between
devDependencies
and
dependencies
is that the former contains development tools, like a testing library, while the latter is bundled with the app in production.
As for the
optionalDependencies
the difference is that build failure of the dependency will not cause installation to fail. But it is your program's responsibility to handle the lack of the dependency. Read more about
optional dependencies
.
Updating packages
Updating is also made easy, by running
npm
update
npm
will check all packages for a newer version that satisfies your versioning constraints.
You can specify a single package to update as well:
npm
update
<
package-nam
e
>
Versioning
In addition to plain downloads,
npm
also manages
versioning
, so you can specify any specific version of a package, or require a version higher or lower than what you need.
Many times you'll find that a library is only compatible with a major release of another library.
Or a bug in the latest release of a lib, still unfixed, is causing an issue.
Specifying an explicit version of a library also helps to keep everyone on the same exact version of a package, so that the whole team runs the same version until the
package.json
file is updated.
In all those cases, versioning helps a lot, and
npm
follows the semantic versioning (semver) standard.
You can install a specific version of a package, by running
npm
install
<
package-nam
e
>
@
<
versio
n
>
Running Tasks
The package.json file supports a format for specifying command line tasks that can be run by using
npm
run
<
task-nam
e
>
For example:
{
"
scripts
"
:
{
"
start-dev
"
:
"
node lib/server-development
"
,
"
start
"
:
"
node lib/server-production
"
}
}
JSON
Copy to clipboard
It's very common to use this feature to run Webpack:
{
"
scripts
"
:
{
"
watch
"
:
"
webpack --watch --progress --colors --config webpack.conf.js
"
,
"
dev
"
:
"
webpack --progress --colors --config webpack.conf.js
"
,
"
prod
"
:
"
NODE_ENV=production webpack -p --config webpack.conf.js
"
}
}
JSON
Copy to clipboard
So instead of typing those long commands, which are easy to forget or mistype, you can run
$
npm run watch
$
npm run dev
$
npm run prod
Shell Session
Copy to clipboard

---

# ECMAScript 2015 (ES6) and beyond
> **Fonte original:** [https://nodejs.org/learn/getting-started/ecmascript-2015-es6-and-beyond](https://nodejs.org/learn/getting-started/ecmascript-2015-es6-and-beyond)

ECMAScript 2015 (ES6) and beyond
Node.js is built against modern versions of
V8
. By keeping up-to-date with the latest releases of this engine, we ensure new features from the
JavaScript ECMA-262 specification
are brought to Node.js developers in a timely manner, as well as continued performance and stability improvements.
All ECMAScript 2015 (ES6) features are split into three groups for
shipping
,
staged
, and
in progress
features:
All
shipping
features, which V8 considers stable, are turned
on by default on Node.js
and do
NOT
require any kind of runtime flag.
Staged
features, which are almost-completed features that are not considered stable by the V8 team, require a runtime flag:
--harmony
.
In progress
features can be activated individually by their respective harmony flag, although this is highly discouraged unless for testing purposes. Note: these flags are exposed by V8 and will potentially change without any deprecation notice.
Which features ship with which Node.js version by default?
The website
node.green
provides an excellent overview over supported ECMAScript features in various versions of Node.js, based on kangax's compat-table.
Which features are in progress?
New features are constantly being added to the V8 engine. Generally speaking, expect them to land on a future Node.js release, although timing is unknown.
You may list all the
in progress
features available on each Node.js release by grepping through the
--v8-options
argument. Please note that these are incomplete and possibly broken features of V8, so use them at your own risk:
node
--v8-options
|
grep
"
in progress
"
I have my infrastructure set up to leverage the --harmony flag. Should I remove it?
The current behavior of the
--harmony
flag on Node.js is to enable
staged
features only. After all, it is now a synonym of
--es_staging
. As mentioned above, these are completed features that have not been considered stable yet. If you want to play safe, especially on production environments, consider removing this runtime flag until it ships by default on V8 and, consequently, on Node.js. If you keep this enabled, you should be prepared for further Node.js upgrades to break your code if V8 changes their semantics to more closely follow the standard.
How do I find which version of V8 ships with a particular version of Node.js?
Node.js provides a simple way to list all dependencies and respective versions that ship with a specific binary through the
process
global object. In case of the V8 engine, type the following in your terminal to retrieve its version:
node
-p
process.versions.v8

---

# Debugging Node.js
> **Fonte original:** [https://nodejs.org/learn/getting-started/debugging](https://nodejs.org/learn/getting-started/debugging)

Debugging Node.js
This guide will help you get started debugging your Node.js apps and scripts.
Enable Inspector
When started with the
--inspect
switch, a Node.js process listens for a
debugging client. By default, it will listen at host and port 127.0.0.1:9229.
Each process is also assigned a unique
UUID
.
Inspector clients must know and specify host address, port, and UUID to connect.
A full URL will look something like
ws://127.0.0.1:9229/0f2c936f-b1cd-4ac9-aab3-f63b0f33d55e
.
Node.js will also start listening for debugging messages if it receives a
SIGUSR1
signal. (
SIGUSR1
is not available on Windows.) In Node.js 7 and
earlier, this activates the legacy Debugger API. In Node.js 8 and later, it will
activate the Inspector API.
Security Implications
Since the debugger has full access to the Node.js execution environment, a
malicious actor able to connect to this port may be able to execute arbitrary
code on behalf of the Node.js process. It is important to understand the security
implications of exposing the debugger port on public and private networks.
Exposing the debug port publicly is unsafe
If the debugger is bound to a public IP address, or to 0.0.0.0, any clients that
can reach your IP address will be able to connect to the debugger without any
restriction and will be able to run arbitrary code.
By default
node --inspect
binds to 127.0.0.1. You explicitly need to provide a
public IP address or 0.0.0.0, etc., if you intend to allow external connections
to the debugger. Doing so may expose you to a potentially significant security
threat. We suggest you ensure appropriate firewalls and access controls are in place
to prevent a security exposure.
See the section on '
Enabling remote debugging scenarios
' on some advice on how
to safely allow remote debugger clients to connect.
Local applications have full access to the inspector
Even if you bind the inspector port to 127.0.0.1 (the default), any applications
running locally on your machine will have unrestricted access. This is by design
to allow local debuggers to be able to attach conveniently.
Browsers, WebSockets and same-origin policy
Websites open in a web-browser can make WebSocket and HTTP requests under the
browser security model. An initial HTTP connection is necessary to obtain a
unique debugger session id. The same-origin-policy prevents websites from being
able to make this HTTP connection. For additional security against
DNS rebinding attacks
, Node.js
verifies that the 'Host' headers for the connection either
specify an IP address or
localhost
precisely.
These security policies disallow connecting to a remote debug server by
specifying the hostname. You can work-around this restriction by specifying
either the IP address or by using ssh tunnels as described below.
Inspector Clients
A minimal CLI debugger is available with
node inspect myscript.js
.
Several commercial and open source tools can also connect to the Node.js Inspector.
Chrome DevTools 55+, Microsoft Edge
Option 1: Use the built-in DevTools UI
Open
chrome://inspect
(
edge://inspect
in Microsoft Edge) in your browser.
Click the Configure button and ensure your target host and port are listed.
Your Node.js application should appear in the Remote Target list.
Option 2: Connect manually
Visit
http://localhost:<inspect-port>/json/list
. It should return a JSON object containing a
devtoolsFrontendUrl
.
Copy the
devtoolsFrontendUrl
value from the response and paste it into your browser's address bar.
See
Chrome DevTools Frontend
and
Microsoft Edge DevTools Guide
for more information.
Visual Studio Code 1.10+
In the Debug panel, click the settings icon to open
.vscode/launch.json
.
Select "Node.js" for initial setup.
See
https://code.visualstudio.com/docs/nodejs/nodejs-debugging
for more information.
Visual Studio 2017+
Choose "Debug > Start Debugging" from the menu or hit F5.
Detailed instructions
.
JetBrains WebStorm and other JetBrains IDEs
Create a new Node.js debug configuration and hit Debug.
--inspect
will be used
by default for Node.js 7+. To disable uncheck
js.debugger.node.use.inspect
in
the IDE Registry. To learn more about running and debugging Node.js in WebStorm and other JetBrains IDEs,
check out
WebStorm online help
.
chrome-remote-interface
Library to ease connections to
Inspector Protocol
endpoints.
See
https://github.com/cyrus-and/chrome-remote-interface
for more information.
Eclipse IDE with Eclipse Wild Web Developer extension
From a .js file, choose "Debug As... > Node program", or
Create a Debug Configuration to attach debugger to running Node.js application (already started with
--inspect
).
See
https://eclipseide.org/
for more information.
Command-line options
The following table lists the impact of various runtime flags on debugging:
Flag
Meaning
--inspect
Enable inspector agent; Listen on default address and port (127.0.0.1:9229)
--inspect=[host:port]
Enable inspector agent; Bind to address or hostname
host
(default: 127.0.0.1); Listen on port
port
(default: 9229)
--inspect-brk
Enable inspector agent; Listen on default address and port (127.0.0.1:9229); Break before user code starts
--inspect-brk=[host:port]
Enable inspector agent; Bind to address or hostname
host
(default: 127.0.0.1); Listen on port
port
(default: 9229); Break before user code starts
--inspect-wait
Enable inspector agent; Listen on default address and port (127.0.0.1:9229); Wait for debugger to be attached.
--inspect-wait=[host:port]
Enable inspector agent; Bind to address or hostname
host
(default: 127.0.0.1); Listen on port
port
(default: 9229); Wait for debugger to be attached.
--disable-sigusr1
Disable the ability of starting a debugging session by sending a SIGUSR1 signal to the process.
node inspect script.js
Spawn child process to run user's script under --inspect flag; and use main process to run CLI debugger.
node inspect --port=xxxx script.js
Spawn child process to run user's script under --inspect flag; and use main process to run CLI debugger. Listen on port
port
(default: 9229)
Enabling remote debugging scenarios
We recommend that you never have the debugger listen on a public IP address. If
you need to allow remote debugging connections we recommend the use of ssh
tunnels instead. We provide the following example for illustrative purposes only.
Please understand the security risk of allowing remote access to a privileged
service before proceeding.
Let's say you are running Node.js on a remote machine, remote.example.com, that
you want to be able to debug. On that machine, you should start the node process
with the inspector listening only to localhost (the default).
node
--inspect
server.js
Now, on your local machine from where you want to initiate a debug client
connection, you can setup an ssh tunnel:
ssh
-L
9221:localhost:9229
[email protected]
This starts a ssh tunnel session where a connection to port 9221 on your local
machine will be forwarded to port 9229 on remote.example.com. You can now attach
a debugger such as Chrome DevTools or Visual Studio Code to localhost:9221,
which should be able to debug as if the Node.js application was running locally.
Legacy Debugger
The legacy debugger has been deprecated as of Node.js 7.7.0. Please use
--inspect
and Inspector instead.
When started with the
--debug
or
--debug-brk
switches in version 7 and
earlier, Node.js listens for debugging commands defined by the discontinued
V8 Debugging Protocol on a TCP port, by default
5858
. Any debugger client
which speaks this protocol can connect to and debug the running process; a
couple popular ones are listed below.
The V8 Debugging Protocol is no longer maintained or documented.
Built-in Debugger
Start
node debug script_name.js
to start your script under the builtin
command-line debugger. Your script starts in another Node.js process started with
the
--debug-brk
option, and the initial Node.js process runs the
_debugger.js
script and connects to your target. See
docs
for more information.
node-inspector
Debug your Node.js app with Chrome DevTools by using an intermediary process
which translates the
Inspector Protocol
used in Chromium to the V8 Debugger
protocol used in Node.js. See
https://github.com/node-inspector/node-inspector
for more information.

---

# Fetching data with Node.js
> **Fonte original:** [https://nodejs.org/learn/getting-started/fetch](https://nodejs.org/learn/getting-started/fetch)

Using the Fetch API with Undici in Node.js
Introduction
Undici
is an HTTP client library that powers the fetch API in Node.js. It was written from scratch and does not rely on the built-in HTTP client in Node.js. It includes a number of features that make it a good choice for high-performance applications.
For information on Undici's specification compliance, see the
Undici documentation
.
Basic GET Usage
async
function
main
()
{
// Like the browser fetch API, the default method is GET
const
response
=
await
fetch
(
'
https://jsonplaceholder.typicode.com/posts
'
)
;
const
data
=
await
response
.
json
()
;
console
.
log
(
data
)
;
// returns something like:
//   {
//   userId: 1,
//   id: 1,
//   title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//   body: 'quia et suscipit\n' +
//     'suscipit recusandae consequuntur expedita et cum\n' +
//     'reprehenderit molestiae ut ut quas totam\n' +
//     'nostrum rerum est autem sunt rem eveniet architecto'
// }
}
main
()
.
catch
(
console
.
error
)
;
JavaScript
Copy to clipboard
Basic POST Usage
// Data sent from the client to the server
const
body
=
{
title
:
'
foo
'
,
body
:
'
bar
'
,
userId
:
1
,
}
;
async
function
main
()
{
const
response
=
await
fetch
(
'
https://jsonplaceholder.typicode.com/posts
'
,
{
method
:
'
POST
'
,
headers
:
{
'
User-Agent
'
:
'
undici-stream-example
'
,
'
Content-Type
'
:
'
application/json
'
,
},
body
:
JSON
.
stringify
(
body
)
,
}
)
;
const
data
=
await
response
.
json
()
;
console
.
log
(
data
)
;
// returns something like:
// { title: 'foo', body: 'bar', userId: 1, id: 101 }
}
main
()
.
catch
(
console
.
error
)
;
JavaScript
Copy to clipboard
Customizing the Fetch API with Undici
Undici allows you to customize the Fetch API by providing options to the
fetch
function. For example, you can set custom headers, set the request method, and set the request body. Here is an example of how you can customize the Fetch API with Undici:
The
fetch
function takes two arguments: the URL to fetch and an options object. The options object is an
options object
that you can use to customize the request. The function returns a
Promise
that resolves to a
Response
object.
In the following example, we are sending a POST request to the Ollama API with a JSON payload. Ollama is a cli tool that allows you to run LLM's (Large Language Models) on your local machine. You can download it
here
ollama
run
mistral
This will download the
mistral
model and run it on your local machine.
With a pool, you can reuse connections to the same server, which can improve performance. Here is an example of how you can use a pool with Undici:
import
{
Pool
}
from
'
undici
'
;
const
ollamaPool
=
new
Pool
(
'
http://localhost:11434
'
,
{
connections
:
10
,
}
)
;
/**
* Stream the completion of a prompt using the Ollama API.
*
@
param
{
string
}
prompt
- The prompt to complete.
*
@
link
https://github.com/ollama/ollama/blob/main/docs/api.md
**/
async
function
streamOllamaCompletion
(
prompt
)
{
const
{
statusCode
,
body
}
=
await
ollamaPool
.
request
(
{
path
:
'
/api/generate
'
,
method
:
'
POST
'
,
headers
:
{
'
Content-Type
'
:
'
application/json
'
,
},
body
:
JSON
.
stringify
(
{
prompt
,
model
:
'
mistral
'
}
)
,
}
)
;
// You can read about HTTP status codes here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// 200 means the request was successful.
if
(
statusCode
!==
200
)
{
// consuming the response body is mandatory: https://undici.nodejs.org/#/?id=garbage-collection
await
body
.
dump
()
;
throw
new
Error
(
`
Ollama request failed with status
${
statusCode
}
`
)
;
}
let
partial
=
''
;
const
decoder
=
new
TextDecoder
()
;
for
await
(
const
chunk
of
body
)
{
partial
+=
decoder
.
decode
(
chunk
,
{
stream
:
true
}
)
;
console
.
log
(
partial
)
;
}
console
.
log
(
'
Streaming complete.
'
)
;
}
try
{
await
streamOllamaCompletion
(
'
What is recursion?
'
)
;
}
catch
(
error
)
{
console
.
error
(
'
Error calling Ollama:
'
,
error
)
;
}
finally
{
console
.
log
(
'
Closing Ollama pool.
'
)
;
ollamaPool
.
close
()
;
}
JavaScript
Copy to clipboard
Streaming Responses with Undici
Streams
is a feature in Node.js that allows you to read and write chunks of data.
import
{
Writable
}
from
'
node:stream
'
;
import
{
stream
}
from
'
undici
'
;
async
function
fetchGitHubRepos
()
{
const
url
=
'
https://api.github.com/users/nodejs/repos
'
;
await
stream
(
url
,
{
method
:
'
GET
'
,
headers
:
{
'
User-Agent
'
:
'
undici-stream-example
'
,
Accept
:
'
application/json
'
,
},
},
res
=>
{
let
buffer
=
''
;
return
new
Writable
(
{
write
(
chunk
,
encoding
,
callback
)
{
buffer
+=
chunk
.
toString
()
;
callback
()
;
},
final
(
callback
)
{
try
{
const
json
=
JSON
.
parse
(
buffer
)
;
console
.
log
(
'
Repository Names:
'
,
json
.
map
(
repo
=>
repo
.
name
)
)
;
}
catch
(
error
)
{
console
.
error
(
'
Error parsing JSON:
'
,
error
)
;
}
console
.
log
(
'
Stream processing completed.
'
)
;
console
.
log
(
`
Response status:
${
res
.
statusCode
}
`
)
;
callback
()
;
},
}
)
;
}
)
;
}
fetchGitHubRepos
()
.
catch
(
console
.
error
)
;
JavaScript
Copy to clipboard

---

# WebSocket client with Node.js
> **Fonte original:** [https://nodejs.org/learn/getting-started/websocket](https://nodejs.org/learn/getting-started/websocket)

Native WebSocket Client in Node.js
Introduction
Since
Node.js v21
, the
WebSocket API
has been enhanced using the
Undici
library, introducing a built-in WebSocket client. This simplifies real-time communication for Node.js applications. In
Node.js v22.4.0
release, the WebSocket API was marked as stable, indicating it's ready for production use.
What is a WebSocket
WebSocket
is a standardized communication protocol that enables simultaneous two-way communication over a single TCP connection. It has full-duplex or bi-directional capabilities that distinguishes it from HTTP. WebSocket achieves HTTP compatibility by using the HTTP Upgrade header to transition protocols. It allows servers to push content to clients without initial requests and maintains open connections for continuous message exchange, making it ideal for real-time data transfer with lower overhead than alternatives like HTTP polling. WebSocket communications typically occur over TCP ports 443 (secured) or 80 (unsecured), helping bypass firewall restrictions on non-web connections. The protocol defines its own URI schemes (ws:// and wss://) for unencrypted and encrypted connections respectively and supported by all major browsers.
Native WebSocket Client
Node.js can now act as a WebSocket
client
without relying on external libraries like
ws
or
socket.io
for client connections. This allows Node.js applications to initiate and manage outgoing WebSocket connections directly, streamlining tasks such as connecting to real-time data feeds or interacting with other WebSocket servers. Users can now create a websocket client connection with the standard
new WebSocket()
constructor.
Building on the above, let's add more practical examples to demonstrate the new WebSocket client functionality that demonstrates basic use-cases.
Basic Connection and Message Handling
// Creates a new WebSocket connection to the specified URL.
const
socket
=
new
WebSocket
(
'
ws://localhost:8080
'
)
;
// Executes when the connection is successfully established.
socket
.
addEventListener
(
'
open
'
,
event
=>
{
console
.
log
(
'
WebSocket connection established!
'
)
;
// Sends a message to the WebSocket server.
socket
.
send
(
'
Hello Server!
'
)
;
}
)
;
// Listen for messages and executes when a message is received from the server.
socket
.
addEventListener
(
'
message
'
,
event
=>
{
console
.
log
(
'
Message from server:
'
,
event
.
data
)
;
}
)
;
// Executes when the connection is closed, providing the close code and reason.
socket
.
addEventListener
(
'
close
'
,
event
=>
{
console
.
log
(
'
WebSocket connection closed:
'
,
event
.
code
,
event
.
reason
)
;
}
)
;
// Executes if an error occurs during the WebSocket communication.
socket
.
addEventListener
(
'
error
'
,
error
=>
{
console
.
error
(
'
WebSocket error:
'
,
error
)
;
}
)
;
JavaScript
Copy to clipboard
Sending and Receiving JSON Data
const
socket
=
new
WebSocket
(
'
ws://localhost:8080
'
)
;
socket
.
addEventListener
(
'
open
'
,
()
=>
{
const
data
=
{
type
:
'
message
'
,
content
:
'
Hello from Node.js!
'
}
;
socket
.
send
(
JSON
.
stringify
(
data
))
;
}
)
;
socket
.
addEventListener
(
'
message
'
,
event
=>
{
try
{
const
receivedData
=
JSON
.
parse
(
event
.
data
)
;
console
.
log
(
'
Received JSON:
'
,
receivedData
)
;
}
catch
(
error
)
{
console
.
error
(
'
Error parsing JSON:
'
,
error
)
;
console
.
log
(
'
Received data was:
'
,
event
.
data
)
;
}
}
)
;
JavaScript
Copy to clipboard
The
javascript
code above demonstrates sending and receiving
JSON
data, which is common in WebSocket applications. It uses
JSON.stringify()
to convert JavaScript objects to JSON strings before sending. And converts the received string back to a JavaScript object with
JSON.parse()
. Finally, it includes error handling for JSON parsing.
This offers reduced dependency management and improved compatibility. Developers can avoid installing and maintaining additional WebSocket client libraries. The built-in implementation aligns with modern web standards, ensuring better interoperability. The enhancement focuses on the client-side of WebSocket communication, enabling Node.js to act as a WebSocket client.
Important to Understand
Node.js v22
does not
provide a built-in native WebSocket server implementation. To create a WebSocket server that accepts incoming connections from web browsers or other clients, one still needs to use libraries like
ws
or
socket.io
. This means that while Node.js can now easily
connect
to WebSocket servers, it still requires external tools to
become
a WebSocket server.
In Summary
Node.js v22 empowers applications to seamlessly interact with WebSocket servers as
clients
, but the creation of WebSocket servers within Node.js remains dependent on established libraries. This distinction is crucial for developers to understand when implementing real-time communication in their Node.js projects.

---

# Node.js, the difference between development and production
> **Fonte original:** [https://nodejs.org/learn/getting-started/nodejs-the-difference-between-development-and-production](https://nodejs.org/learn/getting-started/nodejs-the-difference-between-development-and-production)

Node.js, the difference between development and production
There is no difference between development and production in Node.js
, i.e., there are no specific settings you need to apply to make Node.js work in a production configuration.
However, a few libraries in the npm registry recognize using the
NODE_ENV
variable and default it to a
development
setting.
Always run your Node.js with the
NODE_ENV=production
set.
A popular way of configuring your application is by using the
twelve factor methodology
.
Why is NODE_ENV considered an antipattern?
An environment is a digital platform or a system where engineers can build, test,
deploy
, and manage software products. Conventionally, there are four stages or types of environments where our application is run:
Development
Testing
Staging
Production
The fundamental problem of
NODE_ENV
stems from developers combining optimizations and software behavior with the environment their software is running on. The result is code like the following:
if
(
process
.
env
.
NODE_ENV
===
'
development
'
)
{
// ...
}
if
(
process
.
env
.
NODE_ENV
===
'
production
'
)
{
// ...
}
if
([
'
production
'
,
'
staging
'
]
.
includes
(
process
.
env
.
NODE_ENV
))
{
// ...
}
JavaScript
Copy to clipboard
While this might look harmless, it makes the production and staging environments different, thus making reliable testing impossible. For example a test and thus a functionality of your product could pass when
NODE_ENV
is set to
development
but fail when setting
NODE_ENV
to
production
.
Therefore, setting
NODE_ENV
to anything but
production
is considered an
antipattern
.

---

# Profiling Node.js Applications
> **Fonte original:** [https://nodejs.org/learn/getting-started/profiling](https://nodejs.org/learn/getting-started/profiling)

Profiling Node.js Applications
Profiling a Node.js application involves measuring its performance by analyzing
the CPU, memory, and other runtime metrics while the application is running.
This helps in identifying bottlenecks, high CPU usage, memory leaks, or slow
function calls that may impact the application's efficiency, responsiveness
and scalability.
There are many third party tools available for profiling Node.js applications
but, in many cases, the easiest option is to use the Node.js built-in profiler.
The built-in profiler uses the
profiler inside V8
which samples the stack at
regular intervals during program execution. It records the results of these
samples, along with important optimization events such as jit compiles, as a
series of ticks:
code-creation,LazyCompile,0,0x2d5000a337a0,396,"bp
native
array.js:1153:16",0x289f644df68,~
code-creation,LazyCompile,0,0x2d5000a33940,716,"hasOwnProperty
native
v8natives.js:198:30",0x289f64438d0,~
code-creation,LazyCompile,0,0x2d5000a33c20,284,"ToName
native
runtime.js:549:16",0x289f643bb28,~
code-creation,Stub,2,0x2d5000a33d40,182,"DoubleToIStub"
code-creation,Stub,2,0x2d5000a33e00,507,"NumberToStringStub"
In the past, you needed the V8 source code to be able to interpret the ticks.
Luckily, tools have been introduced since Node.js 4.4.0 that facilitate the
consumption of this information without separately building V8 from source.
Let's see how the built-in profiler can help provide insight into application
performance.
To illustrate the use of the tick profiler, we will work with a simple Express
application. Our application will have two handlers, one for adding new users to
our system:
app
.
get
(
'
/newUser
'
,
(
req
,
res
)
=>
{
let
username
=
req
.
query
.
username
||
''
;
const
password
=
req
.
query
.
password
||
''
;
username
=
username
.
replace
(
/[
^
a-zA-Z0-9
]/
g
,
''
)
;
if
(
!
username
||
!
password
||
users
[
username
])
{
return
res
.
sendStatus
(
400
)
;
}
const
salt
=
crypto
.
randomBytes
(
128
)
.
toString
(
'
base64
'
)
;
const
hash
=
crypto
.
pbkdf2Sync
(
password
,
salt
,
10000
,
512
,
'
sha512
'
)
;
users
[
username
]
=
{
salt
,
hash
}
;
res
.
sendStatus
(
200
)
;
}
)
;
JavaScript
Copy to clipboard
and another for validating user authentication attempts:
app
.
get
(
'
/auth
'
,
(
req
,
res
)
=>
{
let
username
=
req
.
query
.
username
||
''
;
const
password
=
req
.
query
.
password
||
''
;
username
=
username
.
replace
(
/[
^
a-zA-Z0-9
]/
g
,
''
)
;
if
(
!
username
||
!
password
||
!
users
[
username
])
{
return
res
.
sendStatus
(
400
)
;
}
const
{
salt
,
hash
}
=
users
[
username
]
;
const
encryptHash
=
crypto
.
pbkdf2Sync
(
password
,
salt
,
10000
,
512
,
'
sha512
'
)
;
if
(
crypto
.
timingSafeEqual
(
hash
,
encryptHash
))
{
res
.
sendStatus
(
200
)
;
}
else
{
res
.
sendStatus
(
401
)
;
}
}
)
;
JavaScript
Copy to clipboard
Please note that these are NOT recommended handlers for authenticating users in
your Node.js applications and are used purely for illustration purposes. You
should not be trying to design your own cryptographic authentication mechanisms
in general. It is much better to use existing, proven authentication solutions.
Now assume that we've deployed our application and users are complaining about
high latency on requests. We can easily run the app with the built-in profiler:
NODE_ENV=production
node
--prof
app.js
and put some load on the server using
ab
(ApacheBench):
curl
-X
GET
"http://localhost:8080/newUser?username=matt&password=password"
ab
-k
-c
20
-n
250
"http://localhost:8080/auth?username=matt&password=password"
and get an ab output of:
Concurrency
Level:
20
Time
taken
for
tests:
46.932
seconds
Complete
requests:
250
Failed
requests:
0
Keep-Alive
requests:
250
Total
transferred:
50250
bytes
HTML
transferred:
500
bytes
Requests
per
second:
5.33
[#/sec]
(mean)
Time
per
request:
3754.556
[ms]
(mean)
Time
per
request:
187.728
[ms]
(mean,
across
all
concurrent
requests)
Transfer
rate:
1.05
[Kbytes/sec]
received
...
Percentage
of
the
requests
served
within
a
certain
time
(ms)
50%
3755
66%
3804
75%
3818
80%
3825
90%
3845
95%
3858
98%
3874
99%
3875
100%
4225
(longest
request)
From this output, we see that we're only managing to serve about 5 requests per
second and that the average request takes just under 4 seconds round trip. In a
real-world example, we could be doing lots of work in many functions on behalf
of a user request but even in our simple example, time could be lost compiling
regular expressions, generating random salts, generating unique hashes from user
passwords, or inside the Express framework itself.
Since we ran our application using the
--prof
option, a tick file was generated
in the same directory as your local run of the application. It should have the
form
isolate-0xnnnnnnnnnnnn-v8.log
(where
n
is a digit).
In order to make sense of this file, we need to use the tick processor bundled
with the Node.js binary. To run the processor, use the
--prof-process
flag:
node
--prof-process
isolate-0xnnnnnnnnnnnn-v8.log
>
processed.txt
Opening processed.txt in your favorite text editor will give you a few different
types of information. The file is broken up into sections which are again broken
up by language. First, we look at the summary section and see:
[Summary]:
ticks
total
nonlib
name
79
0.2%
0.2%
JavaScript
36703
97.2%
99.2%
C++
7
0.0%
0.0%
GC
767
2.0%
Shared
libraries
215
0.6%
Unaccounted
This tells us that 97% of all samples gathered occurred in C++ code and that
when viewing other sections of the processed output we should pay most attention
to work being done in C++ (as opposed to JavaScript). With this in mind, we next
find the [C++] section which contains information about which C++ functions are
taking the most CPU time and see:
[C++]:
ticks
total
nonlib
name
19557
51.8%
52.9%
node::crypto::PBKDF2(v8::FunctionCallbackInfo<v8::Value>
const&)
4510
11.9%
12.2%
_sha1_block_data_order
3165
8.4%
8.6%
_malloc_zone_malloc
We see that the top 3 entries account for 72.1% of CPU time taken by the
program. From this output, we immediately see that at least 51.8% of CPU time is
taken up by a function called PBKDF2 which corresponds to our hash generation
from a user's password. However, it may not be immediately obvious how the lower
two entries factor into our application (or if it is we will pretend otherwise
for the sake of example). To better understand the relationship between these
functions, we will next look at the [Bottom up (heavy) profile] section which
provides information about the primary callers of each function. Examining this
section, we find:
ticks
parent
name
19557
51.8%
node::crypto::PBKDF2(v8::FunctionCallbackInfo<v8::Value>
const&)
19557
100.0%
v8::internal::Builtins::~Builtins()
19557
100.0%
LazyCompile:
~pbkdf2
crypto.js:557:16
4510
11.9%
_sha1_block_data_order
4510
100.0%
LazyCompile:
*pbkdf2
crypto.js:557:16
4510
100.0%
LazyCompile:
*exports.pbkdf2Sync
crypto.js:552:30
3165
8.4%
_malloc_zone_malloc
3161
99.9%
LazyCompile:
*pbkdf2
crypto.js:557:16
3161
100.0%
LazyCompile:
*exports.pbkdf2Sync
crypto.js:552:30
Parsing this section takes a little more work than the raw tick counts above.
Within each of the "call stacks" above, the percentage in the parent column
tells you the percentage of samples for which the function in the row above was
called by the function in the current row. For example, in the middle "call
stack" above for _sha1_block_data_order, we see that
_sha1_block_data_order
occurred
in 11.9% of samples, which we knew from the raw counts above. However, here, we
can also tell that it was always called by the pbkdf2 function inside the
Node.js crypto module. We see that similarly,
_malloc_zone_malloc
was called
almost exclusively by the same pbkdf2 function. Thus, using the information in
this view, we can tell that our hash computation from the user's password
accounts not only for the 51.8% from above but also for all CPU time in the top
3 most sampled functions since the calls to
_sha1_block_data_order
and
_malloc_zone_malloc
were made on behalf of the pbkdf2 function.
At this point, it is very clear that the password-based hash generation should
be the target of our optimization. Thankfully, you've fully internalized the
benefits of asynchronous programming
and you realize that the work to
generate a hash from the user's password is being done in a synchronous way and
thus tying down the event loop. This prevents us from working on other incoming
requests while computing a hash.
To remedy this issue, you make a small modification to the above handlers to use
the asynchronous version of the pbkdf2 function:
app
.
get
(
'
/auth
'
,
(
req
,
res
)
=>
{
let
username
=
req
.
query
.
username
||
''
;
const
password
=
req
.
query
.
password
||
''
;
username
=
username
.
replace
(
/[
^
a-zA-Z0-9
]/
g
,
''
)
;
if
(
!
username
||
!
password
||
!
users
[
username
])
{
return
res
.
sendStatus
(
400
)
;
}
crypto
.
pbkdf2
(
password
,
users
[
username
]
.
salt
,
10000
,
512
,
'
sha512
'
,
(
err
,
hash
)
=>
{
if
(
users
[
username
]
.
hash
.
toString
()
===
hash
.
toString
())
{
res
.
sendStatus
(
200
)
;
}
else
{
res
.
sendStatus
(
401
)
;
}
}
)
;
}
)
;
JavaScript
Copy to clipboard
A new run of the ab benchmark above with the asynchronous version of your app
yields:
Concurrency
Level:
20
Time
taken
for
tests:
12.846
seconds
Complete
requests:
250
Failed
requests:
0
Keep-Alive
requests:
250
Total
transferred:
50250
bytes
HTML
transferred:
500
bytes
Requests
per
second:
19.46
[#/sec]
(mean)
Time
per
request:
1027.689
[ms]
(mean)
Time
per
request:
51.384
[ms]
(mean,
across
all
concurrent
requests)
Transfer
rate:
3.82
[Kbytes/sec]
received
...
Percentage
of
the
requests
served
within
a
certain
time
(ms)
50%
1018
66%
1035
75%
1041
80%
1043
90%
1049
95%
1063
98%
1070
99%
1071
100%
1079
(longest
request)
Yay! Your app is now serving about 20 requests per second, roughly 4 times more
than it was with the synchronous hash generation. Additionally, the average
latency is down from the 4 seconds before to just over 1 second.
Hopefully, through the performance investigation of this (admittedly contrived)
example, you've seen how the V8 tick processor can help you gain a better
understanding of the performance of your Node.js applications.
You may also find
how to create a flame graph
helpful.

---

# Node.js with WebAssembly
> **Fonte original:** [https://nodejs.org/learn/getting-started/nodejs-with-webassembly](https://nodejs.org/learn/getting-started/nodejs-with-webassembly)

Node.js with WebAssembly
WebAssembly
is a high-performance assembly-like language that can be compiled from various languages, including C/C++, Rust, and AssemblyScript. Currently, it is supported by Chrome, Firefox, Safari, Edge, and Node.js!
The WebAssembly specification details two file formats, a binary format called a WebAssembly Module with a
.wasm
extension and corresponding text representation called WebAssembly Text format with a
.wat
extension.
Key Concepts
Module - A compiled WebAssembly binary, i.e. a
.wasm
file.
Memory - A resizable ArrayBuffer.
Table - A resizable typed array of references not stored in Memory.
Instance - An instantiation of a Module with its Memory, Table, and variables.
In order to use WebAssembly, you need a
.wasm
binary file and a set of APIs to communicate with WebAssembly. Node.js provides the necessary APIs via the global
WebAssembly
object.
console
.
log
(
WebAssembly
)
;
/*
Object [WebAssembly] {
compile: [Function: compile],
validate: [Function: validate],
instantiate: [Function: instantiate]
}
*/
JavaScript
Copy to clipboard
Generating WebAssembly Modules
There are multiple methods available to generate WebAssembly binary files including:
Writing WebAssembly (
.wat
) by hand and converting to binary format using tools such as
wabt
Using
emscripten
with a C/C++ application
Using
wasm-pack
with a Rust application
Using
AssemblyScript
if you prefer a TypeScript-like experience
Some of these tools generate not only the binary file, but the JavaScript "glue" code and corresponding HTML files to run in the browser.
How to use it
Once you have a WebAssembly module, you can use the Node.js
WebAssembly
object to instantiate it.
CJS
ESM
// Assume add.wasm file exists that contains a single function adding 2 provided arguments
const
fs
=
require
(
'
node:fs
'
)
;
// Use the readFileSync function to read the contents of the "add.wasm" file
const
wasmBuffer
=
fs
.
readFileSync
(
'
/path/to/add.wasm
'
)
;
// Use the WebAssembly.instantiate method to instantiate the WebAssembly module
WebAssembly
.
instantiate
(
wasmBuffer
)
.
then
(
wasmModule
=>
{
// Exported function lives under instance.exports object
const
{
add
}
=
wasmModule
.
instance
.
exports
;
const
sum
=
add
(
5
,
6
)
;
console
.
log
(
sum
)
;
// Outputs: 11
}
)
;
JavaScript
Copy to clipboard
Interacting with the OS
WebAssembly modules cannot directly access OS functionality on its own. A third-party tool
Wasmtime
can be used to access this functionality.
Wasmtime
utilizes the
WASI
API to access the OS functionality.
Resources
General WebAssembly Information
MDN Docs
Write WebAssembly by hand

---

# Security Best Practices
> **Fonte original:** [https://nodejs.org/learn/getting-started/security-best-practices](https://nodejs.org/learn/getting-started/security-best-practices)

Security Best Practices
Intent
This document intends to extend the current
threat model
and provide extensive
guidelines on how to secure a Node.js application.
Document Content
Best practices: A simplified condensed way to see the best practices. We can
use
this issue
or
this guideline
as the starting point. It is important to note that this document is specific
to Node.js, if you are looking for something broad, consider
OSSF Best Practices
.
Attacks explained: illustrate and document in plain English with some code
examples (if possible) of the attacks that we are mentioning in the threat model.
Third-Party Libraries: define threats
(typosquatting attacks, malicious packages...) and best practices regarding
node modules dependencies, etc...
Threat List
The Node.js
threat model
defines what is or is not considered a
vulnerability in Node.js itself
. Some of the topics below are not
vulnerabilities in Node.js core according to that model, but they are still
important
application-level
threats that you should account for when building
and operating Node.js software.
Denial of Service of HTTP server (CWE-400)
This is an attack where the application becomes unavailable for the purpose it
was designed due to the way it processes incoming HTTP requests. These requests
need not be deliberately crafted by a malicious actor: a misconfigured or buggy
client can also send a pattern of requests to the server that result in a denial
of service.
HTTP requests are received by the Node.js HTTP server and handed over to the
application code via the registered request handler. The server does not parse
the content of the request body. Therefore any DoS caused by the contents of the
body after they are handed over to the request handler is not a vulnerability in
Node.js itself, since it's the responsibility of the application code to handle
it correctly.
Ensure that the WebServer handles socket errors properly, for instance, when a
server is created without an error handler, it will be vulnerable to DoS
CJS
ESM
const
net
=
require
(
'
node:net
'
)
;
const
server
=
net
.
createServer
(
function
(
socket
)
{
// socket.on('error', console.error) // this prevents the server to crash
socket
.
write
(
'
Echo server
\r\n
'
)
;
socket
.
pipe
(
socket
)
;
}
)
;
server
.
listen
(
5000
,
'
0.0.0.0
'
)
;
JavaScript
Copy to clipboard
If a
bad request
is performed the server could crash.
An example of a DoS attack that is not caused by the request's contents is
Slowloris
. In this attack, HTTP requests are sent slowly and fragmented,
one fragment at a time. Until the full request is delivered, the server will
keep resources dedicated to the ongoing request. If enough of these requests
are sent at the same time, the amount of concurrent connections will soon reach
its maximum resulting in a denial of service. This is how the attack depends
not on the request's contents but on the timing and pattern of the requests
being sent to the server.
Mitigations
Use a reverse proxy to receive and forward requests to the Node.js application.
Reverse proxies can provide caching, load balancing, IP blacklisting, etc. which
reduce the probability of a DoS attack being effective.
Correctly configure the server timeouts, so that connections that are idle or
where requests are arriving too slowly can be dropped. See the different timeouts
in
http.Server
, particularly
headersTimeout
,
requestTimeout
,
timeout
,
and
keepAliveTimeout
.
Limit the number of open sockets per host and in total. See the
http docs
,
particularly
agent.maxSockets
,
agent.maxTotalSockets
,
agent.maxFreeSockets
and
server.maxRequestsPerSocket
.
DNS Rebinding (CWE-346)
This is an attack that can target Node.js applications being run with the
debugging inspector enabled using the
--inspect switch
.
Since websites opened in a web browser can make WebSocket and HTTP requests,
they can target the debugging inspector running locally.
This is usually prevented by the
same-origin policy
implemented by modern
browsers, which forbids scripts from reaching resources from different origins
(meaning a malicious website cannot read data requested from a local IP address).
However, through DNS rebinding, an attacker can temporarily control the origin
for their requests so that they seem to originate from a local IP address.
This is done by controlling both a website and the DNS server used to resolve
its IP address. See
DNS Rebinding wiki
for more details.
Mitigations
Disable inspector on
SIGUSR1
signal by attaching a
process.on(‘SIGUSR1’, …)
listener to it.
Do not run the inspector protocol in production.
Exposure of Sensitive Information to an Unauthorized Actor (CWE-552)
All the files and folders included in the current directory are pushed to the
npm registry during the package publication.
There are some mechanisms to control this behavior by defining a blocklist with
.npmignore
and
.gitignore
or by defining an allowlist in the
package.json
Mitigations
Using
npm publish --dry-run
to list all the files to publish. Ensure to review the
content before publishing the package.
It’s also important to create and maintain ignore files such as
.gitignore
and
.npmignore
.
Throughout these files, you can specify which files/folders should not be published.
The
files property
in
package.json
allows the inverse operation
-- allowed list.
In case of an exposure, make sure to
unpublish the package
.
HTTP Request Smuggling (CWE-444)
This is an attack that involves two HTTP servers (usually a proxy and a Node.js
application). A client sends an HTTP request that goes first through the
front-end server (the proxy) and then is redirected to the back-end server (the application).
When the front-end and back-end interpret ambiguous HTTP requests differently,
there is potential for an attacker to send a malicious message that won't be
seen by the front-end but will be seen by the back-end, effectively "smuggling"
it past the proxy server.
See the
CWE-444
for a more detailed description and examples.
Since this attack depends on Node.js interpreting HTTP requests
differently from an (arbitrary) HTTP server, a successful attack can be due to
a vulnerability in Node.js, the front-end server, or both.
If the way the request is interpreted by Node.js is consistent with the
HTTP specification (see
RFC7230
), then it is not considered a vulnerability
in Node.js.
Mitigations
Do not use the
insecureHTTPParser
option when creating a HTTP Server.
Configure the front-end server to normalize ambiguous requests.
Continuously monitor for new HTTP request smuggling vulnerabilities in both
Node.js and the front-end server of choice.
Use HTTP/2 end to end and disable HTTP downgrading if possible.
Information Exposure through Timing Attacks (CWE-208)
This is an attack that allows the attacker to learn potentially sensitive information by, for example, measuring how long
it takes for the application to respond to a request. This attack is not specific to Node.js and can target almost all runtimes.
The attack is possible whenever the application uses a secret in a timing-sensitive operation (e.g., branch). Consider handling authentication in a typical application. Here, a basic authentication method includes email and password as credentials.
User information is retrieved from the input the user has supplied from ideally a
DBMS.
Upon retrieving user information, the password is compared with the user
information retrieved from the database. Using the built-in string comparison takes a longer
time for the same-length values.
This comparison, when run for an acceptable amount unwillingly increases the
response time of the request. By comparing the request response times, an
attacker can guess the length and the value of the password in a large quantity
of requests.
Mitigations
The crypto API exposes a function
timingSafeEqual
to compare actual and
expected sensitive values using a constant-time algorithm.
For password comparison, you can use the
scrypt
available also on the
native crypto module.
More generally, avoid using secrets in variable-time operations. This includes branching on secrets and, when the attacker could be co-located on the same infrastructure (e.g., same cloud machine), using a secret as an index into memory. Writing constant-time code in JavaScript is hard (partly because of the JIT). For crypto applications, use the built-in crypto APIs or WebAssembly (for algorithms not implemented in natively).
Malicious Third-Party Modules (CWE-1357)
According to the Node.js
threat model
, scenarios that require a malicious
third-party module are
not
considered vulnerabilities in Node.js core,
because Node.js treats the code it is asked to run (including dependencies)
as trusted. However, malicious or compromised dependencies remain one of the
most critical
application-level
risks for Node.js users and should be
treated as such.
Currently, in Node.js, any package can access powerful resources such as
network access.
Furthermore, because they also have access to the file system, they can send
any data anywhere.
All code running into a node process has the ability to load and run additional
arbitrary code by using
eval()
(or its equivalents).
All code with file system write access may achieve the same thing by writing to
new or existing files that are loaded.
Examples
An attacker compromises the maintainer account of a popular logging library
and ships a new minor version that exfiltrates environment variables
(for example, database passwords or access tokens) to a remote server when
the logger is initialized.
A typosquatting package with a name similar to a well-known framework is
published to the npm registry. When installed, it runs a postinstall script
that sends SSH keys from the developer's machine to an attacker-controlled
endpoint.
Be sure to pin dependency versions and run automatic checks for vulnerabilities
using common workflows or npm scripts.
Before installing a package make sure that this package is maintained and
includes all the content you expected.
Be careful, the GitHub source code is not always the same as the published one,
validate it in the
node_modules
.
Supply chain attacks
A supply chain attack on a Node.js application happens when one of its
dependencies (either direct or transitive) are compromised.
This can happen either due to the application being too lax on the specification
of the dependencies (allowing for unwanted updates) and/or common typos in the
specification (vulnerable to
typosquatting
).
An attacker who takes control of an upstream package can publish a new version
with malicious code in it. If a Node.js application depends on that package
without being strict on which version is safe to use, the package can be
automatically updated to the latest malicious version, compromising the application.
Dependencies specified in the
package.json
file can have an exact version number
or a range. However, when pinning a dependency to an exact version, its
transitive dependencies are not themselves pinned.
This still leaves the application vulnerable to unwanted/unexpected updates.
Possible attack vectors:
Typosquatting attacks
Lockfile poisoning
Compromised maintainers
Malicious Packages
Dependency Confusions
Mitigations
Prevent npm from executing arbitrary scripts with
--ignore-scripts
Additionally, you can disable it globally with
npm config set ignore-scripts true
Pin dependency versions to a specific immutable version,
not a version that is a range or from a mutable source.
Use lockfiles, which pin every dependency (direct and transitive).
Use
Mitigations for lockfile poisoning
.
Automate checks for new vulnerabilities using CI, with tools like
npm-audit
.
Tools such as
Socket
can be used to analyze packages with static analysis
to find risky behaviors such as network or filesystem access.
Use
npm ci
instead of
npm install
.
This enforces the lockfile so that inconsistencies between it and the
package.json
file causes an error (instead of silently ignoring the lockfile
in favor of
package.json
).
Carefully check the
package.json
file for errors/typos in the names of the
dependencies.
Set a dependency cooldown with
--min-release-age
(npm v11.10.0+) to avoid installing recently published packages.
The value is in days (e.g.,
1
means packages must be at least one day
old). Most compromised packages are detected and removed within hours.
A cooldown of even one day eliminates exposure to the majority of
short-lived supply chain attacks:
min-release-age
=
1
To apply security fixes without waiting for the cooldown, override it
per-command:
npm install package-name --min-release-age=0
. Use
npm audit
to identify packages with known vulnerabilities that need
immediate updates.
Memory Access Violation (CWE-284)
Memory-based or heap-based attacks depend on a combination of memory management
errors and an exploitable memory allocator.
Like all runtimes, Node.js is vulnerable to these attacks if your projects run
on a shared machine.
Using a secure heap is useful for preventing sensitive information from leaking
due to pointer overruns and underruns.
Unfortunately, a secure heap is not available on Windows.
More information can be found on Node.js
secure-heap documentation
.
Mitigations
Use
--secure-heap=n
depending on your application where
n
is the allocated
maximum byte size.
Do not run your production app on a shared machine.
Monkey Patching (CWE-349)
Monkey patching refers to the modification of properties in runtime aiming to
change the existing behavior. Example:
Array
.
prototype
.
push
=
function
(
item
)
{
// overriding the global [].push
}
;
JavaScript
Copy to clipboard
Mitigations
The
--frozen-intrinsics
flag enables experimental
¹
frozen intrinsics, which means all the built-in JavaScript objects and functions
are recursively frozen.
Therefore, the following snippet
will not
override the default behavior of
Array.prototype.push
Array
.
prototype
.
push
=
function
(
item
)
{
// overriding the global [].push
}
;
// Uncaught:
// TypeError <Object <Object <[Object: null prototype] {}>>>:
// Cannot assign to read only property 'push' of object ''
JavaScript
Copy to clipboard
However, it’s important to mention you can still define new globals and replace
existing globals using
globalThis
>
globalThis.foo = 3
;
foo
;
//
you
can
still
define
new
globals
3
>
globalThis.Array = 4
;
Array
;
//
However,
you
can
also
replace
existing
globals
4
Shell Session
Copy to clipboard
Therefore,
Object.freeze(globalThis)
can be used to guarantee no globals will
be replaced.
Prototype Pollution Attacks (CWE-1321)
Per the Node.js
threat model
, prototype pollution that relies on an
attacker controlling user input is
not
considered a vulnerability in
Node.js core, because Node.js trusts the inputs provided by application code.
Nonetheless, prototype pollution is a serious class of vulnerabilities for
Node.js applications and third-party libraries, and you should implement
defenses at the application and dependency level.
Prototype pollution refers to the possibility of modifying or injecting properties
into Javascript language items by abusing the usage of __proto_
,
_constructor
,
prototype
, and other properties inherited from built-in
prototypes.
const
a
=
{
a
:
1
,
b
:
2
}
;
const
data
=
JSON
.
parse
(
'
{"__proto__": { "polluted": true}}
'
)
;
const
c
=
Object
.
assign
(
{},
a
,
data
)
;
console
.
log
(
c
.
polluted
)
;
// true
// Potential DoS
const
data2
=
JSON
.
parse
(
'
{"__proto__": null}
'
)
;
const
d
=
Object
.
assign
(
a
,
data2
)
;
d
.
hasOwnProperty
(
'
b
'
)
;
// Uncaught TypeError: d.hasOwnProperty is not a function
JavaScript
Copy to clipboard
This is a potential vulnerability inherited from the JavaScript
language.
Examples
:
CVE-2022-21824
(Node.js)
CVE-2018-3721
(3rd Party library: Lodash)
Additional scenarios include:
A web API merges untrusted JSON request bodies into a shared configuration
object without validation. By sending a payload with a
__proto__
property,
an attacker adds unexpected properties to many objects in the process,
leading to logic bugs or denial of service.
A template rendering service accepts user-controlled options and passes them
directly into a deep merge utility. By polluting
Object.prototype
, an
attacker causes all future templates to behave unexpectedly, potentially
bypassing security checks that rely on object property presence.
Mitigations
Avoid
insecure recursive merges
, see
CVE-2018-16487
.
Implement JSON Schema validations for external/untrusted requests.
Create Objects without prototype by using
Object.create(null)
.
Freezing the prototype:
Object.freeze(MyObject.prototype)
.
Disable the
Object.prototype.__proto__
property using
--disable-proto
flag.
Check that the property exists directly on the object, not from the prototype
using
Object.hasOwn(obj, keyFromObj)
.
Avoid using methods from
Object.prototype
.
Uncontrolled Search Path Element (CWE-427)
The Node.js
threat model
considers the file system in the environment
accessible to Node.js as trusted. As a result, issues that rely solely on
controlling files in those locations are
not
considered vulnerabilities in
Node.js core. They are, however, relevant to the security of your overall
deployment and supply chain, so you should harden your environment and use
the mechanisms below to reduce risk.
Node.js loads modules following the
Module Resolution Algorithm
.
Therefore, it assumes the directory in which a module is requested
(require) is trusted.
By that, it means the following application behavior is expected.
Assuming the following directory structure:
app/
server.js
auth.js
auth
If server.js uses
require('./auth')
it will follow the module resolution
algorithm and load
auth
instead of
auth.js
.
Node.js Permission Model
Node.js provides a
permission model
that can be used to restrict what a given process is allowed to do at runtime.
This model complements the Node.js
threat model
.
When enabled (for example, using the
--permission
flag), the
permission model lets you selectively allow or deny access to sensitive
capabilities such as:
File system reads and writes.
Network access (inbound and outbound).
Child process creation.
Use of native addons and other powerful APIs.
This can help contain the impact of malicious or compromised dependencies,
untrusted configuration, or unexpected behavior in your own code, since even
trusted code will be prevented from performing actions outside the permissions
you have explicitly granted.
Refer to the
Node.js permissions documentation
for up-to-date flags and
options.
Experimental Features in Production
The use of experimental features in production isn't recommended.
Experimental features can suffer breaking changes if needed, and their
functionality isn't securely stable. Although, feedback is highly appreciated.
OpenSSF Tools
The
OpenSSF
is leading several initiatives that can be very useful, especially if you plan to publish an npm package. These initiatives include:
OpenSSF Scorecard
Scorecard evaluates open source projects using a series of automated security risk checks. You can use it to proactively assess vulnerabilities and dependencies in your code base and make informed decisions about accepting vulnerabilities.
OpenSSF Best Practices Badge Program
Projects can voluntarily self-certify by describing how they comply with each best practice. This will generate a badge that can be added to the project.
You can also collaborate with other projects and security experts through the
OpenJS Security Collaboration Space
.

---

# Introduction to Userland Migrations
> **Fonte original:** [https://nodejs.org/learn/getting-started/userland-migrations](https://nodejs.org/learn/getting-started/userland-migrations)

Userland Migrations
Node.js offers migrations for "userland" code (anything outside the node executable) to help adopt new features and handle breaking changes. These are built in collaboration with
Codemod
, a platform focused on making it easy to build, share, and run codemods.
Official migrations are published under the
@nodejs
scope within the
Codemod registry
. These have been reviewed and/or authored by Node.js members.
Goal
The Node.js Userland Migrations team seeks to help developers migrate their codebases to the latest Node.js versions, making it easier to handle deprecations, new features, and breaking changes.
How to use a codemod
To use a codemod, you can run the following command in your terminal:
npx
codemod
<
codemod-nam
e
>
Replace
<codemod-name>
with the name of the codemod you want to run. For example, if you want to run the
@nodejs/import-assertions-to-attributes
codemod on your project, you would run:
npx
codemod
@nodejs/import-assertions-to-attributes
Good Practices
Run migrations in a separate branch
: If you are using a version control system like Git, it is a good practice to run migrations in a separate branch. This allows you to review the changes before merging them into your main branch.
Review changes
: After running a migration, review the changes made to your codebase. Ensure that the migration has not introduced any unintended side effects or issues.
Test your code
: After running a migration, it is important to test your code to ensure that everything is working as expected. Run your test suite and check for any errors or failures
Format and or lint your code
: After running a migration, it is a good practice to format and lint your code. This ensures that your code follows the project's coding standards and is easier to read and maintain.
Understanding Codemods Registry
The
Codemod registry
provides a list of available codemods for Node.js. Some codemods may not be included in the following resources but are still available because they are not related to a specific migration to a Node.js version. Since we only list codemods for End-Of-Life (EOL) deprecations, you may need to explore the registry for other codemods that could be useful for your migrations.
Please note that if you are logged into the Codemod platform, you can like these posts. This helps us to see what users find valuable.
Feedback
If you have any feedback or suggestions for improvements, please open a discussion on the
Node.js Userland Migrations repository
.
Follow the Userland Migrations Progression
You can follow the progress of userland migrations on our
GitHub project board
.
This board tracks:
Codemod kind (deprecation, breaking change, ecosystem)
Node.js version
Status (backlog, todo, in progress, done, not planned)
If you want to contribute, please check the "todo" column
Migrations guides
You can find all migration guides on the
migration guides section
.
Please also note that migration guides for major-major releases only contain end-of-life
deprecations
and breaking changes.

---

# Run Node.js scripts from the command line
> **Fonte original:** [https://nodejs.org/learn/command-line/run-nodejs-scripts-from-the-command-line](https://nodejs.org/learn/command-line/run-nodejs-scripts-from-the-command-line)

Run Node.js scripts from the command line
The usual way to run a Node.js program is to run the globally available
node
command (once you install Node.js) and pass the name of the file you want to execute.
If your main Node.js application file is
app.js
, you can call it by typing:
node
app.js
Above, you are explicitly telling the shell to run your script with
node
. You can also embed this information into your JavaScript file with a
"shebang"
line. The "shebang" is the first line in the file, and tells the OS which interpreter to use for running the script. Below is the first line of JavaScript:
#!/usr/bin/node
Above, we are explicitly giving the absolute path of interpreter. Not all operating systems have
node
in the bin folder, but all should have
env
. You can tell the OS to run
env
with node as parameter:
#!/usr/bin/env node
// your javascript code
JavaScript
Copy to clipboard
To use a shebang, your file should have executable permission. You can give
app.js
the executable permission by running:
chmod
u+x
app.js
While running the command, make sure you are in the same directory which contains the
app.js
file.
Pass string as argument to
node
instead of file path
To execute a string as argument you can use
-e
,
--eval "script"
. Evaluate the following argument as JavaScript. The modules which are predefined in the REPL can also be used in script.
On Windows, using cmd.exe a single quote will not work correctly because it only recognizes double
"
for quoting. In Powershell or Git bash, both
'
and
"
are usable.
node
-e
"
console.log(123)
"
Restart the application automatically
As of Node.js v16, there is a built-in option to automatically restart the application when a file changes. This is useful for development purposes.
To use this feature, you need to pass the
--watch
flag to Node.js.
node
--watch
app.js
So when you change the file, the application will restart automatically.
Read the
--watch
flag documentation
.
Run a task with Node.js
Node.js provides a built-in task runner that allows you to execute specific commands defined in your
package.json
file. This can be particularly useful for automating repetitive tasks such as running tests, building your project, or linting your code.
Using the
--run
flag
The
--run
flag allows you to run a specified command from the
scripts
section of your
package.json
file. For example, if you have the following
package.json
:
{
"
type
"
:
"
module
"
,
"
scripts
"
:
{
"
start
"
:
"
node app.js
"
,
"
test
"
:
"
node --test
"
}
}
JSON
Copy to clipboard
You can run the
test
script using the
--run
flag:
node
--run
test
Passing arguments to the command
You can use the syntax
-- --another-argument
to pass arguments to the underlying script. For example, if you want to pass a
--port
argument to the
start
script:
node
--run
start
--
--port
8080
This will run the
start
script and append
--port 8080
to the command execution, making it equivalent to running
node app.js --port 8080
.
Note: Arguments passed after
--
are forwarded to the script and are not interpreted as Node.js CLI flags. For example,
--watch
would not behave like
node --watch app.js
when passed this way.
Environment variables
The
--run
flag sets specific environment variables that can be useful for your scripts:
NODE_RUN_SCRIPT_NAME
: The name of the script being run.
NODE_RUN_PACKAGE_JSON_PATH
: The path to the
package.json
file being processed.
Intentional limitations
The Node.js task runner is intentionally more limited compared to other task runners like
npm run
or
yarn run
. It focuses on performance and simplicity, omitting features like running
pre
or
post
scripts. This makes it suitable for straightforward tasks but may not cover all use cases.

---

# How to use the Node.js REPL
> **Fonte original:** [https://nodejs.org/learn/command-line/how-to-use-the-nodejs-repl](https://nodejs.org/learn/command-line/how-to-use-the-nodejs-repl)

How to use the Node.js REPL
What is the Node.js REPL?
Node.js comes with a built-in REPL (Read-Eval-Print Loop) environment that allows you to execute JavaScript code interactively. The REPL is accessible through the terminal and is a great way to test out small pieces of code.
How to use the Node.js REPL
The
node
command is the one we use to run our Node.js scripts:
node
script.js
If we run the
node
command without any script to execute or without any arguments, we start a REPL session:
node
Note:
REPL
stands for Read Evaluate Print Loop, and it is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution. The REPL session provides a convenient way to quickly test simple JavaScript code.
If you try it now in your terminal, this is what happens:
❯
node
>
Shell
Copy to clipboard
The command stays in idle mode and waits for us to enter something.
Tip:
if you are unsure how to open your terminal, google "How to open terminal on your-operating-system".
The REPL is waiting for us to enter some JavaScript code, to be more precise.
Start simple and enter
>
console.log(
'test'
)
test
undefined
>
Shell Session
Copy to clipboard
The first value,
test
, is the output we told the console to print, then we get
undefined
which is the return value of running
console.log()
.
Node read this line of code, evaluated it, printed the result, and then went back to waiting for more lines of code. Node will loop through these three steps for every piece of code we execute in the REPL until we exit the session. That is where the REPL got its name.
Node automatically prints the result of any line of JavaScript code without the need to instruct it to do so. For example, type in the following line and press enter:
>
5 ===
'
5
'
false
>
Shell Session
Copy to clipboard
Note the difference in the outputs of the above two lines. The Node REPL printed
undefined
after executing
console.log()
, while on the other hand, it just printed the result of
5 === '5'
. You need to keep in mind that the former is just a statement in JavaScript, and the latter is an expression.
In some cases, the code you want to test might need multiple lines. For example, say you want to define a function that generates a random number, in the REPL session type in the following line and press enter:
function generateRandom() {
...
Shell Session
Copy to clipboard
The Node REPL is smart enough to determine that you are not done writing your code yet, and it will go into a multi-line mode for you to type in more code. Now finish your function definition and press enter:
function generateRandom() {
...return Math.random()
}
undefined
Shell Session
Copy to clipboard
The
_
special variable
If after some code you type
_
, that is going to print the result of the last operation.
The Up arrow key
If you press the
up
arrow key, you will get access to the history of the previous lines of code executed in the current, and even previous REPL sessions.
Dot commands
The REPL has some special commands, all starting with a dot
.
. They are
.help
: shows the dot commands help.
.editor
: enters editor mode, to write multiline JavaScript code.
.break
/
.clear
: exits multi-line code like functions. Same as pressing CTRL-C.
.load
: loads a JavaScript file, relative to the current working directory.
.save
: saves all commands you entered in the session to a file.
.exit
: exits the REPL (same as pressing CTRL-C twice).
The REPL knows when you are typing a multi-line statement without the need to invoke
.editor
.
For example if you start typing an iteration like this:
[1, 2, 3].forEach(num => {
and you press
enter
, the REPL will go to a new line that starts with 3 dots, indicating you can now continue to work on that block.
... console.log(num)
... })
Shell Session
Copy to clipboard
If you type
.break
at the end of a line, the multiline mode will stop and the statement will not be executed.
Run REPL from JavaScript file
We can import the REPL in a JavaScript file using
repl
.
CJS
ESM
const
repl
=
require
(
'
node:repl
'
)
;
Using the repl variable we can perform various operations.
To start the REPL command prompt, type in the following line
repl
.
start
()
;
Run the file in the command line.
BASH
CONSOLE
node
repl.js
You can pass a string which shows when the REPL starts. The default is '> ' (with a trailing space), but we can define custom prompt.
// a Unix style prompt
const
local
=
repl
.
start
(
'
$
'
)
;
JavaScript
Copy to clipboard
You can display a message while exiting the REPL
local
.
on
(
'
exit
'
,
()
=>
{
console
.
log
(
'
exiting repl
'
)
;
process
.
exit
()
;
}
)
;
JavaScript
Copy to clipboard
You can read more about the REPL module in the
repl documentation
.

---

# Output to the command line using Node.js
> **Fonte original:** [https://nodejs.org/learn/command-line/output-to-the-command-line-using-nodejs](https://nodejs.org/learn/command-line/output-to-the-command-line-using-nodejs)

Output to the command line using Node.js
Basic output using the console module
Node.js provides a
console
module
which provides tons of very useful ways to interact with the command line.
It is basically the same as the
console
object you find in the browser.
The most basic and most used method is
console.log()
, which prints the string you pass to it to the console.
If you pass an object, it will render it as a string.
You can pass multiple variables to
console.log
, for example:
const
x
=
'
x
'
;
const
y
=
'
y
'
;
console
.
log
(
x
,
y
)
;
JavaScript
Copy to clipboard
and Node.js will print both.
We can also format pretty phrases by passing variables and a format specifier.
For example:
console
.
log
(
'
My %s has %d ears
'
,
'
cat
'
,
2
)
;
%s
format a variable as a string
%d
format a variable as a number
%i
format a variable as its integer part only
%o
format a variable as an object
Example:
console
.
log
(
'
%o
'
,
Number
)
;
Clear the console
console.clear()
clears the console (the behavior might depend on the console used)
Counting elements
console.count()
is a handy method.
Take this code:
const
x
=
1
;
const
y
=
2
;
const
z
=
3
;
console
.
count
(
'
The value of x is
'
+
x
+
'
and has been checked .. how many times?
'
)
;
console
.
count
(
'
The value of x is
'
+
x
+
'
and has been checked .. how many times?
'
)
;
console
.
count
(
'
The value of y is
'
+
y
+
'
and has been checked .. how many times?
'
)
;
JavaScript
Copy to clipboard
What happens is that
console.count()
will count the number of times a string is printed, and print the count next to it:
You can just count apples and oranges:
const
oranges
=
[
'
orange
'
,
'
orange
'
]
;
const
apples
=
[
'
just one apple
'
]
;
oranges
.
forEach
(
fruit
=>
{
console
.
count
(
fruit
)
;
}
)
;
apples
.
forEach
(
fruit
=>
{
console
.
count
(
fruit
)
;
}
)
;
JavaScript
Copy to clipboard
Reset counting
The console.countReset() method resets counter used with console.count().
We will use the apples and orange example to demonstrate this.
const
oranges
=
[
'
orange
'
,
'
orange
'
]
;
const
apples
=
[
'
just one apple
'
]
;
oranges
.
forEach
(
fruit
=>
{
console
.
count
(
fruit
)
;
}
)
;
apples
.
forEach
(
fruit
=>
{
console
.
count
(
fruit
)
;
}
)
;
console
.
countReset
(
'
orange
'
)
;
oranges
.
forEach
(
fruit
=>
{
console
.
count
(
fruit
)
;
}
)
;
JavaScript
Copy to clipboard
Notice how the call to
console.countReset('orange')
resets the value counter to zero.
Print the stack trace
There might be cases where it's useful to print the call stack trace of a function, maybe to answer the question
how did you reach that part of the code?
You can do so using
console.trace()
:
const
function2
=
()
=>
console
.
trace
()
;
const
function1
=
()
=>
function2
()
;
function1
()
;
JavaScript
Copy to clipboard
This will print the stack trace. This is what's printed if we try this in the Node.js REPL:
Trace
at
function2
(repl:1:33)
at
function1
(repl:1:25)
at
repl:1:1
at
ContextifyScript.Script.runInThisContext
(vm.js:44:33)
at
REPLServer.defaultEval
(repl.js:239:29)
at
bound
(domain.js:301:14)
at
REPLServer.runBound
[as
eval]
(domain.js:314:12)
at
REPLServer.onLine
(repl.js:440:10)
at
emitOne
(events.js:120:20)
at
REPLServer.emit
(events.js:210:7)
Shell
Copy to clipboard
Calculate the time spent
You can easily calculate how much time a function takes to run, using
time()
and
timeEnd()
const
doSomething
=
()
=>
console
.
log
(
'
test
'
)
;
const
measureDoingSomething
=
()
=>
{
console
.
time
(
'
doSomething()
'
)
;
// do something, and measure the time it takes
doSomething
()
;
console
.
timeEnd
(
'
doSomething()
'
)
;
}
;
measureDoingSomething
()
;
JavaScript
Copy to clipboard
stdout and stderr
As we saw console.log is great for printing messages in the Console. This is what's called the standard output, or
stdout
.
console.error
prints to the
stderr
stream.
It will appear in the console, but can be handled separately from regular output.
Color the output
NOTE
This part of the resource is designed with version 22.11 which notes
styleText
as ‘Active development’.
In many cases, you will be tempted to paste certain text to get a nice output at the terminal.
There is a
styleText
function provided by the
node:util
module. Let's discover how to use it.
First of all, you need to import the
styleText
function from the
node:util
module:
ESM
CJS
import
{
styleText
}
from
'
node:util
'
;
Then, you can use it to style your text:
console
.
log
(
styleText
([
'
red
'
]
,
'
This is red text
'
)
+
styleText
([
'
green
'
,
'
bold
'
]
,
'
and this is green bold text
'
)
+
'
this is normal text
'
)
;
JavaScript
Copy to clipboard
The first argument is an array of styles, and the second argument is the text you want to style. We invite you to read
the docs

---

# Accept input from the command line in Node.js
> **Fonte original:** [https://nodejs.org/learn/command-line/accept-input-from-the-command-line-in-nodejs](https://nodejs.org/learn/command-line/accept-input-from-the-command-line-in-nodejs)

Accept input from the command line in Node.js
How to make a Node.js CLI program interactive?
Node.js since version 7 provides the
readline
module
to perform exactly this: get input from a readable stream such as the
process.stdin
stream, which during the execution of a Node.js program is the terminal input, one line at a time.
CJS
ESM
const
readline
=
require
(
'
node:readline
'
)
;
const
rl
=
readline
.
createInterface
(
{
input
:
process
.
stdin
,
output
:
process
.
stdout
,
}
)
;
rl
.
question
(
`
What's your name?
`
,
name
=>
{
console
.
log
(
`
Hi
${
name
}
!
`
)
;
rl
.
close
()
;
}
)
;
JavaScript
Copy to clipboard
This piece of code asks the user's
name
, and once the text is entered and the user presses enter, we send a greeting.
The
question()
method shows the first parameter (a question) and waits for the user input. It calls the callback function once enter is pressed.
In this callback function, we close the readline interface.
readline
offers several other methods, please check them out on the package documentation linked above.
If you need to require a password, it's best not to echo it back, but instead show a
*
symbol.

---

# How to read environment variables from Node.js
> **Fonte original:** [https://nodejs.org/learn/command-line/how-to-read-environment-variables-from-nodejs](https://nodejs.org/learn/command-line/how-to-read-environment-variables-from-nodejs)

How to read environment variables from Node.js
The
process
core module of Node.js provides the
env
property which hosts all the environment variables that were set at the moment the process was started.
The below code runs
app.js
and set
USER_ID
and
USER_KEY
.
USER_ID
=
239482
USER_KEY
=
foobar
node
app.js
That will pass the user
USER_ID
as
239482
and the
USER_KEY
as
foobar
. This is suitable for testing, however for production, you will probably be configuring some bash scripts to export variables.
Note:
process
does not need to be imported, it is a global object in Node.js.
Here is an example that accesses the
USER_ID
and
USER_KEY
environment variables, which we set in above code.
console
.
log
(
process
.
env
.
USER_ID
)
;
// "239482"
console
.
log
(
process
.
env
.
USER_KEY
)
;
// "foobar"
JavaScript
Copy to clipboard
In the same way you can access any custom environment variable you set.
Node.js 20 introduced
experimental
support for .env files
.
Now, you can use the
--env-file
flag to specify an environment file when running your Node.js application. Here's an example
.env
file and how to access its variables using
process.env
.
# .env file
PORT
=
3000
Shell
Copy to clipboard
In your js file
console
.
log
(
process
.
env
.
PORT
)
;
// "3000"
Run
app.js
file with environment variables set in
.env
file.
node
--env-file=.env
app.js
This command loads all the environment variables from the
.env
file, making them available to the application on
process.env
Also, you can pass multiple
--env-file
arguments. Subsequent files override pre-existing variables defined in previous files.
node
--env-file=.env
--env-file=.development.env
app.js
Note: if the same variable is defined in the environment and in the file, the value from the environment takes precedence.
In case you want to optionally read from a
.env
file, it's possible to avoid
throwing an error if the file is missing using the
--env-file-if-exists
flag.
node
--env-file-if-exists=.env
app.js
Loading
.env
files programmatically with
process.loadEnvFile(path)
Node.js provides a built-in API to load
.env
files directly from your code:
process.loadEnvFile(path)
.
This method loads variables from a
.env
file into
process.env
, similar to how the
--env-file
flag works — but can be invoked programmatically.
Because this method is invoked post-initialization, the setting of startup-related environment variables (i.e.
NODE_OPTIONS
) has no effect on the process (however, these variables can still be accessed via
process.env
).
Example
TXT
CJS
ESM
# .env file
PORT=1234
txt
Copy to clipboard
You can also specify a custom path:
CJS
ESM
const
{
loadEnvFile
}
=
require
(
'
node:process
'
)
;
loadEnvFile
(
'
./config/.env
'
)
;
JavaScript
Copy to clipboard

---

# Anatomy of an HTTP Transaction
> **Fonte original:** [https://nodejs.org/learn/http/anatomy-of-an-http-transaction](https://nodejs.org/learn/http/anatomy-of-an-http-transaction)

Anatomy of an HTTP Transaction
The purpose of this guide is to impart a solid understanding of the process of
Node.js HTTP handling. We'll assume that you know, in a general sense, how HTTP
requests work, regardless of language or programming environment. We'll also
assume a bit of familiarity with Node.js
EventEmitters
and
Streams
.
If you're not quite familiar with them, it's worth taking a quick read through
the API docs for each of those.
Create the Server
Any node web server application will at some point have to create a web server
object. This is done by using
createServer
.
CJS
ESM
const
http
=
require
(
'
node:http
'
)
;
const
server
=
http
.
createServer
(
(
request
,
response
)
=>
{
// magic happens here!
}
)
;
JavaScript
Copy to clipboard
The function that's passed in to
createServer
is called once for every
HTTP request that's made against that server, so it's called the request
handler. In fact, the
Server
object returned by
createServer
is an
EventEmitter
, and what we have here is just shorthand for creating a
server
object and then adding the listener later.
const
server
=
http
.
createServer
()
;
server
.
on
(
'
request
'
,
(
request
,
response
)
=>
{
// the same kind of magic happens here!
}
)
;
JavaScript
Copy to clipboard
When an HTTP request hits the server, Node calls the request handler function
with a few handy objects for dealing with the transaction,
request
and
response
. We'll get to those shortly.
In order to actually serve requests, the
listen
method needs to be called
on the
server
object. In most cases, all you'll need to pass to
listen
is
the port number you want the server to listen on. There are some other options
too, so consult the
API reference
.
Method, URL and Headers
When handling a request, the first thing you'll probably want to do is look at
the method and URL, so that appropriate actions can be taken. Node.js makes this
relatively painless by putting handy properties onto the
request
object.
const
{
method
,
url
}
=
request
;
The
request
object is an instance of
IncomingMessage
.
The
method
here will always be a normal HTTP method/verb. The
url
is the
full URL without the server, protocol or port. For a typical URL, this means
everything after and including the third forward slash.
Headers are also not far away. They're in their own object on
request
called
headers
.
const
{
headers
}
=
request
;
const
userAgent
=
headers
[
'
user-agent
'
]
;
JavaScript
Copy to clipboard
It's important to note here that all headers are represented in lower-case only,
regardless of how the client actually sent them. This simplifies the task of
parsing headers for whatever purpose.
If some headers are repeated, then their values are overwritten or joined
together as comma-separated strings, depending on the header. In some cases,
this can be problematic, so
rawHeaders
is also available.
Request Body
When receiving a
POST
or
PUT
request, the request body might be important to
your application. Getting at the body data is a little more involved than
accessing request headers. The
request
object that's passed in to a handler
implements the
ReadableStream
interface. This stream can be listened to or
piped elsewhere just like any other stream. We can grab the data right out of
the stream by listening to the stream's
'data'
and
'end'
events.
The chunk emitted in each
'data'
event is a
Buffer
. If you know it's
going to be string data, the best thing to do is collect the data in an array,
then at the
'end'
, concatenate and stringify it.
let
body
=
[]
;
request
.
on
(
'
data
'
,
chunk
=>
{
body
.
push
(
chunk
)
;
}
)
.
on
(
'
end
'
,
()
=>
{
body
=
Buffer
.
concat
(
body
)
.
toString
()
;
// at this point, `body` has the entire request body stored in it as a string
}
)
;
JavaScript
Copy to clipboard
This may seem a tad tedious, and in many cases, it is. Luckily,
there are modules like
concat-stream
and
body
on
npm
which can
help hide away some of this logic. It's important to have a good understanding
of what's going on before going down that road, and that's why you're here!
A Quick Thing About Errors
Since the
request
object is a
ReadableStream
, it's also an
EventEmitter
and behaves like one when an error happens.
An error in the
request
stream presents itself by emitting an
'error'
event
on the stream.
If you don't have a listener for that event, the error will be
thrown
, which could crash your Node.js program.
You should therefore add an
'error'
listener on your request streams, even if you just log it and
continue on your way. (Though it's probably best to send some kind of HTTP error
response. More on that later.)
request
.
on
(
'
error
'
,
err
=>
{
// This prints the error message and stack trace to `stderr`.
console
.
error
(
err
.
stack
)
;
}
)
;
JavaScript
Copy to clipboard
There are other ways of
handling these errors
such as
other abstractions and tools, but always be aware that errors can and do happen,
and you're going to have to deal with them.
What We've Got so Far
At this point, we've covered creating a server, and grabbing the method, URL,
headers and body out of requests. When we put that all together, it might look
something like this:
CJS
ESM
const
http
=
require
(
'
node:http
'
)
;
http
.
createServer
(
(
request
,
response
)
=>
{
const
{
headers
,
method
,
url
}
=
request
;
let
body
=
[]
;
request
.
on
(
'
error
'
,
err
=>
{
console
.
error
(
err
)
;
}
)
.
on
(
'
data
'
,
chunk
=>
{
body
.
push
(
chunk
)
;
}
)
.
on
(
'
end
'
,
()
=>
{
body
=
Buffer
.
concat
(
body
)
.
toString
()
;
// At this point, we have the headers, method, url and body, and can now
// do whatever we need to in order to respond to this request.
}
)
;
}
)
.
listen
(
8080
)
;
// Activates this server, listening on port 8080.
JavaScript
Copy to clipboard
If we run this example, we'll be able to
receive
requests, but not
respond
to them. In fact, if you hit this example in a web browser, your request would
time out, as nothing is being sent back to the client.
So far we haven't touched on the
response
object at all, which is an instance
of
ServerResponse
, which is a
WritableStream
. It contains many
useful methods for sending data back to the client. We'll cover that next.
HTTP Status Code
If you don't bother setting it, the HTTP status code on a response will always
be 200. Of course, not every HTTP response warrants this, and at some point
you'll definitely want to send a different status code. To do that, you can set
the
statusCode
property.
response
.
statusCode
=
404
;
// Tell the client that the resource wasn't found.
There are some other shortcuts to this, as we'll see soon.
Setting Response Headers
Headers are set through a convenient method called
setHeader
.
response
.
setHeader
(
'
Content-Type
'
,
'
application/json
'
)
;
response
.
setHeader
(
'
X-Powered-By
'
,
'
bacon
'
)
;
JavaScript
Copy to clipboard
When setting the headers on a response, the case is insensitive on their names.
If you set a header repeatedly, the last value you set is the value that gets
sent.
Explicitly Sending Header Data
The methods of setting the headers and status code that we've already discussed
assume that you're using "implicit headers". This means you're counting on node
to send the headers for you at the correct time before you start sending body
data.
If you want, you can
explicitly
write the headers to the response stream.
To do this, there's a method called
writeHead
, which writes the status
code and the headers to the stream.
response
.
writeHead
(
200
,
{
'
Content-Type
'
:
'
application/json
'
,
'
X-Powered-By
'
:
'
bacon
'
,
}
)
;
JavaScript
Copy to clipboard
Once you've set the headers (either implicitly or explicitly), you're ready to
start sending response data.
Sending Response Body
Since the
response
object is a
WritableStream
, writing a response body
out to the client is just a matter of using the usual stream methods.
response
.
write
(
'
<html>
'
)
;
response
.
write
(
'
<body>
'
)
;
response
.
write
(
'
<h1>Hello, World!</h1>
'
)
;
response
.
write
(
'
</body>
'
)
;
response
.
write
(
'
</html>
'
)
;
response
.
end
()
;
JavaScript
Copy to clipboard
The
end
function on streams can also take in some optional data to send as the
last bit of data on the stream, so we can simplify the example above as follows.
response
.
end
(
'
<html><body><h1>Hello, World!</h1></body></html>
'
)
;
It's important to set the status and headers
before
you start
writing chunks of data to the body. This makes sense, since headers come before
the body in HTTP responses.
Another Quick Thing About Errors
The
response
stream can also emit
'error'
events, and at some point you're
going to have to deal with that as well. All of the advice for
request
stream
errors still applies here.
Put It All Together
Now that we've learned about making HTTP responses, let's put it all together.
Building on the earlier example, we're going to make a server that sends back
all of the data that was sent to us by the user. We'll format that data as JSON
using
JSON.stringify
.
CJS
ESM
const
http
=
require
(
'
node:http
'
)
;
http
.
createServer
(
(
request
,
response
)
=>
{
const
{
headers
,
method
,
url
}
=
request
;
let
body
=
[]
;
request
.
on
(
'
error
'
,
err
=>
{
console
.
error
(
err
)
;
}
)
.
on
(
'
data
'
,
chunk
=>
{
body
.
push
(
chunk
)
;
}
)
.
on
(
'
end
'
,
()
=>
{
body
=
Buffer
.
concat
(
body
)
.
toString
()
;
// BEGINNING OF NEW STUFF
response
.
on
(
'
error
'
,
err
=>
{
console
.
error
(
err
)
;
}
)
;
response
.
statusCode
=
200
;
response
.
setHeader
(
'
Content-Type
'
,
'
application/json
'
)
;
// Note: the 2 lines above could be replaced with this next one:
// response.writeHead(200, {'Content-Type': 'application/json'})
const
responseBody
=
{
headers
,
method
,
url
,
body
}
;
response
.
write
(
JSON
.
stringify
(
responseBody
))
;
response
.
end
()
;
// Note: the 2 lines above could be replaced with this next one:
// response.end(JSON.stringify(responseBody))
// END OF NEW STUFF
}
)
;
}
)
.
listen
(
8080
)
;
JavaScript
Copy to clipboard
Echo Server Example
Let's simplify the previous example to make a simple echo server, which just
sends whatever data is received in the request right back in the response. All
we need to do is grab the data from the request stream and write that data to
the response stream, similar to what we did previously.
CJS
ESM
const
http
=
require
(
'
node:http
'
)
;
http
.
createServer
(
(
request
,
response
)
=>
{
let
body
=
[]
;
request
.
on
(
'
data
'
,
chunk
=>
{
body
.
push
(
chunk
)
;
}
)
.
on
(
'
end
'
,
()
=>
{
body
=
Buffer
.
concat
(
body
)
.
toString
()
;
response
.
end
(
body
)
;
}
)
;
}
)
.
listen
(
8080
)
;
JavaScript
Copy to clipboard
Now let's tweak this. We want to only send an echo under the following
conditions:
The request method is POST.
The URL is
/echo
.
In any other case, we want to simply respond with a 404.
CJS
ESM
const
http
=
require
(
'
node:http
'
)
;
http
.
createServer
(
(
request
,
response
)
=>
{
if
(
request
.
method
===
'
POST
'
&&
request
.
url
===
'
/echo
'
)
{
let
body
=
[]
;
request
.
on
(
'
data
'
,
chunk
=>
{
body
.
push
(
chunk
)
;
}
)
.
on
(
'
end
'
,
()
=>
{
body
=
Buffer
.
concat
(
body
)
.
toString
()
;
response
.
end
(
body
)
;
}
)
;
}
else
{
response
.
statusCode
=
404
;
response
.
end
()
;
}
}
)
.
listen
(
8080
)
;
JavaScript
Copy to clipboard
By checking the URL in this way, we're doing a form of "routing".
Other forms of routing can be as simple as
switch
statements or as complex as
whole frameworks like
express
. If you're looking for something that does
routing and nothing else, try
router
.
Great! Now let's take a stab at simplifying this. Remember, the
request
object
is a
ReadableStream
and the
response
object is a
WritableStream
.
That means we can use
pipe
to direct data from one to the other. That's
exactly what we want for an echo server!
CJS
ESM
const
http
=
require
(
'
node:http
'
)
;
http
.
createServer
(
(
request
,
response
)
=>
{
if
(
request
.
method
===
'
POST
'
&&
request
.
url
===
'
/echo
'
)
{
request
.
pipe
(
response
)
;
}
else
{
response
.
statusCode
=
404
;
response
.
end
()
;
}
}
)
.
listen
(
8080
)
;
JavaScript
Copy to clipboard
Yay streams!
We're not quite done yet though. As mentioned multiple times in this guide,
errors can and do happen, and we need to deal with them.
To handle errors on the request stream, we'll log the error to
stderr
and send
a 400 status code to indicate a
Bad Request
. In a real-world application,
though, we'd want to inspect the error to figure out what the correct status code
and message would be. As usual with errors, you should consult the
Error
documentation
.
On the response, we'll just log the error to
stderr
.
CJS
ESM
const
http
=
require
(
'
node:http
'
)
;
http
.
createServer
(
(
request
,
response
)
=>
{
request
.
on
(
'
error
'
,
err
=>
{
console
.
error
(
err
)
;
response
.
statusCode
=
400
;
response
.
end
()
;
}
)
;
response
.
on
(
'
error
'
,
err
=>
{
console
.
error
(
err
)
;
}
)
;
if
(
request
.
method
===
'
POST
'
&&
request
.
url
===
'
/echo
'
)
{
request
.
pipe
(
response
)
;
}
else
{
response
.
statusCode
=
404
;
response
.
end
()
;
}
}
)
.
listen
(
8080
)
;
JavaScript
Copy to clipboard
We've now covered most of the basics of handling HTTP requests. At this point,
you should be able to:
Instantiate an HTTP server with a request handler function, and have it listen
on a port.
Get headers, URL, method and body data from
request
objects.
Make routing decisions based on URL and/or other data in
request
objects.
Send headers, HTTP status codes and body data via
response
objects.
Pipe data from
request
objects and to
response
objects.
Handle stream errors in both the
request
and
response
streams.
From these basics, Node.js HTTP servers for many typical use cases can be
constructed. There are plenty of other things these APIs provide, so be sure to
read through the API docs for
EventEmitters
,
Streams
, and
HTTP
.

---

# Enterprise Network Configuration
> **Fonte original:** [https://nodejs.org/learn/http/enterprise-network-configuration](https://nodejs.org/learn/http/enterprise-network-configuration)

Enterprise Network Configuration
Overview
Enterprise environments often require applications to operate behind corporate proxies and use custom certificate authorities (CAs) for SSL/TLS validation. Node.js provides built-in support for these requirements through environment variables and command-line flags, eliminating the need for third-party proxy libraries in many cases.
This guide covers how to configure Node.js applications to work in enterprise network environments:
Configuring proxies via the
NODE_USE_ENV_PROXY
environment variable or the
--use-env-proxy
flag
Adding certificate authorities from system store via the
NODE_USE_SYSTEM_CA
environment variable or the
--use-system-ca
flag.
Proxy Configuration
In many enterprise environments, internet access to external services may need to be routed through HTTP/HTTPS proxies for security and monitoring. This requires applications to be aware of and use these proxies when making network requests.
Proxy settings are often provided via environment variables such as
HTTP_PROXY
,
HTTPS_PROXY
, and
NO_PROXY
. Node.js supports these when
NODE_USE_ENV_PROXY
or
--use-env-proxy
is enabled. This works with
node:http
and
node:https
(v22.21.0 or v24.5.0+) methods as well as
fetch()
(v22.21.0 or v24.0.0+).
Example (POSIX shells):
# The proxy settings might be configured in the system by your IT department
# and shared across different tools.
export
HTTP_PROXY
=
http
://
proxy
.
company
.
com
:
8080
export
HTTPS_PROXY
=
http
://
proxy
.
company
.
com
:
8080
export
NO_PROXY
=
localhost
,
127
.
0
.
0
.
1
,.
company
.
com
# To enable it for Node.js applications.
export
NODE_USE_ENV_PROXY
=
1
node
app.js
Shell
Copy to clipboard
Alternatively, enable it via the command-line flag
--use-env-proxy
on Node.js v22.21.0 or v24.5.0 and above:
# The proxy settings might be configured in the system by your IT department
# and shared across different tools.
export
HTTP_PROXY
=
http
://
proxy
.
company
.
com
:
8080
export
HTTPS_PROXY
=
http
://
proxy
.
company
.
com
:
8080
export
NO_PROXY
=
localhost
,
127
.
0
.
0
.
1
,.
company
.
com
# To enable it for Node.js applications.
node
--use-env-proxy
app.js
Shell
Copy to clipboard
Or, if
--env-file
is used to load environment variables from a file:
TXT
BASH
# In .env file
HTTP_PROXY=http://proxy.company.com:8080
HTTPS_PROXY=http://proxy.company.com:8080
NO_PROXY=localhost,127.0.0.1,.company.com
NODE_USE_ENV_PROXY=1
txt
Copy to clipboard
Once enabled,
http
,
https
, and
fetch()
requests use the configured proxies by default, unless an agent is overridden or the target matches
NO_PROXY
.
Configure the Proxy Programmatically
To configure the proxy programmatically, override the agents. This is currently supported by
https.request()
and other methods built upon it such as
https.get()
.
To override the agent on a per-request basis, use the
agent
option for
http.request()
/
https.request()
and similar methods:
CJS
ESM
const
https
=
require
(
'
node:https
'
)
;
// Creating a custom agent with custom proxy support.
const
agent
=
new
https
.
Agent
(
{
proxyEnv
:
{
HTTPS_PROXY
:
'
http://proxy.company.com:8080
'
},
}
)
;
https
.
request
(
{
hostname
:
'
www.external.com
'
,
port
:
443
,
path
:
'
/
'
,
agent
,
},
res
=>
{
// This request will be proxied through proxy.company.com:8080 using the HTTP protocol.
}
)
;
JavaScript
Copy to clipboard
To override the agent globally, reset
http.globalAgent
and
https.globalAgent
:
Note
: Global agents do not affect
fetch()
.
CJS
ESM
const
http
=
require
(
'
node:http
'
)
;
const
https
=
require
(
'
node:https
'
)
;
http
.
globalAgent
=
new
http
.
Agent
(
{
proxyEnv
:
{
HTTP_PROXY
:
'
http://proxy.company.com:8080
'
},
}
)
;
https
.
globalAgent
=
new
https
.
Agent
(
{
proxyEnv
:
{
HTTPS_PROXY
:
'
http://proxy.company.com:8080
'
},
}
)
;
// Subsequent requests will all use the configured proxies, unless they override the agent option.
http
.
request
(
'
http://external.com
'
,
res
=>
{
/* ... */
}
)
;
https
.
request
(
'
https://external.com
'
,
res
=>
{
/* ... */
}
)
;
JavaScript
Copy to clipboard
Using Proxies with Authentication
If the proxy requires authentication, include credentials in the proxy URL:
export
HTTPS_PROXY
=
http
://
username
:
password
@
proxy
.
company
.
com
:
8080
Security Note
: Avoid committing credentials in env files. Prefer a secret manager and programmatic configuration.
Proxy Bypass Configuration
The
NO_PROXY
variable supports:
*
- Bypass proxy for all hosts
company.com
- Exact host name match
.company.com
- Domain suffix match (matches
sub.company.com
)
*.company.com
- Wildcard domain match
192.168.1.100
- Exact IP address match
192.168.1.1-192.168.1.100
- IP address range
company.com:8080
- Hostname with specific port
If a target matches
NO_PROXY
, the request bypasses the proxy.
Certificate Authority Configuration
By default, Node.js uses Mozilla’s bundled root CAs and does not consult the OS store. In many enterprise environments, internal CAs are installed in the OS store and are expected to be trusted when connecting to internal services; connections to certificates signed by those CAs can fail validation with errors such as:
Error:
self
signed
certificate
in
certificate
chain
From Node.js v22.19.0, v24.6.0 and above, Node.js can be configured to trust these custom CAs using the system's certificate store.
Adding CA Certificates from the System Store
From environment variable:
NODE_USE_SYSTEM_CA=1 node app.js
From command-line flag:
node --use-system-ca app.js
When enabled, Node.js loads system CAs and uses them in addition to its bundled CAs for TLS validation.
Node.js reads certificates from different locations depending on the platform:
Windows: Windows Certificate Store (via Windows Crypto API)
macOS: macOS Keychain
Linux: OpenSSL defaults, typically via
SSL_CERT_FILE
/
SSL_CERT_DIR
, or paths like
/etc/ssl/cert.pem
and
/etc/ssl/certs/
depending on the OpenSSL build
Node.js follows a policy similar to that of Chromium. See
the Node.js documentation
for more details.
Adding additional CA Certificates
To add specific CA certificates without relying on the system store:
export
NODE_EXTRA_CA_CERTS
=
/
path
/
to
/
company-ca-bundle
.
pem
node
app.js
Shell
Copy to clipboard
The file should contain one or more PEM-encoded certificates.
Combining Options
You can combine
NODE_USE_SYSTEM_CA
with
NODE_EXTRA_CA_CERTS
:
export
NODE_USE_SYSTEM_CA
=
1
export
NODE_EXTRA_CA_CERTS
=
/
path
/
to
/
additional-cas
.
pem
node
app.js
Shell
Copy to clipboard
With both enabled, Node.js trusts bundled CAs, system CAs, and the additional certificates specified by
NODE_EXTRA_CA_CERTS
.
Configure CA Certificates Programmatically
Configure Global CA Certificates
Use
tls.getCACertificates()
and
tls.setDefaultCACertificates()
to configure global CA certificates. For example, to add system certificates into the default store:
CJS
ESM
const
https
=
require
(
'
node:https
'
)
;
const
tls
=
require
(
'
node:tls
'
)
;
const
currentCerts
=
tls
.
getCACertificates
(
'
default
'
)
;
const
systemCerts
=
tls
.
getCACertificates
(
'
system
'
)
;
tls
.
setDefaultCACertificates
([
...
currentCerts
,
...
systemCerts
])
;
// Subsequent requests use system certificates during verification.
https
.
get
(
'
https://internal.company.com
'
,
res
=>
{
/* ... */
}
)
;
fetch
(
'
https://internal.company.com
'
)
.
then
(
res
=>
{
/* ... */
}
)
;
JavaScript
Copy to clipboard
Configure CA Certificates for Individual Requests
To override CA certificates per request, use the
ca
option. This is currently only supported by
tls.connect()
/
https.request()
and methods built upon them such as
https.get()
.
CJS
ESM
const
https
=
require
(
'
node:https
'
)
;
const
specialCerts
=
[
'
-----BEGIN CERTIFICATE-----
\n
...
'
]
;
https
.
get
(
{
hostname
:
'
internal.company.com
'
,
port
:
443
,
path
:
'
/
'
,
method
:
'
GET
'
,
// The `ca` option replaces defaults; concatenate bundled certs if needed.
ca
:
specialCerts
,
},
res
=>
{
/* ... */
}
)
;
JavaScript
Copy to clipboard

---

# Node.js file stats
> **Fonte original:** [https://nodejs.org/learn/manipulating-files/nodejs-file-stats](https://nodejs.org/learn/manipulating-files/nodejs-file-stats)

Node.js file stats
Every file comes with a set of details that we can inspect using Node.js. In particular, using the
stat()
method provided by the
fs
module
.
You call it passing a file path, and once Node.js gets the file details it will call the callback function you pass, with 2 parameters: an error message, and the file stats:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
fs
.
stat
(
'
/Users/joe/test.txt
'
,
(
err
,
stats
)
=>
{
if
(
err
)
{
console
.
error
(
err
)
;
}
// we have access to the file stats in `stats`
}
)
;
JavaScript
Copy to clipboard
Node.js also provides a sync method, which blocks the thread until the file stats are ready:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
try
{
const
stats
=
fs
.
statSync
(
'
/Users/joe/test.txt
'
)
;
}
catch
(
err
)
{
console
.
error
(
err
)
;
}
JavaScript
Copy to clipboard
The file information is included in the stats variable. What kind of information can we extract using the stats?
A lot, including:
if the file is a directory or a file, using
stats.isFile()
and
stats.isDirectory()
if the file is a symbolic link using
stats.isSymbolicLink()
the file size in bytes using
stats.size
.
There are other advanced methods, but the bulk of what you'll use in your day-to-day programming is this.
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
fs
.
stat
(
'
/Users/joe/test.txt
'
,
(
err
,
stats
)
=>
{
if
(
err
)
{
console
.
error
(
err
)
;
return;
}
stats
.
isFile
()
;
// true
stats
.
isDirectory
()
;
// false
stats
.
isSymbolicLink
()
;
// false
console
.
log
(
stats
.
size
)
;
// 1024000 //= 1MB
}
)
;
JavaScript
Copy to clipboard
You can also use promise-based
fsPromises.stat()
method offered by the
fs/promises
module if you like:
CJS
ESM
const
fs
=
require
(
'
node:fs/promises
'
)
;
async
function
example
()
{
try
{
const
stats
=
await
fs
.
stat
(
'
/Users/joe/test.txt
'
)
;
stats
.
isFile
()
;
// true
stats
.
isDirectory
()
;
// false
stats
.
isSymbolicLink
()
;
// false
console
.
log
(
stats
.
size
)
;
// 1024000 //= 1MB
}
catch
(
err
)
{
console
.
log
(
err
)
;
}
}
example
()
;
JavaScript
Copy to clipboard
You can read more about the
fs
module in the
official documentation
.

---

# Node.js File Paths
> **Fonte original:** [https://nodejs.org/learn/manipulating-files/nodejs-file-paths](https://nodejs.org/learn/manipulating-files/nodejs-file-paths)

Node.js File Paths
Every file in the system has a path. On Linux and macOS, a path might look like:
/users/joe/file.txt
while Windows computers are different, and have a structure such as:
C:\users\joe\file.txt
You need to pay attention when using paths in your applications, as this difference must be taken into account.
You include this module in your files using
const path = require('node:path');
and you can start using its methods.
Getting information out of a path
Given a path, you can extract information out of it using those methods:
dirname
: gets the parent folder of a file
basename
: gets the filename part
extname
: gets the file extension
Example
CJS
ESM
const
path
=
require
(
'
node:path
'
)
;
const
notes
=
'
/users/joe/notes.txt
'
;
path
.
dirname
(
notes
)
;
// /users/joe
path
.
basename
(
notes
)
;
// notes.txt
path
.
extname
(
notes
)
;
// .txt
JavaScript
Copy to clipboard
You can get the file name without the extension by specifying a second argument to
basename
:
path
.
basename
(
notes
,
path
.
extname
(
notes
))
;
// notes
Working with paths
You can join two or more parts of a path by using
path.join()
:
const
name
=
'
joe
'
;
path
.
join
(
'
/
'
,
'
users
'
,
name
,
'
notes.txt
'
)
;
// '/users/joe/notes.txt'
JavaScript
Copy to clipboard
You can get the absolute path calculation of a relative path using
path.resolve()
:
path
.
resolve
(
'
joe.txt
'
)
;
// '/Users/joe/joe.txt' if run from my home folder
In this case Node.js will simply append
/joe.txt
to the current working directory. If you specify a second parameter folder,
resolve
will use the first as a base for the second:
path
.
resolve
(
'
tmp
'
,
'
joe.txt
'
)
;
// '/Users/joe/tmp/joe.txt' if run from my home folder
If the first parameter starts with a slash, that means it's an absolute path:
path
.
resolve
(
'
/etc
'
,
'
joe.txt
'
)
;
// '/etc/joe.txt'
path.normalize()
is another useful function, that will try and calculate the actual path, when it contains relative specifiers like
.
or
..
, or double slashes:
path
.
normalize
(
'
/users/joe/..//test.txt
'
)
;
// '/users/test.txt'
Neither resolve nor normalize will check if the path exists
. They just calculate a path based on the information they got.

---

# Reading files with Node.js
> **Fonte original:** [https://nodejs.org/learn/manipulating-files/reading-files-with-nodejs](https://nodejs.org/learn/manipulating-files/reading-files-with-nodejs)

Reading files with Node.js
The simplest way to read a file in Node.js is to use the
fs.readFile()
method, passing it the file path, encoding and a callback function that will be called with the file data (and the error):
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
fs
.
readFile
(
'
/Users/joe/test.txt
'
,
'
utf8
'
,
(
err
,
data
)
=>
{
if
(
err
)
{
console
.
error
(
err
)
;
return;
}
console
.
log
(
data
)
;
}
)
;
JavaScript
Copy to clipboard
Alternatively, you can use the synchronous version
fs.readFileSync()
:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
try
{
const
data
=
fs
.
readFileSync
(
'
/Users/joe/test.txt
'
,
'
utf8
'
)
;
console
.
log
(
data
)
;
}
catch
(
err
)
{
console
.
error
(
err
)
;
}
JavaScript
Copy to clipboard
You can also use the promise-based
fsPromises.readFile()
method offered by the
fs/promises
module:
CJS
ESM
const
fs
=
require
(
'
node:fs/promises
'
)
;
async
function
example
()
{
try
{
const
data
=
await
fs
.
readFile
(
'
/Users/joe/test.txt
'
,
{
encoding
:
'
utf8
'
}
)
;
console
.
log
(
data
)
;
}
catch
(
err
)
{
console
.
error
(
err
)
;
}
}
example
()
;
JavaScript
Copy to clipboard
All three of
fs.readFile()
,
fs.readFileSync()
and
fsPromises.readFile()
read the full content of the file in memory before returning the data.
This means that big files are going to have a major impact on your memory consumption and speed of execution of the program.
In this case, a better option is to read the file content using streams as it is more memory efficient.
import
fs
from
'
fs
'
;
import
{
pipeline
}
from
'
node:stream/promises
'
;
import
path
from
'
path
'
;
const
fileUrl
=
'
https://www.gutenberg.org/files/2701/2701-0.txt
'
;
const
outputFilePath
=
path
.
join
(
process
.
cwd
()
,
'
moby.md
'
)
;
async
function
downloadFile
(
url
,
outputPath
)
{
const
response
=
await
fetch
(
url
)
;
if
(
!
response
.
ok
||
!
response
.
body
)
{
// consuming the response body is mandatory: https://undici.nodejs.org/#/?id=garbage-collection
await
response
.
body
?.
cancel
()
;
throw
new
Error
(
`
Failed to fetch
${
url
}
. Status:
${
response
.
status
}
`
)
;
}
const
fileStream
=
fs
.
createWriteStream
(
outputPath
)
;
console
.
log
(
`
Downloading file from
${
url
}
to
${
outputPath
}
`
)
;
await
pipeline
(
response
.
body
,
fileStream
)
;
console
.
log
(
'
File downloaded successfully
'
)
;
}
async
function
readFile
(
filePath
)
{
const
readStream
=
fs
.
createReadStream
(
filePath
,
{
encoding
:
'
utf8
'
}
)
;
try
{
for
await
(
const
chunk
of
readStream
)
{
console
.
log
(
'
--- File chunk start ---
'
)
;
console
.
log
(
chunk
)
;
console
.
log
(
'
--- File chunk end ---
'
)
;
}
console
.
log
(
'
Finished reading the file.
'
)
;
}
catch
(
error
)
{
console
.
error
(
`
Error reading file:
${
error
.
message
}
`
)
;
}
}
try
{
await
downloadFile
(
fileUrl
,
outputFilePath
)
;
await
readFile
(
outputFilePath
)
;
}
catch
(
error
)
{
console
.
error
(
`
Error:
${
error
.
message
}
`
)
;
}
JavaScript
Copy to clipboard

---

# Writing files with Node.js
> **Fonte original:** [https://nodejs.org/learn/manipulating-files/writing-files-with-nodejs](https://nodejs.org/learn/manipulating-files/writing-files-with-nodejs)

Writing files with Node.js
Writing a file
The easiest way to write to files in Node.js is to use the
fs.writeFile()
API.
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
content
=
'
Some content!
'
;
fs
.
writeFile
(
'
/Users/joe/test.txt
'
,
content
,
err
=>
{
if
(
err
)
{
console
.
error
(
err
)
;
}
else
{
// file written successfully
}
}
)
;
JavaScript
Copy to clipboard
Writing a file synchronously
Alternatively, you can use the synchronous version
fs.writeFileSync()
:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
content
=
'
Some content!
'
;
try
{
fs
.
writeFileSync
(
'
/Users/joe/test.txt
'
,
content
)
;
// file written successfully
}
catch
(
err
)
{
console
.
error
(
err
)
;
}
JavaScript
Copy to clipboard
You can also use the promise-based
fsPromises.writeFile()
method offered by the
fs/promises
module:
CJS
ESM
const
fs
=
require
(
'
node:fs/promises
'
)
;
async
function
example
()
{
try
{
const
content
=
'
Some content!
'
;
await
fs
.
writeFile
(
'
/Users/joe/test.txt
'
,
content
)
;
}
catch
(
err
)
{
console
.
log
(
err
)
;
}
}
example
()
;
JavaScript
Copy to clipboard
By default, this API will
replace the contents of the file
if it does already exist.
You can modify the default by specifying a flag:
fs
.
writeFile
(
'
/Users/joe/test.txt
'
,
content
,
{
flag
:
'
a+
'
},
err
=>
{}
)
;
The flags you'll likely use are
Flag
Description
File gets created if it doesn't exist
r+
This flag opens the file for
reading
and
writing
❌
w+
This flag opens the file for
reading
and
writing
and it also positions the stream at the
beginning
of the file
✅
a
This flag opens the file for
writing
and it also positions the stream at the
end
of the file
✅
a+
This flag opens the file for
reading
and
writing
and it also positions the stream at the
end
of the file
✅
You can find more information about the flags in the
fs documentation
.
Appending content to a file
Appending to files is handy when you don't want to overwrite a file with new content, but rather add to it.
Examples
A handy method to append content to the end of a file is
fs.appendFile()
(and its
fs.appendFileSync()
counterpart):
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
content
=
'
Some content!
'
;
fs
.
appendFile
(
'
file.log
'
,
content
,
err
=>
{
if
(
err
)
{
console
.
error
(
err
)
;
}
else
{
// done!
}
}
)
;
JavaScript
Copy to clipboard
Example with Promises
Here is a
fsPromises.appendFile()
example:
CJS
ESM
const
fs
=
require
(
'
node:fs/promises
'
)
;
async
function
example
()
{
try
{
const
content
=
'
Some content!
'
;
await
fs
.
appendFile
(
'
/Users/joe/test.txt
'
,
content
)
;
}
catch
(
err
)
{
console
.
log
(
err
)
;
}
}
example
()
;
JavaScript
Copy to clipboard

---

# Working with file descriptors in Node.js
> **Fonte original:** [https://nodejs.org/learn/manipulating-files/working-with-file-descriptors-in-nodejs](https://nodejs.org/learn/manipulating-files/working-with-file-descriptors-in-nodejs)

Working with file descriptors in Node.js
Before you're able to interact with a file that sits in your filesystem, you must get a file descriptor.
A file descriptor is a reference to an open file, a number (fd) returned by opening the file using the
open()
method offered by the
fs
module. This number (
fd
) uniquely identifies an open file in operating system:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
fs
.
open
(
'
/Users/joe/test.txt
'
,
'
r
'
,
(
err
,
fd
)
=>
{
// fd is our file descriptor
}
)
;
JavaScript
Copy to clipboard
Notice the
r
we used as the second parameter to the
fs.open()
call.
That flag means we open the file for reading.
Other flags you'll commonly use are:
Flag
Description
File gets created if it doesn't exist
r+
This flag opens the file for reading and writing
❌
w+
This flag opens the file for reading and writing and it also positions the stream at the beginning of the file
✅
a
This flag opens the file for writing and it also positions the stream at the end of the file
✅
a+
This flag opens the file for reading and writing and it also positions the stream at the end of the file
✅
You can also open the file by using the
fs.openSync
method, which returns the file descriptor, instead of providing it in a callback:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
try
{
const
fd
=
fs
.
openSync
(
'
/Users/joe/test.txt
'
,
'
r
'
)
;
}
catch
(
err
)
{
console
.
error
(
err
)
;
}
JavaScript
Copy to clipboard
Once you get the file descriptor, in whatever way you choose, you can perform all the operations that require it, like calling
fs.close()
and many other operations that interact with the filesystem.
You can also open the file by using the promise-based
fsPromises.open
method offered by the
fs/promises
module.
The
fs/promises
module is available starting only from Node.js v14. Before v14, after v10, you can use
require('fs').promises
instead. Before v10, after v8, you can use
util.promisify
to convert
fs
methods into promise-based methods.
CJS
ESM
const
fs
=
require
(
'
node:fs/promises
'
)
;
// Or const fs = require('fs').promises before v14.
async
function
example
()
{
let
filehandle
;
try
{
filehandle
=
await
fs
.
open
(
'
/Users/joe/test.txt
'
,
'
r
'
)
;
console
.
log
(
filehandle
.
fd
)
;
console
.
log
(
await
filehandle
.
readFile
(
{
encoding
:
'
utf8
'
}
))
;
}
finally
{
if
(
filehandle
)
{
await
filehandle
.
close
()
;
}
}
}
example
()
;
JavaScript
Copy to clipboard
Here is an example of
util.promisify
:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
util
=
require
(
'
node:util
'
)
;
async
function
example
()
{
const
open
=
util
.
promisify
(
fs
.
open
)
;
const
fd
=
await
open
(
'
/Users/joe/test.txt
'
,
'
r
'
)
;
}
example
()
;
JavaScript
Copy to clipboard
To see more details about the
fs/promises
module, please check
fs/promises API
.

---

# Working with folders in Node.js
> **Fonte original:** [https://nodejs.org/learn/manipulating-files/working-with-folders-in-nodejs](https://nodejs.org/learn/manipulating-files/working-with-folders-in-nodejs)

Working with folders in Node.js
The Node.js
fs
core module provides many handy methods you can use to work with folders.
Check if a folder exists
Use
fs.access()
(and its promise-based
fsPromises.access()
counterpart) to check if the folder exists and Node.js can access it with its permissions.
Create a new folder
Use
fs.mkdir()
or
fs.mkdirSync()
or
fsPromises.mkdir()
to create a new folder.
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
folderName
=
'
/Users/joe/test
'
;
try
{
if
(
!
fs
.
existsSync
(
folderName
))
{
fs
.
mkdirSync
(
folderName
)
;
}
}
catch
(
err
)
{
console
.
error
(
err
)
;
}
JavaScript
Copy to clipboard
Read the content of a directory
Use
fs.readdir()
or
fs.readdirSync()
or
fsPromises.readdir()
to read the contents of a directory.
This piece of code reads the content of a folder, both files and subfolders, and returns their relative path:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
folderPath
=
'
/Users/joe
'
;
fs
.
readdirSync
(
folderPath
)
;
JavaScript
Copy to clipboard
You can get the full path:
fs
.
readdirSync
(
folderPath
)
.
map
(
fileName
=>
{
return
path
.
join
(
folderPath
,
fileName
)
;
}
)
;
JavaScript
Copy to clipboard
You can also filter the results to only return the files, and exclude the folders:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
isFile
=
fileName
=>
{
return
fs
.
lstatSync
(
fileName
)
.
isFile
()
;
}
;
fs
.
readdirSync
(
folderPath
)
.
map
(
fileName
=>
{
return
path
.
join
(
folderPath
,
fileName
)
;
}
)
.
filter
(
isFile
)
;
JavaScript
Copy to clipboard
Rename a folder
Use
fs.rename()
or
fs.renameSync()
or
fsPromises.rename()
to rename folder. The first parameter is the current path, the second the new path:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
fs
.
rename
(
'
/Users/joe
'
,
'
/Users/roger
'
,
err
=>
{
if
(
err
)
{
console
.
error
(
err
)
;
}
// done
}
)
;
JavaScript
Copy to clipboard
fs.renameSync()
is the synchronous version:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
try
{
fs
.
renameSync
(
'
/Users/joe
'
,
'
/Users/roger
'
)
;
}
catch
(
err
)
{
console
.
error
(
err
)
;
}
JavaScript
Copy to clipboard
fsPromises.rename()
is the promise-based version:
CJS
ESM
const
fs
=
require
(
'
node:fs/promises
'
)
;
async
function
example
()
{
try
{
await
fs
.
rename
(
'
/Users/joe
'
,
'
/Users/roger
'
)
;
}
catch
(
err
)
{
console
.
log
(
err
)
;
}
}
example
()
;
JavaScript
Copy to clipboard
Remove a folder
Use
fs.rmdir()
or
fs.rmdirSync()
or
fsPromises.rmdir()
to remove a folder.
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
fs
.
rmdir
(
dir
,
err
=>
{
if
(
err
)
{
throw
err
;
}
console
.
log
(
`
${
dir
}
is deleted!
`
)
;
}
)
;
JavaScript
Copy to clipboard
To remove a folder that has contents use
fs.rm()
with the option
{ recursive: true }
to recursively remove the contents.
{ recursive: true, force: true }
makes it so that exceptions will be ignored if the folder does not exist.
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
fs
.
rm
(
dir
,
{
recursive
:
true
,
force
:
true
},
err
=>
{
if
(
err
)
{
throw
err
;
}
console
.
log
(
`
${
dir
}
is deleted!
`
)
;
}
)
;
JavaScript
Copy to clipboard

---

# How to work with Different Filesystems
> **Fonte original:** [https://nodejs.org/learn/manipulating-files/working-with-different-filesystems](https://nodejs.org/learn/manipulating-files/working-with-different-filesystems)

How to Work with Different Filesystems
Node.js exposes many features of the filesystem. But not all filesystems are alike.
The following are suggested best practices to keep your code simple and safe
when working with different filesystems.
Filesystem Behavior
Before you can work with a filesystem, you need to know how it behaves.
Different filesystems behave differently and have more or less features than
others: case sensitivity, case insensitivity, case preservation, Unicode form
preservation, timestamp resolution, extended attributes, inodes, Unix
permissions, alternate data streams etc.
Be wary of inferring filesystem behavior from
process.platform
. For example,
do not assume that because your program is running on Darwin that you are
therefore working on a case-insensitive filesystem (HFS+), as the user may be
using a case-sensitive filesystem (HFSX). Similarly, do not assume that because
your program is running on Linux that you are therefore working on a filesystem
which supports Unix permissions and inodes, as you may be on a particular
external drive, USB or network drive which does not.
The operating system may not make it easy to infer filesystem behavior, but all
is not lost. Instead of keeping a list of every known filesystem and behavior
(which is always going to be incomplete), you can probe the filesystem to see
how it actually behaves. The presence or absence of certain features which are
easy to probe, are often enough to infer the behavior of other features which
are more difficult to probe.
Remember that some users may have different filesystems mounted at various paths
in the working tree.
Avoid a Lowest Common Denominator Approach
You might be tempted to make your program act like a lowest common denominator
filesystem, by normalizing all filenames to uppercase, normalizing all filenames
to NFC Unicode form, and normalizing all file timestamps to say 1-second
resolution. This would be the lowest common denominator approach.
Do not do this. You would only be able to interact safely with a filesystem
which has the exact same lowest common denominator characteristics in every
respect. You would be unable to work with more advanced filesystems in the way
that users expect, and you would run into filename or timestamp collisions. You
would most certainly lose and corrupt user data through a series of complicated
dependent events, and you would create bugs that would be difficult if not
impossible to solve.
What happens when you later need to support a filesystem that only has 2-second
or 24-hour timestamp resolution? What happens when the Unicode standard advances
to include a slightly different normalization algorithm (as has happened in the
past)?
A lowest common denominator approach would tend to try to create a portable
program by using only "portable" system calls. This leads to programs that are
leaky and not in fact portable.
Adopt a Superset Approach
Make the best use of each platform you support by adopting a superset approach.
For example, a portable backup program should sync btimes (the created time of a
file or folder) correctly between Windows systems, and should not destroy or
alter btimes, even though btimes are not supported on Linux systems. The same
portable backup program should sync Unix permissions correctly between Linux
systems, and should not destroy or alter Unix permissions, even though Unix
permissions are not supported on Windows systems.
Handle different filesystems by making your program act like a more advanced
filesystem. Support a superset of all possible features: case-sensitivity,
case-preservation, Unicode form sensitivity, Unicode form preservation, Unix
permissions, high-resolution nanosecond timestamps, extended attributes etc.
Once you have case-preservation in your program, you can always implement
case-insensitivity if you need to interact with a case-insensitive filesystem.
But if you forego case-preservation in your program, you cannot interact safely
with a case-preserving filesystem. The same is true for Unicode form
preservation and timestamp resolution preservation.
If a filesystem provides you with a filename in a mix of lowercase and
uppercase, then keep the filename in the exact case given. If a filesystem
provides you with a filename in mixed Unicode form or NFC or NFD (or NFKC or
NFKD), then keep the filename in the exact byte sequence given. If a filesystem
provides you with a millisecond timestamp, then keep the timestamp in
millisecond resolution.
When you work with a lesser filesystem, you can always downsample appropriately,
with comparison functions as required by the behavior of the filesystem on which
your program is running. If you know that the filesystem does not support Unix
permissions, then you should not expect to read the same Unix permissions you
write. If you know that the filesystem does not preserve case, then you should
be prepared to see
ABC
in a directory listing when your program creates
abc
.
But if you know that the filesystem does preserve case, then you should consider
ABC
to be a different filename to
abc
, when detecting file renames or if the
filesystem is case-sensitive.
Case Preservation
You may create a directory called
test/abc
and be surprised to see sometimes
that
fs.readdir('test')
returns
['ABC']
. This is not a bug in Node. Node
returns the filename as the filesystem stores it, and not all filesystems
support case-preservation. Some filesystems convert all filenames to uppercase
(or lowercase).
Unicode Form Preservation
Case preservation and Unicode form preservation are similar concepts. To
understand why Unicode form should be preserved , make sure that you first
understand why case should be preserved. Unicode form preservation is just as
simple when understood correctly.
Unicode can encode the same characters using several different byte sequences.
Several strings may look the same, but have different byte sequences. When
working with UTF-8 strings, be careful that your expectations are in line with
how Unicode works. Just as you would not expect all UTF-8 characters to encode
to a single byte, you should not expect several UTF-8 strings that look the same
to the human eye to have the same byte representation. This may be an
expectation that you can have of ASCII, but not of UTF-8.
You may create a directory called
test/café
(NFC Unicode form with byte
sequence
<63 61 66 c3 a9>
and
string.length === 5
) and be surprised to see
sometimes that
fs.readdir('test')
returns
['café']
(NFD Unicode form with
byte sequence
<63 61 66 65 cc 81>
and
string.length === 6
). This is not a
bug in Node. Node.js returns the filename as the filesystem stores it, and not
all filesystems support Unicode form preservation.
HFS+, for example, will normalize all filenames to a form almost always the same
as NFD form. Do not expect HFS+ to behave the same as NTFS or EXT4 and
vice-versa. Do not try to change data permanently through normalization as a
leaky abstraction to paper over Unicode differences between filesystems. This
would create problems without solving any. Rather, preserve Unicode form and use
normalization as a comparison function only.
Unicode Form Insensitivity
Unicode form insensitivity and Unicode form preservation are two different
filesystem behaviors often mistaken for each other. Just as case-insensitivity
has sometimes been incorrectly implemented by permanently normalizing filenames
to uppercase when storing and transmitting filenames, so Unicode form
insensitivity has sometimes been incorrectly implemented by permanently
normalizing filenames to a certain Unicode form (NFD in the case of HFS+) when
storing and transmitting filenames. It is possible and much better to implement
Unicode form insensitivity without sacrificing Unicode form preservation, by
using Unicode normalization for comparison only.
Comparing Different Unicode Forms
Node.js provides
string.normalize('NFC' / 'NFD')
which you can use to normalize a
UTF-8 string to either NFC or NFD. You should never store the output from this
function but only use it as part of a comparison function to test whether two
UTF-8 strings would look the same to the user.
You can use
string1.normalize('NFC') === string2.normalize('NFC')
or
string1.normalize('NFD') === string2.normalize('NFD')
as your comparison
function. Which form you use does not matter.
Normalization is fast but you may want to use a cache as input to your
comparison function to avoid normalizing the same string many times over. If the
string is not present in the cache then normalize it and cache it. Be careful
not to store or persist the cache, use it only as a cache.
Note that using
normalize()
requires that your version of Node.js include ICU
(otherwise
normalize()
will just return the original string). If you download
the latest version of Node.js from the website then it will include ICU.
Timestamp Resolution
You may set the
mtime
(the modified time) of a file to
1444291759414
(millisecond resolution) and be surprised to see sometimes that
fs.stat
returns the new mtime as
1444291759000
(1-second resolution) or
1444291758000
(2-second resolution). This is not a bug in Node. Node.js returns
the timestamp as the filesystem stores it, and not all filesystems support
nanosecond, millisecond or 1-second timestamp resolution. Some filesystems even
have very coarse resolution for the atime timestamp in particular, e.g. 24 hours
for some FAT filesystems.
Do Not Corrupt Filenames and Timestamps Through Normalization
Filenames and timestamps are user data. Just as you would never automatically
rewrite user file data to uppercase the data or normalize
CRLF
to
LF
line-endings, so you should never change, interfere or corrupt filenames or
timestamps through case / Unicode form / timestamp normalization. Normalization
should only ever be used for comparison, never for altering data.
Normalization is effectively a lossy hash code. You can use it to test for
certain kinds of equivalence (e.g. do several strings look the same even though
they have different byte sequences) but you can never use it as a substitute for
the actual data. Your program should pass on filename and timestamp data as is.
Your program can create new data in NFC (or in any combination of Unicode form
it prefers) or with a lowercase or uppercase filename, or with a 2-second
resolution timestamp, but your program should not corrupt existing user data by
imposing case / Unicode form / timestamp normalization. Rather, adopt a superset
approach and preserve case, Unicode form and timestamp resolution in your
program. That way, you will be able to interact safely with filesystems which do
the same.
Use Normalization Comparison Functions Appropriately
Make sure that you use case / Unicode form / timestamp comparison functions
appropriately. Do not use a case-insensitive filename comparison function if you
are working on a case-sensitive filesystem. Do not use a Unicode form
insensitive comparison function if you are working on a Unicode form sensitive
filesystem (e.g. NTFS and most Linux filesystems which preserve both NFC and NFD
or mixed Unicode forms). Do not compare timestamps at 2-second resolution if you
are working on a nanosecond timestamp resolution filesystem.
Be Prepared for Slight Differences in Comparison Functions
Be careful that your comparison functions match those of the filesystem (or
probe the filesystem if possible to see how it would actually compare).
Case-insensitivity for example is more complex than a simple
toLowerCase()
comparison. In fact,
toUpperCase()
is usually better than
toLowerCase()
(since it handles certain foreign language characters differently). But better
still would be to probe the filesystem since every filesystem has its own case
comparison table baked in.
As an example, Apple's HFS+ normalizes filenames to NFD form but this NFD form
is actually an older version of the current NFD form and may sometimes be
slightly different from the latest Unicode standard's NFD form. Do not expect
HFS+ NFD to be exactly the same as Unicode NFD all the time.

---

# JavaScript Asynchronous Programming and Callbacks
> **Fonte original:** [https://nodejs.org/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks](https://nodejs.org/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks)

JavaScript Asynchronous Programming and Callbacks
Asynchronicity in Programming Languages
Computers are asynchronous by design.
Asynchronous means that things can happen independently of the main program flow.
In the current consumer computers, every program runs for a specific time slot and then it stops its execution to let another program continue their execution. This thing runs in a cycle so fast that it's impossible to notice. We think our computers run many programs simultaneously, but this is an illusion (except on multiprocessor machines).
Programs internally use
interrupts
, a signal that's emitted to the processor to gain the attention of the system.
Let's not go into the internals of this now, but just keep in mind that it's normal for programs to be asynchronous and halt their execution until they need attention, allowing the computer to execute other things in the meantime. When a program is waiting for a response from the network, it cannot halt the processor until the request finishes.
Normally, programming languages are synchronous and some provide a way to manage asynchronicity in the language or through libraries. C, Java, C#, PHP, Go, Ruby, Swift, and Python are all synchronous by default. Some of them handle async operations by using threads, spawning a new process.
JavaScript
JavaScript is
synchronous
by default and is single threaded. This means that code cannot create new threads and run in parallel.
Lines of code are executed in series, one after another, for example:
const
a
=
1
;
const
b
=
2
;
const
c
=
a
*
b
;
console
.
log
(
c
)
;
doSomething
()
;
JavaScript
Copy to clipboard
But JavaScript was born inside the browser, its main job, in the beginning, was to respond to user actions, like
onClick
,
onMouseOver
,
onChange
,
onSubmit
and so on. How could it do this with a synchronous programming model?
The answer was in its environment. The
browser
provides a way to do it by providing a set of APIs that can handle this kind of functionality.
More recently, Node.js introduced a non-blocking I/O environment to extend this concept to file access, network calls and so on.
Callbacks
You can't know when a user is going to click a button. So, you
define an event handler for the click event
. This event handler accepts a function, which will be called when the event is triggered:
document
.
getElementById
(
'
button
'
)
.
addEventListener
(
'
click
'
,
()
=>
{
// item clicked
}
)
;
JavaScript
Copy to clipboard
This is the so-called
callback
.
A callback is a simple function that's passed as a value to another function, and will only be executed when the event happens. We can do this because JavaScript has first-class functions, which can be assigned to variables and passed around to other functions (called
higher-order functions
)
It's common to wrap all your client code in a
load
event listener on the
window
object, which runs the callback function only when the page is ready:
window
.
addEventListener
(
'
load
'
,
()
=>
{
// window loaded
// do what you want
}
)
;
JavaScript
Copy to clipboard
Callbacks are used everywhere, not just in DOM events.
One common example is by using timers:
setTimeout
(
()
=>
{
// runs after 2 seconds
},
2000
)
;
JavaScript
Copy to clipboard
XHR requests also accept a callback, in this example by assigning a function to a property that will be called when a particular event occurs (in this case, the state of the request changes):
const
xhr
=
new
XMLHttpRequest
()
;
xhr
.
onreadystatechange
=
()
=>
{
if
(
xhr
.
readyState
===
4
)
{
if
(
xhr
.
status
===
200
)
{
console
.
log
(
xhr
.
responseText
)
;
}
else
{
console
.
error
(
'
error
'
)
;
}
}
}
;
xhr
.
open
(
'
GET
'
,
'
https://yoursite.com
'
)
;
xhr
.
send
()
;
JavaScript
Copy to clipboard
Handling errors in callbacks
How do you handle errors with callbacks? One very common strategy is to use what Node.js adopted: the first parameter in any callback function is the error object:
error-first callbacks
If there is no error, the object is
null
. If there is an error, it contains some description of the error and other information.
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
fs
.
readFile
(
'
/file.json
'
,
(
err
,
data
)
=>
{
if
(
err
)
{
// handle error
console
.
log
(
err
)
;
return;
}
// no errors, process data
console
.
log
(
data
)
;
}
)
;
JavaScript
Copy to clipboard
The problem with callbacks
Callbacks are great for simple cases!
However every callback adds a level of nesting, and when you have lots of callbacks, the code starts to be complicated very quickly:
window
.
addEventListener
(
'
load
'
,
()
=>
{
document
.
getElementById
(
'
button
'
)
.
addEventListener
(
'
click
'
,
()
=>
{
setTimeout
(
()
=>
{
items
.
forEach
(
item
=>
{
// your code here
}
)
;
},
2000
)
;
}
)
;
}
)
;
JavaScript
Copy to clipboard
This is just a simple 4-levels code, but I've seen much more levels of nesting and it's not fun.
How do we solve this?
Alternatives to callbacks
Starting with ES6, JavaScript introduced several features that help us with asynchronous code that do not involve using callbacks: Promises (ES6) and Async/Await (ES2017).

---

# Asynchronous flow control
> **Fonte original:** [https://nodejs.org/learn/asynchronous-work/asynchronous-flow-control](https://nodejs.org/learn/asynchronous-work/asynchronous-flow-control)

Asynchronous flow control
The material in this post is heavily inspired by
Mixu's Node.js Book
.
At its core, JavaScript is designed to be non-blocking on the "main" thread, this is where views are rendered. You can imagine the importance of this in the browser. When the main thread becomes blocked it results in the infamous "freezing" that end users dread, and no other events can be dispatched resulting in the loss of data acquisition, for example.
This creates some unique constraints that only a functional style of programming can cure. This is where callbacks come in to the picture.
However, callbacks can become challenging to handle in more complicated procedures. This often results in "callback hell" where multiple nested functions with callbacks make the code more challenging to read, debug, organize, etc.
async1
(
function
(
input
,
result1
)
{
async2
(
function
(
result2
)
{
async3
(
function
(
result3
)
{
async4
(
function
(
result4
)
{
async5
(
function
(
output
)
{
// do something with output
}
)
;
}
)
;
}
)
;
}
)
;
}
)
;
JavaScript
Copy to clipboard
Of course, in real life there would most likely be additional lines of code to handle
result1
,
result2
, etc., thus, the length and complexity of this issue usually results in code that looks much more messy than the example above.
This is where
functions
come in to great use. More complex operations are made up of many functions:
initiator style / input
middleware
terminator
The "initiator style / input" is the first function in the sequence. This function will accept the original input, if any, for the operation. The operation is an executable series of functions, and the original input will primarily be:
variables in a global environment
direct invocation with or without arguments
values obtained by file system or network requests
Network requests can be incoming requests initiated by a foreign network, by another application on the same network, or by the app itself on the same or foreign network.
A middleware function will return another function, and a terminator function will invoke the callback. The following illustrates the flow to network or file system requests. Here the latency is 0 because all these values are available in memory.
function
final
(
someInput
,
callback
)
{
callback
(
`
${
someInput
}
and terminated by executing callback
`
)
;
}
function
middleware
(
someInput
,
callback
)
{
return
final
(
`
${
someInput
}
touched by middleware
`
,
callback
)
;
}
function
initiate
()
{
const
someInput
=
'
hello this is a function
'
;
middleware
(
someInput
,
function
(
result
)
{
console
.
log
(
result
)
;
// requires callback to `return` result
}
)
;
}
initiate
()
;
JavaScript
Copy to clipboard
State management
Functions may or may not be state dependent. State dependency arises when the input or other variable of a function relies on an outside function.
In this way there are two primary strategies for state management:
passing in variables directly to a function, and
acquiring a variable value from a cache, session, file, database, network, or other outside source.
Note, I did not mention global variable. Managing state with global variables is often a sloppy anti-pattern that makes it difficult or impossible to guarantee state. Global variables in complex programs should be avoided when possible.
Control flow
If an object is available in memory, iteration is possible, and there will not be a change to control flow:
function
getSong
()
{
let
_song
=
''
;
let
i
=
100
;
for
(
i
;
i
>
0
;
i
-=
1
)
{
_song
+=
`
${
i
}
beers on the wall, you take one down and pass it around,
${
i
-
1
}
bottles of beer on the wall
\n
`
;
if
(
i
===
1
)
{
_song
+=
"
Hey let's get some more beer
"
;
}
}
return
_song
;
}
function
singSong
(
_song
)
{
if
(
!
_song
)
{
throw
new
Error
(
"
song is '' empty, FEED ME A SONG!
"
)
;
}
console
.
log
(
_song
)
;
}
const
song
=
getSong
()
;
// this will work
singSong
(
song
)
;
JavaScript
Copy to clipboard
However, if the data exists outside of memory the iteration will no longer work:
function
getSong
()
{
let
_song
=
''
;
let
i
=
100
;
for
(
i
;
i
>
0
;
i
-=
1
)
{
setTimeout
(
function
()
{
_song
+=
`
${
i
}
beers on the wall, you take one down and pass it around,
${
i
-
1
}
bottles of beer on the wall
\n
`
;
if
(
i
===
1
)
{
_song
+=
"
Hey let's get some more beer
"
;
}
},
0
)
;
}
return
_song
;
}
function
singSong
(
_song
)
{
if
(
!
_song
)
{
throw
new
Error
(
"
song is '' empty, FEED ME A SONG!
"
)
;
}
console
.
log
(
_song
)
;
}
const
song
=
getSong
(
'
beer
'
)
;
// this will not work
singSong
(
song
)
;
// Uncaught Error: song is '' empty, FEED ME A SONG!
JavaScript
Copy to clipboard
Why did this happen?
setTimeout
instructs the CPU to store the instructions elsewhere on the bus, and instructs that the data is scheduled for pickup at a later time. Thousands of CPU cycles pass before the function hits again at the 0 millisecond mark, the CPU fetches the instructions from the bus and executes them. The only problem is that song ('') was returned thousands of cycles prior.
The same situation arises in dealing with file systems and network requests. The main thread simply cannot be blocked for an indeterminate period of time-- therefore, we use callbacks to schedule the execution of code in time in a controlled manner.
You will be able to perform almost all of your operations with the following 3 patterns:
In series:
functions will be executed in a strict sequential order, this one is most similar to
for
loops.
// operations defined elsewhere and ready to execute
const
operations
=
[
{
func
:
function1
,
args
:
args1
},
{
func
:
function2
,
args
:
args2
},
{
func
:
function3
,
args
:
args3
},
]
;
function
executeFunctionWithArgs
(
operation
,
callback
)
{
// executes function
const
{
args
,
func
}
=
operation
;
func
(
args
,
callback
)
;
}
function
serialProcedure
(
operation
)
{
if
(
!
operation
)
{
process
.
exit
(
0
)
;
// finished
}
executeFunctionWithArgs
(
operation
,
function
(
result
)
{
// continue AFTER callback
serialProcedure
(
operations
.
shift
())
;
}
)
;
}
serialProcedure
(
operations
.
shift
())
;
JavaScript
Copy to clipboard
Limited in series:
functions will be executed in a strict sequential order, but with a limit on the number of executions. Useful when you need to process a large list but with a cap on the number of items successfully processed.
let
successCount
=
0
;
function
final
()
{
console
.
log
(
`
dispatched
${
successCount
}
emails
`
)
;
console
.
log
(
'
finished
'
)
;
}
function
dispatch
(
recipient
,
callback
)
{
// `sendMail` is a hypothetical SMTP client
sendMail
(
{
subject
:
'
Dinner tonight
'
,
message
:
'
We have lots of cabbage on the plate. You coming?
'
,
smtp
:
recipient
.
email
,
},
callback
)
;
}
function
sendOneMillionEmailsOnly
()
{
getListOfTenMillionGreatEmails
(
function
(
err
,
bigList
)
{
if
(
err
)
{
throw
err
;
}
function
serial
(
recipient
)
{
if
(
!
recipient
||
successCount
>=
1000000
)
{
return
final
()
;
}
dispatch
(
recipient
,
function
(
_err
)
{
if
(
!
_err
)
{
successCount
+=
1
;
}
serial
(
bigList
.
pop
())
;
}
)
;
}
serial
(
bigList
.
pop
())
;
}
)
;
}
sendOneMillionEmailsOnly
()
;
JavaScript
Copy to clipboard
Full parallel:
when ordering is not an issue, such as emailing a list of 1,000,000 email recipients.
let
count
=
0
;
let
success
=
0
;
const
failed
=
[]
;
const
recipients
=
[
{
name
:
'
Bart
'
,
email
:
'
bart@tld
'
},
{
name
:
'
Marge
'
,
email
:
'
marge@tld
'
},
{
name
:
'
Homer
'
,
email
:
'
homer@tld
'
},
{
name
:
'
Lisa
'
,
email
:
'
lisa@tld
'
},
{
name
:
'
Maggie
'
,
email
:
'
maggie@tld
'
},
]
;
function
dispatch
(
recipient
,
callback
)
{
// `sendMail` is a hypothetical SMTP client
sendMail
(
{
subject
:
'
Dinner tonight
'
,
message
:
'
We have lots of cabbage on the plate. You coming?
'
,
smtp
:
recipient
.
email
,
},
callback
)
;
}
function
final
(
result
)
{
console
.
log
(
`
Result:
${
result
.
count
}
attempts
\
&
${
result
.
success
}
succeeded emails
`
)
;
if
(
result
.
failed
.
length)
{
console
.
log
(
`
Failed to send to:
\
\n
${
result
.
failed
.
join
(
'
\n
'
)
}
\n
`
)
;
}
}
recipients
.
forEach
(
function
(
recipient
)
{
dispatch
(
recipient
,
function
(
err
)
{
if
(
!
err
)
{
success
+=
1
;
}
else
{
failed
.
push
(
recipient
.
name
)
;
}
count
+=
1
;
if
(
count
===
recipients
.
length)
{
final
(
{
count
,
success
,
failed
,
}
)
;
}
}
)
;
}
)
;
JavaScript
Copy to clipboard
Each has its own use cases, benefits, and issues you can experiment and read about in more detail. Most importantly, remember to modularize your operations and use callbacks! If you feel any doubt, treat everything as if it were middleware!

---

# Discover Promises in Node.js
> **Fonte original:** [https://nodejs.org/learn/asynchronous-work/discover-promises-in-nodejs](https://nodejs.org/learn/asynchronous-work/discover-promises-in-nodejs)

Discover Promises in Node.js
A
Promise
is a special object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Essentially, a Promise is a placeholder for a value that is not yet available but will be in the future.
Think of a Promise like ordering a pizza: you don't get it right away, but the delivery person promises to bring it to you later. You don't know
exactly
when, but you know the outcome will either be "pizza delivered" or "something went wrong."
Promise States
A Promise can be in one of three states:
Pending
: The initial state, where the asynchronous operation is still running.
Fulfilled
: The operation completed successfully, and the Promise is now resolved with a value.
Rejected
: The operation failed, and the Promise is settled with a reason (usually an error).
When you order the pizza, you're in the pending state, hungry and hopeful. If the pizza arrives hot and cheesy, you've entered the fulfilled state. But if the restaurant calls to say they've dropped your pizza on floor, you're in the rejected state.
Regardless of whether your dinner ends in joy or disappointment, once there's a final outcome, the Promise is considered
settled
.
Basic Syntax of a Promise
One of the most common ways to create a Promise is using the
new Promise()
constructor. The constructor takes a function with two parameters:
resolve
and
reject
. These functions are used to transition the Promise from the
pending
state to either
fulfilled
or
rejected
.
If an error is thrown inside the executor function, the Promise will be rejected with that error.
The return value of the executor function is ignored: only
resolve
or
reject
should be used to settle the Promise.
const
myPromise
=
new
Promise
(
(
resolve
,
reject
)
=>
{
const
success
=
true;
if
(
success
)
{
resolve
(
'
Operation was successful!
'
)
;
}
else
{
reject
(
'
Something went wrong.
'
)
;
}
}
)
;
JavaScript
Copy to clipboard
In the above example:
If the
success
condition is
true
, the Promise is fulfilled and the value
'Operation was successful!'
is passed to the
resolve
function.
If the
success
condition is
false
, the Promise is rejected and the error
'Something went wrong.'
is passed to the
reject
function.
Handling Promises with
.then()
,
.catch()
, and
.finally()
Once a Promise is created, you can handle the outcome by using the
.then()
,
.catch()
, and
.finally()
methods.
.then()
is used to handle a fulfilled Promise and access its result.
.catch()
is used to handle a rejected Promise and catch any errors that may occur.
.finally()
is used to handle a settled Promise, regardless of whether the Promise resolved or rejected.
const
myPromise
=
new
Promise
(
(
resolve
,
reject
)
=>
{
const
success
=
true;
if
(
success
)
{
resolve
(
'
Operation was successful!
'
)
;
}
else
{
reject
(
'
Something went wrong.
'
)
;
}
}
)
;
myPromise
.
then
(
result
=>
{
console
.
log
(
result
)
;
// This will run if the Promise is fulfilled
}
)
.
catch
(
error
=>
{
console
.
error
(
error
)
;
// This will run if the Promise is rejected
}
)
.
finally
(
()
=>
{
console
.
log
(
'
The promise has completed
'
)
;
// This will run when the Promise is settled
}
)
;
JavaScript
Copy to clipboard
Chaining Promises
One of the great features of Promises is that they allow you to chain multiple asynchronous operations together. When you chain Promises, each
.then()
block waits for the previous one to complete before it runs.
const
{
setTimeout
:
delay
}
=
require
(
'
node:timers/promises
'
)
;
const
promise
=
delay
(
1000
)
.
then
(
()
=>
'
First task completed
'
)
;
promise
.
then
(
result
=>
{
console
.
log
(
result
)
;
// 'First task completed'
return
delay
(
1000
)
.
then
(
()
=>
'
Second task completed
'
)
;
// Return a second Promise
}
)
.
then
(
result
=>
{
console
.
log
(
result
)
;
// 'Second task completed'
}
)
.
catch
(
error
=>
{
console
.
error
(
error
)
;
// If any Promise is rejected, catch the error
}
)
;
JavaScript
Copy to clipboard
Using Async/Await with Promises
One of the best ways to work with Promises in modern JavaScript is using
async/await
. This allows you to write asynchronous code that looks synchronous, making it much easier to read and maintain.
async
is used to define a function that returns a Promise.
await
is used inside an
async
function to pause execution until a Promise settles.
async
function
performTasks
()
{
try
{
const
result1
=
await
promise1
;
console
.
log
(
result1
)
;
// 'First task completed'
const
result2
=
await
promise2
;
console
.
log
(
result2
)
;
// 'Second task completed'
}
catch
(
error
)
{
console
.
error
(
error
)
;
// Catches any rejection or error
}
}
performTasks
()
;
JavaScript
Copy to clipboard
In the
performTasks
function, the
await
keyword ensures that each Promise is settled before moving on to the next statement. This leads to a more linear and readable flow of asynchronous code.
Essentially, the code above will execute the same as if the user wrote:
promise1
.
then
(
function
(
result1
)
{
console
.
log
(
result1
)
;
return
promise2
;
}
)
.
then
(
function
(
result2
)
{
console
.
log
(
result2
)
;
}
)
.
catch
(
function
(
error
)
{
console
.
log
(
error
)
;
}
)
;
JavaScript
Copy to clipboard
Top-Level Await
When using
ECMAScript Modules
, the module itself is treated as a top-level scope that supports asynchronous operations natively. This means that you can use
await
at the top level
without needing an
async
function.
import
{
setTimeout
as
delay
}
from
'
node:timers/promises
'
;
await
delay
(
1000
)
;
JavaScript
Copy to clipboard
Async/await can be much more intricate than the simple examples provided. James Snell, a member of the Node.js Technical Steering Committee, has an
in-depth presentation
that explores the complexities of Promises and async/await.
Promise-based Node.js APIs
Node.js provides
Promise-based versions
of many of its core APIs, especially in cases where asynchronous operations were traditionally handled with callbacks. This makes it easier to work with Node.js APIs and Promises, and reduces the risk of "callback hell."
For example, the
fs
(file system) module has a Promise-based API under
fs.promises
:
const
fs
=
require
(
'
node:fs
'
)
.
promises
;
// Or, you can import the promisified version directly:
// const fs = require('node:fs/promises');
async
function
readFile
()
{
try
{
const
data
=
await
fs
.
readFile
(
'
example.txt
'
,
'
utf8
'
)
;
console
.
log
(
data
)
;
}
catch
(
err
)
{
console
.
error
(
'
Error reading file:
'
,
err
)
;
}
}
readFile
()
;
JavaScript
Copy to clipboard
In this example,
fs.readFile()
returns a Promise, which we handle using
async/await
syntax to read the contents of a file asynchronously.
Advanced Promise Methods
JavaScript's
Promise
global provides several powerful methods that help manage multiple asynchronous tasks more effectively:
M
Promise.all
Promise
.
all
():
void
This method accepts an array of Promises and returns a new Promise that resolves once all the Promises are fulfilled. If any Promise is rejected,
Promise.all()
will immediately reject. However, even if rejection occurs, the Promises continue to execute. When handling a large number of Promises, especially in batch processing, using this function can strain the system's memory.
const
{
setTimeout
:
delay
}
=
require
(
'
node:timers/promises
'
)
;
const
fetchData1
=
delay
(
1000
)
.
then
(
()
=>
'
Data from API 1
'
)
;
const
fetchData2
=
delay
(
2000
)
.
then
(
()
=>
'
Data from API 2
'
)
;
Promise
.
all
([
fetchData1
,
fetchData2
])
.
then
(
results
=>
{
console
.
log
(
results
)
;
// ['Data from API 1', 'Data from API 2']
}
)
.
catch
(
error
=>
{
console
.
error
(
'
Error:
'
,
error
)
;
}
)
;
JavaScript
Copy to clipboard
M
Promise.allSettled
Promise
.
allSettled
():
void
This method waits for all promises to either resolve or reject and returns an array of objects that describe the outcome of each Promise.
const
promise1
=
Promise
.
resolve
(
'
Success
'
)
;
const
promise2
=
Promise
.
reject
(
'
Failed
'
)
;
Promise
.
allSettled
([
promise1
,
promise2
])
.
then
(
results
=>
{
console
.
log
(
results
)
;
// [ { status: 'fulfilled', value: 'Success' }, { status: 'rejected', reason: 'Failed' } ]
}
)
;
JavaScript
Copy to clipboard
Unlike
Promise.all()
,
Promise.allSettled()
does not short-circuit on failure. It waits for all promises to settle, even if some reject. This provides better error handling for batch operations, where you may want to know the status of all tasks, regardless of failure.
M
Promise.race
Promise
.
race
():
void
This method resolves or rejects as soon as the first Promise settles, whether it resolves or rejects. Regardless of which promise settles first, all promises are fully executed.
const
{
setTimeout
:
delay
}
=
require
(
'
node:timers/promises
'
)
;
const
task1
=
delay
(
2000
)
.
then
(
()
=>
'
Task 1 done
'
)
;
const
task2
=
delay
(
1000
)
.
then
(
()
=>
'
Task 2 done
'
)
;
Promise
.
race
([
task1
,
task2
])
.
then
(
result
=>
{
console
.
log
(
result
)
;
// 'Task 2 done' (since task2 finishes first)
}
)
;
JavaScript
Copy to clipboard
M
Promise.any
Promise
.
any
():
void
This method resolves as soon as one of the Promises resolves. If all promises are rejected, it will reject with an
AggregateError
.
const
{
setTimeout
:
delay
}
=
require
(
'
node:timers/promises
'
)
;
const
api1
=
delay
(
2000
)
.
then
(
()
=>
'
API 1 success
'
)
;
const
api2
=
delay
(
1000
)
.
then
(
()
=>
'
API 2 success
'
)
;
const
api3
=
delay
(
1500
)
.
then
(
()
=>
'
API 3 success
'
)
;
Promise
.
any
([
api1
,
api2
,
api3
])
.
then
(
result
=>
{
console
.
log
(
result
)
;
// 'API 2 success' (since it resolves first)
}
)
.
catch
(
error
=>
{
console
.
error
(
'
All promises rejected:
'
,
error
)
;
}
)
;
JavaScript
Copy to clipboard
Promise.reject()
and
Promise.resolve()
These methods create a rejected or resolved Promise directly.
Promise
.
resolve
(
'
Resolved immediately
'
)
.
then
(
result
=>
{
console
.
log
(
result
)
;
// 'Resolved immediately'
}
)
;
JavaScript
Copy to clipboard
M
Promise.try
Promise
.
try
():
void
Promise.try()
is a method that executes a given function, whether it's synchronous or asynchronous, and wraps the result in a promise. If the function throws an error or returns a rejected promise,
Promise.try()
will return a rejected promise. If the function completes successfully, the returned promise will be fulfilled with its value.
This can be particularly useful for starting promise chains in a consistent way, especially when working with code that might throw errors synchronously.
function
mightThrow
()
{
if
(
Math
.
random
()
>
0.5
)
{
throw
new
Error
(
'
Oops, something went wrong!
'
)
;
}
return
'
Success!
'
;
}
Promise
.
try
(
mightThrow
)
.
then
(
result
=>
{
console
.
log
(
'
Result:
'
,
result
)
;
}
)
.
catch
(
err
=>
{
console
.
error
(
'
Caught error:
'
,
err
.
message
)
;
}
)
;
JavaScript
Copy to clipboard
In this example,
Promise.try()
ensures that if
mightThrow()
throws an error, it will be caught in the
.catch()
block, making it easier to handle both sync and async errors in one place.
M
Promise.withResolvers
Promise
.
withResolvers
():
void
This method creates a new promise along with its associated resolve and reject functions, and returns them in a convenient object. This is used, for example, when you need to create a promise but resolve or reject it later from outside the executor function.
const
{
promise
,
resolve
,
reject
}
=
Promise
.
withResolvers
()
;
setTimeout
(
()
=>
{
resolve
(
'
Resolved successfully!
'
)
;
},
1000
)
;
promise
.
then
(
value
=>
{
console
.
log
(
'
Success:
'
,
value
)
;
}
)
;
JavaScript
Copy to clipboard
In this example,
Promise.withResolvers()
gives you full control over when and how the promise is resolved or rejected, without needing to define the executor function inline. This pattern is commonly used in event-driven programming, timeouts, or when integrating with non-promise-based APIs.
Error Handling with Promises
Handling errors in Promises ensures your application behaves correctly in case of unexpected situations.
You can use
.catch()
to handle any errors or rejections that occur during the execution of Promises.
myPromise
.
then
(
result
=>
console
.
log
(
result
))
.
catch
(
error
=>
console
.
error
(
error
))
// Handles the rejection
.
finally
(
()
=>
console
.
log
(
'
Promise completed
'
))
;
// Runs regardless of promise resolution
JavaScript
Copy to clipboard
Alternatively, when using
async/await
, you can use a
try/catch
block to catch and handle errors.
async
function
performTask
()
{
try
{
const
result
=
await
myPromise
;
console
.
log
(
result
)
;
}
catch
(
error
)
{
console
.
error
(
error
)
;
// Handles any errors
}
finally
{
// This code is executed regardless of failure
console
.
log
(
'
performTask() completed
'
)
;
}
}
performTask
()
;
JavaScript
Copy to clipboard
Scheduling Tasks in the Event Loop
In addition to Promises, Node.js provides several other mechanisms for scheduling tasks in the event loop.
M
queueMicrotask
queueMicrotask
():
void
queueMicrotask()
is used to schedule a microtask, which is a lightweight task that runs after the currently executing script but before any other I/O events or timers. Microtasks include tasks like Promise resolutions and other asynchronous operations that are prioritized over regular tasks.
queueMicrotask
(
()
=>
{
console
.
log
(
'
Microtask is executed
'
)
;
}
)
;
console
.
log
(
'
Synchronous task is executed
'
)
;
JavaScript
Copy to clipboard
In the above example, "Microtask is executed" will be logged after "Synchronous task is executed," but before any I/O operations like timers.
M
process.nextTick
process
.
nextTick
():
void
process.nextTick()
is used to schedule a callback to be executed immediately after the current operation completes. This is useful for situations where you want to ensure that a callback is executed as soon as possible, but still after the current execution context.
process
.
nextTick
(
()
=>
{
console
.
log
(
'
Next tick callback
'
)
;
}
)
;
console
.
log
(
'
Synchronous task executed
'
)
;
JavaScript
Copy to clipboard
M
setImmediate
setImmediate
():
void
setImmediate()
schedules a callback to be executed in the check phase of the Node.js
event loop
, which runs after the poll phase, where most I/O callbacks are processed.
setImmediate
(
()
=>
{
console
.
log
(
'
Immediate callback
'
)
;
}
)
;
console
.
log
(
'
Synchronous task executed
'
)
;
JavaScript
Copy to clipboard
When to Use Each
Use
queueMicrotask()
for tasks that need to run immediately after the current script and before any I/O or timer callbacks, typically for Promise resolutions.
Use
process.nextTick()
for tasks that should execute before any I/O events, often useful for deferring operations or handling errors synchronously.
Use
setImmediate()
for tasks that should run after the poll phase, once most I/O callbacks have been processed.
Because these tasks execute outside of the current synchronous flow, uncaught exceptions inside these callbacks won't be caught by surrounding
try/catch
blocks and may crash the application if not properly managed (e.g., by attaching
.catch()
to Promises or using global error handlers like
process.on('uncaughtException')
).
For more information on the Event Loop, and the execution order of various phases, please see the related article,
The Node.js Event Loop
.

---

# Discover JavaScript Timers
> **Fonte original:** [https://nodejs.org/learn/asynchronous-work/discover-javascript-timers](https://nodejs.org/learn/asynchronous-work/discover-javascript-timers)

Discover JavaScript Timers
M
setTimeout
setTimeout
():
void
When writing JavaScript code, you might want to delay the execution of a function.
This is the job of
setTimeout
. You specify a callback function to execute later, and a value expressing how later you want it to run, in milliseconds:
setTimeout
(
()
=>
{
// runs after 2 seconds
},
2000
)
;
setTimeout
(
()
=>
{
// runs after 50 milliseconds
},
50
)
;
JavaScript
Copy to clipboard
This syntax defines a new function. You can call whatever other function you want in there, or you can pass an existing function name, and a set of parameters:
const
myFunction
=
(
firstParam
,
secondParam
)
=>
{
// do something
}
;
// runs after 2 seconds
setTimeout
(
myFunction
,
2000
,
firstParam
,
secondParam
)
;
JavaScript
Copy to clipboard
setTimeout
returns a
Timeout
instance in Node.js, whereas in browsers it returns a numeric timer ID. This object or ID can be used to cancel the scheduled function execution:
const
timeout
=
setTimeout
(
()
=>
{
// should run after 2 seconds
},
2000
)
;
// I changed my mind
clearTimeout
(
timeout
)
;
JavaScript
Copy to clipboard
Zero delay
If you specify the timeout delay to
0
, the callback function will be executed as soon as possible, but after the current function execution:
setTimeout
(
()
=>
{
console
.
log
(
'
after
'
)
;
},
0
)
;
console
.
log
(
'
before
'
)
;
JavaScript
Copy to clipboard
This code will print
before
after
Shell
Copy to clipboard
This is especially useful to avoid blocking the CPU on intensive tasks and let other functions be executed while performing a heavy calculation, by queuing functions in the scheduler.
Some browsers (IE and Edge) implement a
setImmediate()
method that does this same exact functionality, but it's not standard and
unavailable on other browsers
. But it's a standard function in Node.js.
M
setInterval
setInterval
():
void
setInterval
is a function similar to
setTimeout
, with a difference: instead of running the callback function once, it will run it forever, at the specific time interval you specify (in milliseconds):
setInterval
(
()
=>
{
// runs every 2 seconds
},
2000
)
;
JavaScript
Copy to clipboard
The function above runs every 2 seconds unless you tell it to stop, using
clearInterval
, passing it the interval id that
setInterval
returned:
const
timeout
=
setInterval
(
()
=>
{
// runs every 2 seconds
},
2000
)
;
clearInterval
(
timeout
)
;
JavaScript
Copy to clipboard
It's common to call
clearInterval
inside the setInterval callback function, to let it auto-determine if it should run again or stop. For example this code runs something unless App.somethingIWait has the value
arrived
:
const
interval
=
setInterval
(
()
=>
{
if
(
App
.
somethingIWait
===
'
arrived
'
)
{
clearInterval
(
interval
)
;
}
// otherwise do things
},
100
)
;
JavaScript
Copy to clipboard
Recursive setTimeout
setInterval
starts a function every n milliseconds, without any consideration about when a function finished its execution.
If a function always takes the same amount of time, it's all fine:
0
1000
2000
3000
|
|
|
|
|
|
|
|
|
[██████████]
|
|
|
[exe
script]
|
|
|
[██████████]
|
|
|
|
[██████████]
|
|
|
[exe
script]
|
|
|
[██████████]
|
|
|
|
[██████████]
|
|
|
[exe
script]
|
|
|
[██████████]
|__________|___________|___________|____
Maybe the function takes different execution times, depending on network conditions for example:
0
1000
2000
3000
|
|
|
|
|
|
|
|
|
[██████████]
|
|
|
[exe
script]
|
|
|
[██████████]
|
|
|
|
[████████████████████]
|
|
[
execute
script
]
|
|
[████████████████████]
|
|
|
[██████████]
|
|
|
[exe
script]
|
|
|
[██████████]
|__________|___________|___________|____
And maybe one long execution overlaps the next one:
0
1000
2000
3000
4000
|
|
|
|
|
|
[████████████████████]
|
|
|
[
execute
script
]
|
|
|
[████████████████████]
|
|
|
[███████████████████████████]
|
|
[
execute
script
]
|
|
[███████████████████████████]
|
|
|
|
[██████████████]
|
|
|
[execute
script]
|
|
|
[██████████████]
|__________|___________|___________|___________|__
To avoid this, you can schedule a recursive setTimeout to be called when the callback function finishes:
const
myFunction
=
()
=>
{
// do something
setTimeout
(
myFunction
,
1000
)
;
}
;
setTimeout
(
myFunction
,
1000
)
;
JavaScript
Copy to clipboard
to achieve this scenario:
0
1000
2000
3000
|
|
|
|
|
[█████████████]
|
[█████████████]
|
[
exec
script
]>──1s──<[
exec
script
]
|
[█████████████]
|
[█████████████]
|
|
|
|
|__________|____________|___________|__________
setTimeout
and
setInterval
are available in Node.js, through the
Timers module
.
Node.js also provides
setImmediate()
, which schedules a callback to execute during the check phase of the event loop. Unlike
setTimeout(() => {}, 0)
, it is not generally equivalent because their callbacks are executed in different phases of the event loop and their execution order depends on the execution context.

---

# Overview of Blocking vs Non-Blocking
> **Fonte original:** [https://nodejs.org/learn/asynchronous-work/overview-of-blocking-vs-non-blocking](https://nodejs.org/learn/asynchronous-work/overview-of-blocking-vs-non-blocking)

Overview of Blocking vs Non-Blocking
This overview covers the difference between
blocking
and
non-blocking
calls in Node.js. This overview will refer to the event loop and libuv but no
prior knowledge of those topics is required. Readers are assumed to have a
basic understanding of the JavaScript language and Node.js
callback pattern
.
"I/O" refers primarily to interaction with the system's disk and
network supported by
libuv
.
Blocking
Blocking
is when the execution of additional JavaScript in the Node.js
process must wait until a non-JavaScript operation completes. This happens
because the event loop is unable to continue running JavaScript while a
blocking
operation is occurring.
In Node.js, JavaScript that exhibits poor performance due to being CPU intensive
rather than waiting on a non-JavaScript operation, such as I/O, isn't typically
referred to as
blocking
. Synchronous methods in the Node.js standard library
that use libuv are the most commonly used
blocking
operations. Native
modules may also have
blocking
methods.
All of the I/O methods in the Node.js standard library provide asynchronous
versions, which are
non-blocking
, and accept callback functions. Some
methods also have
blocking
counterparts, which have names that end with
Sync
.
Comparing Code
Blocking
methods execute
synchronously
and
non-blocking
methods
execute
asynchronously
.
Using the File System module as an example, this is a
synchronous
file read:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
data
=
fs
.
readFileSync
(
'
/file.md
'
)
;
// blocks here until file is read
JavaScript
Copy to clipboard
And here is an equivalent
asynchronous
example:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
fs
.
readFile
(
'
/file.md
'
,
(
err
,
data
)
=>
{
if
(
err
)
{
throw
err
;
}
}
)
;
JavaScript
Copy to clipboard
The first example appears simpler than the second but has the disadvantage of
the second line
blocking
the execution of any additional JavaScript until
the entire file is read. Note that in the synchronous version if an error is
thrown it will need to be caught or the process will crash. In the asynchronous
version, it is up to the author to decide whether an error should throw as
shown.
Let's expand our example a little bit:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
data
=
fs
.
readFileSync
(
'
/file.md
'
)
;
// blocks here until file is read
console
.
log
(
data
)
;
moreWork
()
;
// will run after console.log
JavaScript
Copy to clipboard
And here is a similar, but not equivalent asynchronous example:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
fs
.
readFile
(
'
/file.md
'
,
(
err
,
data
)
=>
{
if
(
err
)
{
throw
err
;
}
console
.
log
(
data
)
;
}
)
;
moreWork
()
;
// will run before console.log
JavaScript
Copy to clipboard
In the first example above,
console.log
will be called before
moreWork()
. In
the second example
fs.readFile()
is
non-blocking
so JavaScript execution
can continue and
moreWork()
will be called first. The ability to run
moreWork()
without waiting for the file read to complete is a key design
choice that allows for higher throughput.
Concurrency and Throughput
JavaScript execution in Node.js is single threaded, so concurrency refers to the
event loop's capacity to execute JavaScript callback functions after completing
other work. Any code that is expected to run in a concurrent manner must allow
the event loop to continue running as non-JavaScript operations, like I/O, are
occurring.
As an example, let's consider a case where each request to a web server takes
50ms to complete and 45ms of that 50ms is database I/O that can be done
asynchronously. Choosing
non-blocking
asynchronous operations frees up that
45ms per request to handle other requests. This is a significant difference in
capacity just by choosing to use
non-blocking
methods instead of
blocking
methods.
The event loop is different than models in many other languages where additional
threads may be created to handle concurrent work.
Dangers of Mixing Blocking and Non-Blocking Code
There are some patterns that should be avoided when dealing with I/O. Let's look
at an example:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
fs
.
readFile
(
'
/file.md
'
,
(
err
,
data
)
=>
{
if
(
err
)
{
throw
err
;
}
console
.
log
(
data
)
;
}
)
;
fs
.
unlinkSync
(
'
/file.md
'
)
;
JavaScript
Copy to clipboard
In the above example,
fs.unlinkSync()
is likely to be run before
fs.readFile()
, which would delete
file.md
before it is actually read. A
better way to write this, which is completely
non-blocking
and guaranteed to
execute in the correct order is:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
fs
.
readFile
(
'
/file.md
'
,
(
readFileErr
,
data
)
=>
{
if
(
readFileErr
)
{
throw
readFileErr
;
}
console
.
log
(
data
)
;
fs
.
unlink
(
'
/file.md
'
,
unlinkErr
=>
{
if
(
unlinkErr
)
{
throw
unlinkErr
;
}
}
)
;
}
)
;
JavaScript
Copy to clipboard
The above places a
non-blocking
call to
fs.unlink()
within the callback of
fs.readFile()
which guarantees the correct order of operations.
Additional Resources
libuv

---

# The Node.js Event Loop
> **Fonte original:** [https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick](https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick)

The Node.js Event Loop
What is the Event Loop?
The event loop is what allows Node.js to perform non-blocking I/O
operations — despite the fact that a single JavaScript thread is used by default — by
offloading operations to the system kernel whenever possible.
Since most modern kernels are multi-threaded, they can handle multiple
operations executing in the background. When one of these operations
completes, the kernel tells Node.js so that the appropriate callback
may be added to the
poll
queue to eventually be executed. We'll explain
this in further detail later in this topic.
Event Loop Explained
When Node.js starts, it initializes the event loop, processes the
provided input script (or drops into the
REPL
, which is not covered in
this document) which may make async API calls, schedule timers, or call
process.nextTick()
, then begins processing the event loop.
The following diagram shows a simplified overview of the event loop's
order of operations.
┌───────────────────────────┐
│
timers
│
└─────────────┬─────────────┘
│
v
┌───────────────────────────┐
┌─>│
pending
callbacks
│
│
└─────────────┬─────────────┘
│
┌─────────────┴─────────────┐
│
│
idle,
prepare
│
│
└─────────────┬─────────────┘
┌───────────────┐
│
┌─────────────┴─────────────┐
│
incoming:
│
│
│
poll
│<─────┤
connections,
│
│
└─────────────┬─────────────┘
│
data,
etc.
│
│
┌─────────────┴─────────────┐
└───────────────┘
│
│
check
│
│
└─────────────┬─────────────┘
│
┌─────────────┴─────────────┐
│
│
close
callbacks
│
│
└─────────────┬─────────────┘
│
┌─────────────┴─────────────┐
└──┤
timers
│
└───────────────────────────┘
Each box will be referred to as a "phase" of the event loop.
Each phase has a FIFO queue of callbacks to execute. While each phase is
special in its own way, generally, when the event loop enters a given
phase, it will perform any operations specific to that phase, then
execute callbacks in that phase's queue until the queue has been
exhausted or the maximum number of callbacks has executed. When the
queue has been exhausted or the callback limit is reached, the event
loop will move to the next phase, and so on.
Since any of these operations may schedule
more
operations and new
events processed in the
poll
phase are queued by the kernel, poll
events can be queued while polling events are being processed. As a
result, long running callbacks can allow the poll phase to run much
longer than a timer's threshold. See the
timers
and
poll
sections for more details.
There is a slight discrepancy between the Windows and the
Unix/Linux implementation, but that's not important for this
demonstration. The most important parts are here. There are actually
seven or eight steps, but the ones we care about — ones that Node.js
actually uses - are those above.
Phases Overview
pending callbacks
: executes I/O callbacks deferred to the next loop
iteration.
idle, prepare
: only used internally.
poll
: retrieve new I/O events; execute I/O related callbacks (almost
all with the exception of close callbacks, the ones scheduled by timers,
and
setImmediate()
); node will block here when appropriate.
check
:
setImmediate()
callbacks are invoked here.
close callbacks
: some close callbacks, e.g.
socket.on('close', ...)
timers
: this phase executes callbacks scheduled by
setTimeout()
and
setInterval()
. Additionally, these callbacks can execute before entering the event loop.
This sometimes happens for setTimeout(() =>
...
, 0) outside the I/O loop.
Between each run of the event loop, Node.js checks if it is waiting for
any asynchronous I/O or timers and shuts down cleanly if there are not
any.
Starting with libuv 1.45.0 (Node.js 20), timers are run after the
poll
phase in each event loop iteration. In earlier versions, timers
were run before polling. To preserve backwards compatibility, libuv
1.45.0 still runs timers once before entering the event loop . This change can affect the timing of
setImmediate()
callbacks and how they interact with timers in certain
scenarios.
Phases in Detail
pending callbacks
This phase executes callbacks for some system operations such as types
of TCP errors. For example if a TCP socket receives
ECONNREFUSED
when
attempting to connect, some *nix systems want to wait to report the
error. This will be queued to execute in the
pending callbacks
phase.
poll
The
poll
phase has two main functions:
Calculating how long it should block and poll for I/O, then
Processing events in the
poll
queue.
When the event loop enters the
poll
phase
and there are no timers
scheduled
, one of two things will happen:
If the
poll
queue
is not empty
, the event loop will iterate
through its queue of callbacks executing them synchronously until
either the queue has been exhausted, or the system-dependent hard limit
is reached.
If the
poll
queue
is empty
, one of two more things will
happen:
If scripts have been scheduled by
setImmediate()
, the event loop
will end the
poll
phase and continue to the
check
phase to
execute those scheduled scripts.
If scripts
have not
been scheduled by
setImmediate()
, the
event loop will wait for callbacks to be added to the queue, then
execute them immediately.
Once the
poll
queue is empty the event loop will check for timers
whose time thresholds have been reached
. If one or more timers are
ready, the event loop will wrap back to the
timers
phase to execute
those timers' callbacks.
check
This phase allows the event loop to execute callbacks immediately after the
poll
phase has completed. If the
poll
phase becomes idle and
scripts have been queued with
setImmediate()
, the event loop may
continue to the
check
phase rather than waiting.
setImmediate()
is actually a special timer that runs in a separate
phase of the event loop. It uses a libuv API that schedules callbacks to
execute after the
poll
phase has completed.
Generally, as the code is executed, the event loop will eventually hit
the
poll
phase where it will wait for an incoming connection, request,
etc. However, if a callback has been scheduled with
setImmediate()
and the
poll
phase becomes idle, it will end and continue to the
check
phase rather than waiting for
poll
events.
close callbacks
If a socket or handle is closed abruptly (e.g.
socket.destroy()
), the
'close'
event will be emitted in this phase. Otherwise it will be
emitted via
process.nextTick()
.
timers
A timer specifies the
threshold
after which
a provided callback
may be executed
rather than the
exact
time a person
wants it to
be executed
. Timers callbacks will run as early as they can be
scheduled after the specified amount of time has passed; however,
Operating System scheduling or the running of other callbacks may delay
them.
Technically, the
poll
phase
controls when timers are executed.
For example, say you schedule a timeout to execute after a 100 ms
threshold, then your script starts asynchronously reading a file which
takes 95 ms:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
function
someAsyncOperation
(
callback
)
{
// Assume this takes 95ms to complete
fs
.
readFile
(
'
/path/to/file
'
,
callback
)
;
}
const
timeoutScheduled
=
Date
.
now
()
;
setTimeout
(
()
=>
{
const
delay
=
Date
.
now
()
-
timeoutScheduled
;
console
.
log
(
`
${
delay
}
ms have passed since I was scheduled
`
)
;
},
100
)
;
// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation
(
()
=>
{
const
startCallback
=
Date
.
now
()
;
// do something that will take 10ms...
while
(
Date
.
now
()
-
startCallback
<
10
)
{
// do nothing
}
}
)
;
JavaScript
Copy to clipboard
When the event loop enters the
poll
phase, it has an empty queue
(
fs.readFile()
has not completed), so it will wait for the number of ms
remaining until the soonest timer's threshold is reached. While it is
waiting 95 ms pass,
fs.readFile()
finishes reading the file and its
callback which takes 10 ms to complete is added to the
poll
queue and
executed. When the callback finishes, there are no more callbacks in the
queue, so the event loop will see that the threshold of the soonest
timer has been reached then wrap back to the
timers
phase to execute
the timer's callback. In this example, you will see that the total delay
between the timer being scheduled and its callback being executed will
be 105ms.
To prevent the
poll
phase from starving the event loop,
libuv
(the C library that implements the Node.js
event loop and all of the asynchronous behaviors of the platform)
also has a hard maximum (system dependent) before it stops polling for
more events.
setImmediate()
vs
setTimeout()
setImmediate()
and
setTimeout()
are similar, but behave in different
ways depending on when they are called.
setImmediate()
is designed to execute a script once the
current
poll
phase completes.
setTimeout()
schedules a script to be run after a minimum threshold
in ms has elapsed.
The order in which the timers are executed will vary depending on the
context in which they are called. If both are called from within the
main module, then timing will be bound by the performance of the process
(which can be impacted by other applications running on the machine).
For example, if we run the following script which is not within an I/O
cycle (i.e. the main module), the order in which the two timers are
executed is non-deterministic, as it is bound by the performance of the
process:
JS
BASH
// timeout_vs_immediate.js
setTimeout
(
()
=>
{
console
.
log
(
'
timeout
'
)
;
},
0
)
;
setImmediate
(
()
=>
{
console
.
log
(
'
immediate
'
)
;
}
)
;
JavaScript
Copy to clipboard
However, if you move the two calls within an I/O cycle, the immediate
callback is always executed first:
CJS
ESM
BASH
// timeout_vs_immediate.js
const
fs
=
require
(
'
node:fs
'
)
;
fs
.
readFile
(
__filename
,
()
=>
{
setTimeout
(
()
=>
{
console
.
log
(
'
timeout
'
)
;
},
0
)
;
setImmediate
(
()
=>
{
console
.
log
(
'
immediate
'
)
;
}
)
;
}
)
;
JavaScript
Copy to clipboard
The main advantage to using
setImmediate()
over
setTimeout()
is
setImmediate()
will always be executed before any timers if scheduled
within an I/O cycle, independently of how many timers are present.
M
process.nextTick
process
.
nextTick
():
void
Understanding
process.nextTick()
You may have noticed that
process.nextTick()
was not displayed in the
diagram, even though it's a part of the asynchronous API. This is because
process.nextTick()
is not technically part of the event loop. Instead,
the
nextTickQueue
will be processed after the current operation is
completed, regardless of the current phase of the event loop. Here,
an
operation
is defined as a transition from the
underlying C/C++ handler, and handling the JavaScript that needs to be
executed.
Looking back at our diagram, any time you call
process.nextTick()
in a
given phase, all callbacks passed to
process.nextTick()
will be
resolved before the event loop continues. This can create some bad
situations because
it allows you to "starve" your I/O by making
recursive
process.nextTick()
calls
, which prevents the event loop
from reaching the
poll
phase.
Why would that be allowed?
Why would something like this be included in Node.js? Part of it is a
design philosophy where an API should always be asynchronous even where
it doesn't have to be. Take this code snippet for example:
function
apiCall
(
arg
,
callback
)
{
if
(
typeof
arg
!==
'
string
'
)
{
return
process
.
nextTick
(
callback
,
new
TypeError
(
'
argument should be string
'
)
)
;
}
}
JavaScript
Copy to clipboard
The snippet does an argument check and if it's not correct, it will pass
the error to the callback. The API updated fairly recently to allow
passing arguments to
process.nextTick()
allowing it to take any
arguments passed after the callback to be propagated as the arguments to
the callback so you don't have to nest functions.
What we're doing is passing an error back to the user but only
after
we have allowed the rest of the user's code to execute. By using
process.nextTick()
we guarantee that
apiCall()
always runs its
callback
after
the rest of the user's code and
before
the event loop
is allowed to proceed. To achieve this, the JS call stack is allowed to
unwind then immediately execute the provided callback which allows a
person to make recursive calls to
process.nextTick()
without reaching a
RangeError: Maximum call stack size exceeded
from v8.
This philosophy can lead to some potentially problematic situations.
Take this snippet for example:
let
bar
=
null;
// this has an asynchronous signature, but calls callback synchronously
function
someAsyncApiCall
(
callback
)
{
callback
()
;
}
// the callback is called before `someAsyncApiCall` completes.
someAsyncApiCall
(
()
=>
{
// since someAsyncApiCall hasn't completed, bar hasn't been assigned any value
console
.
log
(
'
bar
'
,
bar
)
;
// null
}
)
;
bar
=
1
;
JavaScript
Copy to clipboard
The user defines
someAsyncApiCall()
to have an asynchronous signature,
but it actually operates synchronously. When it is called, the callback
provided to
someAsyncApiCall()
is called in the same phase of the
event loop because
someAsyncApiCall()
doesn't actually do anything
asynchronously. As a result, the callback tries to reference
bar
even
though it may not have that variable in scope yet, because the script has not
been able to run to completion.
By placing the callback in a
process.nextTick()
, the script still has the
ability to run to completion, allowing all the variables, functions,
etc., to be initialized prior to the callback being called. It also has
the advantage of not allowing the event loop to continue. It may be
useful for the user to be alerted to an error before the event loop is
allowed to continue. Here is the previous example using
process.nextTick()
:
let
bar
=
null;
function
someAsyncApiCall
(
callback
)
{
process
.
nextTick
(
callback
)
;
}
someAsyncApiCall
(
()
=>
{
console
.
log
(
'
bar
'
,
bar
)
;
// 1
}
)
;
bar
=
1
;
JavaScript
Copy to clipboard
Here's another real world example:
const
server
=
net
.
createServer
(
()
=>
{}
)
.
listen
(
8080
)
;
server
.
on
(
'
listening
'
,
()
=>
{}
)
;
JavaScript
Copy to clipboard
When only a port is passed, the port is bound immediately. So, the
'listening'
callback could be called immediately. The problem is that the
.on('listening')
callback will not have been set by that time.
To get around this, the
'listening'
event is queued in a
nextTick()
to allow the script to run to completion. This allows the user to set
any event handlers they want.
process.nextTick()
vs
setImmediate()
We have two calls that are similar as far as users are concerned, but
their names are confusing.
process.nextTick()
fires immediately on the same phase
setImmediate()
fires on the following iteration or 'tick' of the
event loop
In essence, the names should be swapped.
process.nextTick()
fires more
immediately than
setImmediate()
, but this is an artifact of the past
which is unlikely to change. Making this switch would break a large
percentage of the packages on npm. Every day more new modules are being
added, which means every day we wait, more potential breakages occur.
While they are confusing, the names themselves won't change.
We recommend developers use
setImmediate()
in all cases because it's
easier to reason about.
Why use
process.nextTick()
?
There are two main reasons:
Allow users to handle errors, cleanup any then unneeded resources, or
perhaps try the request again before the event loop continues.
At times it's necessary to allow a callback to run after the call
stack has unwound but before the event loop continues.
One example is to match the user's expectations. Simple example:
const
server
=
net
.
createServer
()
;
server
.
on
(
'
connection
'
,
conn
=>
{}
)
;
server
.
listen
(
8080
)
;
server
.
on
(
'
listening
'
,
()
=>
{}
)
;
JavaScript
Copy to clipboard
Say that
listen()
is run at the beginning of the event loop, but the
listening callback is placed in a
setImmediate()
. Unless a
hostname is passed, binding to the port will happen immediately. For
the event loop to proceed, it must hit the
poll
phase, which means
there is a non-zero chance that a connection could have been received
allowing the connection event to be fired before the listening event.
Another example is extending an
EventEmitter
and emitting an
event from within the constructor:
CJS
ESM
const
EventEmitter
=
require
(
'
node:events
'
)
;
class
MyEmitter
extends
EventEmitter
{
constructor
()
{
super
()
;
this
.
emit
(
'
event
'
)
;
}
}
const
myEmitter
=
new
MyEmitter
()
;
myEmitter
.
on
(
'
event
'
,
()
=>
{
console
.
log
(
'
an event occurred!
'
)
;
}
)
;
JavaScript
Copy to clipboard
You can't emit an event from the constructor immediately
because the script will not have processed to the point where the user
assigns a callback to that event. So, within the constructor itself,
you can use
process.nextTick()
to set a callback to emit the event
after the constructor has finished, which provides the expected results:
CJS
ESM
const
EventEmitter
=
require
(
'
node:events
'
)
;
class
MyEmitter
extends
EventEmitter
{
constructor
()
{
super
()
;
// use nextTick to emit the event once a handler is assigned
process
.
nextTick
(
()
=>
{
this
.
emit
(
'
event
'
)
;
}
)
;
}
}
const
myEmitter
=
new
MyEmitter
()
;
myEmitter
.
on
(
'
event
'
,
()
=>
{
console
.
log
(
'
an event occurred!
'
)
;
}
)
;
JavaScript
Copy to clipboard

---

# The Node.js Event Emitter
> **Fonte original:** [https://nodejs.org/learn/asynchronous-work/the-nodejs-event-emitter](https://nodejs.org/learn/asynchronous-work/the-nodejs-event-emitter)

The Node.js Event emitter
If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.
On the backend side, Node.js offers us the option to build a similar system using the
events
module
.
This module, in particular, offers the
EventEmitter
class, which we'll use to handle our events.
You initialize that using
CJS
ESM
const
EventEmitter
=
require
(
'
node:events
'
)
;
const
eventEmitter
=
new
EventEmitter
()
;
JavaScript
Copy to clipboard
This object exposes, among many others, the
on
and
emit
methods.
emit
is used to trigger an event
on
is used to add a callback function that's going to be executed when the event is triggered
For example, let's create a
start
event, and as a matter of providing a sample, we react to that by just logging to the console:
eventEmitter
.
on
(
'
start
'
,
()
=>
{
console
.
log
(
'
started
'
)
;
}
)
;
JavaScript
Copy to clipboard
When we run
eventEmitter
.
emit
(
'
start
'
)
;
the event handler function is triggered, and we get the console log.
You can pass arguments to the event handler by passing them as additional arguments to
emit()
:
eventEmitter
.
on
(
'
start
'
,
number
=>
{
console
.
log
(
`
started
${
number
}
`
)
;
}
)
;
eventEmitter
.
emit
(
'
start
'
,
23
)
;
JavaScript
Copy to clipboard
Multiple arguments:
eventEmitter
.
on
(
'
start
'
,
(
start
,
end
)
=>
{
console
.
log
(
`
started from
${
start
}
to
${
end
}
`
)
;
}
)
;
eventEmitter
.
emit
(
'
start
'
,
1
,
100
)
;
JavaScript
Copy to clipboard
The EventEmitter object also exposes several other methods to interact with events, like
once()
: add a one-time listener
removeListener()
/
off()
: remove an event listener from an event
removeAllListeners()
: remove all listeners for an event
You can read more about these methods in the
official documentation
.

---

# Understanding process.nextTick()
> **Fonte original:** [https://nodejs.org/learn/asynchronous-work/understanding-processnexttick](https://nodejs.org/learn/asynchronous-work/understanding-processnexttick)

Understanding process.nextTick()
As you try to understand the Node.js event loop, one important part of it is
process.nextTick()
.
Every time the runtime calls back into JavaScript for an event, we call it a tick.
When we pass a function to
process.nextTick()
, we schedule it to run immediately after the current call stack completes, before the event loop continues and before any other queued tasks or phases are processed:
process
.
nextTick
(
()
=>
{
// do something
}
)
;
JavaScript
Copy to clipboard
The event loop is busy processing the current function code. When this operation ends, the JS engine runs all the functions passed to
nextTick
calls during that operation.
It's the way we can tell the JS engine to process a function asynchronously (after the current function), but as soon as possible, not queue it.
Calling
setTimeout(() => {}, 0)
schedules the callback for a future event loop iteration, much later than when using
process.nextTick()
, which executes before the event loop continues.
Use
nextTick()
when you want to make sure that in the next event loop iteration that code is already executed.
To learn more about the order of execution and how the event loop works, check out
the dedicated article

---

# Understanding setImmediate()
> **Fonte original:** [https://nodejs.org/learn/asynchronous-work/understanding-setimmediate](https://nodejs.org/learn/asynchronous-work/understanding-setimmediate)

Understanding setImmediate()
When you want to execute some piece of code asynchronously, but as soon as possible, one option is to use the
setImmediate()
function provided by Node.js:
setImmediate
(
()
=>
{
// run something
}
)
;
JavaScript
Copy to clipboard
Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop.
How is
setImmediate()
different from
setTimeout(() => {}, 0)
(passing a 0ms timeout), and from
process.nextTick()
and
Promise.then()
?
A function passed to
process.nextTick()
is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before
setTimeout
and
setImmediate
.
A
setTimeout()
callback with a 0ms delay is very similar to
setImmediate()
. The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.
A
process.nextTick
callback is added to
process.nextTick queue
. A
Promise.then()
callback is added to
promises microtask queue
. A
setTimeout
,
setImmediate
callback is added to
macrotask queue
.
Event loop executes tasks in
process.nextTick queue
first, and then executes
promises microtask queue
, and then executes
macrotask queue
.
Here is an example to show the order between
setImmediate()
,
process.nextTick()
and
Promise.then()
:
const
baz
=
()
=>
console
.
log
(
'
baz
'
)
;
const
foo
=
()
=>
console
.
log
(
'
foo
'
)
;
const
zoo
=
()
=>
console
.
log
(
'
zoo
'
)
;
const
start
=
()
=>
{
console
.
log
(
'
start
'
)
;
setImmediate
(
baz
)
;
new
Promise
(
(
resolve
,
reject
)
=>
{
resolve
(
'
bar
'
)
;
}
)
.
then
(
resolve
=>
{
console
.
log
(
resolve
)
;
process
.
nextTick
(
zoo
)
;
}
)
;
process
.
nextTick
(
foo
)
;
}
;
start
()
;
// start foo bar zoo baz
JavaScript
Copy to clipboard
This code will first call
start()
, then call
foo()
in
process.nextTick queue
. After that, it will handle
promises microtask queue
, which prints
bar
and adds
zoo()
in
process.nextTick queue
at the same time. Then it will call
zoo()
which has just been added. In the end, the
baz()
in
macrotask queue
is called.
The principle aforementioned holds true in CommonJS cases, but keep in mind in ES Modules, e.g.
mjs
files, the execution order will be different:
// start bar foo zoo baz
This is because the ES Module being loaded is wrapped as an asynchronous operation, and thus the entire script is actually already in the
promises microtask queue
. So when the promise is immediately resolved, its callback is appended to the
microtask
queue. Node.js will attempt to clear the queue until moving to any other queue, and hence you will see it outputs
bar
first.

---

# Don't Block the Event Loop
> **Fonte original:** [https://nodejs.org/learn/asynchronous-work/dont-block-the-event-loop](https://nodejs.org/learn/asynchronous-work/dont-block-the-event-loop)

Don't Block the Event Loop (or the Worker Pool)
Should you read this guide?
If you're writing anything more complicated than a brief command-line script, reading this should help you write higher-performance, more-secure applications.
This document is written with Node.js servers in mind, but the concepts apply to complex Node.js applications as well.
Where OS-specific details vary, this document is Linux-centric.
Summary
Node.js runs JavaScript code in the Event Loop (initialization and callbacks), and offers a Worker Pool to handle expensive tasks like file I/O.
Node.js scales well, sometimes better than more heavyweight approaches like Apache.
The secret to the scalability of Node.js is that it uses a small number of threads to handle many clients.
If Node.js can make do with fewer threads, then it can spend more of your system's time and memory working on clients rather than on paying space and time overheads for threads (memory, context-switching).
But because Node.js has only a few threads, you must structure your application to use them wisely.
Here's a good rule of thumb for keeping your Node.js server speedy:
Node.js is fast when the work associated with each client at any given time is "small"
.
This applies to callbacks on the Event Loop and tasks on the Worker Pool.
Why should I avoid blocking the Event Loop and the Worker Pool?
Node.js uses a small number of threads to handle many clients.
In Node.js there are two types of threads: one Event Loop (aka the main loop, main thread, event thread, etc.), and a pool of
k
Workers in a Worker Pool (aka the threadpool).
If a thread is taking a long time to execute a callback (Event Loop) or a task (Worker), we call it "blocked".
While a thread is blocked working on behalf of one client, it cannot handle requests from any other clients.
This provides two motivations for blocking neither the Event Loop nor the Worker Pool:
Performance: If you regularly perform heavyweight activity on either type of thread, the
throughput
(requests/second) of your server will suffer.
Security: If it is possible that for certain input one of your threads might block, a malicious client could submit this "evil input", make your threads block, and keep them from working on other clients. This would be a
Denial of Service
attack.
A quick review of Node
Node.js uses the Event-Driven Architecture: it has an Event Loop for orchestration and a Worker Pool for expensive tasks.
What code runs on the Event Loop?
When they begin, Node.js applications first complete an initialization phase,
require
'ing modules and registering callbacks for events.
Node.js applications then enter the Event Loop, responding to incoming client requests by executing the appropriate callback.
This callback executes synchronously, and may register asynchronous requests to continue processing after it completes.
The callbacks for these asynchronous requests will also be executed on the Event Loop.
The Event Loop will also fulfill the non-blocking asynchronous requests made by its callbacks, e.g., network I/O.
In summary, the Event Loop executes the JavaScript callbacks registered for events, and is also responsible for fulfilling non-blocking asynchronous requests like network I/O.
What code runs on the Worker Pool?
The Worker Pool of Node.js is implemented in libuv (
docs
), which exposes a general task submission API.
Node.js uses the Worker Pool to handle "expensive" tasks.
This includes I/O for which an operating system does not provide a non-blocking version, as well as particularly CPU-intensive tasks.
These are the Node.js module APIs that make use of this Worker Pool:
I/O-intensive
DNS
:
dns.lookup()
,
dns.lookupService()
.
File System
: All file system APIs except
fs.FSWatcher()
and those that are explicitly synchronous use libuv's threadpool.
CPU-intensive
Crypto
:
crypto.pbkdf2()
,
crypto.scrypt()
,
crypto.randomBytes()
,
crypto.randomFill()
,
crypto.generateKeyPair()
.
Zlib
: All zlib APIs except those that are explicitly synchronous use libuv's threadpool.
In many Node.js applications, these APIs are the only sources of tasks for the Worker Pool. Applications and modules that use a
C++ add-on
can submit other tasks to the Worker Pool.
For the sake of completeness, we note that when you call one of these APIs from a callback on the Event Loop, the Event Loop pays some minor setup costs as it enters the Node.js C++ bindings for that API and submits a task to the Worker Pool.
These costs are negligible compared to the overall cost of the task, which is why the Event Loop is offloading it.
When submitting one of these tasks to the Worker Pool, Node.js provides a pointer to the corresponding C++ function in the Node.js C++ bindings.
How does Node.js decide what code to run next?
Abstractly, the Event Loop and the Worker Pool maintain queues for pending events and pending tasks, respectively.
In truth, the Event Loop does not actually maintain a queue.
Instead, it has a collection of file descriptors that it asks the operating system to monitor, using a mechanism like
epoll
(Linux),
kqueue
(OSX), event ports (Solaris), or
IOCP
(Windows).
These file descriptors correspond to network sockets, any files it is watching, and so on.
When the operating system says that one of these file descriptors is ready, the Event Loop translates it to the appropriate event and invokes the callback(s) associated with that event.
You can learn more about this process
here
.
In contrast, the Worker Pool uses a real queue whose entries are tasks to be processed.
A Worker pops a task from this queue and works on it, and when finished the Worker raises an "At least one task is finished" event for the Event Loop.
What does this mean for application design?
In a one-thread-per-client system like Apache, each pending client is assigned its own thread.
If a thread handling one client blocks, the operating system will interrupt it and give another client a turn.
The operating system thus ensures that clients that require a small amount of work are not penalized by clients that require more work.
Because Node.js handles many clients with few threads, if a thread blocks handling one client's request, then pending client requests may not get a turn until the thread finishes its callback or task.
The fair treatment of clients is thus the responsibility of your application
.
This means that you shouldn't do too much work for any client in any single callback or task.
This is part of why Node.js can scale well, but it also means that you are responsible for ensuring fair scheduling.
The next sections talk about how to ensure fair scheduling for the Event Loop and for the Worker Pool.
Don't block the Event Loop
The Event Loop notices each new client connection and orchestrates the generation of a response.
All incoming requests and outgoing responses pass through the Event Loop.
This means that if the Event Loop spends too long at any point, all current and new clients will not get a turn.
You should make sure you never block the Event Loop.
In other words, each of your JavaScript callbacks should complete quickly.
This of course also applies to your
await
's, your
Promise.then
's, and so on.
A good way to ensure this is to reason about the
"computational complexity"
of your callbacks.
If your callback takes a constant number of steps no matter what its arguments are, then you'll always give every pending client a fair turn.
If your callback takes a different number of steps depending on its arguments, then you should think about how long the arguments might be.
Example 1: A constant-time callback.
app
.
get
(
'
/constant-time
'
,
(
req
,
res
)
=>
{
res
.
sendStatus
(
200
)
;
}
)
;
JavaScript
Copy to clipboard
Example 2: An
O(n)
callback. This callback will run quickly for small
n
and more slowly for large
n
.
app
.
get
(
'
/countToN
'
,
(
req
,
res
)
=>
{
const
n
=
req
.
query
.
n
;
// n iterations before giving someone else a turn
for
(
let
i
=
0
;
i
<
n
;
i
++
)
{
console
.
log
(
`
Iter
${
i
}
`
)
;
}
res
.
sendStatus
(
200
)
;
}
)
;
JavaScript
Copy to clipboard
Example 3: An
O(n^2)
callback. This callback will still run quickly for small
n
, but for large
n
it will run much more slowly than the previous
O(n)
example.
app
.
get
(
'
/countToN2
'
,
(
req
,
res
)
=>
{
const
n
=
req
.
query
.
n
;
// n^2 iterations before giving someone else a turn
for
(
let
i
=
0
;
i
<
n
;
i
++
)
{
for
(
let
j
=
0
;
j
<
n
;
j
++
)
{
console
.
log
(
`
Iter
${
i
}
.
${
j
}
`
)
;
}
}
res
.
sendStatus
(
200
)
;
}
)
;
JavaScript
Copy to clipboard
How careful should you be?
Node.js uses the Google V8 engine for JavaScript, which is quite fast for many common operations.
Exceptions to this rule are regexps and JSON operations, discussed below.
However, for complex tasks you should consider bounding the input and rejecting inputs that are too long.
That way, even if your callback has large complexity, by bounding the input you ensure the callback cannot take more than the worst-case time on the longest acceptable input.
You can then evaluate the worst-case cost of this callback and determine whether its running time is acceptable in your context.
Blocking the Event Loop: REDOS
One common way to block the Event Loop disastrously is by using a "vulnerable"
regular expression
.
Avoiding vulnerable regular expressions
A regular expression (regexp) matches an input string against a pattern.
We usually think of a regexp match as requiring a single pass through the input string ---
O(n)
time where
n
is the length of the input string.
In many cases, a single pass is indeed all it takes.
Unfortunately, in some cases the regexp match might require an exponential number of trips through the input string ---
O(2^n)
time.
An exponential number of trips means that if the engine requires
x
trips to determine a match, it will need
2*x
trips if we add only one more character to the input string.
Since the number of trips is linearly related to the time required, the effect of this evaluation will be to block the Event Loop.
A
vulnerable regular expression
is one on which your regular expression engine might take exponential time, exposing you to
REDOS
on "evil input".
Whether or not your regular expression pattern is vulnerable (i.e. the regexp engine might take exponential time on it) is actually a difficult question to answer, and varies depending on whether you're using Perl, Python, Ruby, Java, JavaScript, etc., but here are some rules of thumb that apply across all of these languages:
Avoid nested quantifiers like
(a+)*
. V8's regexp engine can handle some of these quickly, but others are vulnerable.
Avoid OR's with overlapping clauses, like
(a|a)*
. Again, these are sometimes-fast.
Avoid using backreferences, like
(a.*) \1
. No regexp engine can guarantee evaluating these in linear time.
If you're doing a simple string match, use
indexOf
or the local equivalent. It will be cheaper and will never take more than
O(n)
.
If you aren't sure whether your regular expression is vulnerable, remember that Node.js generally doesn't have trouble reporting a
match
even for a vulnerable regexp and a long input string.
The exponential behavior is triggered when there is a mismatch but Node.js can't be certain until it tries many paths through the input string.
A REDOS example
Here is an example vulnerable regexp exposing its server to REDOS:
app
.
get
(
'
/redos-me
'
,
(
req
,
res
)
=>
{
const
filePath
=
req
.
query
.
filePath
;
// REDOS
if
(
filePath
.
match
(
/(
\/.
+
)
+$
/
))
{
console
.
log
(
'
valid path
'
)
;
}
else
{
console
.
log
(
'
invalid path
'
)
;
}
res
.
sendStatus
(
200
)
;
}
)
;
JavaScript
Copy to clipboard
The vulnerable regexp in this example is a (bad!) way to check for a valid path on Linux.
It matches strings that are a sequence of "/"-delimited names, like "/a/b/c".
It is dangerous because it violates rule 1: it has a doubly-nested quantifier.
If a client queries with filePath
///.../\n
(100 /'s followed by a newline character that the regexp's "." won't match), then the Event Loop will take effectively forever, blocking the Event Loop.
This client's REDOS attack causes all other clients not to get a turn until the regexp match finishes.
For this reason, you should be leery of using complex regular expressions to validate user input.
Anti-REDOS Resources
There are some tools to check your regexps for safety, like
safe-regex
rxxr2
.
However, neither of these will catch all vulnerable regexps.
Another approach is to use a different regexp engine.
You could use the
node-re2
module, which uses Google's blazing-fast
RE2
regexp engine.
But be warned, RE2 is not 100% compatible with V8's regexps, so check for regressions if you swap in the node-re2 module to handle your regexps.
And particularly complicated regexps are not supported by node-re2.
If you're trying to match something "obvious", like a URL or a file path, find an example in a
regexp library
or use an npm module, e.g.
ip-regex
.
Blocking the Event Loop: Node.js core modules
Several Node.js core modules have synchronous expensive APIs, including:
Encryption
Compression
File system
Child process
These APIs are expensive, because they involve significant computation (encryption, compression), require I/O (file I/O), or potentially both (child process). These APIs are intended for scripting convenience, but are not intended for use in the server context. If you execute them on the Event Loop, they will take far longer to complete than a typical JavaScript instruction, blocking the Event Loop.
In a server,
you should not use the following synchronous APIs from these modules
:
Encryption:
crypto.randomBytes
(synchronous version)
crypto.randomFillSync
crypto.pbkdf2Sync
You should also be careful about providing large input to the encryption and decryption routines.
Compression:
zlib.inflateSync
zlib.deflateSync
File system:
Do not use the synchronous file system APIs. For example, if the file you access is in a
distributed file system
like
NFS
, access times can vary widely.
Child process:
child_process.spawnSync
child_process.execSync
child_process.execFileSync
This list is reasonably complete as of Node.js v9.
Blocking the Event Loop: JSON DOS
JSON.parse
and
JSON.stringify
are other potentially expensive operations.
While these are
O(n)
in the length of the input, for large
n
they can take surprisingly long.
If your server manipulates JSON objects, particularly those from a client, you should be cautious about the size of the objects or strings you work with on the Event Loop.
Example: JSON blocking. We create an object
obj
of size 2^21 and
JSON.stringify
it, run
indexOf
on the string, and then JSON.parse it. The
JSON.stringify
'd string is 50MB. It takes 0.7 seconds to stringify the object, 0.03 seconds to indexOf on the 50MB string, and 1.3 seconds to parse the string.
let
obj
=
{
a
:
1
}
;
const
iterations
=
20
;
// Expand the object exponentially by nesting it
for
(
let
i
=
0
;
i
<
iterations
;
i
++
)
{
obj
=
{
obj1
:
obj
,
obj2
:
obj
}
;
}
// Measure time to stringify the object
let
start
=
process
.
hrtime
()
;
const
jsonString
=
JSON
.
stringify
(
obj
)
;
let
duration
=
process
.
hrtime
(
start
)
;
console
.
log
(
'
JSON.stringify took
'
,
duration
)
;
// Measure time to search a string within the JSON
start
=
process
.
hrtime
()
;
const
index
=
jsonString
.
indexOf
(
'
nomatch
'
)
;
// Always -1
duration
=
process
.
hrtime
(
start
)
;
console
.
log
(
'
String.indexOf took
'
,
duration
)
;
// Measure time to parse the JSON back to an object
start
=
process
.
hrtime
()
;
const
parsed
=
JSON
.
parse
(
jsonString
)
;
duration
=
process
.
hrtime
(
start
)
;
console
.
log
(
'
JSON.parse took
'
,
duration
)
;
JavaScript
Copy to clipboard
There are npm modules that offer asynchronous JSON APIs. See for example:
JSONStream
, which has stream APIs.
Big-Friendly JSON
, which has stream APIs as well as asynchronous versions of the standard JSON APIs using the partitioning-on-the-Event-Loop paradigm outlined below.
Complex calculations without blocking the Event Loop
Suppose you want to do complex calculations in JavaScript without blocking the Event Loop.
You have two options: partitioning or offloading.
Partitioning
You could
partition
your calculations so that each runs on the Event Loop but regularly yields (gives turns to) other pending events.
In JavaScript it's easy to save the state of an ongoing task in a closure, as shown in example 2 below.
For a simple example, suppose you want to compute the average of the numbers
1
to
n
.
Example 1: Un-partitioned average, costs
O(n)
for
(
let
i
=
0
;
i
<
n
;
i
++
)
{
sum
+=
i
;
}
const
avg
=
sum
/
n
;
console
.
log
(
'
avg:
'
+
avg
)
;
JavaScript
Copy to clipboard
Example 2: Partitioned average, each of the
n
asynchronous steps costs
O(1)
.
function
asyncAvg
(
n
,
avgCB
)
{
// Save ongoing sum in JS closure.
let
sum
=
0
;
function
help
(
i
,
cb
)
{
sum
+=
i
;
if
(
i
==
n
)
{
cb
(
sum
)
;
return;
}
// "Asynchronous recursion".
// Schedule next operation asynchronously.
setImmediate
(
help
.
bind
(
null
,
i
+
1
,
cb
))
;
}
// Start the helper, with CB to call avgCB.
help
(
1
,
function
(
sum
)
{
const
avg
=
sum
/
n
;
avgCB
(
avg
)
;
}
)
;
}
asyncAvg
(
n
,
function
(
avg
)
{
console
.
log
(
'
avg of 1-n:
'
+
avg
)
;
}
)
;
JavaScript
Copy to clipboard
You can apply this principle to array iterations and so forth.
Offloading
If you need to do something more complex, partitioning is not a good option.
This is because partitioning uses only the Event Loop, and you won't benefit from multiple cores almost certainly available on your machine.
Remember, the Event Loop should orchestrate client requests, not fulfill them itself.
For a complicated task, move the work off of the Event Loop onto a Worker Pool.
How to offload
You have two options for a destination Worker Pool to which to offload work.
You can use the built-in Node.js Worker Pool by developing a
C++ addon
. On older versions of Node, build your C++ addon using
NAN
, and on newer versions use
N-API
.
node-webworker-threads
offers a JavaScript-only way to access the Node.js Worker Pool.
You can create and manage your own Worker Pool dedicated to computation rather than the Node.js I/O-themed Worker Pool. The most straightforward ways to do this is using
Child Process
or
Cluster
.
You should
not
simply create a
Child Process
for every client.
You can receive client requests more quickly than you can create and manage children, and your server might become a
fork bomb
.
Downside of offloading
The downside of the offloading approach is that it incurs overhead in the form of
communication costs
.
Only the Event Loop is allowed to see the "namespace" (JavaScript state) of your application.
From a Worker, you cannot manipulate a JavaScript object in the Event Loop's namespace.
Instead, you have to serialize and deserialize any objects you wish to share.
Then the Worker can operate on its own copy of these object(s) and return the modified object (or a "patch") to the Event Loop.
For serialization concerns, see the section on JSON DOS.
Some suggestions for offloading
You may wish to distinguish between CPU-intensive and I/O-intensive tasks because they have markedly different characteristics.
A CPU-intensive task only makes progress when its Worker is scheduled, and the Worker must be scheduled onto one of your machine's
logical cores
.
If you have 4 logical cores and 5 Workers, one of these Workers cannot make progress.
As a result, you are paying overhead (memory and scheduling costs) for this Worker and getting no return for it.
I/O-intensive tasks involve querying an external service provider (DNS, file system, etc.) and waiting for its response.
While a Worker with an I/O-intensive task is waiting for its response, it has nothing else to do and can be de-scheduled by the operating system, giving another Worker a chance to submit their request.
Thus,
I/O-intensive tasks will be making progress even while the associated thread is not running
.
External service providers like databases and file systems have been highly optimized to handle many pending requests concurrently.
For example, a file system will examine a large set of pending write and read requests to merge conflicting updates and to retrieve files in an optimal order.
If you rely on only one Worker Pool, e.g. the Node.js Worker Pool, then the differing characteristics of CPU-bound and I/O-bound work may harm your application's performance.
For this reason, you might wish to maintain a separate Computation Worker Pool.
Offloading: conclusions
For simple tasks, like iterating over the elements of an arbitrarily long array, partitioning might be a good option.
If your computation is more complex, offloading is a better approach: the communication costs, i.e. the overhead of passing serialized objects between the Event Loop and the Worker Pool, are offset by the benefit of using multiple cores.
However, if your server relies heavily on complex calculations, you should think about whether Node.js is really a good fit. Node.js excels for I/O-bound work, but for expensive computation it might not be the best option.
If you take the offloading approach, see the section on not blocking the Worker Pool.
Don't block the Worker Pool
Node.js has a Worker Pool composed of
k
Workers.
If you are using the Offloading paradigm discussed above, you might have a separate Computational Worker Pool, to which the same principles apply.
In either case, let us assume that
k
is much smaller than the number of clients you might be handling concurrently.
This is in keeping with the "one thread for many clients" philosophy of Node.js, the secret to its scalability.
As discussed above, each Worker completes its current Task before proceeding to the next one on the Worker Pool queue.
Now, there will be variation in the cost of the Tasks required to handle your clients' requests.
Some Tasks can be completed quickly (e.g. reading short or cached files, or producing a small number of random bytes), and others will take longer (e.g reading larger or uncached files, or generating more random bytes).
Your goal should be to
minimize the variation in Task times
, and you should use
Task partitioning
to accomplish this.
Minimizing the variation in Task times
If a Worker's current Task is much more expensive than other Tasks, then it will be unavailable to work on other pending Tasks.
In other words,
each relatively long Task effectively decreases the size of the Worker Pool by one until it is completed
.
This is undesirable because, up to a point, the more Workers in the Worker Pool, the greater the Worker Pool throughput (tasks/second) and thus the greater the server throughput (client requests/second).
One client with a relatively expensive Task will decrease the throughput of the Worker Pool, in turn decreasing the throughput of the server.
To avoid this, you should try to minimize variation in the length of Tasks you submit to the Worker Pool.
While it is appropriate to treat the external systems accessed by your I/O requests (DB, FS, etc.) as black boxes, you should be aware of the relative cost of these I/O requests, and should avoid submitting requests you can expect to be particularly long.
Two examples should illustrate the possible variation in task times.
Variation example: Long-running file system reads
Suppose your server must read files in order to handle some client requests.
After consulting the Node.js
File system
APIs, you opted to use
fs.readFile()
for simplicity.
However,
fs.readFile()
before v10 was not partitioned: it submitted a single
fs.read()
Task spanning the entire file.
If you read shorter files for some users and longer files for others,
fs.readFile()
may introduce significant variation in Task lengths, to the detriment of Worker Pool throughput.
For a worst-case scenario, suppose an attacker can convince your server to read an
arbitrary
file (this is a
directory traversal vulnerability
).
If your server is running Linux, the attacker can name an extremely slow file:
/dev/random
.
For all practical purposes,
/dev/random
is infinitely slow, and every Worker asked to read from
/dev/random
will never finish that Task.
An attacker then submits
k
requests, one for each Worker, and no other client requests that use the Worker Pool will make progress.
Variation example: Long-running crypto operations
Suppose your server generates cryptographically secure random bytes using
crypto.randomBytes()
.
crypto.randomBytes()
is not partitioned: it creates a single
randomBytes()
Task to generate as many bytes as you requested.
If you create fewer bytes for some users and more bytes for others,
crypto.randomBytes()
is another source of variation in Task lengths.
Task partitioning
Tasks with variable time costs can harm the throughput of the Worker Pool.
To minimize variation in Task times, as far as possible you should
partition
each Task into comparable-cost sub-Tasks.
When each sub-Task completes it should submit the next sub-Task, and when the final sub-Task completes it should notify the submitter.
To continue the
fs.readFile()
example, you should instead use
fs.read()
(manual partitioning) or
ReadStream
(automatically partitioned).
The same principle applies to CPU-bound tasks; the
asyncAvg
example might be inappropriate for the Event Loop, but it is well suited to the Worker Pool.
When you partition a Task into sub-Tasks, shorter Tasks expand into a small number of sub-Tasks, and longer Tasks expand into a larger number of sub-Tasks.
Between each sub-Task of a longer Task, the Worker to which it was assigned can work on a sub-Task from another, shorter, Task, thus improving the overall Task throughput of the Worker Pool.
Note that the number of sub-Tasks completed is not a useful metric for the throughput of the Worker Pool.
Instead, concern yourself with the number of
Tasks
completed.
Avoiding Task partitioning
Recall that the purpose of Task partitioning is to minimize the variation in Task times.
If you can distinguish between shorter Tasks and longer Tasks (e.g. summing an array vs. sorting an array), you could create one Worker Pool for each class of Task.
Routing shorter Tasks and longer Tasks to separate Worker Pools is another way to minimize Task time variation.
In favor of this approach, partitioning Tasks incurs overhead (the costs of creating a Worker Pool Task representation and of manipulating the Worker Pool queue), and avoiding partitioning saves you the costs of additional trips to the Worker Pool.
It also keeps you from making mistakes in partitioning your Tasks.
The downside of this approach is that Workers in all of these Worker Pools will incur space and time overheads and will compete with each other for CPU time.
Remember that each CPU-bound Task makes progress only while it is scheduled.
As a result, you should only consider this approach after careful analysis.
Worker Pool: conclusions
Whether you use only the Node.js Worker Pool or maintain separate Worker Pool(s), you should optimize the Task throughput of your Pool(s).
To do this, minimize the variation in Task times by using Task partitioning.
The risks of npm modules
While the Node.js core modules offer building blocks for a wide variety of applications, sometimes something more is needed. Node.js developers benefit tremendously from the
npm ecosystem
, with hundreds of thousands of modules offering functionality to accelerate your development process.
Remember, however, that the majority of these modules are written by third-party developers and are generally released with only best-effort guarantees. A developer using an npm module should be concerned about two things, though the latter is frequently forgotten.
Does it honor its APIs?
Might its APIs block the Event Loop or a Worker?
Many modules make no effort to indicate the cost of their APIs, to the detriment of the community.
For simple APIs you can estimate the cost of the APIs; the cost of string manipulation isn't hard to fathom.
But in many cases it's unclear how much an API might cost.
If you are calling an API that might do something expensive, double-check the cost. Ask the developers to document it, or examine the source code yourself (and submit a PR documenting the cost).
Remember, even if the API is asynchronous, you don't know how much time it might spend on a Worker or on the Event Loop in each of its partitions.
For example, suppose in the
asyncAvg
example given above, each call to the helper function summed
half
of the numbers rather than one of them.
Then this function would still be asynchronous, but the cost of each partition would be
O(n)
, not
O(1)
, making it much less safe to use for arbitrary values of
n
.
Conclusion
Node.js has two types of threads: one Event Loop and
k
Workers.
The Event Loop is responsible for JavaScript callbacks and non-blocking I/O, and a Worker executes tasks corresponding to C++ code that completes an asynchronous request, including blocking I/O and CPU-intensive work.
Both types of threads work on no more than one activity at a time.
If any callback or task takes a long time, the thread running it becomes
blocked
.
If your application makes blocking callbacks or tasks, this can lead to degraded throughput (clients/second) at best, and complete denial of service at worst.
To write a high-throughput, more DoS-proof web server, you must ensure that on benign and on malicious input, neither your Event Loop nor your Workers will block.

---

# Comparing Node.js concurrency models
> **Fonte original:** [https://nodejs.org/learn/concurrency/comparing-nodejs-concurrency-models](https://nodejs.org/learn/concurrency/comparing-nodejs-concurrency-models)

Comparing Node.js concurrency models
Node.js runs your JavaScript on a single thread, driven by the
event loop
. That model is great for I/O-bound work — reading files, querying a database, handling HTTP requests — because Node hands off the waiting to the operating system and keeps the thread free.
It's a poor fit for two other situations, though:
CPU-bound work
(image resizing, hashing, parsing huge payloads) ties up the single thread and makes your whole application unresponsive while it runs.
Scaling across CPU cores
— a single Node.js process only ever uses one core for its JavaScript, no matter how many cores the machine has.
Node.js ships three built-in modules to address this:
node:child_process
,
node:worker_threads
, and
node:cluster
. They solve overlapping problems in different ways, which is why it's easy to reach for the wrong one. This guide compares them side by side and walks through when to use each.
The three options at a glance
Runs
Memory
Talks via
Best for
child_process
Separate process
Isolated
stdio, or IPC (
fork()
)
Running external programs
worker_threads
Separate thread
Shareable
postMessage()
CPU-bound JS work
cluster
Multiple processes
Isolated
IPC
Scaling a server across cores
A useful way to tell them apart:
cluster
is built on top of
child_process
specifically to solve the "scale a server across cores" problem, while
worker_threads
exists to solve the "run CPU-heavy code without blocking" problem without paying the cost of a whole new process.
Child Process
Use
child_process
when you need to run another program — a shell command, a binary, a script in another language — from Node.js, or when you want a fully isolated Node.js process that you drive over stdio/IPC.
spawn
,
exec
,
execFile
, and
fork
Method
Description
Use case
spawn()
Streams stdout/stderr
Long-running, large output
exec()
Buffers full output via a shell
Short commands, small output
execFile()
Like
exec()
, no shell
Running a known binary safely
fork()
spawn()
+ built-in IPC for Node.js modules
Parent/child Node.js messaging
exec()
buffers the child's entire stdout/stderr in memory and only calls back once the process exits, with the result capped at 1 MiB (
maxBuffer
) by default — trying to capture a large or unbounded output this way will truncate it and terminate the child.
execFile()
avoids spawning a shell entirely, which also sidesteps shell-injection risks when part of the command comes from user input.
Example: streaming a long-running command with
spawn()
CJS
ESM
const
{
spawn
}
=
require
(
'
node:child_process
'
)
;
const
child
=
spawn
(
'
ffmpeg
'
,
[
'
-i
'
,
'
input.mp4
'
,
'
output.mp3
'
])
;
child
.
stdout
.
on
(
'
data
'
,
data
=>
console
.
log
(
`
stdout:
${
data
}
`
))
;
child
.
stderr
.
on
(
'
data
'
,
data
=>
console
.
error
(
`
stderr:
${
data
}
`
))
;
child
.
on
(
'
close
'
,
code
=>
console
.
log
(
`
Process exited with code
${
code
}
`
))
;
JavaScript
Copy to clipboard
spawn()
streams output as it's produced instead of buffering it, which is why it's the right choice for anything long-running or with unpredictable output size.
Example: talking to another Node.js process with
fork()
parent.js
child.js
const
{
fork
}
=
require
(
'
node:child_process
'
)
;
const
child
=
fork
(
'
./child.js
'
)
;
child
.
send
(
{
task
:
'
start
'
,
data
:
42
}
)
;
child
.
on
(
'
message
'
,
result
=>
console
.
log
(
'
Result from child:
'
,
result
))
;
JavaScript
Copy to clipboard
fork()
gives you a ready-made, structured-clone-based IPC channel (
.send()
/
'message'
), so you don't have to parse stdout yourself the way you would with
spawn()
.
Things to watch for
Avoid
exec()
for anything that could produce a large output — use
spawn()
and stream it instead.
Always handle the
'exit'
and
'close'
events so you notice failures and clean up resources (open file descriptors, temporary files) instead of leaking them.
If any part of the command comes from user input, prefer
execFile()
/
spawn()
with an argument array over
exec()
, which runs through a shell and is vulnerable to shell injection if arguments aren't sanitized.
Worker Threads
worker_threads
was added to let you run JavaScript in parallel, in threads within the
same
process, specifically to move CPU-bound work off the main thread without blocking it. Unlike
child_process
, workers share the same process — no OS-level process to spin up, and no fully separate memory space.
Worker Threads
Child Process
Context
Same process
Separate process
Memory
Shareable via
SharedArrayBuffer
Isolated
Startup overhead
Low
Higher
Communication
postMessage()
(fast)
stdio or IPC (slower)
Example: offloading CPU-bound work
main.js
hash-worker.js
const
{
Worker
}
=
require
(
'
node:worker_threads
'
)
;
const
worker
=
new
Worker
(
'
./hash-worker.js
'
,
{
workerData
:
'
user-password
'
,
}
)
;
worker
.
on
(
'
message
'
,
hash
=>
console
.
log
(
'
Computed hash:
'
,
hash
))
;
worker
.
on
(
'
error
'
,
err
=>
console
.
error
(
'
Worker failed:
'
,
err
))
;
JavaScript
Copy to clipboard
Password hashing, image/video transforms, encryption, and parsing very large in-memory payloads are classic candidates: they're pure CPU work, and running them on the main thread would stall every other request Node.js is handling in the meantime.
Sharing memory
Workers can share memory directly using
SharedArrayBuffer
together with the
Atomics
API for safe concurrent access, instead of copying data back and forth with
postMessage()
. This avoids serialization overhead for large buffers, but you're now responsible for coordinating access yourself — it opens the door to the same race-condition class of bugs found in traditional multi-threaded programming.
Things to watch for
Worker threads are for CPU-bound work, not I/O — a worker still has to wait on I/O just like the main thread would, so spinning one up for a database call or a network request adds overhead for no benefit.
Spinning up a worker has a real cost. For small, frequent tasks, that setup overhead can outweigh the benefit — consider a pool of long-lived workers (see the
workerpool
package) instead of creating one per task.
Cluster
cluster
solves a different problem: a single Node.js process only uses one CPU core. To take advantage of a multi-core machine for a network server,
cluster
forks multiple full copies of your process (each one a
child_process
under the hood) that all listen on the same port.
Example: scaling an HTTP server across cores
const
cluster
=
require
(
'
node:cluster
'
)
;
const
http
=
require
(
'
node:http
'
)
;
const
{
availableParallelism
}
=
require
(
'
node:os
'
)
;
if
(
cluster
.
isPrimary
)
{
const
numCPUs
=
availableParallelism
()
;
for
(
let
i
=
0
;
i
<
numCPUs
;
i
++
)
{
cluster
.
fork
()
;
}
cluster
.
on
(
'
exit
'
,
(
worker
,
code
,
signal
)
=>
{
if
(
worker
.
exitedAfterDisconnect
)
{
// A voluntary exit (e.g. worker.disconnect() or cluster.disconnect())
// — don't respawn.
return;
}
console
.
log
(
`
Worker
${
worker
.
process
.
pid
}
died, restarting
`
)
;
cluster
.
fork
()
;
}
)
;
}
else
{
http
.
createServer
(
(
req
,
res
)
=>
{
res
.
writeHead
(
200
)
;
res
.
end
(
'
handled by worker
'
+
process
.
pid
)
;
}
)
.
listen
(
3000
)
;
}
JavaScript
Copy to clipboard
The primary process (
cluster.isPrimary
) forks one worker per core and restarts any worker that exits unexpectedly. Each worker (
cluster.isWorker
) runs your normal server code, unaware that it's one of several. The
worker.exitedAfterDisconnect
flag distinguishes a voluntary exit (e.g. during a graceful shutdown via
worker.disconnect()
or
cluster.disconnect()
) from a crash — without checking it, a deliberate shutdown would keep spawning new workers instead of winding down.
How the workers share one port
Rather than relying on an OS-level mechanism, the primary process itself distributes incoming connections to its workers — by default in a round-robin fashion (
cluster.SCHED_RR
), which is the default on every platform except Windows. This is configurable via
cluster.schedulingPolicy
. (You may see older material claim this is done via
SO_REUSEPORT
; that's not how Node's cluster module does it by default.)
isPrimary
/
isWorker
cluster.isPrimary
is
true
in the process that forks workers;
cluster.isWorker
is
true
in the forked workers themselves. (You may also see
cluster.isMaster
in older code — it still works, but it's a deprecated alias for
isPrimary
.)
Things to watch for
Workers are separate processes, so
they don't share memory
. In-memory sessions, caches, or rate limiters won't be visible across workers — use an external store like Redis for anything that needs to be shared.
Always handle a worker's
'exit'
event and decide whether to restart it; an unhandled crash silently reduces your server's capacity. Check
worker.exitedAfterDisconnect
so a graceful shutdown doesn't get treated as a crash and endlessly respawn workers.
In production, most teams use a process manager (PM2, systemd, or a container orchestrator) instead of hand-rolling restart/reload logic with
cluster
directly.
Choosing between them
A quick decision guide:
Running an external program, or a script in another language?
→
child_process
(
spawn
/
execFile
).
Running another Node.js script as an isolated process, with structured messaging?
→
child_process.fork()
.
Have CPU-bound JavaScript blocking your event loop (hashing, image processing, big computations)?
→
worker_threads
.
Want to use all the CPU cores to handle more traffic to your server?
→
cluster
(or a process manager/orchestrator that does the equivalent at the infrastructure level).
These aren't mutually exclusive. A common pattern for something like an image-upload service is to combine all three:
cluster
to spread incoming requests across cores, and
worker_threads
(or
child_process
) within each worker to do the actual image processing without blocking that worker's event loop.
Further reading
child_process
API reference
worker_threads
API reference
cluster
API reference
The Node.js Event Loop
Don't Block the Event Loop

---

# Introduction to TypeScript
> **Fonte original:** [https://nodejs.org/learn/typescript/introduction](https://nodejs.org/learn/typescript/introduction)

Introduction to TypeScript
What is TypeScript
TypeScript
is an open-source language maintained and developed by Microsoft.
Basically, TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor or in your CI/CD pipeline, and write more maintainable code.
We can talk about other TypeScript benefits later, let's see some examples now!
First TypeScript code
Take a look at this code snippet and then we can unpack it together:
type
User
=
{
name
:
string
;
age
:
number
;
}
;
function
isAdult
(
user
:
User
)
:
boolean
{
return
user
.
age
>=
18
;
}
const
justine
=
{
name
:
'
Justine
'
,
age
:
23
,
}
satisfies
User
;
const
isJustineAnAdult
=
isAdult
(
justine
)
;
TypeScript
Copy to clipboard
The first part (with the
type
keyword) is responsible for declaring our custom object type representing users. Later we utilize this newly created type to create the function
isAdult
that accepts one argument of type
User
and returns a
boolean
. After this, we create
justine
, our example data that can be used for calling the previously defined function. Finally, we create a new variable with information on whether
justine
is an adult.
There are additional things about this example that you should know. Firstly, if we do not comply with the declared types, TypeScript will inform us that something is wrong and prevent misuse. Secondly, not everything must be typed explicitly—TypeScript infers types for us. For example, the variable
isJustineAnAdult
is of type
boolean
even if we didn't type it explicitly, and
justine
would be a valid argument for our function even though we didn't declare this variable as of
User
type.
What does TypeScript consist of?
TypeScript consists of two main components: the code itself and type definitions.
TypeScript Code
The code part is regular JavaScript with additional TypeScript-specific syntax for type annotations. When TypeScript code is compiled, all the TypeScript-specific parts are removed, resulting in clean JavaScript that can run in any environment. For example:
function
greet
(
name
:
string
)
{
console
.
log
(
`
Hello,
${
name
}
!
`
)
;
}
TypeScript
Copy to clipboard
Type Definitions
Type definitions describe the shape of existing JavaScript code. They are usually stored in
.d.ts
files and don't contain any actual implementation—they only describe the types. These definitions are essential for interoperability with JavaScript: code is not usually distributed as TypeScript, but instead transpiled to JavaScript that includes sidecar type definition files.
For example, when you use Node.js with TypeScript, you'll need type definitions for Node.js APIs. This is available via
@types/node
. Install it using:
npm
add
--save-dev
@types/node
These type definitions allow TypeScript to understand Node.js APIs and provide proper type checking and autocompletion when you use functions like
fs.readFile
or
http.createServer
. For example:
// @errors: 2345
import
{
resolve
}
from
'
node:path
'
;
resolve
(
123
,
456
)
;
TypeScript
Copy to clipboard
Many popular JavaScript libraries have their type definitions available under the
@types
namespace, maintained by the DefinitelyTyped community. This enables seamless integration of existing JavaScript libraries with TypeScript projects.
Transform Capabilities
TypeScript also includes powerful transformation capabilities, particularly for JSX (used in React and similar frameworks). The TypeScript compiler can transform JSX syntax into regular JavaScript, similar to how Babel works. While we won't cover these transformation features in these articles, it's worth noting that TypeScript isn't only a tool for type checking—it's also a build tool for transforming modern JavaScript syntax into compatible versions for different environments.
How to run TypeScript code
Okay, so we have some TypeScript code. Now how do we run it?
There are few possible ways to run TypeScript code, we will cover all of them in the next articles.

---

# Running TypeScript Natively
> **Fonte original:** [https://nodejs.org/learn/typescript/run-natively](https://nodejs.org/learn/typescript/run-natively)

Running TypeScript Natively
You can write code that's valid TypeScript directly in Node.js without the need to transpile it first.
Node.js runs TypeScript through a lightweight process called type stripping. It removes erasable TypeScript syntax, such as type annotations and interfaces, then runs the remaining JavaScript.
If you are using v22.18.0 or later and your source code contains only
erasable TypeScript syntax
, you can execute TypeScript code without any flags.
node
example.ts
If you are using a version less than v22.18.0, you can use the
--experimental-strip-types
flag to run TypeScript files directly in Node.js.
node
--experimental-strip-types
example.ts
And that's it! You can now run TypeScript code directly in Node.js without the need to transpile it first.
Node.js does not type check your code when it runs TypeScript files. Use the TypeScript compiler separately if you want to catch type-related errors:
npx
tsc
--noEmit
You can disable it via
--no-experimental-strip-types
flag if needed.
node
--no-experimental-strip-types
example.ts
Constraints
The support for TypeScript in Node.js has some constraints to keep in mind:
You can get more information on the
API docs
.
Type stripping
Type stripping only works for TypeScript syntax that can be removed without changing the runtime JavaScript. This includes common type-only syntax such as type annotations, interfaces, type aliases, and
import type
.
Syntax that requires JavaScript code generation is not handled by type stripping alone. Examples include
enum
, parameter properties, namespaces with runtime code, and import aliases. Use a runner or a separate transpilation step if your project needs those features.
Type checking
Running a
.ts
file with
node
is not the same as running
tsc
. Node.js executes the file after stripping supported type syntax, but it does not report type errors.
For development, a common setup is to run Node.js directly for quick feedback and run
tsc --noEmit
in a separate command or CI job for type checking.
Configuration
The Node.js TypeScript loader (
Amaro
) does not need or use
tsconfig.json
to run TypeScript code.
We recommend configuring your editor and
tsc
to reflect Node.js behavior by creating a
tsconfig.json
using the
compilerOptions
listed
here
, as well as using TypeScript version
5.7 or higher
.

---

# Running TypeScript code using transpilation
> **Fonte original:** [https://nodejs.org/learn/typescript/transpile](https://nodejs.org/learn/typescript/transpile)

Running TypeScript code using transpilation
Transpilation is the process of converting source code from one language to another. In the case of TypeScript, it's the process of converting TypeScript code to JavaScript code. This is necessary because browsers and Node.js don't run TypeScript code directly.
Compiling TypeScript to JavaScript
The most common way to run TypeScript code is to compile it to JavaScript first. You can do this using the TypeScript compiler
tsc
.
Step 1:
Write your TypeScript code in a file, for example
example.ts
.
type
User
=
{
name
:
string
;
age
:
number
;
}
;
function
isAdult
(
user
:
User
)
:
boolean
{
return
user
.
age
>=
18
;
}
const
justine
=
{
name
:
'
Justine
'
,
age
:
23
,
}
satisfies
User
;
const
isJustineAnAdult
=
isAdult
(
justine
)
;
TypeScript
Copy to clipboard
Step 2:
Install TypeScript locally using a package manager:
In this example we're going to use npm, you can check
our introduction to the npm package manager
for more information.
npm
i
-D
typescript
# -D is a shorthand for --save-dev
Step 3:
Compile your TypeScript code to JavaScript using the
tsc
command:
npx
tsc
example.ts
NOTE:
npx
is a tool that allows you to run Node.js packages without installing them globally.
tsc
is the TypeScript compiler which will take our TypeScript code and compile it to JavaScript.
This command will result in a new file named
example.js
that we can run using Node.js.
Now that we know how to compile and run TypeScript code, let's see TypeScript bug-preventing capabilities in action!
Step 4:
Run your JavaScript code using Node.js:
node
example.js
You should see the output of your TypeScript code in the terminal.
If there are type errors
If you have type errors in your TypeScript code, the TypeScript compiler will catch them and prevent you from running the code. For example, if you change the
age
property of
justine
to a string, TypeScript will throw an error:
We will modify our code like this, to voluntarily introduce a type error:
// @errors: 2322 2554
type
User
=
{
name
:
string
;
age
:
number
;
}
;
function
isAdult
(
user
:
User
)
:
boolean
{
return
user
.
age
>=
18
;
}
const
justine
:
User
=
{
name
:
'
Justine
'
,
age
:
'
Secret!
'
,
}
;
const
isJustineAnAdult
:
string
=
isAdult
(
justine
,
"
I shouldn't be here!
"
)
;
TypeScript
Copy to clipboard
As you can see, TypeScript is very helpful in catching bugs before they even happen. This is one of the reasons why TypeScript is so popular among developers.

---

# Running TypeScript with a runner
> **Fonte original:** [https://nodejs.org/learn/typescript/run](https://nodejs.org/learn/typescript/run)

Running TypeScript with a runner
If you want more advanced processing of TypeScript than the built-in support (or you're using Node.js prior to v22.7.0), you have 2 options: use a runner (which handles much of the complexity for you), or handle it all yourself via
transpilation
.
Running TypeScript code with
ts-node
ts-node
is a TypeScript execution environment for Node.js. It allows you to run TypeScript code directly in Node.js without the need to compile it first. By default,
ts-node
performs type checking unless
transpileOnly
is enabled. While
ts-node
can catch type errors at runtime, we still recommend type-checking your code first with
tsc
before shipping it.
To use
ts-node
, you need to install it first:
npm
i
-D
ts-node
Then you can run your TypeScript code like this:
npx
ts-node
example.ts
Running TypeScript code with
tsx
tsx
is another TypeScript execution environment for Node.js. It allows you to run TypeScript code directly in Node.js without the need to compile it first. Note, however, that it does not type check your code. So we recommend to type check your code first with
tsc
and then run it with
tsx
before shipping it.
To use
tsx
, you need to install it first:
npm
i
-D
tsx
Then you can run your TypeScript code like this:
npx
tsx
example.ts
Registering
tsx
via
node
If you want to use
tsx
via
node
, you can register
tsx
via
--import
:
node
--import=tsx
example.ts

---

# Publishing a TypeScript package
> **Fonte original:** [https://nodejs.org/learn/typescript/publishing-a-ts-package](https://nodejs.org/learn/typescript/publishing-a-ts-package)

Publishing a TypeScript package
This article covers items regarding TypeScript publishing specifically. Publishing means distributed as a package via npm (or other package manager); this is not about compiling an app / server to be run in production (such as a PWA and/or endpoint server).
Some important things to note:
Everything from
Publishing a package
applies here.
Fields like
main
operate on
published
content, so when TypeScript source-code is transpiled to JavaScript, JavaScript is the published content and
main
would point to a JavaScript file with a JavaScript file extension (ex
main.ts
→
"main": "main.js"
).
Fields like
scripts.test
operate on source-code, so they would use the file extensions of the source code (ex
"test": "node --test './src/**/*.test.ts'
).
Node runs TypeScript code via a process called "
type stripping
", wherein node (via
Amaro
) removes TypeScript-specific syntax, leaving behind vanilla JavaScript (which node already understands). This behaviour is enabled by default as of node version 22.18.0.
Node does
not
strip types in
node_modules
because it can cause significant performance issues for the official TypeScript compiler (
tsc
) and parts of VS Code, so the TypeScript maintainers would like to discourage people publishing raw TypeScript, at least for now.
Consuming TypeScript-specific features like
enum
in node still requires a flag (
--experimental-transform-types
). There are often better alternatives for these anyway.
To ensure TypeScript-specific features are
not
present (so your code can just run in node), set the
erasableSyntaxOnly
config option in TypeScript version 5.8+.
Use
dependabot
to keep your dependencies current, including those in github actions. It's a very easy set-and-forget configuration.
.nvmrc
comes from
nvm
, a multi-version manager for node. It allows you to specify the version of node the project should generally use.
A directory overview of a repository would look something like:
Files co-located
Files co-located but segregated
'src' and 'test' fully segregated
example-ts-pkg/
├ .github/
│ ├ workflows/
│ │ ├ ci.yml
│ │ └ publish.yml
│ └ dependabot.yml
├ src/
│ ├ foo.fixture.js
│ ├ main.ts
│ ├ main.test.ts
│ ├ some-util.ts
│ └ some-util.test.ts
├ LICENSE
├ package.json
├ README.md
└ tsconfig.json
text
Copy to clipboard
And a directory overview of its published package would look something like:
Fully flat
With 'dist'
example-ts-pkg/
├ LICENSE
├ main.d.ts
├ main.d.ts.map
├ main.js
├ package.json
├ README.md
├ some-util.d.ts
├ some-util.d.ts.map
└ some-util.js
text
Copy to clipboard
A note about directory organisation: There are a few common practices for placing tests. Principle of least knowledge says to co-locate them (put them adjacent to implementation). Sometimes, that's in the same directory, or within a drawer like a
__test__
(also adjacent to the implementation, "Files co-located but segregated"). Alternatively, some opt to create a
test/
sibling to
src/
("'src' and 'test' fully segregated"), either with a mirrored structure or a "junk drawer".
What to do with your types
Treat types like a test
The purpose of types is to warn an implementation will not work:
// @errors: 2322
const
foo
=
'
a
'
;
const
bar
:
number
=
1
+
foo
;
TypeScript
Copy to clipboard
TypeScript has warned that the above code will not behave as intended, just like a unit test warns that code does not behave as intended. They are complementary and verify different things—you should have both.
Your editor (e.g. VS Code) likely has built-in support for TypeScript, displaying errors as you work. If not, and/or you missed those, CI will have your back.
The following
GitHub Action
sets up a CI task to automatically check (and require) types pass inspection for a PR into the
main
branch.
.github/workflows/ci.yml
package.json
tsconfig.json (flat output)
tsconfig.json ('dist' output)
# yaml-language-server: $schema=https://json.schemastore.org/github-workflow.json
name
:
Tests
on
:
pull_request
:
branches
:
[
'
*
'
]
jobs
:
check-types
:
# Separate these from tests because
# they are platform and node-version independent
# and need be run only once.
runs-on
:
ubuntu-latest
steps
:
-
uses
:
actions/checkout@v4
-
uses
:
actions/setup-node@v4
with
:
node-version-file
:
'
.nvmrc
'
cache
:
'
npm
'
-
name
:
npm clean install
run
:
npm ci
# You may want to run a lint check here too
-
run
:
node --run types:check
get-matrix
:
# Automatically pick active LTS versions
runs-on
:
ubuntu-latest
outputs
:
latest
:
${{ steps.set-matrix.outputs.requireds }}
steps
:
-
uses
:
ljharb/actions/node/matrix@main
id
:
set-matrix
with
:
versionsAsRoot
:
true
type
:
majors
preset
:
'
>= 22
'
# glob is not backported below 22.x
test
:
needs
:
[
get-matrix
]
runs-on
:
${{ matrix.os }}
strategy
:
fail-fast
:
false
matrix
:
node-version
:
${{ fromJson(needs.get-matrix.outputs.latest) }}
os
:
-
macos-latest
-
ubuntu-latest
-
windows-latest
steps
:
-
uses
:
actions/checkout@v4
-
name
:
Use node ${{ matrix.node-version }}
uses
:
actions/setup-node@v4
with
:
node-version
:
${{ matrix.node-version }}
cache
:
'
npm
'
-
name
:
npm clean install
run
:
npm ci
-
run
:
node --run test
YAML
Copy to clipboard
Note that test files may well have a different
tsconfig.json
applied (hence why they are excluded in the above sample).
Generate type declarations
Type declarations (
.d.ts
and friends) provide type information as a sidecar file, allowing the execution code to be vanilla JavaScript whilst still having types.
Since these are generated based on source code, they can be built as part of your publication process and do not need to be checked into your repository.
Take the following example, where the type declarations are generated just before publishing to the npm registry.
.github/workflows/publish.yml
package.json
.npmignore
.npmignore ('dist' output)
# yaml-language-server: $schema=https://json.schemastore.org/github-workflow.json
# This is mostly boilerplate.
name
:
Publish to npm
on
:
push
:
tags
:
-
'
**@*
'
jobs
:
build
:
runs-on
:
ubuntu-latest
permissions
:
contents
:
read
steps
:
-
uses
:
actions/checkout@v4
-
uses
:
actions/setup-node@v4
with
:
node-version-file
:
'
.nvmrc
'
registry-url
:
'
https://registry.npmjs.org
'
-
run
:
npm ci
# - name: Publish to npm
#   run: … npm publish …
YAML
Copy to clipboard
You'll want to publish a package compiled to support all Node.js LTS versions since you don't know which version the consumer will be running; the
tsconfig
s in this article support node 18.x and later.
npm publish
will automatically run
prepack
beforehand
.
npm
will also run
prepack
automatically before
npm pack --dry-run
(so you can easily see what your published package will be without actually publishing it).
Beware
,
node --run
does
not
do that
. You can't use
node --run
for this step, so that caveat does not apply here, but it can for other steps.
The steps to actually publish to npm will be included in a separate article (there are several pros and cons beyond the scope of this article).
Breaking this down
Generating type declarations is deterministic: you'll get the same output from the same input, every time. So there is no need to commit these to git.
npm publish
grabs everything applicable and available at the moment the command is run; so generating type declarations immediately before means those are available and will get picked up.
By default,
npm publish
grabs (almost) everything (see
Files included in package
). In order to keep your published package minimal (see the "Heaviest Objects in the Universe" meme about
node_modules
), you want to exclude certain files (like tests and test fixtures) from packaging. Add these to the opt-out list specified in
.npmignore
; ensure the
!*.d.ts
exception is listed, or the generated type declarations will not be published! Alternatively, you can use
package.json "files"
to create an opt-in (if a mistake is made accidentally omitting a file, your package may be broken for downstream users, so this is a less safe option).

---

# How to use streams
> **Fonte original:** [https://nodejs.org/learn/modules/how-to-use-streams](https://nodejs.org/learn/modules/how-to-use-streams)

How To Use Streams
Working with large amounts of data in Node.js applications can be a double-edged sword. The ability to handle massive amounts of data is extremely handy but can also lead to performance bottlenecks and memory exhaustion. Traditionally, developers tackled this challenge by reading the entire dataset into memory at once. This approach, while intuitive for smaller datasets, becomes inefficient and resource-intensive for large data (e.g., files, network requests…).
This is where Node.js streams come in. Streams offer a fundamentally different approach, allowing you to process data incrementally and optimize memory usage. By handling data in manageable chunks, streams empower you to build scalable applications that can efficiently tackle even the most daunting datasets. As popularly quoted, “streams are arrays over time.”
In this guide, we give an overview of the Stream concept, history, and API as well as some recommendations on how to use and operate them.
What are Node.js Streams?
Node.js streams offer a powerful abstraction for managing data flow in your applications. They excel at processing large datasets, such as reading or writing from files and network requests, without compromising performance.
This approach differs from loading the entire dataset into memory at once. Streams process data in chunks, significantly reducing memory usage. All streams in Node.js inherit from the
EventEmitter
class, allowing them to emit events at various stages of data processing. These streams can be readable, writable, or both, providing flexibility for different data-handling scenarios.
Event-Driven Architecture
Node.js thrives on an event-driven architecture, making it ideal for real-time I/O. This means consuming input as soon as it's available and sending output as soon as the application generates it. Streams seamlessly integrate with this approach, enabling continuous data processing.
They achieve this by emitting events at key stages. These events include signals for received data (
data
event) and the stream's completion (
end
event). Developers can listen to these events and execute custom logic accordingly. This event-driven nature makes streams highly efficient for the processing of data from external sources.
Why use Streams?
Streams provide three key advantages over other data-handling methods:
Memory Efficiency
: Streams process data incrementally, consuming and processing data in chunks rather than loading the entire dataset into memory. This is a major advantage when dealing with large datasets, as it significantly reduces memory usage and prevents memory-related performance issues.
Improved Response Time
: Streams allow for immediate data processing. When a chunk of data arrives, it can be processed without waiting for the entire payload or dataset to be received. This reduces latency and improves your application's overall responsiveness.
Scalability for Real-Time Processing
: By handling data in chunks, Node.js streams can efficiently handle large amounts of data with limited resources. This scalability makes streams ideal for applications that process high volumes of data in real time.
These advantages make streams a powerful tool for building high-performance, scalable Node.js applications, particularly when working with large datasets or real-time data processing.
Note on performance
If your application already has all the data readily available in memory, using streams might add unnecessary overhead, complexity, and slow down your application.
Stream history
This section is a reference of the history of streams in Node.js. Unless you’re working with a codebase written for a Node.js version prior to 0.11.5 (2013), you will rarely encounter older versions of the streams API, but the terms might still be in use.
Streams 0
The first version of streams was released at the same time as Node.js. Although there wasn't a Stream class yet, different modules used the concept and implemented the
read
/
write
functions. The
util.pump()
function was available to control the flow of data between streams.
Streams 1 (Classic)
With the release of Node v0.4.0 in 2011, the Stream class was introduced, as well as the
pipe()
method.
Streams 2
In 2012, with the release of Node v0.10.0, Streams 2 were unveiled. This update brought new stream subclasses, including Readable, Writable, Duplex, and Transform. Additionally, the
readable
event was added. To maintain backwards compatibility, streams could be switched to the old mode by adding a
data
event listener or calling
pause()
or
resume()
methods.
Streams 3
In 2013, Streams 3 were released with Node v0.11.5, to address the problem of a stream having both a
data
and
readable
event handlers. This removed the need to choose between 'current' and 'old' modes. Streams 3 is the current version of streams in Node.js.
Stream types
Readable
Readable
is the class that we use to sequentially read a source of data. Typical examples of
Readable
streams in Node.js API are
fs.ReadStream
when reading files,
http.IncomingMessage
when reading HTTP requests, and
process.stdin
when reading from the standard input.
Key Methods and Events
A readable stream operates with several core methods and events that allow fine control over data handling:
on('data')
: This event is triggered whenever data is available from the stream. It is very fast, as the stream pushes data as quickly as it can handle, making it suitable for high-throughput scenarios.
on('end')
: Emitted when there is no more data to read from the stream. It signifies the completion of data delivery. This event is only fired when all the data from the stream has been consumed.
on('readable')
: This event is triggered when there is data available to read from the stream or when the end of the stream has been reached. It allows for more controlled data reading when needed.
on('close')
: This event is emitted when the stream and its underlying resources have been closed and indicates that no more events will be emitted.
on('error')
: This event can be emitted at any point, signaling that there was an error processing. A handler for this event can be used to avoid uncaught exceptions.
A demonstration of the use of these events can be seen in the following sections.
Basic Readable Stream
Here's an example of a simple readable stream implementation that generates data dynamically:
class
MyStream
extends
Readable
{
#count
=
0
;
_read
(
size
)
{
this
.
push
(
'
:-)
'
)
;
if
(
++this
.
#count
===
5
)
{
this
.
push
(
null
)
;
}
}
}
const
stream
=
new
MyStream
()
;
stream
.
on
(
'
data
'
,
chunk
=>
{
console
.
log
(
chunk
.
toString
())
;
}
)
;
JavaScript
Copy to clipboard
In this code, the
MyStream
class extends Readable and overrides the
_read()
method to push a string ":-)" to the internal buffer. After pushing the string five times, it signals the end of the stream by pushing
null
. The
on('data')
event handler logs each chunk to the console as it is received.
Advanced Control with the readable Event
For even finer control over data flow, the readable event can be used. This event is more complex but provides better performance for certain applications by allowing explicit control over when data is read from the stream:
const
stream
=
new
MyStream
(
{
highWaterMark
:
1
,
}
)
;
stream
.
on
(
'
readable
'
,
()
=>
{
console
.
count
(
'
>> readable event
'
)
;
let
chunk
;
while
((
chunk
=
stream
.
read
())
!==
null
)
{
console
.
log
(
chunk
.
toString
())
;
// Process the chunk
}
}
)
;
stream
.
on
(
'
end
'
,
()
=>
console
.
log
(
'
>> end event
'
))
;
JavaScript
Copy to clipboard
Here, the readable event is used to pull data from the stream as needed manually. The loop inside the readable event handler continues to read data from the stream buffer until it returns
null
, indicating that the buffer is temporarily empty or the stream has ended. Setting
highWaterMark
to 1 keeps the buffer size small, triggering the readable event more frequently and allowing more granular control over the data flow.
With the previous code, you’ll get an output like
>>
readable event: 1
:-
):-)
:-
)
:-
)
:-
)
>>
readable event: 2
>>
readable event: 3
>>
readable event: 4
>>
end
event
Shell
Copy to clipboard
Let’s try to digest that. When we attach the
on('readable')
event, it makes a first call to
read()
because that is what might trigger the emission of a
readable
event. After the emission of said event, we call
read
on the first iteration of the
while
loop. That’s why we get the first two smileys in one row. After that, we keep calling
read
until
null
is pushed. Each call to
read
programs the emission of a new
readable
event, but as we are in “flow” mode (i.e., using the
readable
event), the emission is scheduled for the
nextTick
. That’s why we get them all at the end, when the synchronous code of the loop is finished.
NOTE: You can try to run the code with
NODE_DEBUG=stream
to see that
emitReadable
is triggered after each
push
.
If we want to see readable events called before each smiley, we can wrap
push
into a
setImmediate
or
process.nextTick
like this:
class
MyStream
extends
Readable
{
#count
=
0
;
_read
(
size
)
{
setImmediate
(
()
=>
{
this
.
push
(
'
:-)
'
)
;
if
(
++this
.
#count
===
5
)
{
return
this
.
push
(
null
)
;
}
}
)
;
}
}
JavaScript
Copy to clipboard
And we’ll get:
>>
readable event: 1
:-
)
>>
readable event: 2
:-
)
>>
readable event: 3
:-
)
>>
readable event: 4
:-
)
>>
readable event: 5
:-
)
>>
readable event: 6
>>
end
event
Shell
Copy to clipboard
Writable
Writable
streams are useful for creating files, uploading data, or any task that involves sequentially outputting data. While readable streams provide the source of data, writable streams in Node.js act as the destination for your data. Typical examples of writable streams in the Node.js API are
fs.WriteStream
,
process.stdout
, and
process.stderr
.
Key Methods and Events in Writable Streams
.write()
: This method is used to write a chunk of data to the stream. It handles the data by buffering it up to a defined limit (highWaterMark), and returns a boolean indicating whether more data can be written immediately.
.end()
: This method signals the end of the data writing process. It signals the stream to complete the write operation and potentially perform any necessary cleanup.
Creating a Writable
Here's an example of creating a writable stream that converts all incoming data to uppercase before writing it to the standard output:
CJS
ESM
const
{
once
}
=
require
(
'
node:events
'
)
;
const
{
Writable
}
=
require
(
'
node:stream
'
)
;
class
MyStream
extends
Writable
{
constructor
()
{
super
(
{
highWaterMark
:
10
/* 10 bytes */
}
)
;
}
_write
(
data
,
encode
,
cb
)
{
process
.
stdout
.
write
(
data
.
toString
()
.
toUpperCase
()
+
'
\n
'
,
cb
)
;
}
}
async
function
main
()
{
const
stream
=
new
MyStream
()
;
for
(
let
i
=
0
;
i
<
10
;
i
++
)
{
const
waitDrain
=
!
stream
.
write
(
'
hello
'
)
;
if
(
waitDrain
)
{
console
.
log
(
'
>> wait drain
'
)
;
await
once
(
stream
,
'
drain
'
)
;
}
}
stream
.
end
(
'
world
'
)
;
}
// Call the async function
main
()
.
catch
(
console
.
error
)
;
JavaScript
Copy to clipboard
In this code,
MyStream
is a custom
Writable
stream with a buffer capacity (
highWaterMark
) of 10 bytes. It overrides the
_write
method to convert data to uppercase before writing it out.
The loop attempts to write hello ten times to the stream. If the buffer fills up (
waitDrain
becomes
true
), it waits for a
drain
event before continuing, ensuring we do not overwhelm the stream's buffer.
The output will be:
HELLO
>>
wait drain
HELLO
HELLO
>>
wait drain
HELLO
HELLO
>>
wait drain
HELLO
HELLO
>>
wait drain
HELLO
HELLO
>>
wait drain
HELLO
WORLD
Shell
Copy to clipboard
Duplex
Duplex
streams implement both the readable and writable interfaces.
Key Methods and Events in Duplex Streams
Duplex streams implement all the methods and events described in Readable and Writable Streams.
A good example of a duplex stream is the
Socket
class in the
net
module:
CJS
ESM
const
net
=
require
(
'
node:net
'
)
;
// Create a TCP server
const
server
=
net
.
createServer
(
socket
=>
{
socket
.
write
(
'
Hello from server!
\n
'
)
;
socket
.
on
(
'
data
'
,
data
=>
{
console
.
log
(
`
Client says:
${
data
.
toString
()
}
`
)
;
}
)
;
// Handle client disconnection
socket
.
on
(
'
end
'
,
()
=>
{
console
.
log
(
'
Client disconnected
'
)
;
}
)
;
}
)
;
// Start the server on port 8080
server
.
listen
(
8080
,
()
=>
{
console
.
log
(
'
Server listening on port 8080
'
)
;
}
)
;
JavaScript
Copy to clipboard
The previous code will open a TCP socket on port 8080, send
Hello from server!
to any connecting client, and log any data received.
CJS
ESM
const
net
=
require
(
'
node:net
'
)
;
// Connect to the server at localhost:8080
const
client
=
net
.
createConnection
(
{
port
:
8080
},
()
=>
{
client
.
write
(
'
Hello from client!
\n
'
)
;
}
)
;
client
.
on
(
'
data
'
,
data
=>
{
console
.
log
(
`
Server says:
${
data
.
toString
()
}
`
)
;
}
)
;
// Handle the server closing the connection
client
.
on
(
'
end
'
,
()
=>
{
console
.
log
(
'
Disconnected from server
'
)
;
}
)
;
JavaScript
Copy to clipboard
The previous code will connect to the TCP socket, send a
Hello from client
message, and log any received data.
Transform
Transform
streams are duplex streams, where the output is computed based on the input. As the name suggests, they are usually used between a readable and a writable stream to transform the data as it passes through.
Key Methods and Events in Transform Streams
Apart from all the methods and events in Duplex Streams, there is:
_transform
: This function is called internally to handle the flow of data between the readable and writable parts. This MUST NOT be called by application code.
Creating a Transform Stream
To create a new transform stream, we can pass an
options
object to the
Transform
constructor, including a
transform
function that handles how the output data is computed from the input data using the
push
method.
CJS
ESM
const
{
Transform
}
=
require
(
'
node:stream
'
)
;
const
upper
=
new
Transform
(
{
transform
(
data
,
enc
,
cb
)
{
this
.
push
(
data
.
toString
()
.
toUpperCase
())
;
cb
()
;
},
}
)
;
JavaScript
Copy to clipboard
This stream will take any input and output it in uppercase.
How to operate with streams
When working with streams, we usually want to read from a source and write to a destination, possibly needing some transformation of the data in between. The following sections will cover different ways to do so.
.pipe()
The
.pipe()
method concatenates one readable stream to a writable (or transform) stream. Although this seems like a simple way to achieve our goal, it delegates all error handling to the programmer, making it difficult to get it right.
The following example shows a pipe trying to output the current file in uppercase to the console.
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
{
Transform
}
=
require
(
'
node:stream
'
)
;
let
errorCount
=
0
;
const
upper
=
new
Transform
(
{
transform
(
data
,
enc
,
cb
)
{
if
(
errorCount
===
10
)
{
return
cb
(
new
Error
(
'
BOOM!
'
))
;
}
errorCount
++;
this
.
push
(
data
.
toString
()
.
toUpperCase
())
;
cb
()
;
},
}
)
;
const
readStream
=
fs
.
createReadStream
(
__filename
,
{
highWaterMark
:
1
}
)
;
const
writeStream
=
process
.
stdout
;
readStream
.
pipe
(
upper
)
.
pipe
(
writeStream
)
;
readStream
.
on
(
'
close
'
,
()
=>
{
console
.
log
(
'
Readable stream closed
'
)
;
}
)
;
upper
.
on
(
'
close
'
,
()
=>
{
console
.
log
(
'
Transform stream closed
'
)
;
}
)
;
upper
.
on
(
'
error
'
,
err
=>
{
console
.
error
(
'
\n
Error in transform stream:
'
,
err
.
message
)
;
}
)
;
writeStream
.
on
(
'
close
'
,
()
=>
{
console
.
log
(
'
Writable stream closed
'
)
;
}
)
;
JavaScript
Copy to clipboard
After writing 10 characters,
upper
will return an error in the callback, which will cause the stream to close. However, the other streams won’t be notified, resulting in memory leaks. The output will be:
CONST
FS
=
Error
in
transform
stream:
BOOM!
Transform
stream
closed
Shell
Copy to clipboard
M
pipeline
pipeline
():
void
To avoid the pitfalls and low-level complexity of the
.pipe()
method, in most cases, it is recommended to use the
pipeline()
method. This method is a safer and more robust way to pipe streams together, handling errors and cleanup automatically.
The following example demonstrates how using
pipeline()
prevents the pitfalls of the previous example:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
{
Transform
,
pipeline
}
=
require
(
'
node:stream
'
)
;
let
errorCount
=
0
;
const
upper
=
new
Transform
(
{
transform
(
data
,
enc
,
cb
)
{
if
(
errorCount
===
10
)
{
return
cb
(
new
Error
(
'
BOOM!
'
))
;
}
errorCount
++;
this
.
push
(
data
.
toString
()
.
toUpperCase
())
;
cb
()
;
},
}
)
;
const
readStream
=
fs
.
createReadStream
(
__filename
,
{
highWaterMark
:
1
}
)
;
const
writeStream
=
process
.
stdout
;
readStream
.
on
(
'
close
'
,
()
=>
{
console
.
log
(
'
Readable stream closed
'
)
;
}
)
;
upper
.
on
(
'
close
'
,
()
=>
{
console
.
log
(
'
\n
Transform stream closed
'
)
;
}
)
;
writeStream
.
on
(
'
close
'
,
()
=>
{
console
.
log
(
'
Writable stream closed
'
)
;
}
)
;
pipeline
(
readStream
,
upper
,
writeStream
,
err
=>
{
if
(
err
)
{
return
console
.
error
(
'
Pipeline error:
'
,
err
.
message
)
;
}
console
.
log
(
'
Pipeline succeeded
'
)
;
}
)
;
JavaScript
Copy to clipboard
In this case, all streams will be closed with the following output:
CONST
FS
=
Transform
stream
closed
Writable
stream
closed
Pipeline
error:
BOOM!
Readable
stream
closed
Shell
Copy to clipboard
The
pipeline()
method also has an
async pipeline()
version, which doesn’t accept a callback but instead returns a promise that is rejected if the pipeline fails.
Async Iterators
Async iterators are recommended as the standard way of interfacing with the Streams API. Compared to all the stream primitives in both the Web and Node.js, async iterators are easier to understand and use, contributing to fewer bugs and more maintainable code. In recent versions of Node.js, async iterators have emerged as a more elegant and readable way to interact with streams. Building upon the foundation of events, async iterators provide a higher-level abstraction that simplifies stream consumption.
In Node.js, all readable streams are asynchronous iterables. This means you can use the
for await...of
syntax to loop through the stream's data as it becomes available, handling each piece of data with the efficiency and simplicity of asynchronous code.
Benefits of Using Async Iterators with Streams
Using async iterators with streams simplifies the handling of asynchronous data flows in several ways:
Enhanced Readability
: The code structure is cleaner and more readable, particularly when dealing with multiple asynchronous data sources.
Error Handling
: Async iterators allow straightforward error handling using try/catch blocks, akin to regular asynchronous functions.
Flow Control
: They inherently manage backpressure, as the consumer controls the flow by awaiting the next piece of data, allowing for more efficient memory usage and processing.
Async iterators offer a more modern and often more readable way to work with readable streams, especially when dealing with asynchronous data sources or when you prefer a more sequential, loop-based approach to data processing.
Here's an example demonstrating the use of async iterators with a readable stream:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
{
pipeline
}
=
require
(
'
node:stream/promises
'
)
;
async
function
main
()
{
await
pipeline
(
fs
.
createReadStream
(
__filename
)
,
async
function*
(
source
)
{
for
await
(
let
chunk
of
source
)
{
yield
chunk
.
toString
()
.
toUpperCase
()
;
}
},
process
.
stdout
)
;
}
main
()
.
catch
(
console
.
error
)
;
JavaScript
Copy to clipboard
This code achieves the same result as the previous examples, without the need to define a new transform stream. The error from the previous examples has been removed for the sake of brevity. The async version of the pipeline has been used, and it should be wrapped in a
try...catch
block to handle possible errors.
Object mode
By default, streams can work with strings,
Buffer
,
TypedArray
, or
DataView
. If an arbitrary value different from these (e.g., an object) is pushed into a stream, a
TypeError
will be thrown. However, it is possible to work with objects by setting the
objectMode
option to
true
. This allows the stream to work with any JavaScript value, except for
null
, which is used to signal the end of the stream. This means you can
push
and
read
any value in a readable stream, and
write
any value in a writable stream.
CJS
ESM
const
{
Readable
}
=
require
(
'
node:stream
'
)
;
const
readable
=
Readable
(
{
objectMode
:
true
,
read
()
{
this
.
push
(
{
hello
:
'
world
'
}
)
;
this
.
push
(
null
)
;
},
}
)
;
JavaScript
Copy to clipboard
When working in object mode, it is important to remember that the
highWaterMark
option refers to the number of objects, not bytes.
Backpressure
When using streams, it is important to make sure the producer doesn't overwhelm the consumer. For this, the backpressure mechanism is used in all streams in the Node.js API, and implementors are responsible for maintaining that behavior.
In any scenario where the data buffer has exceeded the
highWaterMark
or the write queue is currently busy,
.write()
will return
false
.
When a
false
value is returned, the backpressure system kicks in. It will pause the incoming
Readable
stream from sending any data and wait until the consumer is ready again. Once the data buffer is emptied, a
'drain'
event will be emitted to resume the incoming data flow.
For a deeper understanding of backpressure, check the
backpressure guide
.
Streams vs Web streams
The stream concept is not exclusive to Node.js. In fact, Node.js has a different implementation of the stream concept called
Web Streams
, which implements the
WHATWG Streams Standard
. Although the concepts behind them are similar, it is important to be aware that they have different APIs and are not directly compatible.
Web Streams
implement the
ReadableStream
,
WritableStream
, and
TransformStream
classes, which are homologous to Node.js's
Readable
,
Writable
, and
Transform
streams.
Interoperability of streams and Web Streams
Node.js provides utility functions to convert to/from Web Streams and Node.js streams. These functions are implemented as
toWeb
and
fromWeb
methods in each stream class.
The following example in the
Duplex
class demonstrates how to work with both readable and writable streams converted to Web Streams:
CJS
ESM
const
{
Duplex
}
=
require
(
'
node:stream
'
)
;
const
duplex
=
Duplex
(
{
read
()
{
this
.
push
(
'
world
'
)
;
this
.
push
(
null
)
;
},
write
(
chunk
,
encoding
,
callback
)
{
console
.
log
(
'
writable
'
,
chunk
)
;
callback
()
;
},
}
)
;
const
{
readable
,
writable
}
=
Duplex
.
toWeb
(
duplex
)
;
writable
.
getWriter
()
.
write
(
'
hello
'
)
;
readable
.
getReader
()
.
read
()
.
then
(
result
=>
{
console
.
log
(
'
readable
'
,
result
.
value
)
;
}
)
;
JavaScript
Copy to clipboard
The helper functions are useful if you need to return a Web Stream from a Node.js module or vice versa. For regular consumption of streams, async iterators enable seamless interaction with both Node.js and Web Streams.
CJS
ESM
const
{
pipeline
}
=
require
(
'
node:stream/promises
'
)
;
async
function
main
()
{
const
{
body
}
=
await
fetch
(
'
https://nodejs.org/api/stream.html
'
)
;
await
pipeline
(
body
,
new
TextDecoderStream
()
,
async
function*
(
source
)
{
for
await
(
const
chunk
of
source
)
{
yield
chunk
.
toString
()
.
toUpperCase
()
;
}
},
process
.
stdout
)
;
}
main
()
.
catch
(
console
.
error
)
;
JavaScript
Copy to clipboard
Be aware that the fetch body is a
ReadableStream<Uint8Array>
, and therefore a
TextDecoderStream
is needed to work with chunks as strings.
This work is derived from content published by
Matteo Collina
in
Platformatic's Blog
.

---

# Backpressuring in Streams
> **Fonte original:** [https://nodejs.org/learn/modules/backpressuring-in-streams](https://nodejs.org/learn/modules/backpressuring-in-streams)

Backpressuring in Streams
There is a general problem that occurs during data handling called
backpressure
and describes a buildup of data behind a buffer during data
transfer. When the receiving end of the transfer has complex operations, or is
slower for whatever reason, there is a tendency for data from the incoming
source to accumulate, like a clog.
To solve this problem, there must be a delegation system in place to ensure a
smooth flow of data from one source to another. Different communities have
resolved this issue uniquely to their programs, Unix pipes and TCP sockets are
good examples of this, and are often referred to as
flow control
. In
Node.js, streams have been the adopted solution.
The purpose of this guide is to further detail what backpressure is, and how
exactly streams address this in Node.js' source code. The second part of
the guide will introduce suggested best practices to ensure your application's
code is safe and optimized when implementing streams.
We assume a little familiarity with the general definition of
backpressure
,
Buffer
, and
EventEmitters
in Node.js, as well as
some experience with
Stream
. If you haven't read through those docs,
it's not a bad idea to take a look at the API documentation first, as it will
help expand your understanding while reading this guide.
The Problem with Data Handling
In a computer system, data is transferred from one process to another through
pipes, sockets, and signals. In Node.js, we find a similar mechanism called
Stream
. Streams are great! They do so much for Node.js and almost every
part of the internal codebase utilizes that module. As a developer, you
are more than encouraged to use them too!
CJS
ESM
const
readline
=
require
(
'
node:readline
'
)
;
// process.stdin and process.stdout are both instances of Streams.
const
rl
=
readline
.
createInterface
(
{
input
:
process
.
stdin
,
output
:
process
.
stdout
,
}
)
;
rl
.
question
(
'
Why should you use streams?
'
,
answer
=>
{
console
.
log
(
`
Maybe it's
${
answer
}
, maybe it's because they are awesome! :)
`
)
;
rl
.
close
()
;
}
)
;
JavaScript
Copy to clipboard
A good example of why the backpressure mechanism implemented through streams is
a great optimization can be demonstrated by comparing the internal system tools
from Node.js'
Stream
implementation.
In one scenario, we will take a large file (approximately ~9 GB) and compress it
using the familiar
zip(1)
tool.
zip
The.Matrix.1080p.mkv
While that will take a few minutes to complete, in another shell we may run
a script that takes Node.js' module
zlib
, that wraps around another
compression tool,
gzip(1)
.
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
gzip
=
require
(
'
node:zlib
'
)
.
createGzip
()
;
const
inp
=
fs
.
createReadStream
(
'
The.Matrix.1080p.mkv
'
)
;
const
out
=
fs
.
createWriteStream
(
'
The.Matrix.1080p.mkv.gz
'
)
;
inp
.
pipe
(
gzip
)
.
pipe
(
out
)
;
JavaScript
Copy to clipboard
To test the results, try opening each compressed file. The file compressed by
the
zip(1)
tool will notify you the file is corrupt, whereas the
compression finished by
Stream
will decompress without error.
In this example, we use
.pipe()
to get the data source from one end
to the other. However, notice there are no proper error handlers attached. If
a chunk of data were to fail to be properly received, the
Readable
source or
gzip
stream will not be destroyed.
pump
is a utility tool that would
properly destroy all the streams in a pipeline if one of them fails or closes,
and is a must-have in this case!
pump
is only necessary for Node.js 8.x or earlier, as for Node.js 10.x
or later version,
pipeline
is introduced to replace for
pump
.
This is a module method to pipe between streams forwarding errors and properly
cleaning up and providing a callback when the pipeline is complete.
Here is an example of using pipeline:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
{
pipeline
}
=
require
(
'
node:stream
'
)
;
const
zlib
=
require
(
'
node:zlib
'
)
;
// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.
// A pipeline to gzip a potentially huge video file efficiently:
pipeline
(
fs
.
createReadStream
(
'
The.Matrix.1080p.mkv
'
)
,
zlib
.
createGzip
()
,
fs
.
createWriteStream
(
'
The.Matrix.1080p.mkv.gz
'
)
,
err
=>
{
if
(
err
)
{
console
.
error
(
'
Pipeline failed
'
,
err
)
;
}
else
{
console
.
log
(
'
Pipeline succeeded
'
)
;
}
}
)
;
JavaScript
Copy to clipboard
You can also use the
stream/promises
module to use pipeline with
async
/
await
:
CJS
ESM
const
fs
=
require
(
'
node:fs
'
)
;
const
{
pipeline
}
=
require
(
'
node:stream/promises
'
)
;
const
zlib
=
require
(
'
node:zlib
'
)
;
async
function
run
()
{
try
{
await
pipeline
(
fs
.
createReadStream
(
'
The.Matrix.1080p.mkv
'
)
,
zlib
.
createGzip
()
,
fs
.
createWriteStream
(
'
The.Matrix.1080p.mkv.gz
'
)
)
;
console
.
log
(
'
Pipeline succeeded
'
)
;
}
catch
(
err
)
{
console
.
error
(
'
Pipeline failed
'
,
err
)
;
}
}
JavaScript
Copy to clipboard
Too Much Data, Too Quickly
There are instances where a
Readable
stream might give data to the
Writable
much too quickly — much more than the consumer can handle!
When that occurs, the consumer will begin to queue all the chunks of data for
later consumption. The write queue will get longer and longer, and because of
this more data must be kept in memory until the entire process has been completed.
Writing to a disk is a lot slower than reading from a disk, thus, when we are
trying to compress a file and write it to our hard disk, backpressure will
occur because the write disk will not be able to keep up with the speed from
the read.
// Secretly the stream is saying: "whoa, whoa! hang on, this is way too much!"
// Data will begin to build up on the read side of the data buffer as
// `write` tries to keep up with the incoming data flow.
inp
.
pipe
(
gzip
)
.
pipe
(
outputFile
)
;
JavaScript
Copy to clipboard
This is why a backpressure mechanism is important. If a backpressure system was
not present, the process would use up your system's memory, effectively slowing
down other processes, and monopolizing a large part of your system until
completion.
This results in a few things:
Slowing down all other current processes
A very overworked garbage collector
Memory exhaustion
In the following examples, we will take out the
return value
of the
.write()
function and change it to
true
, which effectively disables
backpressure support in Node.js core. In any reference to 'modified' binary,
we are talking about running the
node
binary without the
return ret;
line,
and instead with the replaced
return true;
.
Excess Drag on Garbage Collection
Let's take a look at a quick benchmark. Using the same example from above, we
ran a few time trials to get a median time for both binaries.
trial
(#)
|
`node`
binary
(ms)
|
modified
`node`
binary
(ms)
=================================================================
1
|
56924
|
55011
2
|
52686
|
55869
3
|
59479
|
54043
4
|
54473
|
55229
5
|
52933
|
59723
=================================================================
average
time:
|
55299
|
55975
Both take around a minute to run, so there's not much of a difference at all,
but let's take a closer look to confirm whether our suspicions are correct. We
use the Linux tool
dtrace
to evaluate what's happening with the V8 garbage
collector.
The GC (garbage collector) measured time indicates the intervals of a full cycle
of a single sweep done by the garbage collector:
approx.
time
(ms)
|
GC
(ms)
|
modified
GC
(ms)
=================================================
0
|
0
|
0
1
|
0
|
0
40
|
0
|
2
170
|
3
|
1
300
|
3
|
1
*
*
*
*
*
*
*
*
*
39000
|
6
|
26
42000
|
6
|
21
47000
|
5
|
32
50000
|
8
|
28
54000
|
6
|
35
While the two processes start the same and seem to work the GC at the same
rate, it becomes evident that after a few seconds with a properly working
backpressure system in place, it spreads the GC load across consistent
intervals of 4-8 milliseconds until the end of the data transfer.
However, when a backpressure system is not in place, the V8 garbage collection
starts to drag out. The normal binary called the GC fires approximately
75
times in a minute, whereas, the modified binary fires only
36
times.
This is the slow and gradual debt accumulating from growing memory usage. As
data gets transferred, without a backpressure system in place, more memory is
being used for each chunk transfer.
The more memory that is being allocated, the more the GC has to take care of in
one sweep. The bigger the sweep, the more the GC needs to decide what can be
freed up, and scanning for detached pointers in a larger memory space will
consume more computing power.
Memory Exhaustion
To determine the memory consumption of each binary, we've clocked each process
with
/usr/bin/time -lp sudo ./node ./backpressure-example/zlib.js
individually.
This is the output on the normal binary:
Respecting
the
return
value
of
.write()
=============================================
real
58.88
user
56.79
sys
8.79
87810048
maximum
resident
set
size
0
average
shared
memory
size
0
average
unshared
data
size
0
average
unshared
stack
size
19427
page
reclaims
3134
page
faults
0
swaps
5
block
input
operations
194
block
output
operations
0
messages
sent
0
messages
received
1
signals
received
12
voluntary
context
switches
666037
involuntary
context
switches
The maximum byte size occupied by virtual memory turns out to be approximately
87.81 mb.
And now changing the
return value
of the
.write()
function, we get:
Without
respecting
the
return
value
of
.write():
==================================================
real
54.48
user
53.15
sys
7.43
1524965376
maximum
resident
set
size
0
average
shared
memory
size
0
average
unshared
data
size
0
average
unshared
stack
size
373617
page
reclaims
3139
page
faults
0
swaps
18
block
input
operations
199
block
output
operations
0
messages
sent
0
messages
received
1
signals
received
25
voluntary
context
switches
629566
involuntary
context
switches
The maximum byte size occupied by virtual memory turns out to be approximately
1.52 gb.
Without streams in place to delegate the backpressure, there is an order of
magnitude greater of memory space being allocated - a huge margin of
difference between the same process!
This experiment shows how optimized and cost-effective Node.js' backpressure
mechanism is for your computing system. Now, let's do a breakdown of how it
works!
How Does Backpressure Resolve These Issues?
There are different functions to transfer data from one process to another. In
Node.js, there is an internal built-in function called
.pipe()
. There are
other packages
out there you can use too! Ultimately though, at the basic
level of this process, we have two separate components: the
source
of the
data and the
consumer
.
When
.pipe()
is called from the source, it signals to the consumer that
there is data to be transferred. The pipe function helps to set up the
appropriate backpressure closures for the event triggers.
In Node.js the source is a
Readable
stream and the consumer is the
Writable
stream (both of these may be interchanged with a
Duplex
or
a
Transform
stream, but that is out-of-scope for this guide).
The moment that backpressure is triggered can be narrowed exactly to the return
value of a
Writable
's
.write()
function. This return value is
determined by a few conditions, of course.
In any scenario where the data buffer has exceeded the
highWaterMark
or
the write queue is currently busy,
.write()
will return
false
.
When a
false
value is returned, the backpressure system kicks in. It will
pause the incoming
Readable
stream from sending any data and wait until
the consumer is ready again. Once the data buffer is emptied, a
'drain'
event will be emitted and resume the incoming data flow.
Once the queue is finished, backpressure will allow data to be sent again.
The space in memory that was being used will free itself up and prepare for the
next batch of data.
This effectively allows a fixed amount of memory to be used at any given
time for a
.pipe()
function. There will be no memory leakage, and no
infinite buffering, and the garbage collector will only have to deal with
one area in memory!
So, if backpressure is so important, why have you (probably) not heard of it?
Well, the answer is simple: Node.js does all of this automatically for you.
That's so great! But also not so great when we are trying to understand how to
implement our custom streams.
In most machines, there is a byte size that determines when a buffer
is full (which will vary across different machines). Node.js allows you to set
your custom
highWaterMark
, but commonly, the default is set to 16kb
(16384, or 16 for objectMode streams). In instances where you might
want to raise that value, go for it, but do so with caution!
Lifecycle of
.pipe()
To achieve a better understanding of backpressure, here is a flow-chart on the
lifecycle of a
Readable
stream being
piped
into a
Writable
stream:
+===================+
x-->
Piping
functions
+-->
src.pipe(dest)
|
x
are
set
up
during
|===================|
x
the
.pipe
method.
|
Event
callbacks
|
+===============+
x
|-------------------|
|
Your
Data
|
x
They
exist
outside
|
.on('close',
cb)
|
+=======+=======+
x
the
data
flow,
but
|
.on('data',
cb)
|
|
x
importantly
attach
|
.on('drain',
cb)
|
|
x
events,
and
their
|
.on('unpipe',
cb)
|
+---------v---------+
x
respective
callbacks.
|
.on('error',
cb)
|
|
Readable
Stream
+----+
|
.on('finish',
cb)
|
+-^-------^-------^-+
|
|
.on('end',
cb)
|
^
|
^
|
+-------------------+
|
|
|
|
|
^
|
|
^
^
^
|
+-------------------+
+=================+
^
|
^
+---->
Writable
Stream
+--------->
.write(chunk)
|
|
|
|
+-------------------+
+=======+=========+
|
|
|
|
|
^
|
+------------------v---------+
^
|
+->
if
(!chunk)
|
Is
this
chunk
too
big?
|
^
|
|
emit
.end();
|
Is
the
queue
busy?
|
|
|
+->
else
+-------+----------------+---+
|
^
|
emit
.write();
|
|
|
^
^
+--v---+
+---v---+
|
|
^-----------------------------------<
No
|
|
Yes
|
^
|
+------+
+---v---+
^
|
|
|
^
emit
.pause();
+=================+
|
|
^---------------^-----------------------+
return
false;
<-----+---+
|
+=================+
|
|
|
^
when
queue
is
empty
+============+
|
^------------^-----------------------<
Buffering
|
|
|
|============|
|
+>
emit
.drain();
|
^Buffer^
|
|
+>
emit
.resume();
+------------+
|
|
^Buffer^
|
|
+------------+
add
chunk
to
queue
|
|
<---^---------------------<
+============+
If you are setting up a pipeline to chain together a few streams to
manipulate your data, you will most likely be implementing
Transform
stream.
In this case, your output from your
Readable
stream will enter in the
Transform
and will pipe into the
Writable
.
Readable
.
pipe
(
Transformable
)
.
pipe
(
Writable
)
;
Backpressure will be automatically applied, but note that both the incoming and
outgoing
highWaterMark
of the
Transform
stream may be manipulated and
will affect the backpressure system.
Backpressure Guidelines
Since
Node.js v0.10
, the
Stream
class has offered the ability to
modify the behavior of the
.read()
or
.write()
by using the
underscore version of these respective functions (
._read()
and
._write()
).
There are guidelines documented for
implementing Readable streams
and
implementing Writable streams
. We will assume you've read these over, and
the next section will go a little bit more in-depth.
Rules to Abide By When Implementing Custom Streams
The golden rule of streams is
to always respect backpressure
. What
constitutes as best practice is non-contradictory practice. So long as you are
careful to avoid behaviors that conflict with internal backpressure support,
you can be sure you're following good practice.
In general,
Never
.push()
if you are not asked.
Never call
.write()
after it returns false but wait for 'drain' instead.
Streams changes between different Node.js versions, and the library you use.
Be careful and test things.
In regards to point 3, an incredibly useful package for building
browser streams is
readable-stream
. Rodd Vagg has written a
great blog post
describing the utility of this library. In short, it
provides a type of automated graceful degradation for
Readable
streams,
and supports older versions of browsers and Node.js.
Rules specific to Readable Streams
So far, we have taken a look at how
.write()
affects backpressure and have
focused much on the
Writable
stream. Because of Node.js' functionality,
data is technically flowing downstream from
Readable
to
Writable
.
However, as we can observe in any transmission of data, matter, or energy, the
source is just as important as the destination, and the
Readable
stream
is vital to how backpressure is handled.
Both these processes rely on one another to communicate effectively, if
the
Readable
ignores when the
Writable
stream asks for it to stop
sending in data, it can be just as problematic as when the
.write()
's return
value is incorrect.
So, as well as respecting the
.write()
return, we must also respect the
return value of
.push()
used in the
._read()
method. If
.push()
returns a
false
value, the stream will stop reading from the
source. Otherwise, it will continue without pause.
Here is an example of bad practice using
.push()
:
// This is problematic as it completely ignores the return value from the push
// which may be a signal for backpressure from the destination stream!
class
MyReadable
extends
Readable
{
_read
(
size
)
{
let
chunk
;
while
(
null
!==
(
chunk
=
getNextChunk
()))
{
this
.
push
(
chunk
)
;
}
}
}
JavaScript
Copy to clipboard
Here is an example of good practice, where the
Readable
stream respects backpressure by checking the return value of
this.push()
:
class
MyReadable
extends
Readable
{
_read
(
size
)
{
let
chunk
;
let
canPushMore
=
true;
while
(
canPushMore
&&
null
!==
(
chunk
=
getNextChunk
()))
{
canPushMore
=
this
.
push
(
chunk
)
;
}
}
}
JavaScript
Copy to clipboard
Additionally, from outside the custom stream, there are pitfalls to ignoring
backpressure. In this counter-example of good practice, the application's code
forces data through whenever it is available (signaled by the
'data'
event
):
// This ignores the backpressure mechanisms Node.js has set in place,
// and unconditionally pushes through data, regardless if the
// destination stream is ready for it or not.
readable
.
on
(
'
data
'
,
data
=>
writable
.
write
(
data
))
;
JavaScript
Copy to clipboard
Here's an example of using
.push()
with a Readable stream.
CJS
ESM
const
{
Readable
}
=
require
(
'
node:stream
'
)
;
// Create a custom Readable stream
const
myReadableStream
=
new
Readable
(
{
objectMode
:
true
,
read
(
size
)
{
// Push some data onto the stream
this
.
push
(
{
message
:
'
Hello, world!
'
}
)
;
this
.
push
(
null
)
;
// Mark the end of the stream
},
}
)
;
// Consume the stream
myReadableStream
.
on
(
'
data
'
,
chunk
=>
{
console
.
log
(
chunk
)
;
}
)
;
// Output:
// { message: 'Hello, world!' }
JavaScript
Copy to clipboard
In this example, we create a custom Readable stream that pushes a single object
onto the stream using
.push()
. The
._read()
method is called when the stream is ready
to consume data, and in this case, we immediately push some data onto the stream and
mark the end of the stream by pushing null.
We then consume the stream by listening for the 'data' event and logging each chunk of
data that is pushed onto the stream. In this case, we only push a single chunk of data
onto the stream, so we only see one log message.
Rules specific to Writable Streams
Recall that a
.write()
may return true or false dependent on some
conditions. Luckily for us, when building our own
Writable
stream,
the
stream state machine
will handle our callbacks and determine when to
handle backpressure and optimize the flow of data for us.
However, when we want to use a
Writable
directly, we must respect the
.write()
return value and pay close attention to these conditions:
If the write queue is busy,
.write()
will return false.
If the data chunk is too large,
.write()
will return false (the limit
is indicated by the variable,
highWaterMark
).
// This writable is invalid because of the async nature of JavaScript callbacks.
// Without a return statement for each callback prior to the last,
// there is a great chance multiple callbacks will be called.
class
MyWritable
extends
Writable
{
_write
(
chunk
,
encoding
,
callback
)
{
if
(
chunk
.
toString
()
.
indexOf
(
'
a
'
)
>=
0
)
{
callback
()
;
}
else
if
(
chunk
.
toString
()
.
indexOf
(
'
b
'
)
>=
0
)
{
callback
()
;
}
callback
()
;
}
}
// The proper way to write this would be:
if
(
chunk
.
contains
(
'
a
'
))
{
return
callback
()
;
}
if
(
chunk
.
contains
(
'
b
'
))
{
return
callback
()
;
}
callback
()
;
JavaScript
Copy to clipboard
There are also some things to look out for when implementing
._writev()
.
The function is coupled with
.cork()
, but there is a common mistake when
writing:
// Using .uncork() twice here makes two calls on the C++ layer, rendering the
// cork/uncork technique useless.
ws
.
cork
()
;
ws
.
write
(
'
hello
'
)
;
ws
.
write
(
'
world
'
)
;
ws
.
uncork
()
;
ws
.
cork
()
;
ws
.
write
(
'
from
'
)
;
ws
.
write
(
'
Matteo
'
)
;
ws
.
uncork
()
;
// The correct way to write this is to utilize process.nextTick(), which fires
// on the next event loop.
ws
.
cork
()
;
ws
.
write
(
'
hello
'
)
;
ws
.
write
(
'
world
'
)
;
process
.
nextTick
(
doUncork
,
ws
)
;
ws
.
cork
()
;
ws
.
write
(
'
from
'
)
;
ws
.
write
(
'
Matteo
'
)
;
process
.
nextTick
(
doUncork
,
ws
)
;
// As a global function.
function
doUncork
(
stream
)
{
stream
.
uncork
()
;
}
JavaScript
Copy to clipboard
.cork()
can be called as many times as we want, we just need to be careful to
call
.uncork()
the same amount of times to make it flow again.
Conclusion
Streams are an often-used module in Node.js. They are important to the internal
structure, and for developers, to expand and connect across the Node.js modules
ecosystem.
Hopefully, you will now be able to troubleshoot and safely code your own
Writable
and
Readable
streams with backpressure in mind, and share
your knowledge with colleagues and friends.
Be sure to read up more on
Stream
for other API functions to help
improve and unleash your streaming capabilities when building an application with
Node.js.

---

# Publishing a package
> **Fonte original:** [https://nodejs.org/learn/modules/publishing-a-package](https://nodejs.org/learn/modules/publishing-a-package)

Publishing a package
All the provided
package.json
configurations (not specifically marked “does not work”) work in Node.js 12.22.x (v12 latest, the oldest supported line) and 17.2.0 current latest at the time
1
, and for grins, with webpack 5.53.0 and 5.63.0 respectively. These are available:
JakobJingleheimer/nodejs-module-config-examples
.
For curious cats,
How did we get here
and
Down the rabbit-hole
provide background and deeper explanations.
Pick your fix
There are 2 main options, which cover almost all use-cases:
Write source code and publish in CJS (you use
require()
); CJS is consumable by both CJS and ESM (in all versions of node). Skip to
CJS source and distribution
.
Write source code and publish in ESM (you use
import
, and don't use top-level
await
); ESM is consumable by both ESM and CJS (in node 22.x and 23.x; see
require()
an ES Module
). Skip to
ESM source and distribution
.
It's generally best to publish only 1 format, either CJS
or
ESM. Not both. Publishing multiple formats can result in the
dual-package hazard
, as well as other drawbacks.
There are other options available, mostly for historical purposes.
You as a package author write
Consumers of your package write their code in
Your options
CJS source code using
require()
ESM: consumers
import
your package
CJS source and only ESM distribution
CJS source code using
require()
CJS & ESM: consumers either
require()
or
import
your package
CJS source and both CJS & ESM distribution
ESM source code using
import
CJS: consumers
require()
your package (and you use top-level
await
)
ESM source with only CJS distribution
ESM source code using
import
CJS & ESM: consumers either
require()
or
import
your package
ESM source and both CJS & ESM distribution
CJS source and distribution
The most minimal configuration may be only
"name"
. But the less arcane, the better: Essentially just declare the package’s exports via the
"exports"
field/field-set.
Working example
:
cjs-with-cjs-distro
Minimal package.json
Advanced (verbose) package.json
{
"
name
"
:
"
cjs-source-and-distribution
"
// "main": "./index.js"
}
JSON
Copy to clipboard
Note that
packageJson.exports["."] = filepath
is shorthand for
packageJson.exports["."].default = filepath
ESM source and distribution
Simple, tried, and true.
Note that since Node.js v23.0.0, it is possible to
require
static ESM (code that does not use top-level
await
). See
Loading ECMAScript modules using
require()
for details.
This is almost exactly the same as the CJS-CJS configuration above with 1 small difference: the
"type"
field.
Working example
:
esm-with-esm-distro
Minimal package.json
Advanced (verbose) package.json
{
"
name
"
:
"
esm-source-and-distribution
"
,
"
type
"
:
"
module
"
// "main": "./index.js"
}
JSON
Copy to clipboard
Note that ESM now
is
“backwards” compatible with CJS: a CJS module now
can
require()
an ES Module
without a flag as of 23.0.0 and 22.12.0.
CJS source and only ESM distribution
This takes a small bit of finesse but is also pretty straight-forward. This may be the choice pick of older projects targetting newer standards, or authors who merely prefer CJS but are publishing for a different environment.
Working example
:
cjs-with-esm-distro
Minimal package.json
Advanced (verbose) package.json
{
"
name
"
:
"
cjs-source-with-esm-distribution
"
,
"
main
"
:
"
./dist/index.mjs
"
}
JSON
Copy to clipboard
The
.mjs
file extension is a trump-card: it will override
any
other configuration and the file will be treated as ESM. Using this file extension is necessary because
packageJson.exports.import
does
NOT
signify that the file is ESM (contrary to common, if not universal, misperception), only that it is the file to be used when the package is imported (ESM
can
import CJS. See
Gotchas
below).
CJS source and both CJS & ESM distribution
In order to
directly
supply both audiences (so that your distribution works "natively" in either), you have a few options:
Attach named exports directly onto
exports
Classic but takes some sophistication and finesse. This means adding properties onto the existing
module.exports
(instead of re-assigning
module.exports
as a whole).
Working example
:
cjs-with-dual-distro (properties)
Minimal package.json
Advanced (verbose) package.json
{
"
name
"
:
"
cjs-source-with-esm-via-properties-distribution
"
,
"
main
"
:
"
./dist/cjs/index.js
"
}
JSON
Copy to clipboard
Pros:
Smaller package weight
Easy and simple (probably least effort if you don't mind keeping to a minor syntax stipulation)
Precludes
the Dual-Package Hazard
Cons:
Requires very specific syntax (either in source code and/or bundler gymnastics).
Sometimes, a CJS module may re-assign
module.exports
to something else (be it an object or a function) like this:
const
someObject
=
{
foo
()
{},
bar
()
{},
qux
()
{},
}
;
module
.
exports
=
someObject
;
JavaScript
Copy to clipboard
Node.js detects the named exports in CJS via
static analysis that look for certain patterns
, which the example above evades. To make the named exports detectable, do this:
module
.
exports
.
foo
=
function
foo
()
{}
;
module
.
exports
.
bar
=
function
bar
()
{}
;
module
.
exports
.
qux
=
function
qux
()
{}
;
JavaScript
Copy to clipboard
Use a simple ESM wrapper
Complicated setup and difficult to get the balance right.
Working example
:
cjs-with-dual-distro (wrapper)
Minimal package.json
Advanced (verbose) package.json
{
"
name
"
:
"
cjs-with-wrapper-dual-distro
"
,
"
exports
"
:
{
"
.
"
:
{
"
import
"
:
"
./dist/esm/wrapper.mjs
"
,
"
require
"
:
"
./dist/cjs/index.js
"
,
"
default
"
:
"
./dist/cjs/index.js
"
}
}
}
JSON
Copy to clipboard
Pros:
Smaller package weight
Cons:
Likely requires complicated bundler gymnastics (we could not find any existing option to automate this in Webpack).
When the CJS output from the bundler evades the named exports detection in Node.js, a ESM wrapper can be used to explicitly re-export the known named exports for ESM consumers.
When CJS exports an object (which gets aliased to ESM's
default
), you can save references to all the members of the object locally in the wrapper, and then re-export them so the ESM consumer can access all of them by name.
import
cjs
from
'
../cjs/index.js
'
;
const
{
a
,
b
,
c
/* … */
}
=
cjs
;
export
{
a
,
b
,
c
/* … */
}
;
JavaScript
Copy to clipboard
However
, this does break live bindings: a reassignment to
cjs.a
will not reflect in
esmWrapper.a
.
Two full distributions
Chuck in a bunch of stuff and hope for the best. This is probably the most common and easiest of the CJS to CJS & ESM options, but you pay for it. This is rarely a good idea.
Working example
:
cjs-with-dual-distro (double)
Minimal package.json
Advanced (verbose) package.json
{
"
name
"
:
"
cjs-with-full-dual-distro
"
,
"
exports
"
:
{
"
.
"
:
{
"
import
"
:
"
./dist/esm/index.mjs
"
,
"
require
"
:
"
./dist/cjs/index.js
"
,
"
default
"
:
"
./dist/cjs/index.js
"
}
}
}
JSON
Copy to clipboard
Pros:
Simple bundler configuration
Cons:
Larger package weight (basically double)
Vulnerable to
the Dual-Package Hazard
Alternatively, you can use
"default"
and
"node"
keys, which are less counter-intuitive: Node.js will always choose the
"node"
option (which always works), and non-Node.js tooling will choose
"default"
when configured to target something other than node.
This precludes the dual-package hazard.
Minimal package.json
Advanced (verbose) package.json
{
"
name
"
:
"
cjs-with-alt-full-dual-distro
"
,
"
exports
"
:
{
"
.
"
:
{
"
node
"
:
"
./dist/cjs/index.js
"
,
"
default
"
:
"
./dist/esm/index.mjs
"
}
}
}
JSON
Copy to clipboard
ESM source with only CJS distribution
We're not in Kansas anymore, Toto.
The configurations (there are 2 options) are nearly the same as
ESM source and both CJS & ESM distribution
, just exclude
packageJson.exports.import
.
💡 Using
"type": "module"
2
paired with the
.cjs
file extension (for commonjs files) yields best results. For more information on why, see
Down the rabbit-hole
and
Gotchas
below.
Working example
:
esm-with-cjs-distro
ESM source and both CJS & ESM distribution
When source code is written in non-JavaScript (ex TypeScript), options can be limited due to needing to use file extension(s) specific to that language (ex
.ts
) and there may be no
.mjs
equivalent.
Similar to
CJS source and both CJS & ESM distribution
, you have the same options.
Publish only a CJS distribution with property exports
Tricky to make and needs good ingredients.
This option is almost identical to the
CJS source with CJS & ESM distribution's property exports
above. The only difference is in package.json:
"type": "module"
.
Only some build tools support generating this output.
Rollup
produces compatible output out of the box when targetting commonjs. Webpack as of
v5.66.0+
does with the new
commonjs-static
output type, (prior to this, no commonjs options produces compatible output). It is not currently possible with
esbuild
(which produces a non-static
exports
).
The working example below was created prior to Webpack's recent release, so it uses Rollup (I'll get around to adding a Webpack option too).
These examples assume javascript files within use the extension
.js
;
"type"
in
package.json
controls how those are interpreted:
"type":"commonjs"
+
.js
→
cjs
"type":"module"
+
.js
→
mjs
If your files explicitly
all
use
.cjs
and/or
.mjs
file extensions (none use
.js
),
"type"
is superfluous.
Working example
:
esm-with-cjs-distro
Minimal package.json
Advanced (verbose) package.json
{
"
name
"
:
"
esm-with-cjs-distribution
"
,
"
type
"
:
"
module
"
,
"
main
"
:
"
./dist/index.cjs
"
}
JSON
Copy to clipboard
💡 Using
"type": "module"
2
paired with the
.cjs
file extension (for commonjs files) yields best results. For more information on why, see
Down the rabbit-hole
and
Gotchas
below.
Publish a CJS distribution with an ESM wrapper
There's a lot going on here, and this is usually not the best.
This is also almost identical to the
CJS source and dual distribution using an ESM wrapper
, but with subtle differences
"type": "module"
and some
.cjs
file extenions in package.json.
Working example
:
esm-with-dual-distro (wrapper)
Minimal package.json
Advanced (verbose) package.json
{
"
name
"
:
"
esm-with-cjs-and-esm-wrapper-distribution
"
,
"
type
"
:
"
module
"
,
"
exports
"
:
{
"
.
"
:
{
"
import
"
:
"
./dist/esm/wrapper.js
"
,
"
require
"
:
"
./dist/cjs/index.cjs
"
,
"
default
"
:
"
./dist/cjs/index.cjs
"
}
}
}
JSON
Copy to clipboard
💡 Using
"type": "module"
2
paired with the
.cjs
file extension (for commonjs files) yields best results. For more information on why, see
Down the rabbit-hole
and
Gotchas
below.
Publish both full CJS & ESM distributions
Chuck in a bunch of stuff (with a surprise) and hope for the best. This is probably the most common and easiest of the ESM to CJS & ESM options, but you pay for it. This is rarely a good idea.
In terms of package configuration, there are a few options that differ mostly in personal preference.
Mark the whole package as ESM and specifically mark the CJS exports as CJS via the
.cjs
file extension
This option has the least burden on development/developer experience.
This also means that whatever build tooling must produce the distribution file with a
.cjs
file extension. This might necessitate chaining multiple build tools or adding a subsequent step to move/rename the file to have the
.cjs
file extension (ex
mv ./dist/index.js ./dist/index.cjs
). This can be worked around by adding a subsequent step to move/rename those outputted files (ex
Rollup
or
a simple shell script
).
Support for the
.cjs
file extension was added in 12.0.0, and using it will cause ESM to properly recognised a file as commonjs (
import { foo } from './foo.cjs'
works). However,
require()
does not auto-resolve
.cjs
like it does for
.js
, so file extension cannot be omitted as is commonplace in commonjs:
require('./foo')
will fail, but
require('./foo.cjs')
works. Using it in your package's exports has no drawbacks:
packageJson.exports
(and
packageJson.main
) requires a file extension regardless, and consumers reference your package by the
"name"
field of your package.json (so they're blissfully unaware).
Working example
:
esm-with-dual-distro
Minimal import & require package.json
Advanced (verbose) import & require package.json
{
"
type
"
:
"
module
"
,
"
exports
"
:
{
"
.
"
:
{
"
import
"
:
"
./dist/esm/index.js
"
,
"
require
"
:
"
./dist/index.cjs
"
}
}
}
JSON
Copy to clipboard
Alternatively, you can use
"default"
and
"node"
keys, which are less counter-intuitive: Node.js will always choose the
"node"
option (which always works), and non-Node.js tooling will choose
"default"
when configured to target something other than node.
This precludes the dual-package hazard.
Minimal default & node package.json
Advanced (verbose) default & node package.json
{
"
type
"
:
"
module
"
,
"
exports
"
:
{
"
.
"
:
{
"
node
"
:
"
./dist/index.cjs
"
,
"
default
"
:
"
./dist/esm/index.js
"
}
}
}
JSON
Copy to clipboard
💡 Using
"type": "module"
2
paired with the
.cjs
file extension (for commonjs files) yields best results. For more information on why, see
Down the rabbit-hole
and
Gotchas
below.
Use the
.mjs
(or equivalent) file extension for all source code files
The configuration for this is the same as
CJS source and both CJS & ESM distribution
.
Non-JavaScript source code
: The non-JavaScript language’s own configuration needs to recognise/specify that the input files are ESM.
Node.js before 12.22.x
🛑 You should not do this: Versions of Node.js prior to 12.x are End of Life and are now vulnerable to serious security exploits.
If you're a security researcher needing to investigate Node.js prior to v12.22.x, feel free to contact us for help configuring.
General notes
Syntax detection
is
not
a replacement for proper package configuration; syntax detection is not fool-proof and it has
significant performance cost
.
When using
"exports"
in package.json, it is generally a good idea to include
"./package.json": "./package.json"
so that it can be imported (
module.findPackageJSON
is not affected by this limitation, but
import
may be more convenient).
"exports"
can be advisable over
"main"
because it prevents external access to internal code (so you can be relatively sure users are not depending on things they shouldn't). If you don't need that,
"main"
is simpler and may be a better option for you.
The
"engines"
field provides both a human-friendly and a machine-friendly indication of which version(s) of Node.js the package is compatible. Depending on the package manager used, an exception may be thrown causing the installation to fail when the consumer is using an incompatible version of Node.js (which can be very helpful to consumers). Including this field will save a lot of headache for consumers with an older version of Node.js who cannot use the package.
Down the rabbit-hole
Specifically in relation to Node.js, there are 4 problems to solve:
Determining format of source code files (author running their own code)
Determining format of distribution files (code consumers will receive)
Publicising distribution code for when it is
require()
’d (consumer expects CJS)
Publicising distribution code for when it is
import
’d (consumer probably wants ESM)
⚠️ The first 2 are
independent
of the last 2.
The method of loading does NOT determine the format the file is interpreted as:
package.json’s
exports.require
≠
CJS
.
require()
does NOT and cannot blindly interpret the file as CJS; for instance,
require('foo.json')
correctly interprets the file as JSON, not CJS. The module containing the
require()
call of course must be CJS, but what it is loading is not necessarily also CJS.
package.json’s
exports.import
≠
ESM
.
import
similarly does NOT and cannot blindly interpret the file as ESM;
import
can load CJS, JSON, and WASM, as well as ESM. The module containing the
import
statement of course must be ESM, but what it is loading is not necessarily also ESM.
So when you see configuration options citing or named with
require
or
import
, resist the urge to assume they are for
determining
CJS vs ES Modules.
⚠️ Adding an
"exports"
field/field-set to a package’s configuration effectively
blocks deep pathing into the package
for anything not explicitly listed in the exports’ subpathing. This means it can be a breaking change.
⚠️ Consider carefully whether to distribute both CJS and ESM: It creates the potential for the
Dual Package Hazard
(especially if misconfigured and the consumer tries to get clever). This can lead to an extremely confusing bug in consuming projects, especially when your package is not perfectly configured. Consumers can even be blind-sided by an intermediary package that uses the "other" format of your package (e.g. consumer uses the ESM distribution, and some other package the consumer is also using itself uses the CJS distribution). If your package is in any way stateful, consuming both the CJS and ESM distributions will result in parallel states (which is almost surely unintentional).
The dual-package hazard
When an application is using a package that provides both CommonJS and ES module sources, there is a risk of certain bugs if both instances of the package get loaded. This potential comes from the fact that the
pkgInstance
created by
const pkgInstance = require('pkg')
is not the same as the
pkgInstance
created by
import pkgInstance from 'pkg'
(or an alternative main path like
'pkg/module'
). This is the “dual package hazard”, where two instances of the same package can be loaded within the same runtime environment. While it is unlikely that an application or package would intentionally load both instances directly, it is common for an application to load one copy while a dependency of the application loads the other copy. This hazard can happen because Node.js supports intermixing CommonJS and ES modules, and can lead to unexpected and confusing behavior.
If the package main export is a constructor, an
instanceof
comparison of instances created by the two copies returns
false
, and if the export is an object, properties added to one (like
pkgInstance.foo = 3
) are not present on the other. This differs from how
import
and
require
statements work in all-CommonJS or all-ES module environments, respectively, and therefore is surprising to users. It also differs from the behavior users are familiar with when using transpilation via tools like
Babel
or
esm
.
How did we get here
CommonJS (CJS)
was created
long
before ECMAScript Modules (ESM), back when JavaScript was still adolescent—CJS and jQuery were created just 3 years apart. CJS is not an official (
TC39
) standard and is supported by a limited few platforms (most notably, Node.js). ESM as a standard has been incoming for several years; it is currently supported by all major platforms (browsers, Deno, Node.js, etc), meaning it will run pretty much everywhere. As it became clear ESM would effectively succeed CJS (which is still very popular and widespread), many attempted to adopt early on, often before a particular aspect of the ESM specification was finalised. Because of this, those changed over time as better information became available (often informed by learnings/experiences of those eager beavers), going from best-guess to aligning with the specification.
An additional complication is bundlers, which historically managed much of this territory. However, much of what we previously needed bundle(r)s to manage is now native functionality; yet bundlers are still (and likely always will be) necessary for some things. Unfortunately, functionality bundlers no-longer need to provide is deeply ingrained in older bundlers’ implementations, so they can at times be too helpful, and in some cases, anti-pattern (bundling a library is often not recommended by bundler authors themselves). The hows and whys of that are an article unto itself.
Gotchas
The
package.json
's
"type"
field changes the
.js
file extension to mean either
commonjs
or ES
module
respectively. It is very common in dual/mixed packages (that contain both CJS and ESM) to use this field incorrectly.
{
"
type
"
:
"
module
"
,
"
main
"
:
"
./dist/CJS/index.js
"
,
"
exports
"
:
{
"
.
"
:
{
"
import
"
:
"
./dist/esm/index.js
"
,
"
require
"
:
"
./dist/cjs/index.js
"
,
"
default
"
:
"
./dist/cjs/index.js
"
},
"
./package.json
"
:
"
./package.json
"
}
}
JSON
Copy to clipboard
This does not work because
"type": "module"
causes
packageJson.main
,
packageJson.exports["."].require
, and
packageJson.exports["."].default
to get interpreted as ESM (but they’re actually CJS).
Excluding
"type": "module"
produces the opposite problem:
{
"
main
"
:
"
./dist/CJS/index.js
"
,
"
exports
"
:
{
"
.
"
:
{
"
import
"
:
"
./dist/esm/index.js
"
,
"
require
"
:
"
./dist/cjs/index.js
"
,
"
default
"
:
"
./dist/cjs/index.js
"
},
"
./package.json
"
:
"
./package.json
"
}
}
JSON
Copy to clipboard
This does not work because
packageJson.exports["."].import
will get interpreted as CJS (but it’s actually ESM).
Footnotes
There was a bug in Node.js v13.0–13.6 where
packageJson.exports["."]
had to be an array with verbose config options as the first item (as an object) and the “default” as the second item (as a string). See
nodejs/modules#446
.
↩
The
"type"
field in package.json changes what the
.js
file extension means, similar to to an
HTML script element’s type attribute
.
↩
↩
2
↩
3
↩
4

---

# How to publish a Node-API package
> **Fonte original:** [https://nodejs.org/learn/modules/publishing-node-api-modules](https://nodejs.org/learn/modules/publishing-node-api-modules)

How to publish a Node-API version of a package alongside a non-Node-API version
The following steps are illustrated using the package
iotivity-node
:
First, publish the non-Node-API version:
Update the version in
package.json
. For
iotivity-node
, the version
becomes
1.2.0-2
.
Go through the release checklist (ensure tests/demos/docs are OK)
npm publish
Then, publish the Node-API version:
Update the version in
package.json
. In the case of
iotivity-node
,
the version becomes
1.2.0-3
. For versioning, we recommend following
the pre-release version scheme as described by
semver.org
e.g.
1.2.0-napi
.
Go through the release checklist (ensure tests/demos/docs are OK)
npm publish --tag n-api
In this example, tagging the release with
n-api
has ensured that, although
version 1.2.0-3 is later than the non-Node-API published version (1.2.0-2), it
will not be installed if someone chooses to install
iotivity-node
by simply
running
npm install iotivity-node
. This will install the non-Node-API version
by default. The user will have to run
npm install iotivity-node@n-api
to
receive the Node-API version. For more information on using tags with npm check
out
"Using dist-tags"
.
How to introduce a dependency on a Node-API version of a package
To add the Node-API version of
iotivity-node
as a dependency, the
package.json
will look like this:
"
dependencies
"
:
{
"
iotivity-node
"
:
"
n-api
"
}
JSON
Copy to clipboard
As explained in
"Using dist-tags"
, unlike regular versions, tagged versions cannot be
addressed by version ranges such as
"^2.0.0"
inside
package.json
. The
reason for this is that the tag refers to exactly one version. So, if the
package maintainer chooses to tag a later version of the package using the
same tag,
npm update
will receive the later version. This should be
acceptable in most cases. If you need a version other than the latest
published, the
package.json
dependency will have to refer to the exact
version like the following:
"
dependencies
"
:
{
"
iotivity-node
"
:
"
1.2.0-3
"
}
JSON
Copy to clipboard

---

# ABI Stability
> **Fonte original:** [https://nodejs.org/learn/modules/abi-stability](https://nodejs.org/learn/modules/abi-stability)

ABI Stability
Introduction
An Application Binary Interface (ABI) is a way for programs to call functions
and use data structures from other compiled programs. It is the compiled version
of an Application Programming Interface (API). In other words, the headers files
describing the classes, functions, data structures, enumerations, and constants
which enable an application to perform a desired task correspond by way of
compilation to a set of addresses and expected parameter values and memory
structure sizes and layouts with which the provider of the ABI was compiled.
The application using the ABI must be compiled such that the available
addresses, expected parameter values, and memory structure sizes and layouts
agree with those with which the ABI provider was compiled. This is usually
accomplished by compiling against the headers provided by the ABI provider.
Since the provider of the ABI and the user of the ABI may be compiled at
different times with different versions of the compiler, a portion of the
responsibility for ensuring ABI compatibility lies with the compiler. Different
versions of the compiler, perhaps provided by different vendors, must all
produce the same ABI from a header file with a certain content, and must produce
code for the application using the ABI that accesses the API described in a
given header according to the conventions of the ABI resulting from the
description in the header. Modern compilers have a fairly good track record of
not breaking the ABI compatibility of the applications they compile.
The remaining responsibility for ensuring ABI compatibility lies with the team
maintaining the header files which provide the API that results, upon
compilation, in the ABI that is to remain stable. Changes to the header files
can be made, but the nature of the changes has to be closely tracked to ensure
that, upon compilation, the ABI does not change in a way that will render
existing users of the ABI incompatible with the new version.
ABI Stability in Node.js
Node.js provides header files maintained by several independent teams. For
example, header files such as
node.h
and
node_buffer.h
are maintained by
the Node.js team.
v8.h
is maintained by the V8 team, which, although in close
co-operation with the Node.js team, is independent, and with its own schedule
and priorities. Thus, the Node.js team has only partial control over the
changes that are introduced in the headers the project provides. As a result,
the Node.js project has adopted
semantic versioning
.
This ensures that the APIs provided by the project will result in a stable ABI
for all minor and patch versions of Node.js released within one major version.
In practice, this means that the Node.js project has committed itself to
ensuring that a Node.js native addon compiled against a given major version of
Node.js will load successfully when loaded by any Node.js minor or patch version
within the major version against which it was compiled.
N-API
Demand has arisen for equipping Node.js with an API that results in an ABI that
remains stable across multiple Node.js major versions. The motivation for
creating such an API is as follows:
The JavaScript language has remained compatible with itself since its very
early days, whereas the ABI of the engine executing the JavaScript code changes
with every major version of Node.js. This means that applications consisting of
Node.js packages written entirely in JavaScript need not be recompiled,
reinstalled, or redeployed as a new major version of Node.js is dropped into
the production environment in which such applications run. In contrast, if an
application depends on a package that contains a native addon, the application
has to be recompiled, reinstalled, and redeployed whenever a new major version
of Node.js is introduced into the production environment. This disparity
between Node.js packages containing native addons and those that are written
entirely in JavaScript has added to the maintenance burden of production
systems which rely on native addons.
Other projects have started to produce JavaScript interfaces that are
essentially alternative implementations of Node.js. Since these projects are
usually built on a different JavaScript engine than V8, their native addons
necessarily take on a different structure and use a different API. Nevertheless,
using a single API for a native addon across different implementations of the
Node.js JavaScript API would allow these projects to take advantage of the
ecosystem of JavaScript packages that has accrued around Node.js.
Node.js may contain a different JavaScript engine in the future. This means
that, externally, all Node.js interfaces would remain the same, but the V8
header file would be absent. Such a step would cause the disruption of the
Node.js ecosystem in general, and that of the native addons in particular, if
an API that is JavaScript engine agnostic is not first provided by Node.js and
adopted by native addons.
To these ends Node.js has introduced N-API in version 8.6.0 and marked it as a
stable component of the project as of Node.js 8.12.0. The API is defined in the
headers
node_api.h
and
node_api_types.h
, and provides a forward-
compatibility guarantee that crosses the Node.js major version boundary. The
guarantee can be stated as follows:
A given version
n
of N-API will be available in the major version of
Node.js in which it was published, and in all subsequent versions of Node.js,
including subsequent major versions.
A native addon author can take advantage of the N-API forward compatibility
guarantee by ensuring that the addon makes use only of APIs defined in
node_api.h
and data structures and constants defined in
node_api_types.h
.
By doing so, the author facilitates adoption of their addon by indicating to
production users that the maintenance burden for their application will increase
no more by the addition of the native addon to their project than it would by
the addition of a package written purely in JavaScript.
N-API is versioned because new APIs are added from time to time. Unlike
semantic versioning, N-API versioning is cumulative. That is, each version of
N-API conveys the same meaning as a minor version in the semver system, meaning
that all changes made to N-API will be backwards compatible. Additionally, new
N-APIs are added under an experimental flag to give the community an opportunity
to vet them in a production environment. Experimental status means that,
although care has been taken to ensure that the new API will not have to be
modified in an ABI-incompatible way in the future, it has not yet been
sufficiently proven in production to be correct and useful as designed and, as
such, may undergo ABI-incompatible changes before it is finally incorporated
into a forthcoming version of N-API. That is, an experimental N-API is not yet
covered by the forward compatibility guarantee.

---

# User Journey
> **Fonte original:** [https://nodejs.org/learn/diagnostics/user-journey](https://nodejs.org/learn/diagnostics/user-journey)

User Journey
Diagnostics is the process of collecting and analyzing information about an
application to identify the cause of unexpected behavior, memory problems, or
poor performance. These guides organize that process around common symptoms
and link to tools and techniques that can help investigate them.
Before you begin
Record the following information before starting an investigation:
The Node.js version and operating system
The observed symptoms and when they occur
The steps needed to reproduce the problem
Recent changes to the application or its environment
Choose a diagnostic path
Start with the guide that most closely matches the symptoms:
For incorrect or unexpected application behavior, see
Live Debugging
.
For increasing memory use, out-of-memory crashes, or frequent garbage
collection, see
Memory
.
For high latency or CPU usage, see
Poor Performance
.
Each guide provides more specific symptoms and links to the relevant diagnostic
tools and techniques.
These guides were created by the
Diagnostics Working Group
and the
Node.js Website Team
.

---

# Overview
> **Fonte original:** [https://nodejs.org/learn/diagnostics/memory](https://nodejs.org/learn/diagnostics/memory)

Memory
In this document you can learn about how to debug memory related issues.
My process runs out of memory
Node.js
(JavaScript)
is a garbage collected language, so having memory
leaks is possible through retainers. As Node.js applications are usually
multi-tenant, business critical, and long-running, providing an accessible and
efficient way of finding a memory leak is essential.
You can also fine-tune memory to get specific results. Check out
Understanding and Tuning Memory
for more details.
Symptoms
The user observes continuously increasing memory usage
(can be fast or slow,
over days or even weeks)
then sees the process crashing and restarting by the
process manager. The process is maybe running slower than before and the
restarts cause some requests to fail
(load balancer responds with 502)
.
Side Effects
Process restarts due to the memory exhaustion and requests are dropped
on the floor
Increased GC activity leads to higher CPU usage and slower response time
GC blocking the Event Loop causing slowness
Increased memory swapping slows down the process (GC activity)
May not have enough available memory to get a Heap Snapshot
My process utilizes memory inefficiently
Symptoms
The application uses an unexpected amount of memory and/or we observe elevated
garbage collector activity.
Side Effects
An elevated number of page faults
Higher GC activity and CPU usage
Debugging
Most memory issues can be solved by determining how much space our specific
type of objects take and what variables are preventing them from being garbage
collected. It can also help to know the allocation pattern of our program over
time.
Using Heap Profiler
Using Heap Snapshot
GC Traces

---

# Understanding and Tuning Memory
> **Fonte original:** [https://nodejs.org/learn/diagnostics/memory/understanding-and-tuning-memory](https://nodejs.org/learn/diagnostics/memory/understanding-and-tuning-memory)

Understanding and Tuning Memory
Node.js, built on Google's V8 JavaScript engine, offers a powerful runtime for running JavaScript on the server side. However, as your applications grow, managing memory becomes a critical task for maintaining optimal performance and managing problems like memory leaks or crashes. In this article, we'll explore how to monitor, manage, and optimize memory usage within Node.js. We'll also cover important V8 concepts like the heap and garbage collection and discuss how to use command-line flags to fine-tune memory behavior.
How V8 Manages Memory
At its core, V8 divides memory into several parts, with two primary areas being the
heap
and the
stack
. Understanding these spaces, especially how the heap is managed, is key to improving memory usage in your app.
The Heap
V8's memory management is based on the generational hypothesis, the idea that most objects die young. Therefore, it separates the heap into generations to optimize garbage collection:
New Space
: This is where new, short-lived objects are allocated. Objects here are expected to "die young", so garbage collection occurs frequently, allowing memory to be reclaimed quickly.
For example, let's say you have an API that receives 1,000 requests per second. Each request generates a temporary object like
{ name: 'John', age: 30 }
, which is discarded once the request is processed. If you leave the New Space size at the default, V8 will frequently perform minor garbage collections to clear these small objects, ensuring that memory usage remains manageable.
Old Space
: Objects that survive multiple garbage collection cycles in the New Space are promoted to the Old Space. These are usually long-lived objects, such as user sessions, cache data, or persistent state. Because these objects tend to last longer, garbage collection in this space occurs less often but is more resource-intensive.
Let's say you are running an application that tracks user sessions. Each session might store data like
{ userId: 'abc123', timestamp: '2025-04-10T12:00:00', sessionData: {...} }
, which needs to persist in memory as long as the user is active. As the number of concurrent users grows, the Old Space could fill up, causing out-of-memory errors or slower response times due to inefficient garbage collection cycles.
In V8, memory for JavaScript objects, arrays, and functions is allocated in the
heap
. The size of the heap is not fixed, and exceeding the available memory can result in an "out-of-memory" error, causing your application to crash.
To check the current heap size limit, you can use the
v8
module.
CJS
ESM
const
v8
=
require
(
'
node:v8
'
)
;
const
{
heap_size_limit
}
=
v8
.
getHeapStatistics
()
;
const
heapSizeInGB
=
heap_size_limit
/
(
1024
*
1024
*
1024
)
;
console
.
log
(
`
${
heapSizeInGB
}
GB
`
)
;
JavaScript
Copy to clipboard
This will output the maximum heap size in gigabytes, which is based on your system's available memory.
The Stack
In addition to the heap, V8 also uses the
stack
for memory management. The stack is a region of memory used to store local variables and function call information. Unlike the heap, which is managed by V8's garbage collector, the stack operates on a Last In, First Out (LIFO) principle.
Whenever a function is called, a new frame is pushed onto the stack. When the function returns, its frame is popped off. The stack is much smaller in size compared to the heap, but it is faster for memory allocation and deallocation. However, the stack has a limited size, and excessive use of memory (such as with deep recursion) can result in a
stack overflow
.
Monitoring Memory Usage
Before tuning memory usage, it's important to understand how much memory your application is consuming. Node.js and V8 provide several tools for monitoring memory usage.
Using
process.memoryUsage()
The
process.memoryUsage()
method provides insights into how much memory your Node.js process is using. It returns an object with details like:
rss
(Resident Set Size): The total memory allocated to your process, including heap and other areas.
heapTotal
: The total memory allocated for the heap.
heapUsed
: The memory currently in use within the heap.
external
: Memory used by external resources like bindings to C++ libraries.
arrayBuffers
: Memory allocated to various Buffer-like objects.
Here's how to use
process.memoryUsage()
to monitor memory usage in your application:
console
.
log
(
process
.
memoryUsage
())
;
The output will show how much memory is being used in each area:
{
"
rss
"
:
25837568
,
"
heapTotal
"
:
5238784
,
"
heapUsed
"
:
3666120
,
"
external
"
:
1274076
,
"
arrayBuffers
"
:
10515
}
JSON
Copy to clipboard
By monitoring these values over time, you can identify if memory usage is increasing unexpectedly. For instance, if
heapUsed
steadily grows without being released, it could indicate a memory leak in your application.
Command-Line Flags for Memory Tuning
Node.js offers several command-line flags to fine-tune memory-related settings, allowing you to optimize memory usage in your application.
--max-old-space-size
This flag sets a limit on the size of the
Old Space
in the V8 heap, where long-lived objects are stored. If your application uses a significant amount of memory, you might need to adjust this limit.
For example, lets say your application handles a steady stream of incoming requests, each of which generates a large object. Over time, if these objects are not cleared, the Old Space could become overloaded, causing crashes or slower response times.
You can increase the Old Space size by setting the
--max-old-space-size
flag:
node
--max-old-space-size=4096
app.js
This sets the Old Space size to 4096 MB (4 GB), which is particularly useful if your application is handling a large amount of persistent data, like caching or user session information.
--max-semi-space-size
This flag controls the size of the
New Space
in the V8 heap. New Space is where newly created objects are allocated and garbage collected frequently. Increasing this size can reduce the frequency of minor garbage collection cycles.
For example, if you have an API that receives a large number of requests, each creating small objects like
{ name: 'Alice', action: 'login' }
, you may notice performance degradation due to frequent garbage collection. By increasing the New Space size, you can reduce the frequency of these collections and improve overall performance.
node
--max-semi-space-size=64
app.js
This increases the New Space to 64 MB, allowing for more objects to reside in memory before triggering garbage collection. This is particularly useful in high-throughput environments where object creation and destruction are frequent.
--gc-interval
This flag adjusts how frequently garbage collection cycles occur. By default, V8 determines the best interval, but you can override this setting in some scenarios where you need more control over memory cleanup.
For example, in a real-time application like a stock trading platform, you may want to minimize the impact of garbage collection by reducing the frequency of collections, ensuring the application can process data without significant pauses.
node
--gc-interval=100
app.js
This setting forces V8 to attempt garbage collection every 100 allocations. You may need to adjust this interval for specific use cases, but be cautious: setting the interval too low can cause performance degradation due to excessive garbage collection cycles.
--expose-gc
With the
--expose-gc
flag, you can manually trigger garbage collection from within your application code. This can be helpful in specific scenarios, like after processing a large batch of data, where you want to reclaim memory before continuing with further operations.
To expose
gc
, start your app with:
node
--expose-gc
app.js
Then, within your application code, you can call
global.gc()
to manually trigger garbage collection:
global
.
gc
()
;
Keep in mind that manually triggering garbage collection
does not disable
the normal GC algorithm. V8 will still perform automatic garbage collection as needed. Manual calls are supplemental and should be used with caution, as overuse can negatively impact performance.
Additional Resources
To dive deeper into how V8 handles memory, check out these posts by the V8 team:
Trash talk: the Orinoco garbage collector
Orinoco: young generation garbage collection
Putting It All Together
By adjusting settings for the Old Space and New Space sizes, selectively triggering garbage collection, and configuring heap limits, you can optimize your application’s memory usage and improve its overall performance. These tools give you the power to better manage memory in high-demand scenarios and maintain stability as your applications scale.

---

# Using Heap Profiler
> **Fonte original:** [https://nodejs.org/learn/diagnostics/memory/using-heap-profiler](https://nodejs.org/learn/diagnostics/memory/using-heap-profiler)

Using Heap Profiler
The heap profiler acts on top of V8 to capture allocations over time. In this
document, we will cover memory profiling using:
Allocation Timeline
Sampling Heap Profiler
Unlike heap dumps which were covered in the
Using Heap Snapshot
guide, the
idea of using real-time profiling is to understand allocations over a period of
time.
Heap Profiler - Allocation Timeline
Heap Profiler is similar to the Sampling Heap Profiler, except it will trace
every allocation. It has higher overhead than the Sampling Heap Profiler so
it’s not recommended to use in production.
You can use
@mmarchini/observe
to start and stop the profiler
programmatically.
How To
Start the application:
node --inspect index.js
--inspect-brk
is a better choice for scripts.
Connect to the dev-tools instance in chrome and then:
Select the
Memory
tab.
Select
Allocation instrumentation timeline
.
Start profiling.
![heap profiler tutorial step 1][heap profiler tutorial 1]
Once the heap profiling is running, it is strongly recommended to run samples
in order to identify memory issues. For example, if we were heap profiling a
web application, we could use
Apache Benchmark
to produce load:
$
ab -n 1000 -c 5 http://localhost:3000
Then, press stop button when the load is complete:
![heap profiler tutorial step 2][heap profiler tutorial 2]
Finally, look at the snapshot data:
![heap profiler tutorial step 3][heap profiler tutorial 3]
Check the
useful links
section for further information
about memory terminology.
Sampling Heap Profiler
Sampling Heap Profiler tracks the memory allocation pattern and reserved space
over time. Since it is sampling based its overhead is low enough to use in
production systems.
You can use the module
heap-profiler
to start and stop the heap
profiler programmatically.
How To
Start the application:
$
node --inspect index.js
--inspect-brk
is a better choice for scripts.
Connect to the dev-tools instance and then:
Select the
Memory
tab.
Select
Allocation sampling
.
Start profiling.
![heap profiler tutorial 4][heap profiler tutorial 4]
Produce some load and stop the profiler. It will generate a summary with
allocation based on their stacktraces. You can focus on the functions with more
heap allocations, see the example below:
![heap profiler tutorial 5][heap profiler tutorial 5]
Useful Links
https://developer.chrome.com/docs/devtools/memory-problems/memory-101/
https://developer.chrome.com/docs/devtools/memory-problems/allocation-profiler/

---

# Using Heap Snapshot
> **Fonte original:** [https://nodejs.org/learn/diagnostics/memory/using-heap-snapshot](https://nodejs.org/learn/diagnostics/memory/using-heap-snapshot)

Using Heap Snapshot
You can take a Heap Snapshot from your running application and load it into
Chrome Developer Tools
to inspect certain variables or check retainer size.
You can also compare multiple snapshots to see differences over time.
Warning
When creating a snapshot, all other work in your main thread is stopped.
Depending on the heap contents it could even take more than a minute.
The snapshot is built in memory, so it can double the heap size, resulting
in filling up entire memory and then crashing the app.
If you're going to take a heap snapshot in production, make sure the process
you're taking it from can crash without impacting your application's
availability.
How To
Get the Heap Snapshot
There are multiple ways to obtain a heap snapshot:
via the inspector,
via an external signal and command-line flag,
via a
writeHeapSnapshot
call within the process,
via the inspector protocol.
1. Use memory profiling in inspector
Works in all actively maintained versions of Node.js
Run node with
--inspect
flag and open the inspector.
![open inspector][open inspector image]
The simplest way to get a Heap Snapshot is to connect an inspector to your
process running locally. Then go to Memory tab and take a heap snapshot.
![take a heap snapshot][take a heap snapshot image]
2. Use
--heapsnapshot-signal
flag
Works in v12.0.0 or later
You can start node with a command-line flag enabling reacting to a signal to
create a heap snapshot.
$
node
--heapsnapshot-signal=SIGUSR2
index.js
For details, see the latest documentation of
heapsnapshot-signal flag
.
3. Use
writeHeapSnapshot
function
Works in v11.13.0 or later
Can work in older versions with
heapdump package
If you need a snapshot from a working process, like an application running on a
server, you can implement getting it using:
CJS
ESM
require
(
'
node:v8
'
)
.
writeHeapSnapshot
()
;
Check
writeHeapSnapshot
docs
for file name options.
You need to have a way to invoke it without stopping the process, so calling it
in a HTTP handler or as a reaction to a signal from the operating system
is advised. Be careful not to expose the HTTP endpoint triggering a snapshot.
It should not be possible for anybody else to access it.
For versions of Node.js before v11.13.0 you can use the
heapdump package
.
4. Trigger Heap Snapshot using inspector protocol
Inspector protocol can be used to trigger Heap Snapshot from outside of the
process.
It's not necessary to run the actual inspector from Chromium to use the API.
Here's an example snapshot trigger in bash, using
websocat
and
jq
:
#!/bin/bash
set
-e
kill
-USR1
"
$1
"
rm
-f
fifo
out
mkfifo
./fifo
websocat
-B
10000000000
"$(
curl
-s http://localhost:9229/json
|
jq
-r
'
.[0].webSocketDebuggerUrl
')"
<
./fifo
>
./out
&
exec
3>
./fifo
echo
'
{"method": "HeapProfiler.enable", "id": 1}
'
>
./fifo
echo
'
{"method": "HeapProfiler.takeHeapSnapshot", "id": 2}
'
>
./fifo
while
jq
-e
"
[.id != 2, .result != {}] | all
"
<
<(
tail
-n
1
./out
)
;
do
sleep
1s
echo
"
Capturing Heap Snapshot...
"
done
echo
-n
""
>
./out.heapsnapshot
while
read
-r
line
;
do
f
=
"$(
echo
"
$line
"
|
jq
-r
'
.params.chunk
')"
echo
-n
"
$f
"
>>
out.heapsnapshot
i
=
$((
i+1
))
done
<
<(
cat
out
|
tail
-n +2
|
head
-n -1
)
exec
3>&
-
Shell
Copy to clipboard
Here is a non-exhaustive list of memory profiling tools usable with the
inspector protocol:
OpenProfiling for Node.js
How to find a memory leak with Heap Snapshots
You can find a memory leak by comparing two snapshots. It's important to make
sure the snapshots difference does not contain unnecessary information.
Following steps should produce a clean diff between snapshots.
Let the process load all sources and finish bootstrapping. It should take a
few seconds at most.
Start using the functionality you suspect of leaking memory. It's likely it
makes some initial allocations that are not the leaking ones.
Take one heap snapshot.
Continue using the functionality for a while, preferably without running
anything else in between.
Take another heap snapshot. The difference between the two should mostly
contain what was leaking.
Open Chromium/Chrome dev tools and go to
Memory
tab
Load the older snapshot file first, and the newer one second.
![Load button in tools][load button image]
Select the newer snapshot and switch mode in the dropdown at the top from
Summary
to
Comparison
. ![Comparison dropdown][comparison image]
Look for large positive deltas and explore the references that caused
them in the bottom panel.
You can practice capturing heap snapshots and finding memory leaks with
this
heap snapshot exercise
.

---

# Tracing garbage collection
> **Fonte original:** [https://nodejs.org/learn/diagnostics/memory/using-gc-traces](https://nodejs.org/learn/diagnostics/memory/using-gc-traces)

Tracing garbage collection
This guide will go through the fundamentals of garbage collection traces.
By the end of this guide, you'll be able to:
Enable traces in your Node.js application
Interpret traces
Identify potential memory issues in your Node.js application
There's a lot to learn about how the garbage collector works, but if you learn
one thing it's that when GC is running, your code is not.
You may want to know how often and long the garbage collection runs,
and what is the outcome.
Setup
For the purpose of this guide, we'll use this script:
// script.mjs
import
os
from
'
node:os
'
;
let
len
=
1_000_000
;
const
entries
=
new
Set
()
;
function
addEntry
()
{
const
entry
=
{
timestamp
:
Date
.
now
()
,
memory
:
os
.
freemem
()
,
totalMemory
:
os
.
totalmem
()
,
uptime
:
os
.
uptime
()
,
}
;
entries
.
add
(
entry
)
;
}
function
summary
()
{
console
.
log
(
`
Total:
${
entries
.
size
}
entries
`
)
;
}
// execution
(
()
=>
{
while
(
len
>
0
)
{
addEntry
()
;
process
.
stdout
.
write
(
`
~~>
${
len
}
entries to record
\r
`
)
;
len
--;
}
summary
()
;
}
)()
;
JavaScript
Copy to clipboard
Even if the leak is evident here, finding the source of a leak
could be cumbersome in the context of a real-world application.
Running with garbage collection traces
You can see traces for garbage collection in console output of your process
using the
--trace-gc
flag.
$
node --trace-gc script.mjs
Note: you can find the source code of this
exercise
in the Node.js Diagnostics repository.
It should output something like:
[
39067:0x158008000
]
2297 ms: Scavenge 117.5 (
135.8
) -
>
102.2 (
135.8
) MB, 0.8 / 0.0 ms  (
average
mu
=
0.994,
current
mu
=
0.994
) allocation failure
[
39067:0x158008000
]
2375 ms: Scavenge 120.0 (
138.3
) -
>
104.7 (
138.3
) MB, 0.9 / 0.0 ms  (
average
mu
=
0.994,
current
mu
=
0.994
) allocation failure
[
39067:0x158008000
]
2453 ms: Scavenge 122.4 (
140.8
) -
>
107.1 (
140.8
) MB, 0.7 / 0.0 ms  (
average
mu
=
0.994,
current
mu
=
0.994
) allocation failure
[
39067:0x158008000
]
2531 ms: Scavenge 124.9 (
143.3
) -
>
109.6 (
143.3
) MB, 0.7 / 0.0 ms  (
average
mu
=
0.994,
current
mu
=
0.994
) allocation failure
[
39067:0x158008000
]
2610 ms: Scavenge 127.1 (
145.5
) -
>
111.8 (
145.5
) MB, 0.7 / 0.0 ms  (
average
mu
=
0.994,
current
mu
=
0.994
) allocation failure
[
39067:0x158008000
]
2688 ms: Scavenge 129.6 (
148.0
) -
>
114.2 (
148.0
) MB, 0.8 / 0.0 ms  (
average
mu
=
0.994,
current
mu
=
0.994
) allocation failure
[
39067:0x158008000
]
2766 ms: Scavenge 132.0 (
150.5
) -
>
116.7 (
150.5
) MB, 1.1 / 0.0 ms  (
average
mu
=
0.994,
current
mu
=
0.994
) allocation failure
Total:
1000000
entries
Shell
Copy to clipboard
Hard to read? Maybe we should pass in review a few concepts
and explain the outputs of the
--trace-gc
flag.
Examining a trace with
--trace-gc
The
--trace-gc
(or
--trace_gc
, either is fine) flag outputs all garbage collection
events in the console.
The composition of each line can be described as:
[
13973:0x110008000
]
44 ms: Scavenge 2.4 (
3.2
) -
>
2.0 (
4.2
) MB, 0.5 / 0.0 ms  (
average
mu
=
1.000,
current
mu
=
1.000
) allocation failure
Token value
Interpretation
13973
PID of the running process
0x110008000
Isolate (JS heap instance)
44 ms
The time since the process started in ms
Scavenge
Type / Phase of GC
2.4
Heap used before GC in MB
(3.2)
Total heap before GC in MB
2.0
Heap used after GC in MB
(4.2)
Total heap after GC in MB
0.5 / 0.0 ms (average mu = 1.000, current mu = 1.000)
Time spent in GC in ms
allocation failure
Reason for GC
We'll only focus on two events here:
Scavenge
Mark-sweep
The heap is divided into
spaces
. Amongst these, we have a space called
the "new" space and another one called the "old" space.
👉 In reality, the heap structure is a bit different, but we'll stick
to a simpler version for this article. If you want more details
we encourage you to look at this
talk of Peter Marshall
about Orinoco.
Scavenge
Scavenge is the name of an algorithm that will perform garbage collection
into new space. The new space is where objects are created.
The new space is designed to be small and fast for garbage collection.
Let's imagine a Scavenge scenario:
we allocated
A
,
B
,
C
&
D
.
|
A
|
B
|
C
|
D
|
<
unallocated
>
|
we want to allocate
E
not enough space, the memory is exhausted
then, a (garbage) collection is triggered
dead objects are collected
living object will stay
assuming
B
and
D
were dead
|
A
|
C
|
<
unallocated
>
|
now we can allocate
E
|
A
|
C
|
E
|
<
unallocated
>
|
v8 will promote objects, not garbage collected after two Scavenge
operations to the old space.
👉 Full
Scavenge scenario
Mark-sweep
Mark-sweep is used to collect objects from old space. The old space
is where objects that survived the new space are living.
This algorithm is composed of two phases:
Mark
: Will mark still alive objects as black and others as white.
Sweep
: Scans for white objects and converts them to free spaces.
👉 In fact, the Mark and Sweep steps are a bit more elaborate.
Please read this
document
for more details.
--trace-gc
in action
Memory leak
Now, if you return quickly to the previous terminal window:
you will see many
Mark-sweep
events in the console.
We also see that the amount of memory collected after
the event is insignificant.
Now that we are experts in garbage collection! What could we deduce?
We probably have a memory leak! But how could we be sure of that?
(Reminder: it is pretty apparent in this example,
but what about a real-world application?)
But how could we spot the context?
How to get the context of bad allocations
Suppose we observe that the old space is continuously increasing.
Reduce
--max-old-space-size
such that the total heap is closer to the limit
Run the program until you hit the out of memory.
The produced log shows the failing context.
If it hits OOM, increment the heap size by ~10% and repeat a few times. If the same pattern is observed, it indicates a memory leak.
If there is no OOM, then freeze the heap size to that value - A packed heap reduces memory footprint and computation latency.
For example, try to run
script.mjs
with the following command:
node
--trace-gc
--max-old-space-size=50
script.mjs
You should experience an OOM:
[
...
]
<
--- Last few GCs ---
>
[
40928:0x148008000
]
509 ms: Mark-sweep 46.8 (
65.8
) -
>
40.6 (
77.3
) MB, 6.4 / 0.0 ms  (
+
1.4
ms
in
11
steps
since
start
of
marking,
biggest
step
0.2
ms,
walltime
since
start
of
marking
24
ms
) (
average
mu
=
0.977,
current
mu
=
0.977
) finalize incrementa
[
40928:0x148008000
]
768 ms: Mark-sweep 56.3 (
77.3
) -
>
47.1 (
83.0
) MB, 35.9 / 0.0 ms  (
average
mu
=
0.927,
current
mu
=
0.861
) allocation failure scavenge might not succeed
<
--- JS stacktrace ---
>
FATAL
ERROR:
Reached
heap
limit
Allocation
failed
-
JavaScript
heap
out
of
memory
[...]
Shell
Copy to clipboard
Now, try it for 100 MB:
node
--trace-gc
--max-old-space-size=100
script.mjs
You should experience something similar, the only difference
should be that the last GC trace will contain a bigger heap size.
<
--- Last few GCs ---
>
[
40977:0x128008000
]
2066 ms: Mark-sweep (
reduce
) 99.6 (
102.5
) -
>
99.6 (
102.5
) MB, 46.7 / 0.0 ms  (
+
0.0
ms
in
0
steps
since
start
of
marking,
biggest
step
0.0
ms,
walltime
since
start
of
marking
47
ms
) (
average
mu
=
0.154,
current
mu
=
0.155
) allocati
[
40977:0x128008000
]
2123 ms: Mark-sweep (
reduce
) 99.6 (
102.5
) -
>
99.6 (
102.5
) MB, 47.7 / 0.0 ms  (
+
0.0
ms
in
0
steps
since
start
of
marking,
biggest
step
0.0
ms,
walltime
since
start
of
marking
48
ms
) (
average
mu
=
0.165,
current
mu
=
0.175
) allocati
Shell
Copy to clipboard
Note: In the context of real application, it could be cumbersome to find the leaked object in the code. Heap snapshot could help you to find it. Visit the
guide dedicated to heap snapshot
Slowness
How do you assert whether too many garbage collections
are happening or causing an overhead?
Review the trace data, precisely the time between consecutive collections.
Review the trace data, specifically around time spent in GC.
If the time between two GC is less than the time spent in GC, the application is severely starving.
If the time between two GCs and the time spent in GC are very high, probably the application can use a smaller heap.
If the time between two GCs is much greater than the time spent in GC, the application is relatively healthy.
Fix the leak
Now let's fix the leak. Instead of using an object to store
our entries, we could use a file.
Let's modify our script a bit:
// script-fix.mjs
import
fs
from
'
node:fs/promises
'
;
import
os
from
'
node:os
'
;
let
len
=
1_000_000
;
const
fileName
=
`
entries-
${
Date
.
now
()
}
`
;
async
function
addEntry
()
{
const
entry
=
{
timestamp
:
Date
.
now
()
,
memory
:
os
.
freemem
()
,
totalMemory
:
os
.
totalmem
()
,
uptime
:
os
.
uptime
()
,
}
;
await
fs
.
appendFile
(
fileName
,
JSON
.
stringify
(
entry
)
+
'
\n
'
)
;
}
async
function
summary
()
{
const
stats
=
await
fs
.
lstat
(
fileName
)
;
console
.
log
(
`
File size
${
stats
.
size
}
bytes
`
)
;
}
// execution
(
async
()
=>
{
await
fs
.
writeFile
(
fileName
,
'
----START---
\n
'
)
;
while
(
len
>
0
)
{
await
addEntry
()
;
process
.
stdout
.
write
(
`
~~>
${
len
}
entries to record
\r
`
)
;
len
--;
}
await
summary
()
;
}
)()
;
JavaScript
Copy to clipboard
Using a
Set
to store data is not a bad practice at all;
you should just care about the memory footprint of your program.
Note: you can find the source code of this
exercise
in the Node.js Diagnostics repository.
Now, let's execute this script.
node
--trace-gc
script-fix.mjs
You should observe two things:
Mark-sweep events appear less frequently
the memory footprint doesn't exceed 25MB versus more than 130MB with the first script.
It makes a lot of sense as the new version puts less pressure on
the memory than the first one.
Takeaway
: What do you think about improving this script?
You probably see that the new version of the script is slow.
What if we use a
Set
again and write its content into a
file only when the memory reaches a specific size?
getheapstatistics
API could help you.
Bonus: Trace garbage collection programmatically
Using
v8
module
You might want to avoid getting traces from the entire lifetime of your process.
In that case, set the flag from within the process.
The
v8
module exposes an API to put flags on the fly.
import
v8
from
'
v8
'
;
// enabling trace-gc
v8
.
setFlagsFromString
(
'
--trace-gc
'
)
;
// disabling trace-gc
v8
.
setFlagsFromString
(
'
--notrace-gc
'
)
;
JavaScript
Copy to clipboard
Using performance hooks
In Node.js, you can use
performance hooks
to trace
garbage collection.
CJS
ESM
const
{
PerformanceObserver
}
=
require
(
'
node:perf_hooks
'
)
;
// Create a performance observer
const
obs
=
new
PerformanceObserver
(
list
=>
{
const
entry
=
list
.
getEntries
()[
0
]
;
/*
The entry is an instance of PerformanceEntry containing
metrics of a single garbage collection event.
For example:
PerformanceEntry {
name: 'gc',
entryType: 'gc',
startTime: 2820.567669,
duration: 1.315709,
kind: 1
}
*/
}
)
;
// Subscribe to notifications of GCs
obs
.
observe
(
{
entryTypes
:
[
'
gc
'
]
}
)
;
// Stop subscription
obs
.
disconnect
()
;
JavaScript
Copy to clipboard
Examining a trace with performance hooks
You can get GC statistics as
PerformanceEntry
from the callback in
PerformanceObserver
.
For example:
{
"
name
"
:
"
gc
"
,
"
entryType
"
:
"
gc
"
,
"
startTime
"
:
2820.567669
,
"
duration
"
:
1.315709
,
"
kind
"
:
1
}
JSON
Copy to clipboard
Property
Interpretation
name
The name of the performance entry.
entryType
The type of the performance entry.
startTime
The high-resolution millisecond timestamp is marking the starting time of the Performance Entry.
duration
The total number of milliseconds elapsed for this entry.
kind
The type of garbage collection operation that occurred.
flags
The additional information about GC.
For more information, you can refer to
the documentation about performance hooks
.

---

# Overview
> **Fonte original:** [https://nodejs.org/learn/diagnostics/live-debugging](https://nodejs.org/learn/diagnostics/live-debugging)

Live Debugging
In this document you can learn about how to live debug a Node.js process.
My application doesn’t behave as expected
Symptoms
The user may observe that the application doesn’t provide the expected output
for certain inputs, for example, an HTTP server returns a JSON response where
certain fields are empty. Various things can go wrong in the process but in this
use case, we are mainly focused on the application logic and its correctness.
Debugging
In this use case, the user would like to understand the code path that our
application executes for a certain trigger like an incoming HTTP request. They
may also want to step through the code and control the execution as well as
inspect what values variables hold in memory.
Using Inspector

---

# Using Inspector
> **Fonte original:** [https://nodejs.org/learn/diagnostics/live-debugging/using-inspector](https://nodejs.org/learn/diagnostics/live-debugging/using-inspector)

Using Inspector
In a local environment, we usually speak about live debugging where we attach a
debugger to our application and we add breakpoints to suspend the program
execution. Then we step through the code paths and inspect our heap over the
different steps. Using the live debugger in production is usually not an option
as we have limited access to the machine and we cannot interrupt the execution
of the application as it handles a business-critical workload.
How To
Debugging Node.js

---

# Overview
> **Fonte original:** [https://nodejs.org/learn/diagnostics/poor-performance](https://nodejs.org/learn/diagnostics/poor-performance)

Poor Performance
In this document you can learn about how to profile a Node.js process.
My application has a poor performance
Symptoms
My applications latency is high and I have already confirmed that the bottleneck
is not my dependencies like databases and downstream services. So I suspect that
my application spends significant time to run code or process information.
You are satisfied with your application performance in general but would like to
understand which part of our application can be improved to run faster or more
efficient. It can be useful when we want to improve the user experience or save
computation cost.
Debugging
In this use-case, we are interested in code pieces that use more CPU cycles than
the others. When we do this locally, we usually try to optimize our code.
This document provides two simple ways to profile a Node.js application:
Using V8 Sampling Profiler
Using Linux Perf

---

# Using Linux Perf
> **Fonte original:** [https://nodejs.org/learn/diagnostics/poor-performance/using-linux-perf](https://nodejs.org/learn/diagnostics/poor-performance/using-linux-perf)

Using Linux Perf
Linux Perf
provides low level CPU profiling with JavaScript,
native and OS level frames.
Important
: this tutorial is only available on Linux.
How To
Linux Perf is usually available through the
linux-tools-common
package. Through either
--perf-basic-prof
or
--perf-basic-prof-only-functions
we are able to start a Node.js application supporting
perf_events
.
--perf-basic-prof
will always write to a file (/tmp/perf-PID.map), which can lead to infinite disk growth.
If that’s a concern either use the module:
linux-perf
or
--perf-basic-prof-only-functions
.
The main difference between both is that
--perf-basic-prof-only-functions
produces less output, it is a viable option
for production profiling.
#
Launch the application an get the PID
$
node --perf-basic-prof-only-functions index.js
&
[1] 3870
Shell Session
Copy to clipboard
Then record events based in the desired frequency:
$
sudo perf record -F 99 -p 3870 -g
In this phase, you may want to use a load test in the application in order to generate more records for a reliable
analysis. When the job is done, close the perf process by sending a SIGINT (Ctrl-C) to the command.
The
perf
will generate a file inside the
/tmp
folder, usually called
/tmp/perf-PID.map
(in above example:
/tmp/perf-3870.map
) containing the traces for each function called.
To aggregate those results in a specific file execute:
CONSOLE
CONSOLE (2)
$
sudo perf script
>
perfs.out
The raw output can be a bit hard to understand so typically the raw file is used to generate flamegraphs for a better
visualization.
To generate a flamegraph from this result, follow
this tutorial
from step 6.
Because
perf
output is not a Node.js specific tool, it might have issues with how JavaScript code is optimized in
Node.js. See
perf output issues
for a
further reference.
Useful Links
Flame Graphs
https://www.brendangregg.com/blog/2014-09-17/node-flame-graphs-on-linux.html
https://perf.wiki.kernel.org/index.php/Main_Page
https://blog.rafaelgss.com.br/node-cpu-profiler

---

# Flame Graphs
> **Fonte original:** [https://nodejs.org/learn/diagnostics/flame-graphs](https://nodejs.org/learn/diagnostics/flame-graphs)

Flame Graphs
What's a flame graph useful for?
Flame graphs are a way of visualizing CPU time spent in functions. They can help you pin down where you spend too much time doing synchronous operations.
How to create a flame graph
You might have heard creating a flame graph for Node.js is difficult, but that's not true (anymore).
Solaris vms are no longer needed for flame graphs!
Flame graphs are generated from
perf
output, which is not a node-specific tool. While it's the most powerful way to visualize CPU time spent, it may have issues with how JavaScript code is optimized in Node.js 8 and above. See
perf output issues
section below.
Use a pre-packaged tool
If you want a single step that produces a flame graph locally, try
0x
For diagnosing production deployments, read these notes:
0x production servers
.
Create a flame graph with system perf tools
The purpose of this guide is to show the steps involved in creating a flame graph and keep you in control of each step.
If you want to understand each step better, take a look at the sections that follow where we go into more detail.
Now let's get to work.
Install
perf
(usually available through the linux-tools-common package if not already installed)
Try running
perf
- it might complain about missing kernel modules, install them too
Run node with perf enabled (see
perf output issues
for tips specific to Node.js versions)
perf
record
-e
cycles:u
-g
--
node
--perf-basic-prof
--interpreted-frames-native-stack
app.js
Disregard warnings unless they're saying you can't run perf due to missing packages; you may get some warnings about not being able to access kernel module samples which you're not after anyway.
Run
perf script > perfs.out
to generate the data file you'll visualize in a moment. It's useful to
apply some cleanup
for a more readable graph
Preview or generate the flame graph:
Browser preview (no local setup required):
Upload the generated
perfs.out
file to
https://flamegraph.com
to visualize the flame graph.
Clone Brendan Gregg's FlameGraph tools:
https://github.com/brendangregg/FlameGraph
Run
cat perfs.out | ./FlameGraph/stackcollapse-perf.pl | ./FlameGraph/flamegraph.pl --colors=js > profile.svg
and now open the flame graph file in your favorite browser and watch it burn
Once the flame graph is rendered, inspect the most saturated orange bars first. They're likely to represent CPU heavy functions.
Worth mentioning - if you click an element of a flame graph it will zoom-in on the section you clicked.
Using
perf
to sample a running process
This is great for recording flame graph data from an already running process that you don't want to interrupt. Imagine a production process with a hard to reproduce issue.
perf
record
-F99
-p
`
pgrep
-n node
`
-g
--
sleep
3
Wait, what is that
sleep 3
for? It's there to keep the perf running - despite
-p
option pointing to a different pid, the command needs to be executed on a process and end with it.
perf runs for the life of the command you pass to it, whether or not you're actually profiling that command.
sleep 3
ensures that perf runs for 3 seconds.
Why is
-F
(profiling frequency) set to 99? It's a reasonable default. You can adjust if you want.
-F99
tells perf to take 99 samples per second, for more precision increase the value. Lower values should produce less output with less precise results. The precision you need depends on how long your CPU intensive functions really run. If you're looking for the reason for a noticeable slowdown, 99 frames per second should be more than enough.
After you get that 3 second perf record, proceed with generating the flame graph with the last two steps from above.
Filtering out Node.js internal functions
Usually, you just want to look at the performance of your calls, so filtering out Node.js and V8 internal functions can make the graph much easier to read. You can clean up your perf file with:
sed
-i
-r
\
-e
"
/( __libc_start| LazyCompile | v8::internal::| Builtin:| Stub:| LoadIC:|\[unknown\]| LoadPolymorphicIC:)/d
"
\
-e
'
s/ LazyCompile:[*~]?/ /
'
\
perfs.out
Shell
Copy to clipboard
If you read your flame graph and it seems odd, as if something is missing in the key function taking up most time, try generating your flame graph without the filters - maybe you got a rare case of an issue with Node.js itself.
Node.js's profiling options
--perf-basic-prof-only-functions
and
--perf-basic-prof
are the two that are useful for debugging your JavaScript code. Other options are used for profiling Node.js itself, which is outside the scope of this guide.
--perf-basic-prof-only-functions
produces less output, so it's the option with the least overhead.
Why do I need them at all?
Well, without these options, you'll still get a flame graph, but with most bars labeled
v8::Function::Call
.
perf
output issues
Node.js 8.x V8 pipeline changes
Node.js 8.x and above ships with new optimizations to the JavaScript compilation pipeline in the V8 engine which makes function names/references unreachable for perf sometimes. (It's called Turbofan)
The result is you might not get your function names right in the flame graph.
You'll notice
ByteCodeHandler:
where you'd expect function names.
0x
has some mitigations for that built in.
For details see:
https://github.com/nodejs/benchmarking/issues/168
https://github.com/nodejs/diagnostics/issues/148#issuecomment-369348961
Node.js 10+
Node.js 10.x addresses the issue with Turbofan using the
--interpreted-frames-native-stack
flag.
Run
node --interpreted-frames-native-stack --perf-basic-prof-only-functions
to get function names in the flame graph regardless of which pipeline V8 used to compile your JavaScript.
Broken labels in the flame graph
If you're seeing labels looking like this
node`_ZN2v88internal11interpreter17BytecodeGenerator15VisitStatementsEPNS0_8ZoneListIPNS0_9StatementEEE
it means the Linux perf you're using was not compiled with demangle support, see
https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1396654
for example
Examples
Practice capturing flame graphs yourself with
a flame graph exercise
!

---

# Discovering Node.js's test runner
> **Fonte original:** [https://nodejs.org/learn/test-runner/introduction](https://nodejs.org/learn/test-runner/introduction)

Discovering Node.js's test runner
In this series of resources, we will discover how to use Node.js's test runner to test our code.
What is a test runner?
A test runner is a tool that allows you to run tests on your code. It will execute your tests and give you feedback on whether they pass or fail. It can also provide you with additional information such as code coverage.
There are many test runners available for Node.js, but we will focus on the built-in test runner that comes with Node.js. It's cool because you don't need to install any additional dependencies to use it.
Why test your code?
Testing your code is important because it allows you to verify that your code works as expected. It helps you catch bugs early in the development process and ensures that your code is reliable and maintainable.
Running tests with Node.js
To run tests with Node.js, we recommend reading the
test runner documentation
.

---

# Using Node.js's test runner
> **Fonte original:** [https://nodejs.org/learn/test-runner/using-test-runner](https://nodejs.org/learn/test-runner/using-test-runner)

Using Node.js's test runner
Node.js has a flexible and robust built-in test runner. This guide will show you how to set up and use it.
Architecture overview
Install dependencies
package.json
example/
├ …
├ src/
├ app/…
└ sw/…
└ test/
├ globals/
├ …
├ IndexedDb.js
└ ServiceWorkerGlobalScope.js
├ setup.mjs
├ setup.units.mjs
└ setup.ui.mjs
text
Copy to clipboard
Note
: globs require node v21+, and the globs must themselves be wrapped in quotes (without, you'll get different behaviour than expected, wherein it may first appear to be working but isn't).
There are some things you always want, so put them in a base setup file like the following. This file will get imported by other, more bespoke setups.
General setup
`test/setup.mjs`
import
{
register
}
from
'
node:module
'
;
register
(
'
some-typescript-loader
'
)
;
// TypeScript is supported hereafter
// BUT other test/setup.*.mjs files still must be plain JavaScript!
JavaScript
Copy to clipboard
Then for each setup, create a dedicated
setup
file (ensuring the base
setup.mjs
file is imported within each). There are a number of reasons to isolate the setups, but the most obvious reason is
YAGNI
+ performance: much of what you may be setting up are environment-specific mocks/stubs, which can be quite expensive and will slow down test runs. You want to avoid those costs (literal money you pay to CI, time waiting for tests to finish, etc) when you don't need them.
Each example below was taken from real-world projects; they may not be appropriate/applicable to yours, but each demonstrate general concepts that are broadly applicable.
Dynamically generating test cases
Some times, you may want to dynamically generate test-cases. For instance, you want to test the same thing across a bunch of files. This is possible, albeit slightly arcane. You must use
test
(you cannot use
describe
) +
testContext.test
:
Simple example
23.8.0 and later
prior to 23.8.0
import
assert
from
'
node:assert/strict
'
;
import
{
test
}
from
'
node:test
'
;
import
{
detectOsInUserAgent
}
from
'
…
'
;
const
userAgents
=
[
{
ua
:
'
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.3
'
,
os
:
'
WIN
'
,
},
// …
]
;
test
(
'
Detect OS via user-agent
'
,
{
concurrency
:
true
},
t
=>
{
for
(
const
{
os
,
ua
}
of
userAgents
)
{
t
.
test
(
ua
,
()
=>
assert
.
equal
(
detectOsInUserAgent
(
ua
)
,
os
))
;
}
}
)
;
JavaScript
Copy to clipboard
Advanced example
23.8.0 and later
prior to 23.8.0
./getWorkspacePJSONs.mjs
import
assert
from
'
node:assert/strict
'
;
import
{
test
}
from
'
node:test
'
;
import
{
getWorkspacePJSONs
}
from
'
./getWorkspacePJSONs.mjs
'
;
const
requiredKeywords
=
[
'
node.js
'
,
'
sliced bread
'
]
;
test
(
'
Check package.jsons
'
,
{
concurrency
:
true
},
async
t
=>
{
const
pjsons
=
await
getWorkspacePJSONs
()
;
for
(
const
pjson
of
pjsons
)
{
// ⚠️ `t.test`, NOT `test`
t
.
test
(
`
Ensure fields are properly set:
${
pjson
.
name
}
`
,
()
=>
{
assert
.
partialDeepStrictEqual
(
pjson
.
keywords
,
requiredKeywords
)
;
}
)
;
}
}
)
;
JavaScript
Copy to clipboard
Note
: Prior to version 23.8.0, the setup is quite different because
testContext.test
was not automatically awaited.
ServiceWorker tests
ServiceWorkerGlobalScope
contains very specific APIs that don't exist in other environments, and some of its APIs are seemingly similar to others (ex
fetch
) but have augmented behaviour. You do not want these to spill into unrelated tests.
`test/setup.sw.mjs`
import
{
beforeEach
}
from
'
node:test
'
;
import
{
ServiceWorkerGlobalScope
}
from
'
./globals/ServiceWorkerGlobalScope.js
'
;
import
'
./setup.mjs
'
;
// 💡
beforeEach
(
globalSWBeforeEach
)
;
function
globalSWBeforeEach
()
{
globalThis
.
self
=
new
ServiceWorkerGlobalScope
()
;
}
JavaScript
Copy to clipboard
import
assert
from
'
node:assert/strict
'
;
import
{
describe
,
mock
,
it
}
from
'
node:test
'
;
import
{
onActivate
}
from
'
./onActivate.js
'
;
describe
(
'
ServiceWorker::onActivate()
'
,
()
=>
{
const
globalSelf
=
globalThis
.
self
;
const
claim
=
mock
.
fn
(
async
function
mock__claim
()
{}
)
;
const
matchAll
=
mock
.
fn
(
async
function
mock__matchAll
()
{}
)
;
class
ActivateEvent
extends
Event
{
constructor
(
...
args
)
{
super
(
'
activate
'
,
...
args
)
;
}
}
before
(
()
=>
{
globalThis
.
self
=
{
clients
:
{
claim
,
matchAll
},
}
;
}
)
;
after
(
()
=>
{
global
.
self
=
globalSelf
;
}
)
;
it
(
'
should claim all clients
'
,
async
()
=>
{
await
onActivate
(
new
ActivateEvent
())
;
assert
.
equal
(
claim
.
mock
.
callCount
()
,
1
)
;
assert
.
equal
(
matchAll
.
mock
.
callCount
()
,
1
)
;
}
)
;
}
)
;
JavaScript
Copy to clipboard
Snapshot tests
These were popularised by Jest; now, many libraries implement such functionality, including Node.js as of v22.3.0. There are several use-cases such as verifying component rendering output and
Infrastructure as Code
config. The concept is the same regardless of use-case.
There is no specific configuration
required
except enabling the feature via
--experimental-test-snapshots
. But to demonstrate the optional configuration, you would probably add something like the following to one of your existing test config files.
`test/setup.ui.mjs`
By default, node generates a filename that is incompatible with syntax highlighting detection:
.js.snapshot
. The generated file is actually a CJS file, so a more appropriate file name would end with
.snapshot.cjs
(or more succinctly
.snap.cjs
as below); this will also handle better in ESM projects.
import
{
basename
,
dirname
,
extname
,
join
}
from
'
node:path
'
;
import
{
snapshot
}
from
'
node:test
'
;
snapshot
.
setResolveSnapshotPath
(
generateSnapshotPath
)
;
/**
*
@
param
{
string
}
testFilePath
'/tmp/foo.test.js'
*
@
returns
{
string
}
'/tmp/foo.test.snap.cjs'
*/
function
generateSnapshotPath
(
testFilePath
)
{
const
ext
=
extname
(
testFilePath
)
;
const
filename
=
basename
(
testFilePath
,
ext
)
;
const
base
=
dirname
(
testFilePath
)
;
return
join
(
base
,
`
${
filename
}
.snap.cjs
`
)
;
}
JavaScript
Copy to clipboard
The example below demonstrates snapshot testing with
testing library
for UI components; note the two different ways of accessing
assert.snapshot
):
import
{
describe
,
it
}
from
'
node:test
'
;
import
{
prettyDOM
}
from
'
@testing-library/dom
'
;
import
{
render
}
from
'
@testing-library/react
'
;
// Any framework (ex svelte)
import
{
SomeComponent
}
from
'
./SomeComponent.jsx
'
;
describe
(
'
<SomeComponent>
'
,
()
=>
{
// For people preferring "fat-arrow" syntax, the following is probably better for consistency
it
(
'
should render defaults when no props are provided
'
,
t
=>
{
const
component
=
render
(
<
SomeComponent
/>
)
.
container
.
firstChild
;
t
.
assert
.
snapshot
(
prettyDOM
(
component
))
;
}
)
;
it
(
'
should consume `foo` when provided
'
,
function
()
{
const
component
=
render
(
<
SomeComponent
foo
=
"
bar
"
/>
)
.
container
.
firstChild
;
this
.
assert
.
snapshot
(
prettyDOM
(
component
))
;
// `this` works only when `function` is used (not "fat arrow").
}
)
;
}
)
;
JSX
Copy to clipboard
⚠️
assert.snapshot
comes from the test's context (
t
or
this
),
not
node:assert
. This is necessary because the test context has access to scope that is impossible for
node:assert
(you would have to manually provide it every time
assert.snapshot
is used, like
snapshot(this, value)
, which would be rather tedious).
Unit tests
Unit tests are the simplest tests and generally require relatively nothing special. The vast majority of your tests will likely be unit tests, so it is important to keep this setup minimal because a small decrease to setup performance will magnify and cascade.
`test/setup.units.mjs`
import
{
register
}
from
'
node:module
'
;
import
'
./setup.mjs
'
;
// 💡
register
(
'
some-plaintext-loader
'
)
;
// plain-text files like graphql can now be imported:
// import GET_ME from 'get-me.gql'; GET_ME = '
JavaScript
Copy to clipboard
import
assert
from
'
node:assert/strict
'
;
import
{
describe
,
it
}
from
'
node:test
'
;
import
{
Cat
}
from
'
./Cat.js
'
;
import
{
Fish
}
from
'
./Fish.js
'
;
import
{
Plastic
}
from
'
./Plastic.js
'
;
describe
(
'
Cat
'
,
()
=>
{
it
(
'
should eat fish
'
,
()
=>
{
const
cat
=
new
Cat
()
;
const
fish
=
new
Fish
()
;
assert
.
doesNotThrow
(
()
=>
cat
.
eat
(
fish
))
;
}
)
;
it
(
'
should NOT eat plastic
'
,
()
=>
{
const
cat
=
new
Cat
()
;
const
plastic
=
new
Plastic
()
;
assert
.
throws
(
()
=>
cat
.
eat
(
plastic
))
;
}
)
;
}
)
;
JavaScript
Copy to clipboard
User Interface tests
UI tests generally require a DOM, and possibly other browser-specific APIs (such as
IndexedDb
used below). These tend to be very complicated and expensive to setup.
`test/setup.ui.mjs`
If you use an API like
IndexedDb
but it's very isolated, a global mock like below is perhaps not the way to go. Instead, perhaps move this
beforeEach
into the specific test where
IndexedDb
will be accessed. Note that if the module accessing
IndexedDb
(or whatever) is itself widely accessed, either mock that module (probably the better option), or
do
keep this here.
import
{
register
}
from
'
node:module
'
;
// ⚠️ Ensure only 1 instance of JSDom is instantiated; multiples will lead to many 🤬
import
jsdom
from
'
global-jsdom
'
;
import
'
./setup.units.mjs
'
;
// 💡
import
{
IndexedDb
}
from
'
./globals/IndexedDb.js
'
;
register
(
'
some-css-modules-loader
'
)
;
jsdom
(
undefined
,
{
url
:
'
https://test.example.com
'
,
// ⚠️ Failing to specify this will likely lead to many 🤬
}
)
;
// Example of how to decorate a global.
// JSDOM's `history` does not handle navigation; the following handles most cases.
const
pushState
=
globalThis
.
history
.
pushState
.
bind
(
globalThis
.
history
)
;
globalThis
.
history
.
pushState
=
function
mock_pushState
(
data
,
unused
,
url
)
{
pushState
(
data
,
unused
,
url
)
;
globalThis
.
location
.
assign
(
url
)
;
}
;
beforeEach
(
globalUIBeforeEach
)
;
function
globalUIBeforeEach
()
{
globalThis
.
indexedDb
=
new
IndexedDb
()
;
}
JavaScript
Copy to clipboard
You can have 2 different levels of UI tests: a unit-like (wherein externals & dependencies are mocked) and a more end-to-end (where only externals like IndexedDb are mocked but the rest of the chain is real). The former is generally the purer option, and the latter is generally deferred to a fully end-to-end automated usability test via something like
Playwright
or
Puppeteer
. Below is an example of the former.
import
{
before
,
describe
,
mock
,
it
}
from
'
node:test
'
;
import
{
screen
}
from
'
@testing-library/dom
'
;
import
{
render
}
from
'
@testing-library/react
'
;
// Any framework (ex svelte)
// ⚠️ Note that SomeOtherComponent is NOT a static import;
// this is necessary in order to facilitate mocking its own imports.
describe
(
'
<SomeOtherComponent>
'
,
()
=>
{
let
SomeOtherComponent
;
let
calcSomeValue
;
before
(
async
()
=>
{
// ⚠️ Sequence matters: the mock must be set up BEFORE its consumer is imported.
// Requires the `--experimental-test-module-mocks` be set.
calcSomeValue
=
mock
.
module
(
'
./calcSomeValue.js
'
,
{
calcSomeValue
:
mock
.
fn
()
,
}
)
;
(
{
SomeOtherComponent
}
=
await
import
(
'
./SomeOtherComponent.jsx
'
))
;
}
)
;
describe
(
'
when calcSomeValue fails
'
,
()
=>
{
// This you would not want to handle with a snapshot because that would be brittle:
// When inconsequential updates are made to the error message,
// the snapshot test would erroneously fail
// (and the snapshot would need to be updated for no real value).
it
(
'
should fail gracefully by displaying a pretty error
'
,
()
=>
{
calcSomeValue
.
mockImplementation
(
function
mock__calcSomeValue
()
{
return
null;
}
)
;
render
(
<
SomeOtherComponent
/>
)
;
const
errorMessage
=
screen
.
queryByText
(
'
unable
'
)
;
assert
.
ok
(
errorMessage
)
;
}
)
;
}
)
;
}
)
;
JSX
Copy to clipboard

---

# Mocking in tests
> **Fonte original:** [https://nodejs.org/learn/test-runner/mocking](https://nodejs.org/learn/test-runner/mocking)

Mocking in tests
Mocking is a means of creating a facsimile, a puppet. This is generally done in a
when 'a', do 'b'
manner of puppeteering. The idea is to limit the number of moving pieces and control things that "don't matter". "mocks" and "stubs" are technically different kinds of "test doubles". For the curious mind, a stub is a replacement that does nothing (a no-op) but track its invocation. A mock is a stub that also has a fake implementation (the
when 'a', do 'b'
). Within this doc, the difference is unimportant, and stubs are referred to as mocks.
Tests should be deterministic: runnable in any order, any number of times, and always produce the same result. Proper setup and mocking make this possible.
Node.js provides many ways to mock various pieces of code.
This article deals with the following types of tests:
type
description
example
mock candidates
unit
the smallest bit of code you can isolate
const sum = (a, b) => a + b
own code, external code, external system
component
a unit + dependencies
const arithmetic = (op = sum, a, b) => ops[op](a, b)
external code, external system
integration
components fitting together
-
external code, external system
end-to-end (e2e)
app + external data stores, delivery, etc
A fake user (ex a Playwright agent) literally using an app connected to real external systems.
none (do not mock)
There are different schools of thought about when to mock and when not to mock, the broad strokes of which are outlined below.
When and not to mock
There are 3 main mock candidates:
Own code
External code
External system
Own code
This is what your project controls.
import
foo
from
'
./foo.mjs
'
;
export
function
main
()
{
const
f
=
foo
()
;
}
JavaScript
Copy to clipboard
Here,
foo
is an "own code" dependency of
main
.
Why
For a true unit test of
main
,
foo
should be mocked: you're testing that
main
works, not that
main
+
foo
work (that's a different test).
Why not
Mocking
foo
can be more trouble than worth, especially when
foo
is simple, well-tested, and rarely updated.
Not mocking
foo
can be better because it's more authentic and increases coverage of
foo
(because
main
's tests will also verify
foo
). This can, however, create noise: when
foo
breaks, a bunch of other tests will also break, so tracking down the problem is more tedious: if only the 1 test for the item ultimately responsible for the issue is failing, that's very easy to spot; whereas 100 tests failing creates a needle-in-a-haystack to find the real problem.
External code
This is what your project does not control.
import
bar
from
'
bar
'
;
export
function
main
()
{
const
f
=
bar
()
;
}
JavaScript
Copy to clipboard
Here,
bar
is an external package, e.g. an npm dependency.
Uncontroversially, for unit tests, this should always be mocked. For component and integration tests, whether to mock depends on what this is.
Why
Verifying that code that your project does not maintain works is not the goal of a unit test (and that code should have its own tests).
Why not
Sometimes, it's just not realistic to mock. For example, you would almost never mock a large framework such as react or angular (the medicine would be worse than the ailment).
External system
These are things like databases, environments (Chromium or Firefox for a web app, an operating system for a node app, etc), file systems, memory store, etc.
Ideally, mocking these would not be necessary. Aside from somehow creating isolated copies for each case (usually very impractical due to cost, additional execution time, etc), the next best option is to mock. Without mocking, tests sabotage each other:
storage.mjs
storage.test.mjs
import
{
db
}
from
'
db
'
;
export
function
read
(
key
,
all
=
false
)
{
validate
(
key
)
;
if
(
all
)
{
return
db
.
getAll
(
key
)
;
}
return
db
.
getOne
(
key
)
;
}
export
function
save
(
key
,
val
)
{
validate
(
key
,
val
)
;
return
db
.
upsert
(
key
,
val
)
;
}
JavaScript
Copy to clipboard
In the above, the first and second cases (the
it()
statements) can sabotage each other because they are run concurrently and mutate the same store (a race condition):
save()
's insertion can cause the otherwise valid
read()
's test to fail its assertion on items found (and
read()
's can do the same thing to
save()
's).
What to mock
Modules + units
This leverages
mock
from the Node.js test runner.
import
assert
from
'
node:assert/strict
'
;
import
{
before
,
describe
,
it
,
mock
}
from
'
node:test
'
;
describe
(
'
foo
'
,
{
concurrency
:
true
},
()
=>
{
const
barMock
=
mock
.
fn
()
;
let
foo
;
before
(
async
()
=>
{
const
barNamedExports
=
await
import
(
'
./bar.mjs
'
)
// discard the original default export
.
then
(
({
default
:
_
,
...
rest
})
=>
rest
)
;
// It's usually not necessary to manually call restore() after each
// nor reset() after all (node does this automatically).
mock
.
module
(
'
./bar.mjs
'
,
{
defaultExport
:
barMock
,
// Keep the other exports that you don't want to mock.
namedExports
:
barNamedExports
,
}
)
;
// This MUST be a dynamic import because that is the only way to ensure the
// import starts after the mock has been set up.
(
{
foo
}
=
await
import
(
'
./foo.mjs
'
))
;
}
)
;
it
(
'
should do the thing
'
,
()
=>
{
barMock
.
mock
.
mockImplementationOnce
(
function
bar_mock
()
{
/* … */
}
)
;
assert
.
equal
(
foo
()
,
42
)
;
}
)
;
}
)
;
JavaScript
Copy to clipboard
APIs
A little-known fact is that there is a builtin way to mock
fetch
.
undici
is the Node.js implementation of
fetch
. It's shipped with
node
, but not currently exposed by
node
itself, so it must be installed (ex
npm install undici
).
import
assert
from
'
node:assert/strict
'
;
import
{
beforeEach
,
describe
,
it
}
from
'
node:test
'
;
import
{
MockAgent
,
setGlobalDispatcher
}
from
'
undici
'
;
import
endpoints
from
'
./endpoints.mjs
'
;
describe
(
'
endpoints
'
,
{
concurrency
:
true
},
()
=>
{
let
agent
;
beforeEach
(
()
=>
{
agent
=
new
MockAgent
()
;
setGlobalDispatcher
(
agent
)
;
}
)
;
it
(
'
should retrieve data
'
,
async
()
=>
{
const
endpoint
=
'
foo
'
;
const
code
=
200
;
const
data
=
{
key
:
'
good
'
,
val
:
'
item
'
,
}
;
agent
.
get
(
'
https://example.com
'
)
.
intercept
(
{
path
:
endpoint
,
method
:
'
GET
'
,
}
)
.
reply
(
code
,
data
)
;
assert
.
deepEqual
(
await
endpoints
.
get
(
endpoint
)
,
{
code
,
data
,
}
)
;
}
)
;
it
(
'
should save data
'
,
async
()
=>
{
const
endpoint
=
'
foo/1
'
;
const
code
=
201
;
const
data
=
{
key
:
'
good
'
,
val
:
'
item
'
,
}
;
agent
.
get
(
'
https://example.com
'
)
.
intercept
(
{
path
:
endpoint
,
method
:
'
PUT
'
,
}
)
.
reply
(
code
,
data
)
;
assert
.
deepEqual
(
await
endpoints
.
save
(
endpoint
)
,
{
code
,
data
,
}
)
;
}
)
;
}
)
;
JavaScript
Copy to clipboard
Time
Like Doctor Strange, you too can control time. You would usually do this just for convenience to avoid artificially protracted test runs (do you really want to wait 3 minutes for that
setTimeout()
to trigger?). You may also want to travel through time. This leverages
mock.timers
from the Node.js test runner.
Note the use of time-zone here (
Z
in the time-stamps). Neglecting to include a consistent time-zone will likely lead to unexpected results.
import
assert
from
'
node:assert/strict
'
;
import
{
describe
,
it
,
mock
}
from
'
node:test
'
;
import
ago
from
'
./ago.mjs
'
;
describe
(
'
whatever
'
,
{
concurrency
:
true
},
()
=>
{
it
(
'
should choose "minutes" when that
\'
s the closet unit
'
,
()
=>
{
mock
.
timers
.
enable
(
{
now
:
new
Date
(
'
2000-01-01T00:02:02Z
'
)
}
)
;
const
t
=
ago
(
'
1999-12-01T23:59:59Z
'
)
;
assert
.
equal
(
t
,
'
2 minutes ago
'
)
;
}
)
;
}
)
;
JavaScript
Copy to clipboard
This is especially useful when comparing against a static fixture (that is checked into a repository), such as in
snapshot testing
.

---

# Collecting code coverage in Node.js
> **Fonte original:** [https://nodejs.org/learn/test-runner/collecting-code-coverage](https://nodejs.org/learn/test-runner/collecting-code-coverage)

Collecting code coverage in Node.js
Node.js provides built-in support for code coverage through its test runner, which can be enabled using the
--experimental-test-coverage
flag.
If using the
run()
API, the
coverage
option must be set to
true
. For more information on the
run()
API, see
the
node:test
documentation
.
What is code coverage?
Code coverage is a metric for test runners that gauges how much of a program’s source code is executed during testing. It reveals which portions of the codebase are tested and which are not, helping to pinpoint gaps in the test suite. This ensures more comprehensive testing of the software and minimizes the risk of undetected bugs. Typically expressed as a percentage, higher code coverage percentages indicate more thorough test coverage. For a more detailed explanation of code coverage, you can refer to the
"Code coverage" Wikipedia article
.
Basic coverage reporting
Let's walk through a simple example to demonstrate how code coverage works in Node.js.
Note:
This example, and all other ones in this file, are written using CommonJS. If you are unfamiliar with this concept, please read the
CommonJS Modules
documentation.
main.js
main.test.js
function
add
(
a
,
b
)
{
return
a
+
b
;
}
function
isEven
(
num
)
{
return
num
%
2
===
0
;
}
function
multiply
(
a
,
b
)
{
return
a
*
b
;
}
module
.
exports
=
{
add
,
isEven
,
multiply
}
;
JavaScript
Copy to clipboard
In the module, we have three functions:
add
,
isEven
, and
multiply
.
In the test file, we are testing the
add()
and
isEven()
functions. Notice that the
multiply()
function is not covered by any tests.
To collect code coverage while running your tests, see the following snippets:
CLI
run()
node
--experimental-test-coverage
--test
main.test.js
After running the tests, you'll receive a report that looks something like this:
✔ add() should add two numbers (1.505987ms)
✔ isEven() should report whether a number is even (0.175859ms)
ℹ tests 2
ℹ suites 0
ℹ pass 2
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 59.480373
ℹ start of coverage report
ℹ -------------------------------------------------------------
ℹ file         | line % | branch % | funcs % | uncovered lines
ℹ -------------------------------------------------------------
ℹ main.js      |  76.92 |   100.00 |   66.67 | 9-11
ℹ main.test.js | 100.00 |   100.00 |  100.00 |
ℹ -------------------------------------------------------------
ℹ all files    |  86.96 |   100.00 |   80.00 |
ℹ -------------------------------------------------------------
ℹ end of coverage report
text
Copy to clipboard
The coverage report provides a breakdown of how much of your code is covered by tests:
Line Coverage
: The percentage of lines executed during the tests.
Branch Coverage
: The percentage of code branches (like if-else statements) tested.
Function Coverage
: The percentage of functions that have been invoked during testing.
In this example:
main.js
shows 76.92% line coverage and 66.67% function coverage because the
multiply()
function was not tested. The uncovered lines (9-11) correspond to this function.
main.test.js
shows 100% coverage across all metrics, indicating that the tests themselves were fully executed.
Including and excluding
When working on applications, you might encounter situations where certain files or lines of code need to be excluded.
Node.js provides mechanisms to handle this, including the use of comments to ignore specific code sections and the CLI to exclude entire patterns.
Using comments
main.js
Coverage Report
function
add
(
a
,
b
)
{
return
a
+
b
;
}
function
isEven
(
num
)
{
return
num
%
2
===
0
;
}
/* node:coverage ignore next 3 */
function
multiply
(
a
,
b
)
{
return
a
*
b
;
}
module
.
exports
=
{
add
,
isEven
,
multiply
}
;
JavaScript
Copy to clipboard
When reporting coverage with this modified
main.js
file, the report will now show 100% coverage across all metrics. This is because the uncovered lines (9-11) have been ignored.
There are multiple ways to ignore sections of code using comments.
ignore next
ignore next (2)
disable
function
add
(
a
,
b
)
{
return
a
+
b
;
}
function
isEven
(
num
)
{
return
num
%
2
===
0
;
}
/* node:coverage ignore next 3 */
function
multiply
(
a
,
b
)
{
return
a
*
b
;
}
module
.
exports
=
{
add
,
isEven
,
multiply
}
;
JavaScript
Copy to clipboard
Each of these different methods will produce the same report, with 100% code coverage across all metrics.
Using the CLI
Node.js offers two CLI arguments for managing the inclusion or exclusion of specific files in a coverage report.
The
--test-coverage-include
flag (
coverageIncludeGlobs
in the
run()
API) restricts the coverage to files that match the provided glob pattern. By default, files in the
/node_modules/
directory are excluded, but this flag allows you to explicitly include them.
The
--test-coverage-exclude
flag (
coverageExcludeGlobs
in the
run()
API) omits files that match the given glob pattern from the coverage report.
These flags can be used multiple times, and when both are used together, files must adhere to the inclusion rules, while also avoiding the exclusion rules.
Directory Structure
Coverage Report
.
├── main.test.js
├── src
│   ├── age.js
│   └── name.js
text
Copy to clipboard
src/age.js
has less-than-optimal coverage in the report above, but with the
--test-coverage-exclude
flag (
coverageExcludeGlobs
in the
run()
API), it can be excluded from the report entirely.
CLI
run()
New coverage report
node
--experimental-test-coverage
--test-coverage-exclude=src/age.js
--test
main.test.js
Our test file is also included in this coverage report, but we only want JavaScript files in the
src/
directory. The
--test-coverage-include
flag (
coverageIncludeGlobs
in the
run()
API) can be used in this case.
CLI
run()
New coverage report
node
--experimental-test-coverage
--test-coverage-include=src/
*
.js
--test
main.test.js
Thresholds
By default, when all tests pass, Node.js exits with code
0
, which indicates a successful execution. However, the coverage report can be configured to exit with code
1
when coverage is failing.
Node.js currently supports thresholds for all three of the coverages supported:
--test-coverage-lines
(
lineCoverage
in the
run()
API) for line coverage.
--test-coverage-branches
(
branchCoverage
in the
run()
API) for branch coverage.
--test-coverage-functions
(
functionCoverage
in the
run()
API) for function coverage.
If you wanted to require the previous example to have line coverage >= 90%, you could use the
--test-coverage-lines=90
flag (
lineCoverage: 90
in the
run()
API).
CLI
run()
Coverage Report
node
--experimental-test-coverage
--test-coverage-lines=90
--test
main.test.js

---

# What is Node-API?
> **Fonte original:** [https://nodejs.org/learn/node-api](https://nodejs.org/learn/node-api)

Node-API
Node-API
is a stable C API built into Node.js that lets C/C++ code create, read, and manipulate JavaScript values as if they were created by JavaScript itself. It was introduced experimentally in Node.js 8.0.0 and became stable (no longer behind a flag) in the Node.js 8/10 timeframe.
Because Node-API is part of Node.js itself, it requires no additional installation.
Why Node-API instead of NAN?
Before Node-API, the dominant approach for native addon development was
Native Abstractions for Node.js (NAN)
. NAN works by calling directly into the
V8
API, which changes with every major V8 release. This means NAN-based addons often need to be recompiled - and sometimes updated - when Node.js ships a new V8 version.
Node-API abstracts the JavaScript engine behind a stable interface. This gives you two important guarantees:
Backward compatibility
- a module built today will run on all future versions of Node.js without any recompilation or code changes.
ABI stability
- because the API is ABI-stable, the compiled
.node
binary itself continues to work across Node.js releases.
Common use cases
Wrapping an existing C/C++ library
The most common reason to write a native addon is to expose an existing C/C++ library to JavaScript developers. Node-API lets you maintain your C/C++ code independently and keep the JavaScript bindings in sync with minimal effort.
Accessing OS resources
Some applications - such as those built with
Electron
or
NW.js
- need access to system APIs that Node.js does not expose. Node-API provides the hooks to reach those resources.
Computationally intensive work
For compute-heavy tasks, writing the hot path in C or C++ and calling it from JavaScript via Node-API can yield significant performance gains. Unlike JIT-compiled JavaScript, the compiled C/C++ binary is available to Node.js immediately without a warm-up phase.
node-addon-api
An important companion to Node-API is the npm package
node-addon-api
. It wraps the C API in an idiomatic C++ object model, reducing boilerplate and making common patterns - like wrapping C++ objects as JavaScript objects - much more ergonomic. It retains the full ABI-stability guarantee of Node-API.
Most of the examples on this site use
node-addon-api
.

---

# Overview
> **Fonte original:** [https://nodejs.org/learn/node-api/getting-started](https://nodejs.org/learn/node-api/getting-started)

Getting Started with Node-API
This section walks you through everything you need to begin building native Node.js addons with Node-API. It is designed for developers who are new to native addon development and want a guided path from zero to a working module.
What you will learn
Prerequisites
- the C/C++ and JavaScript knowledge you need before diving in
The tools you'll need
- how to install Node, npm, Git, and the C/C++ toolchain on Windows, macOS, and Linux
Anatomy of a Node-API project
- the common directory layout,
package.json
entries,
binding.gyp
, and the JavaScript wrapper layer shared by every
node-addon-api
project
Your first project
- building and running your first Node-API module
ObjectWrap
- exposing C++ objects as JavaScript objects using
node-addon-api
's
ObjectWrap
class
Migrating from NAN
- converting an existing NAN-based addon to Node-API
Which API level should I use?
Node-API operates at two levels:
C API
- built directly into Node.js and documented on the
Node.js API pages
. Gives you maximum control and no extra dependencies.
C++ wrapper (
node-addon-api
)
- an npm package that wraps the C API in a friendlier C++ object model. Recommended for most projects because it reduces boilerplate significantly while preserving full ABI stability.
The examples in this section use
node-addon-api
.

---

# Pre-requisites
> **Fonte original:** [https://nodejs.org/learn/node-api/getting-started/prerequisites](https://nodejs.org/learn/node-api/getting-started/prerequisites)

Pre-requisites
C/C++ and JavaScript
The purpose of Node-API is to enable you to use your existing or newly written C/C++ code from JavaScript. This assumes at least a passing familiarity with both JavaScript and C/C++. The level of familiarity necessary is dependent upon the complexity of your project and your involvement with the JavaScript and the C/C++.
For your own projects, it will be necessary to have an understanding of the C/C++ code you plan to integrate as well as what objectives you hope to achieve with your project on the JavaScript side of things.
Command line tools
Many of the tools used to develop Node-API modules are run from the command line. So at least a passing familiarity and confidence with your command line tool is essential. IDEs, as described
here
can help. But they also rely in the command line.

---

# Tools
> **Fonte original:** [https://nodejs.org/learn/node-api/getting-started/tools](https://nodejs.org/learn/node-api/getting-started/tools)

Tools
Node.js
Node.js
is the runtime that executes JavaScript on your machine. It bundles the
V8 JavaScript engine
together with a set of built-in modules that let you run JavaScript outside of a browser.
Download the appropriate installer for your platform from the
Node.js downloads page
. The
LTS (Long Term Support)
release is the most stable choice and is recommended for addon development. The installer includes npm.
Node-API is stable in all currently supported Node.js releases. Any Active LTS or Maintenance LTS release will work.
npm
npm
is the package manager for Node.js. It is installed alongside Node.js. For most Node-API developers, the goal is to publish an npm package that wraps a C/C++ library and makes it available to JavaScript users.
npm is included with Node.js. You can keep it up to date with:
npm
install
-g
npm@latest
Git
Git
is not strictly required for Node-API work, but it is used throughout the ecosystem. Most example repositories and dependency installations rely on it.
C/C++ compiler and Python
In addition to Node and npm, you need a C/C++ compiler toolchain and Python (required by
node-gyp
.
Windows
The recommended approach is to install
Visual Studio Build Tools
with the
"Desktop development with C++"
workload selected. This provides the MSVC compiler, Windows SDK, and the build infrastructure node-gyp requires.
Alternatively, you can install via
winget
:
winget install Microsoft.VisualStudio.
2022.
BuildTools
During or after installation, open Visual Studio Installer and ensure the
"Desktop development with C++"
workload is checked.
Python 3 is also required. Install it from
python.org
or via winget:
winget install Python.Python.
3
Run PowerShell or
cmd.exe
as
Administrator
when installing global tools.
macOS
Install Apple's command-line developer tools. If you haven't installed Xcode already, the quickest route is:
xcode-select
--install
If that fails, install the full
Xcode IDE
from the Mac App Store, which includes the necessary compiler toolchain.
Python 3 is
not
bundled with modern macOS. Install it using
Homebrew
:
brew
install
python3
Or download an installer from
python.org
.
Linux
On most Linux distributions the required C/C++ toolchain and Python are either pre-installed or easily added. For Debian/Ubuntu-based systems:
sudo
apt-get
update
sudo
apt-get
install
-y
build-essential
python3
Shell
Copy to clipboard
For other distributions, refer to your package manager's documentation or the
LLVM installation guide
.
Verifying your tools
After installation, verify each tool is on your PATH.
macOS and Linux
node
--version
npm
--version
python3
--version
git
--version
cc
--version
make
--version
Shell
Copy to clipboard
Windows (PowerShell)
node
--
version
npm
--
version
python
--
version
git
--
version
PowerShell
Copy to clipboard
To confirm the MSVC compiler is available, open a
Developer Command Prompt
(installed with Visual Studio Build Tools) and run:
cl
Other tools
You'll need a shell - Terminal on macOS/Linux, PowerShell or Windows Terminal on Windows.
A capable code editor is strongly recommended.
Visual Studio Code
has excellent C/C++ support via the
C/C++ extension
and integrates well with node-gyp builds.
CLion
is another popular choice for C++ development.

---

# Anatomy of a Node-API project
> **Fonte original:** [https://nodejs.org/learn/node-api/getting-started/project-structure](https://nodejs.org/learn/node-api/getting-started/project-structure)

Anatomy of a Node-API project
Before diving into code, it helps to understand the files and layout that every
node-addon-api
project shares. All N-API examples in these guides follow this same structure, so this page explains it once so those tutorials can focus on what makes each one unique.
Choosing an API level
Node-API operates at two levels:
C API
is built directly into Node.js and fully documented on the
Node.js API pages
. Gives you maximum control with no extra dependencies.
C++ wrapper (
node-addon-api
)
is an npm package that wraps the C API in an idiomatic C++ object model. Recommended for most projects: it eliminates significant boilerplate while preserving the full ABI-stability guarantee of Node-API.
The tutorials in this section use
node-addon-api
.
Node-API is stable in all currently supported Node.js releases. Use an
Active LTS or Maintenance LTS release
for the best experience. You can check the version of Node.js you are running with
node -v
.
Directory layout
.
├──
binding.gyp
#
tells
node-gyp
how
to
compile
the
C/C++
source
├──
build/
#
compiled
output
(generated)
├──
lib/
│
└──
binding.js
#
JavaScript
layer
that
loads
the
compiled
binary
├──
node_modules/
├──
src/
│
└──
*.cc
/
*.h
#
your
C/C++
implementation
├──
test/
│
└──
*.js
#
test
code
├──
package.json
└──
package-lock.json
package.json
Two entries in
package.json
are specific to native addons.
node-addon-api
dependency
"
dependencies
"
:
{
"
node-addon-api
"
:
"
^8.0.0
"
}
JSON
Copy to clipboard
node-addon-api
adds a C++ wrapper to the C API built into Node.js. It makes creating and manipulating JavaScript objects in C++ straightforward and is useful even when the underlying library you are wrapping is written in C.
"gypfile": true
"
gypfile
"
:
true
This tells npm that the package requires a native compilation step. When npm sees this entry it automatically invokes its bundled copy of
node-gyp
, which reads
binding.gyp
to build the binary.
binding.gyp
binding.gyp
is a
GYP
file that describes how to compile and link your C/C++ code. It must be named exactly
binding.gyp
.
GYP
(Generate Your Projects) lets you write a single build description that works on Windows, macOS, and Linux.
node-gyp
reads this file and produces the platform-appropriate build files (MSVC project on Windows, Makefile on Linux, Xcode project on macOS), then invokes the compiler.
A minimal
binding.gyp
for a
node-addon-api
project looks like this:
{
"
targets
"
:
[
{
"
target_name
"
:
"
my_addon
"
,
"
sources
"
:
[
"
src/my_addon.cc
"
],
"
include_dirs
"
:
[
"
<!@(node -p
\"
require('node-addon-api').include
\"
)
"
],
"
dependencies
"
:
[
"
<!(node -p
\"
require('node-addon-api').gyp
\"
)
"
]
}
]
}
JSON
Copy to clipboard
The full GYP format is documented in the
GYP User Documentation
.
lib/binding.js
The
lib/
directory holds a thin JavaScript wrapper that loads the compiled binary and re-exports it. This layer keeps the binary-loading logic in one place and gives you a natural spot to add JavaScript-side validation or convenience methods.
A typical
binding.js
uses the
bindings
package to resolve the path to the
.node
file regardless of platform:
'
use strict
'
;
const
addon
=
require
(
'
bindings
'
)(
'
my_addon
'
)
;
module
.
exports
=
addon
;
JavaScript
Copy to clipboard
If you install packages globally with npm and encounter
Error: EACCES: permission denied
, use
nvm
to manage your Node.js installation. With nvm, global installs go into your home directory and never require
sudo
.

---

# Your First Project
> **Fonte original:** [https://nodejs.org/learn/node-api/getting-started/your-first-project](https://nodejs.org/learn/node-api/getting-started/your-first-project)

Your First Project
Before you start, make sure you've got all the necessary
prerequisites
and
tools
installed, and read
Anatomy of a Node-API project
to understand the common layout and configuration files shared by all
node-addon-api
projects.
This tutorial uses
node-addon-api
at the C++ wrapper level.
Creating a project
The quickest way to get a working project is to copy the Hello World example from the
node-addon-examples
repository:
git
clone
https://github.com/nodejs/node-addon-examples.git
cp
-r
node-addon-examples/src/1-getting-started/a-first-project/node-addon-api
hello-world
cd
hello-world
npm
install
Shell
Copy to clipboard
Alternatively, set up the project manually:
mkdir
hello-world
cd
hello-world
npm
init
-y
npm
install
node-addon-api
Shell
Copy to clipboard
Then create the source files described below. Once the project is set up, verify everything works:
npm
test
src/hello_world.cc
hello_world.cc
is perhaps the simplest useful Node-API file you can write.
The file defines a C++
Method
function that takes a single
Napi::CallbackInfo&
argument. This
info
object provides access to the JavaScript environment, including any arguments passed in from JavaScript.
info
behaves like an array of JavaScript arguments.
Method
uses
info
to obtain a
Napi::Env
, then creates and returns a
Napi::String
with the value
"world"
.
The
Init
function registers the single export from this module: the name
"HelloWorld"
maps to the
Method
function.
The
NODE_API_MODULE
macro at the bottom ensures
Init
is called when the module is loaded.
lib/binding.js
binding.js
loads the compiled binary and re-exports its contents. The sole export from the binary is the
HelloWorld
function.
test/test_binding.js
test_binding.js
uses
require
to load the
HelloWorld
function from
binding.js
. The
testBasic
function calls it and verifies the result.
Conclusion
This project demonstrates a minimal Node-API module that exports a single function. Some things to try next:
Run
test_binding.js
in your debugger. Step through the code and observe what visibility you have into the JavaScript object created by the C++ code.
Modify
test_binding.js
to require the compiled binary directly instead of going through
binding.js
. Step through in the debugger and note the difference.
Modify
hello_world.cc
to read arguments passed from JavaScript. The
node-addon-api
examples
are a good reference.

---

# Object Wrap
> **Fonte original:** [https://nodejs.org/learn/node-api/getting-started/objectwrap](https://nodejs.org/learn/node-api/getting-started/objectwrap)

Object Wrap
This tutorial is an alternative to
Your First Project
. Instead of exporting a plain function, it demonstrates how to expose a C++ object as a JavaScript object using
node-addon-api
's
ObjectWrap
class.
Before you start, make sure you've got all the necessary
prerequisites
and
tools
installed, and read
Anatomy of a Node-API project
to understand the common project layout and configuration files.
Creating a project
Copy the Object Wrap example from the
node-addon-examples
repository:
git
clone
https://github.com/nodejs/node-addon-examples.git
cp
-r
node-addon-examples/src/2-js-to-native-conversion/object-wrap-demo/node-addon-api
object-wrap-demo
cd
object-wrap-demo
npm
install
Shell
Copy to clipboard
Alternatively, set up the project manually:
mkdir
object-wrap-demo
cd
object-wrap-demo
npm
init
-y
npm
install
node-addon-api
Shell
Copy to clipboard
Then create the source files described below. Once the project is set up, verify everything works:
npm
test
binding.gyp
The project's
binding.gyp
follows the standard format (see
Anatomy of a Node-API project
for a full explanation of the
binding.gyp
format and how
node-gyp
uses it).
src/object_wrap_demo.h and src/object_wrap_demo.cc
object_wrap_demo.h
and
object_wrap_demo.cc
are the heart of the project. The
napi.h
header comes from
node-addon-api
and declares the C++ classes that represent JavaScript values.
object_wrap_demo.cc
defines the
ObjectWrapDemo
C++ class:
The
constructor
takes a single JavaScript string and stores it in the private member
_greeterName
.
The
Greet
method
takes a JavaScript string, prints two lines to stdout, and returns the value originally passed to the constructor.
The
GetClass
static method
returns the class descriptor that Node-API needs to know how to dispatch calls from JavaScript into the C++ methods.
The
Init
function exports the
ObjectWrapDemo
class by calling
ObjectWrapDemo::GetClass
. The
NODE_API_MODULE
macro at the bottom ensures
Init
is called when the module is loaded.
lib/binding.js
binding.js
defines an
ObjectWrapDemo
class that wraps the native binary. When
new ObjectWrapDemo(value)
is called, it creates the underlying C++ object and stores it as
_addonInstance
. The JavaScript
greet
method delegates to the same method on the C++ object.
test/test_binding.js
test_binding.js
shows how to use the
ObjectWrapDemo
JavaScript class from
lib/binding.js
. Note that calling
greet
produces two lines of stdout output as a side-effect of the
printf
calls in the C++ code.
Conclusion
This project shows how to use
ObjectWrap
to expose a stateful C++ object as a JavaScript object. Some things to try next:
Run
test_binding.js
in your debugger. Step through the code and observe what the JavaScript object looks like from the debugger's perspective.
Modify
test_binding.js
to require the compiled binary directly rather than through
binding.js
and observe the difference in the debugger.
Extend
object_wrap_demo.cc
to export additional methods or properties on the
ObjectWrapDemo
class.

---

# Migrating to Node-API
> **Fonte original:** [https://nodejs.org/learn/node-api/getting-started/migration](https://nodejs.org/learn/node-api/getting-started/migration)

Migrating to Node-API
The objective of this tutorial is to give you a good idea of the steps necessary and the tools available to migrate an existing
NAN
Node native add-on module to
Node-API
using the
node-addon-api
package.
This tutorial uses the conversion tool supplied with Node-API to give you a head start on the migration. However, the conversion tool will only get you so far. Further manual cleanup is still required as described below.
To keep things somewhat constrained, this tutorial uses
node-microtime
which is a simple NAN-based native add-on. This add-on makes system calls to determine the current time to microsecond resolution if supported by the operating system.
Before you start, make sure you've got all the necessary
prerequisites
and
tools
installed.
Node-API is stable in all currently supported Node.js releases. Use an
Active LTS or Maintenance LTS release
. You can check the version of Node.js you are running with
node -v
.
Clone
node-microtime
As a first step, clone the
node-microtime
GitHub repository to your system:
git
clone
https://github.com/wadey/node-microtime.git
Before we make our modifications, it's a good idea to first build and test
node-microtime
to help verify that the necessary development tools have been correctly installed and configured.
Since
node-microtime
has already migrated to
node-addon-api
, you have to move to tag
v2.1.9
in order to follow the tutorial.
cd
node-microtime
git
checkout
tags/v2.1.9
npm
install
npm
test
Shell
Copy to clipboard
The
npm install
command invokes the build process and
npm test
runs the code. You may see compiler warnings that do not affect the ability to run the code. When successfully built and run, you should see output that looks something like this:
microtime.now()
=
1526334357974754
microtime.nowDouble()
=
1526334357.976626
microtime.nowStruct()
=
[
1526334357,
976748
]
Guessing
clock
resolution...
Clock
resolution
observed:
1us
Run the conversion tool
Once the basic operation of the code has been verified, the next step is to run the
Node-API Conversion Tool
. Be aware that the conversion tool
replaces files in place
. Never run the conversion tool on the only copy of your project. And obviously, you want to run it only
once
.
npm
install
--save
node-addon-api
node
./node_modules/node-addon-api/tools/conversion.js
./
Shell
Copy to clipboard
For this small project, the conversion tool runs very quickly. At this point, the conversion tool has modified the following project files:
binding.gyp
package.json
src/microtime.cc
Go ahead and rebuild the converted code:
npm
install
As you'll see, there are one or more compile errors that need to be addressed. There can be quite a few at times, but nothing insurmountable.
Cleanup
The conversion tool cannot anticipate every coding situation. So there will typically be issues that need to be addressed manually. Below are the issues you're likely to encounter with this project. The best approach is to address each issue, one at a time, and attempt the
npm install
after addressing each issue until there are no more errors.
Cannot find module 'nan'
This error, and its counterpart where
napi.h
cannot be found, is due to code missing in the
binding.gyp
file. For this project, you'll see this code in the binding.gyp:
'include_dirs' :
[
'<!(node
-e
"
require(
\'
nan
\'
)
"
)'
]
The C/C++ include directories are still pointing to NAN. They need to point to Node-API instead. The line above should be replaced with this line:
'include_dirs' :
[
"
<!@(node -p
\"
require('node-addon-api').include
\"
)
"
]
On other projects you may receive an error where
napi.h
cannot be found. The cause is the same as this one. The
include_dirs
property of each target must include the reference to
node-addon-api
as shown above.
Use of undeclared identifier 'env'
The three C++ functions-
Now
,
NowDouble
, and
NowStruct
-each make a reference to the
env
variable which is not defined.
env
is meant to hold the
Node-API Environment
variable which is essential to nearly all Node-API calls. The value for
env
can be easily obtained from the
Napi::CallbackInfo
argument passed to each C++ function. One technique to correct this error is to add the following code as the first line in the body of each function:
Napi
::
Env env
=
info
.
Env
()
;
An alternative would be to replace each instance of
env
in the three functions with
info.Env()
. The choice is yours.
Use of
void
as the return value
Each of the three C++ functions-
Now
,
NowDouble
, and
NowStruct
are defined to return a
void
value. In fact, they should each be returning a JavaScript value. The best way to accomplish this is by replacing the
void
with
Napi::Value
. This permits each of the functions to return a JavaScript value of undetermined type. It could be any JavaScript value including String, Number, Boolean, Array, etc. Here's what they should look like:
Napi
::
Value
Now
(
const
Napi
::
CallbackInfo
&
info
)
{
Napi
::
Value
NowDouble
(
const
Napi
::
CallbackInfo
&
info
)
{
Napi
::
Value
NowStruct
(
const
Napi
::
CallbackInfo
&
info
)
{
C++
Copy to clipboard
A new way to define
exports
Node-API uses a different technique for defining the
exports
object.
The code:
Nan
::
Export
(
target
,
"
now
"
,
Now
)
;
Nan
::
Export
(
target
,
"
nowDouble
"
,
NowDouble
)
;
Nan
::
Export
(
target
,
"
nowStruct
"
,
NowStruct
)
;
C++
Copy to clipboard
Needs to be replaced with:
exports
.
Set
(
Napi
::
String
::
New
(
env
,
"
now
"
),
Napi
::
Function
::
New
(
env
,
Now
))
;
exports
.
Set
(
Napi
::
String
::
New
(
env
,
"
nowDouble
"
),
Napi
::
Function
::
New
(
env
,
NowDouble
))
;
exports
.
Set
(
Napi
::
String
::
New
(
env
,
"
nowStruct
"
),
Napi
::
Function
::
New
(
env
,
NowStruct
))
;
C++
Copy to clipboard
exports
is a
Napi::Object
which represents a JavaScript object. The
Set
method sets the value of properties on the object and takes two arguments, the name of the property and its value. These two arguments must both be JavaScript values.
One more change is critical to the operation of Node-API. The
InitAll
function
must
return the
exports
variable. This line must appear as the last line in the body of the function:
return
exports
;
Failure to add this line will likely result in a segfault error at runtime.
Replacement for
ErrnoException
The NAN
ErrnoException
object does not exist in Node-API. The existing code looks like:
Napi
::
Error
::
New
(
env
,
Napi
::
ErrnoException
(
errno
,
"
gettimeofday
"
)).
ThrowAsJavaScriptException
()
;
But it can easily be replaced with code that looks like this:
std
::
string msg
=
"
gettimeofday:
"
+
std
::
string
(
strerror
(
errno
))
;
Napi
::
Error
::
New
(
env
,
msg
).
ThrowAsJavaScriptException
()
;
C++
Copy to clipboard
Final check
Once the code compiles without error, test the changes you've made:
npm
test
You should see results similar to those from before the migration.
Congratulations! You've just converted your first NAN module to Node-API.
Conclusion
Admittedly, this tutorial just scratches the surface on migrating NAN modules to Node-API. However, the basic approach is the same. Run the conversion, attempt a compile, address the errors, compile again. Wash. Rinse. Repeat.

---

# Overview
> **Fonte original:** [https://nodejs.org/learn/node-api/build-tools](https://nodejs.org/learn/node-api/build-tools)

Build Tools
Building a native Node.js addon requires compiling C/C++ source code into a binary
.node
file that Node.js can load at runtime. This section covers the build tools available to you and the trade-offs between them.
Compiling on installation vs. distributing pre-built binaries
There are two broad strategies for shipping a native addon:
Compile on the user's machine
- When a user runs
npm install
, the build tool compiles your C/C++ source on their system. This is simple to set up but requires every user to have a working C/C++ toolchain installed.
Distribute pre-built binaries
- You compile binaries for each supported platform and architecture ahead of time and upload them somewhere users can download. Users who download a matching binary skip the compilation step entirely; others fall back to compiling locally.
Build tools covered in this section
node-gyp
- the default build tool bundled with npm; uses Google's GYP format and is nearly universally supported in the Node ecosystem
CMake.js
- a CMake-based alternative, well-suited for projects that already use CMake
node-pre-gyp
- a layer on top of node-gyp for distributing pre-built binaries via Amazon S3

---

# node-gyp
> **Fonte original:** [https://nodejs.org/learn/node-api/build-tools/node-gyp](https://nodejs.org/learn/node-api/build-tools/node-gyp)

node-gyp
node-gyp
is the standard build tool for native Node.js addons and is used by the vast majority of packages in the npm ecosystem. It is actively maintained by the Node.js team. Most of the examples on this site use node-gyp to build binaries.
node-gyp is based on Google's
GYP
build tool. GYP provides a single cross-platform configuration format for C/C++ builds. Although Google archived the upstream GYP repository, node-gyp continues to receive active development and maintenance through
gyp-next
.
node-gyp requires
Python 3.6 or later
. Python 2 is not supported. The full list of requirements for each platform can be found in the
node-gyp installation docs
.
node-gyp is included with npm; when npm sees
"gypfile": true
in
package.json
, it invokes node-gyp automatically during
npm install
. You can also install and use it directly:
npm
install
-g
node-gyp
For developers who find node-gyp too constraining,
CMake.js
is a good alternative.
Pros
Included with npm - no separate global install required for consumers.
Nearly universally used in the Node.js ecosystem, with broad documentation and community knowledge.
Supports Windows, macOS, and Linux from a single
binding.gyp
configuration file.
Cons
The underlying GYP format is no longer actively developed by Google.
Some developers find GYP's configuration syntax verbose or difficult to debug.

---

# CMake.js
> **Fonte original:** [https://nodejs.org/learn/node-api/build-tools/cmake-js](https://nodejs.org/learn/node-api/build-tools/cmake-js)

CMake.js
CMake.js
is good build tool alternative to
node-gyp
. CMake.js is based on the
CMake
tool which must be installed.
Pros
Uses the CMake tool which is widely-adopted in the open source community.
Ideal for existing C/C++ libraries already based on CMake.
Cons
Not widely adopted in the Node community.
Installation
CMake.js requires that CMake is already installed. Installers are available on the
CMake website
.
macOS developers may find it more convenient to install CMake using
Homebrew
. With Homebrew installed, CMake can be installed using a
brew install cmake
command.
You can verify your CMake installation with the command:
cmake
--version
As a Node native module developer, you may find it convenient to install CMake.js as a global command line tool:
npm
install
cmake-js
-g
You can verify your CMake.js installation with the command:
cmake-js
--version
package.json
Your
package.json
file needs to have a couple of entries for your native module to work with CMake.js.
Since your native module needs to be compiled using CMake.js on installation, the
scripts
property of your
package.json
file needs an
install
entry to make this happen:
"
scripts
"
:
{
"
install
"
:
"
cmake-js compile
"
}
JSON
Copy to clipboard
It is unlikely that the users of your native module will have CMake.js installed as a global command line tool. Therefore, your project needs to declare a development dependency on CMake.js. This can be accomplished by entering this command:
npm
install
cmake-js
--save-dev
An alternative is to manually add the development dependency to your
package.json
file:
"
devDependencies
"
:
{
"
cmake-js
"
:
"
^6.0.0
"
}
JSON
Copy to clipboard
An example of this approach is
available here
.
CMakeLists.txt
Native modules built on CMake.js have a
CMakeLists.txt
that describes how the module is to be built. The file serves the same purpose as the
binding.gyp
for projects that use
node-gyp
.
In addition to the entries required for any CMake build, additional entries are required when building native modules.
CMake.js
Here are the lines required for all native modules built using CMake.js:
project
(
node
-
api
-
cmake
-
build
-
example
)
include_directories
(
${CMAKE_JS_INC}
)
file
(
GLOB SOURCE_FILES
"
hello.cc
"
)
add_library
(
${PROJECT_NAME} SHARED ${SOURCE_FILES} ${CMAKE_JS_SRC}
)
set_target_properties
(
${PROJECT_NAME} PROPERTIES PREFIX
""
SUFFIX
"
.node
"
)
target_link_libraries
(
${PROJECT_NAME} ${CMAKE_JS_LIB}
)
C++
Copy to clipboard
NAPI_VERSION
When building a native module based on Node-API, it is important to declare the minimum Node-API version against which your module is designed to work. For CMake.js, this is accomplished by adding a line like this to the
CMakeLists.txt
file:
#
define
NAPI_VERSION
add_definitions
(
-
DNAPI_VERSION
=
3
)
C++
Copy to clipboard
In the absence of other requirements, Node-API version 3 is a good choice as this is the Node-API version active when Node-API left experimental status.
node-addon-api
Additional configuration values are required for Node-API modules based on
node-addon-api
.
node-addon-api
requires C++11. These configuration lines at the top of the
CMakeLists.txt
file specify this requirement:
cmake_minimum_required
(
VERSION
3.9
)
cmake_policy
(
SET CMP0042 NEW
)
set
(
CMAKE_CXX_STANDARD
11
)
C++
Copy to clipboard
Modules based on
node-addon-api
include additional header files that are not part of Node itself. These lines instruct CMake.js where to find these files:
# Include Node
-
API wrappers
execute_process
(
COMMAND node
-
p
"
require('node-addon-api').include
"
WORKING_DIRECTORY ${CMAKE_SOURCE_DIR}
OUTPUT_VARIABLE NODE_ADDON_API_DIR
)
string
(
REPLACE
"
\n
"
""
NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR}
)
string
(
REPLACE
"
\"
"
""
NODE_ADDON_API_DIR ${NODE_ADDON_API_DIR}
)
target_include_directories
(
${PROJECT_NAME} PRIVATE ${NODE_ADDON_API_DIR}
)
C++
Copy to clipboard
An example of this approach is
available here
.

---

# node-pre-gyp
> **Fonte original:** [https://nodejs.org/learn/node-api/build-tools/node-pre-gyp](https://nodejs.org/learn/node-api/build-tools/node-pre-gyp)

node-pre-gyp
One of the limitations of native addons is that they must be compiled for each target platform and architecture. Without pre-built binaries, every user who installs your package must have a working C/C++ toolchain on their machine.
node-pre-gyp
solves this by letting you build binaries ahead of time, upload them to a remote location, and have users download the right binary at install time - falling back to compiling from source only if a matching binary is not available.
Note that Node-API support was added to node-pre-gyp in version 0.8.0.
This page describes the changes required to a Node-API addon to support node-pre-gyp.
Amazon S3
By default, node-pre-gyp uploads binaries to
Amazon S3
.
The
node-pre-gyp-github
module adds support for publishing to GitHub Releases instead.
Amazon S3 Requirements
Before uploading you need:
An Amazon Web Services account.
An IAM user or role with permission to upload to S3.
An
S3 bucket
to host the binaries.
AWS Credentials
Never store credentials in your repository. node-pre-gyp supports two common approaches for providing credentials during development:
A
~/.node_pre_gyprc
file:
{
"
accessKeyId
"
:
"
xxx
"
,
"
secretAccessKey
"
:
"
xxx
"
}
JSON
Copy to clipboard
Environment variables:
export
node_pre_gyp_accessKeyId
=
xxx
export
node_pre_gyp_secretAccessKey
=
xxx
Shell
Copy to clipboard
For CI environments, prefer IAM roles or short-lived credentials rather than long-lived access keys. See the
node-pre-gyp credentials documentation
for additional options.
package.json
The
dependencies
and
devDependencies
properties
The package is now published under the
@mapbox
scope. Use
@aws-sdk/client-s3
as a dev dependency for the upload step.
"
dependencies
"
:
{
"
@mapbox/node-pre-gyp
"
:
"
^1.0.0
"
}
,
"
devDependencies
"
:
{
"
@aws-sdk/client-s3
"
:
"
^3.0.0
"
}
JSON
Copy to clipboard
The
scripts
property
The
install
script should invoke node-pre-gyp with
--fallback-to-build
so that users who don't have a pre-built binary available can still compile locally:
"
scripts
"
:
{
"
install
"
:
"
node-pre-gyp install --fallback-to-build
"
}
JSON
Copy to clipboard
The
binary
property
The
binary
property tells node-pre-gyp which Node-API versions your addon supports and where to find/upload binaries:
"
binary
"
:
{
"
module_name
"
:
"
your_module
"
,
"
module_path
"
:
"
./lib/binding/napi-v{napi_build_version}
"
,
"
remote_path
"
:
"
./{module_name}/v{version}/{configuration}/
"
,
"
package_name
"
:
"
{platform}-{arch}-napi-v{napi_build_version}.tar.gz
"
,
"
host
"
:
"
https://your_bucket.s3.us-west-1.amazonaws.com
"
,
"
napi_versions
"
:
[
3
]
}
JSON
Copy to clipboard
Set
module_name
to a valid C identifier. The
napi_versions
array lists which Node-API versions to build for;
3
is a reasonable minimum for most addons.
See the
node-pre-gyp docs
for a complete reference, including
Node-API considerations
.
binding.gyp
New target
Add a post-build target to copy the compiled binary to the path specified by
module_path
:
{
"
target_name
"
:
"
action_after_build
"
,
"
type
"
:
"
none
"
,
"
dependencies
"
:
[
"
<(module_name)
"
],
"
copies
"
:
[
{
"
files
"
:
[
"
<(PRODUCT_DIR)/<(module_name).node
"
],
"
destination
"
:
"
<(module_path)
"
}
]
}
JSON
Copy to clipboard
NAPI_VERSION
Include the Node-API version in the first target's
defines
so the header files configure themselves correctly:
"
defines
"
:
[
"
NAPI_VERSION=<(napi_build_version)
"
]
JSON
Copy to clipboard
JavaScript updates
JavaScript code that loads the native binary must dynamically resolve the path to the correct
.node
file:
const
binary
=
require
(
'
@mapbox/node-pre-gyp
'
)
;
const
path
=
require
(
'
path
'
)
;
const
bindingPath
=
binary
.
find
(
path
.
resolve
(
path
.
join
(
__dirname
,
'
./package.json
'
))
)
;
const
binding
=
require
(
bindingPath
)
;
JavaScript
Copy to clipboard
Build
Once everything is in place, build from source:
npm
install
--build-from-source
Package and publish
./node_modules/.bin/node-pre-gyp
package
./node_modules/.bin/node-pre-gyp
publish
Shell
Copy to clipboard
CI and automated builds
Use
GitHub Actions
to build, test, and publish binaries for multiple platforms and architectures. A typical workflow matrix covers
ubuntu-latest
,
macos-latest
, and
windows-latest
, plus any architecture variants you need (e.g.
x64
,
arm64
). See the node-pre-gyp repository for
example workflow configurations
.

---

# Overview
> **Fonte original:** [https://nodejs.org/learn/node-api/special-topics](https://nodejs.org/learn/node-api/special-topics)

Special Topics
This section covers advanced Node-API patterns that you will encounter once your native addon grows beyond a simple synchronous function call.
Topics covered
Object and function references
- using
ObjectReference
and
FunctionReference
to keep JavaScript objects alive across call boundaries so the garbage collector does not reclaim them prematurely
AsyncWorker
- running long-running C/C++ operations on a background thread using
node-addon-api
's
AsyncWorker
class, keeping Node's event loop unblocked
Thread-safe functions
- calling back into JavaScript from native threads that are not the main Node.js thread, using the thread-safe function API
Context awareness
- writing addons that load and unload correctly in the presence of
Worker Threads
, including instance data and cleanup hooks
When do these topics apply?
Topic
When you need it
Object/function references
Storing a JS callback or object in a C++ data member that outlives the current call
AsyncWorker
Offloading CPU-bound or blocking I/O work off the main thread
Thread-safe functions
Invoking JS callbacks from native threads you manage yourself
Context awareness
Your addon is used in Worker Thread environments or loaded/unloaded multiple times

---

# Context Awareness
> **Fonte original:** [https://nodejs.org/learn/node-api/special-topics/context-awareness](https://nodejs.org/learn/node-api/special-topics/context-awareness)

Context Awareness
Node.js has historically run as a single-threaded process. This all changed with the introduction of
Worker Threads
in Node 10. Worker Threads add a JavaScript-friendly concurrency abstraction that native add-on developers need to be aware of. What this means practically is that your native add-on may be loaded and unloaded more than once and its code may be executed concurrently in multiple threads. There are specific steps you must take to ensure your native add-on code runs correctly.
The Worker Thread model specifies that each Worker runs completely independently of each other and communicate to the parent Worker using a MessagePort object supplied by the parent. This makes the Worker Threads essentially isolated from one another. The same is true for your native add-on.
Each Worker Thread operates within its own environment which is also referred to as a context. The context is available to each Node-API function as an
napi_env
value.
Multiple loading and unloading
If your native add-on requires persistent memory, allocating this memory in static global space is a recipe for disaster. Instead, it is
essential
that this memory is allocated each time within the context in which the native add-on is initialized. This memory is typically allocated in your native add-on's
Init
method. But in some cases it can also be allocated as your native add-on is running.
In addition to the multiple loading described above, your native add-on is also subject to automatic unloading by the JavaScript runtime engine's garbage collector when your native add-on is no longer in use. To prevent memory leaks, any memory your native add-on has allocated
must
be freed when your native add-on is unloaded.
The next sections describe two different techniques you can use to allocate and free persistent memory associated with your native add-on. The techniques may be used individually or together in your native add-on.
Instance data
Node-API gives you the ability to associate a single piece of memory your native add-on allocates with the context under which it is running. This technique is called "instance data" and is useful when your native add-on allocates a single piece of data when its loaded.
The
napi_set_instance_data
allows your native add-on to associate a single piece of allocated memory with the context under which your native add-on is loaded. The
napi_get_instance_data
can then be called anywhere in you native add-on to retrieve the location of the memory that was allocated.
You specify a finalizer callback in your
napi_set_instance_data
call. The finalizer callback gets called when your native add-on is released from memory and is where you should release the memory associated with this context.
Resources
Environment Life Cycle APIs
Node.js documentation for
napi_set_instance_data
and
napi_get_instance_data
.
Example
In this example, a number of Worker Threads are created. Each Worker Thread creates an
AddonData
struct that is tied to the Worker Thread's context using a call to
napi_set_instance_data
. Over time, the value held in the struct is incremented and decremented using a computationally expensive operation.
In time, the Worker Threads complete their operations at which time the allocated struct is freed in the
DeleteAddonData
function.
binding.c
#
include
<
assert.h
>
#
include
<
math.h
>
#
include
<
stdlib.h
>
#
define
NAPI_EXPERIMENTAL
#
include
<
node_api.h
>
// Structure containing information needed for as long as the addon exists. It
// replaces the use of global static data with per-addon-instance data by
// associating an instance of this structure with each instance of this addon
// during addon initialization. The instance of this structure is then passed to
// each binding the addon provides. Thus, the data stored in an instance of this
// structure is available to each binding, just as global static data would be.
typedef
struct
{
double
value
;
}
AddonData
;
// This is the actual, useful work performed: increment or decrement the value
// stored per addon instance after passing it through a CPU-consuming but
// otherwise useless calculation.
static
int
ModifyAddonData
(
AddonData
*
data
,
double
offset
)
{
// Expensively increment or decrement the value.
data
->
value
=
tan
(
atan
(
exp
(
log
(
sqrt
(
data
->
value
*
data
->
value
)))))
+
offset
;
// Round the value to the nearest integer.
data
->
value
=
(
double
)(((
int
)
data
->
value
)
+
(
data
->
value
-
((
double
)(
int
)
data
->
value
)
>
0.5
?
1
:
0
))
;
// Return the value as an integer.
return
(
int
)(
data
->
value
)
;
}
// This is boilerplate. The instance of the `AddonData` structure created during
// addon initialization must be destroyed when the addon is unloaded. This
// function will be called when the addon's `exports` object is garbage collected.
static
void
DeleteAddonData
(
napi_env
env
,
void*
data
,
void*
hint
)
{
// Avoid unused parameter warnings.
(
void
)
env
;
(
void
)
hint
;
// Free the per-addon-instance data.
free
(
data
)
;
}
// This is also boilerplate. It creates and initializes an instance of the
// `AddonData` structure and ties its lifecycle to that of the addon instance's
// `exports` object. This means that the data will be available to this instance
// of the addon for as long as the JavaScript engine keeps it alive.
static
AddonData
*
CreateAddonData
(
napi_env
env
,
napi_value
exports
)
{
AddonData
*
result
=
malloc
(
sizeof
(
*
result
))
;
result
->
value
=
0.0
;
assert
(
napi_set_instance_data
(
env
,
result
,
DeleteAddonData
,
NULL
)
==
napi_ok
)
;
return
result
;
}
// This function is called from JavaScript. It uses an expensive operation to
// increment the value stored inside the `AddonData` structure by one.
static
napi_value
Increment
(
napi_env
env
,
napi_callback_info
info
)
{
// Retrieve the per-addon-instance data.
AddonData
*
addon_data
=
NULL;
assert
(
napi_get_instance_data
(
env
,
((
void**
)
&
addon_data
))
==
napi_ok
)
;
// Increment the per-addon-instance value and create a new JavaScript integer
// from it.
napi_value result
;
assert
(
napi_create_int32
(
env
,
ModifyAddonData
(
addon_data
,
1.0
),
&
result
)
==
napi_ok
)
;
// Return the JavaScript integer back to JavaScript.
return
result
;
}
// This function is called from JavaScript. It uses an expensive operation to
// decrement the value stored inside the `AddonData` structure by one.
static
napi_value
Decrement
(
napi_env
env
,
napi_callback_info
info
)
{
// Retrieve the per-addon-instance data.
AddonData
*
addon_data
=
NULL;
assert
(
napi_get_instance_data
(
env
,
((
void**
)
&
addon_data
))
==
napi_ok
)
;
// Decrement the per-addon-instance value and create a new JavaScript integer
// from it.
napi_value result
;
assert
(
napi_create_int32
(
env
,
ModifyAddonData
(
addon_data
,
-
1.0
),
&
result
)
==
napi_ok
)
;
// Return the JavaScript integer back to JavaScript.
return
result
;
}
// Initialize the addon in such a way that it may be initialized multiple times
// per process. The function body following this macro is provided the value
// `env` which has type `napi_env` and the value `exports` which has type
// `napi_value` and which refers to a JavaScript object that ultimately contains
// the functions this addon wishes to expose. At the end, it must return a
// `napi_value`. It may return `exports`, or it may create a new `napi_value`
// and return that instead.
NAPI_MODULE_INIT
(
/*env, exports*/
)
{
// Create a new instance of the per-instance-data that will be associated with
// the instance of the addon being initialized here and that will be destroyed
// along with the instance of the addon.
AddonData
*
addon_data
=
CreateAddonData
(
env
,
exports
)
;
// Declare the bindings this addon provides. The data created above is given
// as the last initializer parameter, and will be given to the binding when it
// is called.
napi_property_descriptor bindings
[]
=
{
{
"
increment
"
,
NULL
,
Increment
,
NULL
,
NULL
,
NULL
,
napi_enumerable
,
addon_data
},
{
"
decrement
"
,
NULL
,
Decrement
,
NULL
,
NULL
,
NULL
,
napi_enumerable
,
addon_data
}
}
;
// Expose the two bindings declared above to JavaScript.
assert
(
napi_define_properties
(
env
,
exports
,
sizeof
(
bindings
)
/
sizeof
(
bindings
[
0
]),
bindings
)
==
napi_ok
)
;
// Return the `exports` object provided. It now has two new properties, which
// are the functions we wish to expose to JavaScript.
return
exports
;
}
C
Copy to clipboard
index.js
// Example illustrating the case where a native addon is loaded multiple times.
// This entire file is executed twice, concurrently - once on the main thread,
// and once on a thread launched from the main thread.
// We load the worker threads module, which allows us to launch multiple Node.js
// environments, each in its own thread.
const
{
Worker
,
isMainThread
}
=
require
(
'
worker_threads
'
)
;
// We load the native addon.
const
addon
=
require
(
'
bindings
'
)(
'
multiple_load
'
)
;
// The iteration count can be tweaked to ensure that the output from the two
// threads is interleaved. Too few iterations and the output of one thread
// follows the output of the other, not really illustrating the concurrency.
const
iterations
=
1000
;
// This function is an idle loop that performs a random walk from 0 by calling
// into the native addon to either increment or decrement the initial value.
function
useAddon
(
addon
,
prefix
,
iterations
)
{
if
(
iterations
>=
0
)
{
if
(
Math
.
random
()
<
0.5
)
{
console
.
log
(
prefix
+
'
: new value (decremented):
'
+
addon
.
decrement
())
;
}
else
{
console
.
log
(
prefix
+
'
: new value (incremented):
'
+
addon
.
increment
())
;
}
setImmediate
(
()
=>
useAddon
(
addon
,
prefix
,
--
iterations
))
;
}
}
if
(
isMainThread
)
{
// On the main thread, we launch a worker and wait for it to come online. Then
// we start the loop.
new
Worker
(
__filename
)
.
on
(
'
online
'
,
()
=>
useAddon
(
addon
,
'
Main thread
'
,
iterations
)
)
;
}
else
{
// On the secondary thread we immediately start the loop.
useAddon
(
addon
,
'
Worker thread
'
,
iterations
)
;
}
JavaScript
Copy to clipboard
Cleanup hooks
Your native add-on can receive one or more notifications from the Node.js runtime engine when the context in which your native-add-on has been running is being destroyed. This gives your native add-on the opportunity to release any allocated memory before the context is destroyed by the Node.js runtime engine.
The advantage of this technique is that your native add-on can allocate multiple pieces of memory to be associated with the context under which your native add-on is running. This can be useful if you need to allocate multiple memory buffers from different pieces of code as your native add-on is running.
The drawback is that if you need to access these allocated buffer you are responsible for keeping track of the pointers yourself within the context your native add-on is running. Depending upon the architecture of your native add-on, this may or may not be an issue.
Resources
Cleanup on exit of the current Node.js instance
Node.js documentation for
napi_add_env_cleanup_hook
and
napi_remove_env_cleanup_hook
.
Example
Because keeping track of the allocated buffers is dependent upon the architecture of the native add-on, this is a trivial example showing how the buffers can be allocated and released.
binding.cc
#
include
<
stdlib.h
>
#
include
<
stdio.h
>
#
include
"
node_api.h
"
namespace
{
void
CleanupHook
(
void*
arg
)
{
printf
(
"
cleanup(%d)
\n
"
,
*static_cast<int*>
(
arg
))
;
free
(
arg
)
;
}
napi_value
Init
(
napi_env
env
,
napi_value
exports
)
{
for
(
int
i
=
1
;
i
<
5
;
i
++
)
{
int*
value
=
(
int*
)
malloc
(
sizeof
(
*
value
))
;
*
value
=
i
;
napi_add_env_cleanup_hook
(
env
,
CleanupHook
,
value
)
;
}
return
exports
;
}
}
// anonymous namespace
NAPI_MODULE
(
NODE_GYP_MODULE_NAME
,
Init
)
C++
Copy to clipboard
index.js
'
use strict
'
;
// We load the native addon.
const
addon
=
require
(
'
bindings
'
)(
'
multiple_load
'
)
;
const
assert
=
require
(
'
assert
'
)
;
const
child_process
=
require
(
'
child_process
'
)
;
assert
.
ok
(
addon
)
;
if
(
process
.
argv
[
2
]
===
'
child
'
)
{
const
childAddon
=
require
(
'
bindings
'
)(
'
multiple_load
'
)
;
assert
.
ok
(
childAddon
)
;
process
.
exit
(
0
)
;
}
const
child
=
child_process
.
fork
(
__filename
,
[
'
child
'
]
,
{
stdio
:
'
inherit
'
,
}
)
;
child
.
on
(
'
exit
'
,
code
=>
{
assert
.
strictEqual
(
code
,
0
)
;
}
)
;
JavaScript
Copy to clipboard

---

# Object and Function References
> **Fonte original:** [https://nodejs.org/learn/node-api/special-topics/object-function-refs](https://nodejs.org/learn/node-api/special-topics/object-function-refs)

Object and Function References
JavaScript implements a dynamic memory model. When objects are no longer reachable, they become eligible for reclamation by the garbage collector running in the background.
There are situations when you need to ensure that objects created by your Node-API code remain allocated. In this case you need to explicitly create a reference to them. This is the purpose of the
ObjectReference
and
FunctionReference
classes.
Persistent Reference
Object and function references can be instantiated as either
Weak
or
Persistent
.
A
Persistent
reference initializes the internal reference count to one which prevents reclamation of the object's memory by the garbage collector. The referenced object will remain in memory for the life of the
Persistent
reference.
Using a
Persistent
reference makes sense in the case where the duration of the reference is known ahead of time. The internal reference count is decremented when the
Persistent
reference is deleted. This will make the referenced object eligible for deletion if the internal reference count goes to zero.
The most common case for using a
Persistent
reference is when you create a JavaScript class in your Node-API code and you need to insure its constructor remains allocated by the JavaScript runtime engine.
Weak Reference
For more complex implementations where multiple AsyncWorkers rely on the referenced object, it may make better sense to use a
Weak
reference which initializes the internal reference count to zero. The reference count can then be maintained using the
Reference
Ref
and
Unref
methods.
The most common use case for a
Weak
reference is when your Node-API code needs to monitor when a JavaScript object you've created in your Node-API code is released by the garbage collector.
ObjectReference
The
ObjectReference
class inherits from the
Reference
class. The value it adds is a collection of
Get
and
Set
methods that manipulate the referenced object's properties.
FunctionReference
Like the
ObjectReference
, the
FunctionReference
class inherits from the
Reference
class. While the
ObjectReference
class adds the
Get
and
Set
methods, the
FunctionReference
class adds a set of
Call
methods that implement calls to the function.
Example
This example code shows how to use the
FunctionReference
class.
src/native-addon.h
native-addon.h
declares the
NativeAddon
C++ class, which has two data members populated in the constructor:
Napi::FunctionReference jsFnRef
Napi::Function jsFn
src/native-addon.cc
native-addon.cc
contains the
NativeAddon
implementation. The constructor, which is called from JavaScript, takes two function arguments. The first argument is stored as a
Napi::FunctionReference
and the second is stored as a
Napi::Function
.
There is a deliberate error in this code.
The second function is stored in the
Napi::Function jsFn
data member.
This is an error
because the lifetime of the second argument is limited to the lifetime of the constructor. The value of the
jsFn
data member will be invalid after the constructor returns. The first argument is stored in the
Napi::FunctionReference jsFnRef
. Because of the use of the
Napi::FunctionReference
, the value of
jsFnRef
will remain valid after the constructor returns.
The
NativeAddon
class implements two methods which can be called from JavaScript:
TryCallByStoredReference
and
TryCallByStoredFunction
. Notice that the
Call
method is used the same way for both the
jsFnRef
and
jsFn
data members.
src/binding.cc
binding.cc
is a standard binding file that registers the
NativeAddon
class with Node-API.
index.js
index.js
shows the use of the
NativeAddon
class from JavaScript. Note that the call to the native
tryCallByStoredFunction
method fails because the data member on which it relies is not valid.

---

# AsyncWorker
> **Fonte original:** [https://nodejs.org/learn/node-api/special-topics/asyncworker](https://nodejs.org/learn/node-api/special-topics/asyncworker)

AsyncWorker
You may have a project in which you have a piece of long-running C/C++ code that you want to run in the background instead of on Node's main event loop. Node-API's
AsyncWorker
class is designed specifically for this case.
As a programmer, your job is essentially to subclass
AsyncWorker
and to implement the
Execute
method. You'll also probably implement a wrapper function to make using your
AsyncWorker
easier.
In this example, we're going to create a
SimpleAsyncWorker
class that subclasses
AsyncWorker
. The worker will take an integer value indicating the length of time it is to "work." When the worker completes, it will return a text string indicating how long it worked. In one case, the worker will indicate an error instead.
SimpleAsyncWorker
SimpleAsyncWorker.h
is the C++ header for
SimpleAsyncWorker
. It declares a constructor that takes as an argument the length of time (in seconds) the
SimpleAsyncWorker
is to run. A private data member is declared to hold this value.
The header also declares two methods,
Execute
and
OnOK
, which override methods declared by
AsyncWorker
, and are described in more detail below.
SimpleAsyncWorker.cc
is the C++ implementation. The constructor takes two arguments.
callback
is the JavaScript function that gets called when the
Execute
method returns.
callback
gets called whether there was an error or not. The second constructor argument,
runTime
, is an integer value indicating how long (in seconds) the worker is to run.
Node will run the code of the
Execute
method in a thread separate from the thread running Node's main event loop. The
Execute
method
has no access
to any part of the Node-API environment. For this reason, the
runTime
input value was stored by the constructor as a private data member.
In this implementation, the
Execute
method simply waits the number of seconds specified earlier by
runTime
. This is where the long running code goes in a real implementation. To demonstrate how error handling works, this
Execute
method declares an error when requested to run 4 seconds.
The
OnOK
method is called after the
Execute
method returns unless the
Execute
method calls
SetError
or in the case where C++ exceptions are enabled and an exception is thrown. In the case of an error, the
OnError
method is called instead of
OnOK
. The default
OnError
implementation simply calls the
AsyncWorker
callback function with the error as the only argument.
In this implementation, the
OnOK
method formulates a string value and passes it as the
second
argument to the
callback
function specified in the constructor. The first argument passed to the
callback
function is a JavaScript
null
value. The reason for this is that a single callback function is called whether an error occurs or not. The default
OnError
method, which
SimpleAsyncWorker
does not override, passes the error as the first argument to the callback. This will become more clear in the next section.
Note that unlike
Execute
, the
OnOK
and
OnError
methods
do
have access to the Node-API environment.
RunSimpleAsyncWorker
We need a C++ function that instantiates
SimpleAsyncWorker
objects and requests them to be queued. This function needs to be registered with Node-API so that it is accessible from the JavaScript code.
RunSimpleAsyncWorker.cc
provides this wrapper.
The
runSimpleAsyncWorker
function, which is accessible from JavaScript, takes two arguments which are passed through the
info
argument. The first argument, which is passed as
info[0]
, is the
runTime
and the second argument is the JavaScript callback function which gets called when the
Execute
method returns.
The code then instantiates a
SimpleAsyncWorker
object and requests that it be queued for possible execution on the next tick. Unless the
SimpleAsyncWorker
object is queued, its
Execute
method will never be called.
Once the
SimpleAsyncWorker
object is queued,
runSimpleAsyncWorker
formulates a text string and returns it to the caller.
Running in JavaScript
Test.js
is a simple JavaScript program that shows how to run
SimpleAsyncWorker
instances. It calls
runSimpleAsyncWorker
three times, each with a different
runTime
parameter. Each call specifies
AsyncWorkerCompletion
as the callback function.
The
AsyncWorkerCompletion
function is coded to handle the cases where the
Execute
method reports an error and when it does not. It simply logs to the console when it's called.
Here's what the output looks like when the JavaScript successfully runs:
runSimpleAsyncWorker
returned
'SimpleAsyncWorker
for
2
seconds
queued.'.
runSimpleAsyncWorker
returned
'SimpleAsyncWorker
for
4
seconds
queued.'.
runSimpleAsyncWorker
returned
'SimpleAsyncWorker
for
8
seconds
queued.'.
SimpleAsyncWorker
returned
'SimpleAsyncWorker
returning
after
'working'
2
seconds.'.
SimpleAsyncWorker
returned
an
error:
[Error:
Oops!
Failed
after
'working'
4
seconds.]
SimpleAsyncWorker
returned
'SimpleAsyncWorker
returning
after
'working'
8
seconds.'.
As expected, each call to
runSimpleAsyncWorker
immediately returns. The
AsyncWorkerCompletion
function gets called when each
SimpleAsyncWorker
completes.
Caveats
It is
absolutely essential
that the
Execute
method makes no Node-API calls. This means that the
Execute
method has
no access
to any input values passed by the JavaScript code.
Typically, the
AsyncWorker
class constructor will collect the information it needs from the JavaScript objects and store
copies
of that information as data members. The results of the
Execute
method can then be turned back into JavaScript objects in the
OnOK
method.
The Node process is aware of all running
Execute
methods and will not terminate until all running
Execute
methods have returned.
An AsyncWorker can be safely terminated with a call to
AsyncWorker::Cancel
from the main thread.

---

# Thread-Safe Functions
> **Fonte original:** [https://nodejs.org/learn/node-api/special-topics/thread-safe-functions](https://nodejs.org/learn/node-api/special-topics/thread-safe-functions)

Thread-Safe Functions
JavaScript functions can normally only be called from a native addon's main thread. If an addon creates additional threads, then node-addon-api functions that require a
Napi::Env
,
Napi::Value
, or
Napi::Reference
must not be called from those threads.
When an addon has additional threads and JavaScript functions need to be invoked based on the processing completed by those threads, those threads must communicate with the addon's main thread so that the main thread can invoke the JavaScript function on their behalf. The thread-safe function APIs provide an easy way to do this.
A thread-safe function is created on the main thread via
ThreadSafeFunction::New
:
New
(
napi_env env
,
const
Function
&
callback
,
const
Object
&
resource
,
ResourceString resourceName
,
size_t
maxQueueSize
,
size_t
initialThreadCount
,
ContextType
*
context
,
Finalizer finalizeCallback
,
FinalizerDataType
*
data
)
;
C++
Copy to clipboard
A thread-safe function encapsulates:
Message queue: Requests to run the JavaScript function are placed in a queue, processed asynchronously by the main thread. The amount of entries allowed in the queue before returning a "queue full" error on
NonBlockingCall()
is controlled via the
maxQueueSize
parameter (specify
0
for unlimited queue)
JavaScript function: Callback to run (
callback
parameter). This function is either (a) automatically ran with no arguments when called via the no-argument
[Non]BlockingCall()
overloads, or (b) passed as an argument to the callback function provided in the
[Non]BlockingCall(DataType* data, Callback callback)
overloads.
Context: Optional, arbitrary data (
context
parameter) to associate with the thread-safe function.
Finalizer: Optional callback (
finalizeCallback
parameter) to run at destruction of the thread-safe function, when all threads have finished using it.
Finalizer data: Optional data (
data
parameter) to provide to the finalizer callback.
Calling the Thread-Safe Function
Threads may call into JavaScript via
[Non]BlockingCall
. This will add an entry to the underlying thread-safe function's queue, to be handled asynchronously on the main thread during its processing of the event loop.
Thread Management
Multiple threads can utilize the thread-safe function simultaneously. The thread-safe function manages its lifecycle through counting the number of threads actively utilizing it. This number starts at the initial thread count parameter in
New()
, increased via
Acquire()
, and decreased via
Release()
. Once the number of active threads reaches zero, the thread-safe function is destroyed, running the finalizer callback on the main thread if provided.
Here are two general approaches to using thread-safe functions within applications:
Known Number of Threads
If the amount of threads is known at thread-safe function creation, set the
initial_thread_count
parameter to this number in the call to
New()
. Each thread will have its own access to the thread-safe function until it calls
Release()
. Once all threads have made a call to
Release()
, the thread-safe function is destroyed.
Creating Threads
Another common use-case is to dynamically create and destroy threads based on various logic at run-time. One way to handle this scenario is to expose several native JavaScript functions that interact with the thread-safe function APIs by:
Creating a thread-safe function via
New()
with initial thread count of
1
.
Calling
Acquire()
and creating a new native thread. The new thread can now use
[Non]BlockingCall()
.
Initiating cleanup/destruction, for example by ...
calling
Abort()
and have each thread either call
[Non]BlockingCall()
or
Release()
using custom logic with other thread-safe APIs to ensure that all threads call
Release()
in order to decrease the active thread count to
0
.
Example
This example exposes a single function that creates a thread-safe function and a native thread. The function returns a promise that resolves after the native thread calls into JavaScript ten times. The example consists of three source files:
binding.gyp
configures the build,
addon.cc
implements the native module, and
addon.js
exercises it from JavaScript.
Running
addon.js
produces output similar to:
2019-11-25T22:14:56.175Z
0
2019-11-25T22:14:56.380Z
1
2019-11-25T22:14:56.582Z
2
2019-11-25T22:14:56.787Z
3
2019-11-25T22:14:56.987Z
4
2019-11-25T22:14:57.187Z
5
2019-11-25T22:14:57.388Z
6
2019-11-25T22:14:57.591Z
7
2019-11-25T22:14:57.796Z
8
2019-11-25T22:14:58.001Z
9
true
Frequently Asked Questions
Q: My application isn't exiting correctly. It just hangs.
By default, Node will wait until a thread-safe function is finalized before cleaning up and exiting. See
Thread Management
. This behavior can be changed via a call to
Unref()
, permitting Node to clean up without waiting for the thread count to reach zero. A call to
Ref()
will return the threadsafe function to the previous exit behavior, requiring it to be
Release()
ed and/or
Abort()
ed by all threads utilizing it.
Q: If a thread receives
napi_closing
from a call to
[Non]BlockingCall()
, does it still need to call
Release()
?
No. A return value of
napi_closing
should signify to the thread that the thread-safe function can no longer be utilized. This
includes
the call to
Release()
.

---

# Axios to WHATWG Fetch
> **Fonte original:** [https://nodejs.org/learn/userland-migrations/axios-to-whatwg-fetch](https://nodejs.org/learn/userland-migrations/axios-to-whatwg-fetch)

Axios to WHATWG Fetch
Migrates code from the
Axios
HTTP client to the
WHATWG Fetch
API that is natively available in Node.js as the global
fetch
, reducing dependencies and improving performance. It rewrites every Axios request helper —
axios.request()
,
axios.get()
,
axios.delete()
,
axios.head()
,
axios.options()
,
axios.post()
,
axios.put()
,
axios.patch()
,
axios.postForm()
,
axios.putForm()
, and
axios.patchForm()
— and recognizes default ESM imports, aliased imports, CommonJS
require()
calls, and dynamic
import()
. Once all call sites are converted, it also removes the
axios
and
@types/axios
entries from
package.json
.
Usage
Run this codemod with:
npx
codemod
@nodejs/axios-to-whatwg-fetch
Examples
GET request
A plain
axios.get()
becomes a
fetch()
call with a shim that keeps the
response.data
property working.
-
import axios from "axios";
const base = "https://dummyjson.com/todos";
-
const all = await axios.get(base);
+
const all = await fetch(base)
+
.then(async (res) => Object.assign(res, { data: await res.json() }))
+
.catch(() => null);
console.log("\nGET /todos ->", all.status);
console.log(`Preview: ${all.data.todos.length} todos`);
Diff
Copy to clipboard
POST request with a JSON body
The
data
argument of
axios.post()
is serialized with
JSON.stringify()
and passed as the
body
option.
-
import axios from 'axios';
const base = 'https://dummyjson.com/todos/add';
-
const todoCreated = await axios.post(base, {
-
todo: 'Use DummyJSON in the project',
-
completed: false,
-
userId: 5,
-
});
+
const todoCreated = await fetch(base, {
+
method: "POST",
+
body: JSON.stringify({
+
todo: 'Use DummyJSON in the project',
+
completed: false,
+
userId: 5,
+
})
+
})
+
.then(async (resp) => Object.assign(resp, { data: await resp.json() }))
+
.catch(() => null);
console.log('\nPOST /todos ->', todoCreated);
Diff
Copy to clipboard
Form submission
axios.postForm()
(and the
putForm
/
patchForm
variants) send the payload as
URLSearchParams
.
-
import axios from 'axios';
const base = 'https://dummyjson.com/forms';
-
const created = await axios.postForm(`${base}/submit`, {
-
title: 'Form Demo',
-
completed: false,
-
});
+
const created = await fetch(`${base}/submit`, {
+
method: "POST",
+
body: new URLSearchParams({
+
title: 'Form Demo',
+
completed: false,
+
})
+
})
+
.then(async (resp) => Object.assign(resp, { data: await resp.json() }))
+
.catch(() => null);
console.log(created);
Diff
Copy to clipboard
axios.request()
with a config object
The
url
,
method
, and
data
properties of the config object are mapped onto the
fetch()
call.
-
import axios from 'axios';
-
const base = 'https://dummyjson.com/todos/1';
-
const customRequest = await axios.request({
-
url: base,
-
method: 'PATCH',
-
data: {
-
todo: 'Updated todo',
-
completed: true,
-
},
-
});
+
const customRequest = await fetch(base, {
+
method: "PATCH",
+
body: JSON.stringify({
+
todo: 'Updated todo',
+
completed: true,
+
})
+
})
+
.then(async (resp) => Object.assign(resp, { data: await resp.json() }))
+
.catch(() => null);
console.log('\nREQUEST /todos/1 ->', customRequest);
Diff
Copy to clipboard
CommonJS
require()
CommonJS modules are handled the same way, and the now-unused
require('axios')
binding is removed.
-
const axios = require('axios');
function fetchAllTodos() {
-
return axios.get('https://dummyjson.com/todos');
+
return fetch('https://dummyjson.com/todos')
+
.then(async (res) => Object.assign(res, { data: await res.json() }))
+
.catch(() => null);
}
module.exports = { fetchAllTodos };
Diff
Copy to clipboard
Notes
A
fetch
response exposes its payload through
res.json()
rather than a
data
property, so each converted call is followed by
.then(async (res) => Object.assign(res, { data: await res.json() }))
to keep existing
response.data
accesses working.
Converted calls end with
.catch(() => null)
, so a failed request resolves to
null
instead of rejecting. Also note that unlike Axios,
fetch
does not reject on HTTP error statuses (4xx/5xx), so error-handling code built around Axios rejections should be reviewed manually.
Safety first: if any Axios call in a file uses an unsupported configuration option, the entire file is left untouched and a warning with the source location is printed, preserving the original behavior.
After the transformation, the codemod detects your package manager and removes the
axios
and
@types/axios
dependencies from
package.json
.
Limitations
The codemod skips files whose Axios calls use any of the following configuration options, because they have no direct
fetch
equivalent:
beforeRedirect
cancelToken
decompress
httpAgent
httpsAgent
maxBodyLength
maxContentLength
maxRedirects
paramsSerializer
signal
socketPath
timeout
transformRequest
transformResponse
validateStatus
withCredentials
It also does not cover Axios features outside of the direct request helpers, such as interceptors, cancel tokens, or instance configuration created with
axios.create()
.

---

# Chalk to util.styleText()
> **Fonte original:** [https://nodejs.org/learn/userland-migrations/chalk-to-util-styletext](https://nodejs.org/learn/userland-migrations/chalk-to-util-styletext)

Chalk to
util.styleText()
Migrates usage of the
chalk
npm package to the Node.js built-in
util.styleText()
API. Replaces the
chalk
import with
{ styleText }
from
node:util
and rewrites all chalk method calls accordingly. Chained chalk styles are converted to an array of style strings.
Usage
Run this codemod with:
npx
codemod
@nodejs/chalk-to-util-styletext
Examples
Example 1
Basic color methods (ESM default import)
-
import chalk from "chalk";
+
import { styleText } from "node:util";
-
console.log(chalk.red("Error message"));
-
console.log(chalk.green("Success message"));
-
console.log(chalk.blue("Info message"));
+
console.log(styleText("red", "Error message"));
+
console.log(styleText("green", "Success message"));
+
console.log(styleText("blue", "Info message"));
Diff
Copy to clipboard
Example 2
Chained styles
-
import chalk from "chalk";
+
import { styleText } from "node:util";
-
console.log(chalk.red.bold("Error: Operation failed"));
-
console.log(chalk.green.underline("Success: All tests passed"));
-
console.log(chalk.yellow.bgBlack("Warning: Deprecated API usage"));
+
console.log(styleText(["red", "bold"], "Error: Operation failed"));
+
console.log(styleText(["green", "underline"], "Success: All tests passed"));
+
console.log(styleText(["yellow", "bgBlack"], "Warning: Deprecated API usage"));
Diff
Copy to clipboard
Example 3
CommonJS
require
-
const chalk = require("chalk");
+
const { styleText } = require("node:util");
-
const error = chalk.red("Error");
-
const warning = chalk.yellow("Warning");
-
const info = chalk.blue("Info");
+
const error = styleText("red", "Error");
+
const warning = styleText("yellow", "Warning");
+
const info = styleText("blue", "Info");
console.log(error, warning, info);
Diff
Copy to clipboard
Notes
Limitations
Chalk methods that have no direct
util.styleText
equivalent — including
hex()
,
rgb()
,
ansi256()
,
bgAnsi256()
,
visible()
, and
new chalk.Chalk()
— are skipped. A warning is printed for each unsupported call, and those call sites are left unchanged for manual review.

---

# Correct TypeScript Specifiers
> **Fonte original:** [https://nodejs.org/learn/userland-migrations/correct-ts-specifiers](https://nodejs.org/learn/userland-migrations/correct-ts-specifiers)

Correct TypeScript Specifiers
Transforms import specifiers from the old
tsc
(TypeScript's compiler) requirement of using
.js
file extensions in source-code to import files that are actually TypeScript; the corrected specifiers enable source-code to be runnable by standards-compliant software like Node.js. This is a one-and-done process, and the updated source-code should be committed to your version control (eg git); thereafter, source-code import statements should be authored compliant with the ECMAScript (JavaScript) standard.
Supported cases:
no file extension →
.cts
,
.mts
,
.js
,
.ts
,
.d.cts
,
.d.mts
, or
.d.ts
.cjs
→
.cts
,
.mjs
→
.mts
,
.js
→
.ts
.js
→
.d.cts
,
.d.mts
, or
.d.ts
Package.json subpath imports
tsconfig paths
(via
@nodejs-loaders/alias
)
In order to subsequently run code via node, you will need to add this (or another) loader to your own project. Or, switch to
subimports
.
Commonjs-like directory specifiers
Usage
Caution
This will change your source-code. Commit any unsaved changes before running this package.
Important
--experimental-import-meta-resolve
MUST be enabled; the feature is not really experimental—it's nonstandard because it's not relevant for browsers.
Run this codemod with:
NODE_OPTIONS
=
"
--experimental-import-meta-resolve
"
\
npx
codemod
@nodejs/correct-ts-specifiers
Shell
Copy to clipboard
Monorepos
For best results, run this
within
each workspace of the monorepo.
project-root/
├ workspaces/
├ foo/ ←--------- RUN HERE
├ …
├ package.json
└ tsconfig.json
└ bar/ ←--------- RUN HERE
├ …
├ package.json
└ tsconfig.json
└ utils/ ←--------- RUN HERE
├ qux.js
└ zed.js
text
Copy to clipboard
Examples
import { URL } from 'node:url';
import { bar } from '@dep/bar';
import { foo } from 'foo';
-
import { Bird } from './Bird';
+
import { Bird } from './Bird/index.ts';
import { Cat } from './Cat.ts';
-
import { Dog } from '…/Dog/index.mjs';
+
import { Dog } from '…/Dog/index.mts';
import { baseUrl } from '#config.js';
-
import { qux } from './qux.js';
+
import { qux } from './qux.js/index.ts';
-
export { Zed } from './zed';
+
export type { Zed } from './zed.d.ts';
-
const nil = await import('./nil.js');
+
const nil = await import('./nil.ts');
Diff
Copy to clipboard
Tip
Those using
tsc
to compile will need to enable
rewriteRelativeImportExtensions
; using
tsc
for only type-checking (ex via a lint/test step like
npm run test:types
) needs
allowImportingTsExtensions
(and some additional compile options—see the cited documentation);
Notes
This package does not just blindly find & replace file extensions within specifiers: It confirms that the replacement specifier actually exists; in ambiguous cases (such as two files with the same basename in the same location but different relevant file extensions like
/tmp/foo.js
and
/tmp/foo.ts
), it logs an error, skips that specifier, and continues processing.
Caution
This package does not confirm that imported modules contain the desired export(s). This
shouldn't
actually ever result in a problem because ambiguous cases are skipped (so if there is a problem, it existed before the migration started). Merely running your source-code after the migration completes will confirm all is well (if there are problems, node will error, citing the problems).
Tip
Node.js requires the
type
keyword be present on type imports. For own code, this package usually handles that. However, in some cases and for node modules, it does not. Robust tooling already exists that will automatically fix this, such as
use-import-type
via biome
typescript/no-import-type-side-effects
via oxlint
consistent-type-imports
via typescript-lint
If your source code needs that, first run this codemod and then one of those fixers.
Limitations
When both a
.js
file and a corresponding
.ts
file exist at the same path, the codemod cannot determine which one the specifier refers to. In that case it logs an error, leaves the specifier unchanged, and continues processing the rest of the file.

---

# Kleur to util.styleText
> **Fonte original:** [https://nodejs.org/learn/userland-migrations/kleur-to-util-styletext](https://nodejs.org/learn/userland-migrations/kleur-to-util-styletext)

Kleur to util.styleText
This recipe migrates from the external
kleur
package to Node.js built-in
util.styleText
API. It transforms
kleur
style calls and
kleur/colors
named style functions to the native Node.js styling functionality.
Examples
DIFF
DIFF (2)
DIFF (3)
-
import kleur from 'kleur';
+
import { styleText } from 'node:util';
-
console.log(kleur.red('Error'));
+
console.log(styleText('red', 'Error'));
-
console.log(kleur.bold().red('Failure'));
+
console.log(styleText(['bold', 'red'], 'Failure'));
Diff
Copy to clipboard
Compatibility
Removes the
kleur
dependency from package.json automatically
Supports default, namespace, and CommonJS
kleur
imports
Supports named imports and destructured requires from
kleur/colors
Leaves unsupported APIs such as
kleur.enabled
and
$
from
kleur/colors
unchanged
Limitations
Manual migration is required for
kleur.enabled
,
$
from
kleur/colors
, and other APIs that are not direct style functions

---

# Mocha to Node.js Test Runner
> **Fonte original:** [https://nodejs.org/learn/userland-migrations/mocha-to-node-test-runner](https://nodejs.org/learn/userland-migrations/mocha-to-node-test-runner)

Mocha to Node.js Test Runner
Migrates
Mocha
8.x test suites to the built-in
Node.js test runner
(
node:test
, available in Node.js 22.x and 24.x). It adds the required
node:test
imports for the globals a file uses (
describe
,
it
,
before
,
after
,
beforeEach
,
afterEach
), converts
done
callbacks to the
(t, done)
signature, rewrites
this.skip()
to
t.skip()
and
this.timeout(N)
to
{ timeout: N }
options, and preserves the original function style (it never converts between
function()
and arrow functions). Both CommonJS and ESM files are supported, and the
mocha
and
@types/mocha
dependencies are removed from
package.json
afterwards.
Usage
Run this codemod with:
npx
codemod
@nodejs/mocha-to-node-test-runner
Examples
Adding
node:test
imports (CommonJS)
Global
describe
/
it
usage keeps working once the matching
require('node:test')
is inserted; modifiers like
describe.skip
are already compatible.
const assert = require('assert');
+
const { describe, it } = require('node:test');
describe('Array', function() {
describe.skip('#indexOf()', function() {
it('should return -1 when the value is not present', function() {
const arr = [1, 2, 3];
assert.strictEqual(arr.indexOf(4), -1);
});
});
});
Diff
Copy to clipboard
Adding
node:test
imports (ESM)
In ESM files an
import
statement is inserted instead.
import assert from 'assert';
+
import { describe, it } from 'node:test';
describe('Array', function() {
describe.skip('#indexOf()', function() {
it('should return -1 when the value is not present', function() {
Diff
Copy to clipboard
Hooks
Only the hooks actually used in the file are added to the import list.
const assert = require('assert');
const fs = require('fs');
+
const { describe, before, after, it } = require('node:test');
describe('File System', () => {
before(function() {
fs.writeFileSync('test.txt', 'Hello, World!');
});
after(() => {
fs.unlinkSync('test.txt');
});
Diff
Copy to clipboard
done
callbacks
Mocha passes
done
as the first callback argument;
node:test
passes the test context first, so
(done)
becomes
(t, done)
.
const assert = require('assert');
+
const { describe, it } = require('node:test');
describe('Callback Test', function() {
-
it('should call done when complete', function(done) {
+
it('should call done when complete', function(t, done) {
setTimeout(() => {
assert.strictEqual(1 + 1, 2);
done();
}, 100);
});
});
Diff
Copy to clipboard
Skipping with
this.skip()
this.skip()
becomes
t.skip()
, with the test context parameter
t
added to the callback signature as needed.
const assert = require('assert');
+
const { describe, it } = require('node:test');
describe('Skipped Test', () => {
it.skip('should not run this test', () => {
assert.strictEqual(1 + 1, 3);
});
-
it('should also be skipped', () => {
-
this.skip();
+
it('should also be skipped', (t) => {
+
t.skip();
assert.strictEqual(1 + 1, 3);
});
-
it('should also be skipped 2', (done) => {
-
this.skip();
+
it('should also be skipped 2', (t, done) => {
+
t.skip();
assert.strictEqual(1 + 1, 3);
});
});
Diff
Copy to clipboard
Timeouts
this.timeout(N)
calls on suites and tests move into the
{ timeout: N }
options argument.
const assert = require('assert');
+
const { describe, it } = require('node:test');
-
describe('Timeout Test', function() {
-
this.timeout(500);
+
describe('Timeout Test', { timeout: 500 }, function() {
-
it('should complete within 100ms', (done) => {
-
this.timeout(100);
+
it('should complete within 100ms', { timeout: 100 }, (t, done) => {
setTimeout(done, 500); // This will fail
});
-
it('should complete within 200ms', function(done) {
-
this.timeout(200);
+
it('should complete within 200ms', { timeout: 200 }, function(t, done) {
setTimeout(done, 100); // This will pass
});
});
Diff
Copy to clipboard
Notes
After the transformation, the codemod detects your package manager and removes the
mocha
and
@types/mocha
dependencies from
package.json
.
Limitations
node:test
does not support Mocha's
retry
option, so tests relying on it need to be handled separately.

---
