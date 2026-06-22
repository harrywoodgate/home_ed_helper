import { useOutletContext } from "react-router";
import { useRef } from "react";

export default function GenForm() {
  const {
    images,
    selectImages,
    deleteImage,
    dropImages,
    subject,
    setSubject,
    summary,
    setSummary,
    date,
    setDate,
  } = useOutletContext();

  const fileInputRef = useRef(null);

  return (
    <>
      <div className="flex gap-x-8 w-full">
        <div className="flex flex-col gap-y-3 w-full">
          <label htmlFor="subject" className="font-medium">
            Subject
          </label>
          <div className="relative">
            <select
              id="subject"
              className="px-3 py-2 bg-white border-border border-2 rounded-md text-sm appearance-none w-full"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            >
              <option value="">Select an option</option>
              <option value="Maths">Maths</option>
              <option value="English">English</option>
              <option value="Science">Science</option>
            </select>
            <svg
              class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
              width="20"
              height="20"
              fill="#0F172A"
              viewBox="0 0 20 20"
            >
              <path d="M5 7l5 5 5-5H5z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 w-full">
          <label htmlFor="date" className="font-medium">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="h-[40px] border-border border-2 rounded-md px-3 py-2 text-sm"
          />
        </div>
      </div>
      <label htmlFor="summary" className="font-medium">
        Summary
      </label>
      <textarea
        id="summary"
        className="border-border border-2 w-full p-1 resize-none rounded-md h-[200px]"
        placeholder="Write a summary here..."
        onChange={(e) => setSummary(e.target.value)}
        rows={4}
        value={summary}
      />
      <label className="font-medium">Pictures:</label>
      <div
        className="w-full border-border border-dashed border-2 bg-background h-[150px] flex flex-col justify-center items-center gap-y-1 rounded-md cursor-pointer"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          dropImages(e);
        }}
        onClick={() => fileInputRef.current.click()}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={selectImages}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-secondary"
        >
          <title>image-plus-outline</title>
          <path d="M13 19C13 19.7 13.13 20.37 13.35 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5V13.35C20.37 13.13 19.7 13 19 13V5H5V19H13M13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H13.35C13.75 15.88 14.47 14.91 15.4 14.21L13.96 12.29M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z" />
        </svg>
        <p>Drag and drop your images here</p>
        <p className="text-secondary_text">or click to upload</p>
      </div>
      <div className="flex gap-x-4">
        {images.length > 0 &&
          images.map((image, i) => (
            <div className="relative" key={i}>
              <img
                src={image.base64}
                className="w-28 h-28 rounded"
                alt={image.name}
              />
              <div
                className="absolute top-0 right-0 bg-white w-5 h-5 text-text flex justify-center items-center text-[8px] rounded-full cursor-pointer"
                onClick={() => deleteImage(image.name)}
              >
                X
              </div>
            </div>
          ))}
        <label className="cursor-pointer border-border border-dashed border-2 bg-background w-28 h-28 flex items-center justify-center text-5xl text-secondary font-extralight rounded">
          +
          <input
            type="file"
            accept="image/*"
            onChange={selectImages}
            className="hidden"
            multiple
          />
        </label>
      </div>
    </>
  );
}
