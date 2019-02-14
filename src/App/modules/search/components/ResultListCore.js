import { withComponents } from '@devexpress/dx-react-core'
import List from '@material-ui/core/List'
import ResultListCoreBase from './ResultListCoreBase'
import ResultListItem from './ResultListItem'

export default withComponents({
  List,
  ListItem: ResultListItem
})(ResultListCoreBase)
