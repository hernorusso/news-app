const ArchiveLayout = ({ archive, latest }) => (
  <>
    <main>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </main>
  </>
);

export default ArchiveLayout;
