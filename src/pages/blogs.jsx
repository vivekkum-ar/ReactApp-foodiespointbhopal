import React from "react";
import "./basicCss.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, Outlet } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BlogTop from "../components/BlogTop";
import Footer from "../components/footer";
import BlogRBar from "../components/BlogRBar";

function Blogs() {
  return (
    <>
    <main className="container text-dark mt-3">
      <BlogTop />

      <div className="row">
      {/* Blog begins here */}
        <div className="col-md-8 ">
          <h3 className="blogs-page-heading pb-4 mb-4 fs-3 fst-italic border-bottom">
            From the Firehose
          </h3>
          <article className="blog-post">
            <h2 className="blogs-page-heading blog-post-title mb-1">
              Sample blog post
            </h2>
            <p className="blog-post-meta">
              January 1, 2021 by <a href="#">Mark</a>
            </p>
            <p className=" border-bottom pb-2 mb-3">
              This blog post shows a few different types of content that’s
              supported and styled with Bootstrap. Basic typography, lists,
              tables, images, code, and more are all supported as expected.
            </p>
            {/* <hr /> */}
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content. We'll repeat it often to
              keep the demonstration flowing, so be on the lookout for this
              exact same string of text.
            </p>
            <h2 className="blogs-page-heading fs-3">Blockquotes</h2>
            <p>This is an example blockquote in action:</p>
            <blockquote className="blockquote">
              <p>Quoted text goes here.</p>
            </blockquote>
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content. We'll repeat it often to
              keep the demonstration flowing, so be on the lookout for this
              exact same string of text.
            </p>
            <h3 className="blogs-page-heading fs-3">Example lists</h3>
            <p>
              This is some additional paragraph placeholder content. It's a
              slightly shorter version of the other highly repetitive body text
              used throughout. This is an example unordered list:
            </p>
            <p>And this is an ordered list:</p>
            <ol style={{ listStyleType: "decimal" }}>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ol>
            <p>And this is a definition list:</p>
            <dl>
              <dt>HyperText Markup Language (HTML)</dt>
              <dd>
                The language used to describe and define the content of a Web
                page
              </dd>
              <dt>Cascading Style Sheets (CSS)</dt>
              <dd>Used to describe the appearance of Web content</dd>
              <dt>JavaScript (JS)</dt>
              <dd>
                The programming language used to build advanced Web sites and
                applications
              </dd>
            </dl>
            <h2 className="blogs-page-heading ">Inline HTML elements</h2>
            <p>
              HTML defines a long list of available inline tags, a complete list
              of which can be found on the{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
                Mozilla Developer Network
              </a>
              .
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <strong>To bold text</strong>, use{" "}
                <code className="language-plaintext highlighter-rouge">
                  &lt;strong&gt;
                </code>
                .
              </li>
              <li>
                <em>To italicize text</em>, use{" "}
                <code className="language-plaintext highlighter-rouge">
                  &lt;em&gt;
                </code>
                .
              </li>
              <li>
                Abbreviations, like{" "}
                <abbr title="HyperText Markup Language">HTML</abbr> should use{" "}
                <code className="language-plaintext highlighter-rouge">
                  &lt;abbr&gt;
                </code>
                , with an optional{" "}
                <code className="language-plaintext highlighter-rouge">
                  title
                </code>{" "}
                attribute for the full phrase.
              </li>
              <li>
                Citations, like <cite>— Mark Otto</cite>, should use{" "}
                <code className="language-plaintext highlighter-rouge">
                  &lt;cite&gt;
                </code>
                .
              </li>
              <li>
                <del>Deleted</del> text should use{" "}
                <code className="language-plaintext highlighter-rouge">
                  &lt;del&gt;
                </code>{" "}
                and <ins>inserted</ins> text should use{" "}
                <code className="language-plaintext highlighter-rouge">
                  &lt;ins&gt;
                </code>
                .
              </li>
              <li>
                Superscript <sup>text</sup> uses{" "}
                <code className="language-plaintext highlighter-rouge">
                  &lt;sup&gt;
                </code>{" "}
                and subscript <sub>text</sub> uses{" "}
                <code className="language-plaintext highlighter-rouge">
                  &lt;sub&gt;
                </code>
                .
              </li>
            </ul>
            <p>
              Most of these elements are styled by browsers with few
              modifications on our part.
            </p>
            <h2 className="blogs-page-heading ">Heading</h2>
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content. We'll repeat it often to
              keep the demonstration flowing, so be on the lookout for this
              exact same string of text.
            </p>
            <h3 className="blogs-page-heading ">Sub-heading</h3>
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content. We'll repeat it often to
              keep the demonstration flowing, so be on the lookout for this
              exact same string of text.
            </p>
            <pre>
              <code>Example code block</code>
            </pre>
            <p>
              This is some additional paragraph placeholder content. It's a
              slightly shorter version of the other highly repetitive body text
              used throughout.
            </p>
          </article>
          <article className="blog-post">
            <h2 className="blogs-page-heading blog-post-title mb-1">
              Another blog post
            </h2>
            <p className="blog-post-meta">
              December 23, 2020 by <a href="#">Jacob</a>
            </p>
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content. We'll repeat it often to
              keep the demonstration flowing, so be on the lookout for this
              exact same string of text.
            </p>
            <blockquote>
              <p>
                Longer quote goes here, maybe with some{" "}
                <strong>emphasized text</strong> in the middle of it.
              </p>
            </blockquote>
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content. We'll repeat it often to
              keep the demonstration flowing, so be on the lookout for this
              exact same string of text.
            </p>
            <h3 className="blogs-page-heading ">Example table</h3>
            <p>And don't forget about tables in these posts:</p>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Upvotes</th>
                  <th>Downvotes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alice</td>
                  <td>10</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>Bob</td>
                  <td>4</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Charlie</td>
                  <td>7</td>
                  <td>9</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Totals</td>
                  <td>21</td>
                  <td>23</td>
                </tr>
              </tfoot>
            </table>
            <p>
              This is some additional paragraph placeholder content. It's a
              slightly shorter version of the other highly repetitive body text
              used throughout.
            </p>
          </article>
          <article className="blog-post">
            <h2 className="blogs-page-heading blog-post-title mb-1">
              New feature
            </h2>
            <p className="blog-post-meta">
              December 14, 2020 by <a href="#">Chris</a>
            </p>
            <p>
              This is some additional paragraph placeholder content. It has been
              written to fill the available space and show how a longer snippet
              of text affects the surrounding content. We'll repeat it often to
              keep the demonstration flowing, so be on the lookout for this
              exact same string of text.
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ul>
            <p>
              This is some additional paragraph placeholder content. It's a
              slightly shorter version of the other highly repetitive body text
              used throughout.
            </p>
          </article>
          {/* <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary rounded-pill" href="#">Older</a>
              <a className="btn btn-outline-secondary rounded-pill disabled">Newer</a>
            </nav> */}
        </div>

        {/* Blog ends here */}
        
        <BlogRBar />
      </div>
    </main>
    <Footer/>
    </>
  );
}

export default Blogs;
