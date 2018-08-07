import React from 'react'
import {Hero, ScrollDownIndicator, Checklist, Feature, Section, Testimony, CallToAction} from 'react-landing-page'
import {NavLink, Flex, Badge, BlockLink, Small, Absolute} from 'rebass'
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
    authorAvatar='https://media.licdn.com/dms/image/C4D03AQHrQu7jWlkkmQ/profile-displayphoto-shrink_200_200/0?e=1539216000&v=beta&t=zRR2PdoFS3UKcAIdZkEavcf5W-SJjd8bogrsEk9z5EA'
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

const footer = <Flex is='footer' alignItems='center' p={3} bg='whitesmoke' color='dimgrey'>
  {links}
  <Small color='whitesmoke' ml='auto'>© Herman Starikov, 2018</Small>
</Flex>

export default () => <main>
  {header}
  {hero}
  <Flex justifyContent='center' flexWrap='wrap'>
    <Section width={1} heading='My skills' bg='whitesmoke' color='black'>
      <Flex flexWrap='wrap' justifyContent='center'>
        <Feature icon='🏓' description='apprentice'>Ping Pong</Feature>
        <Feature icon='👨🏼‍💻' description='professional'>Multi-paradigm Development</Feature>
        <Feature icon='✅' description='fanatic'>Unit & integration testing</Feature>
        <Feature icon='🔁' description='teammate'>Agile Methodologies</Feature>
        <Feature icon='🥋' description='novice'>Judo</Feature>
      </Flex>
    </Section>
    <Section heading='My brief' width={[1, 1, 1 / 2, 1 / 2]} bg='white' color='dimgrey'>
      <Checklist children={[
        'Fluent English & Russian',
        'Ontario Diploma in Software Development',
        '4 years of industry experience',
        'Open-source contributor'
      ]} checkmark='️️☑️' m={3} color='black' />
    </Section>
    <Section heading='My work' width={[1, 1, 1 / 2, 1 / 2]} color='dimgrey'>
      <Flex mb={[1, 4]}>
        <img height={128} src='https://media.licdn.com/dms/image/C510BAQHUpKTwe_L_Hg/company-logo_400_400/0?e=1541635200&v=beta&t=BU1P4i-tfTa73IfHFbBJnD-gjRWh748Im0dAyXL080c' />
        <img height={128} src='https://media.licdn.com/dms/image/C510BAQEtDMzeMOhoRw/company-logo_400_400/0?e=1541635200&v=beta&t=q9fwaXxDYw4Oms4L9Z3xJqJbt9ZcNSHW5Rn0cV9SrZU' />
      </Flex>
      <Flex>
        <img height={48} src='https://media.licdn.com/dms/image/C4E0BAQGhiZ1XjYO9hA/company-logo_200_200/0?e=1541635200&v=beta&t=W5Kj94z11IYNpFeKFxArbjAtnJfxJZj42oQh1arQCMQ' />
        <img height={48} src='https://media.licdn.com/dms/image/C4D0BAQG4YAeUoNmg4w/company-logo_200_200/0?e=1541635200&v=beta&t=Ymm4_sH64SRhFicj3LRAbhRi9MyW_n3voHVXm5qiSrE' />
        <img height={48} src='https://media.licdn.com/dms/image/C4E0BAQFbBsIWNqaqiw/company-logo_200_200/0?e=1541635200&v=beta&t=TClieXC6U7K9vJis1mq_D0DzVjt3-fFI2lahWUATACE' />
        <img height={48} src='https://media.licdn.com/dms/image/C4E0BAQEu_8o2O06uKw/company-logo_200_200/0?e=1541635200&v=beta&t=Oa0i0BUQDb4p1q_SqEz-A_p8LUqv_9rpiSzlex0ThQI' />
        <img height={48} src='https://media.licdn.com/dms/image/C4E0BAQGBgb-FPQP9Lw/company-logo_200_200/0?e=1541635200&v=beta&t=u0prZmpo4U_dEKCPazT3nptQNs6EW12o0l4ux_WmoxA' />
        <img height={48} src='https://media.licdn.com/dms/image/C560BAQEVPCNBOq4TYA/company-logo_200_200/0?e=1541635200&v=beta&t=IsQfgKcbawin5V1i2BiU16KLKJGMtWncfJhayMjCJj0' />
      </Flex>
    </Section>
    <Section
      heading='Want to hire me?'
      width={1}
      bg='whitesmoke' color='black'
    >
      <CallToAction is={RouterLink} to='/resume' bg='#5158BB'>résumé</CallToAction>
    </Section>
  </Flex>
  {footer}
</main>
