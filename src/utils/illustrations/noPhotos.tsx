import "./illustration.css"
import noPhotosIllustrations from "../../Assets/svgs/noPhotos.svg"

const NoPhotosIllustration = () => {
  return (
    <div className="no-photos-illustration">
      <img src={noPhotosIllustrations} alt="no photos" />
      <span>No Photos in Current Date</span>
    </div>
  )
}

export default NoPhotosIllustration
