import React from 'react'

async function products({params, searchParams}) {
      const ans = (await params).id;
      const searchans = (await searchParams).id;
  return (
  
    <div>ans:{ans} , limit:{searchans}.limit</div>
  )
}

export default products;