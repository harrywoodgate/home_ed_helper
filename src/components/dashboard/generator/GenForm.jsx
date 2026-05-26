export default function GenForm({ setSubject, setSummary, images, handleFileChange }) {
  return (
    <>
      <label htmlFor="subject">Subject:</label>
      <select id="subject" className="w-min p-2" onChange={(e) => setSubject(e.target.value)}>
        <option value="">Select an option</option>
        <option value="Maths">Maths</option>
        <option value="English">English</option>
        <option value="Science">Science</option>
      </select>
      <label htmlFor="summary">Summary:</label>
      <input
        id="summary"
        type="text"
        className="border-black border-2 w-2/3 p-1"
        placeholder="summary here"
        onChange={(e) => setSummary(e.target.value)}
      />
      <label className="cursor-pointer border-black border-2 p-2 w-24">
        Select File
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      <div className="flex gap-x-2">
        {images.length > 0 &&
          images.map((image, i) => (
            <img
              key={i}
              src={image.base64}
              className="w-24 h-24"
              alt={image.name}
            />
          ))}
      </div>
    </>
  );
}
