import { ajax } from 'rxjs/ajax'
import { switchMap, startWith } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import queryString from 'query-string'
import { normalize, schema } from 'normalizr'

function createFetchFromGithubEpic ({ baseUrl, type, fetchAction }) {
  const repositorySchema = new schema.Entity('repositories')

  return (action$) => action$.pipe(
    ofType(type),
    switchMap(action => {
      const metaId = `?${queryString.stringify(action.payload)}`
      const meta = { id: metaId }
      return ajax.getJSON(`${baseUrl}${metaId}`).pipe(
        map(response => fetchAction.success(meta, normalize(response, { items: [repositorySchema] }))),
        catch(error => fetchAction.failure(meta, error)),
        startWith(fetchAction.request(meta))
      )
    })
  )
}

export default {
  createFetchFromGithubEpic
}
