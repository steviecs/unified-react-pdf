import {Pdf} from '../src/index'
import {StyleSheet} from '@react-pdf/renderer'

export default function App() {
  //flex by default
  const rendererStyles = StyleSheet.create({
    page: {
      border: '0.3px solid #000',
      backgroundColor: '#fff',
      // color: "red",
      width: 749,
      height: 1123,
    },
  })

  const htmlStyles = {
    container: {
      color: 'blue',
      backgroundColor: 'red',
    },
  }

  return <div>nothing for now</div>
}
