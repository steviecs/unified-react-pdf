import {Page, Document} from '@react-pdf/renderer'
import {ReactNode} from 'react'
import ReactDOMServer from 'react-dom/server'
import Html from 'react-pdf-html'
import convertClassNameToComputedKey from './convert-class-name-to-compluted-key'
import PdfViewer from './pdf-viewer'

type PdfProps = {
  pageStyles?: any
  htmlStyles?: any
  children?: ReactNode
}

export function Pdf({pageStyles, htmlStyles, children}: PdfProps) {
  const convertedStyles = convertClassNameToComputedKey(htmlStyles)
  return (
    <PdfViewer>
      <Document>
        <Page size="A4" style={pageStyles.page}>
          <Html stylesheet={convertedStyles}>
            {ReactDOMServer.renderToStaticMarkup(
              <html lang="en">
                <body className="container">{children}</body>
              </html>,
            )}
          </Html>
        </Page>
      </Document>
    </PdfViewer>
  )
}
