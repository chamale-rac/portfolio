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
      image: '/public/work/3d-maze.PNG',
      link: 'https://6457f6d8c2f36f143a035a15--timely-crostata-5c7007.netlify.app',
      code: 'https://github.com/chamale-rac/lab-8-maze',
    },
    {
      title: 'Calc',
      description: 'A simple calculator, but well looking.',
      image: '/public/work/calc.PNG',
      link: 'https://uvgenios.online/21881/lab-9-calc/dist/',
      code: 'https://github.com/chamale-rac/lab-9-calc',
    },
    {
      title: 'BMO',
      description: 'Image replication using only HTML and CSS.',
      image: '/public/work/css-art.PNG',
      link: 'https://uvgenios.online/21881/lab-4-CSS-only/bmo/index.html',
      code: 'https://github.com/chamale-rac/lab-4-CSS-only',
    },
    {
      title: 'Fly',
      description: 'Just a digital illustration.',
      image: '/public/work/fly.jfif',
      link: 'https://instagram.fgua3-5.fna.fbcdn.net/v/t51.2885-15/295883898_1083511642571630_254515848957261093_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fgua3-5.fna.fbcdn.net&_nc_cat=102&_nc_ohc=ML0VzmglCdAAX-uO3ih&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjg5MDYzNTc2MzkzNjk1NTQxNQ%3D%3D.2-ccb7-5&oh=00_AfCxG0bs_EzF0UfIyPyQkWbS177gTqRbqDx38v1Tq7sjyA&oe=646A3C09&_nc_sid=640168',
      color: 'white',
      illustration: true,
    },
    {
      title: '3Clothes',
      description: 'Shirt customizer  with openIA and Three.js.',
      image: '/public/work/tshirt.PNG',
      link: 'https://644e26351e322e2adc3bf835--splendorous-faloodeh-2feaf9.netlify.app',
      code: 'https://github.com/chamale-rac/ia-powered-3d',
    },
    {
      title: 'CareConnect',
      description: 'A medical app for doctors and admins.',
      image: '/public/work/connect.PNG',
      link: 'https://644332d2a1088a266e1dcedf--cosmic-zuccutto-1c6137.netlify.app',
      code: 'https://github.com/chamale-rac/CareConnect',
      color: 'white',
    },
    {
      title: 'Overcome',
      description: 'A social network for lonely gamers.',
      image: '/public/work/overcome.PNG',
      code: 'https://github.com/chamale-rac/overcome',
      building: true,
    },
    {
      title: 'Tecún',
      description: 'National hero concept art.',
      image: '/public/work/uman.PNG',
      link: 'https://www.canva.com/design/DAECdn801LQ/V1en3DeoJTS1VfTnvzIDjQ/view?utm_content=DAECdn801LQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
      color: 'white',
      illustration: true,
    },
    {
      title: 'Scenario',
      description: '3D render using Blender.',
      image: '/public/work/scenario.PNG',
      link: 'https://www.canva.com/design/DAEYabY8-Sc/F6ahVYBKncLPHyYANRLlsw/view?utm_content=DAEYabY8-Sc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
      color: 'white',
      illustration: true,
    },
  ]

  return (
    <Collapse title="What do I do?">
      <Gallery data={webDevelopment} />
    </Collapse>
  )
}

export default Work
