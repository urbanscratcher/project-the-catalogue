import CatalogueLoader from "./CatalogueLoader";

function CatalogueList() {
  return (
    <>
      <ol className="flex flex-col gap-5 break-words whitespace-pre-wrap">
        <CatalogueLoader />
      </ol>
    </>
  );
}

export default CatalogueList;
