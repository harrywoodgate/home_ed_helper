import { useOutletContext } from "react-router";

export default function GenForm() {
  const {
    images,
    addImage,
    deleteImage,
    subject,
    setSubject,
    summary,
    setSummary,
    date,
    setDate,
  } = useOutletContext();

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
      <div className="flex gap-x-4">
        {images.length > 0 &&
          images.map((image, i) => (
            <div className="relative" key={i}>
              <img src={image.base64} className="w-24 h-24" alt={image.name} />
              <div
                className="absolute -top-2.5 -right-1.5 bg-black px-1 text-white flex justify-center items-center text-sm rounded-full cursor-pointer"
                onClick={() => deleteImage(image.name)}
              >
                X
              </div>
            </div>
          ))}
        <label className="cursor-pointer border-black border-2 p-2 w-10 h-10 rounded-full flex items-center justify-center text-2xl">
          +
          <input
            type="file"
            accept="image/*"
            onChange={addImage}
            className="hidden"
          />
        </label>
      </div>
    </>
  );
}
