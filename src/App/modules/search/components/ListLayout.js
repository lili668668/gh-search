import { withComponents } from '@devexpress/dx-react-core'
import List from '@material-ui/core/List'
import RepositoryListItem from './RepositoryListItem'
import ListTemplate from '../../../core/List/templates/ListTemplate'

export default withComponents({
  Container: List,
  Item: RepositoryListItem
})(ListTemplate)
