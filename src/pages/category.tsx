/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { graphql } from 'gatsby';
import { unslugify } from '../utils/helpers'
import Layout from '../components/Layout';
import SEO from '../components/seo';
import './styles/tags.scss';
import PostList from '../components/PostList';

interface CategoryPageProps {
  data: any;
}

const Categories = (props: CategoryPageProps) => {
  const { data } = props;
  const { group } = data.allMarkdownRemark;

  const [largeCount, setLargeCount] = useState(0);
  const [targetCategory, setTargetCategory] = useState<string | undefined>();
  const [currentPostList, setCurrentPostList] = useState([]);

  interface groupItem {
    fieldValue: string;
    totalCount: number;
  }

  group.sort((a: groupItem, b: groupItem) => {
    const x = a.fieldValue.toLocaleLowerCase();
    const y = b.fieldValue.toLocaleLowerCase();

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  });

  const categoryList = group.map((g: groupItem) => {
    const getFontSize = () => {
      let fontSize = Math.round(50 / (largeCount / g.totalCount)).toString();
      if (fontSize.length <= 1) fontSize = `0${fontSize}`;
      return `${Number(fontSize) / 100 + 0.9}rem`;
    };
 
    return (
      <li key={g.fieldValue}>
        <span
          className="tag-text"
          style={{
            fontSize: g.fieldValue !== 'undefined' ? getFontSize() : '0.9rem',
            opacity: g.fieldValue === targetCategory ? '0.9' : '0.5',
            fontWeight: g.fieldValue === targetCategory ? 'bold' : 'normal',
          }}
          onClick={() => {
            setTargetCategory(g.fieldValue);
          }}
        >
          <a href={`/category/#${g.fieldValue}`}>{unslugify(g.fieldValue)}</a>
        </span>
      </li>
    );
  });

  const cateCount = group.map((g: groupItem) => {
    return (
        <span>{g.fieldValue === targetCategory ? g.totalCount + ' posts found.' : null}</span>
    );
  });

  const getPostList = useCallback(() => {
    if (group.filter((g: groupItem) => g.fieldValue === targetCategory).length) {
      return group.filter((g: groupItem) => g.fieldValue === targetCategory)[0].edges;
    }
    if (group.filter((g: groupItem) => g.fieldValue === 'undefined').length) {
      return group.filter((g: groupItem) => g.fieldValue === 'undefined')[0].edges;
    }
    return [];
  }, [targetCategory]);

  useEffect(() => {
    setTargetCategory(location?.hash ? location.hash.split('#')[1] : 'undefined');

    let large = 0;
    for (const g of group) {
      if (g.fieldValue !== 'undefined' && g.totalCount > large) large = g.totalCount;
    }
    setLargeCount(large);
  }, []);

  useEffect(() => {
    if (targetCategory) setCurrentPostList(getPostList());
  }, [targetCategory]);

  return (
    <Layout>
      <SEO title="Category" description="Click on the category you wanna see the posts." />
      <div id="tags">
        <div className="tag-list-wrap">
          <ul>{categoryList}</ul>
        </div>
        <div className="count">
          {cateCount}
        </div>

        <PostList posts={getPostList()} onCategoryClick={category => setTargetCategory(category)} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
        edges {
          node {
            excerpt(truncate: true, format: PLAIN)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              update(formatString: "MMM DD, YYYY")
              title
              categories
              tags
            }
            timeToRead
          }
        }
      }
    }
  }
`;

export default Categories;
