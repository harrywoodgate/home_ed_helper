
export default function PageSelector({ pageNumber, setPageNumber, numberOfPages }) {

  return (
    <div className="flex gap-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 fill-secondary_text cursor-pointer"
        onClick={() => {
          if (pageNumber === 1) {
            return;
          }
          setPageNumber((prev) => prev - 1);
        }}
      >
        <title>page-left</title>
        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
      </svg>
      <div className="flex justify-center items-center bg-darker_background w-8 h-8 text-secondary rounded-md border-border border-2 pr-[1px]">{pageNumber}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 fill-secondary_text cursor-pointer"
        onClick={() => {
          if (pageNumber === numberOfPages) {
            return;
          }
          setPageNumber((prev) => prev + 1);
        }}
      >
        <title>page-right</title>
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </div>
  );
}
