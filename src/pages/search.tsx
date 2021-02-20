/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import querystring from 'querystring';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import PostList from '../components/PostList';
import './styles/search.scss';

interface SearchProps {
  data: any;
}

const Search = (props: SearchProps) => {
  const { data } = props;
  const posts = data.allMarkdownRemark.edges;

  const [value, setValue] = useState<any>('');
  const [isTitleOnly, setIsTitleOnly] = useState(true);

  useEffect(() => {
    const searchParts = location.search.split('?');
    const searchParams = querystring.parse(searchParts[1]);
    if (searchParams.search) {
      setValue(searchParams.search);
    }
  }, []);

  const filteredPosts = useCallback(
    posts.filter((post: any) => {
      const { node } = post;
      const { frontmatter, rawMarkdownBody } = node;
      const { title } = frontmatter;
      const lowerValue = value.toLocaleLowerCase();

      if (!isTitleOnly && rawMarkdownBody.toLocaleLowerCase().includes(lowerValue)) return true;

      return title.toLocaleLowerCase().includes(lowerValue);
    }),
    [value, isTitleOnly]
  );
  const filterCount = filteredPosts.length > 0 ? filteredPosts.length + ' posts found.' : null;
  return (
    <Layout>
      <SEO title="Search" description="Search in title or title and content." />
      <div id="Search">
        <div className="search-inner-wrap">
          <div className="input-wrap">
            <Fa icon={faSearch} color="gray" />
            <input
              type="text"
              name="search"
              id="searchInput"
              value={value}
              placeholder="Enter keyword"
              autoComplete="off"
              autoFocus
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setValue(e.currentTarget.value);
                window.history.pushState({}, '', `?search=${e.currentTarget.value}`);
              }}
            />
            <div className="search-toggle">
              <span
                style={{ opacity: isTitleOnly ? 0.8 : 0.15 }}
                onClick={() => {
                  setIsTitleOnly(true);
                }}
              >
                in Title
              </span>
              <span
                style={{ opacity: !isTitleOnly ? 0.8 : 0.15 }}
                onClick={() => {
                  setIsTitleOnly(false);
                }}
              >
                in Title+Content
              </span>
            </div>
          </div>
          <div className="count">{filterCount}</div>
          {value !== '' && !filteredPosts.length ? <span className="no-result">No search results</span> : null}
          <PostList posts={value === '' ? posts : filteredPosts} />
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          rawMarkdownBody
          excerpt(truncate: true, format: PLAIN)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            categories
            tags
            update(formatString: "MMM DD, YYYY")
          }
          timeToRead
        }
      }
      totalCount
    }
  }
`;

export default Search;
