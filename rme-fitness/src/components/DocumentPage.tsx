import "./DocumentPage.css";
import { documents, type DocumentPath } from "./documentPages";

interface DocumentPageProps {
  path: DocumentPath;
}

function DocumentPage({ path }: DocumentPageProps) {
  const document = documents[path];

  return (
    <main className="documentPage">
      <section className="documentHero">
        <a className="documentBackLink" href="/">
          На главную
        </a>
        <p className="documentEyebrow">RME FITNESS</p>
        <h1>{document.title}</h1>
        <p className="documentUpdatedAt">{document.updatedAt}</p>
      </section>

      <article className="documentContent">
        <p className="documentText">{document.content}</p>
      </article>
    </main>
  );
}

export default DocumentPage;
