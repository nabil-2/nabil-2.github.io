const getProjects = ()=> {
    return `[
        {
            "name": "Search for Dark Matter",
            "img": "dark_matter_uhh.jpg",
            "url": "https://www.isa.uni-hamburg.de/foerderungen/studentischeforschungsgruppen/dunkle-materie.html",
            "description": "A Search for Dark Matter by building a High-Frequency Cavity and utilizing Artificial Intelligence. A student research project funded by the University of Hamburg with 10,000 €. <br><br><span id='small_dscr'>Funded by the Federal Ministry of Education and Research (BMBF) and the Free and Hanseatic City of Hamburg under the Excellence Strategy of the Federal Government and the Federal States</span>"
        },
        {
            "name": "Numerical Integration Library",
            "img": "integration.jpg",
            "url": "https://github.com/Malta-Project/Malta",
            "description": "Library for fast Integration of arbitrary functions in n dimensions using Monte-Carlo Integration enhanced with the VEGAS-Algorithm named Malta."
        },
        {
            "name": "Computer Vision Library<br>& Image Recognition",
            "img": "computer_vision.png",
            "url": "computer-vision",
            "description": "A library for training and testing a user-definded Convolutional Neuronal Network model, capable of all common techniques for supervised image classification and image preprocessing."
        },
        {
            "name": "Simulation of a Pandemic",
            "img": "simulation.png",
            "url": "simulation",
            "description": "A complex reconstruction of a pandemic as Web-App using real-world actions measured by comparing plots to mathematical models."
        },
        {
            "name": "AI Reasearch in Physics",
            "img": "research.png",
            "url": "https://www.dpg-verhandlungen.de/year/2024/conference/karlsruhe/part/t/session/121/contribution/5?lang=en",
            "description": "Automated antenna calibration and optimization of the MADMAX booster system for Dark Matter detection using Deep Learning techniques."
        },
        {
            "name": "Android App",
            "img": "android.jpg",
            "url": "android-app",
            "description": "A calculator for various linear- and vector algebra operations, e.g. calculating a linear combination in n-dimensional space, vector operations, calculating the determinant, etc."
        }
    ]`;   
};


/*
{
    "name": "Web Development",
    "img": "web_dev.png",
    "url": "http://salama-art.de/en",
    "description": "Developing a <a href='http://salama-art.de/en'>personal website</a> (see footer) or a website for a <a href='./newspaper'>school newspaper</a> as well as this very site."
}
{
    "name": "AI Research",
    "img": "research.png",
    "url": "research",
    "description": "Developing a new type of a storage space efficient neural network by decreasing unnecessary performance by calculating weights at runtime using a “weight function” instead of saving them. Achieving about 90% less storage and 10% higher error (depending on model)."
}
*/

const init = ()=> {
    const projects = JSON.parse(getProjects());
    for(const project of projects) {
        $('body #tiles').append(`<div class="project">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        </div>`);        
        let height = $('div.project:last-child p').height();
        $('#tiles div.project:last-child').css({
            'background-image': `url('./img/${project.img}')`
        }).on('click', x=> {
            window.location.href = project.url;
        }).children('p').css({
            height: 0,
            "font-size": 0,
            opacity: 0,
            display: 'none'
        }).parent('div.project').hover(function() {
            $(this).children('p').css({
                display: 'block',
                "font-size": "1.35em"
            }).animate({
                height: height
            }, {
                duration: 400,
                easing: 'swing',
                complete: function() {
                    $(this).animate({
                        opacity: 1
                    }, 300);
                }
            });
        }, function() {
            $(this).children('p').animate({
                opacity: 0
            }, {
                duration: 300,
                complete: function() {
                    $(this).animate({
                        height: 0
                    }, {
                        duration: 400,
                        complete: function() {
                            $(this).css({
                                display: 'none',
                                "font-size": 0
                            });
                        }
                    });
                }
            });
        });
    }
    if(screen.width <= 800) {
        alert("This website is not optimized for mobile viewports, please use a desktop device.");
    }
};
