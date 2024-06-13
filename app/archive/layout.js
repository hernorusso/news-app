const ArchiveLayout = ({ archive, latest }) => (
  <>
    <main>
      <section id="archive-filter">
        <h1>News Archive</h1>
        {archive}
      </section>
      <section id="archive-latest">{latest}</section>
    </main>
  </>
);

export default ArchiveLayout;
