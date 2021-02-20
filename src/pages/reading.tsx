import * as React from 'react';

import { Box, Timeline, StyledOcticon } from '@primer/components';
import { BookIcon, SmileyIcon, HeartIcon, CheckIcon, PinIcon } from '@primer/octicons-react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Bio from '../components/Bio';

const Reading = () => (
  <Layout>
    <SEO title="My reading list" />
    <div className="index-wrap">
      <Bio />
      <div className="index-post-list-wrap">
        <div className="blog-post-container">
          <div className="blog-post">
            <h1 className="blog-post-title">My reading list</h1>
            <Timeline>
              <Timeline.Item>
                <Timeline.Badge bg="purple.5">
                  <StyledOcticon icon={SmileyIcon} color="white" />
                </Timeline.Badge>
                <Timeline.Body>
                  I like to read books in <em>biography</em>, <em>history</em> and <em>psychology</em>.
                  <Box bg="#fff3cd" p={2} mt={0}>
                    <strong>Note:</strong>&nbsp;&nbsp;&nbsp;
                    <StyledOcticon icon={BookIcon} color="black.5" /> I'm reading&nbsp;&nbsp;
                    <StyledOcticon icon={HeartIcon} color="pink.5" /> Favorious&nbsp;&nbsp;
                    <StyledOcticon icon={PinIcon} color="blue.5" /> My choice&nbsp;&nbsp;
                    <StyledOcticon icon={CheckIcon} color="green.5" /> Finished
                  </Box>
                </Timeline.Body>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Badge>
                  <StyledOcticon icon={BookIcon} color="black.5" />
                </Timeline.Badge>
                <Timeline.Body>No reading book yet.</Timeline.Body>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Badge>
                  <StyledOcticon icon={HeartIcon} color="pink.5" />
                </Timeline.Badge>
                <Timeline.Body>Storytelling with data - Kể chuyện thông qua dữ liệu.</Timeline.Body>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Badge>
                  <StyledOcticon icon={PinIcon} color="blue.5" />
                </Timeline.Badge>
                <Timeline.Body>Storytelling with data - Kể chuyện thông qua dữ liệu.</Timeline.Body>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Badge>
                  <StyledOcticon icon={CheckIcon} color="green.5" />
                </Timeline.Badge>
                <Timeline.Body>
                  Tư Duy Đạo Đức - Vì sao những người tốt bị chia rẽ bởi chính trị và tôn giáo.
                </Timeline.Body>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Badge>
                  <StyledOcticon icon={CheckIcon} color="green.5" />
                </Timeline.Badge>
                <Timeline.Body>Harry Potter (7 books) — J.K. Rowling.</Timeline.Body>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Reading;
