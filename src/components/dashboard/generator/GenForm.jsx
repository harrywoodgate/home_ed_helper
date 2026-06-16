export default function GenForm({
  setSubject,
  subject,
  summary,
  setSummary,
  images,
  addImage,
  deleteImage,
}) {
  return (
    <>
      <label htmlFor="subject">Subject:</label>
      <select
        id="subject"
        className="w-min p-2"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
      >
        <option value="">Select an option</option>
        <option value="Maths">Maths</option>
        <option value="English">English</option>
        <option value="Science">Science</option>
      </select>
      <label htmlFor="summary">Summary:</label>
      <textarea
        id="summary"
        className="border-black border-2 w-2/3 p-1 resize-none"
        placeholder="summary here"
        onChange={(e) => setSummary(e.target.value)}
        rows={4}
        value={summary}
      />
      <label>Pictures:</label>
      <div className="flex gap-x-4">
        {images.length > 0 &&
          images.map((image, i) => (
            <div className="relative" key={i}>
              <img src={image.base64} className="w-24 h-24" alt={image.name} />
              <div className="absolute -top-2.5 -right-1.5 bg-black px-1 text-white flex justify-center items-center text-sm rounded-md cursor-pointer"
              onClick={() => deleteImage(image.name)}>
                X
              </div>
            </div>
          ))}
        <label className="cursor-pointer border-black border-2 p-2 w-min h-min">
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
