/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'gatsby';
import { throttle } from 'lodash';

import moment from 'moment' //Xử lý thời gian

import './postList.scss';

interface PostListProps {
  posts: any[];
}

const PostList = (props: PostListProps) => {
  const { posts } = props;
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
      const { date, title, tags } = frontmatter;
      let update = frontmatter.update;
      if (Number(update.split(',')[1]) === 1) update = null;

      const mapTag = tags.map((tag: string) => {
        if (tag === 'undefined') return;

        return (
          <div key={`${slug}-${tag}`} className="tag">
            <span>
              <Link to={`/tags#${tag}`}>{`#${tag}`}</Link>
            </span>
          </div>
        );
      });
      const newest = moment(date) > moment().subtract(1, 'months') //Tạo nhãn bài mới
      const timeago = moment(date).fromNow();                      //Time ago
      return (
        <li key={slug} className={`post`}>
          <article>
            <h2 className="title">
              <Link to={slug}>{title}</Link> {newest && (<sup>(New)</sup>)}
            </h2>
            <div className="info">
              <div className="date-wrap">
                
                <span className="date" title={date}>{timeago}</span>
                {update ? <span className="update">&nbsp;{`(Updated: ${update})`}</span> : null}
                <span className="info-dot">·</span><span className="date">{timeToRead} min read</span>
              </div>
              {tags.length && tags[0] !== 'undefined' ? <span className="info-dot">·</span> : null}
              <ul className="tag-list">{mapTag}</ul>
            </div>
            <span className="excerpt">
              <Link to={slug}>{excerpt}</Link>
            </span>
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
