import GenForm from "./GenForm";
import GenButtons from "./GenButtons";

export default function Generator() {

  return (
    <div className="flex justify-center">
      <div className="flex flex-col px-6 py-8 gap-y-4 items-start w-[1000px] bg-white rounded-lg">
        <div className="flex items-center gap-x-4">
          <div className="bg-background h-14 w-14 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-secondary"
            >
              <title>file-document-outline</title>
              <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Generator</h1>
            <h2 className="font-normal text-secondary_text">
              Fill in the details below to generate your report
            </h2>
          </div>
        </div>
        <GenForm />
        <GenButtons />
      </div>
    </div>
  );
}
