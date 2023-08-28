import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particle-config";
import { loadFull } from "tsparticles";
const ParticlesBackground = () => {
    async function loadParticles(main) {
        await loadFull(main);
    }
    return (
        <Particles
        init={loadParticles}
        options={{
            fullScreen:{
                enable:true,
                zIndex:-1
            },
            background: {
                color: {
                    value: "#080a0f",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.9,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: false,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "bottom",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                    gravity:true,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
        ></Particles>
    )

    
}

export default ParticlesBackground