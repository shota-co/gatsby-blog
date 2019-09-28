import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import axios from 'axios';

const IndexPage = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetchPosts()
  });

  const fetchPosts = () => {
    axios.get('https://codesign.microcms.io/api/v1/blog',
      {
        headers: {
          'x-api-key': 'cfe15683-9789-48da-9d33-0648d39eecc4'
        }
      }).then((res) => {
        setPosts(res.data.contents)
      }).then(()=>{
        setLoading(false)
    })
  };

  const handleClick = () => {
    console.log(posts);
  };

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      {loading ? (
        <p>posts fetching</p>
      ):(
        <button onClick={handleClick}>click me</button>
      )}
      {/*{allPosts.map(pokemon => (*/}
      {/*  <li key={pokemon.id}>*/}
      {/*    <img src={pokemon.sprites.front_default} alt={pokemon.name} />*/}
      {/*    <p>{pokemon.name}</p>*/}
      {/*  </li>*/}
      {/*))}*/}
      {[{id:1, title:'hoge'}, {id:2, title:'fuga'}].map(post => (
        <li key={post.id}>
          <p>{post.title}</p>
        </li>
      ))}
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
