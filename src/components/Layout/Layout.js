import { Layout, ImageContainer, MainContainer, Container } from './LayoutStyle'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import SmallFooter from '@/components/Footer/SmallFooter'

export default function LayoutPage({children}) {
  return (
    <Layout>
      <ImageContainer className="sliderImg">
        <h3>Calebbenjin.dev</h3>
      </ImageContainer>
      <MainContainer>
        <Header />
        <Container>
          {children}
          <SmallFooter />
        </Container>
        <Footer />
      </MainContainer>
    </Layout>
  )
}



