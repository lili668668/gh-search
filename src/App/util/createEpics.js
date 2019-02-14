import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { switchMap, startWith, map, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import queryString from 'query-string'

export function createFetchEpic ({ baseUrl, type, fetchAction, getPayload }) {
  return (action$) => action$.pipe(
    ofType(type),
    switchMap(action => {
      let url = ''
      let metaId = '?'
      if (action.payload && action.payload.fetchByUrl) {
        metaId = action.payload.metaId
        url = action.payload.url
      } else {
        metaId = `?${queryString.stringify(action.payload)}`
        url = `${baseUrl}${metaId}`
      }
      const meta = { id: metaId }
      return ajax.getJSON(url).pipe(
        map(response => fetchAction.success(meta, getPayload(response, url))),
        catchError(error => of(fetchAction.failure(meta, error))),
        startWith(fetchAction.request(meta))
      )
    })
  )
}
