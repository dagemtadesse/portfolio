import DownloadIcon from "../icons/DownloadIcon"

const DownloadButton = () => {
  return (
    <button className="border-2 border-white bg-white/10 rounded-lg px-6 py-2 flex items-center text-white" >
      <span>Download</span>
      <span className="ml-2">
        <DownloadIcon />
      </span>
    </button>
  )
}

export default DownloadButton
