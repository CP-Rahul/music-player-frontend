import usePlaylistForm from "../hooks/usePlaylistForm"; 

const PlaylistForm = ({ onClose, playlistId, refresh }) => {
  const { selectedSongs, handleSelect, handleSubmit, songs } = usePlaylistForm(playlistId, onClose, refresh);

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-0">
        <div className="flex flex-col p-4 border-b">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900">
              Select Songs
            </h3>
            <button
              className="text-gray-400 hover:text-gray-600"
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="w-full flex flex-col h-64 overflow-y-auto p-2">
            {songs?.map((song) => (
              <div
                key={song._id}
                className={`my-2 gap-x-4 rounded-lg cursor-pointer flex ${
                  selectedSongs?.includes(song) ? "bg-green-600" : ""
                }`}
                onClick={() => handleSelect(song)}
              >
                <img
                  src={song?.image}
                  alt="image"
                  className="w-16 h-full rounded"
                />
                <div className="my-auto text-xl">{song?.title}</div>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="px-8 py-2 text-center bg-green-500 rounded text-white my-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaylistForm;

