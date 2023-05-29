import { proxy } from 'valtio'

const collapseToggle = proxy({
  associatedId: null,
  toggleInstant: false,
})

export default collapseToggle
