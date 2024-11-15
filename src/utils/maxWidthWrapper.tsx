import type { ReactNode } from "react"
import clsx from "clsx"

interface MaxWidthWrapperProps {
  className?: string
  children: ReactNode
}

// const MaxWidthWrapper = ({ className = "", children }) => {
//   return (
//     <div className={clsx("max-width-container", className)}>{children}</div>
//   )
// }

// export default MaxWidthWrapper
export const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={clsx("max-width-container", className)}>{children}</div>
  )
}
