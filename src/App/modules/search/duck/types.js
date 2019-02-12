import { createRequestTypes } from '../../../util/createTypes'

export const fetchRepositories = createRequestTypes('fetch', 'repositories', { namespace: 'search' })
