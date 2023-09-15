import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// eslint-disable-next-line react/prop-types
const ParticlesBackground = ({theme}) => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={
        {
        autoPlay: true,
        // background: {
        //   color: {
        //     value: "#000000",
        //   },
        //   image: "",
        //   position: "",
        //   repeat: "",
        //   size: "",
        //   opacity: 1,
        // },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            color: {
              value: "#fff",
            },
            opacity: 1,
          },
          enable: false,
        },
        defaultThemes: {},
        delay: 0,
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        manualParticles: [],

        "particles": {
          "number": {
            "value": 137,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": theme == 'light' ? "#090909" : "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": theme == 'light' ? "#000000" : "#ffffff"
            },
            "polygon": {
              "nb_sides": 3
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100 
            }
          },
          "opacity": {
            "value": 0.08680624057955,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 19.489853095232284,
              "size_min": 40.603860615067255,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 128.27296486924183,
            "color": theme == 'light' ? "#090909" : "#ffffff",
            "opacity": 0.25654592973848367,
            "width": 0.9620472365193136
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 1362.9002517356944,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 426.3405364582062,
              "line_linked": {
                "opacity": 0.361955216268242
              }
            },
            "bubble": {
              "distance": 365.4347455356053,
              "size": 85.26810729164123,
              "duration": 2.51743935813417,
              "opacity": 0.12993235396821523,
              "speed": 3
            },
            "repulse": {
              "distance": 146.17389821424212,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": false,

        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        responsive: [],
        smooth: false,
        style: {},
        themes: [],
        zLayers: 100,
        // emitters: {
        //   autoPlay: true,
        //   fill: true,
        //   life: {
        //     wait: false,
        //   },
        //   rate: {
        //     quantity: 1,
        //     delay: 7,
        //   },
        //   shape: "square",
        //   startCount: 0,
        //   size: {
        //     mode: "percent",
        //     height: 0,
        //     width: 0,
        //   },
        //   particles: {
        //     shape: {
        //       type: "images",
        //       options: {
        //         images: {
        //           src: "https://particles.js.org/images/cyan_amongus.png",
        //           width: 500,
        //           height: 634,
        //         },
        //       },
        //     },
        //     size: {
        //       value: 40,
        //     },
        //     move: {
        //       speed: 10,
        //       outModes: {
        //         default: "none",
        //         right: "destroy",
        //       },
        //       straight: true,
        //     },
        //     zIndex: {
        //       value: 0,
        //     },
        //     rotate: {
        //       value: {
        //         min: 0,
        //         max: 360,
        //       },
        //       animation: {
        //         enable: true,
        //         speed: 10,
        //         sync: true,
        //       },
        //     },
        //   },
        //   position: {
        //     x: -5,
        //     y: 55,
        //   },
        // },
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true,
          },
        },
      }
    }
    />
  );
};

export default ParticlesBackground;
