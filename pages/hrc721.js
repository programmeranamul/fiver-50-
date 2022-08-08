import React from 'react'
import HRC721TableWrapper from './../components/HRC721/HRC721TableWrapper';

function hrc721() {
  return (
    <section>
    <article className="container">
    <h1 className="title-2 dark-white-color fw-700">HRC721 Tokens</h1>
    {/* <HRC20TableWrapper /> */}
    <HRC721TableWrapper />
   
    </article>
  </section>
  )
}

export default hrc721