import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'p8dnbg6n',
  dataset: 'production',
  useCdn: true
})