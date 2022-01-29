const projects = `
<div class="padded-content">
                <h1>Projects</h1>
                <h2>Code generator</h2>
                <p>
                    This is a tool that allows you to generate a bunch of code for building a restful web app.
                    The code is structured into layers according to its function. There are Rest controllers,
                    service classes and persistence layer interfaces. These classes are fairly easy to create, 
                    and they are the most mundane things to type out. Using this tool could save some time
                    coding up boilerplate code.
                </p>
                <p>
                    It started out as a Python command line app that runs Javac and Java to generate some sql files
                    and spring boot beans. Now it's a web app, with the purpose of generating ready-to-run apps in a 
                    variety of frameworks. Currently it generates Spring boot apps, Axios and Flutter Http calls
                    and some ElasticSearch and Kafka infrastructure for Java.
                </p>
                <p>
                    Currently the app is running on free app services plans from Azure. This means that it will take a
                    moment to start up.
                </p>
                <p>
                    <a href="https://github.com/Moss1019/sql_tool">source code</a>
                </p>
                <p>
                    <a href="https://mossonthetree-codegenweb.azurewebsites.net/">run the tool</a>
                </p>
                <h2>Net brains</h2>
                <p>
                    Here are some neural network implementations. Finding good material for learning the basics was a
                    difficult task. I spent a fairly long time looking for information before I could create this in code.
                    The problems I was facing had to do with video tutorials skipping over some of the details and literature
                    being at a high level. I ended up with following a tutorial from 
                    <a href="https://www.youtube.com/c/Brotcrunsher">Brotcrunsher</a> on how to implement a neural network on paper
                    with some matrix algebra. After that it became really easy and puts me in a position to explore more
                    complicated neural networks
                </p>
                <p>
                    <a href="https://github.com/Moss1019/net_brains">source code</a>
                </p>
                <p>
                    <a href="https://www.youtube.com/playlist?list=PL6ePeWFUyi5jQc4dSMcec0sBoIgdq6hzA">YouTube tutorial</a>
                </p>
                <h2>GID</h2>
                <p>
                    This is the project where I want to test any tools I create, such as the Code generator. This project
                    is a Todo list with some additional features. Teams will be able to share todo lists among the members
                    and collaboratively finish milestones and eventually the items. 
                </p>
                <p>
                    <a href="https://github.com/Moss1019/GID2_server">server code</a> <br />
                    <a href="https://github.com/Moss1019/GID2_web">web client code</a> <br />
                    <a href="https://github.com/Moss1019/GID2_mobile">mobile app code</a>
                </p>
                <h2>Trading bot</h2>
                <p>
                    This repo is private. This is a Python project with the goal of calculating market indicators from
                    pricing data and making predictions on when to make a trade. Currently it calculates several indicators
                    such as Moving averages, Bollinger bands and an Ichimoku cloud. The next step is to find some way to
                    use these indicators to make profitable trades.
                </p>
                <h2>Active Volcano</h2>
                <p>
                    This is my game engine idea and a dream project I hope to get to sometime. I had made some progress
                    in the past with implementing a rendering engine with direct x 11, I lost that code while 
                    reinstalling windows
                </p>
            </div>
`

function loadProjects() {
    const contentBlock = document.getElementById('content');
    reset();
    contentBlock.innerHTML = projects;
}
