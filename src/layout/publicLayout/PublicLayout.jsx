import React from 'react'
import Bottom from '../../components/bottom/Bottom'
import FooterSection from '../../components/footerSection/FooterSection'
import Header from '../../components/header/Header'

const PublicLayout = (props) => {
  return (
    <div>
        <Header />
        {props.children}
        <FooterSection />
        {/* <Bottom /> */}
    </div>
  )
}

export default PublicLayout