export const useContactInfo = () => {
  const config = useRuntimeConfig()

  const contacts = {
    email: 'contact@evergreen.dev',
    linkedin: 'https://linkedin.com/company/evergreen-dev',
    github: 'https://github.com/evegdev',
    location: 'Seoul, Korea',
    calendlyUrl: config.public.calendlyUrl || 'https://calendly.com/evergreen-dev/30min'
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: 'mdi:linkedin', url: contacts.linkedin },
    { name: 'GitHub', icon: 'mdi:github', url: contacts.github }
  ]

  return {
    contacts,
    socialLinks
  }
}
