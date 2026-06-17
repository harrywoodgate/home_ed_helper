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
  } = useOutletContext();

  return (
    <>
      <label htmlFor="subject" className="font-medium">Subject:</label>
      <select
        id="subject"
        className="w-min p-2 bg-white"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      >
        <option value="">Select an option</option>
        <option value="Maths">Maths</option>
        <option value="English">English</option>
        <option value="Science">Science</option>
      </select>
      <label htmlFor="summary" className="font-medium">Summary:</label>
      <textarea
        id="summary"
        className="border-black border-2 w-2/3 p-1 resize-none"
        placeholder="summary here"
        onChange={(e) => setSummary(e.target.value)}
        rows={4}
        value={summary}
      />
      <label className="font-medium">Pictures:</label>
      <div className="flex gap-x-4 min-h-36 min-w-36 bg-white p-4 items-center rounded-md">
        {images.length > 0 &&
          images.map((image, i) => (
            <div className="relative" key={i}>
              <img src={image.base64} className="w-24 h-24" alt={image.name} />
              <div
                className="absolute -top-2.5 -right-1.5 bg-black px-1 text-white flex justify-center items-center text-sm rounded-md cursor-pointer"
                onClick={() => deleteImage(image.name)}
              >
                X
              </div>
            </div>
          ))}
        <label className="cursor-pointer border-black border-2 p-2 w-10 h-10 rounded-full flex items-center justify-center text-lg">
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
