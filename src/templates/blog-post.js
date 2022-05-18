import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title;
  const posts = data.allMarkdownRemark?.edges;

  return (
    <Layout location={location} title={siteTitle} className="min-h-[100vh]">
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div className="mb-8">
        <span className="text-gray-400"> «</span>
        <a href="/" > All notes</a>
      </div>

      <article itemScope itemType="http://schema.org/Article">
        <header className="mb-8">
          <h1 itemProp="headline" className="text-3xl">
            {post.frontmatter.date} - {post.frontmatter.title}
          </h1>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        {/* <footer>
          <Bio />
        </footer> */}
      </article>
      <hr />
      <nav className="px-4 mt-8">
        <h2 className="mb-3">Read more</h2>
        <ul >
          {posts.map(p => (
            <li key={p.node.id} className="list-disc text-sm">
              <Link to={p.node.fields.slug}>
                {p.node.frontmatter.date} - {p.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
      }
    }
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 5, filter: {id: {ne: $id}}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
