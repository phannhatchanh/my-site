/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'gatsby';
import { throttle } from 'lodash';
import { unslugify } from '../../utils/helpers';

import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faTags, faEye, faCalendarAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import moment from 'moment';

import './postList.scss';

interface PostListProps {
  posts: any[];
  onTagClick?: (tag: string) => void;
  onCategoryClick?: (category: string) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onTagClick, onCategoryClick }) => {
  //const { posts } = props;

  const handleTagClick = (tag: string) => () => {
    if (onTagClick) {
        onTagClick(tag);
    }
  };

  const handleCategoryClick = (category: string) => () => {
      if (onCategoryClick) {
          onCategoryClick(category);
      }
  };

  const [showCnt, setShowCnt] = useState(10);
  const [currentPostList, setCurrentPostList] = useState<JSX.Element[]>([]);
  const sortedPosts = useMemo(() => {
    posts.sort((a: any, b: any) => {
      const af = a.node.frontmatter;
      const bf = b.node.frontmatter;

      const aDate = new Date(af.update.includes('0001') ? af.date : af.update);
      const bDate = new Date(bf.update.includes('0001') ? bf.date : bf.update);

      if (aDate < bDate) return 1;
      if (aDate > bDate) return -1;
      return 0;
    });
    return posts;
  }, [posts]);

  const throttleScrollHandler = useCallback(
    throttle(() => {
      if (
        window.outerHeight > (document.querySelector('.post-list') as HTMLDivElement).getBoundingClientRect().bottom
      ) {
        setShowCnt((prev: number) => {
          if (prev >= sortedPosts.length) return prev;
          return prev + 10;
        });
      }
    }, 250),
    [sortedPosts]
  );

  const expendPostList = useCallback((list: any) => {
    const mapToList = list.map((post: any) => {
      const { node } = post;
      const { excerpt, fields, frontmatter, timeToRead } = node;
      const { slug } = fields;
      const { date, tags, categories } = frontmatter;
      let update = frontmatter.update;
      if (Number(update.split(',')[1]) === 1) update = null;

      let { title } = frontmatter;
      let externalLink = null;
      const isTitleLinkPattern = /(?=.*\[)(?=.*\])(?=.*\()(?=.*\))/i
      if (isTitleLinkPattern.test(title)) {
        const found = title.match(/\[(.*)]\((.*)\)/)
        title = found[1]
        externalLink = found[2]
      }

      const mapCategory = categories.map((category: string) => {
        return (
          <div key={`${slug}-${category}`} className="tag">
            <span onClick={handleCategoryClick(category)}>
              <Link to={`/category/#${category}`}>{`${unslugify(category)}`}</Link>
            </span>
          </div>
        );
      });

      const mapTag = tags.map((tag: string) => {
        if (tag === 'undefined') return;
        return (
          <div key={`${slug}-${tag}`} className="tag">
            <span onClick={handleTagClick(tag)}>
              <Link to={`/tags/#${tag}`}>{`#${unslugify(tag)}`}</Link>
            </span>
          </div>
        );
      });

      const newest = moment(date) > moment().subtract(29, 'days');
      const oldest = moment(date) < moment().subtract(29, 'days');
      const timeago = moment(date).fromNow();

      return (
        <li key={slug} className={`post`}>
          <article>

            {externalLink ? (
              <h2 className="title">
                <Fa icon={faExternalLinkAlt} color="gray" /> <a href={externalLink} target="_blank" rel="noopener noreferrer">{title}</a>
              </h2>
            ) : (
              <h2 className="title">
                <Link to={slug}>{title}</Link>
              </h2>
            )}
            
            <div className="info">
              <div className="date-wrap">
                <span className="info-dot">
                  <Fa icon={faCalendarAlt} color="gray" />
                </span>
                {newest && <span className="date">{timeago}</span>}
                {oldest && <span className="date">{date}</span>}
                {update ? (
                  <span className="update" style={{ color: '#8c7800' }}>
                    &nbsp;{`Updated ${update}`}
                  </span>
                ) : null}
                <span className="info-dot">
                  <Fa icon={faEye} color="gray" />
                </span>
                <span className="date">{timeToRead} min read</span>
              </div>
              {categories.length && categories[0] !== 'undefined' ? (
                <span className="info-dot">
                  <Fa icon={faFolderOpen} color="gray" />
                </span>
              ) : (
                <span className="info-dot">
                  <Fa icon={faFolderOpen} color="gray" />
                </span>
              )}
              <ul className="tag-list">{mapCategory}</ul>
            </div>
            <span className="excerpt">{excerpt}</span>
            <div className="info">
              {tags.length && tags[0] !== 'undefined' ? (
                <span className="info-dot">
                  <Fa icon={faTags} color="gray" />
                </span>
              ) : null}
              <ul className="tag-list">{mapTag}</ul>
            </div>
          </article>
        </li>
      );
    });

    setCurrentPostList((prev: JSX.Element[]) => {
      return [...prev, ...mapToList];
    });
  }, []);

  useEffect(() => {
    if (showCnt > 0 && showCnt !== 10) expendPostList(sortedPosts.slice(currentPostList.length, showCnt));
  }, [showCnt]);

  useEffect(() => {
    if (currentPostList.length) setCurrentPostList([]);

    setShowCnt((prev: number) => {
      if (prev === 10) expendPostList(sortedPosts.slice(0, 10));
      return 10;
    });

    window.addEventListener('scroll', throttleScrollHandler);

    return () => {
      window.removeEventListener('scroll', throttleScrollHandler);
    };
  }, [sortedPosts]);

  return (
    <div className="post-list">
      <ul>{currentPostList}</ul>
    </div>
  );
};

export default PostList;
