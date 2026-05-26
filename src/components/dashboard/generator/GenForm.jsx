
export default function GenForm({ setInput, images, handleFileChange }) {

  return (
    <>
      <input
        type="text"
        className="border-black border-2 w-2/3"
        onChange={(e) => setInput(e.target.value)}
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
