import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { switchMap, startWith, map, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import queryString from 'query-string'

export function createFetchEpic ({ baseUrl, type, fetchAction, getPayload }) {
  return (action$) => action$.pipe(
    ofType(type),
    switchMap(action => {
      const metaId = `?${queryString.stringify(action.payload)}`
      const meta = { id: metaId }
      return ajax.getJSON(`${baseUrl}${metaId}`).pipe(
        map(response => fetchAction.success(meta, getPayload(response))),
        catchError(error => of(fetchAction.failure(meta, error))),
        startWith(fetchAction.request(meta))
      )
    })
  )
}
