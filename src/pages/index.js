import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const [activeTag, setActiveTag] = React.useState(null)

  // Constant(s).
  const LINK_RECENTLY_ADDED = "recently-added";
  const LINK_BY_CATEGORIES = "by-categories";

  // Variables
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const githubUrl = data.site.siteMetadata?.siteTitle;
  const tags = data.page.tags
  const dataRecentPosts = data.recentPosts.edges;

  const header = (link, name) => {
    return (
      <h2 className="front-page-heading mb-4">
        <Link to={`#${link}`}
          className={`pt-1 ${activeTag === link && "targetClass"}`}
          onClick={() => toggleActive(link)}>
          {name}
        </Link>
      </h2>)
  }

  const posts = (posts) => {
    return (<ul>
      {posts?.map(p => {
        return ((
          <li key={p.node.id} className="flex flex-row link-item leading-7">
            <span className="flex-none text-gray-400">{p.node.frontmatter.date}</span>
            <Link
              className="ml-5"
              to={p.node.fields.slug}
              itemProp="url">
              {p.node.frontmatter.title}
            </Link>

          </li>
        ))
      })}
    </ul>)
  };

  const toggleActive = tagName => {
    setActiveTag(tagName)
  }

  return (
    <Layout location={location} title={siteTitle}>
      <header>
        <div className="text-3xl font-extrabold font-serif mb-0">everyday: Development Log</div>
        <a href={githubUrl} className="text-sm cursor-pointer">Github Repository</a>
      </header>
      <Seo title="" />

      {/* Recently added list */}
      {header(LINK_RECENTLY_ADDED, "Recently Added")}
      {posts(dataRecentPosts)}


      {/* By Categories list */}
      {header(LINK_BY_CATEGORIES, "By Categories")}
      {/* Tags */}
      <ul>
        {tags.map(tag => {
          return (
            <li key={tag.name}>
              <h2
                className={`front-page-heading capitalize mt-8 mb-4`}
                id={tag.name}
              >
                <Link
                  to={`#${tag.name}`}
                  itemProp="url"
                  className={`pt-1 ${activeTag === tag.name && "targetClass"
                    }`}
                  onClick={() => toggleActive(tag.name)}
                >
                  {tag.name}
                  <span> ({tag.postCount})</span>
                </Link>
              </h2>

              {/* Posts */}
              <ul className="link-list">
                {posts(tag.edges)}
              </ul>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    recentPosts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
          }
          fields {
            slug
          }
          id
        }
      }
    }
    page: allMarkdownRemark {
      tags: group(field: frontmatter___tags) {
        name: fieldValue
        postCount: totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "YYYY.MM.DD")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  }
`
