const path = require(`path`);
const { createFilePath } = require('gatsby-source-filesystem');

const config = require('./_config');

// Create Pages
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/Post.tsx`);
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              update(formatString: "YYYY-MM-DD")
              date(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const getSeries = target => {
    const splitedSlug = target.split('_');
    if (splitedSlug.length >= 3) return 0;

    const seriesNum = splitedSlug[splitedSlug.length - 1].split('/').join('');
    const isNum = !/[^0-9]/g.test(seriesNum);

    if (isNum) return parseInt(seriesNum, 10);
    return 0;
  };

  const { edges } = result.data.allMarkdownRemark;

  edges.forEach(({ node }) => {
    const { fields, frontmatter } = node;
    const { slug } = fields;
    const { date, update } = frontmatter;

    // Series
    let filteredEdges = [];
    const series = [];

    if (getSeries(slug)) {
      filteredEdges = edges.filter(e => {
        const fSlug = e.node.fields.slug;
        const splitedFSlug = fSlug.split('_');
        if (splitedFSlug.length >= 3) return false;

        if (slug.split('_').length > 1 && slug.split('_')[0] === splitedFSlug[0]) {
          return true;
        }
      });

      if (filteredEdges.length) {
        for (const e of filteredEdges) {
          const seriesNum = getSeries(e.node.fields.slug);

          if (seriesNum) {
            series.push({
              slug: e.node.fields.slug,
              title: e.node.frontmatter.title,
              num: seriesNum,
            });
          }
        }

        series.sort((a, b) => {
          return a.num - b.num;
        });
      }
    }

    createPage({
      path: slug,
      component: blogPostTemplate,
      context: { slug, series, lastmod: update.includes('0001') ? date : update },
    });
  });
};

// Create Nodes
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });

    const rewriteSlug = slug => {

      if (slug.match(/\//g).length > 2) {
        let tempStr = slug.split('/');
        slug = `/${tempStr[tempStr.length - 2]}/`;
      }


      const dayRegExp = /\/(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])-/;
      if (slug.match(dayRegExp)) {
        slug = '/' + slug.replace(dayRegExp, '');
      }

      return slug;
    };

    const rewriteNode = node => {
      if (node.frontmatter.title.includes(`"`)) {
        console.log('');
        console.warn(`
It is not recommended to include " in the title.
- file: ${node.fileAbsolutePath}
- title: ${node.frontmatter.title}

        `);
      }


      if (!node.frontmatter.keywords) {
        node.frontmatter.keywords = [config.title, config.author];
      }


      if (!node.frontmatter.tags || node.frontmatter.tags === '') {
        node.frontmatter.tags = ['undefined'];
      }

      else if (typeof node.frontmatter.tags === 'string') {
        node.frontmatter.tags = [node.frontmatter.tags];
      }


      if (node.frontmatter.date.includes('+')) {
        const date = new Date(node.frontmatter.date.split('+')[0]);
        node.frontmatter.date = date;
      } else {
        node.frontmatter.date = new Date(node.frontmatter.date);
      }

      if (!node.frontmatter.update) {
        node.frontmatter.update = '0001-01-01T00:00:00.000Z';
      }

      return node;
    };

    const newSlug = rewriteSlug(slug);
    const newNode = rewriteNode(node);

    createNodeField({
      name: `slug`,
      node: newNode,
      value: newSlug,
    });
  }
};
