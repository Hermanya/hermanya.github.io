import React from 'react'
import {Hero, ScrollDownIndicator, Checklist, Feature, Section, Testimony, CallToAction} from 'react-landing-page'
import {NavLink, Flex, Badge, BlockLink, Small, Absolute, Provider} from 'rebass'
import { Link as RouterLink } from 'react-router-dom'

const links = <Flex style={{overflow: 'hidden'}}>
  <NavLink children='Email' href='mailto:herman.starikov@gmail.com' />
  <NavLink children='Messenger' href='https://m.me/hermanhasawish' />
  <NavLink children='Telegram' href='http://t.me/hermanya' />
  <NavLink children='Reddit' href='https://reddit.com/u/hermanya' />
  <NavLink children='ProductHunt' href='https://www.producthunt.com/@hermanhasawish' />
  <NavLink children='GitHub' href='https://github.com/hermanya' />
  <NavLink children='Twitter' href='https://twitter.com/hermanhasawish' />
  <NavLink children='LinkedIn' href='https://linkedin.com/herman-starikov' />
  <NavLink children='Facebook' href='https://facebook.com/hermanhasawish' />
  <NavLink children='Instagram' href='https://instagram.com/hermanya' />
  <NavLink children='Medium' href='https://medium.com/@hermanhasawish' />
</Flex>

const header = <Absolute zIndex={1} left={0} right={0} top={0}>
  <Flex is='header' p={3} color='whitesmoke'>
    <NavLink href='/' fontSize={3} mr='auto' color='white'>Herman Starikov</NavLink>
    {links}
  </Flex>
</Absolute>

const hero = <Hero
  bg='#5158BB'
  color='white'
  bgOpacity={0.85}
  p={4}
  backgroundImage='https://media.licdn.com/dms/image/C4D16AQFqzvS-qDodpQ/profile-displaybackgroundimage-shrink_350_1400/0?e=1539216000&v=beta&t=0d8o3X0SgUhISxY-DDj7URBHoTpkcDD4qFIfxa7v4L8'
>
  <Testimony
    authorName='Herman Starikov'
    authorTitle='Software Developer'
    authorAvatar='./images/avatar.jpeg'
    style={{maxWidth: '32em'}}
    bubbleBg='#f1f0f0'
  >
    👋 Hello there, nice to meet you! I live and work in Toronto 🇨🇦.
    I like workplace sitcoms, electronic music and long walks 🚶🏼‍♂️
  </Testimony>
  <BlockLink mt={5}
    href='https://medium.com/@Hermanhasawish/7-features-to-make-github-a-better-social-network-b20ba0daa0d2'>
      7 features to make GitHub a better Social Network
    <Badge bg='black'>Latest writing</Badge>
  </BlockLink>
  <ScrollDownIndicator />
</Hero>

const skills = <Section width={1} heading='My skills' bg='whitesmoke' color='black'>
  <Flex flexWrap='wrap' justifyContent='center'>
    <Feature icon='🏓' description='apprentice'>Ping Pong</Feature>
    <Feature icon='👨🏼‍💻' description='professional'>Multi-paradigm Development</Feature>
    <Feature icon='✅' description='fanatic'>Unit & integration testing</Feature>
    <Feature icon='🔁' description='teammate'>Agile Methodologies</Feature>
    <Feature icon='🥋' description='novice'>Judo</Feature>
  </Flex>
</Section>

const brief = <Section heading='My brief' width={[1, 1, 1 / 2, 1 / 2]} bg='white' color='dimgrey'>
  <Checklist children={[
    'Fluent English & Russian',
    'Ontario Diploma in Software Development',
    '4 years of industry experience',
    'Open-source contributor'
  ]} checkmark='️️☑️' m={3} color='black' />
</Section>

const work = <Section heading='My work' width={[1, 1, 1 / 2, 1 / 2]} color='dimgrey'>
  <Flex mb={[1, 4]}>
    <img height={128} src='./images/rangle.jpeg' alt='Rangle.io logo' />
    <img height={128} src='./images/uxp.jpeg' alt='UXP systems logo' />
  </Flex>
  <Flex>
    <img height={48} src='./images/roche.jpeg' alt='Roche logo' />
    <img height={48} src='./images/vodafone.jpeg' alt='Vodafone logo' />
    <img height={48} src='./images/telia.jpeg' alt='Telia sonera logo' />
    <img height={48} src='./images/rogers.jpeg' alt='Rogers logo' />
    <img height={48} src='./images/lgi.jpeg' alt='Liberty Global logo' />
    <img height={48} src='./images/cwc.jpeg' alt='Cable Wireless Communicatins logo' />
  </Flex>
</Section>

const footer = <Flex is='footer' alignItems='center' p={3} bg='whitesmoke' color='dimgrey'>
  {links}
  <Small color='whitesmoke' ml='auto'>© Herman Starikov, 2018</Small>
</Flex>

const cta = <Section
  heading='Want to hire me?'
  width={1}
  bg='whitesmoke' color='black'
>
  <CallToAction is={RouterLink} to='/resume' bg='#5158BB'>résumé</CallToAction>
</Section>

export default () => <Provider
  theme={{
    fonts: {
      sans: '"Asap", Helvetica, sans-serif'
    },
    fontSizes: [
      16,
      16,
      16,
      20,
      24,
      32,
      48,
      64,
      72,
      96
    ]
  }}>
  {header}
  {hero}
  <Flex justifyContent='center' flexWrap='wrap'>
    {skills}
    {brief}
    {work}
    {cta}
  </Flex>
  {footer}
</Provider>
