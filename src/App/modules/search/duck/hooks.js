import { replace } from 'connected-react-router'
import { createFetchByQueryHook, createSelectorHook } from '../../../util/createHooks'

import { fetchRepositories } from './actions'
import { getRepositories } from './selectors'

export const useFetchRepositories = createFetchByQueryHook(fetchRepositories, replace)
export const useRepositories = createSelectorHook(getRepositories)
