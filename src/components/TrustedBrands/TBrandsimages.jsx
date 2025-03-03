import gcp from './skills/gcp.svg'
import html from './skills/html.svg'
import photoshop from './skills/photoshop.svg'
import illustrator from './skills/illustrator.svg'
import docker from './skills/docker.svg'
import adobeXd from './skills/adobe-xd.svg'
import afterEffects from './skills/photoshop.svg'
import css from './skills/photoshop.svg'
import angular from './skills/photoshop.svg'
import javascript from './skills/photoshop.svg'
import nextJS from './skills/photoshop.svg'
import nuxtJS from './skills/photoshop.svg'
import react from './skills/photoshop.svg'
import svelte from './skills/photoshop.svg'
import typescript from './skills/photoshop.svg'
import vue from './skills/photoshop.svg'
import bootstrap from './skills/photoshop.svg'
import bulma from './skills/photoshop.svg'
import mongoDB from './skills/photoshop.svg'
import mysql from './skills/photoshop.svg'
import postgresql from './skills/photoshop.svg'
import tailwind from './skills/photoshop.svg'
import vitejs from './skills/photoshop.svg'
import vuetifyjs from './skills/photoshop.svg'
import c from './skills/photoshop.svg'
import cplusplus from './skills/photoshop.svg'
import csharp from './skills/photoshop.svg'
import dart from './skills/photoshop.svg'
import python from './skills/photoshop.svg'
import figma from './skills/photoshop.svg'

import django from './skills/photoshop.svg'
import firebase from './skills/photoshop.svg'

import git from './skills/photoshop.svg'
import flutter from './skills/photoshop.svg'





import canva from './skills/photoshop.svg'
import redux from './skills/photoshop.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'svelte':
            return svelte;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'premiere pro':
            return premierepro;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        case 'tensorflow':
            return tensorflow;
        case 'webix':
            return webix;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'haxe':
            return haxe;
        case 'ionic':
            return ionic;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        case 'wolframalpha':
            return wolframalpha;
        case 'canva':
            return canva;
        case 'redux':
            return redux;    
        default:
            break;
    }
}