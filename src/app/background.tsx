"use client";

import React, { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import type { Engine, IOptions, RecursivePartial } from 'tsparticles-engine';

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);

  const particlesOptions = useMemo<RecursivePartial<IOptions>>(
    () => ({
      preset: 'links',
      background: {
        color: '#000000',
      },
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#ffffff',
        },
        links: {
          enable: true,
          color: '#ffffff',
          opacity: 0.3,
          distance: 150,
        },
        move: {
          enable: true,
          speed: 1,
          outModes: 'bounce',
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 0.5,
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'connect',
          },
        },
        modes: {
          connect: {
            distance: 100,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      fpsLimit: 60,
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="fixed inset-0 z-[-1] opacity-80"
    />
  );
};

export default React.memo(ParticlesBackground);