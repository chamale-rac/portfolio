/* eslint-disable max-len */
import React from 'react'
import { Collapse, Gallery } from '@components'
// eslint-disable-next-line no-unused-vars
import * as styles from './Work.module.css'

const Work = () => {
  const webDevelopment = [
    {
      title: '@Maze',
      description: 'Fun maze using Three.js.',
      image: '/work/3d-maze.PNG',
      link: 'https://6457f6d8c2f36f143a035a15--timely-crostata-5c7007.netlify.app',
      code: 'https://github.com/chamale-rac/lab-8-maze',
      type: 'page',
    },
    {
      title: 'Calc',
      description: 'A simple calculator, but well looking.',
      image: '/work/calc2.jpg',
      link: 'https://uvgenios.online/21881/lab-9-calc/dist/',
      code: 'https://github.com/chamale-rac/lab-9-calc',
      type: 'page',
    },
    {
      title: 'BMO',
      description: 'Image replication using only HTML and CSS.',
      image: '/work/css-art.PNG',
      link: 'https://uvgenios.online/21881/lab-4-CSS-only/bmo/index.html',
      code: 'https://github.com/chamale-rac/lab-4-CSS-only',
      type: 'page',
    },
    {
      title: 'Tecún',
      description: 'National hero concept art.',
      image: '/work/uman.png',
      link: 'https://www.behance.net/gallery/170955327/Tecun',
      color: 'white',
      type: 'illustration',
    },
    {
      title: '3Clothes',
      description: 'Shirt customizer  with openIA and Three.js.',
      image: '/work/tshirt.PNG',
      link: 'https://644e26351e322e2adc3bf835--splendorous-faloodeh-2feaf9.netlify.app',
      code: 'https://github.com/chamale-rac/ia-powered-3d',
      type: 'page',
    },
    {
      title: 'Fly',
      description: 'Just a digital illustration.',
      image: '/work/fly.jfif',
      link: 'https://instagram.fgua3-5.fna.fbcdn.net/v/t51.2885-15/295883898_1083511642571630_254515848957261093_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fgua3-5.fna.fbcdn.net&_nc_cat=102&_nc_ohc=ML0VzmglCdAAX-uO3ih&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjg5MDYzNTc2MzkzNjk1NTQxNQ%3D%3D.2-ccb7-5&oh=00_AfCxG0bs_EzF0UfIyPyQkWbS177gTqRbqDx38v1Tq7sjyA&oe=646A3C09&_nc_sid=640168',
      color: 'white',
      type: 'illustration',
    },
    {
      title: 'Overcome',
      description: 'A social network for lonely gamers.',
      image: '/work/overcome.PNG',
      code: 'https://github.com/chamale-rac/overcome',
      type: 'building',
    },
    {
      title: 'Music?',
      description: 'Some experimental music.',
      image: '/work/music.PNG',
      link: 'https://youtu.be/dBICWs2OqiA',
      color: 'black',
      type: 'music',
    },
    {
      title: 'Scenario',
      description: '3D render using Blender.',
      image: '/work/scenario.png',
      link: 'https://www.behance.net/gallery/170954683/The-Scenario',
      color: 'white',
      type: 'illustration',
    },
    {
      title: 'CareConnect',
      description: 'A medical app for doctors and admins.',
      image: '/work/connect.PNG',
      link: 'https://644332d2a1088a266e1dcedf--cosmic-zuccutto-1c6137.netlify.app',
      code: 'https://github.com/chamale-rac/CareConnect',
      color: 'white',
      type: 'page',
    },
    {
      title: 'Escritos',
      description: 'Some of my writings.',
      image: '/work/escritos.PNG',
      link: 'https://www.behance.net/gallery/170957249/Escritos',
      color: 'white',
      type: 'writings',
    },
  ]

  return (
    <Collapse title="What do I do?">
      <Gallery data={webDevelopment} />
    </Collapse>
  )
}

export default Work
