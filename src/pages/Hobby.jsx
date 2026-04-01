import { useState, useEffect } from "react";
import "./Hobby.css";

const sections = [
  { id: "what", label: "What" },
  { id: "who", label: "Who" },
  { id: "when", label: "When" },
  { id: "where", label: "Where" },
  { id: "how", label: "How" },
  { id: "why", label: "Why" },
  { id: "ai", label: "AI Prompts" },
];

export default function Hobby() {
  const [activeSection, setActiveSection] = useState("what");

  useEffect(() => {
    document.title = "Oil Painting | Tyler Bland";
  }, []);

  return (
    <div className="hobby-page">
      <header className="hobby-header">
        <h1>Oil Painting</h1>
        <nav>
          {sections.map((section, index) => (
            <span key={section.id}>
              <a
                href={`#${section.id}`}
                className={activeSection === section.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(section.id);
                }}
              >
                {section.label}
              </a>
              {index < sections.length - 1 && <span className="divider">◆</span>}
            </span>
          ))}
        </nav>
      </header>

      <main className="hobby-main">
        {/* WHAT */}
        {activeSection === "what" && (
          <section>
            <h2>What is Oil Painting?</h2>
            <figure>
              <img src="/images/hobby/palette.jpg" alt="An oil painting palette covered in vibrant mixed colors" />
              <figcaption>What a painter's palette often looks like in the middle of their work</figcaption>
            </figure>
            <p>
              Oil painting is one of those art forms that's hard not to fall in love
              with once you really get into it. At its core, it's a technique where
              pigments are mixed with a drying oil, often linseed oil, to create
              paint that you then apply to a surface, usually canvas, wood, or linen.
            </p>
            <p>
              Unlike acrylics or watercolors, oil painting can take days to dry
              (unless you mix your paint in a fast-drying solvent). This means you
              can blend colors directly on the canvas, go back, and make changes if
              you wanted to. It is also one of the oldest mediums to exist, dating
              back to <strong>650 AD</strong>.
            </p>
            <h3>Properties of Oil Paint</h3>
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Drying time</td><td>Days to weeks (touch-dry); months to fully cure</td></tr>
                <tr><td>Binder</td><td>Linseed, walnut, or poppy oil</td></tr>
                <tr><td>Surfaces</td><td>Canvas, wood panel, or paper (must be primed)</td></tr>
                <tr><td>Finish</td><td>Matte to high gloss depending on medium used</td></tr>
              </tbody>
            </table>
          </section>
        )}

        {/* WHO */}
        {activeSection === "who" && (
          <section>
            <h2>Who's Painting?</h2>
            <figure>
              <img src="/images/hobby/artist.jpg" alt="An artist painting at a wooden easel in a bright studio" />
              <figcaption>Art doesn't have to be stressful if you don't want it to be</figcaption>
            </figure>
            <p>
              Oil painting belongs to everyone. Hobbyists, students, or
              professionals, anyone could find enjoyment in the craft. Art is pretty
              cool in that there really isn't any barrier to entry. Everyone makes
              bad art, at least at first, so theoretically anyone could approach it.
              Here's a little about who I am and why it stuck with me.
            </p>
            <p>
              I picked up oil painting 10 years ago when I was 16. I always thought
              I was going to be an artist. I look back on my journey with art
              fondly, if not with a bit of sadness. I never really believed in
              myself as much as a successful artist should. Because of that, I
              didn't pursue it as strongly as I probably would have. When I entered
              college, I originally picked art as my major, but I managed to
              convince myself (with the help of others) that art will never make me
              a living. So, I switched majors. Very recently I started approaching
              it again and I remember why I loved it so much. I mostly paint
              landscapes.
            </p>
            <h3>My favorite Painters</h3>
            <ul>
              <li><strong>Robert Hills</strong> — A founding member of the Society of Painters in Water Colours</li>
              <li><strong>Eugène Carrière</strong> — A French Symbolist painter known for his monochromatic, smokey style</li>
              <li><strong>George Butler</strong> — A British watercolor painter known for his depictions of the English countryside</li>
              <li><strong>Albert Bierstadt</strong> — A German-American landscape painter that mostly depicts the American West</li>
            </ul>
            <blockquote>
              "I dream of painting and then I paint my dream."
              <cite>— Vincent van Gogh</cite>
            </blockquote>
          </section>
        )}

        {/* WHEN */}
        {activeSection === "when" && (
          <section>
            <h2>When's a good time to paint?</h2>
            <figure>
              <img src="/images/hobby/morning-light.jpg" alt="A sunlit studio in the early morning with a canvas on an easel" />
              <figcaption>While lighting is important, it's more important to stay consistent</figcaption>
            </figure>
            <p>
              The best time to paint is whenever you can actually make the time.
              That'll look different for everyone. That said, a lot of painters find
              that the morning light is softer and more consistent. Some people
              swear by evening painting sessions.
            </p>
            <h3>Ideal Conditions by Time of Day</h3>
            <table>
              <thead>
                <tr><th>Time of Day</th><th>Light Quality</th><th>Best For</th></tr>
              </thead>
              <tbody>
                <tr><td>Early morning (7–10 AM)</td><td>Soft, warm, diffused</td><td>Landscapes and still life with delicate tones</td></tr>
                <tr><td>Midday (11 AM–2 PM)</td><td>Bright, harsh, high contrast</td><td>Bold color studies; plein air on overcast days</td></tr>
                <tr><td>Afternoon (3–6 PM)</td><td>Warm golden light</td><td>Portraits and warm-toned landscapes</td></tr>
                <tr><td>Evening (studio)</td><td>Artificial, consistent</td><td>Detail work and final finishing layers</td></tr>
              </tbody>
            </table>
          </section>
        )}

        {/* WHERE */}
        {activeSection === "where" && (
          <section>
            <h2>Where are we painting?</h2>
            <figure>
              <img src="/images/hobby/studio.jpg" alt="A bright artist's studio with canvases stacked along the wall" />
              <figcaption>Whether it's in a studio or in public, a place where you can focus is often best</figcaption>
            </figure>
            <p>
              Oil painting can happen almost anywhere. The subject of the work is
              what often dictates where it takes place, but there are several other
              factors that matter when determining an ideal spot for painting.
            </p>
            <h3>Indoor Studio</h3>
            <p>
              A home studio gives full control over lighting, temperature, and
              layout. North-facing windows are traditionally preferred for their
              consistent, cool, indirect light.
            </p>
            <h3>Plein Air (Outdoors)</h3>
            <p>
              Plein air painting, or working directly from nature, has a deep
              tradition in oil painting, championed by the 19th-century Impressionists.
            </p>
            <h3>Some of my favorite spots</h3>
            <ul>
              <li><strong>Lake Norman State Park</strong> — Reflective water, dense tree lines, open skies</li>
              <li><strong>Crowders Mountain</strong> — Dramatic rock faces and wide panoramic views</li>
              <li><strong>Freedom Park</strong> — Urban green space with varied seasonal subjects</li>
              <li><strong>The Mint Museum</strong> — Inspiration from collections; active local art community</li>
              <li><strong>NoDa Arts District</strong> — Street murals and textured walls</li>
            </ul>
          </section>
        )}

        {/* HOW */}
        {activeSection === "how" && (
          <section>
            <h2>How does one paint?</h2>
            <figure>
              <img src="/images/hobby/materials.jpg" alt="Oil painting supplies laid out" />
              <figcaption>It makes things easier when you have all the tools for a job</figcaption>
            </figure>
            <p>
              Getting started with oil painting requires a small but specific set of
              materials and a basic understanding of a few foundational techniques.
            </p>
            <h3>Essential Materials</h3>
            <table>
              <thead>
                <tr><th>Category</th><th>Item</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>Surface</td><td>Stretched canvas or wood panel</td><td>Must be primed with gesso first</td></tr>
                <tr><td>Paint</td><td>Artist-grade oil paints</td><td>Start with 6–8 colors</td></tr>
                <tr><td>Brushes</td><td>Hog bristle and soft synthetic</td><td>Flats, rounds, and filberts</td></tr>
                <tr><td>Medium</td><td>Linseed oil or odorless mineral spirits</td><td>Thins paint and adjusts working time</td></tr>
                <tr><td>Palette</td><td>Glass, wood, or disposable pad</td><td>Glass is easiest to clean</td></tr>
                <tr><td>Solvent</td><td>Odorless mineral spirits (OMS)</td><td>For brush cleaning</td></tr>
              </tbody>
            </table>
            <h3>The Basic Painting Process</h3>
            <ol>
              <li><strong>Tone the canvas</strong> — Apply a thin wash of color</li>
              <li><strong>Sketch the composition</strong> — Loose charcoal or diluted paint</li>
              <li><strong>Block in shadows</strong> — Establish the darkest values first</li>
              <li><strong>Build up midtones</strong> — Work from dark to light</li>
              <li><strong>Add highlights and detail</strong> — Thicker paint applied last</li>
              <li><strong>Varnish when cured</strong> — Apply after 6–12 months of drying</li>
            </ol>
          </section>
        )}

        {/* WHY */}
        {activeSection === "why" && (
          <section>
            <h2>Why bother making art?</h2>
            <figure>
              <img src="/images/hobby/finished-painting.jpg" alt="A finished oil painting of a landscape" />
              <figcaption>Art is one of those things that makes life a little better</figcaption>
            </figure>
            <p>
              There are many practical reasons to pick up oil painting, and just as
              many deeply personal ones. However, I think it's important to
              recognize the question, why should art even exist? The question sounds
              provocative but is really just confused. It assumes art is a luxury
              bolted into our lives, something we could remove and still have the
              same life, only leaner.
            </p>
            <p>
              That said, anyone who enjoys art and finds the process of making it
              enjoyable should do so without reservations or fear of what others think.
            </p>
            <blockquote>
              "Every artist dips his brush in his own soul, and paints his own nature into his pictures."
              <cite>— Henry Ward Beecher</cite>
            </blockquote>
          </section>
        )}

        {/* AI PROMPTS */}
        {activeSection === "ai" && (
          <section>
            <h2>AI Prompts</h2>
            <p>AI Model: <strong>Claude Sonnet 4.6</strong> (<code>claude-sonnet-4-6</code>) by Anthropic</p>
            <ol>
              <li><em>"Today we will be making a website for an assignment..."</em> — Created the hobby folder and built index.html</li>
              <li><em>(Same prompt)</em> — Built six section-based pages with JavaScript to show one section at a time</li>
              <li><em>"I would like all of the images to be the same size"</em> — Standardized all image display sizes to 600px</li>
              <li><em>"Can you place this script where appropriate?"</em> — Added the HTMLInclude script</li>
              <li><em>"Lint.page image size errors"</em> — Resized all six images down to 1200px wide</li>
              <li><em>"Warning: Heading should not be qualified"</em> — Fixed CSS selectors</li>
              <li><em>"Can we verify requirements?"</em> — Reviewed all criteria</li>
              <li><em>"Is there any redundant code?"</em> — Removed unused CSS rules</li>
              <li><em>"I would like to add a favicon"</em> — Added favicon to the head</li>
              <li><em>"Can you make an empty section called AI Prompts"</em> — Added this section</li>
            </ol>
          </section>
        )}
      </main>
    </div>
  );
}
