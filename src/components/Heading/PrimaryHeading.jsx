import { clsx } from "clsx";

export default function PrimaryHeading({ mb = "mb-8", children }) {
  return (
    <h2 className={clsx("text-2xl font-bold", mb)}>{children}</h2>
  )
}
