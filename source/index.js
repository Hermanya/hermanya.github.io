import React from 'react'
import {Hero, ScrollDownIndicator, Checklist, Feature, Section, Testimony, CallToAction} from 'react-landing-page'
import {
  NavLink, Flex, Badge, BlockLink, Small, Absolute, Provider, Box} from 'rebass'
import { Link as RouterLink } from 'react-router-dom'

const theme = {
  colors: {
    primary: '#5158BB',
    gray: '#f6f6ff'
  },
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
}

const links = <Flex style={{overflow: 'auto'}}>
  <NavLink children='Email' href='mailto:herman.starikov@gmail.com' />
  <NavLink children='Messenger' href='https://m.me/hermanhasawish' />
  <NavLink children='Telegram' href='http://t.me/hermanya' />
  <NavLink children='Medium' href='https://medium.com/@hermanhasawish' />
  <NavLink children='GitHub' href='https://github.com/hermanya' />
  <NavLink children='CodePen' href='https://codepen.io/Hermanya' />
  <NavLink children='StackOverflow' href='https://stackoverflow.com/users/7228427/herman-starikov' />
  <NavLink children='Reddit' href='https://reddit.com/u/hermanya' />
  <NavLink children='ProductHunt' href='https://www.producthunt.com/@hermanhasawish' />
  <NavLink children='LinkedIn' href='https://linkedin.com/herman-starikov' />
  <NavLink children='Twitter' href='https://twitter.com/hermanhasawish' />
  <NavLink children='Fritter' href='dat://fritter.hashbase.io/user/dat://5df1a286cd406a2234c89f8c37148b0fa2e397ca55eda919ca5c550d44841005' />
  <NavLink children='Facebook' href='https://facebook.com/hermanhasawish' />
  <NavLink children='Instagram' href='https://instagram.com/hermanya' />
</Flex>

const header = <Absolute zIndex={1} left={0} right={0} top={0}>
  <Flex is='header' p={3} color='gray'>
    <NavLink href='/' fontSize={3} mr='auto' color='white'>Herman Starikov</NavLink>
    {links}
  </Flex>
</Absolute>

const hero = <Hero
  bg='primary'
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
    I like workplace sitcoms, electronic music and programming 👨🏼‍💻
  </Testimony>
  <BlockLink mt={5}
    href='https://medium.com/@Hermanhasawish/theming-web-apps-with-hsl-css-filters-48558d4296a9'>
      Theming web apps with HSL & CSS filters
    <Badge bg='black'>Latest writing</Badge>
  </BlockLink>
  <BlockLink mt={2}
    href='https://ui1.io/'>
      Make a UI Kit for your next project
    <Badge bg='black'>Latest pet project</Badge>
  </BlockLink>
  <BlockLink mt={2}
    href='https://github.com/Hermanya/rebass-native'>
      React-native UI component library
    <Badge bg='black'>Latest JS library</Badge>
  </BlockLink>

  <ScrollDownIndicator />
</Hero>

const Icon = ({
  children, ...props // eslint-disable-line
}) => <Box p={3} bg='primary' style={{
  borderRadius: '50%',
  width: '2.25em',
  filter: 'brightness(250%)',
  display: 'inline-block'
}} {...props}>
  <div style={{
    filter: 'grayscale(1000%) brightness(40%)'
  }}>{children}</div>
</Box>

const skills = <Section width={1}
  heading='My skills'
  subhead='see endorsements on LinkedIn'
  bg='gray' color='black'>
  <Flex flexWrap='wrap' justifyContent='center'>
    <Feature icon={<Icon>🏓</Icon>}
      description={<Badge style={{opacity: 0.7}}>Apprentice</Badge>}>
      Ping Pong</Feature>
    <Feature icon={<Icon>👨🏼‍💻</Icon>}
      description={<Badge>Expert</Badge>}>
      Multi-paradigm Development</Feature>
    <Feature icon={<Icon>✅</Icon>}
      description={<Badge>Fanatic</Badge>}>
      Unit & integration Testing</Feature>
    <Feature icon={<Icon>🌀</Icon>}
      description={<Badge>Adept</Badge>}>
      Agile Methodologies</Feature>
    <Feature icon={<Icon>🥋</Icon>}
      description={<Badge style={{opacity: 0.5}}>Novice</Badge>}>
      Judo</Feature>
    {/* <Feature icon={<Icon title='skateboard emoji coming late fall 2018'>🛹</Icon>}
      description={<Badge style={{opacity: 0.6}}>Adept</Badge>}>
      Skateboarding</Feature> */}
  </Flex>
</Section>

const brief = <Section
  heading='A bit about myself'
  subhead='male, born in 1995'
  width={[1, 1, 1 / 2, 1 / 2]}
  bg='white'>
  <Checklist children={[
    'Fluent English & Russian',
    'Ontario Diploma in Software Development',
    '4 years of industry experience',
    'Open-source contributor'
  ]} checkmark='️️☑️' m={3} color='black' />
</Section>

const work = <Section
  heading='Companies I have worked for'
  subhead='and companies I have worked with'
  width={[1, 1, 1 / 2, 1 / 2]}
  bg='white'
>
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

const footer = <Flex is='footer' alignItems='center' p={3} bg='gray' color='dimgrey'>
  {links}
  <Small color='dimgrey' ml='auto'>© Herman Starikov, 2018</Small>
</Flex>

const cta = <Section
  heading='Hiring software developers?'
  subhead='I might be a great asset to your team'
  width={1}
  bg='gray' color='black'
>
  <CallToAction is={RouterLink} to='/resume' bg='primary'>résumé</CallToAction>
</Section>

const Skew = ({children}) => // eslint-disable-line
  <Box bg='white' w={1} style={{transform: 'skewY(5deg)'}}>
    <Box bg='white' w={1} style={{transform: 'skewY(-10deg)'}}>
      <Flex
        justifyContent='center' flexWrap='wrap'
        style={{transform: 'skewY(5deg)'}}>
        {children}
      </Flex>
    </Box>
  </Box>

export default () => <Provider
  theme={theme}>
  {header}
  {hero}
  <Flex justifyContent='center' flexWrap='wrap'>
    {skills}
    <Skew>
      {brief}
      {work}
    </Skew>
    {cta}
  </Flex>
  {footer}
</Provider>
