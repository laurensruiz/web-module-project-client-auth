import { setupServer } from 'msw/node'
import { handlers } from './handlers'
import friends from './data'

export const server = setupServer(...handlers)
