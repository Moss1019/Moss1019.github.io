const about = `
<div class="padded-content">
                <h1>About</h1>
                <h2>Me</h2>
                <h3>What I do</h3>
                <p>
                    The main activities that make out my days are coding, reading and learning. Most days are good,
                    and I can spend a lot of time focusing on any of these, feeling good about my progress. Some days 
                    might be less than ideal, lack of energy or not having something to focus on drains me. During this time
                    I would just forget my worries with some video games or good music.
                </p>
                <h3>What I know</h3>
                <p>
                    The topic I know the most about would be computer programming. This large field of study lets me explore
                    concepts such as web site creation, artificial intelligence, physics simulations, signal processing and
                    sound synthesis. The list always has room for more things.
                </p>
                <p>
                    #React #C++ #Java #C# #FLStudio #Kotlin #Swift #CodeGeneration #Python #MusicTheory #DSP #UnrealEngine
                </p>
                <h3>What I make</h3>
                <p>
                    I have a series of projects on GitHub. Mostly I would create a project to learn some technology or
                    programming language and store it in a safe place. Otherwise I want to create useful tools that can
                    be used by others. I recently started a YouTube channel where I'd like to make tutorials on some 
                    of my favorite topics, such as programming, mathematics and digital content creation.
                </p>
                <p>
                    <a href="">github</a> <br />
                    <a href="https://www.youtube.com/channel/UCiv_Hb1pSLMeJRNxWSCmLdw">YouTube</a>
                </p>
                <h2>This website</h2>
                <p>
                    Dispite the simplicity of this site, hosted as a Github Page, it is made with a Javascript 
                    framework. Like <a href="https://handlebarsjs.com/">Handlebars</a> but simpler.
                </p>
                <p>
                    The site is loaded in its entirety, and different pages are loaded as static html templates 
                    in the Javascript. This is an attempt at creating a SPA framework that is simple enough to
                    create a website that can be hosted from a Github repo
                </p>
                <h2>Time line</h2>
                <h3>2003-2014</h3>
                <p>
                    I went to school, made friends and overcame the challenges of a child. I am thankful for developing an
                    interest, and sometimes burning curiosity, for mathematics, machines and the nature of things. This 
                    interest carries on even now, and armed with my computer, I can discover and create things to feed
                    my curiosity.
                </p>
                <h3>2015-2018</h3>
                <p>
                    I went on to study computer programming. During this time my interests become a lot more focused on 
                    computer programming. At the time I had no idea of the many things that will eventually grab my attention.
                    Nevertheless, I learned a great deal about basic computer programming and mathematics. I eventually graduated
                    and went on to my first job as a software engineer.
                </p>
                <h3>2019-2020</h3>
                <p>
                    Not much to say here. Wake. Work. Home. Sleep. Repeat. <br />
                    During my free time I discovered an interest in 3d modeling and eventually game development. I got into unity
                    games and with my C# knowledge, I managed to make some simple games. None of these got completed though.
                    I became well versed in Javascript frameworks like Angular and React, Java and C# programming. My skills
                    with C++ and Python also developed.
                </p>
                <h3>2021-current</h3>
                <p>
                    I've decided on a few things I would like to get good at. From now on I'll be focusing on expanding my
                    knowledge and capability with programming, mathematics and digital content creation.
                </p>
                <p>
                    The journey begins now.
                </p>
            </div>
`

function loadAbout() {
    const contentBlock = document.getElementById('content');
    reset();
    contentBlock.innerHTML = about;
}
