const ArchiveLayout = ({ archive, latest }) => (
  <>
    <main>
      <header>
        <h1>Archive Page</h1>
      </header>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </main>
  </>
);

export default ArchiveLayout;
