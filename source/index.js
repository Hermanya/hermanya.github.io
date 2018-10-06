import React from 'react'
import {Hero, ScrollDownIndicator, Checklist, Feature, Section, Testimony, CallToAction} from 'react-landing-page'
import {
  NavLink, Flex, Badge, BlockLink, Small, Absolute, Provider, Box, Text, Image, Hide} from 'rebass'
import { Link as RouterLink } from 'react-router-dom'
import { keyframes } from 'styled-components'
import { fadeInUp, fadeInRight, rotateIn } from 'react-animations'
const makeOneByOneAnimation = ({from, to}, index, all) =>
  keyframes`${{
    from,
    [`${100 * index / all.length}%`]: to,
    to
  }}`

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

const links = <Flex style={{overflow: 'auto'}}>{[
  {children: <i className='fas fa-at' title='email' />, href: 'mailto:herman.starikov@gmail.com'},
  {children: <i className='fab fa-facebook-messenger' title='Messenger' />, href: 'https://m.me/hermanhasawish'},
  {children: <i className='fab fa-telegram' title='Telegram' />, href: 'http://t.me/hermanya'},
  {children: <i className='fab fa-medium' title='Medium' />, href: 'https://medium.com/@hermanhasawish'},
  {children: <i className='fab fa-github' title='GitHub' />, href: 'https://github.com/hermanya'},
  {children: <i className='fab fa-codepen' title='CodePen' />, href: 'https://codepen.io/Hermanya'},
  {children: <i className='fab fa-stack-overflow' title='StackOverflow' />, href: 'https://stackoverflow.com/users/7228427/herman-starikov'},
  {children: <i className='fab fa-reddit' title='Reddit' />, href: 'https://reddit.com/u/hermanya'},
  {children: <i className='fab fa-product-hunt' title='product hunt' />, href: 'https://www.producthunt.com/@hermanhasawish'},
  {children: <i className='fab fa-linkedin' title='linkedin' />, href: 'https://linkedin.com/herman-starikov'},
  {children: <i className='fab fa-twitter' title='twitter' />, href: 'https://twitter.com/hermanhasawish'},
  // {children: <i class="fas fa-at" title="fritter"></i>, href: 'dat://fritter.hashbase.io/user/dat://5df1a286cd406a2234c89f8c37148b0fa2e397ca55eda919ca5c550d44841005'},
  {children: <i className='fab fa-facebook' title='facebook' />, href: 'https://facebook.com/hermanhasawish'},
  {children: <i className='fab fa-instagram' title='instagram' />, href: 'https://instagram.com/hermanya'}
].map((props, index, all) =>
  <NavLink {...props}
    key={props.href}
    fontSize={5}
    fontWeight={0}
    css={`animation: 1s ${makeOneByOneAnimation(fadeInRight, all.length - index, all)};`}
  />
)}</Flex>

const header = <Absolute zIndex={1} left={0} right={0} top={0}>
  <Flex is='header' p={3} color='gray'>
    <NavLink href='/' fontSize={3} mr='auto' color='white'>Herman Starikov</NavLink>
    {links}
  </Flex>
</Absolute>

const latestLinks = [{
  uri: 'https://medium.com/@Hermanhasawish/theming-web-apps-with-hsl-css-filters-48558d4296a9',
  children: 'Theming web apps with HSL & CSS filters',
  badge: 'Writing'
}, {
  uri: 'https://ui1.io/',
  children: 'Make a UI Kit for your next project',
  badge: 'Pet project'
}, {
  uri: 'https://github.com/Hermanya/rebass-native',
  children: 'React-native UI component library',
  badge: 'JS library'
}].map((link, index, all) => <BlockLink mt={2}
  key={link.uri}
  css={`animation: 1s ${makeOneByOneAnimation(fadeInUp, index, all)};`}
  href={link.uri}>
  {link.children}
  <Badge bg='black'>{link.badge}</Badge>
</BlockLink>)

const hero = <Hero
  bg='primary'
  color='white'
  bgOpacity={0.85}
  p={4}
  backgroundImage='https://media.licdn.com/dms/image/C4D16AQFqzvS-qDodpQ/profile-displaybackgroundimage-shrink_350_1400/0?e=1539216000&v=beta&t=0d8o3X0SgUhISxY-DDj7URBHoTpkcDD4qFIfxa7v4L8'
>
  <Flex style={{maxWidth: '75vh'}} bg='white' color='black'>
    <Flex p={3} flexDirection='column' justifyContent='space-between'>
      <p>
        <Text fontSize={4}>
          <Text css={`animation: 1s ${keyframes(rotateIn)};`}>👋</Text> I am Herman, a Software Developer based in Toronto, Canada 🇨🇦
        </Text>
        <Text>
        Nice to meet you!
        </Text>
      </p>
      <Box>
        {latestLinks}
      </Box>
    </Flex>
    <Hide small>
      <Image src='./images/waist-up.png' />
    </Hide>
  </Flex>

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
  <Box bg='white' w={1} style={{transform: 'skewY(5deg)', width: '100%'}}>
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
