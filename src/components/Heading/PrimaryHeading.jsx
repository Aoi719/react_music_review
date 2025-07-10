import { clsx } from "clsx";

export default function PrimaryHeading({ mb = "mb-8", children }) {
  return (
    <h2 className={clsx("text-gray-900 border-solid border-gray-900 border-b text-2xl font-bold pb-2", mb)}>{children}</h2>
  )
}
